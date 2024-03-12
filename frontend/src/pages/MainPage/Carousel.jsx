import React from "react";
import { useState } from "react"
import RecipeListed from "pages/RecipesPage/RecipesPart/RecipeListed";

import { Box, Carousel, Header } from "grommet";
import styled from "styled-components";

const CarouselBox = styled(Box)`
border: solid 2px black;
height: 320px;
width: auto;
overflow: hidden;
margin: 25px
`

const TitleBox = styled(Box)`
border: solid 2px black;
width: 320px;
`

const CarouselComp = (props) => {
  const { list } = props;
  const { header } = props

  console.log('props:', props)


  // Ensure list is defined and not empty
  if (!list || list.length === 0) {
    return null;
  }

  const groupedRecipes = [];
  if (props.list.length > 0) {
    for (let i = 0; i < props.list.length; i += 3) {
      groupedRecipes.push(props.list.slice(i, i + 3));
    }
  }

  console.log('group', header, groupedRecipes)

  return (
    <CarouselBox fill>
      <TitleBox  >
        <Header margin="12px" align="center"> {header} </Header>
      </TitleBox>
      <Carousel height="350px" >
        {/* Map over the list of recipes and group them into arrays of three */}
        {groupedRecipes.map( (group, index) => (
          <Box key={index} direction="row" align="center" justify="center" gap="25px">
            {group.map( (recipe, index) => (
              <Box key={index} align="auto" justify="center">
                <RecipeListed key={recipe.id} recipe={recipe} />
              </Box>
            ))}
          </Box>
        ))}
      </Carousel>
    </CarouselBox>
  );
}

export default CarouselComp