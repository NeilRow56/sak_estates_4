'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { Computer } from 'lucide-react'
import SigninButton from './auth/SigninButton'
import Navbar from './dashboard-layout/Navbar'
import Header from './ant_finance_header/Header'

const Hero = () => {
  return (
    <>
      <Header />
      <div className="flex w-full flex-col text-center">
        {/* <div className=" flex h-[120px] w-full items-center bg-blue-100 md:h-[200px]">
          <div className="container flex justify-center sm:justify-between">
            <Button className="h-20 w-auto cursor-none rounded-full bg-secondary px-6 py-3 md:h-24">
              <span className="text-2xl font-bold text-secondary-foreground md:text-3xl  lg:text-5xl">
                WpAccPac 💻
              </span>
            </Button>
            <Computer className="h-0 w-0 sm:h-24 sm:w-24" />
          </div>
        </div> */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <section className="flex  items-center justify-center bg-background px-2">
            <div className="mx-auto max-w-[800px] text-center">
              <div className="pt-6 xl:pt-1">
                <span className="w-auto rounded-full bg-secondary px-2 py-3 sm:px-6">
                  <span className="text-xs font-medium md:text-sm">
                    A quicker way to prepare and review files .
                  </span>
                </span>
                <h1 className="mt-8 text-3xl font-extrabold tracking-tight text-primary lg:text-5xl xl:text-7xl">
                  Create working papers with ease
                </h1>
                <p className="mx-auto mt-8 max-w-xl text-base text-secondary-foreground lg:text-xl">
                  Online accounts preparation file. Automatic comparative
                  schedules. Secure cloud storage. Insert spreadsheet, pdf files
                  etc;.
                </p>
              </div>
              <div className="mx-auto mt-10 flex max-w-sm justify-center">
                <SigninButton />
              </div>
            </div>
          </section>

          <div className=" flex h-full w-full bg-background p-24 lg:p-8 lg:pl-24 ">
            <div className="w-full px-4 ">
              <div className="lg:ml-auto ">
                <div className="relative z-10 inline-block  pl-10 pt-11 lg:pt-0">
                  <Image
                    src="https://cdn.tailgrids.com/1.0/assets/images/hero/hero-image-01.png"
                    width="350"
                    height="350"
                    sizes="100vw"
                    alt="hero"
                    priority
                    className="h-auto w-[350px] max-w-full md:w-[500px] lg:ml-auto lg:w-[500px]"
                  />
                  <span className="absolute -bottom-8 -left-2 z-[-1]">
                    <svg
                      width="93"
                      height="93"
                      viewBox="0 0 93 93"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
