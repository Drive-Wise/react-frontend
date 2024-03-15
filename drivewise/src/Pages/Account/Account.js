import React, { useState } from 'react';
import ResponsiveAppBar from '../../Components/Nav Bar/NavBar'
import { GoogleOAuthProvider } from '@react-oauth/google';
<GoogleOAuthProvider clientId="431333436778-sakq7pjl70cpf8i4oue4ggn7if1nb0do.apps.googleusercontent.com"> </GoogleOAuthProvider>

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
  
    <div className="bg-background h-screen">
      <ResponsiveAppBar />
      <div style={{ marginTop: '68px', textAlign: 'center', fontSize: '25px', fontWeight: '550', color: '#EF5448'}}> What's Your Email?
        <div>
          <input 
            type="text" 
            placeholder="Enter your email" 
            style={{ 
              marginTop: '20px', 
              fontSize: '18px', 
              padding: '10px', 
              borderRadius: '5px', 
              border: '1px solid #ccc', 
              display: 'block', 
              marginLeft: 'auto', 
              marginRight: 'auto' 
            }} 
          />
        </div>
        <div>
        <button className="m-auto my-3 bg-red-500 text-black font-sans text-md rounded-lg px-4 py-2 transition duration-300 hover:bg-red-400"> Sign In </button>
        </div>
      </div>
    </div>
  );
}
