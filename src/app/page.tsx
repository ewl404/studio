import CasinoBets from '@/components/casino-bets';
import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import StrategySection from '@/components/strategy-section';
import TopGamesSection from '@/components/top-games-section';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 flex flex-col gap-8 md:gap-16">
        <HeroSection />
        <CasinoBets />
        <Separator className="bg-primary/20" />
        <StrategySection />
        <Separator className="bg-primary/20" />
        <TopGamesSection />
      </main>
      <footer className="text-center p-4 text-muted-foreground text-sm">
        <p>&copy; {new Date().getFullYear()} Matrix Strategy AI. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
