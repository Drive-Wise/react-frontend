import { Fragment, useState } from 'react';
import ResponsiveAppBar from '../../Components/Nav Bar/NavBar';
import Footer from '../../Components/Footer/Footer';

export default function Layout() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (event) => {
    event.preventDefault();  // Prevent default form submission behavior
    try {
      const response = await fetch('http://127.0.0.1:8000/signup/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      console.log(data);  // Log the response data
      alert('Signup successful!');  // Show a success message
    } catch (error) {
      console.error('Failed to sign up:', error);
      alert('Signup failed!');  // Show an error message
    }
  };

  return (
    <div className='bg-background py-2 h-screen'>
      <section className="text-gray-600 body-font">
        <ResponsiveAppBar />
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center justify-between">
          <form className="lg:w-2/6 md:w-1/2 bg-grey-700 rounded-lg p-8 flex flex-col md:mr-auto w-full mt-10 md:mt-0" onSubmit={handleSignUp}>
            <h2 className="text-title text-lg font-medium title-font mb-5">Sign Up</h2>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-white">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="password" className="leading-7 text-sm text-white">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="text-white bg-title border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Sign Up</button>
            <a href="/SignIn" className="text-xs text-gray-500 mt-3">Back To Sign In</a>
          </form>
        </div>
        <Footer />
      </section>
    </div>
  );
}

