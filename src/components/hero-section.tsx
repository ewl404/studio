import WinningsSlideshow from './winnings-slideshow';

export default function HeroSection() {
  return (
    <section className="text-center my-16 md:my-24">
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
      <div
        className="opacity-0 animate-fade-in-up"
        style={{ animationDelay: '0.6s' }}
      >
        <WinningsSlideshow />
      </div>
    </section>
  );
}
