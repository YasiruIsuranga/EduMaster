import axiosInstance from "@/api/axiosInstance";

export async function registerService(formData){
    try {
        const { data } = await axiosInstance.post('/auth/register', {
          ...formData,
          role: 'user',
        });
        return data;
      } catch (error) {
        console.error('Error during registration:', error.response?.data || error.message);
        throw error;
      }
    }