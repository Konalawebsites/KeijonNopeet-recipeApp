import React from "react";
import { useState } from "react"
import { Button, Box, Card, Select, Text, TextInput, Tip } from "grommet";
import { Cafeteria, Dashboard, StatusUnknown } from "grommet-icons"

import nomilk from 'icons/no-milk.png'
import vegan from 'icons/vegan.png'
import glutenfree from 'icons/gluten-free.png'
import mainingredient from 'icons/main-ingredient.png'
import styled from "styled-components";

const StyledBox = styled(Box)`
  border: solid;
  border-color: grey;
  border-width: small;
  `

const PhotoBox = styled(Card)`
  margin: 10px;
  border: ${({
  // @ts-ignore
  isSelected }) => isSelected ? '2px solid black' : 'none'};
  round: large;
  `
const StyledTextInput = styled(TextInput).attrs(() => ({
  'aria-labelledby': 'search-icon',
}))``;
const Selectors = ({ diets, setDiets, category, setCategory, mainIngredient, setMainIngredient, recipespeed, handleReceptSpeed }) => {
  const nomilkLogo = <img className="logo" src={nomilk} alt="logo" width="70px" />
  const veganLogo = <img className="logo" src={vegan} alt="logo" width="70px" />
  const glutenfreeLogo = <img className="logo" src={glutenfree} alt="logo" width="70px" />
  const mainingredientLogo = <img className="logo" src={mainingredient} alt="logo" width="20px" />
 
  const handleAdd = (value) => {
    if (diets.includes(value)) {
      var index = diets.indexOf(value);

      if (index !== -1) {
        diets.splice(index, 1);
      }
    }
    else (diets.push(value))

    setDiets([...diets])
  }

  return (
    <Box direction="row" >
      <StyledBox direction="row" gap="3px" justify="center"  >
        <PhotoBox isSelected={diets.includes('maidoton')} onClick={() => handleAdd('maidoton')} >
          {nomilkLogo}
        </PhotoBox>
        <PhotoBox isSelected={diets.includes('vegaaninen')} onClick={() => handleAdd('vegaaninen')}  >
          {veganLogo}
        </PhotoBox>
        <PhotoBox isSelected={diets.includes('gluteeniton')} onClick={() => handleAdd('gluteeniton')}  >
          {glutenfreeLogo}
        </PhotoBox>
      </StyledBox>
      <Box margin={{ left: "15px" }} gap="5px" >
        <Select
          size="small"
          options={['alkupala', 'hampurilainen', 'juoma', 'jälkiruoka', 'keitto', 'leipä', 'lisuke', 'panos',
            'pasta', 'pizza', 'pääruoka', 'salaatti', 'sauce', 'scran', 'snack', 'suolainen leivottu']}
          value={category}
          onChange={({ option }) => setCategory(option)}
          icon={<Cafeteria id="dashboard-icon" />}
        />
        <Select
          size="small"
          options={['kana', 'kala ja äyriäiset', 'kasvikset', 'liha', 'maitotuotteet ja juusto', 'makkara ja jauheliha',
            'marjat tai hedelmät', 'viljat ja riisi']}
          value={mainIngredient}
          onChange={({ option }) => setMainIngredient(option)}
          icon={mainingredientLogo}
        />

      </Box>
      <Box align="column">
        <Box width="100px" align="end" justify="center" margin={{ left: "5px" }}>
          <StyledTextInput
            size="small"
            placeholder="0-100"
            value={recipespeed}
            onChange={handleReceptSpeed}
            icon={<Dashboard id="dashboard-icon" />}
          />
        </Box>
      </Box>
      <Box style={{ position: 'fixed', top: "115px", right: "90px" }}>
          <Tip content={
            <Box width={{ max: 'xsmall' }} round="xsmall" >
              <Text>Arvioi reseptisi nopeus </Text>
              <Text>0 on hitain - 100 nopein</Text>
            </Box>
          }
          >
            <StatusUnknown />
          </Tip>
        </Box>
    </Box>
  )
}


export default Selectors