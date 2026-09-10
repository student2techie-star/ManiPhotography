import os
import json
from PIL import Image

BASE_DIR = r"c:\Users\Somnath\OneDrive\Desktop\ManiPhotography\public\images"

# Mapping of existing file relative paths to new SEO-optimized WebP filenames
MAPPING = {
    # Weddings
    r"weddings\wedding-01.jpg": r"weddings\thirukadaiyur-wedding-photography-muhurtham.webp",
    r"weddings\wedding-02.jpg": r"weddings\thirukadaiyur-traditional-tamil-wedding-couple.webp",
    r"weddings\wedding-03.jpg": r"weddings\thirukadaiyur-kalyanam-mangalya-dharanam.webp",
    r"weddings\wedding-04.jpg": r"weddings\thirukadaiyur-wedding-reception-stage-decor.webp",
    r"weddings\wedding-05.jpg": r"weddings\thirukadaiyur-candid-wedding-moments.webp",
    r"weddings\wedding-06.jpg": r"weddings\thirukadaiyur-wedding-ritual-garland-exchange.webp",

    # Tamil Weddings / Ceremonies (60th, 70th, 80th)
    r"tamil-weddings\tamil-01.jpg": r"tamil-weddings\thirukadaiyur-60th-birthday-shashtiapthapoorthi-photography.webp",
    r"tamil-weddings\tamil-02.jpg": r"tamil-weddings\thirukadaiyur-70th-birthday-bhimaratha-shanthi-photography.webp",
    r"tamil-weddings\tamil-03.jpg": r"tamil-weddings\thirukadaiyur-60th-wedding-kalasa-abhishekam.webp",
    r"tamil-weddings\tamil-04.jpg": r"tamil-weddings\thirukadaiyur-traditional-tamil-homam-ceremony.webp",
    r"tamil-weddings\tamil-05.jpg": r"tamil-weddings\thirukadaiyur-60th-marriage-family-blessings.webp",

    # Temple
    r"temple\temple-01.jpg": r"temple\thirukadaiyur-amritaghateswarar-abirami-temple-photography.webp",
    r"temple\temple-02.jpg": r"temple\thirukadaiyur-temple-courtyard-candid-portrait.webp",
    r"temple\temple-03.jpg": r"temple\thirukadaiyur-temple-sanctum-blessings-shoot.webp",

    # Pre-wedding
    r"pre-wedding\pre-wedding-01.jpg": r"pre-wedding\thirukadaiyur-pre-wedding-couple-photoshoot.webp",
    r"pre-wedding\pre-wedding-02.jpg": r"pre-wedding\thirukadaiyur-outdoor-romantic-couple-shoot.webp",
    r"pre-wedding\pre-wedding-03.jpg": r"pre-wedding\thirukadaiyur-sunset-pre-wedding-photography.webp",
    r"pre-wedding\pre-wedding-04.jpg": r"pre-wedding\thirukadaiyur-traditional-attire-couple-portrait.webp",

    # Baby Shower / Seemantham
    r"baby-shower\baby-shower-01.jpg": r"baby-shower\thirukadaiyur-seemantham-baby-shower-photography.webp",
    r"baby-shower\baby-shower-02.jpg": r"baby-shower\thirukadaiyur-bangles-ceremony-baby-shower-moments.webp",
    r"baby-shower\baby-shower-03.jpg": r"baby-shower\thirukadaiyur-maternity-family-blessings-shoot.webp",

    # House Warming / Grihapravesam
    r"house-warming\house-warming-01.jpg": r"house-warming\thirukadaiyur-grihapravesam-house-warming-photography.webp",
    r"house-warming\house-warming-02.jpg": r"house-warming\thirukadaiyur-milk-boiling-grihapravesam-ceremony.webp",
    r"house-warming\house-warming-03.jpg": r"house-warming\thirukadaiyur-new-home-pooja-family-portrait.webp",

    # Family
    r"family\family-01.jpg": r"family\thirukadaiyur-multi-generational-family-portrait.webp",
    r"family\family-02.jpg": r"family\thirukadaiyur-grandparents-children-family-photoshoot.webp",
    r"family\family-03.jpg": r"family\thirukadaiyur-family-reunion-event-photography.webp",

    # Events
    r"events\event-01.jpg": r"events\thirukadaiyur-traditional-function-celebration.webp",
    r"events\event-02.jpg": r"events\thirukadaiyur-cultural-event-stage-photography.webp",
    r"events\event-03.jpg": r"events\thirukadaiyur-birthday-party-event-photography.webp",
    r"events\event-04.jpg": r"events\thirukadaiyur-traditional-reception-catering-setup.webp",

    # Guides (formerly 900KB PNGs!)
    r"guides\sadabishegam-80th.png": r"guides\thirukadaiyur-80th-birthday-sadabishegam-photography.webp",
    r"guides\shashtiapthapoorthi-60th.png": r"guides\thirukadaiyur-60th-birthday-shashtiapthapoorthi-guide.webp",
    r"guides\thirunallar-temple.png": r"guides\thirunallar-saneeswarar-temple-photography-guide.webp",

    # About
    r"about\about-team.jpg": r"about\thirukadaiyur-mani-photography-team.webp",
    r"about\photographer-01.jpg": r"about\thirukadaiyur-lead-photographer-mani.webp",
    r"about\photographer-02.jpg": r"about\thirukadaiyur-candid-photographer-equipment.webp",

    # Main Posters
    r"thirukadaiyur-video-poster.jpg": r"thirukadaiyur-video-poster.webp",
    r"og-image.jpg": r"og-image.jpg" # keep og-image.jpg for fallback social parsers as well as og-image.webp
}

results = []

for rel_old, rel_new in MAPPING.items():
    old_path = os.path.join(BASE_DIR, rel_old)
    new_path = os.path.join(BASE_DIR, rel_new)

    if os.path.exists(old_path):
        orig_size = os.path.getsize(old_path)
        with Image.open(old_path) as im:
            if im.mode in ('RGBA', 'LA'):
                background = Image.new('RGB', im.size, (255, 255, 255))
                background.paste(im, mask=im.split()[-1])
                im = background
            elif im.mode != 'RGB':
                im = im.convert('RGB')
            im.save(new_path, 'WEBP', quality=82, method=6)
        
        new_size = os.path.getsize(new_path)
        savings = (1 - (new_size / orig_size)) * 100
        results.append({
            "old": rel_old.replace('\\', '/'),
            "new": rel_new.replace('\\', '/'),
            "orig_kb": round(orig_size / 1024, 1),
            "new_kb": round(new_size / 1024, 1),
            "savings_pct": round(savings, 1)
        })
    else:
        print(f"File not found: {old_path}")

print(json.dumps(results, indent=2))
