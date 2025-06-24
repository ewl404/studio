import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, BarChart, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import WinRateProgressBar from './win-rate-progress-bar';
import OnlineUsers from './online-users';

const topGames = [
  {
    name: 'LotoGreen',
    logo: 'https://lotogreen.com.br/wp-content/uploads/2024/10/logo-lotogreen-2048x664.png',
    winRate: 84,
    winnersToday: 1247,
    withdrawnToday: 34700,
    status: 'active',
  },
  {
    name: 'Neon Roulette',
    logo: BarChart,
    winRate: 78,
    winnersToday: 982,
    withdrawnToday: 21500,
    status: 'active',
  },
  {
    name: 'DataJack',
    logo: Users,
    winRate: 65,
    winnersToday: 451,
    withdrawnToday: 9800,
    status: 'unstable',
  },
];

export default function TopGamesSection() {
  return (
    <section id="paying-games" className="w-full max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">Casas que mais estão pagando agora</h2>
        <p className="text-muted-foreground mt-2">Análise em tempo real dos sistemas de jogos.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topGames.map((game, index) => {
          const Logo = game.logo;
          return (
          <Card
            key={game.name}
            className="bg-background/50 border-primary/20 shadow-lg shadow-primary/5 flex flex-col transition-all duration-300 hover:border-primary/50 hover:shadow-primary/20"
            style={{ animation: `fade-in-up 0.5s ease-out ${index * 0.15}s forwards`, opacity: 0 }}
            >
            <CardHeader>
              <CardTitle className={`flex items-center ${game.name === 'LotoGreen' ? 'justify-center' : 'gap-3'}`}>
                {typeof Logo === 'string' ? (
                  <Image src={Logo} alt={`${game.name} logo`} width={99} height={32} className="h-8 w-auto object-contain" />
                ) : (
                  <Logo className="w-8 h-8 text-primary" />
                )}
                {game.name !== 'LotoGreen' && <span className="text-2xl">{game.name}</span>}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow space-y-4 text-lg">
              <OnlineUsers />
              <div>
                <p className="font-bold text-base mb-2">Taxa de vitória:</p>
                <WinRateProgressBar winRate={game.winRate} />
              </div>
              <p><strong>Apostadores lucraram hoje:</strong> <span className="text-foreground font-bold">{game.winnersToday.toLocaleString('pt-BR')}</span></p>
              <p><strong>Total sacado hoje:</strong> <span className="text-foreground font-bold">{game.withdrawnToday.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span></p>
              <div className="flex items-center gap-2">
                <strong>Status do sistema:</strong>
                {game.status === 'active' ? (
                  <span className="flex items-center gap-2 text-primary font-bold">
                    <span className="relative flex h-3 w-3">
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-primary animate-green-shadow-pulse"></span>
                    </span>
                    Ativo para operar
                  </span>
                ) : (
                  <span className="text-destructive font-bold">🔴 Instável no momento</span>
                )}
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <a href="#">
                  Acessar esta casa <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>
          );
        })}
      </div>
    </section>
  );
}
