
import Header from '@/components/header';
import MatrixBackground from '@/components/matrix-background';
import WinningsNotifier from '@/components/winnings-notifier';
import StrategySection from '@/components/strategy-section';

export default function ZeusPage() {
  return (
    <>
      <MatrixBackground />
      <div className="flex flex-col min-h-screen relative z-10 bg-background/80">
        <Header />
        <WinningsNotifier />
        <main className="flex-grow container mx-auto px-4 py-8">
          <StrategySection gameName="ZEUS" />
        </main>
        <footer className="text-center p-4 text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Matrix Strategy AI. Todos os direitos reservados.</p>
        </footer>
      </div>
    </>
  );
}
