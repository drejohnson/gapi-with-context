import React from 'react';
import { Link } from 'react-router-dom';
import { Link as StyledLink, Flex, Box, Image } from '@chakra-ui/core';
import { useAuth } from '../contexts/auth';

import logo from '../logo.svg';

const Header = () => {
  const { googleApi } = useAuth();
  const { isAuthenticated, currentUser } = googleApi;

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
      <Box className="logo-container" width="50px">
        <Image src={logo} alt="logo" />
      </Box>
      {isAuthenticated ? (
        <Box>
          <StyledLink as={Link} to={`/${currentUser.googleId}/dashboard`}>
            <Image
              rounded="full"
              size="40px"
              src={currentUser.photoUrl}
              alt="avatar"
            />
          </StyledLink>
        </Box>
      ) : (
        <StyledLink as={Link} to="/">
          Get Started
        </StyledLink>
      )}
    </Flex>
  );
};

export default Header;
