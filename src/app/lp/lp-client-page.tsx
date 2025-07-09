'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, BrainCircuit, ShieldCheck, Star, ArrowUp, Users, Cpu, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import LiveViewerCount from '@/components/live-viewer-count';
import WithdrawnToday from '@/components/withdrawn-today';
import { Slider } from "@/components/ui/slider";

// Placeholder for a vertical video.
const SalesVideo = () => (
    <div className="w-full max-w-[360px] mx-auto aspect-[9/16] bg-black border-2 border-primary/30 rounded-2xl flex items-center justify-center">
        <p className="text-primary">[Seu Vídeo de Vendas Aqui]</p>
    </div>
);

const TestimonialCard = ({ name, text, stars }: { name: string; text: string; stars: number }) => (
    <Card className="bg-accent/50 border-primary/20 h-full">
        <CardHeader>
            <div className="flex justify-between items-center">
                <CardTitle className="text-lg text-primary">{name}</CardTitle>
                <div className="flex text-yellow-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className={`w-5 h-5 ${i < stars ? 'fill-current' : ''}`} />
                    ))}
                </div>
            </div>
        </CardHeader>
        <CardContent>
            <p className="text-foreground/80">"{text}"</p>
        </CardContent>
    </Card>
);


export default function LpsClientPage() {
    const router = useRouter();
    const videoRef = useRef<HTMLDivElement>(null);
    const [countdown, setCountdown] = useState(60);
    const [showButton, setShowButton] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        if (countdown > 0) {
            const timer = setTimeout(() => setCountdown(prev => prev - 1), 1000);
            return () => clearTimeout(timer);
        } else {
            setShowButton(true);
        }
    }, [countdown]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        videoRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const CTAButton = () => (
        <Button 
            size="lg" 
            className="w-full md:w-auto h-16 text-xl font-bold animate-green-shadow-pulse"
            onClick={() => router.push('/jogos-pagando')}
        >
            ACESSAR AGORA
        </Button>
    );

    const InvestmentSimulator = () => {
        const [bet, setBet] = useState(50);
        const [potentialReturn, setPotentialReturn] = useState(0);

        useEffect(() => {
            // Simple fixed multiplier for demonstration to avoid layout shifts on every random number change
            const multiplier = 47.7;
            setPotentialReturn(bet * multiplier);
        }, [bet]);

        return (
            <Card className="bg-accent/50 border-primary/20 p-6 text-left">
                <h3 className="text-xl font-bold text-primary mb-4">Simulador de Retorno</h3>
                <div className="space-y-4">
                    <div>
                        <label htmlFor="betAmount" className="font-semibold text-foreground/80 mb-2 block">
                            Seu investimento: <span className="text-primary font-bold">R$ {bet.toFixed(2).replace('.', ',')}</span>
                        </label>
                        <Slider
                            id="betAmount"
                            min={10}
                            max={500}
                            step={10}
                            value={[bet]}
                            onValueChange={(value) => setBet(value[0])}
                        />
                    </div>
                    <div>
                        <p className="font-semibold text-foreground/80">Retorno Potencial com a IA:</p>
                        <p className="text-4xl font-bold text-primary animate-green-pulse-once">
                            {potentialReturn.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                        </p>
                    </div>
                </div>
                 <p className="text-xs text-muted-foreground mt-4">
                    *Este é um valor estimado com base na performance média da nossa IA. O retorno pode variar.
                </p>
            </Card>
        )
    }

    return (
        <div className="max-w-4xl mx-auto space-y-16 text-center">
            
            {/* VSL Section */}
            <section ref={videoRef} className="animate-fade-in-down">
                <h1 className="text-3xl md:text-5xl font-bold text-primary !leading-tight font-headline mb-6 uppercase">
                    Essa IA entende padrões matemáticos ocultos nos jogos — e tá colocando <span className="text-foreground" style={{ textShadow: '0 0 10px hsl(var(--primary))' }}>R$94</span> a <span className="text-foreground" style={{ textShadow: '0 0 10px hsl(var(--primary))' }}>R$487</span> por dia no bolso de quem segue ela
                </h1>
                <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
                    Assista ao vídeo abaixo e veja com os próprios olhos...
                </p>
                <div className="relative w-full max-w-[360px] mx-auto">
                    <LiveViewerCount />
                    <SalesVideo />
                </div>
            </section>

            {/* CTA Button */}
            <section className="h-20 flex items-center justify-center">
                {showButton ? (
                    <CTAButton />
                ) : (
                    <div className="text-center text-lg text-muted-foreground">
                        <p>O botão de acesso será liberado em...</p>
                        <p className="text-2xl font-bold text-primary">{countdown} segundos</p>
                    </div>
                )}
            </section>
            
            {/* Benefits Section */}
            <section className="animate-fade-in-up space-y-8" style={{ animationDelay: '0.4s' }}>
                <h2 className="text-3xl font-bold text-primary mb-8">Por que nosso método é diferente de tudo que você já viu?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                    <Card className="bg-accent/50 border-primary/20 p-6">
                        <BrainCircuit className="w-12 h-12 text-primary mb-4" />
                        <h3 className="text-xl font-bold text-primary mb-2">Análise Preditiva</h3>
                        <p className="text-foreground/80">Nossa IA não "adivinha". Ela processa milhões de jogadas para prever os momentos exatos de distribuição de prêmios.</p>
                    </Card>
                    <Card className="bg-accent/50 border-primary/20 p-6">
                        <CheckCircle className="w-12 h-12 text-primary mb-4" />
                        <h3 className="text-xl font-bold text-primary mb-2">Estratégias Validadas</h3>
                        <p className="text-foreground/80">Receba o passo a passo exato: qual jogo, qual estratégia usar e a hora certa de entrar e sair para maximizar o lucro.</p>
                    </Card>
                     <Card className="bg-accent/50 border-primary/20 p-6">
                        <ShieldCheck className="w-12 h-12 text-primary mb-4" />
                        <h3 className="text-xl font-bold text-primary mb-2">Anti-Quebra de Banca</h3>
                        <p className="text-foreground/80">O sistema opera com lógica fria, eliminando o fator emocional que leva 98% dos jogadores a perderem dinheiro.</p>
                    </Card>
                </div>
            </section>

            {/* Social Proof Section */}
            <section className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                <h2 className="text-3xl font-bold text-center text-primary mb-8">Veja o que nossos usuários estão dizendo:</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <TestimonialCard name="Marcos R." stars={5} text="Eu estava cético, mas decidi tentar. Fiz R$800 no primeiro dia. É surreal, a IA realmente funciona." />
                    <TestimonialCard name="Juliana S." stars={5} text="Finalmente algo que funciona de verdade! Chega de seguir 'dicas furadas'. Com a IA, os resultados são consistentes." />
                    <TestimonialCard name="Pedro A." stars={5} text="O melhor investimento que fiz. Recuperei o valor no mesmo dia e agora só lucro. Recomendo demais!" />
                </div>
                 {showButton && (
                    <div className="flex justify-center">
                        <CTAButton />
                    </div>
                )}
            </section>

             {/* Interactive Data Section */}
            <section className="animate-fade-in-up space-y-8" style={{ animationDelay: '1.0s' }}>
                 <h2 className="text-3xl font-bold text-primary">Os Dados Não Mentem</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="bg-accent/50 border-primary/20 p-6 flex flex-col items-center justify-center">
                        <Users className="w-12 h-12 text-primary mb-4" />
                        <h3 className="text-lg font-bold text-primary">Total ganho pelos usuários hoje:</h3>
                        <div className="text-4xl font-bold text-foreground mt-2">
                             <WithdrawnToday />
                        </div>
                    </Card>
                    <InvestmentSimulator />
                 </div>
            </section>
            
            {/* Logic & Math Section */}
            <section className="animate-fade-in-up space-y-8" style={{ animationDelay: '1.2s' }}>
                <h2 className="text-3xl font-bold text-primary">Como a IA Pensa: Lógica Pura, Zero Sorte</h2>
                <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
                    Nossa IA não se baseia em sorte. Ela analisa milhões de rodadas para encontrar padrões e ciclos de pagamento que o olho humano não consegue ver.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <Card className="bg-accent/50 border-primary/20 p-6 text-left">
                        <Cpu className="w-10 h-10 text-primary mb-4" />
                        <h3 className="text-xl font-bold text-primary mb-2">Exemplo de Padrão Detectado</h3>
                        <p className="text-foreground/80 mb-4">A IA notou uma sequência no Fortune Tiger:</p>
                        <div className="flex justify-around items-center p-3 bg-background/50 rounded-lg">
                           <span className="text-2xl font-bold">7x</span>
                           <span className="text-muted-foreground">&rarr;</span>
                           <span className="text-2xl font-bold">12x</span>
                            <span className="text-muted-foreground">&rarr;</span>
                           <span className="text-2xl font-bold">5x</span>
                            <span className="text-muted-foreground">&rarr;</span>
                           <span className="text-2xl font-bold text-primary animate-pulse">PRÓXIMO: 25x?</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-4">Ela identifica a probabilidade do próximo grande prêmio e te avisa a hora de entrar.</p>
                    </Card>
                    <Card className="bg-accent/50 border-primary/20 p-6 text-left">
                        <TrendingUp className="w-10 h-10 text-primary mb-4" />
                        <h3 className="text-xl font-bold text-primary mb-2">Mapa de Calor de Assertividade</h3>
                        <p className="text-foreground/80 mb-4">Os pontos mais quentes indicam onde a IA previu ganhos com mais de 95% de precisão nas últimas 24 horas.</p>
                        <div className="grid grid-cols-5 gap-1.5">
                            {Array.from({ length: 25 }).map((_, index) => {
                                const isHot = [6, 8, 12, 16, 18, 22].includes(index);
                                const isWarm = [1, 3, 11, 13, 21, 23].includes(index);
                                return (
                                <div key={index} className={cn(
                                    "aspect-square rounded-sm",
                                    isHot ? 'bg-primary' : isWarm ? 'bg-primary/50' : 'bg-primary/10'
                                )} />
                                )
                            })}
                        </div>
                    </Card>
                </div>
            </section>
            
            {/* Community & Final CTA Section */}
            <section className="animate-fade-in-up" style={{ animationDelay: '1.4s' }}>
                <Card className="bg-gradient-to-br from-primary/10 via-background to-background border-2 border-primary/50 shadow-2xl shadow-primary/20 p-8">
                     <h2 className="text-3xl font-bold text-primary mb-4">Junte-se ao Grupo que está Mudando o Jogo</h2>
                     <p className="text-lg text-foreground/90 max-w-3xl mx-auto mb-6">
                        Poucos têm acesso a essa tecnologia — a maioria ainda joga no escuro. A cada dia, mais pessoas descobrem o segredo que os cassinos não querem que você saiba.
                     </p>
                     <div className="border-l-4 border-primary pl-4 my-6">
                        <blockquote className="text-left text-lg italic text-foreground">
                            “Comecei com R$50 e tripliquei em 2 dias só seguindo o padrão que ela me mostrou. É absurdo.”
                        </blockquote>
                        <p className="text-left text-sm text-muted-foreground mt-2">- Carlos F.</p>
                     </div>
                      {showButton && (
                        <div className="flex justify-center mt-8">
                            <CTAButton />
                        </div>
                     )}
                </Card>
            </section>

            {/* Scroll to top button */}
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
}
