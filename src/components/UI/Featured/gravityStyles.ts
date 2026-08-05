'use client';
import { styled } from 'styled-components';

export const DropWrap = styled.div<{ $height: string }>`
  position: relative;
  width: 100%;
  height: ${({ $height }) => $height};
  margin-top: 1.25rem;
`;

export const StaticGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.25rem;
  margin-top: 1.25rem;
`;

export const StaticCard = styled.div`
  flex-shrink: 0;
  width: 6.875rem;
  height: 6.875rem;
  border-radius: 50%;
  background: #fff;
  border: 2px solid var(--green);
  box-shadow:
    0 2px 14px rgba(227, 30, 36, 0.18),
    0 1px 4px rgba(0, 0, 0, 0.07);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 1.1rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    width: 4.5rem;
    height: 4.5rem;
    padding: 0.75rem;
  }
`;
