import { cp, mkdir } from "node:fs/promises";
import { spawn } from "node:child_process";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)));
const standaloneRoot = resolve(projectRoot, ".next", "standalone");
const standaloneNext = resolve(standaloneRoot, ".next");

await mkdir(standaloneNext, { recursive: true });
await cp(resolve(projectRoot, ".next", "static"), resolve(standaloneNext, "static"), {
  recursive: true,
  force: true,
});
await cp(resolve(projectRoot, "public"), resolve(standaloneRoot, "public"), {
  recursive: true,
  force: true,
});

const args = process.argv.slice(2);
const portFlag = args.indexOf("--port");
const port = portFlag >= 0 ? args[portFlag + 1] : process.env.PORT;
const child = spawn(process.execPath, [resolve(standaloneRoot, "server.js")], {
  cwd: standaloneRoot,
  stdio: "inherit",
  env: {
    ...process.env,
    HOSTNAME: process.env.HOSTNAME ?? "0.0.0.0",
    ...(port ? { PORT: port } : {}),
  },
});

child.on("error", (error) => {
  console.error("Could not start the standalone Next.js server:", error);
  process.exitCode = 1;
});
child.on("exit", (code, signal) => {
  if (signal) process.kill(process.pid, signal);
  else process.exitCode = code ?? 0;
});
