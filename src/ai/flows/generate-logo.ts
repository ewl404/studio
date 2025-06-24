'use server';
/**
 * @fileOverview Generates a Matrix-inspired logo using AI.
 *
 * - generateLogo - A function that generates the logo.
 * - GenerateLogoInput - The input type for the generateLogo function.
 * - GenerateLogoOutput - The return type for the generateLogo function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateLogoInputSchema = z.object({
  prompt: z.string().describe('A description of the desired logo.')
});
export type GenerateLogoInput = z.infer<typeof GenerateLogoInputSchema>;

const GenerateLogoOutputSchema = z.object({
  logoDataUri: z.string().describe('The generated logo as a data URI.')
});
export type GenerateLogoOutput = z.infer<typeof GenerateLogoOutputSchema>;

export async function generateLogo(input: GenerateLogoInput): Promise<GenerateLogoOutput> {
  return generateLogoFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateLogoPrompt',
  input: {schema: GenerateLogoInputSchema},
  output: {schema: GenerateLogoOutputSchema},
  prompt: `Generate a logo based on the following description, in a Matrix-inspired style:

Description: {{{prompt}}}

The logo should feature a character or silhouette typing on a computer, with a minimalist style, in neon green (#00FF41), with subtle lighting and thin contours.`,
  config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_ONLY_HIGH',
      },
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_NONE',
      },
      {
        category: 'HARM_CATEGORY_HARASSMENT',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        threshold: 'BLOCK_LOW_AND_ABOVE',
      },
    ],
  },
});

const generateLogoFlow = ai.defineFlow(
  {
    name: 'generateLogoFlow',
    inputSchema: GenerateLogoInputSchema,
    outputSchema: GenerateLogoOutputSchema,
  },
  async input => {
    const {media} = await ai.generate({
      model: 'googleai/gemini-2.0-flash-preview-image-generation',
      prompt: input.prompt,
      config: {
        responseModalities: ['TEXT', 'IMAGE'],
      },
    });

    if (!media || !media.url) {
      throw new Error('Failed to generate logo image.');
    }

    return {logoDataUri: media.url};
  }
);
