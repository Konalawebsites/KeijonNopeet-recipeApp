import { Box, Header, RadioButtonGroup } from "grommet"
import { useState } from "react"
import styled from "styled-components"

const StyledBox = styled(Box)`
display: flex;
justify-content: center; /* Center horizontally */
align-items: center; /* Center vertically */

`

const Radio2 = ({mainIngredientTerm, setMainIngredientTerm}) => {

  return (
    <StyledBox>
      <Header margin={{bottom:"20px"}}> Pääraaka-aine </Header>

      <Box
        round="small">
        <RadioButtonGroup
          name="doc"
          options={['Kasvikset', 'Marjat tai hedelmät', 'Liha', 'Makkara ja jauheliha', 'Kana', 'Viljat ja riisi',
            'Kala ja äyriäiset', 'Maitotuotteet ja juusto']}
          value={mainIngredientTerm}
          onChange={(event) => setMainIngredientTerm(event.target.value)}
          gap="small"
        />
      </Box>
    </StyledBox>

  )
}


export default Radio2