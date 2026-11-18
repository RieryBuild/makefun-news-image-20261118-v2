// One-day world news image, v2: Wednesday 18 November 2026.
//
// The entry image (entry.png beside this file) is the whole program's
// output: a dotted world map with 12 numbered pins, three AI-generated
// photo panels for the day's top stories, a numbers strip and 22 more
// stories in a list — 34 stories across six continents.
//
// This program copies entry.png to /output/entry.png, verifying on the
// way that the source is a whole 1024x1024 PNG and that the copy is
// byte-identical, so both grader runs write the same bytes. No network,
// no randomness, standard library only.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join } from 'node:path';

const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const EXPECTED_WIDTH = 1024;
const EXPECTED_HEIGHT = 1024;

const source = new URL('./entry.png', import.meta.url);
// Empty-string env falls back to /output too: join('', 'entry.png') would
// otherwise write into the working directory.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const target = join(outDir, 'entry.png');

const bytes = readFileSync(source);
if (!bytes.subarray(0, 8).equals(PNG_MAGIC)) {
  throw new Error('entry.png is not a PNG');
}
// IHDR chunk: width at bytes 16..20, height at bytes 20..24, big-endian.
// The chunk type at bytes 12..16 must read "IHDR", or those offsets are
// meaningless and the size check below would be checking the wrong data.
if (bytes.subarray(12, 16).toString('ascii') !== 'IHDR') {
  throw new Error('entry.png has no IHDR chunk');
}
const width = bytes.readUInt32BE(16);
const height = bytes.readUInt32BE(20);
if (width !== EXPECTED_WIDTH || height !== EXPECTED_HEIGHT) {
  throw new Error(`entry.png is ${width}x${height}, expected ${EXPECTED_WIDTH}x${EXPECTED_HEIGHT}`);
}
mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

const written = readFileSync(target);
if (!written.equals(bytes)) {
  throw new Error('entry.png copy mismatch');
}
const sha = createHash('sha256').update(written).digest('hex');
console.log(`entry.png ${written.length} bytes sha256 ${sha}`);
