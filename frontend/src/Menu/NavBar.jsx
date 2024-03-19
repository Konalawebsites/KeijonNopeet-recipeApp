import { Box, Button, Header, ResponsiveContext } from 'grommet';
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import BigMenu from './BigMenu';
import ShortMenu from './ShortMenu';
import keijonnopeet from 'icons/keijonnopeet.png'


const StyledHeader = styled(Header)`
  padding-left: medium;
  padding-right: small;
  padding-top: small;
  padding-bottom: small;
  margin: 15px;
  display: flex;
  background: ${(props) => props.theme.global.colors.background};
`;

const StyledNavButton = styled(Button)`
  text-decoration: underline #454545;
  text-underline-offset: 5px;
  background: ${(props) => props.theme.global.colors.brand};
  border: 5px;
  margin-top: 50px;
  &:hover {
    background: black;
    color: white; 
  }
`

const NavBar = ({ user, loggedUserData, setUser }) => {

  const navigate = useNavigate();

  const keijonnopeetLogo = <img className="logo" src={keijonnopeet} alt="logo" width="400px" />

  const screenSize = useContext(ResponsiveContext);
  const isSmallScreen = ['xsmall', 'small'].includes(screenSize);

  const handleLogOut = () => {
    navigate('/')
    window.localStorage.clear()
    setUser(null)
  }

 return (
    <StyledHeader >
      <Box >
        {keijonnopeetLogo}
      </Box>
      <Box >
        {user
          ? (<BigMenu loggedUserData={loggedUserData} handleLogOut={handleLogOut} />)
          : (<ShortMenu />)
        }
      </Box>
    </StyledHeader>
  )
};

export default NavBar