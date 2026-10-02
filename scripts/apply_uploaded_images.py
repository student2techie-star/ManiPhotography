import os
from PIL import Image

def process_image(input_path, output_path):
    print(f"Processing {input_path} -> {output_path}")
    img = Image.open(input_path)
    if img.mode != 'RGB':
        img = img.convert('RGB')
        
    w, h = img.size
    target_ratio = 16 / 9
    
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
        
    # Resize for web
    img = img.resize((1200, 675), Image.Resampling.LANCZOS)
    
    ext = output_path.split('.')[-1].upper()
    if ext == 'JPG': ext = 'JPEG'
    img.save(output_path, ext, quality=90)
    print(f"Saved {output_path}")

def main():
    base_src = r"C:\Users\Somnath\.gemini\antigravity-ide\brain\dca4260e-be80-4476-9ca9-996ab5427fb8\.user_uploaded"
    src_images = [
        "media_1790739872178.png", # Couple
        "media_1790739883388.png", # Mangalyam
        "media_1790739921523.png", # Turmeric Kalasam
        "media_1790740002600.png", # Rice Throw 1
        "media_1790740038065.png"  # Rice Throw 2
    ]
    
    # 1. Update weddings folder
    wedding_dest = r"c:\Users\Somnath\OneDrive\Desktop\ManiPhotography\public\images\weddings"
    wedding_mapping = {
        "tamil_wedding_muhurtham.jpg": src_images[1],
        "thirukadaiyur-candid-wedding-moments.webp": src_images[3],
        "thirukadaiyur-kalyanam-mangalya-dharanam.webp": src_images[2],
        "thirukadaiyur-traditional-tamil-wedding-couple.webp": src_images[0],
        "thirukadaiyur-wedding-photography-muhurtham.webp": src_images[4],
        "thirukadaiyur-wedding-reception-stage-decor.webp": src_images[1],
        "thirukadaiyur-wedding-ritual-garland-exchange.webp": src_images[0]
    }
    
    for dest_name, src_name in wedding_mapping.items():
        process_image(os.path.join(base_src, src_name), os.path.join(wedding_dest, dest_name))
        
    # 2. Update pre-wedding folder
    pre_wedding_dest = r"c:\Users\Somnath\OneDrive\Desktop\ManiPhotography\public\images\pre-wedding"
    pre_wedding_mapping = {
        "thirukadaiyur-outdoor-romantic-couple-shoot.webp": src_images[0],
        "thirukadaiyur-pre-wedding-couple-photoshoot.webp": src_images[0],
        "thirukadaiyur-sunset-pre-wedding-photography.webp": src_images[0],
        "thirukadaiyur-traditional-attire-couple-portrait.webp": src_images[0]
    }
    
    for dest_name, src_name in pre_wedding_mapping.items():
        process_image(os.path.join(base_src, src_name), os.path.join(pre_wedding_dest, dest_name))

if __name__ == "__main__":
    main()
