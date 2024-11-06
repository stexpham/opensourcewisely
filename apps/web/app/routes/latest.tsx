import { redirect } from "@remix-run/node"

export const loader = () => {
  return redirect("/?opensourcewisely[sortBy]=opensourcewisely_published_desc")
}
