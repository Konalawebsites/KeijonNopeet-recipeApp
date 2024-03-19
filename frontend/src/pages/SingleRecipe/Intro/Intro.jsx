import { Box, Card, Grid, Heading, Image, Stack, Text } from "grommet"
import IntroBottomBar from "./IntroBottomBar";
import IntroFilters from "./IntroFilters";
import SpeedOMeter from "./Speedometer";
import UserCard from "./UserCard";


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

      <UserCard props={recipe} />

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