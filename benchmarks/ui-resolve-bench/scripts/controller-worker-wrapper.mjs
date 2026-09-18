#!/usr/bin/env node
import { spawn } from "node:child_process";
import { randomUUID } from "node:crypto";
import { renameSync, writeFileSync } from "node:fs";

const config = JSON.parse(process.env.OMD_CONTROLLER_WRAPPER ?? "null");
if (!config || typeof config.executable !== "string" || !Array.isArray(config.args) || typeof config.recoveryNonce !== "string" || typeof config.recoveryHeartbeat !== "string") {
  throw new Error("invalid OMD_CONTROLLER_WRAPPER configuration");
}

let heartbeatSequence = 0;
const heartbeat = () => {
  const temporary = `${config.recoveryHeartbeat}.${process.pid}.${randomUUID()}.tmp`;
  writeFileSync(temporary, `${JSON.stringify({ nonce: config.recoveryNonce, pid: process.pid, sequence: ++heartbeatSequence, atWallMs: Date.now() })}\n`, { flag: "wx" });
  renameSync(temporary, config.recoveryHeartbeat);
};
heartbeat();
const heartbeatTimer = setInterval(heartbeat, 25);
heartbeatTimer.unref();
if (process.platform !== "win32") process.on("SIGHUP", () => {});

const childEnvironment = { ...process.env };
delete childEnvironment.OMD_CONTROLLER_WRAPPER;

const child = spawn(config.executable, config.args, {
  cwd: process.cwd(),
  env: childEnvironment,
  stdio: ["ignore", "pipe", "pipe"],
});
child.stdout.pipe(process.stdout);
child.stderr.pipe(process.stderr);
child.on("error", (error) => {
  process.stderr.write(`wrapped runtime spawn error: ${error.message}\n`);
  process.exitCode = 127;
  clearInterval(heartbeatTimer);
});
child.on("close", (code, signal) => {
  clearInterval(heartbeatTimer);
  if (signal) process.kill(process.pid, signal);
  else process.exit(code ?? 1);
});
