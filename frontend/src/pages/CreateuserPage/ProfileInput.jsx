import React from "react";
import { Box, TextInput } from "grommet";

const ProfileInput = ({ username, setUsername, password, password2, setPassword, setPassword2 }) => {
  return (
    <Box>
      <Box >
        username
        <TextInput
          type="text"
          id='username'
          value={username}
          name="Username"
          onChange={({ target }) => setUsername(target.value)}
        />
      </Box>

      <Box >
        password
        <TextInput
          type="password"
          id='password'
          value={password}
          name="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
        repeat your password
        <TextInput
          type="password"
          id='password2'
          value={password2}
          name="Password2"
          onChange={({ target }) => setPassword2(target.value)}
        />
      </Box>
    </Box>
  )
}

export default ProfileInput
