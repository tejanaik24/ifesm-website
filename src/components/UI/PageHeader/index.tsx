import { Wrapper } from './styles';

const PageHeader = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </Wrapper>
  );
};

export default PageHeader;
