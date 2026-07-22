#!/usr/bin/env python3
"""Upscale 160fps4k-opt frames 2x with aggressive WebP compression."""

from __future__ import annotations

import os
import shutil
import sys
import tempfile
from concurrent.futures import ProcessPoolExecutor, as_completed
from pathlib import Path

from PIL import Image

FRAME_DIR = Path(__file__).resolve().parents[1] / "public" / "160fps4k-opt"
SCALE = 2
QUALITY = 35
METHOD = 6
WORKERS = max(1, (os.cpu_count() or 4) - 1)


def process_frame(path_str: str) -> tuple[str, int, int, tuple[int, int]]:
    path = Path(path_str)
    with Image.open(path) as img:
        src_size = img.size
        target = (src_size[0] * SCALE, src_size[1] * SCALE)
        upscaled = img.resize(target, Image.LANCZOS)
        upscaled.save(path, "WEBP", quality=QUALITY, method=METHOD)
    return path.name, path.stat().st_size, src_size[0] * src_size[1], target


def main() -> int:
    frames = sorted(FRAME_DIR.glob("ezgif-frame-*.webp"))
    if not frames:
        print(f"No frames found in {FRAME_DIR}", file=sys.stderr)
        return 1

    print(f"Processing {len(frames)} frames from {FRAME_DIR}")
    print(f"Scale: {SCALE}x | WebP quality: {QUALITY} | method: {METHOD} | workers: {WORKERS}")

    original_bytes = sum(f.stat().st_size for f in frames)
    with tempfile.TemporaryDirectory(prefix="160fps4k-opt-backup-") as backup_dir:
        backup_path = Path(backup_dir)
        for frame in frames:
            shutil.copy2(frame, backup_path / frame.name)

        results: list[tuple[str, int, int, tuple[int, int]]] = []
        with ProcessPoolExecutor(max_workers=WORKERS) as pool:
            futures = {pool.submit(process_frame, str(f)): f for f in frames}
            done = 0
            for future in as_completed(futures):
                result = future.result()
                results.append(result)
                done += 1
                if done % 20 == 0 or done == len(frames):
                    print(f"  {done}/{len(frames)} complete")

    new_bytes = sum(size for _, size, _, _ in results)
    sample = results[0]
    print()
    print(f"Resolution: {sample[2]} px -> {sample[3][0]}x{sample[3][1]}")
    print(f"Size: {original_bytes / 1024 / 1024:.1f} MB -> {new_bytes / 1024 / 1024:.1f} MB")
    print(f"Avg/frame: {original_bytes / len(frames) / 1024:.0f} KB -> {new_bytes / len(frames) / 1024:.0f} KB")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
