import { Calendar, MessageSquareMore, Users, Dumbbell, User } from "lucide-react"

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

// Menu items.
const items = [
  {
    title: "Desabafar",
    url: "#",
    icon: MessageSquareMore,
  },
  {
    title: "Analisar Reunião",
    url: "#",
    icon: Users,
  },
  {
      title: "Modo Treino",
      url: "#",
      icon: Dumbbell,
    },
    {
      title: "Calendar",
      url: "#",
      icon: Calendar,
    },
    {
        title: "Meu Perfil",
        url: "#",
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
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
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
