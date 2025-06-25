'use client';

import { useState, useEffect } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Bot, Cpu, Target, Timer, Turtle, Zap } from 'lucide-react';
import WinRateProgressBar from './win-rate-progress-bar';
import Image from 'next/image';

const StrategyFormSchema = z.object({
  strategy: z.enum(['Horários de distribuição', 'Intercalação vencedora'], {
    required_error: 'Por favor, selecione uma estratégia.',
  }),
});

type StrategyFormValues = z.infer<typeof StrategyFormSchema>;

type InterleavingSignal = {
  normal: number;
  turbo: number;
  accuracy: string;
  validity: number;
};

const InfoRow = ({ icon: Icon, label, value }: { icon: React.ElementType, label: string, value: string }) => (
    <div className="flex items-center justify-between p-3 bg-accent/30 border border-primary/20 rounded-lg text-sm">
        <div className="flex items-center gap-3">
            <Icon className="w-5 h-5 text-primary" />
            <span className="text-foreground font-semibold">{label}</span>
        </div>
        <span className="text-primary font-bold text-base">{value}</span>
    </div>
);

export default function StrategySection() {
  const [isLoading, setIsLoading] = useState(false);
  const [processingText, setProcessingText] = useState('');
  
  const [isHorariosLoading, setIsHorariosLoading] = useState(false);
  const [horariosStatusText, setHorariosStatusText] = useState('Aguardando Análise...');
  const [generatedTimes, setGeneratedTimes] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [showHorariosResult, setShowHorariosResult] = useState(false);
  const [horariosCountdown, setHorariosCountdown] = useState(0);

  const [interleavingResult, setInterleavingResult] = useState<InterleavingSignal | null>(null);
  const [showInterleavingResult, setShowInterleavingResult] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [hasInterleavingBeenGenerated, setHasInterleavingBeenGenerated] = useState(false);

  useEffect(() => {
    if (countdown <= 0) return;
    const timer = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [countdown]);
  
  useEffect(() => {
    if (horariosCountdown <= 0) return;
    const timer = setTimeout(() => {
      setHorariosCountdown(horariosCountdown - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [horariosCountdown]);

  const form = useForm<StrategyFormValues>({
    resolver: zodResolver(StrategyFormSchema),
  });
  
  const runInterleavingAnalysis = () => {
      setIsLoading(true);
      setShowInterleavingResult(true);
      setInterleavingResult(null);
      
      const processingSteps = [
          'Analisando Sinais de Intercalação...',
          'Validando Frequências de Prêmios...',
          'Cruzando dados do servidor...',
          'Sinal Gerado com Sucesso!',
      ];

      let i = 0;
      setProcessingText(processingSteps[0]);
      
      const interval = setInterval(() => {
          i++;
          if (i < processingSteps.length) {
              setProcessingText(processingSteps[i]);
          } else {
              clearInterval(interval);
              setIsLoading(false);
              const newNormal = Math.floor(Math.random() * 10) + 3;
              const newTurbo = Math.floor(Math.random() * 8) + 3;
              const newAccuracy = (Math.random() * (99.5 - 92.0) + 92.0).toFixed(2);
              const newValidity = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
              setInterleavingResult({ normal: newNormal, turbo: newTurbo, accuracy: newAccuracy, validity: newValidity });
              setCountdown(60);
              if (!hasInterleavingBeenGenerated) {
                setHasInterleavingBeenGenerated(true);
              }
          }
      }, 2500);
  };


  async function onSubmit(data: StrategyFormValues) {
    if (data.strategy === 'Horários de distribuição') {
        setGeneratedTimes([]);
        setIsLoading(true);
        setIsHorariosLoading(true);
        setShowHorariosResult(true);
        setHorariosStatusText('Analisando padrões sistêmicos...');

        const processingSteps = [
            'Iniciando criptoanálise de dados...',
            'Calculando brechas de oportunidade...',
            'Oportunidades encontradas!',
            'Gerando horários...',
        ];
        
        let stepIndex = 0;
        
        const processNextStep = () => {
            if (stepIndex < processingSteps.length) {
                setHorariosStatusText(processingSteps[stepIndex]);
                stepIndex++;
                setTimeout(processNextStep, 2000);
            } else {
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

                const times = generateTimes(10, 28);
                setGeneratedTimes(times);
                
                const randomProgress = Math.random() * (100 - 93) + 93;
                setProgress(randomProgress);
                
                setHorariosStatusText('Estratégia Pronta!');
                setIsHorariosLoading(false);
                setIsLoading(false);
                setHorariosCountdown(300);
            }
        };
        setTimeout(processNextStep, 2000);

    } else if (data.strategy === 'Intercalação vencedora') {
        setInterleavingResult(null);
        runInterleavingAnalysis();
    }
  }
  
  const selectedStrategy = form.watch('strategy');
  const isHorariosOnCooldown = selectedStrategy === 'Horários de distribuição' && horariosCountdown > 0;

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const showIframe = (selectedStrategy === 'Horários de distribuição' && generatedTimes.length > 0 && !isHorariosLoading) || (selectedStrategy === 'Intercalação vencedora' && hasInterleavingBeenGenerated);

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
                    <Select 
                      onValueChange={(value) => {
                        field.onChange(value);
                        setShowHorariosResult(false);
                        setShowInterleavingResult(false);
                      }} 
                      defaultValue={field.value}
                    >
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
              <Button type="submit" disabled={isLoading || isHorariosLoading || isHorariosOnCooldown} className="w-full h-12 text-lg font-bold">
                {isHorariosOnCooldown ? (
                  `Aguarde ${formatTime(horariosCountdown)}`
                ) : (isLoading || isHorariosLoading) ? (
                  <><Cpu className="mr-2 h-5 w-5 animate-spin" /> Gerando...</>
                ) : (
                  <><Bot className="mr-2 h-5 w-5" /> Aplicar Estratégia</>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      
      {showHorariosResult && (
        <Card className="mt-6 bg-background/80 border-primary/30 font-code backdrop-blur-sm">
            <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                    <Cpu className={isHorariosLoading ? "animate-spin" : ""} /> {horariosStatusText}
                </CardTitle>
            </CardHeader>
            { (isHorariosLoading || generatedTimes.length > 0) &&
            <CardContent>
                { generatedTimes.length > 0 && !isHorariosLoading ? (
                    <div className="space-y-4 animate-fade-in-up">
                        <p className="text-muted-foreground font-body">Estes são os horários com maior probabilidade de prêmios altos nas próximas rodadas. Jogue entre 5 e 10 rodadas em cada um.</p>
                        <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                            {generatedTimes.map(time => (
                                <div key={time} className="bg-accent/50 border border-primary/30 text-primary font-bold rounded-md p-2 text-center text-lg">
                                    {time}
                                </div>
                            ))}
                        </div>

                        <div className="pt-4">
                            <p className="font-bold text-base mb-2 text-foreground font-body">Taxa de Assertividade da Estratégia:</p>
                            <WinRateProgressBar winRate={progress} />
                        </div>
                    </div>
                ) : (
                    <div className="flex items-center justify-center py-4">
                        <div className="w-3 h-3 bg-primary animate-ping rounded-full"></div>
                        <p className="ml-4 text-muted-foreground font-body">Aguarde, nossa IA está trabalhando...</p>
                    </div>
                )}
            </CardContent>
            }
        </Card>
      )}
      
      {showInterleavingResult && (
        <div className="mt-6 animate-fade-in-up">
            {isLoading && !interleavingResult ? (
                <Card className="bg-black border-primary/30 font-code">
                    <CardHeader>
                        <CardTitle className="text-primary flex items-center gap-2">
                            <Cpu /> Terminal de Análise
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2">
                            <p className="text-green-400">$ {processingText}</p>
                            {processingText.includes('Sucesso') && <div className="w-4 h-4 bg-primary animate-ping ml-2 inline-block"></div>}
                        </div>
                    </CardContent>
                </Card>
            ) : (
                interleavingResult && (
                    <Card className="bg-black/80 border-2 border-primary/50 font-code backdrop-blur-sm shadow-lg shadow-primary/20 max-w-sm mx-auto">
                        <CardHeader className="p-4 bg-primary/[0.07] items-center text-center">
                              <Image src="https://i.imgur.com/tmp57ua.png" alt="Fortune Tiger" width={80} height={80} className="mb-2" data-ai-hint="tiger mascot" />
                              <CardTitle className="text-xl font-bold text-primary tracking-wider">
                                  SOFTWARE DO TIGER
                              </CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 space-y-3">
                            <InfoRow icon={Turtle} label="Rodadas Normais:" value={`${interleavingResult.normal}x`} />
                            <InfoRow icon={Zap} label="Rodadas Turbo:" value={`${interleavingResult.turbo}x`} />
                            <InfoRow icon={Target} label="Assertividade:" value={`${interleavingResult.accuracy}%`} />
                            <InfoRow icon={Timer} label="Válido por:" value={`${interleavingResult.validity} MIN`} />
                        </CardContent>
                        <CardFooter className="flex-col px-4 pb-4">
                            <div className="w-full h-6 overflow-hidden relative mb-3">
                                <p className="absolute whitespace-nowrap text-xs text-primary/80 animate-marquee">
                                    *** SÓ FUNCIONA EM CONTAS NOVAS *** NOVA BRECHA DETECTADA *** FAÇA SUA ENTRADA IMEDIATAMENTE ***
                                </p>
                            </div>
                            <Button
                                onClick={runInterleavingAnalysis}
                                disabled={countdown > 0 || isLoading}
                                className="w-full h-11 text-base font-bold"
                            >
                                {countdown > 0 ? `AGUARDE (${countdown}s...)` : 'GERAR NOVO SINAL'}
                            </Button>
                        </CardFooter>
                    </Card>
                )
            )}
        </div>
      )}

      {showIframe && (
        <div className="mt-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="w-full mx-auto overflow-hidden rounded-lg border-2 border-primary/30">
            <iframe
              src="https://bora1.bet/register?code=GIPYCLEZEG"
              className="w-full border-0"
              style={{ height: '75vh' }}
              title="Plataforma Recomendada"
            ></iframe>
          </div>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            Atenção: A estratégia gerada é validada para a plataforma acima. Cadastre-se para garantir a assertividade.
          </p>
        </div>
      )}
    </section>
  );
}
