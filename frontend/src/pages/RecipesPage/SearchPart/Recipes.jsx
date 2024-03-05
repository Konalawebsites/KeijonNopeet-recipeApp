import React from "react";
import { useState } from "react"

import { Box } from "grommet";

const Recipes = ({ recipes }) => {

  return (
    recipes.map(recipe => 
        <Box key={recipe.id}> {recipe.recipe_name} </Box>
    )
    
    )
}

export default Recipes