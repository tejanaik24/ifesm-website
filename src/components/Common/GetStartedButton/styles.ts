'use client';
import Link from 'next/link';
import { styled } from 'styled-components';

export const LinkTo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6.25rem;
  background: var(--green);
  color: var(--white);
  font-size: 1rem;
  font-weight: 600;
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-0.15rem);
    box-shadow: 0 0.75rem 1.5rem rgba(227, 30, 36, 0.3);
  }
`;
