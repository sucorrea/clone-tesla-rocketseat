import { ReactNode } from 'react';

import { Container } from './styles';

interface PageProps {
  children?: ReactNode;
}

function Page({ children }: PageProps) {
  return (
    <Container>
      {/* <h1>Page</h1> */}
    </Container>
  );
};

export default Page;
