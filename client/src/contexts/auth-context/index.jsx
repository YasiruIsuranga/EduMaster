import { initialSignInFormData, initialSignUpFormData } from "@/config";
import { checkAuthService, loginService, registerService } from "@/services";
import { createContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'; // Import for navigation

export const AuthContext = createContext(null);

export default function AuthProvider ({children}) {
  const [signInFormData, setSignInFormData] = useState(initialSignInFormData);
  const [signUpFormData, setSignUpFormData] = useState(initialSignUpFormData);
  const [auth, setAuth] = useState({
    authenticate: false,
    user: null,
  });

  const navigate = useNavigate(); // To navigate between pages

  // Handle Register User (Teacher or Student)
//   async function handleRegisterUser(event) {
    
//     try {
//       const data = await registerService(signUpFormData);
//       if (data.success) {
      
//         navigate('/teachersignin'); 
//       } else {
//         console.error('Registration failed:', data.error);
//       }
//     } catch (error) {
//       console.error('Error during registration:', error);
//     }
//   }

async function handleRegisterUser(role) {
    try {
      const response = await fetch(`http://localhost:5000/auth/${role}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signUpFormData),
      });
  
      if (!response.ok) {
        throw new Error('Registration failed');
      }
  
      const data = await response.json();
      console.log('Registration successful:', data.message);
      setSignUpFormData({ userName: '', userEmail: '', password: '' });
      navigate('/teacherPortal')
    } catch (error) {
      console.error('Registration failed:', error);
    }
  }

  // Handle Login User (Teacher or Student)
  async function handleLoginUser(event) {
    event.preventDefault();
    try {
      const data = await loginService(signInFormData);
      if (data.success) {
        // Store token and user information
        localStorage.setItem('accessToken', data.data.accessToken);
        setAuth({
          authenticate: true,
          user: data.data.user,
        });
        // Navigate to dashboard or appropriate page after login
        navigate('/teacherdashboard'); // Adjust route based on user type
      } else {
        console.error('Login failed:', data.error);
        setAuth({
          authenticate: false,
          user: null,
        });
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  }

  // Check Authenticated User
  async function checkAuthUser() {
    try {
      const token = localStorage.getItem('accessToken');
      if (!token) {
        setAuth({
          authenticate: false,
          user: null,
        });
        return;
      }
      const data = await checkAuthService();
      if (data.success) {
        setAuth({
          authenticate: true,
          user: data.data.user,
        });
      } else {
        setAuth({
          authenticate: false,
          user: null,
        });
      }
    } catch (error) {
      console.error('Error in checkAuthUser:', error);
      setAuth({
        authenticate: false,
        user: null,
      });
    }
  }

  useEffect(() => {
    checkAuthUser(); // Check if the user is authenticated on component mount
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signInFormData,
        setSignInFormData,
        signUpFormData,
        setSignUpFormData,
        handleRegisterUser,
        handleLoginUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
