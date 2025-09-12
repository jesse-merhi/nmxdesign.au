import { useInView, useSpring } from '@react-spring/web';
import Card from './Card.tsx';

export type Project = {
  slug: string;
  title: string;
  description: string;
  display_photo?: string;
  tags?: string[];
};

const AnimatedCard = ({ item }: { item: Project }) => {
  const [ref, inView] = useInView({
    rootMargin: '-10% 0%',
  });

  const animationStyle = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(60px)',
    config: { mass: 1, tension: 150, friction: 30 },
    delay: 200,
  });

  return (
    <div ref={ref}>
      <Card
        slug={item.slug}
        title={item.title}
        description={item.description}
        display_photo={item.display_photo}
        tags={item.tags}
        style={animationStyle}
      />
    </div>
  );
};

export default AnimatedCard;
