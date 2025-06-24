'use client';

import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export default function OnlineUsers() {
    const [userCount, setUserCount] = useState(11846);
    const [time, setTime] = useState(new Date(2 * 3600 * 1000 + 9 * 60 * 1000 + 19 * 1000));

    useEffect(() => {
        const userInterval = setInterval(() => {
            setUserCount(prevCount => {
                const change = Math.floor(Math.random() * 51) - 25; // Random change between -25 and 25
                return prevCount + change;
            });
        }, 3000); // Update every 3 seconds

        const timeInterval = setInterval(() => {
            setTime(prevTime => {
                const newTime = new Date(prevTime.getTime() - 1000);
                if (newTime.getTime() <= 0) {
                    clearInterval(timeInterval);
                    return new Date(0);
                }
                return newTime;
            });
        }, 1000); // Update every second

        return () => {
            clearInterval(userInterval);
            clearInterval(timeInterval);
        };
    }, []);

    const formatTime = (date: Date) => {
        const hours = String(date.getUTCHours()).padStart(2, '0');
        const minutes = String(date.getUTCMinutes()).padStart(2, '0');
        const seconds = String(date.getUTCSeconds()).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    };

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
                    <div className="clock">
                        <Clock className="w-3 h-3" />
                        <span className="clock-time">{formatTime(time)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
