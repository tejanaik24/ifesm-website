'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.section`
  width: 90%;
  max-width: 60rem;
  margin: 0 auto 6rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const InfoCard = styled.div`
  padding: 2rem;
  border-radius: 1rem;
  background: rgba(0, 0, 0, 0.03);
  border: 1px solid rgba(0, 0, 0, 0.08);

  h3 {
    font-size: 1.125rem;
    font-weight: 600;
    padding-bottom: 0.5rem;
  }

  p {
    color: var(--link-color);
    font-size: 1rem;
    line-height: 1.5rem;
    padding-bottom: 1.5rem;
  }

  a {
    color: var(--green);
    font-weight: 600;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  label {
    font-size: 0.875rem;
    color: var(--link-color);
    padding-bottom: 0.25rem;
    display: block;
  }

  input,
  textarea {
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    border: 1px solid rgba(0, 0, 0, 0.15);
    background: var(--Background);
    color: var(--white);
    font-family: inherit;
    font-size: 0.9375rem;
  }

  textarea {
    min-height: 7rem;
    resize: vertical;
  }

  button {
    margin-top: 0.5rem;
    padding: 0.875rem 2rem;
    border: none;
    border-radius: 3rem;
    background: var(--green);
    color: var(--Background);
    font-weight: 600;
    cursor: pointer;
    align-self: flex-start;
  }
`;
