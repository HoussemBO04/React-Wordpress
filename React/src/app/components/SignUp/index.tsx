import { usePostRegistrationMutation } from "@/redux/api/registrationApi";
import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

const SignUp = () => {
  const [signup, setSignup] = useState({ username: '', email: '', password: '' });

  // Use the mutation hook
  const [postRegistrationMutation] = usePostRegistrationMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      console.log('signup', signup);
      // Call the mutation function directly
      const response = await postRegistrationMutation({
        username: signup.username,
        email: signup.email,
        password: signup.password,
      });

      console.log('response', response); // The response from the API
    } catch (error) {
      console.log('error', error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSignup(prevSignup => ({ ...prevSignup, [name]: value }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField type="text" name="username" variant="outlined" label={'username'} onChange={handleChange} />
      <TextField type="email" name="email" variant="outlined" label={'email'} onChange={handleChange} />
      <TextField type="password" name="password" variant="outlined" label={'password'} onChange={handleChange} />
      <Button type="submit" variant="contained">Submit</Button>
    </form>
  );
};

export default SignUp;