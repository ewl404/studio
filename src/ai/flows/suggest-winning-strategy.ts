'use server';

/**
 * @fileOverview This file defines a Genkit flow for suggesting winning strategies based on user selection.
 *
 * - suggestWinningStrategy - A function that handles the process of suggesting a winning strategy.
 * - SuggestWinningStrategyInput - The input type for the suggestWinningStrategy function.
 * - SuggestWinningStrategyOutput - The return type for the suggestWinningStrategy function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestWinningStrategyInputSchema = z.object({
  strategy: z
    .enum(['Horários de distribuição', 'Intercalação vencedora'])
    .describe('The strategy selected by the user.'),
});
export type SuggestWinningStrategyInput = z.infer<
  typeof SuggestWinningStrategyInputSchema
>;

const SuggestWinningStrategyOutputSchema = z.object({
  suggestion: z
    .string()
    .describe(
      'A suggestion of times to play, based on the selected strategy.'
    ),
  explanation: z.string().describe('Explanation of why these times were chosen.'),
});
export type SuggestWinningStrategyOutput = z.infer<
  typeof SuggestWinningStrategyOutputSchema
>;

export async function suggestWinningStrategy(
  input: SuggestWinningStrategyInput
): Promise<SuggestWinningStrategyOutput> {
  return suggestWinningStrategyFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestWinningStrategyPrompt',
  input: {schema: SuggestWinningStrategyInputSchema},
  output: {schema: SuggestWinningStrategyOutputSchema},
  prompt: `You are an AI assistant that suggests optimal times to play games based on different strategies.

The user has selected the following strategy: {{{strategy}}}

Based on this strategy, suggest 6-10 different times within the next 2 hours (from now) for the user to play. Give a reason for each time that you give.
Make sure the times are given as HH:MM and are between 2 and 15 minutes apart from each other.
`,
});

const suggestWinningStrategyFlow = ai.defineFlow(
  {
    name: 'suggestWinningStrategyFlow',
    inputSchema: SuggestWinningStrategyInputSchema,
    outputSchema: SuggestWinningStrategyOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
