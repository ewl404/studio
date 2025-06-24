'use client';

import { useEffect, useState, useRef } from 'react';

interface Bet {
    game: string;
    player: string;
    bet: string;
    multiplier: string;
    result: string;
    time: string;
    isNew: boolean;
}

const gameIcons: { [key: string]: string } = {
    "fortune_tiger": "https://i.imgur.com/tmp57ua.png",
    "sweet_bonanza": "https://placehold.co/40x40.png",
    "buffalo_king": "https://placehold.co/40x40.png",
    "mines": "https://placehold.co/40x40.png",
};

const gameIconHints: { [key: string]: string } = {
    "fortune_tiger": "tiger mascot",
    "sweet_bonanza": "candy sweet",
    "buffalo_king": "buffalo animal",
    "mines": "gem diamond",
};

const sampleBets = [
    { game: "fortune_tiger", player: "Lucas M****", bet: "4.00", multiplier: "21x", result: "84.00" },
    { game: "sweet_bonanza", player: "Mila*****", bet: "0.80", multiplier: "20x", result: "16.00" },
    { game: "buffalo_king", player: "Juli*****", bet: "3.20", multiplier: "13x", result: "41.60" },
    { game: "sweet_bonanza", player: "Cloves****", bet: "3.00", multiplier: "50x", result: "150.00" },
    { game: "fortune_tiger", player: "Manu*****", bet: "25.00", multiplier: "7x", result: "175.00" },
    { game: "buffalo_king", player: "Mila*****", bet: "16.00", multiplier: "13x", result: "208.00" },
    { game: "sweet_bonanza", player: "Andr****", bet: "16.00", multiplier: "13x", result: "208.00" },
    { game: "mines", player: "Zeca*****", bet: "4.00", multiplier: "22x", result: "88.00" },
    { game: "sweet_bonanza", player: "Mila*****", bet: "3.20", multiplier: "21x", result: "67.20" },
    { game: "fortune_tiger", player: "Ana S****", bet: "5.00", multiplier: "15x", result: "75.00" },
    { game: "mines", player: "Pedro C****", bet: "10.00", multiplier: "10x", result: "100.00" },
    { game: "buffalo_king", player: "Julia M****", bet: "1.50", multiplier: "30x", result: "45.00" },
    { game: "sweet_bonanza", player: "Carlos P****", bet: "2.00", multiplier: "25x", result: "50.00" },
    { game: "fortune_tiger", player: "Mariana R****", bet: "7.00", multiplier: "18x", result: "126.00" },
    { game: "mines", player: "Leo F****", bet: "6.00", multiplier: "28x", result: "168.00" },
    { game: "buffalo_king", player: "Paty L****", bet: "12.00", multiplier: "11x", result: "132.00" },
    { game: "sweet_bonanza", player: "Bruno D****", bet: "0.50", multiplier: "40x", result: "20.00" },
    { game: "fortune_tiger", player: "Cris V****", bet: "8.00", multiplier: "23x", result: "184.00" },
    { game: "mines", player: "Gabi H****", bet: "3.00", multiplier: "35x", result: "105.00" },
    { game: "buffalo_king", player: "Rafa J****", bet: "4.00", multiplier: "16x", result: "64.00" },
    { game: "sweet_bonanza", player: "Vini K****", bet: "1.00", multiplier: "55x", result: "55.00" },
    { game: "fortune_tiger", player: "Laura W****", bet: "9.00", multiplier: "19x", result: "171.00" },
    { game: "mines", player: "Diego E****", bet: "5.00", multiplier: "26x", result: "130.00" },
    { game: "buffalo_king", player: "Alice G****", bet: "15.00", multiplier: "9x", result: "135.00" },
    { game: "sweet_bonanza", player: "João B****", bet: "0.70", multiplier: "33x", result: "23.10" },
    { game: "fortune_tiger", player: "Sandra M****", bet: "6.00", multiplier: "20x", result: "120.00" },
    { game: "mines", player: "Roberto Q****", bet: "2.50", multiplier: "42x", result: "105.00" },
    { game: "buffalo_king", player: "Camila X****", bet: "11.00", multiplier: "14x", result: "154.00" },
    { game: "sweet_bonanza", player: "Felipe Z****", bet: "1.20", multiplier: "29x", result: "34.80" },
    { game: "fortune_tiger", player: "Renata A****", bet: "10.00", multiplier: "17x", result: "170.00" },
    { game: "sweet_bonanza", player: "Testando", bet: "0.40", multiplier: "5x", result: "2.00" },
];

