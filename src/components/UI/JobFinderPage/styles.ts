'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.section`width:min(90%,58rem);margin:0 auto 6rem;`;
export const Intro = styled.section`
  text-align:center;max-width:44rem;margin:0 auto 2.75rem;
  h2{color:var(--white);font-size:clamp(2rem,5vw,3.5rem);margin:0 0 1rem;}
  p{color:var(--link-color);line-height:1.75;font-size:1.0625rem;}
`;
export const Progress = styled.ol`
  display:grid;grid-template-columns:repeat(8,1fr);gap:.4rem;list-style:none;padding:0;margin:0 0 1.5rem;
  li{height:.35rem;border-radius:99px;background:rgba(0,0,0,.12);}li.active{background:var(--emerald);}
`;
export const FormCard = styled.form`background:var(--bg-secondary);border:1px solid rgba(0,0,0,.09);border-radius:1.25rem;padding:clamp(1.5rem,5vw,3rem);box-shadow:0 1.25rem 3.75rem rgba(0,0,0,.08);`;
export const StepLabel = styled.p`color:var(--emerald);font-size:.8rem;font-weight:800;letter-spacing:.1em;text-transform:uppercase;margin:0 0 .75rem;`;
export const Question = styled.fieldset`
  border:0;padding:0;margin:0;legend{color:var(--white);font-size:clamp(1.35rem,3vw,2rem);font-weight:700;line-height:1.25;}
`;
export const Options = styled.div`display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:.75rem;margin:1.75rem 0 2rem;@media(max-width:620px){grid-template-columns:1fr;}`;
export const Option = styled.label`
  display:flex;align-items:center;min-height:3rem;gap:.7rem;padding:.75rem .9rem;color:var(--link-color);background:rgba(255,255,255,.55);border:1px solid rgba(0,0,0,.1);border-radius:.65rem;cursor:pointer;transition:background 180ms ease,border-color 180ms ease,color 180ms ease;
  &:hover{border-color:var(--emerald);color:var(--white);}&:has(input:checked){background:rgba(227,30,36,.1);border-color:var(--emerald);color:var(--white);}input{width:1.1rem;height:1.1rem;accent-color:var(--emerald);flex-shrink:0;}
`;
export const Actions = styled.div`
  display:flex;justify-content:space-between;gap:1rem;
  button,a{min-height:44px;display:inline-flex;align-items:center;justify-content:center;padding:.75rem 1.25rem;border-radius:.55rem;font:inherit;font-weight:700;text-decoration:none;cursor:pointer;}
  button:focus-visible,a:focus-visible,label:has(input:focus-visible){outline:3px solid #E31E24;outline-offset:3px;}.back{border:1px solid rgba(0,0,0,.16);background:transparent;color:var(--white);}.next,.primary{border:1px solid var(--emerald);background:var(--emerald);color:var(--white);}.next:disabled{opacity:.5;cursor:not-allowed;}
`;
export const Result = styled.section`
  background:var(--bg-secondary);border:1px solid rgba(0,0,0,.09);border-radius:1.25rem;padding:clamp(1.5rem,5vw,3rem);text-align:center;
  h2{color:var(--white);font-size:clamp(1.75rem,4vw,2.75rem);margin:0 0 1rem;}>p{color:var(--link-color);max-width:40rem;margin:0 auto;line-height:1.75;}ul{text-align:left;max-width:36rem;margin:1.75rem auto;padding:0;list-style:none;}li{display:flex;justify-content:space-between;gap:1rem;border-bottom:1px solid rgba(0,0,0,.08);padding:.7rem 0;color:var(--link-color);}li strong{color:var(--white);text-align:right;}.note{font-size:.9rem;}${Actions}{justify-content:center;flex-wrap:wrap;}
`;
