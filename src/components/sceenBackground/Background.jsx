import React from 'react';
import { StyledBackground } from './background.styled';

const Background = ({ children }) => {
  return <StyledBackground>{children}</StyledBackground>;
};

export default Background;
