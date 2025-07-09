'use client';

import { useState } from 'react';
import MinesHacker from '@/components/mines-hacker';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';


const casinoOptions = [
  { name: 'Lotogreen', url: 'https://go.aff.lotogreen.com/e67fdkuy?utm_campaign=apphack' },
  { name: 'Bora1bet', url: 'https://bora1.bet/register?code=GIPYCLEZEG' },
  { name: 'Hanzbet', url: 'https://go.aff.hanz.bet.br/izyagc1z?utm_campaign=apphack' },
  { name: '777Rico', url: 'https://madetoinvest.pro/777rico-apphack' },
  { name: '1win', url: 'https://madetoinvest.pro/1win-app' },
];

const MinesClientPage = () => {
    const [isHighRisk, setIsHighRisk] = useState(false);
    const [selectedCasinoUrl, setSelectedCasinoUrl] = useState(casinoOptions[1].url);

    return (
        <div className="w-full flex flex-col items-center gap-6">
             <Card className="w-full max-w-sm bg-background/70 border-primary/20 shadow-lg shadow-primary/5">
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

            <Card className="w-full max-w-sm bg-background/70 border-primary/20 shadow-lg shadow-primary/5">
                <CardHeader className="p-4 pb-2">
                    <CardTitle className="text-primary text-xl font-bold">2. Selecione o Risco</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-2 flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                        <Label htmlFor="risk-mode" className="text-base font-bold">
                             <span>
                                Risco {isHighRisk ? <span className="text-destructive">Alto</span> : <span className="text-primary">Baixo</span>}
                            </span>
                        </Label>
                        <Switch
                            id="risk-mode"
                            checked={isHighRisk}
                            onCheckedChange={setIsHighRisk}
                            aria-label="Mudar nível de risco"
                        />
                    </div>
                     {isHighRisk && (
                        <p className="text-xs text-destructive animate-fade-in-up">
                            Atenção: O uso do modo de alto risco não é recomendado.
                        </p>
                    )}
                </CardContent>
            </Card>
            
            <MinesHacker showBombs={isHighRisk} selectedCasinoUrl={selectedCasinoUrl} />
        </div>
    );
};

export default MinesClientPage;
