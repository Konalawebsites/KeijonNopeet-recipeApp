import React from "react";
import { useState, useRef, useEffect } from "react"
import { Box, Grid } from "grommet";

import Selectors from "./Selectors";
import NewRecipeName from "./NewRecipeName";
import CategoryMainIngredient from "./CategoryMainIngredient";
import AddFileForm from "./AddFileForm";
import styled from "styled-components";
import IngredientsTable from "./IngredientsForm";
import Instructions from "./Instructions";
import ResetSubmit from "./ResetSubmit";


const CenteredContainer = styled(Box)`
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  padding: medium;
`;

const CenterBox = styled(Box)`
  border: solid;
  border-color: green;
  border-width: medium;
  padding: large;
  border-radius: small;
  width: 90%;
`;

const AddRecipePage = ({ recipes, handleRecipeAdd, handleImageAdd }) => {

  const [newReceptName, setNewReceptName] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [instructions, setInstructions] = useState("")
  const [recipespeed, setRecipeSpeed] = useState('')
  const [diets, setDiets] = useState([])
  const [category, setCategory] = useState('')
  const [mainIngredient, setMainIngredient] = useState('')
  const [file, setFile] = useState(null);
  const [imageSrc, setImageSrc] = useState('')


  const handleReceptName = (event) => setNewReceptName(event.target.value)
  const handleReceptSpeed = (event) => setRecipeSpeed(event.target.value)

  const handleReset = (event) => {
    setNewReceptName('')
    setIngredients([])
    setInstructions('')
    setRecipeSpeed('')
    setDiets([])
    setCategory('')
    setMainIngredient('')
    setFile(null)
    setImageSrc('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    
    console.log('imageSRC,', imageSrc
    )
   
    handleRecipeAdd({
      recipe_name: newReceptName,
      ingredients: ingredients,
      instructions: instructions,
      speed: recipespeed,
      category: category,
      main_ingredient: mainIngredient,
      diet: diets,
      imageSrc: imageSrc
    })

    handleImageAdd({file, imageSrc})

    setNewReceptName('')
    setIngredients([])
    setInstructions('')
    setRecipeSpeed('')
    setDiets([])
    setCategory('')
    setMainIngredient('')
    setFile(null)
    setImageSrc('')
  }

  return (
    <CenteredContainer>
      <CenterBox >
        <Grid
          margin={"15px"}
          fill
          rows={["auto", "flex"]}
          columns={["auto", "flex"]}
          areas={[
            ["fileInput", "selectors"],
            ["fileInput", "instructions"],
            ["newrecept", "instructions"],
            ["ingredients", "instructions"],
            ["xxxxxx", "submit"],
          ]}
        >

          <Box gridArea="newrecept" margin={{ top: "25px", left: "10px" }}>
            <NewRecipeName handleReceptName={handleReceptName} newReceptName={newReceptName} />
          </Box>

          <Box gridArea="selectors" width="600px" alignContent="center" >
            <Selectors diets={diets} setDiets={setDiets} recipespeed={recipespeed} handleReceptSpeed={handleReceptSpeed}
              category={category} setCategory={setCategory} mainIngredient={mainIngredient} setMainIngredient={setMainIngredient} />
          </Box>
          <Box gridArea="ingredients">
            <IngredientsTable ingredients={ingredients} />
          </Box>

          <Box gridArea="instructions">
            <Instructions instructions={instructions} setInstructions={setInstructions} />
          </Box>

          <Box gridArea="fileInput">
            <AddFileForm file={file} setFile={setFile} imageSrc={imageSrc} setImageSrc={setImageSrc} />
          </Box>

          <CenteredContainer gridArea="submit">
            <ResetSubmit handleReset={handleReset} handleSubmit={handleSubmit} />

          </CenteredContainer>

        </Grid>
      </CenterBox >
    </CenteredContainer >
  )
}

export default AddRecipePage