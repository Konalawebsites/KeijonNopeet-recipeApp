import React from "react";
import { useState } from "react"
import { Button, Box, Table, TableHeader, TableCell, TableRow, TableBody, TextInput } from "grommet";
import { Add } from "grommet-icons";
import styled from "styled-components";

const IngredientsTable = ({ ingredients }) => {
  const [ingredientAmount, setIngredientAmount] = useState('')
  const [ingredientName, setIngredientName] = useState('')

  const handleIngredientAmount = (event) => setIngredientAmount(event.target.value)
  const handleIngredientName = (event) => setIngredientName(event.target.value)

  const handleAdd = () => {
    var newIngredient = { amount: ingredientAmount, name: ingredientName }
    ingredients.push(newIngredient)
    setIngredientName('')
    setIngredientAmount('')
  }

  return (
    <Box>
      <Table margin="15px">
        <TableHeader>
          <TableRow>
            <TableCell scope="col" border="bottom">
              <TextInput size="small" placeholder="määrä esim. 1/2 kg" value={ingredientAmount}
                onChange={handleIngredientAmount}
              />
            </TableCell>
            <TableCell scope="col" border="bottom">
              <TextInput size="small" placeholder="ainesosa esim. porkkanaa" value={ingredientName}
                onChange={handleIngredientName}
              />
            </TableCell>
            <TableCell>
              <Box direction="row" margin="15px" width="auto" gap="50px" >
                <Button size="small" label={<Add/>} onClick={handleAdd} />
              </Box>
            </TableCell>
          </TableRow>
        </TableHeader>

        <TableBody>
          {ingredients.map((row, index) => (
            <TableRow key={index} >
              <TableCell scope="row" >
                <p>{row.amount}</p>
              </TableCell>
              <TableCell>
                <strong>
                  {row.name}
                </strong></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>

  )
}



export default IngredientsTable