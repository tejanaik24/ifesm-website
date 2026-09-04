'use client';

import { keyframes, styled } from 'styled-components';

const bob = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-7px); }
`;

const actionStyles = `
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: .6rem;
  padding: .7rem .8rem;
  font: inherit;
  font-size: .82rem;
  font-weight: 800;
  text-decoration: none;
  cursor: pointer;
`;

export const Widget = styled.aside`
  position: fixed;
  left: 1.25rem;
  bottom: 1.5rem;
  z-index: 9998;
  font-family: var(--font-sans), sans-serif;

  @media (max-width: 640px) { left: .75rem; bottom: 1rem; }
`;

export const Panel = styled.section`
  width: min(22rem, calc(100vw - 1.5rem));
  max-height: min(42rem, calc(100vh - 2rem));
  overflow: auto;
  background: #fff;
  border-radius: 1.25rem;
  box-shadow: 0 1.25rem 3.5rem rgba(0, 0, 0, .25);
  color: #161616;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: .7rem;
  padding: .85rem 1rem;
  background: linear-gradient(135deg, #E31E24, #9e151a);
  color: #fff;

  strong { display: block; font-size: .9rem; line-height: 1.2; }
  span { display: flex; align-items: center; gap: .35rem; color: rgba(255,255,255,.86); font-size: .72rem; margin-top: .2rem; }
  i { width: .5rem; height: .5rem; background: #34d399; border-radius: 50%; box-shadow: 0 0 0 .15rem rgba(52,211,153,.2); }
`;

export const Avatar = styled.span`
  position: relative;
  display: block;
  width: 2.8rem;
  height: 2.8rem;
  flex: 0 0 auto;
  overflow: hidden;
  border-radius: 50%;
  border: 2px solid rgba(255,255,255,.7);
  background: #eee;

  img { object-fit: cover; }
`;

export const CloseButton = styled.button`
  width: 2.75rem;
  height: 2.75rem;
  margin-left: auto;
  border: 0;
  border-radius: 50%;
  background: rgba(255,255,255,.16);
  color: #fff;
  font-size: 1.65rem;
  line-height: 1;
  cursor: pointer;

  &:focus-visible { outline: 3px solid #fff; outline-offset: 2px; }
`;

export const Progress = styled.div`
  height: .3rem;
  margin: 1rem 1rem 0;
  background: #e8e8e8;
  border-radius: 1rem;
  overflow: hidden;

  span { display: block; width: 100%; height: 100%; transform-origin: left; background: #E31E24; transition: transform .2s ease; }
`;

export const Step = styled.div`
  padding: 1rem;

  .eyebrow { margin: 0 0 .45rem; color: #B3151A; font-size: .68rem; font-weight: 800; letter-spacing: .09em; text-transform: uppercase; }
  h2 { margin: 0; color: #171717; font-size: 1.2rem; line-height: 1.3; }
  .error { margin: .25rem 0; color: #B3151A; font-size: .76rem; font-weight: 700; }
  .actions { display: flex; justify-content: space-between; gap: .65rem; }
  .actions button, .primary, .secondary, .text-button { ${actionStyles} }
  .primary { border: 1px solid #E31E24; background: #E31E24; color: #fff; }
  .secondary { border: 1px solid #d5d5d5; background: #fff; color: #242424; }
  .text-button { border: 0; background: transparent; color: #B3151A; text-decoration: underline; }
  .primary:focus-visible, .secondary:focus-visible, .text-button:focus-visible { outline: 3px solid rgba(227,30,36,.38); outline-offset: 2px; }
`;

export const Details = styled(Step)`
  padding: 1rem 1rem 1.15rem;

  h2 { font-size: 1.25rem; margin: .1rem 0 1rem; }
  .hint, .result-copy { color: #5d5d5d; font-size: .78rem; line-height: 1.5; margin: .85rem 0; }
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
  margin: 1rem 0;
`;

export const Option = styled.label`
  display: flex;
  align-items: center;
  gap: .65rem;
  min-height: 2.75rem;
  padding: .65rem .75rem;
  border: 1.5px solid #dedede;
  border-radius: .7rem;
  font-size: .82rem;
  font-weight: 600;
  color: #292929;
  cursor: pointer;
  transition: border-color .18s ease, background .18s ease;

  input { width: 1rem; height: 1rem; accent-color: #E31E24; flex: 0 0 auto; }
  &:hover, &:has(input:checked) { border-color: #E31E24; background: #fff5f5; }
  &:has(input:focus-visible) { outline: 3px solid rgba(227,30,36,.35); outline-offset: 2px; }
`;

export const Field = styled.label`
  display: block;
  margin: .7rem 0;

  span { display: block; font-size: .75rem; font-weight: 800; color: #333; margin-bottom: .3rem; }
  small { font-weight: 500; color: #777; }
  input { box-sizing: border-box; width: 100%; min-height: 2.75rem; padding: .6rem .7rem; border: 1.5px solid #d9d9d9; border-radius: .6rem; font: inherit; font-size: .85rem; }
  input:focus { outline: 3px solid rgba(227,30,36,.2); border-color: #E31E24; }
`;

export const ResultActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: .65rem;
`;

export const Trigger = styled.button`
  display: flex;
  align-items: center;
  gap: .65rem;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
  animation: ${bob} 2.8s ease-in-out infinite;

  ${Avatar} { width: 5.5rem; height: 5.5rem; border-width: 4px; box-shadow: 0 .75rem 2rem rgba(227,30,36,.3); }
  &:focus-visible { outline: 3px solid #E31E24; outline-offset: 4px; border-radius: 3rem; }

  @media (max-width: 640px) { ${Avatar} { width: 4.5rem; height: 4.5rem; } }
  @media (prefers-reduced-motion: reduce) { animation: none; }
`;

export const Teaser = styled.span`
  max-width: 11rem;
  padding: .7rem .85rem;
  border-radius: .75rem;
  background: #171717;
  color: #fff;
  font-size: .75rem;
  font-weight: 700;
  text-align: left;
  line-height: 1.3;
  box-shadow: 0 .6rem 1.5rem rgba(0,0,0,.2);

  @media (max-width: 640px) { display: none; }
`;
