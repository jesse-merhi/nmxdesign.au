import { animated, useTrail } from "@react-spring/web";
import AnimatedCard, { type Project } from "./AnimatedCard.tsx";

const portfolioItems: Project[] = [
  {
    slug: "aiperftool",
    title: "AI Powered Performance Tool",
    description:
      "A tool that uses AI to help you summarise your work achievements and write up your performance reviews.",
  },
  {
    slug: "uplinked",
    title: "Uplinked",
    description:
      "Workforce Management System dashboard design for a physical security company managing hundreds of guards across multiple worksites.",
  },
];

const Portfolio = () => {
  const trail = useTrail(3, {
    from: { opacity: 0, transform: "translateY(30px)" },
    to: { opacity: 1, transform: "translateY(0px)" },

    delay: 200,
  });
  return (
    <animated.div style={trail[0]} className="p-4 md:p-12 h-full bg-[#FFF6ED]">
      <animated.h1
        style={trail[1]}
        className="text-5xl font-bold mb-12 text-center font-pfMarlet text-gray-700"
      >
        Case Studies
      </animated.h1>
      <animated.div
        style={trail[2]}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto h-full"
      >
        {portfolioItems.map((item, index) => (
          <AnimatedCard key={item.slug || index} item={item} />
        ))}
      </animated.div>
    </animated.div>
  );
};

export default Portfolio;
