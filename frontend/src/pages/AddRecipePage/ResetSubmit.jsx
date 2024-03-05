import React from "react";
import { useState } from "react"
import { Button, Box, } from "grommet";


const ResetSubmit = ({handleReset, handleSubmit}) => {
  return (
    <Box direction="row" gap="15px">
      <Button label="nollaa kaikki" size="large" color="red" onClick={handleReset}/>
      <Button label="lisää tämä resepti" size="large" color="green" onClick={handleSubmit}/>
    </Box>
  )
}


export default ResetSubmit