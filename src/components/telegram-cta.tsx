'use client';

import { Button } from './ui/button';
import { Send } from 'lucide-react';

export default function TelegramCTA() {
  return (
    <div className="fixed bottom-4 right-4 z-50 md:hidden">
      <Button
        asChild
        size="lg"
        className="rounded-full shadow-lg shadow-primary/20 animate-pulse"
      >
        <a href="https://t.me/+lbsueHDfifowYTFh" target="_blank" rel="noopener noreferrer">
          <Send className="mr-2 h-5 w-5" />
          Receber no Telegram
        </a>
      </Button>
    </div>
  );
}
