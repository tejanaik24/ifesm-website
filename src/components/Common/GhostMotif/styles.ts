'use client';
import styled, { keyframes, css } from 'styled-components';

const rotateAnim = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const pulseAnim = keyframes`
  0%, 100% { opacity: 0.55; transform: scale(1); }
  50% { opacity: 1.1; transform: scale(1.06); }
`;

const driftAnim = keyframes`
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(12px, -8px) rotate(2deg); }
  66% { transform: translate(-8px, 12px) rotate(-2deg); }
`;

export const Container = styled.div<{
  $position: { top?: string; bottom?: string; left?: string; right?: string };
  $size: number;
  $opacity: number;
  $colorVar: string;
  $animateType: 'ambient' | 'draw';
  $variant: 'flame' | 'shield' | 'circuit' | 'smoke' | 'blueprint';
}>`
  position: absolute;
  top: ${props => props.$position.top || 'auto'};
  bottom: ${props => props.$position.bottom || 'auto'};
  left: ${props => props.$position.left || 'auto'};
  right: ${props => props.$position.right || 'auto'};
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  opacity: ${props => props.$opacity};
  color: var(${props => props.$colorVar});
  pointer-events: none;
  z-index: 0;

  @media (max-width: 768px) {
    width: ${props => Math.min(props.$size * 0.6, 180)}px;
    height: ${props => Math.min(props.$size * 0.6, 180)}px;
  }

  svg {
    display: block;
    width: 100%;
    height: 100%;
  }

  ${props => {
    if (props.$animateType === 'draw') return '';
    switch (props.$variant) {
      case 'circuit':
        return css`
          animation: ${rotateAnim} 45s linear infinite;
        `;
      case 'shield':
        return css`
          animation: ${pulseAnim} 8s ease-in-out infinite;
        `;
      case 'flame':
      case 'smoke':
      case 'blueprint':
      default:
        return css`
          animation: ${driftAnim} 30s ease-in-out infinite;
        `;
    }
  }}
`;
