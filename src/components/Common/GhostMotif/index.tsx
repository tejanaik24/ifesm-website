'use client';
import { useReducedMotion } from 'framer-motion';
import { Container } from './styles';
import { FlamePaths, ShieldPaths, CircuitPaths, SmokePaths, BlueprintPaths } from './motifs';

interface GhostMotifProps {
  variant: 'flame' | 'shield' | 'circuit' | 'smoke' | 'blueprint';
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  size: number;
  opacity?: number;
  animateType?: 'ambient' | 'draw'; // default to 'ambient'
  className?: string;
}

const motifConfig = {
  flame: { Paths: FlamePaths, viewBox: '0 0 24 24', colorVar: '--green' },
  shield: { Paths: ShieldPaths, viewBox: '0 0 24 24', colorVar: '--green' },
  circuit: { Paths: CircuitPaths, viewBox: '0 0 100 100', colorVar: '--white' },
  smoke: { Paths: SmokePaths, viewBox: '0 0 100 100', colorVar: '--white' },
  blueprint: { Paths: BlueprintPaths, viewBox: '0 0 100 100', colorVar: '--white' },
};

const GhostMotif = ({
  variant,
  position,
  size,
  opacity = 0.08,
  animateType = 'ambient',
  className,
}: GhostMotifProps) => {
  const shouldReduceMotion = useReducedMotion();
  const config = motifConfig[variant];
  const { Paths, viewBox, colorVar } = config;

  const isDraw = animateType === 'draw';

  const pathProps = isDraw
    ? {
        initial: { pathLength: 0 },
        whileInView: { pathLength: 1 },
        viewport: { once: true },
        transition: shouldReduceMotion
          ? { duration: 0 }
          : { duration: 2, ease: [0.6, 0.05, -0.01, 0.9] },
      }
    : {};

  return (
    <Container
      $position={position}
      $size={size}
      $opacity={opacity}
      $colorVar={colorVar}
      $animateType={animateType}
      $variant={variant}
      className={className}
    >
      <svg
        viewBox={viewBox}
        width="100%"
        height="100%"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Paths {...pathProps} />
      </svg>
    </Container>
  );
};

export default GhostMotif;
