import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/portfolio/project-detail";
import { COMPANIES, getCompanyWorks, getWork } from "@/lib/works";

export function generateStaticParams() {
  return COMPANIES.flatMap((c) =>
    getCompanyWorks(c.slug).map((w) => ({ project: w.slug })),
  );
}

export async function generateMetadata(props: PageProps<"/[project]">) {
  const { project: projectSlug } = await props.params;
  const found = getWork(projectSlug);
  if (!found) return { title: "Robert Fox" };
  return {
    title: `${found.work.name} - ${found.work.company} - Robert Fox`,
    description: found.work.summary,
  };
}

export default async function ProjectPage(props: PageProps<"/[project]">) {
  const { project: projectSlug } = await props.params;
  const found = getWork(projectSlug);
  if (!found) notFound();

  return <ProjectDetail company={found.company} work={found.work} />;
}
