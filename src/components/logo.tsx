import { generateLogo } from '@/ai/flows/generate-logo';
import Image from 'next/image';

export default async function Logo() {
  const logoPrompt = "A character or silhouette typing on a computer, minimalist style, neon green on black, with soft lighting and thin outlines.";
  
  try {
    const result = await generateLogo({ prompt: logoPrompt });

    if (result.logoDataUri) {
      return (
        <Image
          src={result.logoDataUri}
          alt="Matrix Strategy AI Logo"
          width={112}
          height={112}
          className="mx-auto w-24 h-24 md:w-28 md:h-28 object-contain"
          priority
        />
      );
    }
  } catch (error) {
    console.error("Failed to generate logo:", error);
  }

  // Fallback icon if generation fails
  return (
      <div className="w-24 h-24 md:w-28 md:h-28 flex items-center justify-center bg-accent rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 8V4H8"/>
            <rect width="16" height="12" x="4" y="8" rx="2"/>
            <path d="M2 14h2"/>
            <path d="M20 14h2"/>
            <path d="M15 13v2"/>
            <path d="M9 13v2"/>
        </svg>
      </div>
  );
}
