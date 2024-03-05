import React from "react";
import { useState } from "react"
import BrowseRecipeForm from "./BrowseRecipeForm";
import Radios from "./Radios/Radios";
import NewestRecipes from "./NewestRecipes";
import { Box, Button, Grid } from "grommet";
import styled from "styled-components";
import SpeedFilter from "./SpeedFilter";

const StyledBox = styled(Box)`
backgroundColor: light-2
margin: 10px
`

const SearchPart = ({ recipes, searchTerm, handleSearchTerm, categoryTerm, setCategoryTerm, 
  mainIngredientTerm, setMainIngredientTerm, dietTerm, setDietTerm, speedTerms, setSpeedTerms, handleSearchButton, handleResetButton }) => {

  return (
    <StyledBox margin='10px' >
      <Grid
        fill
        rows={["auto", "flex"]}
        columns={["auto", "flex"]}
        areas={[
          ["header", "header", "header", "sidebar"],
          ["radios", "radios", "radios", "sidebar"],
          ["speedfilter", "speedfilter", "searchreset", "xxxx"],
        ]}
      >

        <Box gridArea="header" >
          <BrowseRecipeForm searchTerm={searchTerm} handleSearchTerm={handleSearchTerm} />
        </Box>

        <Box gridArea="sidebar">
          <NewestRecipes recipes={recipes} />
        </Box>

        <Box gridArea="radios" margin="40px" direction="row">
          <Radios {...{ categoryTerm, setCategoryTerm,
          mainIngredientTerm, setMainIngredientTerm, dietTerm, setDietTerm }} />
        </Box>

        <Box direction="row" gap="130px" background="light-1" margin={{left:"18px"}}>
          <Box gridArea="speedfilter" margin={{ left: "20px" }} >
            <SpeedFilter {...{ speedTerms, setSpeedTerms }} />
          </Box>

          <Box gridArea="searchreset" justify="center" align="center">
            <Button label="search" size="large" onClick={ handleSearchButton } />
          </Box>

          <Box gridArea="searchreset" justify="center" align="center" margin={{ left: "50px" }} >
            <Button label="reset filters" onClick={handleResetButton} />
          </Box>
        </Box>

      </Grid>
    </StyledBox >


  )
}

export default SearchPart