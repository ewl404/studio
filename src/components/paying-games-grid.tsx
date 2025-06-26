
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import WinRateProgressBar from './win-rate-progress-bar';

const gamesData = [
    { name: 'Fortune Tiger', logo: 'https://madetoinvest.pro/wp-content/uploads/2025/06/tiger-e1750898820305.webp', dataAiHint: 'tiger mascot', href: '/jogos-pagando/tiger' },
    { name: 'Fortune Ox', logo: 'https://madetoinvest.pro/wp-content/uploads/2025/06/fortuneox-e1750898897545.webp', dataAiHint: 'ox mascot', href: '#' },
    { name: 'Fortune Dragon', logo: 'https://madetoinvest.pro/wp-content/uploads/2025/06/fortunedragon-e1750898926553.webp', dataAiHint: 'dragon mascot', href: '#' },
    { name: 'Fortune Rabbit', logo: 'https://madetoinvest.pro/wp-content/uploads/2025/06/fortunerabbit-e1750898967874.webp', dataAiHint: 'rabbit mascot', href: '#' },
    { name: 'Fortune Mouse', logo: 'https://madetoinvest.pro/wp-content/uploads/2025/06/fortunemouse-e1750898944277.webp', dataAiHint: 'mouse mascot', href: '#' },
    { name: 'Mines', logo: 'https://madetoinvest.pro/wp-content/uploads/2025/06/minespro-e1750899138242.webp', dataAiHint: 'gem diamond', href: '/jogos-pagando/mines' },
    { name: 'Gates of Olympus', logo: 'https://madetoinvest.pro/wp-content/uploads/2025/06/gatesofolimpus-e1750899113649.webp', dataAiHint: 'zeus god', href: '#' },
    { name: 'Aviator', logo: 'https://madetoinvest.pro/wp-content/uploads/2025/06/aviator-e1750899428642.webp', dataAiHint: 'airplane icon', href: '/jogos-pagando/aviator' },
    { name: 'Fortune Tree', logo: 'https://madetoinvest.pro/wp-content/uploads/2025/06/fortunetree-e1750899054238.webp', dataAiHint: 'fortune tree', href: '#' },
    { name: 'Roleta Brasileira', logo: 'https://madetoinvest.pro/wp-content/uploads/2025/06/38cdf7e275e87c2530ee926bb2f5c811d9cb6ffccdad7717bed7ca43aa88eb38.jpg', dataAiHint: 'roulette wheel', href: '#' },
    { name: 'Sweet Bonanza', logo: 'https://i.imgur.com/Yj6fWzH.png', dataAiHint: 'candy sweet', href: '#' },
    { name: 'Big Bass Bonanza', logo: 'https://i.imgur.com/zK9g2B2.png', dataAiHint: 'fish bass', href: '#' },
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
