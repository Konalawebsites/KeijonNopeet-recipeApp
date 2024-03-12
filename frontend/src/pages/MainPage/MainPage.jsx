import React from "react";
import { useState } from "react"
import { Box, Heading, InfiniteScroll } from "grommet";

import styled from "styled-components";

import CarouselComp from "./Carousel";

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

const MainPage = ({ recipes }) => {

  const categories = Object.values(recipes?.reduce((acc, x) => {
    acc[x.category] = [...(acc[x.category] || []), x];
    return acc;
  }, {}));

  const diets = Object.values(recipes?.reduce((acc, x) => {
    acc[x.diet] = [...(acc[x.diet] || []), x];
    return acc;
  }, {}));

  const main_ingredients = Object.values(recipes?.reduce((acc, x) => {
    acc[x.main_ingredients] = [...(acc[x.main_ingredients] || []), x];
    return acc;
  }, {}));

  console.log('categories', categories)
  console.log('diets', diets)
  console.log('diets', main_ingredients)


  const listOfCarousels = [
  <CarouselComp list={categories[0]} header="pääruoat" />,
  <CarouselComp list={categories[1]} header="jälkiruoat" />,
  <CarouselComp list={categories[2]} header="ihanat panokset" />,
  <CarouselComp list={categories[3]} header="tuhdit pastat" />, 
  <CarouselComp list={categories[4]} header="pizzat" />,
  <CarouselComp list={categories[5]} header="lisukkeet" />,
  <CarouselComp list={categories[6]} header="hampurilaiset" />,
  <CarouselComp list={categories[7]} header="cocktailit" />,
  <CarouselComp list={categories[8]} header="suolaiset leivonnat" />,
  <CarouselComp list={categories[9]} header="scranit" />,
  <CarouselComp list={categories[10]} header="salaatit" />,
  <CarouselComp list={categories[11]} header="keitot ja sopat" />,
  <CarouselComp list={categories[12]} header="kastikkeet ja soosit" />,
  <CarouselComp list={categories[13]} header="snacksit" />,
  <CarouselComp list={categories[14]} header="leivät" />,
  
]
  const shuffle = (array) => { 
    return array.sort(() => Math.random() - 0.5); 
};

const shuffledCarousels = shuffle(listOfCarousels)


  return (
    <CenteredContainer>
      <CenterBox >
        <Heading margin="10px"> Etusivu </Heading>

        <InfiniteScroll items={shuffledCarousels}>
          {(carouselComponent, index) => (
          <Box key={index} flex={false}> {carouselComponent} </Box>
          )
          }

        </InfiniteScroll>
      </CenterBox>
    </CenteredContainer>
  )
}

export default MainPage