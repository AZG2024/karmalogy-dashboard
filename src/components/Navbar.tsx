
import React from 'react';
import { Bell, Moon, Search, Settings, Sun, User } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from './ThemeProvider';

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="h-16 border-b border-border bg-background/95 backdrop-blur supports-backdrop-blur:bg-background/60 px-4 sm:px-6 flex items-center justify-between w-full">
      <div className="flex items-center gap-2">
        <div className="hidden sm:block">
          <h1 className="text-xl font-medium text-foreground">
            <span className="text-gem-primary">Karma</span>logy
          </h1>
        </div>
      </div>

      <div className="relative hidden md:flex items-center w-full max-w-sm">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <input
          type="text"
          placeholder="Buscar..."
          className="h-9 w-full rounded-full border border-input bg-background pl-10 pr-4 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        />
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="rounded-full">
          <Bell className="h-5 w-5 text-muted-foreground" />
          <span className="sr-only">Notificaciones</span>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              {theme === 'dark' ? (
                <Moon className="h-5 w-5 text-muted-foreground" />
              ) : (
                <Sun className="h-5 w-5 text-muted-foreground" />
              )}
              <span className="sr-only">Cambiar tema</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme('light')}>
              <Sun className="mr-2 h-4 w-4" />
              <span>Claro</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('dark')}>
              <Moon className="mr-2 h-4 w-4" />
              <span>Oscuro</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('system')}>
              <Settings className="mr-2 h-4 w-4" />
              <span>Sistema</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button variant="ghost" size="icon" className="rounded-full">
          <User className="h-5 w-5 text-muted-foreground" />
          <span className="sr-only">Perfil</span>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
