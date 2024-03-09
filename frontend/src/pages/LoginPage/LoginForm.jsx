import { useState } from "react"
import loginService from '../../services/login'
import recipeService from '../../services/recipes'
import { Box, Button, Form, FormField, TextInput } from 'grommet'

const LoginForm = ({ setUser }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const user = await loginService.login({
        username: username,
        password: password
      })

      window.localStorage.setItem(
        'loggedRecipeappUser', JSON.stringify(user)
      ) 
      
      recipeService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
    }
    catch (exception) {
      console.log('error')
    }
  }


  return (
    <Box>
      <Form >
        <FormField username="username" htmlFor="text-input-id" label="Username" >
          <TextInput
            type="text"
            id='username'
            value={username}
            name="Username"
            onChange={({ target }) => setUsername(target.value)} />
        </FormField>

        <FormField password="password" htmlFor="text-input-id" label="Password">
          <TextInput
            type="text"
            id='password'
            value={password}
            name="Password"
            onChange={({ target }) => setPassword(target.value)} />
        </FormField>

        <Box direction="row" gap="xsmall">
          <Button type="submit" primary label="Login" size="xsmall" onClick={handleSubmit} />
        </Box>
      </Form>
    </Box>
  )
}

export default LoginForm
