
import { useState } from 'react';
// @ts-ignore
import { Header, Button, Text, Menu, Box } from 'grommet';
import { User, Logout } from 'grommet-icons'
import { NavLink } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
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
const NavBar = ({ user, setUser }) => {

  const navigate = useNavigate();

 

  const handleLogOut = () => {
    navigate('/')
    window.localStorage.clear()
    setUser(null)
  }

  return (
    <StyledHeader  >
      <Text size="large" color="text-strong">Keijon Nopeet </Text>

      <Box direction='row' gap='large'>
        <NavLink to="">
          <StyledNavButton primary label="Etusivu" />
        </NavLink>
        <NavLink to="recipes">
          <StyledNavButton primary label="Reseptit" />
        </NavLink>

        {user
          ? (<NavLink to="addrecipe">
            <StyledNavButton primary label="Lisää oma resepti" />
          </NavLink>)
          : (null)
        }
      </Box>

      {user ? (
        <>
          <Text> kirjautunut: {user.username} </Text>
          <Menu
          label={<User color="white" size="medium" />}
          items={[
            { label: <NavLink to="profile"> PROFIILI </NavLink> },
          ]}
        />
          <Button onClick={handleLogOut}>
            <Logout color='white'  />
          </Button>
        </>
      )
        : (<Menu
          label={<User color="white" size="medium" />}
          items={[
            { label: <NavLink to="signin"> Kirjaudu </NavLink> },
            { label: <NavLink to="createuser"> Luo käyttäjä </NavLink> },
          ]}
        />)}
    </StyledHeader>
  )
};

export default NavBar
