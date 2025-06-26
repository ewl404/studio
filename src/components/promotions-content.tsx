'use client';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

const promotions = [
  {
    title: 'Bônus de Primeiro Depósito',
    description: 'Dobre seu primeiro depósito em até R$500! Cadastre-se em uma de nossas plataformas parceiras e ative seu bônus para começar com o pé direito.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'money cash prize',
    cta: 'Ver Plataformas',
    href: '/jogos-pagando'
  },
  {
    title: 'Rodadas Grátis no Fortune Tiger',
    description: 'Faça um depósito de R$50 ou mais e ganhe 50 rodadas grátis para tentar a sorte no jogo do tigrinho. Válido para novos jogadores nas casas que oferecem o jogo.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'tiger mascot',
    cta: 'Jogar Fortune Tiger',
    href: '/jogos-pagando/tiger'
  },
  {
    title: 'Cashback Semanal',
    description: 'Jogue em qualquer cassino parceiro durante a semana e receba 10% de cashback sobre suas perdas. Menos risco, mais diversão!',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'piggy bank coins',
    cta: 'Escolher Jogo',
    href: '/jogos-pagando'
  }
];

const PromotionsContent = () => {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-12">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary !leading-tight font-headline mb-4 animate-fade-in-down">
          Promoções Exclusivas
        </h1>
        <p className="text-lg text-foreground/80 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Aproveite ofertas especiais selecionadas pela nossa IA para maximizar seus ganhos nas plataformas parceiras.
        </p>
      </div>

      <div className="space-y-8">
        {promotions.map((promo, index) => (
          <Card key={promo.title} className="bg-background/70 border-primary/20 shadow-lg shadow-primary/10 backdrop-blur-sm overflow-hidden animate-fade-in-up" style={{ animationDelay: `${0.4 + index * 0.2}s` }}>
             <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr]">
                <div className="p-6 flex flex-col justify-center order-2 md:order-1">
                    <CardHeader className="p-0 mb-4">
                        <CardTitle className="text-2xl text-primary">{promo.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 mb-6">
                        <p className="text-foreground/80">{promo.description}</p>
                    </CardContent>
                    <CardFooter className="p-0">
                        <Button asChild>
                            <Link href={promo.href}>
                                {promo.cta}
                                {promo.href.startsWith('http') && <ExternalLink className="ml-2 h-4 w-4" />}
                            </Link>
                        </Button>
                    </CardFooter>
                </div>
                <div className="relative min-h-[200px] md:min-h-0 order-1 md:order-2">
                     <Image
                        src={promo.image}
                        alt={promo.title}
                        fill
                        className="object-cover"
                        data-ai-hint={promo.imageHint}
                      />
                </div>
             </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PromotionsContent;
