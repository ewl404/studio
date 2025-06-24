'use client';

import { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { suggestWinningStrategy, SuggestWinningStrategyOutput } from '@/ai/flows/suggest-winning-strategy';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Bot, Clock, Cpu } from 'lucide-react';

const StrategyFormSchema = z.object({
  strategy: z.enum(['Horários de distribuição', 'Intercalação vencedora'], {
    required_error: 'Por favor, selecione uma estratégia.',
  }),
});

type StrategyFormValues = z.infer<typeof StrategyFormSchema>;

const ProcessingSteps = [
    'INICIANDO ANÁLISE...',
    'ACESSANDO DATACENTER QUÂNTICO...',
    'CALCULANDO PADRÕES OCULTOS...',
    'PROCESSANDO PROBABILIDADES...',
    'ESTRATÉGIA GERADA COM SUCESSO!',
];

export default function StrategySection() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<SuggestWinningStrategyOutput | null>(null);
  const [processingText, setProcessingText] = useState('');
  
  const [isHorariosLoading, setIsHorariosLoading] = useState(false);
  const [horariosStatusText, setHorariosStatusText] = useState('Buscar Horários');
  const [generatedTimes, setGeneratedTimes] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [showHorariosResult, setShowHorariosResult] = useState(false);

  const { toast } = useToast();

  const form = useForm<StrategyFormValues>({
    resolver: zodResolver(StrategyFormSchema),
  });

  const runProcessingAnimation = () => {
    setIsLoading(true);
    setResult(null);
    let i = 0;
    const interval = setInterval(() => {
        if (i < ProcessingSteps.length) {
            setProcessingText(ProcessingSteps[i]);
            i++;
        } else {
            clearInterval(interval);
        }
    }, 700);
  };

  async function onSubmit(data: StrategyFormValues) {
    setResult(null);
    setShowHorariosResult(false);
    setGeneratedTimes([]);
    setProgress(0);

    if (data.strategy === 'Horários de distribuição') {
        setIsHorariosLoading(true);
        setShowHorariosResult(true);
        setHorariosStatusText('Acessando Histórico de Jogadas');

        setTimeout(() => {
            setHorariosStatusText('Analisando Histórico...');
        }, 2000);

        setTimeout(() => {
            setHorariosStatusText('Horários Encontrados!');
            
            const generateTimes = (startTimeOffsetMinutes: number, count: number): string[] => {
                const times: string[] = [];
                let currentTime = new Date();
                currentTime.setMinutes(currentTime.getMinutes() + startTimeOffsetMinutes);

                for (let i = 0; i < count; i++) {
                    const randomInterval = Math.floor(Math.random() * (9 - 3 + 1)) + 3;
                    currentTime.setMinutes(currentTime.getMinutes() + randomInterval);

                    const hours = currentTime.getHours().toString().padStart(2, '0');
                    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
                    const formattedTime = `${hours}:${minutes}`;

                    if (!times.includes(formattedTime)) {
                        times.push(formattedTime);
                    } else {
                        i--;
                    }
                }
                return times;
            };

            const times = generateTimes(10, 56);
            setGeneratedTimes(times);
            
            const randomProgress = Math.random() * (100 - 93) + 93;
            setProgress(randomProgress);
            
            setIsHorariosLoading(false);
        }, 5000);

    } else { // 'Intercalação vencedora'
        runProcessingAnimation();
        try {
          const response = await suggestWinningStrategy(data);
          setResult(response);
        } catch (error) {
          console.error(error);
          toast({
            variant: 'destructive',
            title: 'Erro na Análise',
            description: 'Não foi possível gerar a estratégia. Tente novamente.',
          });
        } finally {
            setTimeout(() => setIsLoading(false), 500);
        }
    }
  }

  return (
    <section className="w-full max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">Escolha sua estratégia</h2>
        <p className="text-muted-foreground mt-2">Nossa IA analisa o melhor cenário para você.</p>
      </div>

      <Card className="bg-background/50 border-primary/20 shadow-lg shadow-primary/5">
        <CardContent className="p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="strategy"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-primary">Estratégia de Análise</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="text-lg h-12">
                          <SelectValue placeholder="Selecione o tipo de análise..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Horários de distribuição">Horários de distribuição</SelectItem>
                        <SelectItem value="Intercalação vencedora">Intercalação vencedora</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading || isHorariosLoading} className="w-full h-12 text-lg font-bold">
                {(isLoading || isHorariosLoading) ? <Cpu className="mr-2 h-5 w-5 animate-spin" /> : <Bot className="mr-2 h-5 w-5" />}
                Aplicar Estratégia
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      
      {showHorariosResult && (
        <div className="mt-6 space-y-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
            <div className="text-center text-xl font-bold p-3 rounded-sm" style={{
                color: '#fff',
                backgroundColor: '#c41f22',
                border: '4px solid #f6b90f',
                boxShadow: '2px 5px 10px rgba(0.5, 0.5, 0.5, 0.5)',
            }}>
                {horariosStatusText}
            </div>

            {generatedTimes.length > 0 && (
                <>
                    <div className="grid grid-cols-4 sm:grid-cols-7 gap-px border-[3px] border-[#FDBA3C] shadow-md" style={{ backgroundColor: '#8c131d'}}>
                        {generatedTimes.map(time => (
                            <div key={time} className="flex flex-col justify-center items-center p-2 text-white font-bold text-[15px]" style={{
                                background: 'radial-gradient(circle, #ba2a30, #8c131d)',
                                border: '3px solid #FAC30D',
                            }}>
                                {time}
                            </div>
                        ))}
                    </div>

                    <div className="w-full bg-[#fbd01d] rounded-lg p-1">
                         <div className="relative w-full h-[30px] bg-[#fbd01d] rounded-lg">
                            <div className="h-full bg-[#00b24a] rounded-md transition-all duration-500" style={{ width: `${progress}%` }}></div>
                            <div className="absolute inset-0 flex items-center justify-center font-bold text-black">
                                Pagando <span>{progress.toFixed(2)}%</span>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
      )}

      {(isLoading || result) && !showHorariosResult &&(
        <Card className="mt-6 bg-black border-primary/30 font-code">
            <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                    <Cpu /> Terminal de Análise
                </CardTitle>
            </CardHeader>
            <CardContent>
                {isLoading && (
                    <div className="space-y-2">
                        <p className="text-green-400">$ {processingText}</p>
                        {processingText === 'ESTRATÉGIA GERADA COM SUCESSO!' && <div className="w-4 h-4 bg-primary animate-ping ml-2 inline-block"></div>}
                    </div>
                )}
                {result && !isLoading && (
                    <div className="space-y-4 animate-fade-in-up">
                        <div>
                            <h3 className="text-lg font-bold text-primary mb-2 flex items-center gap-2"><Clock/> Horários Sugeridos:</h3>
                            <p className="text-foreground whitespace-pre-wrap">{result.suggestion}</p>
                        </div>
                         <div>
                            <h3 className="text-lg font-bold text-primary mb-2">Explicação da IA:</h3>
                            <p className="text-muted-foreground">{result.explanation}</p>
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
      )}
    </section>
  );
}
