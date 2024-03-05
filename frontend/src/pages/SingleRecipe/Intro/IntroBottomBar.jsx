import { Box, Button, Stack, Text } from "grommet"
import { Contact, Like, StarOutline } from 'grommet-icons';
import styled from "styled-components";

const ButtonBox = styled(Box)`
width: 150px;
height: 40px;
`

const IntroBottomBar = ({ recipe }) => {
  return (
    <Box margin="10px" direction="row" gap="20px" justify="center" >

      <ButtonBox>
        <Button label={<StarOutline />} size="xlarge" />
      </ButtonBox>

      <ButtonBox width="100px">
        <Stack anchor="top-right">
          <Box>
            <Button label={<Like />} size="xlarge" />
          </Box>
          <Box  >
            <Text margin={{right: '40px'}}> {recipe.likes} </Text>
          </Box>
        </Stack>
      </ButtonBox>

      <ButtonBox width="100px">
        <Stack anchor="top-right">
          <Box>
            <Button label={<Contact />} size="xlarge" />
          </Box>
          <Box  >
            <Text margin={{right: '40px'}}> {recipe.comments.length} </Text>
          </Box>
        </Stack>
      </ButtonBox>
    </Box >
  )
}

export default IntroBottomBar