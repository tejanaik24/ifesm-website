'use client';

import { motion } from 'framer-motion';
import styled from 'styled-components';

const FloatingActions = () => {
  const whatsappUrl =
    'https://wa.me/918885099004?text=Hi%20IFESM%20Group%2C%20I%20would%20like%20to%20enquire%20about%20your%20Industrial%20Safety%20services.';
  const phoneUrl = 'tel:+918885099004';

  return (
    <Container
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5, ease: 'easeOut' }}
    >
      <ActionButton
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        $color="#25D366"
        whileHover={{ scale: 1.1, translateY: -2 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 16 16" fill="currentColor">
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
        </svg>
      </ActionButton>

      <ActionButton
        href={phoneUrl}
        $color="#b3151a"
        whileHover={{ scale: 1.1, translateY: -2 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Call IFESM"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </ActionButton>
    </Container>
  );
};

export default FloatingActions;

const Container = styled(motion.div)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  pointer-events: auto;

  @media (max-width: 768px) {
    bottom: 1.5rem;
    right: 1.5rem;
    gap: 0.75rem;
  }
`;

const ActionButton = styled(motion.a)<{ $color: string }>`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background-color: ${props => props.$color};
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2), 0 2px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.1);
  will-change: transform;

  svg {
    width: 1.625rem;
    height: 1.625rem;
  }

  @media (max-width: 768px) {
    width: 3rem;
    height: 3rem;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(0, 0, 0, 0.1);

    svg {
      width: 1.375rem;
      height: 1.375rem;
    }
  }
`;
