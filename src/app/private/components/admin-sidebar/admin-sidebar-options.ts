import { SidebarOptions } from "src/app/models/sidebar.model";

export const sidebar_options: SidebarOptions[] = [
  {
    name: 'Dashboard',
    icon: 'fas fa-calendar',
    link: 'admin-dashboard'
  },
  {
    name: 'Propiedades',
    icon: 'fas fa-home',
    link: 'admin-properties'
  },
  {
    name: 'Consultas',
    icon: 'fas fa-message',
    link: 'admin-inbox'
  },
  {
    name: 'Ventas',
    icon: 'fas fa-phone',
    link: 'admin-sells'
  },
  {
    name: 'Ajustes',
    icon: 'fas fa-cog',
    link: 'admin-preferences'
  }
];
