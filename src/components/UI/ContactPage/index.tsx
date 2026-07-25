'use client';
import { FormEvent } from 'react';
import Image from 'next/image';
import PageHeader from '@/components/UI/PageHeader';
import { Wrapper, InfoColumn, ImageCtn, InfoCard, Form, MirroredMotif } from './styles';

import contact_banner from '../../../../public/ifesm/pageheader-contact-banner.jpg';
import contact_office from '../../../../public/ifesm/contact-office.jpg';

const CONTACT_EMAIL = 'projects@nifsindia.com';

const ContactPage = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

    const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      'Website Enquiry'
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Reach out for corporate training, audits, or turnkey fire safety projects."
        image={contact_banner}
      />
      <Wrapper>
        <MirroredMotif
          variant="blueprint"
          position={{ bottom: '-5%', left: '-5%' }}
          size={240}
          opacity={0.08}
        />
        <InfoColumn>
          <ImageCtn>
            <Image
              src={contact_office}
              alt="IFESM office in Visakhapatnam"
              fill
              sizes="(max-width: 900px) 90vw, 450px"
              priority
            />
          </ImageCtn>
          <InfoCard>
            <h3>Address</h3>
            <p>10-134, Sadguru Towers, Malatamba Rd, PM Palem, Visakhapatnam, Andhra Pradesh 530041</p>
            <h3>Contact</h3>
            <p>
              <a href="mailto:projects@nifsindia.com">projects@nifsindia.com</a>
              <br />
              <a href="tel:+919989315222">+91 99893 15222</a>
              <br />
              <a href="tel:+919492858292">+91 94928 58292</a>
            </p>
          </InfoCard>
        </InfoColumn>

        <Form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" required />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input id="phone" name="phone" type="tel" />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" />
          </div>
          <button type="submit">Send Enquiry</button>
        </Form>
      </Wrapper>
    </>
  );
};

export default ContactPage;
