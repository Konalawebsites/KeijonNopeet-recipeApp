import { Box, Form, Grid, Text, TextInput, } from "grommet"
import { Search as SearchIcon } from 'grommet-icons';
import { useState } from "react";
import styled from "styled-components";

const BrowseRecipeForm = ({ searchTerm, handleSearchTerm }) => {
  
  return (
      <Box background="light-1" margin="10px">
        <Form >
          <Text size="xxsmall"> Reseptihaku </Text>
          <Box background="background-contrast" round="xsmall" width="medium"  >
            <TextInput
              aria-label="search"
              icon={<SearchIcon />}
              size="xxsmall"
              placeholder="Hakukenttä"
              plain
              reverse
              value={searchTerm}
              onChange={handleSearchTerm}
            />
          </Box>
        </Form>
      </Box>
      
  )
}


export default BrowseRecipeForm