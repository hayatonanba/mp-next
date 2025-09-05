import { describe, it, expect, vi } from "vitest";
import { meditationBenefits } from "@/lib/data/meditation-benefits";

vi.mock("@/components/benefitPage/BenefitPage", () => ({ default: () => null }));
vi.mock("@/app/not-found", () => ({ default: () => null }));

describe.skip("benefit/[slug] route helpers", () => {
  it("generateStaticParams returns all slugs from data", async () => {
    const mod = await import("./page");
    const params = await mod.generateStaticParams();
    const slugs = params.map((p: { slug: string }) => p.slug);
    expect(new Set(slugs).size).toBe(meditationBenefits.length);
    expect(slugs.sort()).toEqual(meditationBenefits.map((b) => b.id).sort());
  });

  it("generateMetadata returns title/description for a valid slug", async () => {
    const mod = await import("./page");
    const sample = meditationBenefits[0];
    const meta = await mod.generateMetadata({ params: Promise.resolve({ slug: sample.id }) });
    expect(meta.title).toContain(sample.title);
    expect(meta.description).toBe(sample.description);
  });

  it("generateMetadata falls back when slug not found", async () => {
    const mod = await import("./page");
    const meta = await mod.generateMetadata({ params: Promise.resolve({ slug: "__missing__" }) });
    expect(meta.title).toBe("Benefit Not Found");
  });
});
