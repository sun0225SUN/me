import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string) {
  const currentDate = Date.now()
  const formattedDate = date.includes('T') ? date : `${date}T00:00:00`
  const targetDate = new Date(formattedDate).getTime()
  const timeDifference = Math.abs(currentDate - targetDate)
  const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24))

  const fullDate = new Date(date).toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  if (daysAgo < 1) return 'Today'
  if (daysAgo < 7) return `${fullDate} (${daysAgo}d ago)`
  if (daysAgo < 30) return `${fullDate} (${Math.floor(daysAgo / 7)}w ago)`
  if (daysAgo < 365) return `${fullDate} (${Math.floor(daysAgo / 30)}mo ago)`
  return `${fullDate} (${Math.floor(daysAgo / 365)}y ago)`
}
