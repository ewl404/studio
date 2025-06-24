'use client';

import { useState, useEffect } from 'react';

export default function OnlineUsers() {
    const [userCount, setUserCount] = useState<number | null>(null);

    useEffect(() => {
        // Generate a random starting count between 9,000 and 17,000 on the client-side
        const initialCount = Math.floor(Math.random() * (17000 - 9000 + 1)) + 9000;
        setUserCount(initialCount);

        const userInterval = setInterval(() => {
            setUserCount(prevCount => {
                const currentCount = prevCount || initialCount; // Fallback to initial if prev is somehow null
                const change = Math.floor(Math.random() * 51) - 25; // Random change between -25 and 25
                return currentCount + change;
            });
        }, 3000); // Update every 3 seconds

        return () => {
            clearInterval(userInterval);
        };
    }, []); // Empty dependency array ensures this runs once on mount

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
