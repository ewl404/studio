import Header from '@/components/header';
import TopGamesSection from '@/components/top-games-section';

export default function JogosPagandoPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <TopGamesSection />
      </main>
      <footer className="text-center p-4 text-muted-foreground text-sm">
        <p>&copy; {new Date().getFullYear()} Matrix Strategy AI. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
