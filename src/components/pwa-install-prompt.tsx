'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const PwaInstallPrompt = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event: Event) => {
      // Prevent the default browser install prompt.
      event.preventDefault();
      
      const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
      // Show the custom prompt only if the app is not already installed.
      if (!isStandalone) {
         setTimeout(() => {
            setIsVisible(true);
        }, 3000);
      }
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="pwa-prompt-container">
        <div className="pwa-prompt-content">
             <Image 
                src="https://madetoinvest.pro/wp-content/uploads/2025/06/Design-sem-nome-3.png"
                width={48}
                height={48}
                alt="Matrix IA Icon"
                className="pwa-prompt-icon"
            />
            <div className="pwa-prompt-text">
                <h3 className="pwa-prompt-title">Matrix IA</h3>
                <p className="pwa-prompt-subtitle">
                    Toque no botão baixar app, e garanta seu acesso vitalicio, e sorteios de PIX!
                </p>
            </div>
             <Button asChild className="pwa-prompt-button">
                <Link href="/baixar">
                    <Download className="mr-2 h-4 w-4" />
                    Baixar App
                </Link>
            </Button>
        </div>
    </div>
  );
};

export default PwaInstallPrompt;