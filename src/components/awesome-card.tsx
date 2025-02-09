import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar'
import { Badge } from '~/components/ui/badge'

interface Props {
  title: string
  description: string
  dates: string
  location: string
  image?: string
  links?: readonly {
    icon: React.ReactNode
    title: string
    href: string
  }[]
}

export function AwesomeCard({
  title,
  description,
  dates,
  location,
  image,
  links,
}: Props) {
  return (
    <li className='relative ml-10 py-4'>
      <div className='-left-16 absolute top-2 flex items-center justify-center rounded-full bg-white'>
        <Avatar className='m-auto size-12 border'>
          <AvatarImage
            src={image}
            alt={title}
            className='object-contain'
          />
          <AvatarFallback>{title[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className='flex flex-1 flex-col justify-start gap-1'>
        {dates && (
          <time className='text-muted-foreground text-xs'>{dates}</time>
        )}
        <h2 className='font-semibold leading-none'>{title}</h2>
        {location && (
          <p className='text-muted-foreground text-sm'>{location}</p>
        )}
        {description && (
          <span className='prose dark:prose-invert text-muted-foreground text-sm'>
            {description}
          </span>
        )}
      </div>
      {links && links.length > 0 && (
        <div className='mt-2 flex flex-row flex-wrap items-start gap-2'>
          {links?.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              data-umami-event={'awesome-' + link.href}
              target='_blank'
            >
              <Badge
                key={link.href}
                title={link.title}
                className='flex gap-2'
              >
                {link.icon}
                {link.title}
              </Badge>
            </Link>
          ))}
        </div>
      )}
    </li>
  )
}
