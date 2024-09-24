import { getServerSession } from "next-auth";
import { redirect } from 'next/navigation'
import { authOptions } from "./lib/auth";

export default async function Page() {

  // making changes to check if the workflow is working

  // another check comment
  const session = await getServerSession(authOptions);
  if (session?.user) {
    redirect('/dashboard')
    // this will check the new deploy.yml github workflow, will make several file changes
  } else {
    redirect('/api/auth/signin')
  }
}
