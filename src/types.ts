import { ReactElement } from "react"

export type PostType = {
  title: string,
  subtitle: string,
  date: string,
  readtime: string,
  internallink?: string,
  towardsDataLink?: string
}


export type PostList = { [k: string]: PostType }

export type ProjectType = {
  title: string,
  img: React.ReactNode,
  imgLarge: React.ReactNode,
  date: string,
  languages: string,
  url: string,
  live: string,
  description: React.ReactNode,
}

export type SocialType = {
  title: string,
  url: string,
  icon: React.ReactNode,
}

export type EducationType = {
  url: string,
  school: string,
  year: string,
  type: string[],
  location: string,
}

export type SkillSection = {
  title: string,
  names: string[],
}

export type ContactType = {
  text: string,
  href: string,
  icon: ReactElement,
  copyText: string,
}

export type ExperienceType = {
  role: string,
  company: string,
  from: string,
  to: string,
  where: string,
  image?: string,
  duration: string,
  website: string,
}