const BetItemComponent = ({ bet }: { bet: Bet }) => {
    const gameIconSrc = gameIcons[bet.game] || "https://placehold.co/40x40.png";
    const gameHint = gameIconHints[bet.game] || "";
    const formattedBet = parseFloat(bet.bet).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const formattedResult = parseFloat(bet.result).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    return (
        <div className={`bet-item ${bet.isNew ? 'new-bet' : ''}`}>
            <img className="game-icon" src={gameIconSrc} alt={`${bet.game.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} Icon`} width="40" height="40" data-ai-hint={gameHint} />
            <div className="bet-details">
                <div className="bet-info">
                    <span className="player-name">{bet.player}</span>
                    <span className="bet-amount">Apostou R$ {formattedBet}</span>
                </div>
                <div className="multiplier-info">
                    <span className="multiplier-text">Sacou:</span>
                    <span className="result-amount">R$ {formattedResult}</span>
                </div>
            </div>
            <span className="time-ago">
                <svg className="time-icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.87 14.13L11 11.41V7h2v5.09l1.41 1.41-1.41 1.41z"></path>
                </svg>
                {bet.time}
            </span>
        </div>
    );
};

export default function CasinoBets() {
    const [bets, setBets] = useState<Bet[]>([]);
    const betIndexRef = useRef(0);
    const betListContainerRef = useRef<HTMLDivElement>(null);

    const getTime = () => {
        const now = new Date();
        const options: Intl.DateTimeFormatOptions = {
            timeZone: 'America/Sao_Paulo',
            hour: '2-digit',
            minute: '2-digit',
            hourCycle: 'h23'
        };
        return now.toLocaleTimeString('pt-BR', options);
    };

    useEffect(() => {
        const initialBets = sampleBets
            .filter(bet => parseFloat(bet.bet.replace(',', '.')) >= 0.50)
            .map(bet => ({ ...bet, time: getTime(), isNew: false }))
            .reverse();
        setBets(initialBets.slice(0, 30));

        betIndexRef.current = sampleBets.findIndex(b => b.player === initialBets[0].player) + 1 || 0;


        const intervalId = setInterval(() => {
            let newBetData;
            let betValue;
            
            // Loop to find a valid bet
            do {
                newBetData = sampleBets[betIndexRef.current % sampleBets.length];
                betIndexRef.current++;
                betValue = parseFloat(newBetData.bet.replace(',', '.'));
            } while (betValue < 0.50)

            const newBet: Bet = { ...newBetData, time: getTime(), isNew: true };
            
            setBets(prevBets => {
                const updatedBets = [newBet, ...prevBets.map(b => ({...b, isNew: false}))].slice(0, 30);
                return updatedBets;
            });

            if (betListContainerRef.current) {
                betListContainerRef.current.scrollTop = 0;
            }

        }, 2000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        if (bets.some(b => b.isNew)) {
            const timer = setTimeout(() => {
                setBets(currentBets => currentBets.map(b => ({ ...b, isNew: false })));
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [bets]);

    return (
        <section className="flex justify-center">
            <div className="casino-bets-container">
                <div className="header">
                    <div className="header-title">
                        <h1>APOSTAS DE CASSINO</h1>
                        <div className="live-status">
                            <span className="live-dot"></span>
                            <span style={{ color: 'white' }}>LIVE</span>
                        </div>
                    </div>
                    <p>Atualização em tempo real</p>
                </div>
                <div className="bet-list-container" ref={betListContainerRef}>
                    {bets.map((bet, index) => (
                        <BetItemComponent key={`${bet.player}-${bet.time}-${index}`} bet={bet} />
                    ))}
                </div>
            </div>
        </section>
    );
}
