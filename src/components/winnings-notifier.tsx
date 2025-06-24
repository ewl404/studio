'use client';

import { useState, useEffect } from 'react';

const names = ["Fernanda B.", "José A.", "Guilherme O.", "Maria C.", "João D.", "Ana E.", "MC Ryan SP", "MC Gebê.", "Juliana G.", "Marcos H.", "Carla I.", "Rafael J.", "Deolane B.", "Lucas L.", "Mariana M.", "Rodrigo N.", "Larissa O.", "André P.", "Laura Q.", "Bruno R.", "Camila S.", "Diego T.", "Carlinhos M.", "Isabela U.", "Felipe V.", "Vanessa W.", "Marcelo X.", "Carolina Y.", "Alex Z.", "Débora AA.", "Ricardo AB.", "Tatiane AC."];

interface Notification {
    key: number;
    name: string;
    amount: number;
}

export default function WinningsNotifier() {
    const [notification, setNotification] = useState<Notification | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const triggerNotification = () => {
            const randomName = names[Math.floor(Math.random() * names.length)];
            const randomAmount = Math.floor(Math.random() * 1501) + 200;
            
            setNotification({
                key: Date.now(),
                name: randomName,
                amount: randomAmount,
            });
            setIsVisible(true);

            // Hide notification after 5 seconds
            setTimeout(() => {
                setIsVisible(false);
            }, 5000);
        };

        const initialTimeout = setTimeout(triggerNotification, 4000);
        const interval = setInterval(triggerNotification, 15000);

        return () => {
            clearTimeout(initialTimeout);
            clearInterval(interval);
        };
    }, []);

    if (!notification) {
        return null;
    }

    return (
        <div className={`winnings-notification ${isVisible ? 'show' : 'hide'}`}>
             <div className="pulse-indicator-small">
                <div className="pulse-dot-small">
                    <span className="pulse-ring-small"></span>
                    <span className="pulse-core-small"></span>
                </div>
            </div>
            <div className="notification-text">
                <span className="font-bold text-primary">{notification.name}</span>
                <span>
                    acabou de sacar&nbsp;
                    <span className="font-bold text-foreground">
                        {notification.amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                    </span>
                </span>
            </div>
        </div>
    );
}
