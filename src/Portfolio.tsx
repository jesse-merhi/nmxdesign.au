import { animated, useTrail } from "@react-spring/web";
import AnimatedCard, { type Project } from "./AnimatedCard.tsx";

const portfolioItems: Project[] = [
  {
    slug: "project-aurora",
    title: "Project Aurora",
    description: "A generative art installation using real-time weather data.",
  },
  {
    slug: "nexus-interface",
    title: "Nexus Interface",
    description: "UI/UX design for a next-generation data visualization tool.",
  },
  {
    slug: "eco-tracker",
    title: "EcoTracker App",
    description:
      "Mobile application for tracking carbon footprints and promoting sustainability.",
  },
  {
    slug: "synthwave-hub",
    title: "Synthwave Hub",
    description:
      "A community platform and music archive for synthwave enthusiasts.",
  },
  {
    slug: "project-aurora",
    title: "Project Aurora",
    description: "A generative art installation using real-time weather data.",
  },
  {
    slug: "nexus-interface",
    title: "Nexus Interface",
    description: "UI/UX design for a next-generation data visualization tool.",
  },
  {
    slug: "eco-tracker",
    title: "EcoTracker App",
    description:
      "Mobile application for tracking carbon footprints and promoting sustainability.",
  },
  {
    slug: "synthwave-hub",
    title: "Synthwave Hub",
    description:
      "A community platform and music archive for synthwave enthusiasts.",
  },
  {
    slug: "project-aurora",
    title: "Project Aurora",
    description: "A generative art installation using real-time weather data.",
  },
  {
    slug: "nexus-interface",
    title: "Nexus Interface",
    description: "UI/UX design for a next-generation data visualization tool.",
  },
  {
    slug: "eco-tracker",
    title: "EcoTracker App",
    description:
      "Mobile application for tracking carbon footprints and promoting sustainability.",
  },
  {
    slug: "synthwave-hub",
    title: "Synthwave Hub",
    description:
      "A community platform and music archive for synthwave enthusiasts.",
  },
  {
    slug: "project-aurora",
    title: "Project Aurora",
    description: "A generative art installation using real-time weather data.",
  },
  {
    slug: "nexus-interface",
    title: "Nexus Interface",
    description: "UI/UX design for a next-generation data visualization tool.",
  },
  {
    slug: "eco-tracker",
    title: "EcoTracker App",
    description:
      "Mobile application for tracking carbon footprints and promoting sustainability.",
  },
  {
    slug: "synthwave-hub",
    title: "Synthwave Hub",
    description:
      "A community platform and music archive for synthwave enthusiasts.",
  },
  {
    slug: "project-aurora",
    title: "Project Aurora",
    description: "A generative art installation using real-time weather data.",
  },
  {
    slug: "nexus-interface",
    title: "Nexus Interface",
    description: "UI/UX design for a next-generation data visualization tool.",
  },
  {
    slug: "eco-tracker",
    title: "EcoTracker App",
    description:
      "Mobile application for tracking carbon footprints and promoting sustainability.",
  },
  {
    slug: "synthwave-hub",
    title: "Synthwave Hub",
    description:
      "A community platform and music archive for synthwave enthusiasts.",
  },
  {
    slug: "project-aurora",
    title: "Project Aurora",
    description: "A generative art installation using real-time weather data.",
  },
  {
    slug: "nexus-interface",
    title: "Nexus Interface",
    description: "UI/UX design for a next-generation data visualization tool.",
  },
  {
    slug: "eco-tracker",
    title: "EcoTracker App",
    description:
      "Mobile application for tracking carbon footprints and promoting sustainability.",
  },
  {
    slug: "synthwave-hub",
    title: "Synthwave Hub",
    description:
      "A community platform and music archive for synthwave enthusiasts.",
  },
  {
    slug: "project-aurora",
    title: "Project Aurora",
    description: "A generative art installation using real-time weather data.",
  },
  {
    slug: "nexus-interface",
    title: "Nexus Interface",
    description: "UI/UX design for a next-generation data visualization tool.",
  },
  {
    slug: "eco-tracker",
    title: "EcoTracker App",
    description:
      "Mobile application for tracking carbon footprints and promoting sustainability.",
  },
  {
    slug: "synthwave-hub",
    title: "Synthwave Hub",
    description:
      "A community platform and music archive for synthwave enthusiasts.",
  },
  {
    slug: "project-aurora",
    title: "Project Aurora",
    description: "A generative art installation using real-time weather data.",
  },
  {
    slug: "nexus-interface",
    title: "Nexus Interface",
    description: "UI/UX design for a next-generation data visualization tool.",
  },
  {
    slug: "eco-tracker",
    title: "EcoTracker App",
    description:
      "Mobile application for tracking carbon footprints and promoting sustainability.",
  },
  {
    slug: "synthwave-hub",
    title: "Synthwave Hub",
    description:
      "A community platform and music archive for synthwave enthusiasts.",
  },
  {
    slug: "project-aurora",
    title: "Project Aurora",
    description: "A generative art installation using real-time weather data.",
  },
  {
    slug: "nexus-interface",
    title: "Nexus Interface",
    description: "UI/UX design for a next-generation data visualization tool.",
  },
  {
    slug: "eco-tracker",
    title: "EcoTracker App",
    description:
      "Mobile application for tracking carbon footprints and promoting sustainability.",
  },
  {
    slug: "synthwave-hub",
    title: "Synthwave Hub",
    description:
      "A community platform and music archive for synthwave enthusiasts.",
  },
];

const Portfolio = () => {
  const trail = useTrail(3, {
    from: { opacity: 0, transform: "translateY(30px)" },
    to: { opacity: 1, transform: "translateY(0px)" },

    delay: 200,
  });
  return (
    <animated.div style={trail[0]} className="p-4 md:p-12">
      <animated.h1
        style={trail[1]}
        className="text-5xl font-bold mb-12 text-center font-pfMarlet text-gray-700"
      >
        Case Studies
      </animated.h1>
      <animated.div
        style={trail[2]}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto"
      >
        {portfolioItems.map((item, index) => (
          <AnimatedCard key={item.slug || index} item={item} />
        ))}
      </animated.div>
    </animated.div>
  );
};

export default Portfolio;
