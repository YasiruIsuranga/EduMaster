import React, { createContext, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [signInFormData, setSignInFormData] = useState({ userEmail: '', password: '' });
  const [signUpFormData, setSignUpFormData] = useState({ userName: '', userEmail: '', password: '' });

  const handleRegisterUser = async () => {
    try {
      const res = await axios.post('/api/auth/student/signup', signUpFormData);
      console.log('User registered:', res.data);
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  const handleLoginUser = async () => {
    try {
      const res = await axios.post('/api/auth/student/login', signInFormData);
      console.log('User logged in:', res.data);
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  return (
    <AuthContext.Provider value={{
      signInFormData,
      setSignInFormData,
      signUpFormData,
      setSignUpFormData,
      handleRegisterUser,
      handleLoginUser,
    }}>
      {children}
    </AuthContext.Provider>
  );
};
