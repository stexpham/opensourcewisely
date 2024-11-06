import { remember } from "@epic-web/remember"
import { PrismaClient } from "@opensourcewisely/db"

export const prisma = remember("prisma", () => {
  return new PrismaClient()
})
