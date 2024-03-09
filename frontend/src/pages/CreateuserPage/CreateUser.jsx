import React from "react";
import { useState } from "react"
import { Box, Button, Grid, TextInput } from "grommet";
import ProfileImage from "./ProfileImage";
import styled from "styled-components";
import ProfileInput from "./ProfileInput";

const CenteredContainer = styled(Box)`
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  padding: medium;
`;

const CenterBox = styled(Box)`
  border: solid;
  border-color: green;
  border-width: medium;
  padding: large;
  border-radius: small;
  width: 90%;
`;

const CreateUser = ({handleUserAdd}) => {

  const [name, setName] = useState('')
  const [surName, setSurName] = useState('')
  const [file, setFile] = useState(null);
  const [imageSrc, setImageSrc] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('adsdas')
  }

  return (
    <CenteredContainer>
      <CenterBox >
        <Grid
          margin={"15px"}
          fill
          rows={["auto", "flex"]}
          columns={["auto", "flex"]}
          areas={[
            ["fileInput", "profileInput"],
            ["xxxx", "submit"],
          ]}
        > 
        
          <Box gridArea='fileInput'>
            <ProfileImage file={file} setFile={setFile} imageSrc={imageSrc} setImageSrc={setImageSrc} />
          </Box>
          

          <Box gridArea='profileInput' width="350px"> 
            <ProfileInput username={username} setUsername={setUsername} password={password} password2={password2}
            setPassword={setPassword} setPassword2={setPassword2}/>
          </Box>
      
          <Box gridArea="submit" width="250px">
            <Button label="luo käyttäjä" size="large" color="green" onClick={handleSubmit}/>
          </Box>

        </Grid>
      </CenterBox >
    </CenteredContainer >

  )
}

export default CreateUser