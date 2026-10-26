# Qraft Code

Qraft Code is a personal fork of [T3 Code](https://github.com/pingdotgg/t3code).
The upstream MIT license and notices remain in place.

## Local desktop builds

Install dependencies with `vp i`, using the Node and pnpm versions pinned in the repository.
The macOS resource monitor requires Rust 1.95 or newer and the Xcode Command Line Tools.

```sh
DEVELOPER_DIR=/Library/Developer/CommandLineTools RUSTUP_TOOLCHAIN=1.95.0 vp run dist:desktop:dmg:arm64 --build-version 0.1.2-qraft.1
```

Use a compiler and SDK from the same developer directory. The command above selects the standalone
Command Line Tools without changing the system-wide Xcode selection.

The build writes a DMG and ZIP to `release/`. Local builds use ad-hoc signing and are not notarized; Developer ID signing and a
published update release must be configured before automatic distribution is ready.
Both the desktop feed and CLI release URLs default to `clkefe/qraft-code`.
`QRAFTCODE_DESKTOP_UPDATE_REPOSITORY` can override the desktop feed explicitly.

The app's data lives in `~/.qraft/userdata`; its Chromium profile is `qraft-code` in the
platform's application-support directory. Its bundle ID and URL scheme are distinct from T3's.
The optional command is `qraft`. Do not point development builds at either installed app's data.
Claude provider instances can reference existing authenticated Claude config directories.

## Bringing upstream changes into the fork

`origin` is `clkefe/qraft-code`; `upstream` is `pingdotgg/t3code`.
Keep `upstream-main` free of custom changes and retain upstream ancestry when merging.

```sh
git fetch upstream
git switch upstream-main
git merge --ff-only upstream/main
git switch main
git switch -c update/t3-YYYYMMDD
git merge upstream-main
vp run check:changed main
```

Resolve conflicts on the update branch, build the desktop app, and exercise provider selection,
chat continuation, terminals, restart, and migration on a copy of the data before merging to `main`.
Back up the database before launching a build that may migrate it; reverting the binary alone
does not reverse a migration.

Keep fork identity values in `packages/shared/src/qraftBranding.ts` and artwork in `assets/qraft`.
Keep custom features separate where practical so upstream integrations stay small.
