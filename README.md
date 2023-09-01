# Astro repro

## Repro

Stackblitz uses node 16 while we're using node 18. For this reason:

1. Clone this repository in your machine
1. install dependencies (`pnpm install`)
1. run `pnpm run dev` (to see working fine);
1. stop the server
1. run `pnpm run build`

See the error:

If you set `functionPerRoute` to `false` and run build again, it should work fine.

## Env info

Here's my env:

```text
System:
  OS: macOS 14.0
  CPU: (10) arm64 Apple M1 Pro
  Memory: 70.63 MB / 32.00 GB
  Shell: 5.9 - /bin/zsh
Binaries:
  Node: 18.15.0 - ~/.asdf/installs/nodejs/18.15.0/bin/node
  Yarn: 1.22.0 - ~/.asdf/installs/nodejs/18.15.0/bin/yarn
  npm: 9.7.2 - ~/.asdf/installs/nodejs/18.15.0/bin/npm
  pnpm: 8.6.11 - ~/.asdf/installs/nodejs/18.15.0/bin/pnpm
IDEs:
  VSCode: 1.81.1 - /usr/local/bin/code
Browsers:
  Chrome: 115.0.5790.170
  Edge: 116.0.1938.69
  Safari: 17.0
```
