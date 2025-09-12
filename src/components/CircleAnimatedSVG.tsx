import { animated, useSpring } from '@react-spring/web';
import { useEffect, useMemo, useRef, useState } from 'react';

const DrawingCirclesSVG = () => {
  const path1Ref = useRef<SVGPathElement>(null);
  const path2Ref = useRef<SVGPathElement>(null);
  const path3Ref = useRef<SVGPathElement>(null);

  const [lengths, setLengths] = useState<[number, number, number]>([0, 0, 0]);

  const [isReady, setIsReady] = useState(false);

  const delays = useMemo(() => [1000, 1400, 1800], []);

  useEffect(() => {
    if (path1Ref.current && path2Ref.current && path3Ref.current) {
      setLengths([
        path1Ref.current.getTotalLength(),
        path2Ref.current.getTotalLength(),
        path3Ref.current.getTotalLength(),
      ]);
      setIsReady(true);
    }
  }, []);

  const createAnimationSequence = (index: number) =>
    useSpring({
      pause: !isReady,
      from: { strokeDashoffset: 0 },
      to: async (next) => {
        await next({
          strokeDashoffset: 0,
          config: { duration: 1500 },
          delay: delays[index],
        });

        while (true) {
          if (lengths[index]) {
            await next({
              strokeDashoffset: -lengths[index],
              config: { duration: 1500 },
            });

            await next({
              strokeDashoffset: lengths[index],
              immediate: true,
            });

            await next({
              strokeDashoffset: 0,
              config: { duration: 1500 },
              delay: 500,
            });
          }
        }
      },
    });

  const animation1 = createAnimationSequence(0);
  const animation2 = createAnimationSequence(1);
  const animation3 = createAnimationSequence(2);

  return (
    <svg
      width="130"
      height="46"
      viewBox="0 0 130 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity: isReady ? 1 : 0, transition: 'opacity 0.2s' }}
    >
      <animated.path
        ref={path1Ref}
        strokeDasharray={lengths[0]}
        style={animation1}
        d="M122.5 25C122.5 27.7016 121.016 30.3379 118.192 32.7971C115.37 35.2553 111.257 37.4918 106.132 39.3801C95.8857 43.1551 81.6969 45.5 66 45.5C50.3031 45.5 36.1143 43.1551 25.8678 39.3801C20.7425 37.4918 16.6299 35.2553 13.8077 32.7971C10.9845 30.3379 9.5 27.7016 9.5 25C9.5 22.2984 10.9845 19.6621 13.8077 17.2029C16.6299 14.7447 20.7425 12.5082 25.8678 10.6199C36.1143 6.84488 50.3031 4.5 66 4.5C81.6969 4.5 95.8857 6.84488 106.132 10.6199C111.257 12.5082 115.37 14.7447 118.192 17.2029C121.016 19.6621 122.5 22.2984 122.5 25Z"
        stroke="#ABAADE"
        strokeWidth="1"
      />
      <animated.path
        ref={path2Ref}
        strokeDasharray={lengths[1]}
        style={animation2}
        d="M113.5 25C113.5 27.7016 112.016 30.3379 109.192 32.7971C106.37 35.2553 102.257 37.4918 97.1322 39.3801C86.8857 43.1551 72.6969 45.5 57 45.5C41.3031 45.5 27.1143 43.1551 16.8678 39.3801C11.7425 37.4918 7.62988 35.2553 4.80775 32.7971C1.98446 30.3379 0.5 27.7016 0.5 25C0.5 22.2984 1.98446 19.6621 4.80775 17.2029C7.62988 14.7447 11.7425 12.5082 16.8678 10.6199C27.1143 6.84488 41.3031 4.5 57 4.5C72.6969 4.5 86.8857 6.84488 97.1322 10.6199C102.257 12.5082 106.37 14.7447 109.192 17.2029C112.016 19.6621 113.5 22.2984 113.5 25Z"
        stroke="#ABAADE"
        strokeWidth="1"
      />
      <animated.path
        ref={path3Ref}
        strokeDasharray={lengths[2]}
        style={animation3}
        d="M129.5 21C129.5 23.7016 128.016 26.3379 125.192 28.7971C122.37 31.2553 118.257 33.4918 113.132 35.3801C102.886 39.1551 88.6969 41.5 73 41.5C57.3031 41.5 43.1143 39.1551 32.8678 35.3801C27.7425 33.4918 23.6299 31.2553 20.8077 28.7971C17.9845 26.3379 16.5 23.7016 16.5 21C16.5 18.2984 17.9845 15.6621 20.8077 13.2029C23.6299 10.7447 27.7425 8.50818 32.8678 6.61993C43.1143 2.84488 57.3031 0.5 73 0.5C88.6969 0.5 102.886 2.84488 113.132 6.61993C118.257 8.50818 122.37 10.7447 125.192 13.2029C128.016 15.6621 129.5 18.2984 129.5 21Z"
        stroke="#ABAADE"
        strokeWidth="1"
      />
    </svg>
  );
};

export default DrawingCirclesSVG;
