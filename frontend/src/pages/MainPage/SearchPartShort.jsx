import React from "react";
import { useState } from "react"
import BrowseRecipeForm from "pages/RecipesPage/SearchPart/BrowseRecipeForm";
import NewestRecipes from "pages/RecipesPage/SearchPart/NewestRecipes";

import { Box, Form, Grid, Header, Sidebar, Text } from "grommet";
import styled from "styled-components";


const SearchPartShort = ({ recipes }) => {

  return (
    <Box>
        <Grid
          fill
          rows={["auto", "flex"]}
          columns={["auto", "flex"]}
          areas={[
            ["header", "header", "header", "sidebar"],
            ["xxx", "xxx", "xxx", "sidebar"],
            ["xxx", "xxx", "xxx", "sidebar"],
            ["xxx", "xxx", "xxx", "sidebar"],
          ]}
        >
          <Box gridArea="header">
            <BrowseRecipeForm/>
          </Box>

      
        </Grid>
      </Box>
  )
}

export default SearchPartShort