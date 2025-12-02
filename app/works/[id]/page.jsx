import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";
import MainContent from "@/components/MainContent";
import projects from "@/data/projectsWork";

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: String(project.id),
  }));
}

export async function generateMetadata({ params }) {
  const project = projects.find((p) => String(p.id) === params.id);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} — Works — Dinh Quang Chung`,
    description: project.description,
  };
}

const WorkDetail = ({ params }) => {
  const project = projects.find((p) => String(p.id) === params.id);
  if (!project) notFound();

  // Prev/Next
  const currentIndex = projects.findIndex((p) => String(p.id) === params.id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div className="container py-20 space-y-10">
      <div className="pt-2">
        <Link
          href="/works"
          className="inline-flex items-center gap-2 transition-colors group text-primary"
        >
          <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Works</span>
        </Link>
      </div>

      <h1>{project.title}</h1>

      {project.image && (
        <div className="relative w-full aspect-video overflow-hidden rounded-xl mb-10">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-contain"
            priority
          />
        </div>
      )}

      {project.description && (
        <p className="text-lg leading-relaxed">{project.description}</p>
      )}

      {Array.isArray(project.tech) && project.tech.length > 0 && (
        <section>
          <h3 className="mb-3">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, i) => (
              <span
                key={`${t.name}-${i}`}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-background/60 hover:bg-background transition-colors text-sm"
              >
                <span aria-hidden>{t.icon}</span>
                <span>{t.name}</span>
              </span>
            ))}
          </div>
        </section>
      )}

      {project.live && (
        <section>
          <h3 className="mb-3">Live</h3>
          <a href={project.live} className="text-primary underline">
            {project.live}
          </a>
        </section>
      )}

      {project.time && (
        <section>
          <h3 className="mb-2">Time</h3>
          <p className="">{project.time}</p>
        </section>
      )}

      {project.role && (
        <section>
          <h3 className="mb-3">Role</h3>
          <p className="">{project.role}</p>
        </section>
      )}

      {project.teamComposition && (
        <section>
          <h3 className="mb-3">Team Composition</h3>

          <ul className="list-disc pl-6 space-y-2 ">
            {project.teamComposition.map((member, i) => (
              <li key={i}>{member}</li>
            ))}
          </ul>
        </section>
      )}

      {Array.isArray(project.features) && project.features.length > 0 && (
        <section className="space-y-3">
          <h3 className="font-bold">Features</h3>
          <ul className="list-disc pl-6 space-y-2 ">
            {project.features.map((feat, i) => (
              <li key={i}>{feat}</li>
            ))}
          </ul>
        </section>
      )}

      {project.challenges && (
        <section className="space-y-3">
          <h3 className="font-bold">Challenges & Solutions</h3>
          <p className=" leading-relaxed">{project.challenges}</p>
        </section>
      )}

      {project.results && (
        <section className="space-y-3">
          <h3 className="font-bold">Results</h3>
          <p className="leading-relaxed">{project.results}</p>
        </section>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-20 border-border">
        {prevProject ? (
          <Link
            href={`/works/${prevProject.id}`}
            className="group flex items-center gap-3 rounded-lg border border-border p-4"
          >
            <div className="relative w-20 h-14 overflow-hidden rounded-md">
              <Image
                src={prevProject.image}
                alt={prevProject.title}
                fill
                className="object-contain group-hover:scale-105 transition-transform"
              />
            </div>
            <div>
              <p className="text-xs">Previous</p>
              <p className="font-medium line-clamp-2">{prevProject.title}</p>
            </div>
          </Link>
        ) : (
          <div />
        )}

        {nextProject ? (
          <Link
            href={`/works/${nextProject.id}`}
            className="group flex items-center gap-3 rounded-lg border border-border p-4 sm:ml-auto"
          >
            <div className="relative w-20 h-14 overflow-hidden rounded-md">
              <Image
                src={nextProject.image}
                alt={nextProject.title}
                fill
                className="object-contain group-hover:scale-105 transition-transform"
              />
            </div>
            <div>
              <p className="text-xs">Next</p>
              <p className="font-medium line-clamp-2">{nextProject.title}</p>
            </div>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
};

export default WorkDetail;
