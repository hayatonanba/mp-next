import NotFound from "@/app/not-found";
import BenefitPage from "@/components/benefitPage/BenefitPage";
import { meditationBenefits } from "@/lib/data/meditation-benefits";

type BenefitParams = {
  slug: string;
}

interface BenefitProps {
  params: Promise<BenefitParams>
}

export default async function Benefit({ params }: BenefitProps) {
  const { slug } = await params;
  const benefit = meditationBenefits.find((b) => b.id === slug);

  if (!benefit) {
    return <NotFound />;
  }

  return <BenefitPage benefit={benefit} />;
}

export async function generateStaticParams() {
  return meditationBenefits.map((benefit) => ({
    slug: benefit.id,
  }));
}

export async function generateMetadata({ params }: BenefitProps) {
  const { slug } = await params;
  const benefit = meditationBenefits.find((b) => b.id === slug);

  if (!benefit) {
    return {
      title: "Benefit Not Found",
    };
  }

  return {
    title: `${benefit.title} - Mindful Moments`,
    description: benefit.description,
  };
}
