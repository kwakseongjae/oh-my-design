import { generateTemplate, RESET_CSS } from '../../src/harness/template-generator.js';

/**
 * Checks HTML content or full document for layout overflow risks and unnormalized UA styles.
 * @param {string} html
 * @returns {{ valid: boolean, errors: string[], warnings: string[] }}
 */
export function checkRenderIntegrity(html) {
  const errors = [];
  const warnings = [];

  if (!html || typeof html !== 'string') {
    return {
      valid: false,
      errors: ['HTML content must be a non-empty string.'],
      warnings: []
    };
  }

  // Check if figure default margins are normalized or if CSS reset exists
  const hasFigureElement = /<figure[\s>]/i.test(html);
  const hasCSSReset = /figure\s*\{[^}]*margin\s*:\s*0/i.test(html) || /margin\s*:\s*0/i.test(html);

  if (hasFigureElement && !hasCSSReset) {
    errors.push('Unnormalized <figure> element detected without CSS reset margin: 0.');
  }

  // Check for body reset
  const hasBodyElement = /<body[\s>]/i.test(html);
  const hasBodyReset = /body\s*\{[^}]*margin\s*:\s*0/i.test(html) || /margin\s*:\s*0/i.test(html);
  if (hasBodyElement && !hasBodyReset) {
    warnings.push('<body> element detected without explicit margin reset.');
  }

  // Check for overflow risks: 100% width with non-reset figure or un-normalized padding/margin
  const hasFullWidthContainer = /width\s*:\s*100%/i.test(html) || /width\s*:\s*100vw/i.test(html);
  if (hasFullWidthContainer && !hasCSSReset) {
    errors.push('Layout overflow risk: width: 100% used without comprehensive CSS reset.');
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings
  };
}

/**
 * CLI execution helper
 */
if (process.argv[1] && process.argv[1].endsWith('render-integrity.mjs')) {
  const sample = generateTemplate({ content: '<figure><img src="test.jpg" alt="" /></figure>' });
  const result = checkRenderIntegrity(sample);
  if (!result.valid) {
    console.error('Render Integrity Verification Failed:', result.errors);
    process.exit(1);
  } else {
    console.log('Render Integrity Verification Passed.');
  }
}
