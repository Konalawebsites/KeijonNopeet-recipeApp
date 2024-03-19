import { Menu, Box } from 'grommet';
import { User } from 'grommet-icons'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';
import { StyledNavButton } from 'styles/styles';


const NavBox = styled(Box)`
  gap: 150px;
  `

const ShortMenu = () => {

  return (
    <NavBox direction='row' >
        <NavLink to="">
          <StyledNavButton primary label="Etusivu" />
        </NavLink>
        <NavLink to="recipes">
          <StyledNavButton primary label="Reseptit" />
        </NavLink>

        <NavLink to="us">
          <StyledNavButton primary label="Meistä" />
        </NavLink>
   
      <Menu margin={{top: "43px", right: "50px"}}
        label={<User color="white" size="medium" />}
        items={[
          { label: <NavLink to="signin"> Kirjaudu </NavLink> },
          { label: <NavLink to="createuser"> Luo käyttäjä </NavLink> },
        ]}
      />
    </NavBox>

  )
};

export default ShortMenu
