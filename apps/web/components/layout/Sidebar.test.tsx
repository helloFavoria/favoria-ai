import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import Sidebar from "./Sidebar";

describe("Sidebar", () => {
  it("renders the main dashboard navigation sections", () => {
    const html = renderToStaticMarkup(
      <Sidebar isOpen={true} onClose={() => undefined} isDark={false} />,
    );

    expect(html).toContain("Overview");
    expect(html).toContain("Products");
    expect(html).toContain("Insights");
  });
});
