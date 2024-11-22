"use client"

import { useLocale, useTranslations } from "next-intl"
import { useRouter } from "next/navigation"
import { Icons } from "~/components/icons"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "~/components/ui/tooltip"
import { setUserLocale } from "~/i18n/locale"

export function LanguageToggle() {
  const router = useRouter()
  const currentLocale = useLocale()
  const t = useTranslations()

  const handleLocaleChange = (locale: string) => {
    setUserLocale(locale)
      .then(() => {
        router.refresh()
      })
      .catch(() => {
        console.error("Failed to set user locale")
      })
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="rounded-full p-[10px] hover:bg-accent">
          <Icons.language
            className="size-full cursor-pointer"
            data-umami-event={"toggle-language"}
            onClick={() =>
              handleLocaleChange(currentLocale === "en" ? "zh" : "en")
            }
          />
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p>{t("language")}</p>
      </TooltipContent>
    </Tooltip>
  )
}
