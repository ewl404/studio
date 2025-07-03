
import Header from '@/components/header';
import MatrixBackground from '@/components/matrix-background';
import DownloadPageClient from './download-page-client';
import InAppBrowserRedirect from '@/components/in-app-browser-redirect';

export default function BaixarPage() {
  return (
    <>
      <InAppBrowserRedirect />
      <MatrixBackground />
      <div className="flex flex-col min-h-screen relative z-10 bg-background/80">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <DownloadPageClient />
        </main>
        <footer className="text-center p-4 text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Matrix Strategy AI. Todos os direitos reservados.</p>
        </footer>
      </div>
    </>
  );
}
