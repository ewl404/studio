import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import StrategySection from '@/components/strategy-section';
import TopGamesSection from '@/components/top-games-section';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 pt-[10px] pb-8 flex flex-col gap-8 md:gap-16">
        <HeroSection />
        <Separator className="bg-primary/20" />
        <StrategySection redirectOnSubmit={true} showCasinoSelector={false} />
        <Separator className="bg-primary/20" />
        <TopGamesSection />
        <Separator className="bg-primary/20" />
        <section className="w-full max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Card className="bg-background/70 border-primary/20 shadow-lg shadow-primary/10 text-center">
              <CardHeader>
                <Download className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl text-primary">Leve a Matrix IA com Você</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">
                  Instale nosso aplicativo para ter acesso rápido às melhores estratégias e receber sinais exclusivos.
                </p>
              </CardContent>
              <CardFooter className="justify-center">
                <Button asChild size="lg">
                  <Link href="/baixar">
                    Baixar o App Agora
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </section>
      </main>
      <footer className="text-center p-4 text-muted-foreground text-sm">
        <p>&copy; {new Date().getFullYear()} Matrix Strategy AI. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
