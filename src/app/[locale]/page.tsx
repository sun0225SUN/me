import clsx from "clsx"
import { useLocale, useTranslations } from "next-intl"
import Link from "next/link"
import Markdown from "react-markdown"
import { AwesomeCard } from "~/components/awesome-card"
import { ProjectCard } from "~/components/project-card"
import { ResumeCard } from "~/components/resume-card"
import { Avatar, AvatarImage } from "~/components/ui/avatar"
import { Badge } from "~/components/ui/badge"
import BlurFade from "~/components/ui/blur-fade"
import BlurFadeText from "~/components/ui/blur-fade-text"
import { TweetCard } from "~/components/ui/tweet-card"
import { getLocaleData } from "~/config"

const BLUR_FADE_DELAY = 0.04

export default function Page() {
  const locale = useLocale()
  const t = useTranslations()
  const DATA = getLocaleData(locale)

  return (
    <main className="flex min-h-[100dvh] flex-col space-y-10 pb-40">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="flex justify-between gap-2">
            <div className="flex flex-1 flex-col space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className={clsx(
                  "text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none",
                  locale === "zh" && "!text-2xl sm:text-4xl xl:text-5xl/none",
                )}
                yOffset={8}
                text={t("hi") + ` ${DATA.name.split(" ")[0]} 👋`}
              />
              <BlurFadeText
                className={clsx(
                  "max-w-[600px] md:text-xl",
                  locale === "zh" && "mt-2",
                )}
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">{t("about")}</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown
            className={clsx(
              "prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert",
              locale === "zh" && "mt-2 !text-base",
            )}
          >
            {DATA.summary}
          </Markdown>
          {locale === "zh" && (
            <div className="my-4 flex font-sans text-sm text-muted-foreground">
              <div className="w-1 bg-gray-200 dark:bg-gray-700/80" />
              <span className="ml-2">创业太难了，跪求路过的老板收留，</span>
              <Link
                href="https://rxresu.me/sunguoqi/public"
                className="text-blue-500"
              >
                <u>我的简历</u>
              </Link>
            </div>
          )}
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">{t("work")}</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? t("present")}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">{t("education")}</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">{t("skills")}</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="w-full space-y-12 py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
                  {t("projects")}
                </div>
                <h2
                  className={clsx(
                    "text-3xl font-bold tracking-tighter sm:text-5xl",
                    locale === "zh" && "my-4 !text-2xl sm:!text-4xl",
                  )}
                >
                  {t("check-my-work")}
                </h2>
                <p
                  className={clsx(
                    "text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed",
                    locale === "zh" &&
                      "my-4 md:!text-sm/relaxed lg:!text-base/relaxed xl:!text-base/relaxed",
                  )}
                >
                  {t("my-work-description")}
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="mx-auto grid max-w-[800px] grid-cols-1 gap-3 sm:grid-cols-2">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="awesome">
        <div className="w-full space-y-12 py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
                  {t("awesome")}
                </div>
                <h2
                  className={clsx(
                    "text-3xl font-bold tracking-tighter sm:text-5xl",
                    locale === "zh" && "my-4 !text-2xl sm:!text-4xl",
                  )}
                >
                  {t("building-things")}
                </h2>
                <p
                  className={clsx(
                    "text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed",
                    locale === "zh" &&
                      "my-4 md:!text-sm/relaxed lg:!text-base/relaxed xl:!text-base/relaxed",
                  )}
                >
                  {t("have-done")}
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.awesome.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <AwesomeCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>
      <section id="map" className="w-full">
        <div className="grid w-full items-center justify-center gap-4 px-4 py-12 text-center md:px-6">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
                {t("travel")}
              </div>
              <h2
                className={clsx(
                  "text-3xl font-bold tracking-tighter sm:text-5xl",
                  locale === "zh" && "my-4 !text-2xl sm:!text-4xl",
                )}
              >
                {t("places-i-visited")}
              </h2>
              <p
                className={clsx(
                  "mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed",
                  locale === "zh" &&
                    "my-4 md:!text-sm/relaxed lg:!text-base/relaxed xl:!text-base/relaxed",
                )}
              >
                {t("data-from")}{" "}
                <Link
                  href="https://camlife.cn"
                  className="text-blue-500"
                  data-umami-event="go-camlife"
                >
                  CamLife
                </Link>
              </p>
            </div>
          </BlurFade>
        </div>
        <iframe
          src={`https://camlife.cn/map?hide_controls=true&lang=${locale}`}
          className="h-[400px] w-full"
          style={{ border: "none" }}
        />
      </section>
      <section id="contact">
        <div className="grid w-full items-center justify-center gap-4 px-4 py-12 text-center md:px-6">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
                {t("contact")}
              </div>
              <h2
                className={clsx(
                  "text-3xl font-bold tracking-tighter sm:text-5xl",
                  locale === "zh" && "my-4 !text-2xl sm:!text-4xl",
                )}
              >
                {t("get-in-touch")}
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t("want-to-chat")}? {t("shoot-me")}{" "}
                <Link
                  href={DATA.contact.social.Twitter.url}
                  className="text-blue-500 hover:underline"
                  data-umami-event="contact-twitter-link"
                >
                  {t("direct-twitter")}
                </Link>{" "}
                {t("will-respond")}
              </p>
              <div className="flex justify-center">
                <TweetCard id={DATA.tweetId} className="!mt-5" />
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  )
}
