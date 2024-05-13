import React from 'react'
import { HeaderLogo } from './HeaderLogo'
import { Navigation } from './Navigation'

import { Loader2 } from 'lucide-react'
import { WelcolmeMsg } from './WelcolmeMsg'

const Header = () => {
  return (
    <header className=" to w-full bg-gradient-to-b from-blue-700 to-blue-500 px-4 py-8 pb-4 lg:px-14">
      <div className="mx-auto max-w-screen-2xl">
        <div className="mb-4 flex w-full items-center justify-between">
          <div className=" flex items-center lg:gap-x-16">
            <HeaderLogo />
            <Navigation />
          </div>
        </div>
        <WelcolmeMsg />
      </div>
    </header>
  )
}

export default Header
