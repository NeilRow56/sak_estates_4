'use client'

import { useSession } from 'next-auth/react'

export const WelcolmeMsg = () => {
  const { data: session } = useSession()

  const myDate = new Date()
  const hrs = myDate.getHours()

  let greet

  if (hrs < 12) greet = 'Good Morning'
  else if (hrs >= 12 && hrs <= 17) greet = 'Good Afternoon'
  else if (hrs >= 17 && hrs <= 24) greet = 'Good Evening'

  return (
    <div className="space-y-2">
      {session && session.user ? (
        <>
          <h2 className="text-xl font-medium text-white lg:text-xl">
            {greet} {session.user.firstName} , glad to have you onboard
          </h2>
          <p className="text-sm text-[#89b6fd] lg:text-base">
            This is your Financial Overview Report
          </p>
        </>
      ) : (
        <div className="flex flex-col space-y-6">
          <p className="text-white">
            Please sign in to access the dashboard files
          </p>
        </div>
      )}
    </div>
  )
}
