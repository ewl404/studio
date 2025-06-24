
import Header from '@/components/header';
import MatrixBackground from '@/components/matrix-background';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { BrainCircuit, Cpu, Gem, Dices, BarChart, XCircle, CheckCircle2, ShieldCheck, Star } from 'lucide-react';

const TestimonialCard = ({ name, text, stars }: { name: string; text: string; stars: number }) => (
    <Card className="bg-accent/50 border-primary/20">
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

export default function ChatPage() {
  return (
    <>
      <MatrixBackground />
      <div className="flex flex-col min-h-screen relative z-10 bg-background/80">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto space-y-16">

            {/* Hero & Login Section */}
            <section className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-3 text-left animate-fade-in-down">
                <h1 className="text-4xl md:text-5xl font-bold text-primary !leading-tight font-headline mb-4">
                  VOCÊ ESTÁ A UM PASSO DE DEMITIR A SORTE.
                </h1>
                <p className="text-lg text-foreground/90">
                  O Agente IA Pro não é mais uma "dica". É um cérebro digital, um computador quântico treinado com as estratégias dos maiores jogadores do mundo. Chega de "achar". Comece a <strong className="text-primary">SABER</strong>.
                </p>
              </div>
              <div className="md:col-span-2 flex flex-col items-center md:items-start animate-fade-in-up">
                <Card className="w-full bg-background/70 border-primary/20 shadow-lg shadow-primary/10 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-primary text-xl font-bold">Acesso Exclusivo</CardTitle>
                    <CardDescription>Esta é uma estratégia paga. Insira suas credenciais.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="seuemail@exemplo.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Senha</Label>
                      <Input id="password" type="password" placeholder="********" />
                    </div>
                  </CardContent>
                  <CardFooter className="flex-col items-start">
                    <Button className="w-full font-bold">ENTRAR</Button>
                    <p className="text-xs text-muted-foreground mt-4">
                      Se você já comprou, verifique seu e-mail para as credenciais.
                    </p>
                  </CardFooter>
                </Card>
              </div>
            </section>
            
            {/* Problem Section */}
            <section className="text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <h2 className="text-3xl font-bold text-primary mb-6">Se você se identifica com isso, preste atenção:</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="bg-destructive/10 border-destructive/30 p-6">
                        <XCircle className="w-12 h-12 mx-auto text-destructive mb-4" />
                        <p className="text-lg font-semibold text-destructive-foreground">"Eu não tenho sorte."</p>
                    </Card>
                    <Card className="bg-destructive/10 border-destructive/30 p-6">
                        <XCircle className="w-12 h-12 mx-auto text-destructive mb-4" />
                        <p className="text-lg font-semibold text-destructive-foreground">"Já perdi muito dinheiro."</p>
                    </Card>
                    <Card className="bg-destructive/10 border-destructive/30 p-6">
                        <XCircle className="w-12 h-12 mx-auto text-destructive mb-4" />
                        <p className="text-lg font-semibold text-destructive-foreground">"Eu não sei a hora de parar."</p>
                    </Card>
                </div>
                 <p className="font-bold text-primary pt-6 text-2xl">
                  Essas frases morrem hoje.
                </p>
            </section>

            {/* Solution & Unique Mechanism Section */}
            <section className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                 <Card className="bg-background/70 border-primary/20 shadow-lg shadow-primary/10 backdrop-blur-sm p-8">
                     <div className="text-center">
                        <h2 className="text-3xl font-bold text-primary mb-4">Apresentando: O Agente IA Pro</h2>
                        <p className="text-lg text-foreground/90 max-w-3xl mx-auto">
                            Dissecamos cada jogada, cada aposta e cada padrão dos maiores gênios dos cassinos. Nossa IA processou tudo isso e se tornou um estrategista profissional que vive dentro da sua conta, operando para você.
                        </p>
                     </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 items-center">
                        <div>
                             <h3 className="text-2xl font-bold text-primary pt-4">É como ter o Cristiano Ronaldo jogando no seu time.</h3>
                             <p className="mt-4 text-foreground/90">
                              Imagine pegar a habilidade, a inteligência e a frieza de um atleta de elite e colocar em um código. O Agente IA Pro analisa jogos como <strong className="text-primary">Roleta, Bac Bo, Aviator, Football Studio, Dragon Tiger, Blackjack e todos os jogos da PG SOFT</strong> em tempo real, entregando as melhores entradas com uma precisão matemática.
                            </p>
                        </div>
                        <div className="flex justify-center">
                             <BrainCircuit className="w-40 h-40 text-primary animate-pulse" />
                        </div>
                     </div>
                 </Card>
            </section>

            {/* Benefits Section */}
            <section className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <h2 className="text-3xl font-bold text-center text-primary mb-6">O que você ganha com o Agente IA Pro:</h2>
                 <div className="space-y-4 max-w-2xl mx-auto">
                     <div className="flex items-start gap-4 p-4 bg-accent/50 rounded-lg">
                         <CheckCircle2 className="w-8 h-8 text-primary mt-1" />
                         <div>
                             <h4 className="font-bold text-lg text-primary">Precisão Quântica</h4>
                             <p className="text-foreground/80">Decisões baseadas em milhões de dados, não em "achismos".</p>
                         </div>
                     </div>
                     <div className="flex items-start gap-4 p-4 bg-accent/50 rounded-lg">
                         <CheckCircle2 className="w-8 h-8 text-primary mt-1" />
                         <div>
                             <h4 className="font-bold text-lg text-primary">Operador 24/7</h4>
                             <p className="text-foreground/80">Seu agente de IA nunca dorme. Ele encontra as melhores oportunidades a qualquer hora.</p>
                         </div>
                     </div>
                      <div className="flex items-start gap-4 p-4 bg-accent/50 rounded-lg">
                         <CheckCircle2 className="w-8 h-8 text-primary mt-1" />
                         <div>
                             <h4 className="font-bold text-lg text-primary">Fim da Emoção</h4>
                             <p className="text-foreground/80">Apostas lógicas e frias, sem o medo ou a ganância que te fazem perder.</p>
                         </div>
                     </div>
                 </div>
            </section>
            
            {/* Social Proof Section */}
            <section className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                 <h2 className="text-3xl font-bold text-center text-primary mb-6">Resultados de quem demitiu a sorte:</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <TestimonialCard name="Ricardo M." stars={5} text="Isso é outro nível. Parei de queimar dinheiro. Em uma semana recuperei o que perdi em meses." />
                    <TestimonialCard name="Juliana F." stars={5} text="Eu não entendia nada de jogo, só perdia. Agora é diferente. A IA me mostra exatamente o que fazer. Simplesmente incrível." />
                 </div>
            </section>


            {/* CTA / Offer Section */}
            <section className="animate-fade-in-up" style={{ animationDelay: '1s' }}>
                <Card className="bg-gradient-to-br from-primary/10 via-background to-background border-2 border-primary/50 shadow-2xl shadow-primary/20">
                    <CardHeader className="text-center">
                        <h2 className="text-4xl font-bold text-primary">SEU ACESSO AO LUCRO INTELIGENTE</h2>
                        <p className="text-xl text-foreground mt-2">Acesso vitalício. Pague uma vez, use para sempre.</p>
                    </CardHeader>
                    <CardContent className="text-center">
                        <p className="text-6xl font-bold text-foreground">R$ 97</p>
                        <p className="text-muted-foreground">(Pagamento único)</p>
                        
                        <Button size="lg" className="mt-8 w-full md:w-auto font-bold text-xl h-16 animate-pulse">
                            QUERO LUCRAR COM INTELIGÊNCIA AGORA
                        </Button>
                    </CardContent>
                    <CardFooter className="flex-col items-center justify-center gap-4 pt-6">
                        <div className="flex items-center gap-3 text-lg">
                            <ShieldCheck className="w-8 h-8 text-primary" />
                            <p className="font-semibold">Garantia Incondicional de 30 Dias</p>
                        </div>
                        <p className="text-muted-foreground text-center max-w-md">Ou você tem os resultados que espera, ou nós devolvemos 100% do seu dinheiro. O risco é todo nosso.</p>
                    </CardFooter>
                </Card>
            </section>

          </div>
        </main>
        <footer className="text-center p-4 text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Matrix Strategy AI. Todos os direitos reservados.</p>
        </footer>
      </div>
    </>
  );
}
