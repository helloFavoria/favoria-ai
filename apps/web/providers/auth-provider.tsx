"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { createClient } from "@/lib/supabase/client";

export type AuthUser = {
  id: string;
  email?: string | null;
};

export type AuthSession = {
  access_token?: string | null;
  expires_at?: number | null;
};

export type AuthContextValue = {
  user: AuthUser | null;
  session: AuthSession | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  refresh: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [session, setSession] = useState<AuthSession | null>(null);
  const [loading, setLoading] = useState(true);
  const supabase = useMemo(() => createClient(), []);

  const refresh = useCallback(async () => {
    setLoading(true);

    const {
      data: { session: nextSession },
      error,
    } = await supabase.auth.getSession();

    if (!error) {
      const nextUser = (await supabase.auth.getUser()).data.user;
      setSession(nextSession as AuthSession | null);
      setUser(nextUser ? { id: nextUser.id, email: nextUser.email } : null);
    }

    setLoading(false);
  }, [supabase]);

  useEffect(() => {
    let active = true;

    const initialize = async () => {
      setLoading(true);
      const {
        data: { session: nextSession },
        error,
      } = await supabase.auth.getSession();

      if (!active) {
        return;
      }

      if (!error) {
        const nextUser = (await supabase.auth.getUser()).data.user;
        setSession(nextSession as AuthSession | null);
        setUser(nextUser ? { id: nextUser.id, email: nextUser.email } : null);
      }

      setLoading(false);
    };

    void initialize();

    return () => {
      active = false;
    };
  }, [supabase]);

  const login = useCallback(
    async (email: string, password: string) => {
      setLoading(true);
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (!error) {
        setSession(data.session as AuthSession | null);
        setUser(
          data.user ? { id: data.user.id, email: data.user.email } : null,
        );
      }

      setLoading(false);
      if (error) {
        throw error;
      }
    },
    [supabase],
  );

  const logout = useCallback(async () => {
    setLoading(true);
    await supabase.auth.signOut();
    setUser(null);
    setSession(null);
    setLoading(false);
  }, [supabase]);

  const value = useMemo<AuthContextValue>(
    () => ({ user, session, loading, login, logout, refresh }),
    [user, session, loading, login, logout, refresh],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
}
