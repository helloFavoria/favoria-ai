import "./globals.css";
import type { Metadata } from "next";
import { AuthProvider } from "@/providers/auth-provider";

export const metadata: Metadata = {
  title: "Favoria AI",
  description: "Affiliate AI Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
