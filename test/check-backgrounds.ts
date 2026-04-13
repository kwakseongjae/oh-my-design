import { loadReference } from '../src/core/reference-parser.js';

for (const id of ['stripe', 'vercel', 'notion', 'linear.app', 'figma', 'cursor', 'apple', 'spotify']) {
  try {
    const ref = loadReference(id);
    console.log(id.padEnd(12), 'bg:', ref.colors.background.padEnd(8), 'fg:', ref.colors.foreground.padEnd(8), 'primary:', ref.colors.primary);
  } catch (e: unknown) {
    console.log(id, 'ERROR', (e as Error).message);
  }
}
