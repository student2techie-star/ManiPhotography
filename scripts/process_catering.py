import os
import urllib.request
from PIL import Image, ImageEnhance, ImageFilter
from io import BytesIO

def download_and_process():
    url = "https://upload.wikimedia.org/wikipedia/commons/f/f1/Kerala_Sadhya.jpg"
    
    print(f"Downloading {url}...")
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        with urllib.request.urlopen(req) as response:
            content = response.read()
            
        img = Image.open(BytesIO(content))
        
        # Convert to RGB if needed
        if img.mode != 'RGB':
            img = img.convert('RGB')
            
        # Crop to 16:9
        w, h = img.size
        target_ratio = 16 / 9
        current_ratio = w / h
        
        if current_ratio > target_ratio:
            # Too wide, crop width
            new_w = int(h * target_ratio)
            left = (w - new_w) // 2
            img = img.crop((left, 0, left + new_w, h))
        else:
            # Too tall, crop height
            new_h = int(w / target_ratio)
            top = (h - new_h) // 2
            img = img.crop((0, top, w, top + new_h))
            
        # Resize to standard size (e.g. 1920x1080)
        img = img.resize((1920, 1080), Image.Resampling.LANCZOS)
        
        # Color grading
        # 1. Enhance color (vibrancy)
        color_enhancer = ImageEnhance.Color(img)
        img = color_enhancer.enhance(1.2)
        
        # 2. Add warmth (increase red/yellow)
        r, g, b = img.split()
        r = r.point(lambda i: min(255, int(i * 1.1)))
        g = g.point(lambda i: min(255, int(i * 1.05)))
        img = Image.merge('RGB', (r, g, b))
        
        # 3. Enhance contrast
        contrast_enhancer = ImageEnhance.Contrast(img)
        img = contrast_enhancer.enhance(1.1)
        
        # 4. Sharpen
        img = img.filter(ImageFilter.UnsharpMask(radius=2, percent=150, threshold=3))
        
        # Save as webp
        output_path = r"c:\Users\Somnath\OneDrive\Desktop\ManiPhotography\public\images\events\thirukadaiyur-traditional-reception-catering-setup.webp"
        os.makedirs(os.path.dirname(output_path), exist_ok=True)
        img.save(output_path, 'WEBP', quality=90)
        print(f"Saved processed image to {output_path}")
    except Exception as e:
        print(f"Failed to download or process image: {e}")

if __name__ == "__main__":
    download_and_process()
