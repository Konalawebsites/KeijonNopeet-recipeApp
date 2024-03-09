// @ts-ignore
import React from "react";
import { useState } from "react"
// @ts-ignore
import { Box, Button } from "grommet";
import styled from "styled-components";
import RecipesSearchResult from "./RecipesSearchResult";

const StyledButton = styled(Button)`
border: ${({
  // @ts-ignore
  isSelected }) => isSelected ? '2px solid blue' : '2px solid light-2'};
color: ${({
    // @ts-ignore
    isSelected }) => isSelected ? 'black' : '#333'};
background-color: ${({
      // @ts-ignore
      isSelected }) => isSelected ? 'orange' : 'light-5'};
width: 200px
`
const RecipesPart = ({ filteredRecipes, setFilteredRecipes }) => {

  const [filter, setFilter] = useState('')

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
    if (selectedFilter === 'abcSort') {
      menuSort('recipe_name');
    } else if (selectedFilter === 'mostLikesSort') {
      menuSort('likes')
    } else if (selectedFilter === 'newestSort') {
      menuSort('created')
    }
    else if (selectedFilter === 'speedSort') {
      menuSort('speed')
    }
  };

  const menuSort = (sortBy) => {
    const newFilteredRecipes = [...filteredRecipes];
    newFilteredRecipes.sort((a, b) => {
      if (a[sortBy] < b[sortBy]) return -1;
      if (a[sortBy] > b[sortBy]) return 1;
      return 0;
    });

    console.log('sortBy', sortBy)
    if (sortBy === 'likes' || sortBy === 'speed' || sortBy === 'created') {
      setFilteredRecipes(newFilteredRecipes.reverse())
    }
    else { setFilteredRecipes(newFilteredRecipes) }
  };

  return (
    <Box align="center" margin={{ top: "60px" }}>
      <Box direction="row" margin="10px" gap="45px">
        <StyledButton
          // @ts-ignore
          isSelected={filter === 'newestSort'} label="Uusimmat" onClick={() => handleFilterChange('newestSort')}></StyledButton>
        <StyledButton
          // @ts-ignore
          isSelected={filter === 'mostLikesSort'} label="Tykätyimmät" onClick={() => handleFilterChange('mostLikesSort')}></StyledButton>
        <StyledButton
          // @ts-ignore
          isSelected={filter === 'abcSort'} label="Aakkosittain" onClick={() => handleFilterChange('abcSort')}></StyledButton>
        <StyledButton
          // @ts-ignore
          isSelected={filter === 'speedSort'} label="Nopeuden mukaan" onClick={() => handleFilterChange('speedSort')}></StyledButton>
      </Box>
      <Box>
        <RecipesSearchResult filteredRecipes={filteredRecipes} />
      </Box>
    </Box>
  )
}

export default RecipesPart