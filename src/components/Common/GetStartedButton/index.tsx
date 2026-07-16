import Link from 'next/link';
import { LinkTo } from './styles';

const GetStartedButton = ({ padding }: { padding: string }) => {
  return (
    <LinkTo
      style={{
        padding: padding,
      }}
      href="https://wa.me/918885099004?text=Hi%20IFESM%20Group%2C%20I%20would%20like%20to%20enquire%20about%20your%20Industrial%20Safety%20services."
      target="_blank"
    >
      Enquire Now
    </LinkTo>
  );
};

export default GetStartedButton;
