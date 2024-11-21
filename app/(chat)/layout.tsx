import { cookies } from "next/headers";

import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import { auth } from "../(auth)/auth";

export const experimental_ppr = true;

// export interface User {
//   id?: string
//   name?: string | null
//   email?: string | null
//   image?: string | null
// }

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const [session, cookieStore] = await Promise.all([auth(), cookies()]);
  // const isCollapsed = cookieStore.get('sidebar:state')?.value !== 'true';
  const isCollapsed = false;
  const user = {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    image: "https://example.com/avatar.png",
  };

  return (
    <SidebarProvider defaultOpen={!isCollapsed}>
      {/* <AppSidebar user={session?.user} /> */}
      <AppSidebar user={user} />
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  );
}
