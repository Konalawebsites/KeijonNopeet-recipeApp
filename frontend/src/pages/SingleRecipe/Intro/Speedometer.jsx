import { Avatar, Box, Card, Grid, Heading, Image, Stack, Text } from "grommet"
import { UserFemale } from 'grommet-icons';
import styled from "styled-components";
import IntroBottomBar from "./IntroBottomBar";
import IntroFilters from "./IntroFilters";
import speedometers from '../../../images';

const StyledImage = styled(Image)`
    width: 100%;
    height: 100%;
    object-fit: contain; /* Set the object-fit property to contain */
`

const SpeedOMeter = ( { recipespeed, size } ) => {
  
  if (recipespeed >= 0 && recipespeed <= 2) {
    var srcSpeedoMeter = speedometers[0]
  }
  else if (recipespeed > 2 && recipespeed <= 5) {
    var srcSpeedoMeter = speedometers[1]
  }
  else if (recipespeed > 5 && recipespeed <= 7) {
    var srcSpeedoMeter = speedometers[2]
  }
  else if (recipespeed > 7 && recipespeed <= 10) {
    var srcSpeedoMeter = speedometers[3]
  }
  else if (recipespeed > 10 && recipespeed <= 12) {
    var srcSpeedoMeter = speedometers[4]
  }
  else if (recipespeed > 12 && recipespeed <= 15) {
    var srcSpeedoMeter = speedometers[5]
  }
  else if (recipespeed > 15 && recipespeed <= 17) {
    var srcSpeedoMeter = speedometers[6]
  }
  else if (recipespeed > 17 && recipespeed <= 20) {
    var srcSpeedoMeter = speedometers[7]
  }
  else if (recipespeed > 20 && recipespeed <= 22) {
    var srcSpeedoMeter = speedometers[8]
  }
  else if (recipespeed > 22 && recipespeed <= 25) {
    var srcSpeedoMeter = speedometers[9]
  }
  else if (recipespeed > 25 && recipespeed <= 27) {
    var srcSpeedoMeter = speedometers[10]
  }
  else if (recipespeed > 27 && recipespeed <= 30) {
    var srcSpeedoMeter = speedometers[11]
  }
  else if (recipespeed > 30 && recipespeed <= 32) {
    var srcSpeedoMeter = speedometers[12]
  }
  else if (recipespeed > 32 && recipespeed <= 35) {
    var srcSpeedoMeter = speedometers[13]
  }
  else if (recipespeed > 35 && recipespeed <= 37) {
    var srcSpeedoMeter = speedometers[14]
  }
  else if (recipespeed > 37 && recipespeed <= 40) {
    var srcSpeedoMeter = speedometers[15]
  }
  else if (recipespeed > 40 && recipespeed <= 42) {
    var srcSpeedoMeter = speedometers[16]
  }
  else if (recipespeed > 42 && recipespeed <= 45) {
    var srcSpeedoMeter = speedometers[17]
  }
  else if (recipespeed > 45 && recipespeed <= 47) {
    var srcSpeedoMeter = speedometers[18]
  }
  else if (recipespeed > 47 && recipespeed <= 50) {
    var srcSpeedoMeter = speedometers[19]
  }
  else if (recipespeed > 50 && recipespeed <= 52) {
    var srcSpeedoMeter = speedometers[20]
  }
  else if (recipespeed > 52 && recipespeed <= 55) {
    var srcSpeedoMeter = speedometers[21]
  }
  else if (recipespeed > 55 && recipespeed <= 57) {
    var srcSpeedoMeter = speedometers[22]
  }
  else if (recipespeed > 57 && recipespeed <= 60) {
    var srcSpeedoMeter = speedometers[23]
  }
  else if (recipespeed > 60 && recipespeed <= 62) {
    var srcSpeedoMeter = speedometers[24]
  }
  else if (recipespeed > 62 && recipespeed <= 65) {
    var srcSpeedoMeter = speedometers[25]
  }
  else if (recipespeed > 65 && recipespeed <= 67) {
    var srcSpeedoMeter = speedometers[26]
  }
  else if (recipespeed > 67 && recipespeed <= 70) {
    var srcSpeedoMeter = speedometers[27]
  }
  else if (recipespeed > 70 && recipespeed <= 72) {
    var srcSpeedoMeter = speedometers[28]
  }
  else if (recipespeed > 72 && recipespeed <= 75) {
    var srcSpeedoMeter = speedometers[29]
  }
  else if (recipespeed > 75 && recipespeed <= 77) {
    var srcSpeedoMeter = speedometers[30]
  }
  else if (recipespeed > 77 && recipespeed <= 80) {
    var srcSpeedoMeter = speedometers[31]
  }
  else if (recipespeed > 80 && recipespeed <= 82) {
    var srcSpeedoMeter = speedometers[32]
  }
  else if (recipespeed > 82 && recipespeed <= 85) {
    var srcSpeedoMeter = speedometers[33]
  }
  else if (recipespeed > 85 && recipespeed <= 87) {
    var srcSpeedoMeter = speedometers[34]
  }
  else if (recipespeed > 87 && recipespeed <= 90) {
    var srcSpeedoMeter = speedometers[35]
  }
  else if (recipespeed > 90 && recipespeed <= 92) {
    var srcSpeedoMeter = speedometers[36]
  }
  else if (recipespeed > 92 && recipespeed <= 95) {
    var srcSpeedoMeter = speedometers[37]
  }
  else if (recipespeed > 95 && recipespeed <= 97) {
    var srcSpeedoMeter = speedometers[38]
  }
  else if (recipespeed > 97 && recipespeed <= 100) {
    var srcSpeedoMeter = speedometers[39]
  }
 
  return (
    <Box width={size} height={size}>
    <Stack>
          <StyledImage src={srcSpeedoMeter}   />
          <Text> {recipespeed} </Text>
        </Stack>

        </Box>
    
  )
}

export default SpeedOMeter