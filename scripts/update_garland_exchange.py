import os
from PIL import Image

def process_image(input_path, output_path):
    print(f"Processing {input_path} -> {output_path}")
    img = Image.open(input_path)
    if img.mode != 'RGB':
        img = img.convert('RGB')
        
    img.thumbnail((1200, 1200), Image.Resampling.LANCZOS)
    
    ext = output_path.split('.')[-1].upper()
    if ext == 'JPG': ext = 'JPEG'
    img.save(output_path, ext, quality=90)
    print(f"Saved {output_path}")

def main():
    input_img = r"C:\Users\Somnath\.gemini\antigravity-ide\brain\dca4260e-be80-4476-9ca9-996ab5427fb8\.user_uploaded\media_1790740466642.png"
    output_img = r"c:\Users\Somnath\OneDrive\Desktop\ManiPhotography\public\images\weddings\thirukadaiyur-wedding-ritual-garland-exchange.webp"
    
    process_image(input_img, output_img)

if __name__ == "__main__":
    main()
