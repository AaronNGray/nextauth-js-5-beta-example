import { auth } from "@/auth"
import SignIn from "@/components/sign-in"

export default async function Page() {
  const session = await auth()
  return (
    <div>
      <p>Welcome {session?.user?.name}!</p>
      <SignIn />
    </div>
  )
}