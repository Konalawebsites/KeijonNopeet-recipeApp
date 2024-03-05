import { Box, Button } from "grommet"
import { Contact, Like, StarOutline } from 'grommet-icons';
import styled from "styled-components";

const ButtonBox = styled(Box)`
width: 150px;
height: 40px;
`


const IntroFilters = ({recipe}) => {
  console.log(recipe)
  return (
    <Box margin="10px" direction="row-responsive" gap="6px" justify="center" >

      <Box>
        <Button label={recipe.diet} size="medium" />
      </Box>
      
      <Box width="100px">
        <Button label={recipe.main_ingredient} size="medium"/>
      </Box>
    
      <Box width="100px">
        <Button label={recipe.category} size="medium"/>
      </Box>
    </Box>
  )
}

export default IntroFilters