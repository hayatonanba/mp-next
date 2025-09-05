import { describe, it, expect } from "vitest";
import { meditationBenefits } from "@/lib/data/meditation-benefits";

describe("meditationBenefits data integrity", () => {
  it("is non-empty", () => {
    expect(meditationBenefits.length).toBeGreaterThan(0);
  });

  it("has unique non-empty ids", () => {
    const ids = meditationBenefits.map((b) => b.id);
    const unique = new Set(ids);
    expect(unique.size).toBe(ids.length);
    expect(ids.every((id) => typeof id === "string" && id.trim().length > 0)).toBe(true);
  });

  it("has required fields populated", () => {
    const allValid = meditationBenefits.every((b) =>
      typeof b.title === "string" && b.title.trim() &&
      typeof b.description === "string" && b.description.trim() &&
      typeof b.image === "string" && b.image.trim() &&
      typeof b.backgroundImage === "string" && b.backgroundImage.trim() &&
      typeof b.musicUrl === "string" && b.musicUrl.trim()
    );
    expect(allValid).toBe(true);
  });

  it("defines a positive breathing pattern and non-empty content", () => {
    const ok = meditationBenefits.every((b) => {
      const { inhale, hold, exhale } = b.breathingPattern;
      return (
        inhale > 0 && hold >= 0 && exhale > 0 &&
        typeof b.content.intro === "string" && b.content.intro.trim().length > 0 &&
        Array.isArray(b.content.benefits) && b.content.benefits.length > 0 &&
        b.content.benefits.every((s) => typeof s === "string" && s.trim().length > 0) &&
        typeof b.content.instructions === "string" && b.content.instructions.trim().length > 0
      );
    });
    expect(ok).toBe(true);
  });
});

