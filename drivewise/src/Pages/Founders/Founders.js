import React from "react";

const people = [
  {
    name: 'Tomer Avgil',
    role: 'Github Wizard',
    imageUrl: 'https://media.licdn.com/dms/image/D4E35AQG2AZ0SqNde-Q/profile-framedphoto-shrink_400_400/0/1703133658760?e=1709330400&v=beta&t=dSOG7tVsZzW4lxssIReqAI06SSzyQVOUb0y8gR_J6xc',
    linkedInUrl: 'https://www.linkedin.com/in/tomeravgil?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bthnw31JnSOWN9qqhdgZ21w%3D%3D'
  },
  {
    name: 'Henry Babcock',
    role: 'Chief of operations',
    imageUrl: 'https://media.licdn.com/dms/image/D5603AQGLdFiwOlAJww/profile-displayphoto-shrink_400_400/0/1704484059010?e=1714003200&v=beta&t=nnrggRHu5e_VQluD89XjDcanZNKQfXI1lSfYK1st1KM',
    linkedInUrl: 'https://www.linkedin.com/in/henry-babcock-77421420a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BceGU4FG6R0uoFiA%2BsTTElw%3D%3D'
  },
  {
    name: 'Jack DeChiro',
    role: 'CFO',
    imageUrl: 'https://media.licdn.com/dms/image/D4D03AQFXQXoBAy7Y8g/profile-displayphoto-shrink_800_800/0/1691020521767?e=1714003200&v=beta&t=ivqsCvJ3r4729H3f_3A18Kc2CwOzXuGDjYrBoVM2Db4',
    linkedInUrl: 'https://www.linkedin.com/in/jack-dechiro-492871286?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bp%2BSXXB%2FjQd2l6YRPVsnPhw%3D%3D'
  },
  {
    name: 'Hayden Stimpson',
    role: 'Uhhhhhhh the',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    linkedInUrl: 'https://www.linkedin.com/in/hayden-stimpson-12aa7a200?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2BzYGxQs4R2umA2e96UDU8Q%3D%3D'
  },
]

function Founders() {
  const backColor = "#291F1E";
  const headerColors = "#EF5448";
  return (
    
    <div className= "py-24 sm:py-32" style = {{ backgroundColor: backColor}}>
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tightsm:text-4xl" style = {{ color: headerColors}}>Meet our leadership</h2>
          <p className="mt-6 text-lg leading-8  text-red-500 ">
            Meet the team at Rensselaer Polytechnic Institute who made this a possiblity!
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img className="h-20 w-20 rounded-full" src={person.imageUrl} alt="" />
                <div>
                  <p><a href= {person.linkedInUrl} className=" hover:text-red-600" style = {{ color: headerColors}}> {person.name}</a></p>
                  <p className="text-sm font-semibold leading-6 text-red-500">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Founders;
