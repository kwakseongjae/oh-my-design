import { describe, it, expect } from 'vitest';
import { resolveTokens } from '../../../src/core/token-resolver.js';
import { renderDesignMd } from '../../../src/core/renderer.js';
import { generateComponentTokens } from '../../../src/core/components.js';
import { basePreset } from '../../../src/presets/_base.js';
import type { UserPreferences, TemplateContext } from '../../../src/core/types.js';

function buildContext(overrides?: Partial<UserPreferences>): TemplateContext & { componentList: ReturnType<typeof generateComponentTokens>; dosAndDonts: NonNullable<typeof basePreset.dosAndDonts> } {
  const prefs: UserPreferences = {
    mood: 'clean',
    primaryColor: '#6366f1',
    roundness: 'moderate',
    density: 'comfortable',
    typography: 'geometric',
    depth: 'subtle',
    darkMode: true,
    components: ['button', 'card', 'input'],
    ...overrides,
  };

  const tokens = resolveTokens(prefs);
  const componentList = generateComponentTokens(prefs.components, tokens);

  return {
    ...tokens,
    preferences: prefs,
    generatedAt: '2026-04-13',
    version: '0.1.0',
    componentList,
    dosAndDonts: basePreset.dosAndDonts!,
  };
}

describe('renderDesignMd', () => {
  it('should generate valid markdown with all 10 sections', () => {
    const ctx = buildContext();
    const md = renderDesignMd(ctx as unknown as TemplateContext);

    expect(md).toContain('# Custom Design System');
    expect(md).toContain('## 1. Visual Theme & Atmosphere');
    expect(md).toContain('## 2. Color Palette & Roles');
    expect(md).toContain('## 3. Typography Rules');
    expect(md).toContain('## 4. Component Stylings');
    expect(md).toContain('## 5. Layout Principles');
    expect(md).toContain('## 6. Depth & Elevation');
    expect(md).toContain("## 7. Do's and Don'ts");
    expect(md).toContain('## 8. Responsive Behavior');
    expect(md).toContain('## 9. Agent Prompt Guide');
    expect(md).toContain('## 10. shadcn/ui Theme');
  });

  it('should include component sections for selected components', () => {
    const ctx = buildContext({ components: ['button', 'table', 'dialog'] });
    const md = renderDesignMd(ctx as unknown as TemplateContext);

    expect(md).toContain('### Button');
    expect(md).toContain('### Table');
    expect(md).toContain('### Dialog / Modal');
  });

  it('should include dark mode CSS block when darkMode enabled', () => {
    const ctx = buildContext({ darkMode: true });
    const md = renderDesignMd(ctx as unknown as TemplateContext);

    expect(md).toContain('.dark {');
  });

  it('should not include dark mode CSS when darkMode disabled', () => {
    const ctx = buildContext({ darkMode: false });
    const md = renderDesignMd(ctx as unknown as TemplateContext);

    expect(md).not.toContain('.dark {');
  });

  it('should render different moods', () => {
    const cleanMd = renderDesignMd(buildContext({ mood: 'clean' }) as unknown as TemplateContext);
    const darkMd = renderDesignMd(buildContext({ mood: 'dark' }) as unknown as TemplateContext);

    expect(cleanMd).toContain('clarity and precision');
    expect(darkMd).toContain('focused, immersive');
  });

  it('should include shadcn CSS variables', () => {
    const ctx = buildContext();
    const md = renderDesignMd(ctx as unknown as TemplateContext);

    expect(md).toContain('--background:');
    expect(md).toContain('--foreground:');
    expect(md).toContain('--primary:');
    expect(md).toContain('--radius:');
  });
});
