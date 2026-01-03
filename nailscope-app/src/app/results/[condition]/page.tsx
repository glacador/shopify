import { notFound } from "next/navigation";
import { Metadata } from "next";
import { CONDITIONS, CONDITION_CODES, Condition } from "@/lib/conditions";
import ResultsPageClient from "./ResultsPageClient";

interface PageProps {
  params: Promise<{ condition: string }>;
}

export function generateStaticParams() {
  return CONDITION_CODES.map((condition) => ({
    condition,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { condition: conditionSlug } = await params;
  const condition = CONDITIONS[conditionSlug];

  if (!condition) {
    return {
      title: "Results Not Found | NailScope",
    };
  }

  return {
    title: `${condition.name} | NailScope Results`,
    description: condition.intro,
    openGraph: {
      title: `${condition.name} | NailScope Results`,
      description: condition.intro,
      url: `https://nailscope.org/results/${conditionSlug}`,
      siteName: "NailScope",
      type: "website",
    },
  };
}

export default async function ResultsPage({ params }: PageProps) {
  const { condition: conditionSlug } = await params;
  const condition = CONDITIONS[conditionSlug];

  if (!condition) {
    notFound();
  }

  return <ResultsPageClient condition={condition} />;
}
