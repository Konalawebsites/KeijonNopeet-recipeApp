import React from "react";
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import { Box, Grid } from "grommet";

import Selectors from "./Selectors";
import NewRecipeName from "./NewRecipeName";
import AddFileForm from "./AddFileForm";
import styled from "styled-components";
import IngredientsTable from "./IngredientsForm";
import Instructions from "./Instructions";
import ResetSubmit from "./ResetSubmit";
import { useNavigate } from "react-router-dom";


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

function randomImgNameGenerator() {
  return uuidv4(); // Generate random UUID
}

const AddRecipePage = ({ handleRecipeAdd, handleImageAdd }) => {

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
  const navigate = useNavigate()

  const handleReset = (event) => {

    event.preventDefault()

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

    const awsImageName = randomImgNameGenerator()

    handleImageAdd({file, imageSrc, awsImageName })

    handleRecipeAdd({
      recipe_name: newReceptName,
      ingredients: ingredients,
      instructions: instructions,
      speed: recipespeed,
      category: category,
      main_ingredient: mainIngredient,
      diet: diets,
      imageName: awsImageName
    })

    setNewReceptName('')
    setIngredients([])
    setInstructions('')
    setRecipeSpeed('')
    setDiets([])
    setCategory('')
    setMainIngredient('')
    setFile(null)
    setImageSrc('')

    navigate('/')
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