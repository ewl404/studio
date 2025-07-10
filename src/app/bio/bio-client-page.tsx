
'use client';

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ArrowUp, Award, Instagram, MessageCircle, Send, Users, Youtube } from 'lucide-react';
import Link from 'next/link';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ChartContainer, ChartTooltipContent } from '@/components/ui/chart';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';


const links = [
    { title: 'HanzBet', href: 'https://madetoinvest.pro/hanzbet-apphack' },
    { title: 'LotoGreen', href: 'https://madetoinvest.pro/lotogreen-apphack' },
    { title: '1Win', href: 'https://madetoinvest.pro/1win-app' },
];

const mainLinks = [
    { title: 'Grupo de Lives Telegram', icon: Send, href: 'https://madetoinvest.pro/grupo-telegram' },
    { title: 'Mentoria Vela Rosa 100x R$ 29,90', icon: Award, href: 'https://lastlink.com/p/C89B2C992/checkout-payment/' },
    { title: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/wallace.velarosa' },
    { title: 'Youtube', icon: Youtube, href: 'https://www.youtube.com/@wallaceaviator' },
];

const testimonials = [
    {
        quote: "A mentoria foi um divisor de águas. O network no grupo do WhatsApp é surreal, todo mundo se ajuda. Parei de perder dinheiro e comecei a lucrar de verdade.",
        name: "Carlos R.",
        image: "https://i.imgur.com/uRLLplB.jpg"
    },
    {
        quote: "Estar perto de pessoas com o mesmo objetivo muda tudo. Aprendi estratégias que nunca imaginei. O Wallace realmente entrega o ouro. Recomendo 100%!",
        name: "Juliana F.",
        image: "https://i.imgur.com/5u2s7K9.jpg"
    },
    {
        quote: "O valor que paguei na mentoria voltou em 2 dias. O acesso direto ao Wallace e à comunidade não tem preço. Se você quer levar isso a sério, é o único caminho.",
        name: "Pedro M.",
        image: "https://i.imgur.com/bSzrF3k.jpg"
    },
];

const chartData = [
    { month: 'Jan', semMentoria: 45, comMentoria: 210 },
    { month: 'Fev', semMentoria: 60, comMentoria: 350 },
    { month: 'Mar', semMentoria: 30, comMentoria: 480 },
    { month: 'Abr', semMentoria: 75, comMentoria: 620 },
    { month: 'Mai', semMentoria: 50, comMentoria: 750 },
];

const chartConfig = {
    comMentoria: {
        label: 'Com Mentoria',
        color: 'hsl(var(--primary))',
    },
    semMentoria: {
        label: 'Sem Mentoria',
        color: 'hsl(var(--muted))',
    },
};

const BioClientPage = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="w-full max-w-2xl mx-auto space-y-12">
            <header className="flex flex-col items-center space-y-4 animate-fade-in-down">
                <Image
                    src="https://madetoinvest.pro/wp-content/uploads/2025/04/logo.jpg"
                    alt="Wallace"
                    width={128}
                    height={128}
                    className="rounded-full border-4 border-primary shadow-lg"
                    data-ai-hint="man portrait"
                />
                <h1 className="text-2xl font-bold text-primary">@wallace.velarosa</h1>
            </header>

            <section className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <Card className="bg-background/70 border-primary/20 shadow-lg shadow-primary/10 backdrop-blur-sm">
                    <CardHeader>
                        <CardTitle className="text-xl text-primary">Casas que eu jogo e confio:</CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {links.map((link) => (
                            <Button key={link.title} asChild variant="outline">
                                <Link href={link.href} target="_blank" rel="noopener noreferrer">{link.title}</Link>
                            </Button>
                        ))}
                    </CardContent>
                </Card>

                <div className="space-y-3">
                    {mainLinks.map((link) => (
                        <Button key={link.title} asChild size="lg" className="w-full h-14 text-lg justify-start">
                            <Link href={link.href} target="_blank" rel="noopener noreferrer">
                                <link.icon className="mr-4" />
                                {link.title}
                            </Link>
                        </Button>
                    ))}
                </div>
            </section>
            
            <section className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <Card className="bg-background/70 border-primary/20 shadow-lg shadow-primary/10 backdrop-blur-sm">
                    <CardHeader>
                        <CardTitle className="text-2xl text-center text-primary">A Evolução dos Membros da Mentoria</CardTitle>
                        <CardDescription className="text-center">Veja a diferença que o acompanhamento certo faz.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig} className="w-full h-[300px]">
                            <ResponsiveContainer>
                                <BarChart data={chartData} margin={{ top: 20, right: 20, left: -10, bottom: 5 }}>
                                    <CartesianGrid vertical={false} strokeDasharray="3 3" />
                                    <XAxis dataKey="month" tickLine={false} axisLine={false} />
                                    <YAxis tickLine={false} axisLine={false} tickFormatter={(value) => `R$${value}`} />
                                    <Tooltip
                                        cursor={{ fill: 'hsl(var(--accent) / 0.5)' }}
                                        content={<ChartTooltipContent />}
                                    />
                                    <Legend />
                                    <Bar dataKey="semMentoria" fill="var(--color-semMentoria)" radius={4} />
                                    <Bar dataKey="comMentoria" fill="var(--color-comMentoria)" radius={4} />
                                </BarChart>
                            </ResponsiveContainer>
                        </ChartContainer>
                    </CardContent>
                </Card>

                <Card className="bg-accent/30 border-primary/20">
                     <CardHeader>
                        <CardTitle className="text-xl text-primary flex items-center gap-2"><Users className="w-6 h-6"/> O Poder da Comunidade</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 text-foreground/80">
                       <p>A mentoria é mais que um curso: é um <strong className="text-primary">ecossistema de crescimento</strong>. Você terá acesso a um grupo exclusivo no WhatsApp, onde a mágica acontece.</p>
                       <ul className="list-disc list-inside pl-2 space-y-1">
                           <li><span className="font-bold">Network de Elite:</span> Esteja próximo de pessoas com o mesmo objetivo, trocando estratégias que funcionam AGORA.</li>
                           <li><span className="font-bold">Análise de Apostas:</span> Envie suas jogadas e receba feedback meu e de outros membros experientes.</li>
                           <li><span className="font-bold">Motivação Constante:</span> Ver o resultado dos colegas é o maior combustível para você não desistir e alcançar a consistência.</li>
                       </ul>
                       <p>Sozinho você vai mais rápido, mas <strong className="text-primary">juntos vamos mais longe</strong> (e com muito mais lucro).</p>
                    </CardContent>
                </Card>
            </section>

             <section className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <h2 className="text-2xl text-center font-bold text-primary">O que os Alunos Dizem</h2>
                 <Carousel className="w-full">
                    <CarouselContent>
                        {testimonials.map((testimonial, index) => (
                            <CarouselItem key={index}>
                                <Card className="bg-background/70 border-primary/20">
                                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                                        <Image src={testimonial.image} alt={testimonial.name} width={80} height={80} className="rounded-full border-2 border-primary" data-ai-hint="person portrait" />
                                        <p className="italic text-foreground/90">"{testimonial.quote}"</p>
                                        <p className="font-bold text-primary">- {testimonial.name}</p>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden sm:flex" />
                    <CarouselNext className="hidden sm:flex"/>
                </Carousel>
            </section>

            <section className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                 <Button asChild size="lg" className="w-full h-16 text-xl animate-green-shadow-pulse">
                     <Link href="https://lastlink.com/p/C89B2C992/checkout-payment/" target="_blank" rel="noopener noreferrer">
                        QUERO A MENTORIA!
                     </Link>
                </Button>
            </section>

            <button 
                onClick={scrollToTop}
                className={cn(
                    "fixed bottom-6 right-6 p-3 rounded-full bg-primary text-primary-foreground shadow-lg transition-opacity duration-300 z-50",
                    showScrollTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
                )}
                aria-label="Voltar para o topo"
            >
                <ArrowUp className="h-6 w-6" />
            </button>
        </div>
    );
};

export default BioClientPage;
