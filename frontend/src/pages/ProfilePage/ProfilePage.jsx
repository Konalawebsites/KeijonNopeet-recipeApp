import { useState } from "react"
import styled from "styled-components"
import { Box, Card, Image } from 'grommet'
import UserAvatar from "./UserAvatar";

const CenteredContainer = styled(Box)`
  display: flex;
  margin: 10px;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  padding: medium;
`;

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

const ProfilePage = ({ loggedUserData }) => {
  const userRecipes = loggedUserData?.recipes

  return (
    <CenteredContainer>
      <UserAvatar loggedUserData={loggedUserData} />
    </CenteredContainer>
  )
}

export default ProfilePage
