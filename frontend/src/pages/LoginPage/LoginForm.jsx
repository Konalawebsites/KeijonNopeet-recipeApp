import { useState } from "react"
import { Box, Button, Form, FormField, TextInput } from 'grommet'

const LoginForm = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')


  // const handleLogin = async (event) => {
  //   event.preventDefault()

  //   try {
  //     const user = await loginService.login({
  //       username, password,
  //     })
  //     window.localStorage.setItem(
  //       'loggedBlogappUser', JSON.stringify(user)
  //     )

  //     blogService.setToken(user.token)

  //     userDispatch({
  //       type: 'SET_USER',
  //       payload: {
  //         user, // Pass the user data to update the state
  //       },
  //     })

  //     setUsername('')
  //     setPassword('')
  // }}

  return (
    <Box>
    <Form >
      <FormField username="username" htmlFor="text-input-id" label="Username" size="small" >
        <TextInput id="text-input-id" username="username" />
      </FormField>

      <FormField password="password" htmlFor="text-input-id" label="Password">
        <TextInput id="text-input-id" password="password" />
      </FormField>

      <Box direction="row" gap="xsmall">
        <Button type="submit" primary label="Login" size="xsmall" />
      </Box>
    </Form>
    </Box>
  )
}

export default LoginForm
