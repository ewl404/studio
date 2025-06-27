
'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Download, Share, PlusSquare, Smartphone, CheckCircle, Apple, Monitor, Gift, BellRing } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const DownloadPageClient = () => {
  const [installPrompt, setInstallPrompt] = useState<any>(null);
  const [canInstall, setCanInstall] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Check if running in standalone mode (already installed)
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsStandalone(true);
    }
    
    // Detect iOS
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
    setIsIOS(isIOSDevice);

    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setInstallPrompt(event);
      setCanInstall(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!installPrompt) return;
    
    installPrompt.prompt();
    const { outcome } = await installPrompt.userChoice;
    if (outcome === 'accepted') {
      setCanInstall(false);
      setIsStandalone(true);
    }
  };

  const handlePushPermission = async () => {
    // The OneSignal SDK is loaded asynchronously via the layout.
    // We push our action to the OneSignalDeferred array to ensure it runs
    // after the SDK is initialized.
    (window as any).OneSignalDeferred = (window as any).OneSignalDeferred || [];
    (window as any).OneSignalDeferred.push(function(OneSignal: any) {
      OneSignal.Notifications.requestPermission();
    });
  };
  
  if (isStandalone) {
      return (
        <div className="w-full max-w-2xl mx-auto text-center animate-fade-in-up">
            <CheckCircle className="w-24 h-24 text-primary mx-auto mb-6 animate-pulse"/>
            <h1 className="text-3xl md:text-4xl font-bold text-primary font-headline mb-4">
              Aplicativo Instalado!
            </h1>
            <p className="text-lg text-foreground/80">
              Você já tem o Matrix IA instalado no seu dispositivo. Procure pelo ícone na sua tela inicial.
            </p>
        </div>
      )
  }

  return (
    <div className="w-full max-w-3xl mx-auto space-y-12">
      <header className="text-center animate-fade-in-down">
        <Download className="w-16 h-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold text-primary !leading-tight font-headline mb-4">
          Instale o Matrix IA no seu Dispositivo
        </h1>
        <p className="text-lg text-foreground/80">
          Acesse nossas estratégias com um toque. Siga o passo a passo abaixo.
        </p>
      </header>

      {canInstall && !isIOS && (
        <section className="text-center animate-fade-in-up">
            <Button size="lg" className="h-14 text-xl animate-pulse" onClick={handleInstallClick}>
              <Download className="mr-3" />
              Instalar Agora
            </Button>
            <p className="text-sm text-muted-foreground mt-2">Clique no botão para instalar o aplicativo.</p>
        </section>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
        {/* Android & Desktop Instructions */}
        <Card className={`bg-background/70 border-primary/20 shadow-lg shadow-primary/10 ${isIOS ? 'opacity-50' : 'border-2 border-primary shadow-primary/20'}`}>
          <CardHeader className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
                <Smartphone className="w-8 h-8 text-primary" />
                <Monitor className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="text-2xl text-primary">Android & Desktop</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
             <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                <p className="text-foreground/90 pt-1">Toque no botão <span className="font-bold text-primary">"Instalar Agora"</span> acima.</p>
             </div>
             <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                <p className="text-foreground/90 pt-1">Confirme a instalação na janela que aparecer.</p>
             </div>
             <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                <p className="text-foreground/90 pt-1">Pronto! O ícone do Matrix IA estará na sua tela inicial.</p>
             </div>
          </CardContent>
        </Card>
        
        {/* iOS Instructions */}
        <Card className={`bg-background/70 border-primary/20 shadow-lg shadow-primary/10 ${isIOS ? 'border-2 border-primary shadow-primary/20' : 'opacity-50'}`}>
          <CardHeader className="text-center">
            <Apple className="w-8 h-8 text-primary mx-auto mb-2" />
            <CardTitle className="text-2xl text-primary">iPhone & iPad</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
             <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                <div className="pt-1">
                    <p className="text-foreground/90">Toque no ícone de <span className="font-bold text-primary">Compartilhar</span> no seu navegador.</p>
                    <Share className="w-10 h-10 text-primary mx-auto my-2 p-2 bg-accent rounded-md"/>
                </div>
             </div>
             <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                <div className="pt-1">
                    <p className="text-foreground/90">Procure e selecione <span className="font-bold text-primary">"Adicionar à Tela de Início"</span>.</p>
                     <PlusSquare className="w-10 h-10 text-primary mx-auto my-2 p-2 bg-accent rounded-md"/>
                </div>
             </div>
             <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                <p className="text-foreground/90 pt-1">Confirme para adicionar e o app aparecerá na sua tela.</p>
             </div>
          </CardContent>
        </Card>
      </div>
      <Separator className="bg-primary/10" />
      <section className="animate-fade-in-up mt-12" style={{ animationDelay: '0.4s' }}>
          <Card className="bg-background/70 border-primary/20 shadow-lg shadow-primary/10 text-center">
            <CardHeader>
              <Gift className="w-12 h-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl text-primary">Concorra a PIX de R$1.000!</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">
                Ative as notificações para participar dos nossos sorteios exclusivos e ser avisado sobre os resultados em primeira mão.
              </p>
            </CardContent>
            <CardFooter className="justify-center flex-col gap-2">
              <Button size="lg" onClick={handlePushPermission}>
                <BellRing className="mr-2" />
                Sim, quero participar!
              </Button>
              <p className="text-xs text-muted-foreground">Você poderá desativar a qualquer momento.</p>
            </CardFooter>
          </Card>
      </section>
    </div>
  );
};

export default DownloadPageClient;
