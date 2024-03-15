import { Fragment } from 'react';
import ResponsiveAppBar from '../../Components/Nav Bar/NavBar';
import Footer from '../../Components/Footer/Footer';

export default function Layout() {
  return (
    <div className='bg-background py-2 h-screen'> 
      <section className="text-gray-600 body-font">
        <ResponsiveAppBar />
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center justify-between">
          <div className="lg:w-2/6 md:w-1/2 bg-grey-700 rounded-lg p-8 flex flex-col md:mr-auto w-full mt-10 md:mt-0">
            <h2 className="text-title text-lg font-medium title-font mb-5">Sign Up</h2>
            <div className="relative mb-4">
              <label htmlFor="full-name" className="leading-7 text-sm text-white">Email or Phone Number</label>
              <input type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-white">Password</label>
              <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <button className="text-white bg-title border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Log In</button>
            <a href="/SignIn" className="text-xs text-gray-500 mt-3">Back To Sign In</a>
          </div>
          <div className="lg:w-3/5 md:w-1/2 md:pl-16 lg:pl-0 pl-0">
            <h1 className="title-font font-medium text-3xl text-title">Slow-carb next level shoindcgoitch ethical authentic, poko scenester</h1>
            <p className="leading-relaxed mt-4 text-white">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
          </div>
        </div>
        <Footer />
      </section>
    </div>
  );
}
