import React from 'react';
import { Container, Section } from 'react-bulma-components';
import { UrlForm } from '../components/UrlForm';

export const Home: React.FC = () => (
  <Section>
    <Container>
      <UrlForm />
    </Container>
  </Section>
);
