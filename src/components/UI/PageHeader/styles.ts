'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.section`
  margin-top: 8.25rem;
  width: 90%;
  max-width: 56rem;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  padding-bottom: 4rem;

  h1 {
    font-size: 3rem;
    font-weight: 500;
    line-height: 1.1;
    padding-bottom: 1rem;
  }

  p {
    color: var(--link-color);
    font-size: 1.125rem;
    line-height: 1.6rem;
  }

  @media (max-width: 768px) {
    margin-top: 6.25rem;

    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;
