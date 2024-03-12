import { useState } from "react"
import styled from "styled-components"
import { Box, Button, Card, CardHeader, CardBody, CardFooter, Image, Text } from 'grommet'

const StyledCard = styled(Card)`
  width: 300px; /* Adjust width as needed */
  border-radius: 10px; /* Adjust border radius as needed */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Adjust box shadow as needed */
  background-color: light-yellow
  align: center
`;

const ImageContainer = styled(Box)`
  width: 100%;
  height: 240px; /* Set a fixed height for the image container */
  display: flex;
  background-size: cover;
  background-position: center;
  border-radius: 20%; /* Make borders round */
  overflow: hidden; /* Hide overflow to maintain round shape */
`;

const StyledImage = styled(Image)`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`;

const UserAvatar = ({ loggedUserData }) => {

  const userRecipes = loggedUserData?.recipes

  return (
    <Box >
    <StyledCard >
      <CardHeader pad="medium" justify="center" background="light-2">{loggedUserData?.username} </CardHeader>
      <CardBody pad="medium" height="auto" background="light-1">
        <ImageContainer >
          {loggedUserData?.avatarUrl && (
            <StyledImage src={loggedUserData.avatarUrl} />
          )}
        </ImageContainer>

      </CardBody>
      <CardFooter pad={{ horizontal: "small" }} background="light-2"> 
      <Box >
        <Text> Reseptit: {userRecipes?.length} </Text>
      </Box>
      </CardFooter>
    </StyledCard>
  </Box>
  )
}

export default UserAvatar
