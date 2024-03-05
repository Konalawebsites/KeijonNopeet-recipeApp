import React from "react";
import { useState } from "react"


const ProfileImage = ({ image, handleProfileImgChange }) => {

  if (image === null)
    return (
      <div >
        <input
          type="file"
          accept="image/*"
          onChange={handleProfileImgChange}
        />
      </div>
    );
  else {
    const imageUrl = URL.createObjectURL(image);

    return (
      <div>
        <img
          src={`${imageUrl}?${new Date().getTime()}`}
          alt="Profile"
          style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
      </div>
    );
  }
};

const CreateAccount = () => {

  const [name, setName] = useState('')
  const [surName, setSurName] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [image, setImage] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')

  const handleProfileImgChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  return (
    <div >
      <form  >

      <ProfileImage image={image} handleProfileImgChange={handleProfileImgChange} />

        <div >
          username
          <input
            type="text"
            id='username'
            value={username}
            name="Username"
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>

        <div >
          password
          <input
            type="password"
            id='password'
            value={password}
            name="Password"
            onChange={({ target }) => setPassword(target.value)}
          />
          repeat your password
          <input
            type="password"
            id='password2'
            value={password2}
            name="Password2"
            onChange={({ target }) => setPassword2(target.value)}
          />
        </div>

        <button type="submit" id='createAccount-button'>create account</button>
      </form>
    </div>

  )
}

export default CreateAccount