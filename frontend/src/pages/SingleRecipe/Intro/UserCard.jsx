import { Box, Button } from "grommet"
import { Avatar, Card, Text } from 'grommet';
import styled from "styled-components";

const StyledBox = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;


const UserCard = ({recipe}) => {
  console.log(recipe)
  return (
    <StyledBox gridArea="user" direction="column" align="end" >
        <Card background="light-5" alignContent="center" justify="center" margin={{right:"10px"}}>
          <Text margin="10px" textAlign="end"> {recipe.user.username}
            <Box align="center">
              <Avatar src={recipe.avatarUrl} />
            </Box>
          </Text>
        </Card>
      </StyledBox>
   
  )
}

export default UserCard