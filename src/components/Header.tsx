import React from 'react';
import { Container, Navbar } from 'react-bulma-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { Logo } from './styles';

export const Header: React.FC = () => (
  <Navbar color={'success'}>
    <Container>
      <Navbar.Brand>
        <Navbar.Item renderAs={'div'}>
          <FontAwesomeIcon icon={faLink} size={'2x'} />
          <Logo>MultiLink</Logo>
        </Navbar.Item>
      </Navbar.Brand>
    </Container>
  </Navbar>
);
