import React from 'react';
import { Link } from 'react-router-dom';
import { Link as StyledLink, Flex, Box, Image } from '@chakra-ui/core';

import logo from '../logo.png';

const Header = () => {
  return (
    <Flex
      as="header"
      width="100%"
      justify="space-between"
      align="center"
      backgroundColor="white"
      p={5}
      boxShadow="0 6px 15px 0 rgba(0,0,0,0.07);"
    >
      <Box width="200px">
        <Image src={logo} alt="logo" />
      </Box>
      <nav>
        <StyledLink as={Link} to="/home">
          Get Started
        </StyledLink>
      </nav>
    </Flex>
  );
};

export default Header;
