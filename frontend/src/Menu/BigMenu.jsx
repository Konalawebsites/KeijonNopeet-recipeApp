
import { useState } from 'react';
// @ts-ignore
import { Header, Button, Text, Menu, Box } from 'grommet';
import { User, Logout } from 'grommet-icons'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';
import React from 'react';

const StyledHeader = styled(Header)`
  background: ${(props) => props.theme.global.colors.brand};
  padding-left: medium;
  padding-right: small;
  padding-top: small;
  padding-bottom: small;
  elevation: medium;
`;

const StyledNavButton = styled(Button)`
  text-decoration: underline #454545;
  text-underline-offset: 5px;
  background: neutral-1
`
const BigMenu = ({ user, handleLogOut }) => {

  return (

    <Box direction='row' gap='large'>
      <NavLink to="">
        <StyledNavButton primary label="Etusivu" />
      </NavLink>
      <NavLink to="recipes">
        <StyledNavButton primary label="Reseptit" />
      </NavLink>

      <NavLink to="addrecipe">
        <StyledNavButton primary label="Lisää oma resepti" />
      </NavLink>

      <Text> kirjautunut: {user.username} </Text>
      <Menu label={<User color="white" size="medium" />}
        items={[{ label: <NavLink to="profile"> PROFIILI </NavLink> },
        ]}
      />
      <Button onClick={handleLogOut}>
        <Logout color='white' />
      </Button>

      <Menu
        label={<User color="white" size="medium" />}
        items={[
          { label: <NavLink to="signin"> Kirjaudu </NavLink> },
          { label: <NavLink to="createuser"> Luo käyttäjä </NavLink> },
        ]}
      />
    </Box>
  )
};

export default BigMenu
