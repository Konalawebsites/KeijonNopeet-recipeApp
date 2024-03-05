import React from "react";
import { useState } from "react"
import { Box, Text, Select } from "grommet";
import styled from "styled-components";

const StyledBox = styled(Box)`
  direction: column;  
  justify: center
`

const CategoryMainIngredient = () => {
  return (
    <Box>
      <Box gridArea="form3" direction="row" margin="25px" gap="10px" height="50px">
        <Text margin={{ top: "5px" }}> Kategoria </Text>
        <Select
          placeholder=""
          options={['small', 'medium', 'large']} size="xsmall"
        />
      </Box>

      <Box gridArea="form4" direction="row" margin="25px" gap="10px" height="50px" >
        <Text margin={{ top: "5px" }}> Pääraaka-aine </Text>
        <Select
          placeholder=""
          options={['small', 'medium', 'large']} size="xsmall"
        />
      </Box>
    </Box>
  )
}

export default CategoryMainIngredient