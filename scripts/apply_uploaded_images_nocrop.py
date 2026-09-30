import os
from PIL import Image

def process_image(input_path, output_path):
    print(f"Processing {input_path} -> {output_path}")
    img = Image.open(input_path)
    if img.mode != 'RGB':
        img = img.convert('RGB')
        
    # Do NOT crop. Just resize if too large, preserving aspect ratio.
    img.thumbnail((1200, 1200), Image.Resampling.LANCZOS)
    
    ext = output_path.split('.')[-1].upper()
    if ext == 'JPG': ext = 'JPEG'
    img.save(output_path, ext, quality=90)
    print(f"Saved {output_path}")

def main():
    base_src = r"C:\Users\Somnath\.gemini\antigravity-ide\brain\dca4260e-be80-4476-9ca9-996ab5427fb8\.user_uploaded"
    
    # 1. Update weddings folder with UN-CROPPED unique images
    wedding_dest = r"c:\Users\Somnath\OneDrive\Desktop\ManiPhotography\public\images\weddings"
    wedding_mapping = {
        "tamil_wedding_muhurtham.jpg": "media_1790740321700.png",
        "thirukadaiyur-candid-wedding-moments.webp": "media_1790740002600.png",
        "thirukadaiyur-kalyanam-mangalya-dharanam.webp": "media_1790739921523.png",
        "thirukadaiyur-traditional-tamil-wedding-couple.webp": "media_1790739872178.png",
        "thirukadaiyur-wedding-photography-muhurtham.webp": "media_1790740038065.png",
        "thirukadaiyur-wedding-reception-stage-decor.webp": "media_1790740184946.png",
        "thirukadaiyur-wedding-ritual-garland-exchange.webp": "media_1790739883388.png"
    }
    
    for dest_name, src_name in wedding_mapping.items():
        process_image(os.path.join(base_src, src_name), os.path.join(wedding_dest, dest_name))

if __name__ == "__main__":
    main()
