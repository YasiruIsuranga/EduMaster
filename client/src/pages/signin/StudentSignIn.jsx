import React, { useContext, useState } from 'react'
import './StudentSignIn.css'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import CommonForm from '@/components/common-form';
import { signInFormControls, signUpFormControls } from '@/config';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AuthContext } from '@/contexts/auth-context';

function Signin() { 
const [activeTab,setActiveTab] = useState('signin');
const {
  signInFormData,
  setSignInFormData,
  signUpFormData,
  setSignUpFormData,
  handleRegisterUser,
  handleLoginUser,
} = useContext(AuthContext);

function handleTabChange(value){
  setActiveTab(value)
}

function checkSignInIsValid() {
  return signInFormData && signInFormData.userEmail !== '' && signInFormData.password !== ''
}

function checkSignUpIsValid() {
  return signUpFormData && signUpFormData.userName !== '' && signUpFormData.userEmail !== '' && signUpFormData.password !== ''
}

console.log(signInFormData)

  return (
    <>
    <div className="d-flex min-vh-100 w-100">
      <div className="d-lg-flex align-items-center w-50">
        <div className='row w-100 m-0'>
                <div className="col-lg-12 text-center bgLoginL">
                </div>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center w-50">
        <div className='row w-100'>
          <div className='flex items-center justify-center min-h-screen bg-background bgLoginR'>
            <Tabs value={activeTab} defaultValue='signin' onValueChange={handleTabChange} className='w-full max-w-md'>
              <TabsList className='grid w-full grid-cols-2'>
                <TabsTrigger value='signin'>Sign In</TabsTrigger>
                <TabsTrigger value='signup'>Sign Up</TabsTrigger>
              </TabsList>
              <TabsContent value='signin'>
                <Card className="p-6 space-y-4">
                  <CardHeader>
                    <CardTitle>Sign In to Your Account</CardTitle>
                    {/* <CardDescription>

                    </CardDescription> */}
                  </CardHeader>
                  <CardContent className="space-y-2">
                      <CommonForm 
                      formControls={signInFormControls}
                      buttonText={'Sign In'}
                      formData={signInFormData}
                      setFormData={setSignInFormData}
                      isButtonDisabled ={!checkSignInIsValid()}
                      handleSubmit={handleLoginUser}
                      />
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value='signup'>
              <Card className="p-6 space-y-4">
                  <CardHeader>
                    <CardTitle>Regiter to EduMaster</CardTitle>
                    {/* <CardDescription>

                    </CardDescription> */}
                  </CardHeader>
                  <CardContent className="space-y-2">
                      <CommonForm 
                      formControls={signUpFormControls}
                      buttonText={'Sign Up'}
                      formData={signUpFormData}
                      setFormData={setSignUpFormData}
                      isButtonDisabled ={!checkSignUpIsValid()}
                      handleSubmit={handleRegisterUser}
                      />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Signin