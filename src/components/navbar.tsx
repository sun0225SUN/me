"use client"

import { useLocale } from "next-intl"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { LanguageToggle } from "~/components/language/toggle"
import { ModeToggle } from "~/components/theme/toggle"
import { Dock, DockIcon } from "~/components/ui/dock"
import { Separator } from "~/components/ui/separator"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "~/components/ui/tooltip"
import { getLocaleData } from "~/config"

export type IconProps = React.HTMLAttributes<SVGElement>

export function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const lastScrollY = useRef(0)
  const locale = useLocale()
  const DATA = getLocaleData(locale)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const diff = currentScrollY - lastScrollY.current
      setScrollPosition((prev) => {
        const newPosition = Math.max(Math.min(prev + diff, 90), 0)
        return newPosition
      })
      lastScrollY.current = currentScrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="flex justify-center">
      <div className="fixed inset-x-0 bottom-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background" />
      <div className="fixed mb-8" style={{ bottom: `${-scrollPosition}px` }}>
        <Dock
          magnification={60}
          distance={100}
          className="rounded-l-full rounded-r-full bg-white px-5 dark:bg-black"
        >
          {DATA.navbar.map((item) => (
            <DockIcon key={item.href}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    className="rounded-full p-[10px] hover:bg-accent"
                    href={item.href}
                    data-umami-event={"navbar-" + item.label}
                    target="_blank"
                  >
                    {item.icon}
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          <Separator orientation="vertical" className="h-full" />
          {Object.entries(DATA.contact.social)
            .filter(([_, social]) => social.navbar)
            .map(([name, social]) => (
              <DockIcon key={name}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      className="rounded-full p-[10px] hover:bg-accent"
                      href={social.url}
                      data-umami-event={"navbar-" + social.name}
                      target="_blank"
                    >
                      {social.icon}
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{social.name}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            ))}
          <Separator orientation="vertical" className="h-full" />
          <DockIcon>
            <LanguageToggle />
          </DockIcon>
          <DockIcon>
            <ModeToggle />
          </DockIcon>
        </Dock>
      </div>
    </div>
  )
}
