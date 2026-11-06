/**
 * HTML Template Generator for Standalone Harness Renders
 */

const RESET_CSS = `
*, *::before, *::after {
  box-sizing: border-box;
}

html, body, figure, blockquote, dl, dd {
  margin: 0;
  padding: 0;
}
`;

/**
 * Generates a standalone HTML document string with injected CSS resets.
 * @param {Object} options
 * @param {string} [options.title]
 * @param {string} [options.content]
 * @param {string} [options.styles]
 * @returns {string} Standard HTML5 document string
 */
function generateTemplate(options = {}) {
  const { title = 'Harness Render', content = '', styles = '' } = options;
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <style>
${RESET_CSS}
${styles}
  </style>
</head>
<body>
${content}
</body>
</html>`;
}

module.exports = {
  generateTemplate,
  RESET_CSS
};
