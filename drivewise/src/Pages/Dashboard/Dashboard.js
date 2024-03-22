import React, { createContext, useContext, useState, useRef, Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, PlusIcon, UserCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { FaCarAlt } from "react-icons/fa";
import { Dialog } from '@headlessui/react'
import {
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  LinkIcon,
  MapPinIcon,
  PencilIcon,
} from '@heroicons/react/20/solid'
import { Button,  Label, TextInput } from 'flowbite-react';



export default function DashBoard(){
  return(
    <EventsProvider>
      <DashBoardPage />
    </EventsProvider>
  );
}

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Calendar', href: '/Calendar', current: false },
  { name: 'Reports', href: '#', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const EventsContext = createContext();

// Here's the `useEvents` hook that was missing
function useEvents() {
  const context = useContext(EventsContext);
  if (context === undefined) {
    throw new Error('useEvents must be used within an EventsProvider');
  }
  return context;
}

const EventsProvider = ({ children }) => {
  const [events, setEvents] = useState([
    {
      name: "Poker Night",
      drivers: 5,
      location: "1999 Burdett Avenue",
      attendees: 60,
      date: "December 5th 1999",
    },
    {
      name: "BBQ Night",
      drivers: 8,
      location: "1999 Burdett Avenue",
      attendees: 70,
      date: "December 5th 2000",
    }
  ]);

  const addEvent = newEvent => {
    setEvents(prevEvents => [...prevEvents, newEvent]);
  };

  return (
    <EventsContext.Provider value={{ events, addEvent }}>
      {children}
    </EventsContext.Provider>
  );
};

function DashBoardPage() {

  const { events, addEvent } = useEvents();
  return (
    <>
      <div className="min-h-screen bg-background">
        <Disclosure as="nav" className="bg-background">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="text-2xl text-title font-bold">
                      DriveWise
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-background text-textp'
                                : 'text-textp hover:bg-gray-700 hover:text-textp',
                              'rounded-md px-3 py-2 text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
                            <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">{user.name}</div>
                      <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                    </div>
                    <button
                      type="button"
                      className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <header >
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 bg-background">
            <h1 className="text-3xl font-bold tracking-tight text-title ">Your Events</h1>
          </div>
        </header>
        <main>
          <div className='flex justify-end mx-auto max-w-7xl  sm:px-6 lg:px-8'>
            <ModalButton />
          </div>
          
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            {events.map(event => (
              <Event eventName={event.name} drivers={event.drivers} location={event.location} attendees={event.attendees} date={event.date} />
            ))}
          </div>
        </main>
      </div>
    </>
  )
}


function Event({eventName,drivers,location,attendees,date}) {
  return (
    <div className="lg:flex lg:items-center lg:justify-between my-10">
      <div className="min-w-0 flex-1">
        <h2 className="text-2xl font-bold leading-7 text-title sm:truncate sm:text-2xl sm:tracking-tight">
          {eventName}
        </h2>
        <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
          <div className="mt-2 flex items-center text-sm text-textp">
            <FaCarAlt className="mr-1.5 h-5 w-5 flex-shrink-0 text-textp" aria-hidden="true"/>
            {drivers}
          </div>
          <div className="mt-2 flex items-center text-sm text-textp">
            <MapPinIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-textp" aria-hidden="true" />
            {location}
          </div>
          <div className="mt-2 flex items-center text-sm text-textp">
            <UserCircleIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-textp" aria-hidden="true" />
            {attendees}
          </div>
          <div className="mt-2 flex items-center text-sm text-textp">
            <CalendarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-textp" aria-hidden="true" />
            {date}
          </div>
        </div>
      </div>
      <div className="mt-5 flex lg:ml-4 lg:mt-0">
        <span className="hidden sm:block">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-title px-3 py-2 text-sm font-semibold text-textp shadow-sm ring-1 ring-inset ring-title hover:bg-gray-50"
          >
            <PencilIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-textp" aria-hidden="true" />
            Edit
          </button>
        </span>

        <span className="ml-3 hidden sm:block">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-title px-3 py-2 text-sm font-semibold text-textp shadow-sm ring-1 ring-inset ring-title hover:bg-gray-50"
          >
            <LinkIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-textp" aria-hidden="true" />
            Send Link
          </button>
        </span>

        <span className="sm:ml-3">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-title px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-title focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <CheckIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
            View Event
          </button>
        </span>

        {/* Dropdown */}
        <Menu as="div" className="relative ml-3 sm:hidden">
          <Menu.Button className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400">
            More
            <ChevronDownIcon className="-mr-1 ml-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
          </Menu.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 -mr-1 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                  >
                    Edit
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                  >
                    View
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  )
}





function ModalButton(state) {
  const [open, setOpen] = useState(false)

  const handleClose = () => setOpen(false);

  return (
    <>
      <button
          type="button"
          className="inline-flex items-center rounded-md bg-title px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-title focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={() => setOpen(true)}
          
        >
          <PlusIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
          Add Event
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={handleClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <ModalForm closeModal={handleClose}/>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}

const formValues = [
  {
    hF: "name",
    v: "Event Name",
    id: "name",
  },
  {
    hF: "location",
    v: "Location",
    id: "location",
  },
  {
    hF: "date",
    v: "Date",
    id: "date",
  },
  {
    hF: "drivers",
    v: "Drivers",
    id: "drivers",
  },
  {
    hF: "attendees",
    v: "Attendees",
    id: "attendees",
  },

]

// function ModalForm(state1) {

//   const [inputValues, setInputValues] = useState({});

//   const handleChange = (id, value) => {
//     setInputValues(prev => ({
//       ...prev,
//       [id]: value,
//     }));
//   };
  
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(inputValues); 
//     const newEvent = inputValues;
//     state1[1]([...state1[0], state1[1]]);
//   };
//   return (
//     <form onSubmit={handleSubmit} className="flex max-w-md flex-col gap-4">
      // {formValues.map(formValue => (
      //   <div>
      //     <div className="mb-2 block">
      //       <Label htmlFor={formValue.hF} value={formValue.v} />
      //     </div>
      //     <TextInput id={formValue.id} type={formValue.id} placeholder="" required onChange={(e) => handleChange(formValue.id, e.target.value)}/>
      //   </div>
      // ))}

//       <Button type="submit" className='bg-black'>Submit</Button>
//     </form>
//   );
// }

function ModalForm({closeModal}) {
  const { addEvent } = useEvents();
  const [inputValues, setInputValues] = useState({ name: '', location: '', date: '', drivers: '', attendees: '' });

  const handleChange = (id, value) => {
    setInputValues({ ...inputValues, [id]: value });
  };
  
  const handleSubmit = (event) => {
    console.log(inputValues);
    event.preventDefault();
    addEvent(inputValues);
    closeModal();
    // Reset form or close modal here if needed
  };

  return (
    <form onSubmit={handleSubmit} className="flex max-w-md flex-col gap-4">
        {formValues.map(formValue => (
        <div>
          <div className="mb-2 block">
            <Label htmlFor={formValue.hF} value={formValue.v} />
          </div>
          <TextInput id={formValue.id} type={formValue.id} placeholder="" onChange={(e) => handleChange(formValue.id, e.target.value)} required/>
        </div>
      ))}
      <Button type="submit" className='bg-black'>Submit</Button>
    </form>
  );
}

