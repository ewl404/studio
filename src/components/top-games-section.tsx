import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import WinRateProgressBar from './win-rate-progress-bar';
import OnlineUsers from './online-users';
import WithdrawnToday from './withdrawn-today';

const game = {
  name: 'LotoGreen',
  logo: 'https://lotogreen.com.br/wp-content/uploads/2024/10/logo-lotogreen-2048x664.png',
  winRate: 84,
  distributionMoment: 92,
  status: 'active',
};

export default function TopGamesSection() {
  const Logo = game.logo;
  return (
    <section id="paying-games" className="w-full max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">Casas que mais estão pagando agora</h2>
        <p className="text-muted-foreground mt-2">Análise em tempo real dos sistemas de jogos.</p>
      </div>
      <div className="flex justify-center">
          <Card
            className="bg-background/50 border-primary/20 shadow-lg shadow-primary/5 flex flex-col transition-all duration-300 hover:border-primary/50 hover:shadow-primary/20 max-w-md w-full"
            >
            <CardHeader>
              <CardTitle className="flex items-center justify-center">
                <Image src={Logo} alt={`${game.name} logo`} width={99} height={32} className="h-8 w-auto object-contain" />
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
              <p><strong>Total sacado hoje:</strong> <WithdrawnToday initialAmount={53942.09} /></p>
              <div className="flex items-center gap-2 text-sm">
                <strong>Status do sistema:</strong>
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
                <a href="#">
                  Acessar esta casa <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>
      </div>
    </section>
  );
}
