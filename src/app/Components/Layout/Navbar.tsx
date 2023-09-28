// import React from 'react'
// import Button from '../Reusable/Button'
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import styles from "../../css/about.module.css";
// const Navbar = () => {
//     const hanldeQuote=()=>{
//         console.log("Hi")
//     }
//   return (
//     <>
//     {/* linearColor */}
//     <div className="relative pxPadNav    mb-10 lg:mb-[115px]  background flex justify-between gap-3  pt-[21px] items-center">
//         <div className={`${styles.NavbarItem} flex items-center lg:gap-[50px]`}>
//          <img src="/assets/image/logo.png"/>
//          <div>
//           <ul className='lg:flex gap-[25px] text-[14px] hidden   font-medium leading-normal whitespace-nowrap'>
//             <li>Home</li>
//             <li>Company <KeyboardArrowDownIcon/></li>
//             <li>Services<KeyboardArrowDownIcon/></li>
//             <li>Hire Developers <KeyboardArrowDownIcon/></li>
//             <li>Contact Us</li>
//           </ul>
//         </div>
//         </div>

//         <div>
//             <button className='bg-default-primary whitespace-nowrap text-[#fff] capitalize px-[5px] sm:px-[25px] py-[10px] rounded-[4px] text-[10px] sm:text-[14px] font-medium leading-normal'>
//             Get A Free Quote
//             </button>
//         </div>
//     </div>
//     </>
//   )
// }

// export default Navbar


