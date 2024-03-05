import React from "react";
import { useState } from "react"
import { Box, TextArea } from "grommet";
import styled from "styled-components";

const Instructions = ({ instructions, setInstructions }) => {

  const handleInstructionsChange  = (event) => setInstructions(event.target.value)

  return (
    <Box margin={{top: "5px"}} width="600px">
     <TextArea
     size="small"
      placeholder="kirjoita reseptin ohjeet tähän  "
      value={instructions}
      onChange={handleInstructionsChange}
    />
    </Box>
  )
}

export default Instructions