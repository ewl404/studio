'use client';

import { useState, useEffect } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useToast } from '@/hooks/use-toast';
import { Copy } from 'lucide-react';

export default function InAppBrowserRedirect() {
    const { toast } = useToast();
    const [isOpen, setIsOpen] = useState(false);
    const [isIOS, setIsIOS] = useState(false);
    const [isAndroid, setIsAndroid] = useState(false);

    useEffect(() => {
        const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
        const isInstagram = userAgent.indexOf('Instagram') > -1;
        const isFacebook = userAgent.indexOf('FBAN') > -1 || userAgent.indexOf('FBAV') > -1;
        
        if (isInstagram || isFacebook) {
            setIsOpen(true);
            setIsAndroid(/android/i.test(userAgent));
            setIsIOS(/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream);
        }
    }, []);

    const handleCopyLink = () => {
        navigator.clipboard.writeText(window.location.href).then(() => {
            toast({
                title: 'Link Copiado!',
                description: 'Agora cole o link no seu navegador padrão (Chrome ou Safari).',
            });
            setIsOpen(false);
        }).catch(err => {
            toast({
                variant: 'destructive',
                title: 'Erro ao copiar',
                description: 'Não foi possível copiar o link. Por favor, copie manualmente da barra de endereço.',
            });
        });
    };

    const Instructions = () => {
        if (isIOS) {
            return (
                <div className="mt-4 text-sm text-muted-foreground space-y-1">
                    <p className='font-bold text-foreground'>Como abrir no Safari:</p>
                    <p>1. Toque no ícone de opções (geralmente <span className="font-bold">...</span> ou um ícone de compartilhamento).</p>
                    <p>2. Selecione a opção <span className="font-bold">"Abrir no navegador"</span> ou <span className="font-bold">"Abrir no Safari"</span>.</p>
                </div>
            )
        }
        if (isAndroid) {
            return (
                 <div className="mt-4 text-sm text-muted-foreground space-y-1">
                    <p className='font-bold text-foreground'>Como abrir no Chrome:</p>
                    <p>1. Toque no menu de três pontos (<span className="font-bold">⋮</span>) no canto superior direito.</p>
                    <p>2. Selecione a opção <span className="font-bold">"Abrir no navegador"</span> ou <span className="font-bold">"Abrir no Chrome"</span>.</p>
                </div>
            )
        }
        return (
            <div className="mt-4 text-sm text-muted-foreground">
                <p>Para uma melhor experiência, por favor, copie o link e cole no seu navegador principal.</p>
            </div>
        )
    }

    return (
        <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Abra no seu navegador padrão</AlertDialogTitle>
              <AlertDialogDescription>
                Você está em um navegador de aplicativo. Algumas funções, como instalar o app ou receber notificações, podem não funcionar corretamente.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <Instructions />
            <AlertDialogFooter className="mt-4 gap-2 sm:flex-row sm:justify-end">
                 <AlertDialogCancel>
                    Continuar aqui
                 </AlertDialogCancel>
                 <AlertDialogAction onClick={handleCopyLink}>
                     <Copy className="mr-2 h-4 w-4" />
                     Copiar Link
                 </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      );
}
