import { notFound, redirect } from "next/navigation";
import { CompanyView } from "@/components/portfolio/company-view";
import { COMPANIES, getCompany, getCompanyWorks } from "@/lib/works";

export function generateStaticParams() {
  return COMPANIES.map((c) => ({ company: c.slug }));
}

export async function generateMetadata(props: PageProps<"/work/[company]">) {
  const { company: slug } = await props.params;
  const company = getCompany(slug);
  if (!company) return { title: "Robert Fox" };
  return {
    title: `${company.name} - Robert Fox`,
    description: company.tagline,
  };
}

export default async function CompanyPage(
  props: PageProps<"/work/[company]">,
) {
  const { company: slug } = await props.params;
  const company = getCompany(slug);
  if (!company) notFound();

  const works = getCompanyWorks(slug);
  if (works.length === 1) redirect(`/work/${company.slug}/${works[0].slug}`);

  return <CompanyView company={company} works={works} />;
}
