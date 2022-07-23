import React from 'react';
import { StyledLoaderBox, StyledLoader } from './loader.styled';
import { Oval } from 'react-loader-spinner';
import { varStyle } from '../../styles/vars';

const Loader = () => {
  return (
    <StyledLoaderBox>
      <StyledLoader>
        <Oval
          ariaLabel="loading-indicator"
          height={100}
          width={100}
          strokeWidth={3}
          strokeWidthSecondary={1}
          color={varStyle.colors.dark}
          secondaryColor="white"
        />
      </StyledLoader>
    </StyledLoaderBox>
  );
};

export default Loader;
