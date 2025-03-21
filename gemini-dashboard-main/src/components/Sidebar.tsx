
import React, { useState } from 'react';
import { CalendarDays, CreditCard, Gem, Home, Menu, MessageSquare, Settings, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { icon: Home, label: 'Inicio', active: true },
    { icon: Gem, label: 'Piedras', active: false },
    { icon: CalendarDays, label: 'Calendario', active: false },
    { icon: CreditCard, label: 'Suscripciones', active: false },
    { icon: MessageSquare, label: 'Mensajes', active: false },
    { icon: User, label: 'Perfil', active: false },
    { icon: Settings, label: 'Configuración', active: false },
  ];

  return (
    <div 
      className={`h-screen bg-sidebar transition-all duration-300 border-r border-border flex flex-col ${
        collapsed ? 'w-16' : 'w-64'
      }`}
    >
      <div className="h-16 border-b border-border flex items-center justify-between px-4">
        {!collapsed && (
          <h1 className="text-xl font-medium text-foreground">
            <span className="text-gem-primary">Karma</span>logy
          </h1>
        )}
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setCollapsed(!collapsed)}
          className="ml-auto"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>
      
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className={`flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${
                  item.active 
                    ? 'bg-accent text-accent-foreground' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <item.icon className={`h-5 w-5 ${collapsed ? '' : 'mr-3'}`} />
                {!collapsed && <span>{item.label}</span>}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-border">
        <div className={`flex items-center ${collapsed ? 'justify-center' : 'space-x-3'}`}>
          <div className="w-8 h-8 rounded-full bg-gem-primary/20 flex items-center justify-center">
            <User className="h-4 w-4 text-gem-primary" />
          </div>
          {!collapsed && (
            <div className="flex flex-col">
              <span className="text-sm font-medium">Usuario Premium</span>
              <span className="text-xs text-muted-foreground">Plan Diamante</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
