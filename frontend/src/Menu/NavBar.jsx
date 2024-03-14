
import { useState } from 'react';
// @ts-ignore
import { Box, Header, Text, ResponsiveContext } from 'grommet';
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import BigMenu from './BigMenu';
import ShortMenu from './ShortMenu';
import React from 'react';

const StyledHeader = styled(Header)`
  background: ${(props) => props.theme.global.colors.brand};
  padding-left: medium;
  padding-right: small;
  padding-top: small;
  padding-bottom: small;
  elevation: medium;
`;

const NavBar = ({ user, setUser }) => {

  const navigate = useNavigate();

  console.log(user)

  const screenSize = useContext(ResponsiveContext);
  const isSmallScreen = ['xsmall', 'small'].includes(screenSize);

  const handleLogOut = () => {
    navigate('/')
    window.localStorage.clear()
    setUser(null)
  }

  return (
    <StyledHeader >
      <Text size="large" color="text-strong">Keijon Nopeet </Text>
      <Box>
      {user
          ? (<BigMenu user={user} handleLogOut={handleLogOut} />)
          : (<ShortMenu />)
        }
      </Box>
    </StyledHeader>
  )
};

export default NavBar
