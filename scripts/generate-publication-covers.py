#!/usr/bin/env python3
"""Generate publication cover thumbnails when Elsevier CDN is unavailable."""
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
NEWS = ROOT / "news"
W, H = 400, 520


def cover(title: str, journal: str, accent: tuple[int, int, int], path: Path) -> None:
    img = Image.new("RGB", (W, H), (245, 247, 250))
    draw = ImageDraw.Draw(img)
    draw.rectangle((0, 0, W, 90), fill=accent)
    try:
        font_l = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 18)
        font_s = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 14)
    except OSError:
        font_l = ImageFont.load_default()
        font_s = font_l
    draw.text((20, 28), journal, fill=(255, 255, 255), font=font_l)
    y = 110
    for line in _wrap(title, 34):
        draw.text((20, y), line, fill=(30, 41, 59), font=font_s)
        y += 22
    draw.rectangle((20, H - 50, W - 20, H - 20), outline=accent, width=2)
    draw.text((30, H - 42), "Journal cover (placeholder)", fill=(100, 116, 139), font=font_s)
    path.parent.mkdir(parents=True, exist_ok=True)
    img.save(path, "PNG", optimize=True)
    print("Wrote", path)


def _wrap(text: str, width: int) -> list[str]:
    words = text.split()
    lines: list[str] = []
    cur = ""
    for w in words:
        test = f"{cur} {w}".strip()
        if len(test) <= width:
            cur = test
        else:
            if cur:
                lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    return lines[:8]


def adapt_cover(path: Path) -> None:
    img = Image.new("RGB", (W, H), (255, 255, 255))
    draw = ImageDraw.Draw(img)
    draw.text((20, 20), "ADAPT-GPP", fill=(22, 101, 52))
    for i, alpha in enumerate([80, 120, 160, 200]):
        draw.ellipse((40 + i * 30, 120 + i * 10, 340 - i * 20, 380 - i * 10), outline=(34, 197, 94, alpha), width=3)
    draw.text((20, H - 40), "Global hourly GPP", fill=(51, 65, 85))
    img.save(path, "PNG", optimize=True)
    print("Wrote", path)


def main() -> None:
    print("No-op: add real images via news-photos/ and scripts/import-news-photos.py")
    print("Omit publication image in site-data.js when no cover is available.")


if __name__ == "__main__":
    main()
