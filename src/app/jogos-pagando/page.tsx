import Header from '@/components/header';
import OnlineUsers from '@/components/online-users';
import MatrixBackground from '@/components/matrix-background';
import PayingGamesGrid from '@/components/paying-games-grid';

export default function JogosPagandoPage() {
  return (
    <>
      <MatrixBackground />
      <div className="flex flex-col min-h-screen relative z-10 bg-background/80">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="text-center mb-8 max-w-3xl mx-auto">
            <h1
              className="text-3xl md:text-5xl font-bold text-primary !leading-tight font-headline mb-4 opacity-0 animate-fade-in-down"
            >
              Jogos com Maior Assertividade
            </h1>
            <p
              className="text-lg text-foreground/80 opacity-0 animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              Nossa IA analisa e ranqueia os jogos que mais estão pagando em tempo real. Escolha um com a barra verde para maiores chances de ganho.
            </p>
          </div>
          <div className="max-w-sm mx-auto mb-8">
              <OnlineUsers min={900} max={8000} />
          </div>
          <PayingGamesGrid />
        </main>
        <footer className="text-center p-4 text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Matrix Strategy AI. Todos os direitos reservados.</p>
        </footer>
      </div>
    </>
  );
}
