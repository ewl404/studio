'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, PlayCircle } from 'lucide-react';

const AulasClientPage = () => {
    const lessons = [
        {
            title: 'Aula 1: Entendendo a Estratégia de Intercalação',
            description: 'Nesta aula, vamos desmistificar a estratégia de intercalação, mostrando como e por que ela funciona para aumentar suas chances no Fortune Tiger.',
            videoId: 'placeholder1'
        },
        {
            title: 'Aula 2: Análise de Velas no Aviator',
            description: 'Aprenda a ler o gráfico do Aviator como um profissional. Descubra os segredos por trás das velas e saiba o momento exato de entrar e sair.',
            videoId: 'placeholder2'
        },
         {
            title: 'Aula 3: Hackeando o Mines com a IA',
            description: 'Entenda a lógica por trás do nosso hacker de minas. Veja na prática como usar a ferramenta para maximizar seus lucros com segurança.',
            videoId: 'placeholder3'
        }
    ];

  return (
    <div className="w-full max-w-4xl mx-auto space-y-12">
      <header className="text-center">
        <GraduationCap className="w-16 h-16 text-primary mx-auto mb-4 animate-fade-in-down" />
        <h1 className="text-4xl md:text-5xl font-bold text-primary !leading-tight font-headline mb-4 animate-fade-in-down">
          Lucrando na Prática com a IA
        </h1>
        <p className="text-lg text-foreground/80 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Bem-vindo à sua central de treinamento. Aqui você aprenderá a usar nossas ferramentas e estratégias para transformar dados em lucro.
        </p>
      </header>

      <div className="space-y-8">
        {lessons.map((lesson, index) => (
          <Card key={lesson.videoId} className="bg-background/70 border-primary/20 shadow-lg shadow-primary/10 backdrop-blur-sm overflow-hidden animate-fade-in-up" style={{ animationDelay: `${0.4 + index * 0.2}s` }}>
            <CardHeader>
                <CardTitle className="text-2xl text-primary">{lesson.title}</CardTitle>
                 <CardDescription>{lesson.description}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="aspect-video w-full bg-black border-2 border-primary/30 rounded-lg flex items-center justify-center group cursor-pointer hover:border-primary/70 transition-all">
                    <PlayCircle className="w-20 h-20 text-primary/50 group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
                </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AulasClientPage;
