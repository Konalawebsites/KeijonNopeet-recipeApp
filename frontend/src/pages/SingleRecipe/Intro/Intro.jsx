import { Avatar, Box, Card, Grid, Heading, Image, Stack, Text } from "grommet"
import { UserFemale } from 'grommet-icons';
import styled from "styled-components";
import IntroBottomBar from "./IntroBottomBar";
import IntroFilters from "./IntroFilters";
import SpeedOMeter from "./Speedometer";

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

      <StyledBox gridArea="user" direction="column" align="end" >
        <Card background="light-5" alignContent="center" justify="center" margin={{right:"10px"}}>
          <Text margin="10px" textAlign="end"> {recipe.creator}
            <Box align="center">
              <Avatar src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80" />
            </Box>
          </Text>
        </Card>
      </StyledBox>

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