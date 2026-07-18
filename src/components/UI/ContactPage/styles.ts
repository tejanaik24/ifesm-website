'use client';
import { styled } from 'styled-components';
import GhostMotif from '@/components/Common/GhostMotif';

export const Wrapper = styled.section`
  position: relative;
  width: 90%;
  max-width: 70rem;
  margin: 4rem auto 6rem;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 4rem;
  z-index: 1;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    overflow: hidden;
  }
`;

export const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
`;

export const ImageCtn = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 1.5rem 3rem rgba(0, 0, 0, 0.12);

  img {
    border-radius: 1rem;
    object-fit: cover;
  }
`;

export const InfoCard = styled.div`
  padding: 2.5rem;
  border-radius: 1rem;
  background: rgba(0, 0, 0, 0.03);
  border: 1px solid rgba(0, 0, 0, 0.08);

  h3 {
    font-size: 1.125rem;
    font-weight: 600;
    padding-bottom: 0.5rem;
    color: var(--white);
  }

  p {
    color: var(--link-color);
    font-size: 1rem;
    line-height: 1.5rem;
    padding-bottom: 1.5rem;
  }

  p:last-child {
    padding-bottom: 0;
  }

  a {
    color: var(--green);
    font-weight: 600;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  label {
    font-size: 0.875rem;
    color: var(--link-color);
    padding-bottom: 0.25rem;
    display: block;
  }

  input,
  textarea {
    width: 100%;
    padding: 0.85rem 1.15rem;
    border-radius: 0.5rem;
    border: 1px solid rgba(0, 0, 0, 0.15);
    background: var(--Background);
    color: var(--white);
    font-family: inherit;
    font-size: 0.9375rem;
  }

  textarea {
    min-height: 9.5rem;
    resize: vertical;
  }

  button {
    margin-top: 0.5rem;
    padding: 0.875rem 2.25rem;
    border: none;
    border-radius: 3rem;
    background: var(--green);
    color: var(--Background);
    font-weight: 600;
    cursor: pointer;
    align-self: flex-start;
    transition: background 0.3s ease;

    &:hover {
      background: var(--emerald);
    }
  }
`;

export const MirroredMotif = styled(GhostMotif)`
  transform: scaleX(-1) rotate(45deg);
`;
