'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Cpu, Target, Timer, Star, Bomb } from 'lucide-react';
import { cn } from '@/lib/utils';

const TOTAL_CELLS = 25;
const SAFE_CELLS_COUNT = 4;

type CellState = 'hidden' | 'safe';

const MinesHacker = () => {
    const [grid, setGrid] = useState<CellState[]>(Array(TOTAL_CELLS).fill('hidden'));
    const [isLoading, setIsLoading] = useState(false);
    const [isHacked, setIsHacked] = useState(false);
    const [statusText, setStatusText] = useState('Aguardando análise...');
    const [buttonCountdown, setButtonCountdown] = useState(0);
    const [validityCountdown, setValidityCountdown] = useState(0);
    const [accuracy, setAccuracy] = useState(0);
    const [hasHackedOnce, setHasHackedOnce] = useState(false);

    useEffect(() => {
        if (buttonCountdown > 0) {
            const timer = setTimeout(() => setButtonCountdown(prev => prev - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [buttonCountdown]);

    useEffect(() => {
        if (isHacked && validityCountdown > 0) {
            const timer = setTimeout(() => setValidityCountdown(prev => prev - 1), 1000);
            return () => clearTimeout(timer);
        } else if (validityCountdown === 0 && isHacked) {
            setIsHacked(false);
            setGrid(Array(TOTAL_CELLS).fill('hidden'));
        }
    }, [isHacked, validityCountdown]);

    const handleHack = () => {
        if (buttonCountdown > 0 || isLoading) return;

        setIsLoading(true);
        setIsHacked(false);
        setGrid(Array(TOTAL_CELLS).fill('hidden'));
        
        const processingSteps = [
            'Iniciando sistema...',
            'Analisando padrões do servidor...',
            'Buscando vulnerabilidades...',
            'Hackeado com sucesso!',
        ];

        let step = 0;
        const interval = setInterval(() => {
            setStatusText(processingSteps[step]);
            step++;
            if (step === processingSteps.length) {
                clearInterval(interval);
                
                const newGrid = Array(TOTAL_CELLS).fill('hidden') as CellState[];
                const safeIndexes = new Set<number>();
                while (safeIndexes.size < SAFE_CELLS_COUNT) {
                    safeIndexes.add(Math.floor(Math.random() * TOTAL_CELLS));
                }
                safeIndexes.forEach(index => {
                    newGrid[index] = 'safe';
                });

                setGrid(newGrid);
                setAccuracy(+(97.0 + Math.random() * 2.5).toFixed(2));
                setIsLoading(false);
                setIsHacked(true);
                setButtonCountdown(15);
                setValidityCountdown(120);
                setHasHackedOnce(true);
            }
        }, 1500);
    };

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <>
            <Card className="w-full max-w-[285px] bg-background/70 border-2 border-primary/20 shadow-2xl shadow-primary/10 backdrop-blur-sm font-code">
                <CardHeader className="items-center text-center p-4 space-y-1">
                    <CardTitle className="text-2xl text-primary font-bold tracking-widest">MINES PRO</CardTitle>
                    {isHacked ? (
                        <p className="text-foreground animate-fade-in-up h-5 text-sm">
                            Probabilidade de acerto: <span className="font-bold text-primary">{accuracy}%</span>
                        </p>
                    ) : (
                        <p className="h-5">&nbsp;</p> 
                    )}
                </CardHeader>
                <CardContent className="px-3 pt-3 pb-[5px]">
                    <div className="relative aspect-[5/6]">
                        {isLoading && (
                            <div className="absolute inset-0 bg-background/80 flex flex-col items-center justify-center z-10 animate-fade-in rounded-md">
                                <Cpu className="w-12 h-12 text-primary animate-spin" />
                                <p className="mt-4 text-primary">{statusText}</p>
                            </div>
                        )}
                        <div className={cn("grid grid-cols-5 gap-1.5 transition-opacity duration-500", (isLoading) ? 'opacity-0' : 'opacity-100')}>
                            {grid.map((cell, index) => (
                                <div
                                    key={index}
                                    className={cn(
                                        "aspect-square rounded-md flex items-center justify-center border",
                                        isHacked && cell === 'safe' 
                                            ? 'bg-primary/20 border-primary shadow-lg shadow-primary/30 animate-pulse' 
                                            : 'bg-accent/30 border-accent/50'
                                    )}
                                >
                                    {isHacked && cell === 'safe' && (
                                        <Star className="w-6 h-6 text-primary fill-primary" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </CardContent>
                <div className="flex flex-col gap-2 p-3 pt-0">
                     <div className="w-full space-y-1.5 text-foreground p-3 rounded-lg bg-accent/20 border border-accent/50">
                        <div className="flex items-center justify-between text-xs">
                            <span className="flex items-center gap-2 text-muted-foreground"><Bomb className="w-4 h-4 text-primary" /> Quantidade de minas:</span>
                            <span className="font-bold">3</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                            <span className="flex items-center gap-2 text-muted-foreground"><Target className="w-4 h-4 text-primary" /> Número de tentativas:</span>
                            <span className="font-bold">1</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                            <span className="flex items-center gap-2 text-muted-foreground"><Timer className="w-4 h-4 text-primary" /> Análise válida por:</span>
                            <span className="font-bold">{isHacked ? formatTime(validityCountdown) : '00:00'}</span>
                        </div>
                    </div>

                    <Button onClick={handleHack} disabled={buttonCountdown > 0 || isLoading} className="w-full h-11 text-base font-bold">
                        {isLoading ? (
                            statusText
                        ) : buttonCountdown > 0 ? (
                            `AGUARDE (${buttonCountdown}s)`
                        ) : (
                            'HACKEAR SINAL'
                        )}
                    </Button>
                </div>
            </Card>
            {hasHackedOnce && (
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

export default MinesHacker;
