
import Header from '@/components/header';
import MatrixBackground from '@/components/matrix-background';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { BrainCircuit, Cpu, Gem, Dices, BarChart, XCircle } from 'lucide-react';

export default function ChatPage() {
  return (
    <>
      <MatrixBackground />
      <div className="flex flex-col min-h-screen relative z-10 bg-background/80">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-center md:items-start animate-fade-in-up">
              <Card className="w-full max-w-md bg-background/70 border-primary/20 shadow-lg shadow-primary/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-primary text-2xl font-bold">Acessar Agente IA Pro</CardTitle>
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
                    Se você já comprou, verifique seu e-mail para as credenciais de acesso.
                  </p>
                </CardFooter>
              </Card>
            </div>

            <div className="text-left animate-fade-in-down" style={{ animationDelay: '0.2s' }}>
              <h1 className="text-4xl md:text-5xl font-bold text-primary !leading-tight font-headline mb-4">
                VOCÊ ESTÁ A UM PASSO DE DEMITIR A SORTE.
              </h1>
              <div className="space-y-4 text-lg text-foreground/90">
                <p className="text-destructive font-semibold flex items-center gap-2"><XCircle className="w-5 h-5" /> "Eu não tenho sorte."</p>
                <p className="text-destructive font-semibold flex items-center gap-2"><XCircle className="w-5 h-5" /> "Eu não sei a hora de parar."</p>
                <p className="text-destructive font-semibold flex items-center gap-2"><XCircle className="w-5 h-5" /> "Já perdi muito dinheiro."</p>
                
                <p className="font-bold text-primary pt-4">
                  Essas frases morrem hoje.
                </p>
                <p>
                  O Agente IA Pro não é mais uma "dica". É um cérebro digital, um computador quântico treinado com as estratégias dos maiores jogadores do mundo. Pense nos barões da roleta de Las Vegas, nos mestres do Blackjack que foram banidos de casinos, nos gênios do poker como Phil Ivey. Nós dissecamos cada jogada, cada aposta, cada padrão.
                </p>
                <p>
                  Nossa IA processou tudo isso e se tornou um estrategista profissional que vive dentro da sua conta, operando para você.
                </p>
                <h2 className="text-2xl font-bold text-primary pt-4">É como ter o Cristiano Ronaldo jogando no seu time.</h2>
                <p>
                  Imagine pegar a habilidade, a inteligência e a frieza de um atleta de elite e colocar em um código. O Agente IA Pro analisa jogos como <strong className="text-primary">Roleta, Bac Bo, Aviator, Football Studio, Dragon Tiger, Blackjack e todos os jogos da PG SOFT</strong> em tempo real, entregando as melhores entradas com uma precisão matemática.
                </p>
                <p>
                  Chega de "achar". Comece a <strong className="text-primary">SABER</strong>. Adquira o acesso e coloque um profissional para trabalhar por você.
                </p>
              </div>
               <Button size="lg" className="mt-8 w-full md:w-auto font-bold text-xl animate-pulse">
                QUERO LUCRAR COM INTELIGÊNCIA AGORA
              </Button>
            </div>
          </div>
        </main>
        <footer className="text-center p-4 text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Matrix Strategy AI. Todos os direitos reservados.</p>
        </footer>
      </div>
    </>
  );
}
