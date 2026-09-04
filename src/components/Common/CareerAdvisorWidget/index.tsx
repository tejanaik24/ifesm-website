'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import gouthami from '../../../../public/ifesm/gouthami-career-advisor.png';
import { jobFinderFields } from '@/components/UI/JobFinderPage/constants';
import { Avatar, CloseButton, Details, Field, Header, Option, Options, Panel, Progress, ResultActions, Step, Teaser, Trigger, Widget } from './styles';

const whatsappNumber = '919989315222';
const resumeEmail = 'projects@nifsindia.com';

const CareerAdvisorWidget = () => {
  const [open, setOpen] = useState(true);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>(Array(jobFinderFields.length).fill(''));
  const [details, setDetails] = useState({ name: '', phone: '', email: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  const reset = () => {
    setStep(0);
    setAnswers(Array(jobFinderFields.length).fill(''));
    setDetails({ name: '', phone: '', email: '' });
    setError('');
    setSubmitted(false);
  };

  const setAnswer = (value: string) => {
    setAnswers(current => current.map((answer, index) => index === step ? value : answer));
    setError('');
  };

  const message = [
    'New IFESM Job Enquiry',
    `Name: ${details.name}`,
    `Phone: ${details.phone}`,
    `Email: ${details.email || 'Not provided'}`,
    ...jobFinderFields.map((field, index) => `${field.label}: ${answers[index]}`),
  ].join('\n');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  const resumeUrl = `mailto:${resumeEmail}?subject=${encodeURIComponent(`Resume submission - ${details.name || 'IFESM job enquiry'}`)}&body=${encodeURIComponent(`${message}\n\nPlease attach your resume before sending this email.`)}`;

  const continueFlow = () => {
    if (!answers[step]) {
      setError('Choose one option to continue.');
      return;
    }
    setError('');
    setStep(current => current + 1);
  };

  const submitDetails = () => {
    if (!details.name.trim() || !details.phone.trim()) {
      setError('Enter your name and phone number so Gouthami can share your profile.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const field = jobFinderFields[step];

  return (
    <Widget>
      {open && (
        <Panel role="dialog" aria-label="Gouthami, IFESM career advisor">
          <Header>
            <Avatar><Image src={gouthami} alt="Gouthami, IFESM Career Advisor" fill sizes="44px" /></Avatar>
            <div><strong>Gouthami — IFESM Advisor</strong><span><i aria-hidden="true" />Online · Career guidance</span></div>
            <CloseButton type="button" onClick={() => setOpen(false)} aria-label="Close career advisor">×</CloseButton>
          </Header>

          {!submitted ? (
            <>
              <Progress aria-label={`Step ${Math.min(step + 1, 9)} of 9`}><span style={{ transform: `scaleX(${(step + 1) / 9})` }} /></Progress>
              {step < jobFinderFields.length ? (
                <Step>
                  <p className="eyebrow">Find My Job · Step {step + 1} of 8</p>
                  <h2>{field.label}</h2>
                  <Options>
                    {field.options.map(option => (
                      <Option key={option}><input type="radio" name={`gouthami-job-${step}`} checked={answers[step] === option} onChange={() => setAnswer(option)} />{option}</Option>
                    ))}
                  </Options>
                  {error && <p className="error" role="alert">{error}</p>}
                  <div className="actions">
                    {step > 0 ? <button type="button" className="secondary" onClick={() => { setStep(current => current - 1); setError(''); }}>Back</button> : <span />}
                    <button type="button" className="primary" onClick={continueFlow}>Continue</button>
                  </div>
                </Step>
              ) : (
                <Details>
                  <p className="eyebrow">Final step</p><h2>Where can we reach you?</h2>
                  <Field><span>Full name</span><input value={details.name} onChange={event => setDetails(current => ({ ...current, name: event.target.value }))} autoComplete="name" /></Field>
                  <Field><span>Phone number</span><input value={details.phone} onChange={event => setDetails(current => ({ ...current, phone: event.target.value }))} inputMode="tel" autoComplete="tel" /></Field>
                  <Field><span>Email <small>optional</small></span><input value={details.email} onChange={event => setDetails(current => ({ ...current, email: event.target.value }))} inputMode="email" autoComplete="email" /></Field>
                  <p className="hint">Your profile opens in WhatsApp for you to review and send. Resume attachments are handled separately by email.</p>
                  {error && <p className="error" role="alert">{error}</p>}
                  <div className="actions"><button type="button" className="secondary" onClick={() => { setStep(current => current - 1); setError(''); }}>Back</button><button type="button" className="primary" onClick={submitDetails}>Review my profile</button></div>
                </Details>
              )}
            </>
          ) : (
            <Details>
              <p className="eyebrow">Profile ready</p><h2>Thanks, {details.name}.</h2>
              <p className="result-copy">Your job preferences are ready to share with the IFESM recruitment team. Gouthami will not show unverified vacancies.</p>
              <ResultActions>
                <a className="primary" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Open WhatsApp profile</a>
                <a className="secondary" href={resumeUrl}>Email my resume</a>
                <button type="button" className="text-button" onClick={reset}>Start again</button>
              </ResultActions>
            </Details>
          )}
        </Panel>
      )}
      {!open && <Trigger type="button" onClick={() => { reset(); setOpen(true); }} aria-label="Open Gouthami, IFESM career advisor"><Avatar><Image src={gouthami} alt="" fill sizes="88px" /></Avatar><Teaser>Need help finding your next role?</Teaser></Trigger>}
    </Widget>
  );
};

export default CareerAdvisorWidget;
