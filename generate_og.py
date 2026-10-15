import os
from PIL import Image, ImageDraw, ImageFont

def generate_og_image():
    width = 1200
    height = 630
    
    # Create image with deep navy background
    img = Image.new('RGB', (width, height), color=(9, 21, 38))
    draw = ImageDraw.Draw(img)
    
    # Draw double golden border
    gold_color = (212, 175, 55)
    gold_light = (247, 225, 158)
    gold_dark = (155, 124, 42)
    navy_card = (15, 34, 61)
    
    # Outer border
    draw.rectangle([20, 20, width - 20, height - 20], outline=gold_dark, width=2)
    draw.rectangle([28, 28, width - 28, height - 28], outline=gold_color, width=4)
    draw.rectangle([36, 36, width - 36, height - 36], outline=gold_dark, width=1)
    
    # Subtle inner card
    draw.rounded_rectangle([50, 50, width - 50, height - 50], radius=16, fill=navy_card, outline=(30, 58, 95), width=2)
    
    # Scales of Justice Icon (Left Side)
    # Center of scales
    cx = 200
    cy = 280
    
    # Shield background for emblem
    draw.ellipse([cx - 100, cy - 100, cx + 100, cy + 100], fill=(11, 23, 40), outline=gold_color, width=3)
    draw.ellipse([cx - 90, cy - 90, cx + 90, cy + 90], outline=gold_dark, width=1)
    
    # Vertical pillar
    draw.line([cx, cy - 60, cx, cy + 60], fill=gold_light, width=6)
    draw.ellipse([cx - 7, cy - 67, cx + 7, cy - 53], fill=gold_color)
    # Pedestal
    draw.rectangle([cx - 30, cy + 55, cx + 30, cy + 65], fill=gold_color)
    
    # Crossbeam
    draw.line([cx - 55, cy - 30, cx + 55, cy - 30], fill=gold_light, width=5)
    draw.ellipse([cx - 5, cy - 35, cx + 5, cy - 25], fill=gold_color)
    
    # Left Pan
    draw.line([cx - 50, cy - 30, cx - 65, cy + 10], fill=gold_color, width=2)
    draw.line([cx - 50, cy - 30, cx - 35, cy + 10], fill=gold_color, width=2)
    draw.chord([cx - 75, cy + 5, cx - 25, cy + 25], 0, 180, fill=gold_color)
    
    # Right Pan
    draw.line([cx + 50, cy - 30, cx + 35, cy + 10], fill=gold_color, width=2)
    draw.line([cx + 50, cy - 30, cx + 65, cy + 10], fill=gold_color, width=2)
    draw.chord([cx + 25, cy + 5, cx + 75, cy + 25], 0, 180, fill=gold_color)
    
    # Stars above scales
    draw.text((cx - 35, cy - 88), "★ ★ ★", fill=gold_light)

    # Text rendering using default or system font
    # Try loading system font, fallback to default
    def get_font(size):
        font_names = [
            "georgia.ttf", "times.ttf", "arial.ttf", "segoeui.ttf", 
            "C:\\Windows\\Fonts\\georgiab.ttf", "C:\\Windows\\Fonts\\georgia.ttf",
            "C:\\Windows\\Fonts\\times.ttf", "C:\\Windows\\Fonts\\arial.ttf"
        ]
        for name in font_names:
            try:
                return ImageFont.truetype(name, size)
            except Exception:
                continue
        return ImageFont.load_default()

    font_top = get_font(20)
    font_title = get_font(52)
    font_sub = get_font(26)
    font_tag = get_font(28)
    font_badge = get_font(18)
    font_contact = get_font(22)
    
    # Right Content Area
    tx = 350
    
    # Top Eyebrow
    draw.text((tx, 100), "OVER 20 YEARS OF PROVEN LEGAL EXPERIENCE", fill=gold_color, font=font_top)
    
    # Main Firm Title
    draw.text((tx, 140), "FAPOJUWO LAW, PLLC", fill=(255, 255, 255), font=font_title)
    
    # Subtitle
    draw.text((tx, 215), "ATTORNEYS AT LAW  •  RALEIGH, NORTH CAROLINA", fill=gold_light, font=font_sub)
    
    # Tagline / Headline
    draw.text((tx, 270), "Strong Defense. Trusted Advocacy.", fill=(255, 255, 255), font=font_tag)
    draw.text((tx, 310), "Criminal Defense  •  Traffic & Speeding  •  License Restoration", fill=(200, 215, 235), font=font_sub)
    
    # Gold separator line
    draw.line([tx, 360, width - 100, 360], fill=(60, 90, 130), width=2)
    
    # Trust Badges (Horizontal Pill Badges)
    badges = [
        ("NC Bar Member (2005)", 350),
        ("Wake County Defense", 600),
        ("90+ 5-Star Reviews", 840)
    ]
    for text, bx in badges:
        draw.rounded_rectangle([bx, 385, bx + 220, 425], radius=8, fill=(11, 23, 40), outline=gold_dark, width=1)
        draw.text((bx + 20, 396), text, fill=gold_light, font=font_badge)
        
    # Footer Section in Card
    draw.rectangle([50, 465, width - 50, height - 50], fill=(11, 21, 35))
    draw.line([50, 465, width - 50, 465], fill=gold_dark, width=1)
    
    # Office Address & Phone
    draw.text((90, 500), "📍 5 W Hargett St, Unit 415, Raleigh, NC 27601", fill=(220, 230, 245), font=font_contact)
    draw.text((780, 500), "📞 Call: (919) 521-8472", fill=gold_light, font=font_contact)
    draw.text((90, 545), "Attorney Olutosin O. \"Josiah\" Fapojuwo  |  Free Confidential Consultations", fill=(140, 165, 195), font=font_badge)
    
    os.makedirs('public', exist_ok=True)
    img.save('public/og-preview.png', 'PNG', optimize=True)
    img.save('public/og-preview.jpg', 'JPEG', quality=92, optimize=True)
    print("OG images created successfully: public/og-preview.png and public/og-preview.jpg")

if __name__ == '__main__':
    generate_og_image()
