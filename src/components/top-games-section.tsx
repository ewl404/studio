import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import WinRateProgressBar from './win-rate-progress-bar';
import OnlineUsers from './online-users';
import WithdrawnToday from './withdrawn-today';

const gamesData = [
  {
    name: 'LotoGreen',
    logo: 'https://lotogreen.com.br/wp-content/uploads/2024/10/logo-lotogreen-2048x664.png',
  },
  {
    name: 'Fortune Tiger',
    logo: 'https://i.imgur.com/tmp57ua.png',
  },
  {
    name: 'HanzBet',
    logo: 'https://madetoinvest.pro/wp-content/uploads/2025/06/hanz-removebg-preview.png',
  }
];

export default function TopGamesSection() {
  const games = gamesData.map((game) => ({
    ...game,
    winRate: Math.floor(Math.random() * (100 - 30 + 1)) + 30,
    distributionMoment: Math.floor(Math.random() * (100 - 30 + 1)) + 30,
    status: 'active',
  }));

  return (
    <section id="paying-games" className="w-full max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">Casas que mais estão pagando agora</h2>
        <p className="text-muted-foreground mt-2">Análise em tempo real dos sistemas de jogos.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <a href="https://madetoinvest.pro/hanzbet-apphack" target="_blank" rel="noopener noreferrer">
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
