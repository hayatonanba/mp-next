import { describe, it, expect } from "vitest";
import { cn } from "@/lib/utils";

describe("cn (class name merge)", () => {
  it("merges simple classes", () => {
    expect(cn("p-2", "text-sm", "font-bold")).toBe("p-2 text-sm font-bold");
  });

  it("merges and resolves conflicting Tailwind classes (last wins)", () => {
    expect(cn("p-2", "p-4")).toBe("p-4");
    expect(cn("text-sm", "text-lg")).toBe("text-lg");
  });

  it("ignores falsy values and nested arrays/objects", () => {
    expect(
      cn(
        "text-sm",
        undefined,
        null,
        false,
        ["mt-2", false && "mt-4"],
        { hidden: false, block: true }
      )
    ).toBe("text-sm mt-2 block");
  });
});

