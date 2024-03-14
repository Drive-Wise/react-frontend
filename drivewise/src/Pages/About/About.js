import React from "react"; 
import ResponsiveAppBar from '../../Components/Nav Bar/NavBar'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, PencilIcon, RectangleStackIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import "tailwindcss/tailwind.css";
import Hayden from "../../Images/IMG_3271.jpg";
import Tomer from "../../Images/IMG_3154.PNG";
import Henry from "../../Images/IMG_3552.JPG";
import Jack from "../../Images/IMG_3551.JPG";



const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]
function About() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <div className="bg-background py-2 h-screen">
            <header className="absolute inset-x-0 top-0 z-50 bg-background">
                <ResponsiveAppBar />

                <section class="text-textp body-font">
                    <div class="container px-5 py-24 mx-auto">
                        <div class="flex flex-col text-center w-full mb-20">
                            <h1 class="text-2xl font-medium title-font mb-4 text-title tracking-widest">OUR TEAM</h1>
                            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Meet the Drivewise Team: RPI Developers Revolutionizing Ridesharing with AEPi Brotherhood</p>
                        </div>  
                        <div class="flex flex-wrap -m-4">
                            <div class="p-4 lg:w-1/2">
                                <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                    <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={Tomer}>
                                    </img>
                                    <div class="flex-grow sm:pl-8">
                                        <h2 class="title-font font-medium text-lg text-title">Tomer Avgil</h2>
                                        <h3 class="text-title mb-3">Lead/Developer</h3>
                                        <p class="mb-4">Head of the Jews, Will eventually get to the point probably, Omniscient</p>
                                        <span class="inline-flex">
                                            <a class="text-title">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                                </svg>
                                            </a>
                                            <a class="ml-2 text-title">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                                </svg>
                                            </a>
                                            <a class="ml-2 text-title">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                </svg>
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="p-4 lg:w-1/2">
                                <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                    <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={Henry}>
                                    </img>
                                    <div class="flex-grow sm:pl-8">
                                        <h2 class="title-font font-medium text-lg text-title">Henry Babcock</h2>
                                        <h3 class="text-title mb-3">Lead/Developer</h3>
                                        <p class="mb-4">#StillMyProjectLead, Cant be kept down by Domer, Almost Canadian</p>
                                        <span class="inline-flex">
                                            <a class="text-title">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                                </svg>
                                            </a>
                                            <a class="ml-2 text-title">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                                </svg>
                                            </a>
                                            <a class="ml-2 text-title">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                </svg>
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="p-4 lg:w-1/2">
                                <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                    <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4 transform rotate-180" src={Hayden}>
                                    </img>
                                    <div class="flex-grow sm:pl-8">
                                        <h2 class="title-font font-medium text-lg text-title">Hayden Stimpson</h2>
                                        <h3 class="text-title mb-3">Developer/Design</h3>
                                        <p class="mb-4">Part-Time Pluhhhhhh, The cool one of course, Gets things done eventually</p>
                                        <span class="inline-flex">
                                            <a class="text-title">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                                </svg>
                                            </a>
                                            <a class="ml-2 text-title">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                                </svg>
                                            </a>
                                            <a class="ml-2 text-title">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                </svg>
                                            </a>`
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="p-4 lg:w-1/2">
                                <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                    <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={Jack}>
                                    </img>
                                    <div class="flex-grow sm:pl-8">
                                        <h2 class="title-font font-medium text-lg text-title">Jack DeChiro</h2>
                                        <h3 class="text-title mb-3">Developer</h3>
                                        <p class="mb-4">Personality of the group, "Maybe RCOS isn't an easy A", Academic Weapon</p>
                                        <span class="inline-flex">
                                            <a class="text-title">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                                </svg>
                                            </a>
                                            <a class="ml-2 text-title">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                                </svg>
                                            </a>
                                            <a class="ml-2 text-title">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                </svg>
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </header>
        </div>
    );

}
export default About;