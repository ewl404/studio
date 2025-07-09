'use client';

import { useState } from 'react';
import MinesHacker from '@/components/mines-hacker';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const MinesClientPage = () => {
    const [isHighRisk, setIsHighRisk] = useState(false);

    return (
        <div className="w-full flex flex-col items-center gap-6">
            <Card className="w-full max-w-sm bg-background/70 border-primary/20 shadow-lg shadow-primary/5">
                <CardHeader className="p-4 pb-2">
                    <CardTitle className="text-primary text-xl font-bold">3. Selecione o Risco</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-2 flex items-center justify-between">
                    <Label htmlFor="risk-mode" className="text-base font-bold">
                        <span>
                            {isHighRisk ? <>Risco <span className="text-destructive">Alto</span></> : 'Risco Baixo'}
                        </span>
                    </Label>
                    <Switch
                        id="risk-mode"
                        checked={isHighRisk}
                        onCheckedChange={setIsHighRisk}
                        aria-label="Mudar nível de risco"
                    />
                </CardContent>
            </Card>
            <MinesHacker showBombs={isHighRisk} />
        </div>
    );
};

export default MinesClientPage;
