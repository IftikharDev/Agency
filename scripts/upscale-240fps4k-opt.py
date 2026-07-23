#!/usr/bin/env python3
"""Re-encode 240fps4k-opt at full 2x resolution with smaller WebP files.

Keeps resolution at 7680x4156. Reads original JPGs (not already-lossy WebP).
Leaves 160fps4k-opt untouched.
"""

from __future__ import annotations

import os
import sys
from concurrent.futures import ProcessPoolExecutor, as_completed
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SRC_DIR = ROOT / "public" / "240frames4k" / "240frames4k"
OUT_DIR = ROOT / "public" / "240fps4k-opt"
SCALE = 2
QUALITY = 35
METHOD = 6
WORKERS = max(1, (os.cpu_count() or 4) - 1)


def process_frame(src_str: str, out_str: str) -> tuple[str, int, tuple[int, int]]:
    src = Path(src_str)
    out = Path(out_str)
    with Image.open(src) as img:
        img = img.convert("RGB")
        w, h = img.size
        target = (w * SCALE, h * SCALE)
        upscaled = img.resize(target, Image.LANCZOS)
        upscaled.save(out, "WEBP", quality=QUALITY, method=METHOD)
    return out.name, out.stat().st_size, target


def main() -> int:
    frames = sorted(SRC_DIR.glob("ezgif-frame-*.jpg"))
    if not frames:
        print(f"No frames in {SRC_DIR}", file=sys.stderr)
        return 1

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    print(f"Source: {SRC_DIR}")
    print(f"Output: {OUT_DIR}")
    print(f"Frames: {len(frames)} | {SCALE}x | WebP q={QUALITY} method={METHOD}")

    original_bytes = sum(f.stat().st_size for f in frames)
    jobs = [(str(f), str(OUT_DIR / f"{f.stem}.webp")) for f in frames]

    results = []
    with ProcessPoolExecutor(max_workers=WORKERS) as pool:
        futures = {pool.submit(process_frame, s, o): s for s, o in jobs}
        done = 0
        for fut in as_completed(futures):
            results.append(fut.result())
            done += 1
            if done % 40 == 0 or done == len(frames):
                print(f"  {done}/{len(frames)}")

    new_bytes = sum(size for _, size, _ in results)
    dims = results[0][2]
    print()
    print(f"Resolution kept/upscaled: {dims[0]}x{dims[1]}")
    print(f"Size: {original_bytes/1024/1024:.1f} MB JPG -> {new_bytes/1024/1024:.1f} MB WebP")
    print(f"Avg/frame: {new_bytes/len(frames)/1024:.0f} KB")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
