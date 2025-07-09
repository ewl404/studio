import Lp2ClientPage from './lp2-client-page';
import MatrixBackground from '@/components/matrix-background';

export default function Lp2Page() {
  return (
    <>
      <MatrixBackground />
      <div className="relative z-10 bg-background/90 min-h-screen">
        <main className="container mx-auto px-4 py-8">
          <Lp2ClientPage />
        </main>
         <footer className="text-center p-4 text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Matrix Strategy AI. Todos os direitos reservados.</p>
        </footer>
      </div>
    </>
  );
}
