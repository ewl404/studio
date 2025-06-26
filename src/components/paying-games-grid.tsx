
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import WinRateProgressBar from './win-rate-progress-bar';

const gamesData = [
    { name: 'Fortune Tiger', logo: 'https://madetoinvest.pro/wp-content/uploads/2025/06/ipad-1.avif', dataAiHint: 'tiger mascot', href: '/jogos-pagando/tiger' },
    { name: 'Fortune Ox', logo: 'https://madetoinvest.pro/wp-content/uploads/2025/06/ipad.jpg', dataAiHint: 'ox mascot', href: '/jogos-pagando/ox' },
    { name: 'Fortune Dragon', logo: 'https://madetoinvest.pro/wp-content/uploads/2025/06/ipad-2.avif', dataAiHint: 'dragon mascot', href: '/jogos-pagando/dragon' },
    { name: 'Fortune Rabbit', logo: 'https://madetoinvest.pro/wp-content/uploads/2025/06/ipad-3.avif', dataAiHint: 'rabbit mascot', href: '/jogos-pagando/coelho' },
    { name: 'Fortune Mouse', logo: 'https://madetoinvest.pro/wp-content/uploads/2025/06/ipad-6-1.avif', dataAiHint: 'mouse mascot', href: '/jogos-pagando/mines' },
    { name: 'Mines', logo: 'https://madetoinvest.pro/wp-content/uploads/2025/06/ipad-5.avif', dataAiHint: 'bomb gem', href: '/jogos-pagando/aviator' },
    { name: 'Gates of Olympus', logo: 'https://madetoinvest.pro/wp-content/uploads/2025/06/ipad-4.avif', dataAiHint: 'zeus god', href: '/jogos-pagando/mouse' },
    { name: 'Aviator', logo: 'https://madetoinvest.pro/wp-content/uploads/2025/06/ipad-6.avif', dataAiHint: 'airplane icon', href: '/jogos-pagando/cashmania' },
    { name: 'Fortune Tree', logo: 'https://madetoinvest.pro/wp-content/uploads/2025/06/ipad-10.jpg', dataAiHint: 'fortune tree', href: '/jogos-pagando/snake' },
    { name: 'Roleta Brasileira', logo: 'https://madetoinvest.pro/wp-content/uploads/2025/06/ipad-9.avif', dataAiHint: 'roulette wheel', href: '/jogos-pagando/zeus' },
    { name: 'Sweet Bonanza', logo: 'https://madetoinvest.pro/wp-content/uploads/2025/06/ipad-8.avif', dataAiHint: 'candy sweet', href: '/jogos-pagando/hatch' },
    { name: 'Big Bass Bonanza', logo: 'https://madetoinvest.pro/wp-content/uploads/2025/06/ipad-7.avif', dataAiHint: 'fish bass', href: '#' },
];

export default function PayingGamesGrid() {
  const games = gamesData.map((game) => ({
    ...game,
    winRate: Math.floor(Math.random() * (100 - 30 + 1)) + 30,
  }));

  return (
    <section id="paying-games" className="w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {games.map((game) => (
          <Card
            key={game.name}
            className="bg-card/80 border-2 border-primary/20 backdrop-blur-sm shadow-lg shadow-primary/10 flex flex-col transition-all duration-300 hover:border-primary/70 hover:shadow-primary/20"
          >
            <CardHeader className="p-2 md:p-4">
                <Image
                  src={game.logo}
                  alt={`${game.name} logo`}
                  width={200}
                  height={200}
                  className="w-full h-auto object-contain rounded-md aspect-square"
                  data-ai-hint={game.dataAiHint}
                />
            </CardHeader>
            <CardContent className="flex-grow space-y-4 p-2 md:p-4 pt-0">
              <WinRateProgressBar winRate={game.winRate} />
            </CardContent>
            <CardFooter className="p-2 md:p-4 pt-0">
              <Button asChild className="w-full h-10 text-base font-bold">
                <a href={game.href} target={game.href.startsWith('/') ? '_self' : '_blank'} rel="noopener noreferrer">
                  JOGAR <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
