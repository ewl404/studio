'use client';

import { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Bot, Cpu, Lightbulb, PieChart, ExternalLink } from 'lucide-react';

const casinoOptions = [
  { name: 'Lotogreen', url: 'https://go.aff.lotogreen.com/e67fdkuy?utm_campaign=apphack' },
  { name: 'Bora1bet', url: 'https://bora1.bet/register?code=GIPYCLEZEG' },
  { name: 'Hanzbet', url: 'https://go.aff.hanz.bet.br/izyagc1z?utm_campaign=apphack' }
];

const aviatorAnalyzerSchema = z.object({
  blue: z.coerce.number().min(0, "Deve ser no mínimo 0").max(25, "Deve ser no máximo 25"),
  purple: z.coerce.number().min(0, "Deve ser no mínimo 0").max(25, "Deve ser no máximo 25"),
  pink: z.coerce.number().min(0, "Deve ser no mínimo 0").max(25, "Deve ser no máximo 25"),
}).refine(data => data.blue + data.purple + data.pink === 25, {
  message: "A soma das velas deve ser exatamente 25.",
  path: ["blue"], // Assign the error to a specific field for display
});

type AviatorAnalyzerFormValues = z.infer<typeof aviatorAnalyzerSchema>;

const AviatorAnalyzer = () => {
  const [selectedCasinoUrl, setSelectedCasinoUrl] = useState(casinoOptions[1].url);
  const [isLoading, setIsLoading] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<string[] | null>(null);

  const form = useForm<AviatorAnalyzerFormValues>({
    resolver: zodResolver(aviatorAnalyzerSchema),
    defaultValues: {
      blue: 0,
      purple: 0,
      pink: 0
    }
  });

  const onSubmit = (data: AviatorAnalyzerFormValues) => {
    setIsLoading(true);
    setAnalysisResult(null);

    // Simulate AI analysis delay
    setTimeout(() => {
      const results: string[] = [];

      // Blue candle logic
      if (data.blue > data.purple) {
        results.push("🔵 O gráfico não está bom para operar. Volte em 20 minutos para uma nova análise.");
      }

      // Pink candle logic
      if (data.pink >= 5) {
        results.push("🌹 O Aviator está ótimo para buscar velas rosas! Ajuste sua estratégia e gerenciamento para caçar multiplicadores altos.");
      } else if (data.pink >= 1 && data.pink <= 4) {
        results.push("🌹 Oportunidade moderada para velas rosas. Opere com cautela ao buscar multiplicadores altos.");
      }

      // Purple candle logic
      if (data.purple >= 11) {
        results.push("🟣 Excelente momento para buscar velas roxas! Foque em saídas entre 2x e 5x e ajuste sua estratégia.");
      } else if (data.purple <= 9) {
        results.push("🟣 O gráfico está pagando poucas velas roxas. Tenha cuidado ao buscar saídas médias.");
      }
      
      if (results.length === 0) {
        results.push("📊 O padrão atual é instável. Opere com máxima cautela e siga seu gerenciamento à risca.");
      }

      setAnalysisResult(results);
      setIsLoading(false);
    }, 2000);
  };

  const aiTips = [
    "Entre apos 1 vela roxa, se for vela acima de 5x melhor ainda.",
    "Não entre se o gráfico começar a vir muita sequencia de Azul.",
    "Siga o gerenciamento e use a mao de proteçao pra proteger seu capital."
  ];

  return (
    <div className="w-full flex flex-col items-center gap-6">
      <Card className="w-full max-w-lg bg-background/70 border-primary/20 shadow-lg shadow-primary/5">
        <CardHeader className="p-4 pb-2">
          <CardTitle className="text-primary text-xl font-bold">1. Selecione a Plataforma</CardTitle>
        </CardHeader>
        <CardContent className="p-4 pt-2">
          <Select onValueChange={setSelectedCasinoUrl} defaultValue={selectedCasinoUrl}>
            <SelectTrigger className="w-full text-lg h-12">
              <SelectValue placeholder="Selecione a casa de apostas..." />
            </SelectTrigger>
            <SelectContent>
              {casinoOptions.map(casino => (
                <SelectItem key={casino.name} value={casino.url}>{casino.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      <Card className="w-full max-w-lg bg-background/70 border-primary/20 shadow-lg shadow-primary/5">
        <CardHeader>
          <CardTitle className="text-primary text-xl font-bold">Análise de Velas</CardTitle>
          <CardDescription>Para receber a análise, observe as últimas 25 velas do gráfico e insira as informações nos campos abaixo.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="pink"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-base">🌹 Velas Rosas</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Ex: 5" {...field} className="text-center h-12 text-lg" />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="purple"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-base">🟣 Velas Roxas</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Ex: 10" {...field} className="text-center h-12 text-lg" />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="blue"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-base">🔵 Velas Azuis</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Ex: 10" {...field} className="text-center h-12 text-lg" />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <FormMessage>{form.formState.errors.blue?.message}</FormMessage>
              <Button type="submit" disabled={isLoading} className="w-full h-12 text-lg">
                {isLoading ? <><Cpu className="mr-2 h-5 w-5 animate-spin" /> Analisando Padrão...</> : <><PieChart className="mr-2 h-5 w-5" /> Gerar Análise</>}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      
      {(isLoading || analysisResult) && (
        <Card className="w-full max-w-lg animate-fade-in-up bg-background/80 border-primary/30">
          <CardHeader>
            <CardTitle className="text-primary flex items-center gap-2">
                <Bot /> Diagnóstico da IA
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {isLoading ? (
               <div className="flex items-center justify-center py-8">
                    <Cpu className="w-12 h-12 text-primary animate-spin" />
                    <p className="ml-4 text-muted-foreground">Processando dados do gráfico...</p>
                </div>
            ) : (
              analysisResult && (
                <div className="space-y-3">
                  {analysisResult.map((result, index) => (
                    <p key={index} className="text-foreground p-3 bg-accent/50 rounded-md border border-primary/20">
                      {result}
                    </p>
                  ))}
                </div>
              )
            )}
            <hr className="border-primary/20 my-4" />
            <div className="space-y-3">
                <h4 className="font-bold text-primary flex items-center gap-2"><Lightbulb /> Dicas da IA para Operação:</h4>
                 <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {aiTips.map((tip, index) => (
                      <li key={index}>{tip}</li>
                    ))}
                </ul>
            </div>
          </CardContent>
        </Card>
      )}

      {selectedCasinoUrl === casinoOptions[0].url && (
        <Card className="w-full max-w-4xl mx-auto my-4 text-center border-primary/50 bg-accent/30 animate-fade-in-up">
            <CardHeader>
                <CardTitle className="text-primary">Aviso Importante</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
                <p className="mb-4 text-foreground/80">
                    A Lotogreen não aceita conexão direta. Para lucrar com a estratégia, você terá que abrir a plataforma em uma nova aba.
                </p>
                <Button asChild size="lg" className="animate-pulse">
                    <a href={casinoOptions[0].url} target="_blank" rel="noopener noreferrer">
                        Abrir Lotogreen em Nova Aba
                        <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                </Button>
            </CardContent>
        </Card>
      )}

      <div className="w-full max-w-4xl mx-auto animate-fade-in-up mt-4">
        <div className="w-full mx-auto overflow-hidden rounded-lg border-2 border-primary/30">
          <iframe
            src={selectedCasinoUrl}
            className="w-full border-0"
            style={{ height: '75vh' }}
            title="Plataforma Recomendada"
          ></iframe>
        </div>
        <p className="mt-4 text-center text-sm text-muted-foreground">
          Atenção: A estratégia gerada é validada para a plataforma que você selecionou acima. Cadastre-se para garantir a assertividade.
        </p>
      </div>
    </div>
  );
};

export default AviatorAnalyzer;
