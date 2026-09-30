import os
import re

def main():
    public_images_dir = r"c:\Users\Somnath\OneDrive\Desktop\ManiPhotography\public\images"
    src_dir = r"c:\Users\Somnath\OneDrive\Desktop\ManiPhotography\src"
    
    # Get all image files in public/images
    all_images = []
    for root, _, files in os.walk(public_images_dir):
        # Exclude 'downloaded' folder which is a scratch directory we made
        if 'downloaded' in root:
            continue
        for file in files:
            all_images.append(os.path.join(root, file))
            
    # Read all files in src/ and extract potential image filenames
    referenced_images = set()
    pattern = re.compile(r'images/([^"\'`\s]+)')
    
    for root, _, files in os.walk(src_dir):
        for file in files:
            if not file.endswith(('.ts', '.tsx', '.js', '.jsx', '.css', '.html')):
                continue
            file_path = os.path.join(root, file)
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    matches = pattern.findall(content)
                    for match in matches:
                        referenced_images.add(match)
            except Exception as e:
                print(f"Error reading {file_path}: {e}")

    # Map all_images to their relative path from public/images
    image_rel_paths = {img: os.path.relpath(img, public_images_dir).replace('\\', '/') for img in all_images}
    
    unused_images = []
    for img, rel_path in image_rel_paths.items():
        if rel_path not in referenced_images and not rel_path.endswith('.svg') and rel_path != 'og-image.jpg' and not rel_path.endswith('.mp4'):
            unused_images.append(img)

    print(f"Total images found: {len(all_images)}")
    print(f"Total references found: {len(referenced_images)}")
    print(f"Unused images to delete: {len(unused_images)}")

    for img in unused_images:
        print(f"Deleting: {img}")
        try:
            os.remove(img)
        except Exception as e:
            print(f"Failed to delete {img}: {e}")

if __name__ == "__main__":
    main()
