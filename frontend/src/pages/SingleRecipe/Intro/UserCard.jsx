import { Box, Button } from "grommet"
import { Avatar, Card, CardHeader, CardBody, Image, Text} from 'grommet';
import styled from "styled-components";

const StyledContainer = styled(Box)`
display: flex;
justify-content: flex-end;
`;
const StyledCard = styled(Card)`
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  background-color: light-yellow;
  align: center;
  display: flex;
  flex-direction: column; /* Adjust the flex direction as needed */
  margin-left: auto; /* Align the card to the right */
  width: 80px; /* Adjust the width as needed */
  height: 80px;
`;
const ImageContainer = styled(Box)`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
border-radius: 40%;
overflow: hidden; /* Hide overflow to maintain round shape */

`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;


const UserCard = ({ recipe }) => {
  console.log(recipe)
  return (
    <StyledContainer>
      <StyledCard >
        <CardHeader justify="center" background="light-2"> 
          <Text> {recipe.user.username} </Text>
        </CardHeader>
        <CardBody justify="center" background="light-2">
        <ImageContainer >
          <StyledImage src={recipe.avatarUrl} />
        </ImageContainer>
        </CardBody>
      </StyledCard>
    </StyledContainer>

  )
}

export default UserCard