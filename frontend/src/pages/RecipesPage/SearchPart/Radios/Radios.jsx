import React from "react"
import { Box } from "grommet"
import Radio from "./Radio"
import Radio2 from "./Radio2"
import Radio3 from "./Radio3"


const Radios = ({categoryTerm, setCategoryTerm, mainIngredientTerm, setMainIngredientTerm, dietTerm, setDietTerm}) => {

  return (
    <Box direction="row" gap="200px">
      <Box gridArea="radio">
        <Radio {...{categoryTerm, setCategoryTerm}}/>
      </Box>

      <Box align="center" gridArea="radio2">
        <Radio2 {...{mainIngredientTerm, setMainIngredientTerm}} />
      </Box>

      <Box gridArea="radio3">
        <Radio3 {...{dietTerm, setDietTerm}}/>
      </Box>

    </Box>
  )
}

export default Radios