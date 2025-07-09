'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import WinRateProgressBar from './win-rate-progress-bar';
import OnlineUsers from './online-users';
import WithdrawnToday from './withdrawn-today';

const gamesDataDefinition = [
  {
    name: 'LotoGreen',
    logo: 'https://lotogreen.com.br/wp-content/uploads/2024/10/logo-lotogreen-2048x664.png',
    href: 'https://madetoinvest.pro/lotogreen-apphack',
  },
  {
    name: 'Bora1.bet',
    logo: 'https://madetoinvest.pro/wp-content/uploads/2025/06/FQmwiS6piHpIwYaE7SfCATrT9NwOqNilozzBZTZQ.png',
    href: 'https://madetoinvest.pro/bora1bet-apphack',
  },
  {
    name: 'HanzBet',
    logo: 'https://madetoinvest.pro/wp-content/uploads/2025/06/hanz-removebg-preview.png',
    href: 'https://madetoinvest.pro/hanzbet-apphack',
  },
  {
    name: '777Rico',
    logo: 'https://madetoinvest.pro/wp-content/uploads/2025/06/O61sds0xJgf1mOvFJ49KGxefQAQkKXGPeqC8pOBD.png',
    href: 'https://madetoinvest.pro/777rico-apphack',
  },
  {
    name: '1win',
    logo: 'https://madetoinvest.pro/wp-content/uploads/2025/07/logo.png',
    href: 'https://madetoinvest.pro/1win-app',
  },
];

export default function TopGamesSection() {
  const [games, setGames] = useState<any[]>([]);

  useEffect(() => {
    const initialGames = gamesDataDefinition.map((game) => ({
        ...game,
        winRate: Math.floor(Math.random() * (98 - 45 + 1)) + 45,
        distributionMoment: Math.floor(Math.random() * (98 - 45 + 1)) + 45,
        status: 'active',
    }));
    setGames(initialGames);

    const interval = setInterval(() => {
      setGames(prevGames =>
        prevGames.map(game => {
          const change = (currentValue: number) => {
            const variation = Math.floor(Math.random() * 11) - 5; // -5 to +5
            let newValue = currentValue + variation;
            if (newValue > 98) newValue = 98;
            if (newValue < 45) newValue = 45;
            return newValue;
          };
          
          return {
            ...game,
            winRate: change(game.winRate),
            distributionMoment: change(game.distributionMoment),
          };
        })
      );
    }, 180000); // 3 minutes

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="paying-games" className="w-full max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">Casas que mais estão pagando agora</h2>
        <p className="text-muted-foreground mt-2">Análise em tempo real dos sistemas de jogos.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {games.map((game) => (
          <Card
            key={game.name}
            className="bg-background/50 border-primary/20 shadow-lg shadow-primary/5 flex flex-col transition-all duration-300 hover:border-primary/50 hover:shadow-primary/20 max-w-md w-full mx-auto"
            >
            <CardHeader>
              <CardTitle className="flex items-center justify-center">
                <Image
                  src={game.logo}
                  alt={`${game.name} logo`}
                  width={200}
                  height={80}
                  className="h-20 w-auto object-contain"
                />
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow space-y-4 text-lg">
              <OnlineUsers />
              <div>
                <p className="font-bold text-base mb-2">Taxa de vitória:</p>
                <WinRateProgressBar winRate={game.winRate} />
              </div>
              <div>
                <p className="font-bold text-base mb-2">Momento de distribuição:</p>
                <WinRateProgressBar winRate={game.distributionMoment} />
              </div>
              <div className="text-sm flex justify-between items-center">
                <span className="text-muted-foreground">Total sacado nas ultimas 12hs:</span>
                <WithdrawnToday />
              </div>
              <div className="flex items-center gap-2 text-sm">
                <strong className="text-muted-foreground font-normal">Status do sistema:</strong>
                <span className="flex items-center gap-2 text-primary font-bold whitespace-nowrap">
                    <span className="relative flex h-3 w-3">
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-primary animate-green-shadow-pulse"></span>
                    </span>
                    Ativo para operar
                  </span>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <a href={game.href} target="_blank" rel="noopener noreferrer">
                  Acessar esta casa <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
