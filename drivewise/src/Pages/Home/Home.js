import {PencilIcon} from '@heroicons/react/24/outline'
import {LockClosedIcon, ServerIcon} from '@heroicons/react/20/solid'
import ResponsiveAppBar from '../../Components/Nav Bar/NavBar'
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { BiLogoTailwindCss, BiLogoMongodb } from "react-icons/bi";
import City_map from "../../Images/map.jpg";
import Box from '../../Components/Box/Box'
import BoxReverse from '../../Components/Box/BoxReverse'
import Footer from "../../Components/Footer/Footer"
export default function Home(){
    return(
        <div>
            
            <Hero/>
            <div className="bg-background  flex flex-col justify-center items-center" >
            
              <Box 
                  header_text="Drive Wise, Sober driver solutions"
                  paragraph_text="Uber for Business is a platform for managing global rides and meals, and local deliveries, for companies of any size."
                  button_text="Get started"
                  button_link={"https://www.google.com/"}
                  link_text="Check out our solutions"
                  link_link={"https://www.google.com/"}
                  image = {City_map}
                  flip = 'true'
              />

              <BoxReverse
                  header_text="The Uber you know, reimagined for business"
                  paragraph_text="Uber for Business is a platform for managing global rides and meals, and local deliveries, for companies of any size."
                  button_text="Get started"
                  button_link={"/About"}
                  link_text="Check out our solutions"
                  link_link={""}
                  image = {City_map}
                  flip = 'false'
              />

              
              
          </div>
            <Stack />
            <Footer />
        </div>
    )
}



function Hero() {

  return (
    <div className="bg-background py-2">
      <ResponsiveAppBar />
    

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-title sm:text-6xl">
              Insights to drive your journey forward
            </h1>
            <p className="mt-6 text-lg leading-8 text-textp">
              Pioneering smarter, safer driving solutions to navigate the roads of tomorrow.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/SignUp"
                className="rounded-md bg-title px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="/SignIn" className="text-sm font-semibold leading-6 text-textp">
                Already a member<span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



const features = [
  {
    name: 'React',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: PencilIcon,
  },
  {
    name: 'Node.js',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'MongoDB',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ServerIcon,
  },
]



const stack = [
  {
    name: 'TailwindCSS',
    description:
      'A utility-first CSS framework for rapidly building custom user interfaces without writing CSS from scratch.',
    icon: BiLogoTailwindCss,
  },
  {
    name: 'React',
    description:
      'A JavaScript library for building user interfaces, allowing developers to create reusable UI components and manage stateful data for dynamic web applications.',
    icon: FaReact,
  },
  {
    name: 'Node.js',
    description:
      'A JavaScript runtime built on Chrome\'s V8 JavaScript engine, enabling developers to build scalable server-side applications using JavaScript.',
    icon: FaNodeJs,
  },
  {
    name: 'MongoDB',
    description:
      'A NoSQL database designed for ease of development and scaling, offering a flexible document-oriented approach to store data.',
    icon: BiLogoMongodb,
  },
]

function Stack() {
  return (
    <div className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-title sm:text-4xl">
            Our Stack
          </p>
          <p className="mt-6 text-lg leading-8 text-textp">
            Harness our full-stack solution to create dynamic, scalable web applications with ease, 
            combining efficient UI development, server-side performance, flexible data management, and rapid styling.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {stack.map((stack) => (
              <div key={stack.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-title">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-title">
                    <stack.icon className="h-6 w-6 text-textp" aria-hidden="true" />
                  </div>
                  {stack.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-textp">{stack.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

