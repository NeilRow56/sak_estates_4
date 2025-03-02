import Link from 'next/link'

import { cn } from '@/lib/utils'
import { Button } from '../ui/button'

type NavButtonProps = {
  href: string
  label: string
  isActive?: boolean
}

export const NavButton = ({ href, label, isActive }: NavButtonProps) => {
  return (
    <Button
      asChild
      size="sm"
      variant="outline"
      className={cn(
        'traansition w-full justify-between border-none font-normal text-white outline-none hover:bg-white/20 hover:text-white focus:bg-white/30 focus-visible:ring-transparent focus-visible:ring-offset-0 lg:w-auto',
        isActive ? 'bg-white/10 text-white' : 'bg-transparent'
      )}
    >
      <Link href={href}>{label}</Link>
    </Button>
  )
}
