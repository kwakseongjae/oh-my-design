const assert = require('assert');
const { generateTemplate, RESET_CSS } = require('../src/harness/template-generator.js');

describe('Render Integrity and CSS Reset', () => {
  it('should include figure margin reset in RESET_CSS', () => {
    assert.ok(RESET_CSS.includes('figure'));
    assert.ok(RESET_CSS.includes('margin: 0'));
  });

  it('should generate standalone HTML containing CSS reset block', () => {
    const html = generateTemplate({
      title: 'Test Page',
      content: '<figure><div style="width: 100%;">Content</div></figure>'
    });

    assert.ok(html.includes('<!DOCTYPE html>'));
    assert.ok(html.includes('figure'));
    assert.ok(html.includes('margin: 0'));
    assert.ok(html.includes('<figure><div style="width: 100%;">Content</div></figure>'));
  });

  it('should pass integrity check for templates generated with CSS reset', async () => {
    const { checkRenderIntegrity } = await import('./tools/render-integrity.mjs');
    const html = generateTemplate({
      content: '<figure style="width: 100%;">Test</figure>'
    });

    const result = checkRenderIntegrity(html);
    assert.strictEqual(result.valid, true);
    assert.strictEqual(result.errors.length, 0);
  });

  it('should fail integrity check when HTML contains figure element without CSS reset', async () => {
    const { checkRenderIntegrity } = await import('./tools/render-integrity.mjs');
    const unnormalizedHtml = '<html><body><figure><div style="width: 100%;">Test</div></figure></body></html>';

    const result = checkRenderIntegrity(unnormalizedHtml);
    assert.strictEqual(result.valid, false);
    assert.ok(result.errors.some(err => err.includes('<figure>')));
  });
});
