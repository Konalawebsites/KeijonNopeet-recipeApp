import { Box, Grid, Text } from "grommet"

import RecipeListed from "../RecipesPart/RecipeListed";
import styled from "styled-components";
import { useState } from "react"

const StyledBox = styled(Box)`
  zoom: 30%;
  margin: 10px;
  align-items: center;
  backgroundColor: light-1
`

const NewestRecipes = ({ recipes }) => {

  const sortedRecipes = recipes.sort((a, b) => {
    return a.created.localeCompare(b.created);
  });

  return (
    <Box margin="10px" background="light-1">
      <Box> <Text> Uusimmat reseptit </Text></Box>
    {sortedRecipes.slice(0, 5).map(recipe =>
      
      <StyledBox key={recipe.id}>
        <RecipeListed recipe={recipe} />
      </StyledBox>)}

      </Box>
      
  )
}


export default NewestRecipes