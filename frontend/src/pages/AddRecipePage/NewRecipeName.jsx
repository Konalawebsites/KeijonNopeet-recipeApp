import React from "react";
import { useState } from "react"
import { Box, Text, TextInput} from "grommet";
import styled from "styled-components";


const NewRecipeName = ({ newReceptName, handleReceptName }) => { 
  return (<Box gridArea="newrecept" direction="row" gap="10px" margin={{ right: "170px" }} justify="center" alignContent="center">
    <Text margin={{ top: "20px" }} size="xxsmall"> Reseptin nimi </Text>
    <Box background="background-contrast" round="xsmall" width="medium"  >
      <TextInput
        aria-label="search"
        size="xxsmall"
        placeholder=""
        plain
        reverse
        value={newReceptName}
        onChange={handleReceptName}
        height="5px"
      />
    </Box>
  </Box>)
}


export default NewRecipeName