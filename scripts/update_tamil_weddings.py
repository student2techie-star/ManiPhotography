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
    base_src = r"C:\Users\Somnath\.gemini\antigravity-ide\brain\dca4260e-be80-4476-9ca9-996ab5427fb8\.user_uploaded"
    
    dest_dir = r"c:\Users\Somnath\OneDrive\Desktop\ManiPhotography\public\images\tamil-weddings"
    
    mapping = {
        "tamil_60th_marriage.jpg": "media_1790740321700.png",
        "thirukadaiyur-60th-birthday-shashtiapthapoorthi-photography.webp": "media_1790740002600.png",
        "thirukadaiyur-60th-marriage-family-blessings.webp": "media_1790740466642.png",
        "thirukadaiyur-60th-wedding-kalasa-abhishekam.webp": "media_1790739921523.png",
        "thirukadaiyur-70th-birthday-bhimaratha-shanthi-photography.webp": "media_1790740038065.png",
        "thirukadaiyur-traditional-tamil-homam-ceremony.webp": "media_1790739872178.png"
    }
    
    for dest_name, src_name in mapping.items():
        process_image(os.path.join(base_src, src_name), os.path.join(dest_dir, dest_name))

if __name__ == "__main__":
    main()
