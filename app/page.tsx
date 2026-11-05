import { projects } from "@/constants/projects";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServallSpotlight from "./components/ServallSpotlight";
import FeaturedProjectCard from "./components/FeaturedProjectCard";
import ProjectIndex from "./components/ProjectIndex";
import Resume from "./components/ResumeSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// ServAll's own products live in their own section, so Work shows the rest
const isServallProduct = (category?: string) =>
  category?.includes("ServAll") ?? false;

export default function Home() {
  const featured = projects.filter(
    (p) => p.featured && !isServallProduct(p.category)
  );
  const earlier = projects.filter((p) => !p.featured);

  return (
    <main className="min-h-screen">
      <div className="px-8 md:px-4 max-w-2xl mx-auto">
        <Navbar />
        <Hero />
        <ServallSpotlight />

        <section id="work" className="pt-24 md:pt-16 font-satoshi">
          <h2 className="font-inter font-extrabold text-4xl md:text-3xl tracking-[-0.03em] text-white">
            Selected work
          </h2>
          <div className="mt-8 flex flex-col gap-14">
            {featured.map((project) => (
              <FeaturedProjectCard key={project.slug} project={project} />
            ))}
          </div>

          <h3 className="mt-20 md:mt-14 mb-4 font-inter font-bold text-xl text-white">
            Earlier projects
          </h3>
          <ProjectIndex
            items={earlier.map((p) => ({
              href: `/projects/${p.slug}`,
              title: p.title,
              tagline: p.tagline ?? p.description,
              meta: p.technologies.slice(0, 2).join(" · "),
              image: p.image,
            }))}
          />
        </section>

        <div className="pt-24 md:pt-16">
          <Resume />
        </div>
        <div className="pt-24 md:pt-16">
          <Contact />
        </div>
        <Footer />
      </div>
    </main>
  );
}
