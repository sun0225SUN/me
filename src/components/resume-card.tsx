'use client'

import { motion } from 'framer-motion'
import { ChevronRightIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar'
import { Badge } from '~/components/ui/badge'
import { Card, CardHeader } from '~/components/ui/card'
import { cn } from '~/lib/utils'

interface ResumeCardProps {
  logoUrl: string
  altText: string
  title: string
  subtitle?: string
  href?: string
  badges?: readonly string[]
  period: string
  description?: string
}
export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false)

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    if (description) {
      setIsExpanded(!isExpanded)
    } else if (href) {
      window.location.href = href
    }
  }

  return (
    <Link
      href={href ?? '#'}
      data-umami-event={'resume-' + href}
      className='block cursor-pointer'
      onClick={handleClick}
      target='_blank'
    >
      <Card className='flex'>
        <div className='flex-none'>
          <Avatar className='m-auto size-12 border bg-muted-background dark:bg-foreground'>
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className='object-contain'
            />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className='group ml-4 flex-grow flex-col items-center'>
          <CardHeader>
            <div className='flex items-center justify-between gap-x-2 text-base'>
              <h3 className='inline-flex items-center justify-center font-semibold text-xs leading-none sm:text-sm'>
                {title}
                {badges && (
                  <span className='inline-flex gap-x-1'>
                    {badges.map((badge) => (
                      <Badge
                        variant='secondary'
                        className='align-middle text-xs'
                        key={badge}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </span>
                )}
                <ChevronRightIcon
                  className={cn(
                    'size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100',
                    isExpanded ? 'rotate-90' : 'rotate-0',
                  )}
                />
              </h3>
              <div className='text-right text-muted-foreground text-xs tabular-nums sm:text-sm'>
                {period}
              </div>
            </div>
            {subtitle && <div className='font-sans text-xs'>{subtitle}</div>}
          </CardHeader>
          {description && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,

                height: isExpanded ? 'auto' : 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className='mt-2 text-xs sm:text-sm'
            >
              {description}
            </motion.div>
          )}
        </div>
      </Card>
    </Link>
  )
}
