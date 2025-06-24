'use client';

import { useState, useEffect } from 'react';

interface WithdrawnTodayProps {
    initialAmount: number;
}

export default function WithdrawnToday({ initialAmount }: WithdrawnTodayProps) {
    const [amount, setAmount] = useState(initialAmount);
    const [isPulsing, setIsPulsing] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setAmount(prevAmount => prevAmount + (Math.random() * 250 + 50));
            setIsPulsing(true);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (isPulsing) {
            const timer = setTimeout(() => {
                setIsPulsing(false);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [isPulsing]);

    return (
        <span className={`font-bold text-primary ${isPulsing ? 'animate-green-pulse-once' : ''}`}>
            {amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </span>
    );
}
