import React from "react";
import { useState } from "react"
import { Avatar, Box, Button, Card, Image, ResponsiveContext, Stack, Text } from "grommet";
import styled from "styled-components";
import { Like, Trigger } from 'grommet-icons';
import { useNavigate } from "react-router-dom";

const StyledImage = styled(Image)`
  margin: large;
  objectFit: scale-down;
  width: 200px;
  height: 200px;
`
const RecipeListed = ({ recipe }) => {

  const navigate = useNavigate();
  
  const handleNavigate = () =>  {
    navigate(`/recipes/${recipe.id}`) 
  }
  
  return (
    <Box onClick={handleNavigate} >
      <Card align="center" width="250px">
        <Box margin="20px"  >
          <Stack anchor="top-right" >
            <StyledImage src={recipe.imageUrl} />
            {recipe.speed > 90 && <Trigger size="medium" color="orange" />}
            <Box margin="10px" >
              <Like size="large" />
              <Text textAlign="center"> {recipe.likes} </Text>
            </Box>
          </Stack>
        </Box>
        <Box align="center">
          <Text key={recipe.id}> {recipe.recipe_name} </Text>
        </Box>
      </Card>
    </Box>
  )
}

export default RecipeListed