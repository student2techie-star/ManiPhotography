import os
import time
import urllib.request
from PIL import Image, ImageEnhance
from io import BytesIO

def process_and_save(url, output_path, idx):
    print(f"Downloading {url} to {output_path}")
    req = urllib.request.Request(url, headers={'User-Agent': f'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.12{idx} Safari/537.36'})
    try:
        with urllib.request.urlopen(req) as response:
            content = response.read()
            
        img = Image.open(BytesIO(content))
        if img.mode != 'RGB':
            img = img.convert('RGB')
            
        w, h = img.size
        target_ratio = 16 / 9
        if w / h > target_ratio:
            new_w = int(h * target_ratio)
            left = (w - new_w) // 2
            img = img.crop((left, 0, left + new_w, h))
        else:
            new_h = int(w / target_ratio)
            top = (h - new_h) // 2
            img = img.crop((0, top, w, top + new_h))
            
        img = img.resize((1200, 675), Image.Resampling.LANCZOS)
        
        # Color grading - Vibrant traditional look
        enhancer = ImageEnhance.Color(img)
        img = enhancer.enhance(1.2)
        
        r, g, b = img.split()
        r = r.point(lambda i: min(255, int(i * 1.1)))
        g = g.point(lambda i: min(255, int(i * 1.05)))
        img = Image.merge('RGB', (r, g, b))
        
        os.makedirs(os.path.dirname(output_path), exist_ok=True)
        ext = output_path.split('.')[-1].upper()
        if ext == 'JPG': ext = 'JPEG'
        img.save(output_path, ext, quality=90)
        print("Success.")
        return True
    except Exception as e:
        print(f"Failed: {e}")
        return False

def main():
    urls = [
        "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/09/Wedding-Moment-Tamil-culture-TamilNadu-India.jpg/1280px-Wedding-Moment-Tamil-culture-TamilNadu-India.jpg",
        "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0c/Hindu_Symbolic_Marriage.jpg/1024px-Hindu_Symbolic_Marriage.jpg",
        "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/38/Hindu_marriage_ceremony_offering.jpg/1280px-Hindu_marriage_ceremony_offering.jpg",
        "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a9/Ring_ceremony%2C_Indian_Hindu_wedding.jpg/1280px-Ring_ceremony%2C_Indian_Hindu_wedding.jpg",
        "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/69/%28A%29_Hindu_wedding%2C_Saptapadi_ritual_before_Agni_Yajna.jpg/1280px-%28A%29_Hindu_wedding%2C_Saptapadi_ritual_before_Agni_Yajna.jpg",
        "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/15/016_Celestial_Musician_%289213070982%29.jpg/1280px-016_Celestial_Musician_%289213070982%29.jpg",
        "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9d/Maithil_Vivah.jpg/1280px-Maithil_Vivah.jpg"
    ]
    
    target_dir = r"c:\Users\Somnath\OneDrive\Desktop\ManiPhotography\public\images\weddings"
    files_to_replace = [
        "tamil_wedding_muhurtham.jpg",
        "thirukadaiyur-candid-wedding-moments.webp",
        "thirukadaiyur-traditional-tamil-wedding-couple.webp",
        "thirukadaiyur-wedding-photography-muhurtham.webp",
        "thirukadaiyur-wedding-reception-stage-decor.webp",
        "thirukadaiyur-wedding-ritual-garland-exchange.webp",
        "thirukadaiyur-kalyanam-mangalya-dharanam.webp"
    ]
    
    url_idx = 0
    for i, filename in enumerate(files_to_replace):
        output_path = os.path.join(target_dir, filename)
        while url_idx < len(urls):
            success = process_and_save(urls[url_idx], output_path, url_idx)
            url_idx += 1
            if success:
                break
            time.sleep(1)

if __name__ == "__main__":
    main()
