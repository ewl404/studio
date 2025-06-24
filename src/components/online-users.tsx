'use client';

import { useState, useEffect } from 'react';

export default function OnlineUsers() {
    const [userCount, setUserCount] = useState(11846);

    useEffect(() => {
        const userInterval = setInterval(() => {
            setUserCount(prevCount => {
                const change = Math.floor(Math.random() * 51) - 25; // Random change between -25 and 25
                return prevCount + change;
            });
        }, 3000); // Update every 3 seconds

        return () => {
            clearInterval(userInterval);
        };
    }, []);

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
                    <span className="user-count">{userCount.toLocaleString('pt-BR')}</span>
                    <span className="user-label">Usuários online agora!</span>
                </div>
            </div>
        </div>
    );
}
