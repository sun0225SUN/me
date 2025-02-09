import Script from 'next/script'

export function Analytics() {
  if (process.env.NODE_ENV === 'development') {
    return null
  }

  return (
    <Script
      defer
      src='https://umami.guoqi.dev/script.js'
      data-website-id='9639a359-3dd3-427a-b2c6-3d024ed8c9ca'
      data-domains='guoqi.dev'
    />
  )
}
