#!/usr/bin/env python3
import os
from pathlib import Path
import fitz
from PIL import Image

INPUT = Path("src/assets/LOGO TRANSPARENT .pdf")
OUT_DIR = Path("src/assets/logo")
SIZES = [1024, 512, 256, 128, 64, 32]

OUT_DIR.mkdir(parents=True, exist_ok=True)

if not INPUT.exists():
    raise SystemExit(f"Input PDF not found: {INPUT}")

doc = fitz.open(str(INPUT))
page = doc[0]

# Render at high resolution (render matrix scale)
matrix = fitz.Matrix(4, 4)
pix = page.get_pixmap(matrix=matrix, alpha=True)

# Create PIL image from pixmap
img = Image.frombytes("RGBA", [pix.width, pix.height], pix.samples)

for size in SIZES:
    # Resize keeping aspect ratio to fit within (size x size)
    w, h = img.size
    scale = min(size / w, size / h)
    new_w = max(1, int(w * scale))
    new_h = max(1, int(h * scale))
    resized = img.resize((new_w, new_h), Image.LANCZOS)

    # Center on a square transparent background
    background = Image.new("RGBA", (size, size), (255, 255, 255, 0))
    offset = ((size - new_w) // 2, (size - new_h) // 2)
    background.paste(resized, offset, resized)

    png_path = OUT_DIR / f"logo-{size}.png"
    webp_path = OUT_DIR / f"logo-{size}.webp"

    background.save(png_path, format="PNG")
    background.save(webp_path, format="WEBP", lossless=True)

print("Generated:")
for p in sorted(OUT_DIR.iterdir()):
    print(p)
