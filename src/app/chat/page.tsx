import Header from '@/components/header';
import MatrixBackground from '@/components/matrix-background';

export default function ChatPage() {
  return (
    <>
      <MatrixBackground />
      <div className="flex flex-col min-h-screen relative z-10 bg-background/80">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4 animate-fade-in-down">
              Agente IA Pro
            </h1>
            <p className="text-lg text-foreground/80 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Página em construção.
            </p>
          </div>
        </main>
        <footer className="text-center p-4 text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Matrix Strategy AI. Todos os direitos reservados.</p>
        </footer>
      </div>
    </>
  );
}
