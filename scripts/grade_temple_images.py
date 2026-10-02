import os
from PIL import Image, ImageEnhance, ImageOps, ImageFilter

def grade_temple_image(input_path, output_path=None):
    if output_path is None:
        output_path = input_path

    print(f"Grading: {input_path}")
    img = Image.open(input_path).convert("RGB")

    # 1. Subtle auto-contrast to stretch dynamic range without clipping
    img = ImageOps.autocontrast(img, cutoff=1)

    # 2. Color / Vibrance boost for rich gopuram paints, sky and temple stone
    color_enhancer = ImageEnhance.Color(img)
    img = color_enhancer.enhance(1.22)

    # 3. Contrast enhancement for deep architectural depth
    contrast_enhancer = ImageEnhance.Contrast(img)
    img = contrast_enhancer.enhance(1.15)

    # 4. Warm Golden Hour Tone:
    # Separate RGB channels and slightly enhance Red and Green relative to Blue for divine warmth
    r, g, b = img.split()
    r = r.point(lambda i: min(255, int(i * 1.04)))
    g = g.point(lambda i: min(255, int(i * 1.01)))
    b = b.point(lambda i: max(0, int(i * 0.96)))
    img = Image.merge("RGB", (r, g, b))

    # 5. Brightness slight lift for shadow details
    bright_enhancer = ImageEnhance.Brightness(img)
    img = bright_enhancer.enhance(1.03)

    # 6. Unsharp mask / Sharpness to bring out intricate temple gopuram sculptures
    sharp_enhancer = ImageEnhance.Sharpness(img)
    img = sharp_enhancer.enhance(1.35)

    # Save output in high quality
    if output_path.lower().endswith(".webp"):
        img.save(output_path, "WEBP", quality=92, method=6)
    else:
        img.save(output_path, "JPEG", quality=94, optimize=True)

    print(f"Saved graded image to: {output_path}")

temple_dir = r"c:\Users\Somnath\OneDrive\Desktop\ManiPhotography\public\images\temple"
files = [
    "thirukadaiyur-temple-gopuram.jpg",
    "chidambaram-natarajar-temple-gopuram.jpg",
    "thirunallar-saneeswarar-temple-gopuram.jpg",
    "mayiladuthurai-mayuranathar-temple-gopuram.jpg",
    "thirukadaiyur-amritaghateswarar-abirami-temple-photography.webp"
]

for f in files:
    full_p = os.path.join(temple_dir, f)
    if os.path.exists(full_p):
        grade_temple_image(full_p)
    else:
        print(f"File not found: {full_p}")
