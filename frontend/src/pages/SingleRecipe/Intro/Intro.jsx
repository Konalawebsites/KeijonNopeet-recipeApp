import { Avatar, Box, Card, Grid, Heading, Image, Stack, Text } from "grommet"
import { UserFemale } from 'grommet-icons';
import styled from "styled-components";
import IntroBottomBar from "./IntroBottomBar";
import IntroFilters from "./IntroFilters";
import SpeedOMeter from "./Speedometer";
import UserCard from "./UserCard";

const StyledBox = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const speedometerSize = "250px"

const Intro = ({ recipe }) => {
  return (
    <Grid
      fill
      rows={["auto", "flex"]}
      columns={["auto", "flex"]}
      areas={[
        ["heading", "user"],
        ["speed", "filters"],
        ["bottombar", "bottombar"]
      ]}
    >
      <Box gridArea="heading" >
        <Heading size="small"> {recipe.recipe_name} </Heading>
      </Box>

      <UserCard recipe={recipe} />

      <Box gridArea="speed" margin="10px" align="center" justify="center">
        <SpeedOMeter recipespeed={recipe.speed} size={speedometerSize} />
      </Box>

      <Box gridArea="filters" margin="10px" align="center" justify="center" background="light-1">
        <IntroFilters recipe={recipe} />
      </Box>

      <Box gridArea="bottombar" >
        <IntroBottomBar recipe={recipe} />
      </Box>

    </Grid>
  )
}

export default Intro