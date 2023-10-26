"use client";

import { Box, TextField, Button } from "@radix-ui/themes";

const SignupPage = () => {
  return (
    <Box className="min-h-[70vh] flex justify-center items-center">
      <Box className="grid w-full max-w-sm shadow-xl p-8 bg-white rounded-2xl ">
        <h2 className="text-xl font-bold mb-8">Create your Account!</h2>
        <form className="mb-5">
          {/* //TODO: don't forget to move it in it's own component! and remove the use-client on top of the page */}
          <Box className="mb-4"> 
            <label htmlFor="username" />Name
            <TextField.Root>
              <TextField.Input placeholder="enter your name" size="3" />
            </TextField.Root>
          </Box>
          <Box className="mb-5">
          <label htmlFor="email" />Email
          <TextField.Root>
            <TextField.Input type="email" placeholder="Enter your email" size="3" />
          </TextField.Root>
          </Box>
          <Box className="mb-5">
          <label htmlFor="email" />Password
          <TextField.Root>
            <TextField.Input type="password" placeholder="Enter your password" size="3" />
          </TextField.Root>
          </Box>
          <Button type="submit" className="w-full" size="4">Create an account</Button>
        </form>
        <p>Have an Account? Sign In</p>
      </Box>
    </Box>
  );
};

export default SignupPage;
