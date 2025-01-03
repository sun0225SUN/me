import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import { Inter as FontSans } from "next/font/google"
import { notFound } from "next/navigation"
import { Navbar } from "~/components/navbar"
import { ThemeProvider } from "~/components/theme/provider"
import { TooltipProvider } from "~/components/ui/tooltip"
import { getLocaleData } from "~/config"
import { routing } from "~/i18n/routing"
import { cn } from "~/lib/utils"
import "~/styles/globals.css"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

type Params = Promise<{ locale: string }>

export async function generateMetadata({ params }: { params: Params }) {
  const { locale } = await params
  const data = getLocaleData(locale)

  return {
    metadataBase: new URL(data.url),
    title: {
      default: data.name + " | " + data.slogan,
      template: `%s | ${data.name + " | " + data.slogan}`,
    },
    description: data.description,
    openGraph: {
      title: data.name + " | " + data.slogan,
      description: data.description,
      url: data.url,
      siteName: data.name,
      locale: locale,
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    twitter: {
      title: data.name + " | " + data.slogan,
      card: "summary_large_image",
      description: data.description,
      images: ["/twitter-image.png"],
      creator: "@sun0225SUN",
    },
    verification: {
      google: "",
      yandex: "",
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Params
}) {
  const { locale } = await params

  // Ensure that the incoming `locale` is valid
  // eslint-disable-next-line
  if (!routing.locales.includes(locale as any)) {
    notFound()
  }
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" type="image/x-icon" />
        <script
          defer
          src="https://umami.guoqi.dev/script.js"
          data-website-id="4edb6bc4-765f-4d86-be29-bea42752a626"
          data-domains="guoqi.dev"
        />
      </head>
      <body
        className={cn(
          "mx-auto min-h-screen max-w-2xl bg-background px-6 py-12 font-sans antialiased sm:py-24",
          fontSans.variable,
        )}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <TooltipProvider delayDuration={0}>
              {children}
              <Navbar />
            </TooltipProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
