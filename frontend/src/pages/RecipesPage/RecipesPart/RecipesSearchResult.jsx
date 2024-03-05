import React from "react";
import { useState } from "react"
import { Box, Grid, Image, InfiniteScroll, } from "grommet";
import styled from "styled-components";
import RecipeListed from "./RecipeListed";

const RecipesSearchResult = ({ filteredRecipes }) => {
  const groupedRecipes = [];
  if (filteredRecipes.length > 0) {
    for (let i = 0; i < filteredRecipes.length; i += 3) {
      groupedRecipes.push(filteredRecipes.slice(i, i + 3));
    }
  }

  return (
    <>
      <Box>
        <InfiniteScroll items={groupedRecipes} step={1} >
          {(recipeGroup, index) => (
            <Grid key={index} columns={{ count: 3, size: 'auto' }} gap="medium">
              {recipeGroup.map(recipe =>
                <RecipeListed key={recipe.id} recipe={recipe} />
              )}
            </Grid>
          )}
        </InfiniteScroll>
      </Box>
    </>
  )
}


export default RecipesSearchResult