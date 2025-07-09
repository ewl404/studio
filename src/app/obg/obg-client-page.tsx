'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, PartyPopper } from 'lucide-react';

const ObgClientPage = () => {
  useEffect(() => {
    // Check if fbq is available before using it
    if (window.fbq) {
      window.fbq('track', 'Purchase', { value: 47.90, currency: 'BRL' });
    }
  }, []);

  return (
    <Card className="w-full max-w-lg bg-background/70 border-primary/20 shadow-lg shadow-primary/10 animate-fade-in-up">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <PartyPopper className="w-16 h-16 text-primary" />
        </div>
        <CardTitle className="text-3xl text-primary font-bold">
          Compra Realizada com Sucesso!
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-lg text-foreground/80">
        <p>
          Obrigado por confiar na Matrix Strategy AI. Suas credenciais de acesso foram enviadas para o seu e-mail.
        </p>
        <p>
          Clique no botão abaixo para começar a usar nossas estratégias e lucrar agora mesmo.
        </p>
      </CardContent>
      <div className="p-6 pt-0">
        <Button asChild size="lg" className="w-full h-12 text-lg animate-pulse">
          <Link href="/jogos-pagando">
            <CheckCircle className="mr-2" />
            Acessar Plataforma
          </Link>
        </Button>
      </div>
    </Card>
  );
};

export default ObgClientPage;
