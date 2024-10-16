import axiosInstance from "@/api/axiosInstance";

export async function registerService(formData){
        const { data } = await axiosInstance.post('/auth/register', {
          ...formData,
          role: 'user',
        });
        return data;
       
    }
  
    export async function loginService(formData){
      const { data } = await axiosInstance.post('/auth/login', formData);
      return data;
    
    }

    export const checkAuthService = async () => {
      try {
          const response = await axiosInstance.get('/auth/check-auth');
          return response.data;
      } catch (error) {
          console.error("Error in checkAuthService:", error);
          return { success: false };
      }
  };