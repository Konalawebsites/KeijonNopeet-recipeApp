import {  Button, Menu, Box } from 'grommet';
import { Logout } from 'grommet-icons'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';
import UserCard from 'pages/SingleRecipe/Intro/UserCard';
import { StyledNavButton } from 'styles/styles';

const NavBox = styled(Box)`
  gap: 50px;
  `

const BigMenu = ({ loggedUserData, handleLogOut }) => {

  return (
    <NavBox direction='row'>
      <NavLink to="">
        <StyledNavButton primary label="Etusivu" />
      </NavLink>
      <NavLink to="recipes">
        <StyledNavButton primary label="Reseptit" />
      </NavLink>

      <NavLink to="addrecipe">
        <StyledNavButton primary label="Lisää oma resepti" />
      </NavLink>
      <Menu label={<UserCard props={loggedUserData}/>}
        items={[{ label: <NavLink to="profile"> PROFIILI </NavLink> },
        ]}
      />
      <Button onClick={handleLogOut} margin={{top: "50px", right: "40px"}}>
        <Logout  color='white' />
      </Button>

    </NavBox>
  )
};

export default BigMenu
