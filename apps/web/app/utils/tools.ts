import type { Tool } from "@opensourcewisely/db"

export const isToolPublished = (tool: Tool) => {
  return !!tool.publishedAt && tool.publishedAt <= new Date()
}
