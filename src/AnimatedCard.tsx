import { useInView, useSpring } from "@react-spring/web";
import Card from "./Card.tsx";

const AnimatedCard = ({ item }) => {
  const [ref, inView] = useInView({
    rootMargin: "-10% 0%",
  });

  const animationStyle = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0px)" : "translateY(60px)",
    config: { mass: 1, tension: 150, friction: 30 },
    delay: 200,
  });

  return (
    <div ref={ref}>
      <Card
        slug={item.slug}
        title={item.title}
        description={item.description}
        style={animationStyle}
      />
    </div>
  );
};

export default AnimatedCard;
