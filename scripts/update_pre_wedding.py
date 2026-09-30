import os
from PIL import Image

def process_image(input_path, output_path):
    print(f"Processing {input_path} -> {output_path}")
    img = Image.open(input_path)
    if img.mode != 'RGB':
        img = img.convert('RGB')
        
    # Resize keeping aspect ratio, NO cropping!
    img.thumbnail((1200, 1200), Image.Resampling.LANCZOS)
    
    ext = output_path.split('.')[-1].upper()
    if ext == 'JPG': ext = 'JPEG'
    img.save(output_path, ext, quality=90)
    print(f"Saved {output_path}")

def main():
    base_src = r"C:\Users\Somnath\.gemini\antigravity-ide\brain\dca4260e-be80-4476-9ca9-996ab5427fb8\.user_uploaded"
    
    src_images = [
        "media_1790740779912.png",
        "media_1790740745896.png",
        "media_1790740723104.png",
        "media_1790740649389.png"
    ]
    
    pre_wedding_dest = r"c:\Users\Somnath\OneDrive\Desktop\ManiPhotography\public\images\pre-wedding"
    pre_wedding_mapping = {
        "thirukadaiyur-outdoor-romantic-couple-shoot.webp": src_images[0],
        "thirukadaiyur-pre-wedding-couple-photoshoot.webp": src_images[1],
        "thirukadaiyur-sunset-pre-wedding-photography.webp": src_images[2],
        "thirukadaiyur-traditional-attire-couple-portrait.webp": src_images[3]
    }
    
    for dest_name, src_name in pre_wedding_mapping.items():
        process_image(os.path.join(base_src, src_name), os.path.join(pre_wedding_dest, dest_name))

if __name__ == "__main__":
    main()
