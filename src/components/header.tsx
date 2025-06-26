import { Suspense } from 'react';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu, Home, Gift, Send, HelpCircle, Bot, Video } from 'lucide-react';
import Logo from './logo';
import { Skeleton } from './ui/skeleton';
import TelegramCTA from './telegram-cta';

const menuItems = [
  { label: 'Página inicial', icon: Home, href: '/' },
  { label: 'Jogos pagando agora', icon: Bot, href: '/jogos-pagando' },
  { label: 'Promoções exclusivas', icon: Gift, href: '/promocoes' },
  { label: 'Lucrando na Prática com IA', icon: Video, href: '/aulas' },
  { label: 'Grupo no Telegram', icon: Send, href: 'https://t.me/+lbsueHDfifowYTFh' },
  { label: 'Suporte', icon: HelpCircle, href: 'https://t.me/wallacesuporte' },
];

export default function Header() {
  return (
    <>
      <header className="py-4 px-2 sm:px-4 flex justify-between items-center w-full">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="w-14 h-14" aria-label="Abrir menu">
              <Menu className="h-11 w-11 text-primary" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-background w-[300px] sm:w-[400px] border-r-primary/20 p-0">
            <div className="flex flex-col h-full">
              <div className="p-6">
                 <h2 className="text-2xl font-bold text-primary">Menu</h2>
              </div>
              <nav className="flex-grow px-4">
                <ul className="flex flex-col gap-2">
                  {menuItems.map((item) => (
                    <li key={item.label}>
                      <SheetClose asChild>
                        <a
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : '_self'}
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-3 rounded-md text-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                        >
                          <item.icon className="h-5 w-5 text-primary" />
                          <span>{item.label}</span>
                        </a>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </nav>
               <div className="p-6 mt-auto">
                  <p className="text-xs text-muted-foreground">Matrix Strategy v1.0</p>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        <div className="absolute left-1/2 -translate-x-1/2">
          <Suspense fallback={<Skeleton className="w-24 h-24 md:w-28 md:h-28 rounded-md bg-accent" />}>
            <Logo />
          </Suspense>
        </div>

        <div className="w-14 h-14" />
      </header>
      <TelegramCTA />
    </>
  );
}
