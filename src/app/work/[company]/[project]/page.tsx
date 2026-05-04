import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/portfolio/project-detail";
import {
  COMPANIES,
  getCompany,
  getCompanyWork,
  getCompanyWorks,
} from "@/lib/works";

export function generateStaticParams() {
  return COMPANIES.flatMap((c) =>
    getCompanyWorks(c.slug).map((w) => ({ company: c.slug, project: w.slug })),
  );
}

export async function generateMetadata(
  props: PageProps<"/work/[company]/[project]">,
) {
  const { company: companySlug, project: projectSlug } = await props.params;
  const work = getCompanyWork(companySlug, projectSlug);
  if (!work) return { title: "Robert Fox" };
  return {
    title: `${work.name} - ${work.company} - Robert Fox`,
    description: work.summary,
  };
}

export default async function ProjectPage(
  props: PageProps<"/work/[company]/[project]">,
) {
  const { company: companySlug, project: projectSlug } = await props.params;
  const company = getCompany(companySlug);
  const work = company ? getCompanyWork(companySlug, projectSlug) : undefined;
  if (!company || !work) notFound();

  return <ProjectDetail company={company} work={work} />;
}