'use client'
import React, { useState } from 'react'
import { Dialog, Disclosure } from '@headlessui/react'
import Link from 'next/link'
import CloseIcon from '@mui/icons-material/Close';
const products = [
  { name: 'Uber Clone', href: '/uber-clone' },
  { name: 'UberEats Clone', href: '/ubereats-clone' },
  { name: 'Instacart Clone', href: '/instacart-clone' },
  { name: 'Airbnb Clone', href: '/airbnb-clone' },
  { name: 'Ride Sharing Script', href: '/carpooling-script' },
]
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <section className=" ">
      <nav className="mx-auto flex items-center justify-between py-3 px-4 lg:px-8" aria-label="Global">
        <div className="pr-6 ">
          <Link className="" href="/Homepage/">
            <img src="/assets/svg/logo.svg" alt="logo" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 bg-white text-[30px] border border-solid h-[48px]"
            onClick={() => setMobileMenuOpen(true)}
          >
            ☰
          </button>
        </div>
        <div className='hidden lg:flex lg:gap-x-12'>
          <ul className="list-none flex grow m-0 navbar-nav">
            <li className="nav-item px-3.5 py-2">
              <Link className="nav-link cursor-pointer no-underline font-medium leading-normal whitespace-nowrap text-[14px] text-text-black hover:text-text-color" rel="noopener noreferrer" target="_self" href="/Homepage/">Home</Link>
            </li>
            <li className="nav-item drop-down px-3.5 py-2">
              <div className="group relative cursor-pointer">
                <div className="flex items-center justify-between">
                  <Link className="menu-hover no-underline font-medium leading-normal whitespace-nowrap text-[14px] text-text-black hover:text-text-color" href='/AboutUs/'>
                    Company
                  </Link>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-4 pl-1 scale-75 group-hover:translate-x-1 group-hover:scale-75 group-hover:origin-center group-hover:delay-0 group-hover:transition-all group-hover:ease-in-out group-hover:duration-500 duration-500 group-hover:rotate-180"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </div>
                <div className="invisible absolute z-50 flex w-max flex-col bg-[#fff] border-solid border border-slate-200 rounded py-1 shadow-xl group-hover:visible">
                  <Link className=" block px-4 border-solid hover:border-l-4 border-l-4 border-[#fff0] hover:border-l-[#004299] text-[14px] text-[#423F3F] hover no-underline  hover:bg-[#cfcfcf]" href="/AboutUs/">Company</Link>
                  <Link className=" block px-4 border-solid hover:border-l-4 border-l-4 border-[#fff0] hover:border-l-[#004299] text-[14px] text-[#423F3F] hover no-underline  hover:bg-[#cfcfcf]" href="/Services/">Services</Link>
                  <Link className=" block px-4 border-solid hover:border-l-4 border-l-4 border-[#fff0] hover:border-l-[#004299] text-[14px] text-[#423F3F] hover no-underline  hover:bg-[#cfcfcf]" href="/HireDevelopers/">Hire Developers</Link>
                  <Link className=" block px-4 border-solid hover:border-l-4 border-l-4 border-[#fff0] hover:border-l-[#004299] text-[14px] text-[#423F3F] hover no-underline  hover:bg-[#cfcfcf]" href="/ContactUs/">Contact Us</Link>
                </div>
              </div>
            </li>
            <li className="nav-item drop-down px-3.5 py-2">
              <div className="group relative cursor-pointer">
                <div className="flex items-center justify-between">
                  <Link className="menu-hover no-underline font-medium leading-normal whitespace-nowrap text-[14px] text-text-black hover:text-text-color" href="/Services/">
                    Services
                  </Link>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-4 pl-1 scale-75 group-hover:translate-x-1 group-hover:scale-75 group-hover:origin-center group-hover:delay-0 group-hover:transition-all group-hover:ease-in-out group-hover:duration-500 duration-500 group-hover:rotate-180"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </div>
                <div className="invisible absolute z-50 flex w-max flex-col bg-[#fff] border-solid border border-slate-200 rounded py-1 shadow-xl group-hover:visible">
                <Link className=" block px-4 border-solid hover:border-l-4 border-l-4 border-[#fff0] hover:border-l-[#004299] text-[14px] text-[#423F3F] hover no-underline hover:bg-[#cfcfcf]" href="/AboutUs/">Company</Link>
                  <Link className=" block px-4 border-solid hover:border-l-4 border-l-4 border-[#fff0] hover:border-l-[#004299] text-[14px] text-[#423F3F] hover no-underline hover:bg-[#cfcfcf]" href="/Services/Single/">Services</Link>
                  <Link className=" block px-4 border-solid hover:border-l-4 border-l-4 border-[#fff0] hover:border-l-[#004299] text-[14px] text-[#423F3F] hover no-underline hover:bg-[#cfcfcf]" href="/HireDevelopers/">Hire Developers</Link>
                  <Link className=" block px-4 border-solid hover:border-l-4 border-l-4 border-[#fff0] hover:border-l-[#004299] text-[14px] text-[#423F3F] hover no-underline hover:bg-[#cfcfcf]" href="/ContactUs/">Contact Us</Link>
                  {/* <Link className=" block px-4 border-solid hover:border-l-4 border-l-4 border-[#fff0] hover:border-l-[#004299] text-[14px] text-[#423F3F] hover no-underline hover:bg-[#cfcfcf]" href="/carpooling-script">Ride Sharing Script</Link> */}
                </div>
              </div>
            </li>
            <li className="nav-item drop-down px-3.5 py-2">
              <div className="group relative cursor-pointer">
                <div className="flex items-center justify-between">
                  <Link className="menu-hover no-underline font-medium leading-normal whitespace-nowrap text-[14px] text-text-black hover:text-text-color" href="/HireDevelopers/">
                    Hire Developers
                  </Link>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-4 pl-1 scale-75 group-hover:translate-x-1 group-hover:scale-75 group-hover:origin-center group-hover:delay-0 group-hover:transition-all group-hover:ease-in-out group-hover:duration-500 duration-500 group-hover:rotate-180"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </div>
                <div className="invisible absolute z-50 flex w-max flex-col bg-[#fff] border-solid border border-slate-200 rounded py-1 shadow-xl group-hover:visible">
                <Link className=" block px-4 border-solid hover:border-l-4 border-l-4 border-[#fff0] hover:border-l-[#004299] text-[14px] text-[#423F3F] hover no-underline hover:bg-[#cfcfcf]" href="/AboutUs/">Company</Link>
                  <Link className=" block px-4 border-solid hover:border-l-4 border-l-4 border-[#fff0] hover:border-l-[#004299] text-[14px] text-[#423F3F] hover no-underline hover:bg-[#cfcfcf]" href="/Services/">Services</Link>
                  <Link className=" block px-4 border-solid hover:border-l-4 border-l-4 border-[#fff0] hover:border-l-[#004299] text-[14px] text-[#423F3F] hover no-underline hover:bg-[#cfcfcf]" href="/HireDevelopers/AndroidDevelopers/">Hire Developers</Link>
                  <Link className=" block px-4 border-solid hover:border-l-4 border-l-4 border-[#fff0] hover:border-l-[#004299] text-[14px] text-[#423F3F] hover no-underline hover:bg-[#cfcfcf]" href="/ContactUs/">Contact Us</Link>
                  {/* <Link className=" block px-4 border-solid hover:border-l-4 border-l-4 border-[#fff0] hover:border-l-[#004299] text-[14px] text-[#423F3F] hover no-underline hover:bg-[#cfcfcf]" href="/carpooling-script">Ride Sharing Script</Link> */}
                </div>
              </div>
            </li>
            <li className="nav-item relative px-3.5 py-2">
              <Link className="nav-link cursor-pointer no-underline font-medium leading-normal whitespace-nowrap text-[14px] text-text-black hover:text-text-color" rel="noopener noreferrer" target="_self" href="/ContactUs/">Contact Us</Link>
            </li>
           
          </ul>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <button className='bg-default-primary whitespace-nowrap text-[#fff] capitalize px-[5px] sm:px-[25px] py-[10px] rounded-[4px] text-[10px] sm:text-[14px] font-medium leading-normal'>
                Get A Free Quote
              </button>
            </div>
        {/* <div className="">
          <Link href='/contact-us' className="text-[#fff] no-underline hover:text-[#fff] rounded-3xl bg-gradient-to-r from-[#1B79F3] to-[#0F5DC4] px-5 xl:px-10">Get A Free Quote</Link>
        </div> */}
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0" />
        <Dialog.Panel className="fixed w-[85%] inset-y-0 right-0 z-10 overflow-y-auto bg-[#fff] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-end">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-[25px] text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
        <CloseIcon/>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex items-center justify-between w-full py-2 pl-3 pr-3.5 text-base text-[14px] text-[#423F3F] hover:text-[#0d6efd] ">
                        Home
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="h-4"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        </span>
                      </Disclosure.Button>
                      <Disclosure.Panel className="border-solid border py-1">
                        {[...products].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block px-4 border-solid hover:border-l-4 border-l-4 border-[#fff0] hover:border-l-[#004299] text-[14px] text-[#423F3F] hover:text-[#0d6efd] no-underline hover:bg-[#cfcfcf]"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <div className='flex flex-col'>
                  <div>
                    <Link className="nav-link no-underline text-[14px] text-[#423F3F] hover:text-[#0d6efd]" rel="noopener noreferrer" target="_self" href="/about-us">Home</Link>
                  </div>
                  <div>
                    <Link className="nav-link no-underline text-[14px] text-[#423F3F] hover:text-[#0d6efd]" rel="noopener noreferrer" target="_self" href="/Portfolio">Company</Link>
                  </div>
                  <div>
                    <Link className="nav-link no-underline text-[14px] text-[#423F3F] hover:text-[#0d6efd]" rel="noopener noreferrer" target="_self" href="/Testimonial">Services</Link>
                  </div>
                  <div className='relative'>
                    <Link className="nav-link no-underline text-[14px] text-[#423F3F] hover:text-[#0d6efd]" rel="noopener noreferrer" target="_self" href="/hire-dedicated-developers-in-india">Hire Developers</Link>
                  </div>
                  <div className='relative'>
                    <Link className="nav-link no-underline text-[14px] text-[#423F3F] hover:text-[#0d6efd]" rel="noopener noreferrer" target="_self" href="/hire-dedicated-developers-in-india">Contact Us</Link>
                  </div>
                </div>
              </div>
              {/* <div className="py-6">
                <Link href="/contact-us" className="text-[#fff] no-underline text-[14px] hover:text-[#fff] rounded-3xl bg-gradient-to-r from-[#1B79F3] to-[#0F5DC4] px-5 xl:px-10 py-2"></Link>
              </div> */}
                <button className='bg-default-primary whitespace-nowrap text-[#fff] capitalize  px-[25px] py-[10px] rounded-[4px] text-[10px] sm:text-[14px] font-medium leading-normal'>
                Get A Free Quote
              </button>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </section>
  )
}
export default Header
