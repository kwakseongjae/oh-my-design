import generatedCompiler from "../../generated/core-verifier/web-core-verifier.cjs";
import type {
  CoreCanonicalPackage,
  CoreCanonicalPackageVerifier,
} from "./core-consumer-contract";

const generated = generatedCompiler as {
  validateAdoptedPackage(pkg: CoreCanonicalPackage): {
    readonly valid: boolean;
    readonly errors: readonly string[];
  };
};

/** Web-local byte-identical closure of the canonical Core package verifier. */
export const verifyCanonicalCorePackage: CoreCanonicalPackageVerifier = (pkg) => {
  const result = generated.validateAdoptedPackage(pkg);
  return { valid: result.valid, errors: result.errors };
};
