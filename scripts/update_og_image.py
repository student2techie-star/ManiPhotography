import os
from PIL import Image

def main():
    input_path = r"C:\Users\Somnath\.gemini\antigravity-ide\brain\dca4260e-be80-4476-9ca9-996ab5427fb8\.user_uploaded\media_1790740184946.png"
    output_path = r"c:\Users\Somnath\OneDrive\Desktop\ManiPhotography\public\images\og-image.jpg"
    
    print(f"Processing {input_path} -> {output_path}")
    img = Image.open(input_path)
    if img.mode != 'RGB':
        img = img.convert('RGB')
        
    w, h = img.size
    # OG images are ideally 1200x630 (approx 1.91:1)
    target_ratio = 1200 / 630
    
    if w / h > target_ratio:
        # Crop width
        new_w = int(h * target_ratio)
        left = (w - new_w) // 2
        img = img.crop((left, 0, left + new_w, h))
    else:
        # Crop height
        new_h = int(w / target_ratio)
        top = (h - new_h) // 2
        img = img.crop((0, top, w, top + new_h))
        
    img = img.resize((1200, 630), Image.Resampling.LANCZOS)
    img.save(output_path, 'JPEG', quality=90)
    print(f"Saved {output_path}")

if __name__ == "__main__":
    main()
