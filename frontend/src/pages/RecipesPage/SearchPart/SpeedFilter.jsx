import { Box, Grid, RangeSelector, Stack, Text } from "grommet"
import { useState } from "react"
import styled from "styled-components"
import turtle from 'icons/turtle.png'
import rabbit from 'icons/rabbit.png'

const StyledBox = styled(Box)`
  display: flex;
  top: 0
  align-items: center; /* Center vertically */
  margin: 10px;
`
const SpeedFilter = ({speedTerms, setSpeedTerms}) => {


  const turtleLogo = <img className="logo" src={turtle} alt="logo" width="50px" />
  const rabbitLogo = <img className="logo" src={rabbit} alt="logo" width="50px" />

  return (
    <Box margin="10px">
      <Box direction="row">
      <StyledBox 
        round="small" margin={{right: "25px"}}>
        {turtleLogo}
      </StyledBox>

      <Stack>
      <Box direction="row" justify="between" >
        {[10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map(value => (
          <Box key={value} pad="small" border={false}>
            <Text style={{ fontFamily: 'monospace' }}>
              {value}
            </Text>
          </Box>
          
        ))}
       
      </Box>
      <Box align="center" justify="end" height="100%"> <Text> NOPEUSFILTTERI 3000 </Text></Box>
        <RangeSelector
          direction="horizontal"
          invert={false}
          min={1}
          max={100}
          size="full"
          round="small"
          values={speedTerms}
          onChange={values => setSpeedTerms(values)}
        
        />
        </Stack>
         <StyledBox 
        round="small">
        {rabbitLogo}
      </StyledBox>
      </Box>

    </Box>

  )
}


export default SpeedFilter