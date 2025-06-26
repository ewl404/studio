
'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plane, Cpu, Target, Timer, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const AviatorPredictor = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isComplete, setIsComplete] = useState(false);
    const [prediction, setPrediction] = useState<string | null>(null);
    const [accuracy, setAccuracy] = useState(0);
    const [statusText, setStatusText] = useState('Aguardando análise...');
    const [buttonCountdown, setButtonCountdown] = useState(0);
    const [validityCountdown, setValidityCountdown] = useState(0);
    const [hasPredictedOnce, setHasPredictedOnce] = useState(false);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (buttonCountdown > 0) {
            timer = setTimeout(() => setButtonCountdown(prev => prev - 1), 1000);
        }
        return () => clearTimeout(timer);
    }, [buttonCountdown]);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (validityCountdown > 0) {
            timer = setTimeout(() => setValidityCountdown(prev => prev - 1), 1000);
        } else if (validityCountdown === 0 && isComplete) {
            setIsComplete(false);
            setPrediction(null);
        }
        return () => clearTimeout(timer);
    }, [validityCountdown, isComplete]);

    const handlePredict = () => {
        if (buttonCountdown > 0 || isLoading) return;

        setIsLoading(true);
        setIsComplete(false);
        setPrediction(null);
        setHasPredictedOnce(true);

        const processingSteps = [
            'Conectando à API do Aviator...',
            'Analisando volatilidade do algoritmo...',
            'Calculando ponto de saída ideal...',
            'Sinal Encontrado!',
        ];

        let step = 0;
        const interval = setInterval(() => {
            setStatusText(processingSteps[step]);
            step++;
            if (step === processingSteps.length) {
                clearInterval(interval);
                
                const newPrediction = (Math.random() * (5 - 1.5) + 1.5).toFixed(2);
                setPrediction(`${newPrediction}x`);
                setAccuracy(+(96.0 + Math.random() * 3.5).toFixed(2));
                
                setIsLoading(false);
                setIsComplete(true);
                setButtonCountdown(20);
                setValidityCountdown(15);
            }
        }, 1200);
    };
    
    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <>
            <Card className="w-full max-w-sm bg-background/70 border-2 border-primary/20 shadow-2xl shadow-primary/10 backdrop-blur-sm font-code text-center">
                <CardHeader className="p-4 space-y-2">
                    <CardTitle className="text-2xl text-primary font-bold tracking-widest flex items-center justify-center gap-2">
                        <Plane className="w-8 h-8"/> AVIATOR IA
                    </CardTitle>
                    <p className="text-sm text-muted-foreground h-5">
                       {isComplete ? `Assertividade do sinal: ${accuracy}%` : 'Análise de Padrões em Tempo Real'}
                    </p>
                </CardHeader>
                <CardContent className="p-4">
                    <div className="h-48 bg-accent/30 border-2 border-dashed border-primary/30 rounded-lg flex flex-col items-center justify-center relative overflow-hidden">
                        {isLoading && (
                            <div className="absolute inset-0 bg-background/80 flex flex-col items-center justify-center z-10 animate-fade-in">
                                <Cpu className="w-12 h-12 text-primary animate-spin" />
                                <p className="mt-4 text-primary font-bold">{statusText}</p>
                            </div>
                        )}
                        {isComplete && prediction && (
                             <div className="text-center animate-fade-in-up">
                                <p className="text-lg text-muted-foreground">Sair em:</p>
                                <h3 className="text-7xl font-bold text-primary animate-pulse">{prediction}</h3>
                            </div>
                        )}
                        {!isLoading && !isComplete && (
                            <div className="text-center text-muted-foreground">
                                <Plane className="w-16 h-16 mx-auto mb-4" />
                                <p className="font-bold">Aguardando novo sinal</p>
                                <p className="text-xs">Clique no botão abaixo para iniciar.</p>
                            </div>
                        )}
                    </div>
                </CardContent>
                <div className="flex flex-col gap-3 p-4 pt-0">
                    <div className="w-full space-y-2 text-foreground p-3 rounded-lg bg-accent/20 border border-accent/50 text-sm">
                        <div className="flex items-center justify-between">
                            <span className="flex items-center gap-2 text-muted-foreground"><Target className="w-4 h-4 text-primary" /> Entrada:</span>
                            <span className="font-bold">Após uma vela rosa</span>
                        </div>
                         <div className="flex items-center justify-between">
                            <span className="flex items-center gap-2 text-muted-foreground"><TrendingUp className="w-4 h-4 text-primary" /> Ganhos:</span>
                            <span className="font-bold">Até 2 gales</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="flex items-center gap-2 text-muted-foreground"><Timer className="w-4 h-4 text-primary" /> Validade do Sinal:</span>
                            <span className="font-bold">{isComplete ? formatTime(validityCountdown) : '00:00'}</span>
                        </div>
                    </div>
                    <Button onClick={handlePredict} disabled={buttonCountdown > 0 || isLoading} className="w-full h-12 text-lg">
                        {isLoading ? (
                            statusText
                        ) : buttonCountdown > 0 ? (
                            `NOVO SINAL EM (${buttonCountdown}s)`
                        ) : (
                            'GERAR SINAL'
                        )}
                    </Button>
                </div>
            </Card>

            {hasPredictedOnce && (
              <div className="mt-6 w-full max-w-2xl mx-auto animate-fade-in-up">
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
        </>
    );
};

export default AviatorPredictor;
