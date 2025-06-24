'use client';

import { useState, useEffect } from 'react';

interface OnlineUsersProps {
    min?: number;
    max?: number;
}

export default function OnlineUsers({ min = 9000, max = 17000 }: OnlineUsersProps) {
    const [userCount, setUserCount] = useState<number | null>(null);

    useEffect(() => {
        // Generate a random starting count between min and max on the client-side
        const initialCount = Math.floor(Math.random() * (max - min + 1)) + min;
        setUserCount(initialCount);

        const userInterval = setInterval(() => {
            setUserCount(prevCount => {
                const currentCount = prevCount ?? initialCount; // Fallback to initial if prev is somehow null
                const change = Math.floor(Math.random() * 51) - 25; // Random change between -25 and 25
                return currentCount + change;
            });
        }, 3000); // Update every 3 seconds

        return () => {
            clearInterval(userInterval);
        };
    }, [min, max]);

    return (
        <div className="online-users-container">
            <div className="online-users-content">
                <div className="pulse-indicator">
                    <div className="pulse-dot">
                        <span className="pulse-ring"></span>
                        <span className="pulse-core"></span>
                    </div>
                </div>
                <div className="user-text">
                    <span className="user-count">
                        {userCount !== null ? userCount.toLocaleString('pt-BR') : '...'}
                    </span>
                    <span className="user-label">Usuários online agora!</span>
                </div>
            </div>
        </div>
    );
}
