const key = Symbol.for('oh-my-design.core-v2.embedded-schemas');
globalThis[key] = Object.freeze({
  "design-md-core-adoption-receipt-v2.schema.json": require("./schema/design-md-core-adoption-receipt-v2.schema.json"),
  "design-md-core-adoption-review-v2.schema.json": require("./schema/design-md-core-adoption-review-v2.schema.json"),
  "design-md-core-manifest-v2.schema.json": require("./schema/design-md-core-manifest-v2.schema.json"),
  "design-md-core-project-checkpoint-v2.schema.json": require("./schema/design-md-core-project-checkpoint-v2.schema.json"),
  "design-system-coverage-v2.schema.json": require("./schema/design-system-coverage-v2.schema.json"),
  "design-system-graph-v2.schema.json": require("./schema/design-system-graph-v2.schema.json"),
  "design-system-provenance-v2.schema.json": require("./schema/design-system-provenance-v2.schema.json"),
});
module.exports = require('./compile-design-md-core.cjs');
