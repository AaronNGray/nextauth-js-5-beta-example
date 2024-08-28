import { signIn, signOut } from "@/auth"

export function SignIn({server}:{server:string}) {
  return (
    <form
      action={async () => {
        "use server"
        await signIn(server)
      }}
    >
      <button type="submit">Signin with GitHub</button>
    </form>
  )
} 
export function SignOut() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
      <button type="submit">Sign Out</button>
    </form>
  )
}