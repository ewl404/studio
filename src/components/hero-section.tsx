import CasinoBets from '@/components/casino-bets';

export default function HeroSection() {
  return (
    <section className="text-center mt-4 md:mt-8">
      <h1
        className="text-4xl md:text-6xl font-bold text-primary !leading-tight font-headline mb-4 opacity-0 animate-fade-in-down"
        style={{ animationDelay: '0.2s' }}
      >
        Pare de depender da sorte. Comece a ganhar com lógica.
      </h1>
      <p
        className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto mb-8 opacity-0 animate-fade-in-up"
        style={{ animationDelay: '0.4s' }}
      >
        A IA que decifra os jogos e entrega estratégias matemáticas para lucrar.
      </p>
      <CasinoBets />
    </section>
  );
}
