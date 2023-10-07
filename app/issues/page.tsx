import { Button } from "@radix-ui/themes"
import Link from "next/link"

const IsssuesPage = () => {
  return (
    <div>
      <h2>Issues Page</h2>
      <Button><Link href="/issues/new">New issue</Link></Button>
    </div>
  )
}

export default IsssuesPage