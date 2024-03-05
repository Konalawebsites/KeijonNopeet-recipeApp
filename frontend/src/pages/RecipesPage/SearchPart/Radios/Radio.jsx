import { Box, Grid, Header, RadioButtonGroup } from "grommet"
import { useState } from "react"


const Radio = ({categoryTerm, setCategoryTerm}) => {

  const options = [
    'alkupala', 'hampurilainen', 'juoma', 'jälkiruoka', 'keitto', 'leipä', 'lisuke', 'panos',
    'pasta', 'pizza', 'pääruoka', 'salaatti', 'sauce', 'scran', 'snack', 'suolainen leivottu'
  ];

  const optionsPerRow = Math.ceil(options.length / 2);
  const optionsRow1 = options.slice(0, optionsPerRow);
  const optionsRow2 = options.slice(optionsPerRow)

  return (
    <Grid
      fill
      rows={["auto", "flex"]}
      columns={["auto", "flex"]}
      areas={[
        ["header", "header"],
        ["options1", "options2"],
        ["options1", "options2"]
      ]}
    >
      <Header gridArea="header" justify="center" margin={{bottom:"20px"}}> Kategoria </Header>

      <Box gridArea="options1" >
        
        {/* Render the first row of options */}
        <RadioButtonGroup
          name="doc"
          options={optionsRow1}
          value={categoryTerm}
          onChange={(event) => setCategoryTerm(event.target.value)}
          gap="xsmall"
          
          
        />
        {/* Render the second row of options */}
      </Box>
      <Box gridArea="options2">
        <RadioButtonGroup 
          name="doc"
          options={optionsRow2}
          value={categoryTerm}
          onChange={(event) => setCategoryTerm(event.target.value)}
          gap="xsmall"
        />
      </Box>

    </Grid>


  )
}


export default Radio