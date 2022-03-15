import React from 'react';
import { Container, Section } from 'react-bulma-components';
import { UrlForm } from '../components/UrlForm';
import { Links } from '../components/Links';

export const Home: React.FC = () => (
  <Section>
    <Container>
      <UrlForm />
      <Links />
    </Container>
  </Section>
);
