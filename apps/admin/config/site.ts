import { env } from "~/env"

export const siteConfig = {
  name: "OpenSourceWisely",
  description:
    "An admin panel for Open Source Wisely — a collection of open source alternatives to popular software.",
  email: env.NEXT_PUBLIC_SITE_EMAIL,
  url: env.NEXT_PUBLIC_SITE_URL,
  adminUrl: env.NEXT_PUBLIC_SITE_ADMIN_URL,
}
