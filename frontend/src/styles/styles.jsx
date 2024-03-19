import styled from "styled-components"
import { Button, Box } from "grommet"

export const StyledNavButton = styled(Button)`
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
export const CenteredContainer = styled(Box)`
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  padding: medium;
`;

export const CenterBox = styled(Box)`
  border: solid;
  border-color: white;
  border-width: medium;
  padding: large;
  border-radius: small;
  width: 90%;
`;

