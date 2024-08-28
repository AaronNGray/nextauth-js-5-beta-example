import { auth } from "@/auth"
import {SignIn, SignOut} from "@/components/auth"

export default async function Page() {
  const session = await auth()
  return (
    <div>
      <p>Welcome {session?.user?.name}!</p>
      <SignIn server={"github"} />
      <SignOut />
    </div>
  )
}
