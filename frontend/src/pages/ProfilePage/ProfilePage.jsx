import { useState } from "react"
import styled from "styled-components"
import { Box } from 'grommet'
import UserAvatar from "./UserAvatar";

const CenteredContainer = styled(Box)`
  display: flex;
  margin: 10px;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  padding: medium;
`;


const ProfilePage = ({ loggedUserData }) => {

  return (
    <CenteredContainer>
      <UserAvatar loggedUserData={loggedUserData} />
    </CenteredContainer>
  )
}

export default ProfilePage
