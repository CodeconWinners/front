import { Calendar, MessageSquareMore, Dumbbell, User } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Link } from "react-router-dom"
// Menu items.
const items = [
  {
    title: "Desabafar",
    url: "/dashboard/desabafar",
    icon: MessageSquareMore,
  },
  {
      title: "Modo Treino",
      url: "/dashboard/modo-treino",
      icon: Dumbbell,
    },
    {
      title: "Calendar",
      url: "/dashboard/calendario",
      icon: Calendar,
    },
    {
        title: "Meu Perfil",
        url: "/dashboard/perfil",
        icon: User,
      },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Desabafa.Dev</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
