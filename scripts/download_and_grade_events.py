import os
import subprocess
from PIL import Image, ImageEnhance, ImageOps

def grade_and_save(temp_path, dest_webp_path, dest_jpg_path):
    img = Image.open(temp_path).convert("RGB")

    # 1. Subtle dynamic range auto-contrast
    img = ImageOps.autocontrast(img, cutoff=0.5)

    # 2. Vibrance / Color boost for traditional festive outfits, flowers & lights
    color_enhancer = ImageEnhance.Color(img)
    img = color_enhancer.enhance(1.2)

    # 3. Contrast boost
    contrast_enhancer = ImageEnhance.Contrast(img)
    img = contrast_enhancer.enhance(1.12)

    # 4. Warm tone for traditional South Indian festivities
    r, g, b = img.split()
    r = r.point(lambda i: min(255, int(i * 1.03)))
    g = g.point(lambda i: min(255, int(i * 1.01)))
    b = b.point(lambda i: max(0, int(i * 0.97)))
    img = Image.merge("RGB", (r, g, b))

    # 5. Fine sharpness for details
    sharp_enhancer = ImageEnhance.Sharpness(img)
    img = sharp_enhancer.enhance(1.25)

    # Save webp and jpg
    img.save(dest_webp_path, "WEBP", quality=90, method=6)
    img.save(dest_jpg_path, "JPEG", quality=92, optimize=True)
    print(f"Saved: {dest_webp_path} and {dest_jpg_path}")

events = [
    {
        "url": "https://upload.wikimedia.org/wikipedia/commons/5/54/Nadaswaram_being_performed_in_South_Indian_Marriage_JEG6722.JPG",
        "name": "thirukadaiyur-traditional-function-celebration"
    },
    {
        "url": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Bharata_Natyam_Performance_DS.jpg",
        "name": "thirukadaiyur-cultural-event-stage-photography"
    },
    {
        "url": "https://upload.wikimedia.org/wikipedia/commons/f/f2/A_Tamil_wedding_engagement_function.jpg",
        "name": "thirukadaiyur-birthday-party-event-photography"
    },
    {
        "url": "https://upload.wikimedia.org/wikipedia/commons/8/82/Indian_Tamil_wedding_ceremony.jpg",
        "name": "thirukadaiyur-traditional-reception-catering-setup"
    }
]

dest_dir = r"c:\Users\Somnath\OneDrive\Desktop\ManiPhotography\public\images\events"
os.makedirs(dest_dir, exist_ok=True)
temp_file = os.path.join(dest_dir, "temp_download.jpg")

for ev in events:
    print(f"Downloading {ev['name']}...")
    cmd = [
        "curl.exe", "-s", "-L",
        "-H", "User-Agent: ManiPhotography/1.0 (info@maniphotography.in)",
        ev["url"],
        "-o", temp_file
    ]
    subprocess.run(cmd, check=True)
    if os.path.exists(temp_file) and os.path.getsize(temp_file) > 5000:
        webp_path = os.path.join(dest_dir, f"{ev['name']}.webp")
        jpg_path = os.path.join(dest_dir, f"{ev['name']}.jpg")
        grade_and_save(temp_file, webp_path, jpg_path)
    else:
        print(f"Failed to download valid image for {ev['name']}")

if os.path.exists(temp_file):
    os.remove(temp_file)

print("All event images processed successfully!")
