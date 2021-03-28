import React from 'react';
import styled from '@emotion/styled';
import { Colors } from '../styles/variables';

const CyanHighlight = styled.span`
  color: ${Colors.cyan};
`;

const Hero = () => {
  return (
    <div>
      <h1>
        Hi, I'm <CyanHighlight>Yahya Jideh</CyanHighlight>.
      </h1>
      <h2>I love to build things.</h2>
      <p>I also love to create engaging ui and memorable products.</p>
    </div>
  );
};

export default Hero;
