'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { BrainCircuit, Cpu, Gem, Dices, BarChart, XCircle, CheckCircle2, ShieldCheck, Star, Bot, Signal, TrendingUp, Loader2 } from 'lucide-react';

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

export default function ChatClientPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Obfuscated credentials
  const encodedEmail = 'aWEuYWdlbnRlcHJvQGdtYWlsLmNvbQ==';
  const encodedPassword = 'YWdlbnRlUFJPQDE3OTA=';
  
  const handleLogin = async () => {
    setIsLoading(true);
    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 500));

      const correctEmail = atob(encodedEmail);
      const correctPassword = atob(encodedPassword);

      if (email === correctEmail && password === correctPassword) {
        toast({
          title: 'Acesso Liberado',
          description: 'Redirecionando para a plataforma...',
        });
        router.push('/jogos-pagando');
      } else {
        toast({
          variant: 'destructive',
          title: 'Erro de Acesso',
          description: 'Credenciais inválidas. Verifique seu e-mail e senha.',
        });
      }
    } catch (error) {
       toast({
          variant: 'destructive',
          title: 'Erro Inesperado',
          description: 'Ocorreu um erro. Tente novamente.',
        });
    } finally {
        setIsLoading(false);
    }
  };


  return (
    <div className="max-w-4xl mx-auto space-y-16">

      {/* Hero & Login Section */}
      <section className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
        <div className="md:col-span-2 flex flex-col items-center md:items-start animate-fade-in-down">
          <Card className="w-full bg-background/70 border-primary/20 shadow-lg shadow-primary/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-primary text-xl font-bold">Acesso Exclusivo</CardTitle>
              <CardDescription>Esta é uma estratégia paga. Insira suas credenciais.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="seuemail@exemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="********" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                />
              </div>
            </CardContent>
            <CardFooter className="flex-col items-start">
              <Button className="w-full" onClick={handleLogin} disabled={isLoading}>
                {isLoading ? <Loader2 className="animate-spin" /> : 'ENTRAR'}
              </Button>
              <p className="text-xs text-muted-foreground mt-4">
                Se você já comprou, verifique seu e-mail para as credenciais.
              </p>
            </CardFooter>
          </Card>
        </div>
        <div className="md:col-span-3 text-left animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-4xl md:text-5xl font-bold text-primary !leading-tight font-headline mb-4">
            VOCÊ ESTÁ A UM PASSO DE DEMITIR A SORTE.
          </h1>
          <p className="text-lg text-foreground/90">
            O Agente IA Pro não é mais uma "dica". É um cérebro digital, um computador quântico treinado com as estratégias dos maiores jogadores do mundo. Chega de "achar". Comece a <strong className="text-primary">SABER</strong>.
          </p>
        </div>
      </section>
      
      {/* Problem Section */}
      <section className="text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
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

      {/* How it Works Section */}
      <section className="text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <h2 className="text-3xl font-bold text-primary mb-2">Simplicidade em 3 Passos</h2>
          <p className="text-muted-foreground mb-8">Deixe a complexidade para a IA. Para você, é fácil assim:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-accent/50 border-primary/20 p-6 text-center">
                  <div className="flex justify-center mb-4">
                      <div className="p-4 bg-primary/10 rounded-full">
                          <Bot className="w-12 h-12 text-primary" />
                      </div>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">1. Selecione</h3>
                  <p className="text-foreground/80">Escolha o jogo ou a estratégia que deseja usar.</p>
              </Card>
              <Card className="bg-accent/50 border-primary/20 p-6 text-center">
                   <div className="flex justify-center mb-4">
                      <div className="p-4 bg-primary/10 rounded-full">
                          <Signal className="w-12 h-12 text-primary" />
                      </div>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">2. Receba</h3>
                  <p className="text-foreground/80">O Agente IA Pro analisa e entrega o sinal de entrada exato.</p>
              </Card>
              <Card className="bg-accent/50 border-primary/20 p-6 text-center">
                   <div className="flex justify-center mb-4">
                      <div className="p-4 bg-primary/10 rounded-full">
                          <TrendingUp className="w-12 h-12 text-primary" />
                      </div>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">3. Lucre</h3>
                  <p className="text-foreground/80">Aplique a estratégia e veja os resultados acontecerem.</p>
              </Card>
          </div>
      </section>

      {/* Solution & Unique Mechanism Section */}
      <section className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
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
      <section className="animate-fade-in-up" style={{ animationDelay: '1.0s' }}>
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
      <section className="animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
           <h2 className="text-3xl font-bold text-center text-primary mb-6">Resultados de quem demitiu a sorte:</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <TestimonialCard name="Ricardo M." stars={5} text="Isso é outro nível. Parei de queimar dinheiro. Em uma semana recuperei o que perdi em meses." />
              <TestimonialCard name="Juliana F." stars={5} text="Eu não entendia nada de jogo, só perdia. Agora é diferente. A IA me mostra exatamente o que fazer. Simplesmente incrível." />
              <TestimonialCard name="Fernando P." stars={5} text="Funciona mesmo. É como ter um profissional do meu lado 24h. O suporte da IA é surreal, me sinto muito mais confiante pra jogar." />
           </div>
      </section>

      {/* CTA / Offer Section */}
      <section className="animate-fade-in-up" style={{ animationDelay: '1.4s' }}>
          <Card className="bg-gradient-to-br from-primary/10 via-background to-background border-2 border-primary/50 shadow-2xl shadow-primary/20">
              <CardHeader className="text-center pb-4">
                  <Gem className="w-12 h-12 text-primary mx-auto mb-4"/>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary">
                      SEU ACESSO AO<br />LUCRO INTELIGENTE
                  </h2>
                  <p className="text-lg text-foreground mt-2">O que você recebe com o seu acesso vitalício:</p>
              </CardHeader>
              <CardContent className="text-center px-4 pb-6">
                  <ul className="space-y-2 text-left max-w-md mx-auto mb-6">
                      <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary" /><span>Acesso vitalício ao Agente IA Pro.</span></li>
                      <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary" /><span>Estratégias para +10 jogos de cassino.</span></li>
                      <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary" /><span>Análise 24/7 em tempo real.</span></li>
                      <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary" /><span>Atualizações de novas estratégias sem custo.</span></li>
                  </ul>
                  <p className="text-muted-foreground line-through">De R$ 197</p>
                  <p className="text-5xl font-bold text-foreground">Por apenas R$ 97</p>
                  <p className="text-sm text-muted-foreground">(Pagamento único)</p>
                  
                  <Button size="lg" className="mt-6 w-full md:w-auto text-lg h-14 animate-pulse">
                      ADQUIRIR AGORA!
                  </Button>
              </CardContent>
          </Card>
      </section>

      {/* Guarantee Section */}
      <section className="animate-fade-in-up text-center" style={{ animationDelay: '1.6s' }}>
          <Card className="max-w-2xl mx-auto bg-accent/30 border-primary/20 p-8">
              <ShieldCheck className="w-16 h-16 text-primary mx-auto mb-4"/>
              <h3 className="text-2xl font-bold text-primary mb-2">Sua Satisfação ou Seu Dinheiro de Volta</h3>
              <p className="text-foreground/80">
                  Temos tanta confiança no Agente IA Pro que oferecemos uma garantia incondicional de 30 dias. Se você não obtiver os resultados que espera, nós devolvemos 100% do seu investimento. Sem perguntas, sem burocracia. O risco é inteiramente nosso.
              </p>
          </Card>
      </section>

    </div>
  );
}
