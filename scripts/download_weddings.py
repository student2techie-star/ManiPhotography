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
        
        # Color grading
        enhancer = ImageEnhance.Color(img)
        img = enhancer.enhance(1.2)
        
        r, g, b = img.split()
        r = r.point(lambda i: min(255, int(i * 1.1)))
        g = g.point(lambda i: min(255, int(i * 1.05)))
        img = Image.merge('RGB', (r, g, b))
        
        os.makedirs(os.path.dirname(output_path), exist_ok=True)
        ext = output_path.split('.')[-1].upper()
        if ext == 'JPG': ext = 'JPEG'
        img.save(output_path, ext, quality=85)
        print("Success.")
        return True
    except Exception as e:
        print(f"Failed: {e}")
        return False

def main():
    urls = [
        "https://upload.wikimedia.org/wikipedia/commons/f/fc/Bengali_Hindu_wedding_DSCN1106_14.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/9/90/Hindu_wedding.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/0/07/Indian_wedding_Delhi.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/6/6f/Bride_during_a_Hindu_wedding.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/4/4b/Iyer_Wedding.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/8/8c/Tamil_wedding.jpg"
    ]
    
    target_dir = r"c:\Users\Somnath\OneDrive\Desktop\ManiPhotography\public\images\weddings"
    files_to_replace = [
        "thirukadaiyur-kalyanam-mangalya-dharanam.webp",
        "thirukadaiyur-traditional-tamil-wedding-couple.webp",
        "thirukadaiyur-wedding-photography-muhurtham.webp",
        "thirukadaiyur-wedding-reception-stage-decor.webp",
        "thirukadaiyur-wedding-ritual-garland-exchange.webp"
    ]
    
    url_idx = 0
    for i, filename in enumerate(files_to_replace):
        output_path = os.path.join(target_dir, filename)
        while url_idx < len(urls):
            time.sleep(2)  # delay to avoid 429
            success = process_and_save(urls[url_idx], output_path, url_idx)
            url_idx += 1
            if success:
                break

if __name__ == "__main__":
    main()
