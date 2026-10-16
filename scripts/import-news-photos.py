#!/usr/bin/env python3
"""Resize user-provided news photos into news/ (max width 1600px, target <500KB)."""
from __future__ import annotations

import os
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SRC_DIR = ROOT / "news-photos"
DEST_DIR = ROOT / "news"
MAX_WIDTH = 1600
MAX_BYTES = 500_000

MAPPING = {
    "igarss2026_poster_photo.jpg": "igarss2026_poster_photo.jpg",
    "acm2026_slide1-01.png": "acm2026_slide1-01.png",
    "adapt_gpp_flowchart.png": "adapt_gpp_flowchart.png",
    "adapt_gpp_cover.png": "adapt_gpp_cover.png",
}


def save_optimized(img: Image.Image, dest: Path) -> None:
    dest.parent.mkdir(parents=True, exist_ok=True)
    if dest.suffix.lower() in {".jpg", ".jpeg"}:
        quality = 88
        while quality >= 50:
            img.save(dest, "JPEG", optimize=True, quality=quality)
            if dest.stat().st_size <= MAX_BYTES:
                return
            quality -= 6
        return
    img.save(dest, "PNG", optimize=True)


def process(src: Path, dest: Path) -> None:
    img = Image.open(src).convert("RGB")
    w, h = img.size
    if w > MAX_WIDTH:
        nh = int(h * (MAX_WIDTH / w))
        img = img.resize((MAX_WIDTH, nh), Image.Resampling.LANCZOS)
    save_optimized(img, dest)
    print(f"Wrote {dest} ({dest.stat().st_size} bytes)")


def main() -> int:
    if not SRC_DIR.is_dir():
        print(f"No {SRC_DIR}; skip import (place source files there and re-run).")
        return 0
    missing = []
    for src_name, dest_name in MAPPING.items():
        src = SRC_DIR / src_name
        if not src.is_file():
            missing.append(src_name)
            continue
        process(src, DEST_DIR / dest_name)
    if missing:
        print("Missing sources:", ", ".join(missing))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
