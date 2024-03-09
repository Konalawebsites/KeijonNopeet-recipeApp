import React from "react";
import { useState } from "react"
import { Box, Data, DataTable, Grid, Image, Text } from "grommet";
import styled from "styled-components";

import SearchPartShort from "pages/MainPage/SearchPartShort";
import Intro from "./Intro/Intro";
import CommentSection from "./Intro/CommentSection";

const StyledImage = styled(Image)`
  margin: large;
  objectFit: scale-down;
  width: 400px;
  height: 400px;
`

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
 
const SingleRecipe = ({ recipe, recipes }) => {

  return (
    <CenteredContainer>
      <CenterBox >
        <Box>
          <SearchPartShort recipes={recipes} />
        </Box>
        <Grid
          fill
          rows={["auto", "flex"]}
          columns={["auto", "flex"]}
          areas={[
            ["image", "basicInfo"],
            ["ingredients", "instructions"],
            ["ingredients", "instructions"],
            ["comments", "ad"],
          ]}
        >

          <Box gridArea="image" margin="20px">
            <StyledImage src={recipe.imageUrl} />
          </Box>

          <Box gridArea="basicInfo" margin="6px">
            <Intro recipe={recipe} />
          </Box>

          <Box gridArea="ingredients" margin={{ left: "50px", top: "50px", bottom: "50px" }}>
            <Text> Raaka-aineet </Text>
            <Data
              data={recipe.ingredients}>
              <DataTable />
            </Data>
          </Box>

          <Box gridArea="instructions" margin={{ left: "250px", top: "50px" }}>
            <Text margin={{ bottom: "5px" }}> Ohjeet </Text>
            <Text> {recipe.instructions} </Text>
          </Box>

          <Box gridArea="comments" margin={{ left: "50px", top: "50px", bottom:"50px" }}>
            <CommentSection recipe={recipe}/>
          </Box>
        </Grid>
      </CenterBox>
    </CenteredContainer >
  )
}

export default SingleRecipe