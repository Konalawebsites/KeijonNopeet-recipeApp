// @ts-ignore
import {Box, Header, RadioButtonGroup } from "grommet"
// @ts-ignore
import { useState } from "react"
import styled from 'styled-components';
import nomilk from 'icons/no-milk.png'
import vegan from 'icons/vegan.png'
import glutenfree from 'icons/gluten-free.png'

const StyledBox = styled(Box)`
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  margin: 10px;
  border: ${({ 
// @ts-ignore
  isSelected }) => isSelected ? '2px solid black' : 'none'};

`
const Radio3 = ({dietTerm, setDietTerm}) => {

  const nomilkLogo = <img className="logo" src={nomilk} alt="logo" width="80px" />
  const veganLogo = <img className="logo" src={vegan} alt="logo" width="80px" />
  const glutenfreeLogo = <img className="logo" src={glutenfree} alt="logo" width="80px" />

  const onClick = (value) => {
    setDietTerm(value)
  }

  return (
    <Box>
      <Header gridArea="header" justify="center" margin={{ bottom: "5px" }}> Erityisruokavalio </Header>
      <StyledBox  onClick={() => onClick('maidoton')}
        // @ts-ignore
        isSelected={dietTerm === 'maidoton'}
        round="small">
        {nomilkLogo}
      </StyledBox>
      <StyledBox onClick={() => onClick('vegaani')} 
        // @ts-ignore
        isSelected={dietTerm === 'vegaani'}
        round="small"> 
        {veganLogo}
      </StyledBox>
      <StyledBox onClick={() => onClick('gluteeniton')} 
        // @ts-ignore
        isSelected={dietTerm === 'gluteeniton'}
        round="small">
        {glutenfreeLogo}
      </StyledBox>
    </Box>

  )
}

export default Radio3