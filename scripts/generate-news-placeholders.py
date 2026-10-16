#!/usr/bin/env python3
"""Create minimal news image placeholders when news-photos/ sources are absent."""
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
NEWS = ROOT / "news"


def placeholder(label: str, path: Path, size=(1200, 900), color=(41, 98, 255)) -> None:
    if path.is_file():
        return
    img = Image.new("RGB", size, (248, 250, 252))
    draw = ImageDraw.Draw(img)
    draw.rectangle((0, 0, size[0], 120), fill=color)
    try:
        font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 42)
    except OSError:
        font = ImageFont.load_default()
    draw.text((40, 40), label, fill=(255, 255, 255), font=font)
    path.parent.mkdir(parents=True, exist_ok=True)
    if path.suffix.lower() == ".png":
        img.save(path, "PNG", optimize=True)
    else:
        img.save(path, "JPEG", quality=85, optimize=True)
    print("Placeholder", path)


def main() -> None:
    placeholder("ACM2026 presentation", NEWS / "acm2026.jpg")
    placeholder("IGARSS 2026 poster", NEWS / "igarss2026_poster_photo.jpg")


if __name__ == "__main__":
    main()
