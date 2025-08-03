import { animated, useSpring } from "@react-spring/web";
import { Link, useParams } from "react-router-dom";

const ProjectPage = () => {
  const { projectId } = useParams();

  const animation = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
  });

  return (
    <animated.div style={animation} className="p-4 md:p-8 text-center">
      <h1 className="text-4xl font-bold mb-4 font-pfMarlet text-gray-700">
        Project: <span className="text-[#FF593E]">{projectId}</span>
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Details for this project will go here.
      </p>
      <Link
        to="/portfolio"
        className="text-[#AAAADD] hover:underline font-bold"
      >
        ← Back to Portfolio
      </Link>
    </animated.div>
  );
};

export default ProjectPage;
