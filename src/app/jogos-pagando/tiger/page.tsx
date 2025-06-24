import Header from '@/components/header';
import MatrixBackground from '@/components/matrix-background';
import WinningsNotifier from '@/components/winnings-notifier';
import OnlineUsers from '@/components/online-users';
import StrategySection from '@/components/strategy-section';
import Image from 'next/image';

export default function TigerPage() {
  return (
    <>
      <MatrixBackground />
      <div className="flex flex-col min-h-screen relative z-10 bg-background/80">
        <Header />
        <WinningsNotifier />
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="text-center mb-8 max-w-3xl mx-auto">
             <Image
                src="https://i.imgur.com/tmp57ua.png"
                alt="Fortune Tiger logo"
                width={250}
                height={250}
                className="w-48 h-48 md:w-64 md:h-64 object-contain rounded-md aspect-square mx-auto mb-4 opacity-0 animate-fade-in-down"
                style={{ animationDelay: '0.1s' }}
                data-ai-hint="tiger mascot"
            />
            <h1
              className="text-3xl md:text-5xl font-bold text-primary !leading-tight font-headline mb-4 opacity-0 animate-fade-in-down"
              style={{ animationDelay: '0.2s' }}
            >
              Estratégia Fortune Tiger
            </h1>
            <p
              className="text-lg text-foreground/80 opacity-0 animate-fade-in-up"
              style={{ animationDelay: '0.4s' }}
            >
              Utilize nossa IA para identificar os melhores horários e estratégias para o Fortune Tiger.
            </p>
          </div>
          <div className="max-w-sm mx-auto mb-8">
              <OnlineUsers min={500} max={2500} />
          </div>
          <StrategySection />
        </main>
        <footer className="text-center p-4 text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Matrix Strategy AI. Todos os direitos reservados.</p>
        </footer>
      </div>
    </>
  );
}
