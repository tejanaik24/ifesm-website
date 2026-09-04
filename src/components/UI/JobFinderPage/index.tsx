'use client';

import { useState } from 'react';
import PageHeader from '@/components/UI/PageHeader';
import careersBanner from '../../../../public/ifesm/pageheader-facility-banner.jpg';
import { jobFinderFields } from './constants';
import { Actions, FormCard, Intro, Option, Options, Progress, Question, Result, StepLabel, Wrapper } from './styles';

const recruitmentEmail = 'projects@nifsindia.com';
const recruitmentPhone = '919989315222';

const JobFinderPage = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>(Array(jobFinderFields.length).fill(''));
  const [complete, setComplete] = useState(false);
  const field = jobFinderFields[step];
  const canContinue = Boolean(answers[step]);
  const profileSummary = jobFinderFields.map((item, index) => `${item.label}: ${answers[index]}`).join('\n');
  const encodedProfile = encodeURIComponent(`Hello IFESM Recruitment Team,\n\nI would like to be considered for suitable fire and safety opportunities.\n\n${profileSummary}\n\nPlease let me know about verified vacancies that match my profile.`);

  const choose = (value: string) => setAnswers(current => current.map((answer, index) => index === step ? value : answer));
  const next = () => {
    if (!canContinue) return;
    if (step === jobFinderFields.length - 1) { setComplete(true); return; }
    setStep(current => current + 1);
  };

  return <>
    <PageHeader title="Find My Job" subtitle="Discover the right fire and safety career based on your qualification, experience and preferred location." image={careersBanner} />
    <Wrapper>
      <Intro><h2>A clear profile for the right opportunity.</h2><p>Answer eight short questions. IFESM&apos;s recruitment team can then review your preferences against verified, current requirements.</p></Intro>
      {complete ? <Result aria-live="polite">
        <h2>Your profile is ready for review.</h2>
        <p>We do not display unverified vacancies. Share this profile with the recruitment team and they can confirm suitable live opportunities.</p>
        <ul>{jobFinderFields.map((item, index) => <li key={item.label}><span>{item.label}</span><strong>{answers[index]}</strong></li>)}</ul>
        <Actions>
          <a className="primary" href={`https://wa.me/${recruitmentPhone}?text=${encodedProfile}`} target="_blank" rel="noopener noreferrer">View verified opportunities</a>
          <a className="primary" href={`mailto:${recruitmentEmail}?subject=Job%20profile%20registration&body=${encodedProfile}`}>Register my profile</a>
          <a className="back" href={`mailto:${recruitmentEmail}?subject=Resume%20submission&body=${encodedProfile}%0A%0APlease attach your resume before sending this email.`}>Upload resume by email</a>
          <a className="back" href={`tel:+${recruitmentPhone}`}>Talk to recruitment</a>
        </Actions>
        <p className="note">Resume upload opens your email app because this static website does not store applicant files.</p>
      </Result> : <>
        <Progress aria-label={`Step ${step + 1} of ${jobFinderFields.length}`}>{jobFinderFields.map((item, index) => <li key={item.label} className={index <= step ? 'active' : ''} />)}</Progress>
        <FormCard onSubmit={event => { event.preventDefault(); next(); }}>
          <StepLabel>Step {step + 1} of {jobFinderFields.length}</StepLabel>
          <Question><legend>{field.label}</legend><Options>{field.options.map(option => <Option key={option}><input type="radio" name={`job-finder-step-${step}`} value={option} checked={answers[step] === option} onChange={() => choose(option)} />{option}</Option>)}</Options></Question>
          <Actions>{step > 0 ? <button type="button" className="back" onClick={() => setStep(current => current - 1)}>Back</button> : <span />}<button type="submit" className="next" disabled={!canContinue}>{step === jobFinderFields.length - 1 ? 'Review my profile' : 'Continue'}</button></Actions>
        </FormCard>
      </>}
    </Wrapper>
  </>;
};

export default JobFinderPage;
