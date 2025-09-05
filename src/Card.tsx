import { animated, SpringValue, useSpring } from "@react-spring/web";
import { useState } from "react";
import { Link } from "react-router-dom";

interface CardProps {
  slug: string;
  title: string;
  description: string;
  display_photo?: string;
  tags?: string[];
  // This correctly accepts the animation style from the parent
  style: { [key: string]: SpringValue<any> };
}

const Card = ({ slug, title, description, display_photo, tags, style }: CardProps) => {
  const [isHovered, setHovered] = useState(false);

  // This spring handles the hover effect
  const hoverAnimation = useSpring({
    transform: isHovered ? "translateY(-8px)" : "translateY(0px)",
    boxShadow: isHovered
      ? "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
      : "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    config: { tension: 300, friction: 15 },
  });

  return (
    <Link to={`/portfolio/${slug}`}>
      <animated.div
        style={{ ...style, ...hoverAnimation }}
        className="bg-white/80 rounded-xl border border-gray-200 cursor-pointer h-full overflow-hidden"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {display_photo ? (
          <img
            src={display_photo}
            alt={title}
            className="w-full h-64 object-cover"
            loading="lazy"
          />
        ) : null}
        <div className="p-6">
          <h2 className="text-3xl font-bold text-[#AAAADD] mb-3 font-pfMarlet">
            {title}
          </h2>
          <p className="text-gray-700 text-lg">{description}</p>
          {Array.isArray(tags) && tags.length > 0 ? (
            <div className="mt-5 flex flex-wrap gap-2">
              {tags.map((tag, i) => (
                <span
                  key={`${slug}-tag-${i}`}
                  className="px-2.5 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700 border border-gray-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </animated.div>
    </Link>
  );
};

export default Card;
