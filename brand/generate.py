import os

OUT = "/home/claude/brand"

# ── Colour palette ──────────────────────────────────────────────
PRIMARY_DARK   = "#047857"   # deep jade
PRIMARY        = "#059669"   # jade green
PRIMARY_LIGHT  = "#34d399"   # mint
ACCENT         = "#C7632A"   # burnt orange accent
ACCENT_DARK    = "#A3501F"   # darker accent for light bg
BG_DARK        = "#0a0a0f"
BG_LIGHT       = "#f5f5f7"
TEXT_LIGHT     = "#ecfdf5"
TEXT_DARK      = "#052e16"

FONTS = "font-family=\"'Outfit',sans-serif\""

def grad_dark(uid):
    return f"""<defs>
    <linearGradient id="{uid}" x1="0" y1="1" x2="0.5" y2="0">
      <stop offset="0%"   stop-color="{PRIMARY}"/>
      <stop offset="100%" stop-color="{PRIMARY_LIGHT}"/>
    </linearGradient>
  </defs>"""

def grad_light(uid):
    return f"""<defs>
    <linearGradient id="{uid}" x1="0" y1="1" x2="0.5" y2="0">
      <stop offset="0%"   stop-color="{PRIMARY_DARK}"/>
      <stop offset="100%" stop-color="{PRIMARY}"/>
    </linearGradient>
  </defs>"""

def mountain(uid, ox=0, oy=0, scale=1):
    """Stacked chevrons at offset (ox,oy), scaled."""
    def p(coords):
        pts = []
        for i in range(0, len(coords), 2):
            pts.append(f"{coords[i]*scale+ox},{coords[i+1]*scale+oy}")
        return " ".join(pts)

    return f"""
  <path d="{p([26,8, 48,40, 4,40])}" fill="url(#{uid})" opacity="0.28"/>
  <path d="{p([26,20,42,44,10,44])}" fill="url(#{uid})" opacity="0.58"/>
  <path d="{p([26,32,36,48,16,48])}" fill="url(#{uid})"/>"""

def baseline(ox=0, oy=62, w=48, scale=1, colour=ACCENT):
    x1, x2 = ox, ox+w*scale
    y = oy*scale if scale != 1 else oy
    # secondary subtle line
    x2b = ox+(w-14)*scale
    yb  = (oy-6)*scale if scale != 1 else oy-6
    return f"""
  <line x1="{x1}" y1="{y}" x2="{x2}" y2="{y}" stroke="{colour}" stroke-width="{2*scale}" stroke-linecap="round"/>
  <line x1="{x1}" y1="{yb}" x2="{x2b}" y2="{yb}" stroke="{colour}" stroke-width="{1*scale}" opacity="0.35" stroke-linecap="round"/>"""


# ── 1. logo-dark.svg  (transparent bg, light text) ──────────────
svg = f"""<svg width="320" height="80" viewBox="0 0 320 80" xmlns="http://www.w3.org/2000/svg">
  <style>text{{ {FONTS}; }}</style>
  {grad_dark("gd")}
  {mountain("gd", ox=0, oy=4)}
  {baseline(ox=2, oy=66, w=48)}
  <text x="62" y="42" font-size="28" font-weight="800" fill="{TEXT_LIGHT}" letter-spacing="-0.5">TALENT</text>
  <text x="62" y="65" font-size="20" font-weight="300" fill="{ACCENT}" letter-spacing="6">SCALE</text>
</svg>"""
with open(f"{OUT}/logo-dark.svg","w") as f: f.write(svg)

# ── 2. logo-light.svg  (transparent bg, dark text) ──────────────
svg = f"""<svg width="320" height="80" viewBox="0 0 320 80" xmlns="http://www.w3.org/2000/svg">
  <style>text{{ {FONTS}; }}</style>
  {grad_light("gl")}
  {mountain("gl", ox=0, oy=4)}
  {baseline(ox=2, oy=66, w=48, colour=ACCENT_DARK)}
  <text x="62" y="42" font-size="28" font-weight="800" fill="{TEXT_DARK}" letter-spacing="-0.5">TALENT</text>
  <text x="62" y="65" font-size="20" font-weight="300" fill="{ACCENT_DARK}" letter-spacing="6">SCALE</text>
</svg>"""
with open(f"{OUT}/logo-light.svg","w") as f: f.write(svg)

# ── 3. logo-white.svg  (white rect bg, dark text) ───────────────
svg = f"""<svg width="320" height="80" viewBox="0 0 320 80" xmlns="http://www.w3.org/2000/svg">
  <style>text{{ {FONTS}; }}</style>
  <rect width="320" height="80" fill="#ffffff"/>
  {grad_light("gw")}
  {mountain("gw", ox=0, oy=4)}
  {baseline(ox=2, oy=66, w=48, colour=ACCENT_DARK)}
  <text x="62" y="42" font-size="28" font-weight="800" fill="{TEXT_DARK}" letter-spacing="-0.5">TALENT</text>
  <text x="62" y="65" font-size="20" font-weight="300" fill="{ACCENT_DARK}" letter-spacing="6">SCALE</text>
</svg>"""
with open(f"{OUT}/logo-white.svg","w") as f: f.write(svg)

# ── 4. logo-mono.svg  (all single dark colour) ───────────────────
svg = f"""<svg width="320" height="80" viewBox="0 0 320 80" xmlns="http://www.w3.org/2000/svg">
  <style>text{{ {FONTS}; }}</style>
  <path d="M26,12 L48,44 L4,44 Z" fill="{TEXT_DARK}" opacity="0.28"/>
  <path d="M26,24 L42,48 L10,48 Z" fill="{TEXT_DARK}" opacity="0.58"/>
  <path d="M26,36 L36,52 L16,52 Z" fill="{TEXT_DARK}"/>
  <line x1="2" y1="66" x2="50" y2="66" stroke="{TEXT_DARK}" stroke-width="2" stroke-linecap="round"/>
  <line x1="2" y1="60" x2="36" y2="60" stroke="{TEXT_DARK}" stroke-width="1" opacity="0.35" stroke-linecap="round"/>
  <text x="62" y="42" font-size="28" font-weight="800" fill="{TEXT_DARK}" letter-spacing="-0.5">TALENT</text>
  <text x="62" y="65" font-size="20" font-weight="300" fill="{TEXT_DARK}" letter-spacing="6">SCALE</text>
</svg>"""
with open(f"{OUT}/logo-mono.svg","w") as f: f.write(svg)

# ── Helper: icon mark paths centred in a 64×64 viewBox ──────────
def icon_body(uid, bg=None, corner=None):
    bg_el = ""
    if bg and corner is None:
        bg_el = f'<rect width="64" height="64" fill="{bg}"/>'
    elif bg and corner is not None:
        bg_el = f'<rect width="64" height="64" rx="{corner}" fill="{bg}"/>'
    # mountain centred: original is ~48w x ~56h, centre in 64×64
    # scale ~1.1, offset so it sits nicely
    return f"""  {bg_el}
  <path d="M32,6 L56,42 L8,42 Z" fill="url(#{uid})" opacity="0.28"/>
  <path d="M32,19 L50,46 L14,46 Z" fill="url(#{uid})" opacity="0.58"/>
  <path d="M32,30 L44,50 L20,50 Z" fill="url(#{uid})"/>
  <line x1="6"  y1="58" x2="58" y2="58" stroke="{ACCENT}" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="6"  y1="54" x2="44" y2="54" stroke="{ACCENT}" stroke-width="1.2" opacity="0.38" stroke-linecap="round"/>"""

# ── 5. icon-mark.svg  (transparent bg) ──────────────────────────
svg = f"""<svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  {grad_dark("im")}
  {icon_body("im")}
</svg>"""
with open(f"{OUT}/icon-mark.svg","w") as f: f.write(svg)

# ── 6. icon-mark-dark-bg.svg ─────────────────────────────────────
svg = f"""<svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  {grad_dark("imd")}
  {icon_body("imd", bg=BG_DARK)}
</svg>"""
with open(f"{OUT}/icon-mark-dark-bg.svg","w") as f: f.write(svg)

# ── 7. icon-mark-light-bg.svg ────────────────────────────────────
svg = f"""<svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  {grad_light("iml")}
  {icon_body("iml", bg=BG_LIGHT)}
</svg>"""
with open(f"{OUT}/icon-mark-light-bg.svg","w") as f: f.write(svg)

# ── 8. icon-mark-rounded.svg  (iOS-style app icon) ───────────────
svg = f"""<svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  {grad_dark("imr")}
  {icon_body("imr", bg=BG_DARK, corner=14)}
</svg>"""
with open(f"{OUT}/icon-mark-rounded.svg","w") as f: f.write(svg)

# ── 9. safari-pinned-tab.svg  (single-path, black only) ──────────
# Must be a single filled shape, no stroke colours
svg = f"""<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill="#000000" d="
    M32,4 L58,44 L50,44 L32,14 L14,44 L6,44 Z
    M32,17 L53,48 L46,48 L32,24 L18,48 L11,48 Z
    M32,28 L46,52 L18,52 Z
    M4,58 L60,58 L60,56 L4,56 Z
  "/>
</svg>"""
with open(f"{OUT}/safari-pinned-tab.svg","w") as f: f.write(svg)

# ── 10. og-image.svg  1200×630  (Open Graph) ─────────────────────
svg = f"""<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <style>text{{ {FONTS}; }}</style>
  <defs>
    <linearGradient id="ogGrad" x1="0" y1="1" x2="0.5" y2="0">
      <stop offset="0%"   stop-color="{PRIMARY}"/>
      <stop offset="100%" stop-color="{PRIMARY_LIGHT}"/>
    </linearGradient>
    <linearGradient id="ogBg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%"   stop-color="#0a0a10"/>
      <stop offset="100%" stop-color="#0e1a14"/>
    </linearGradient>
    <!-- subtle dot grid -->
    <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
      <circle cx="20" cy="20" r="1" fill="{PRIMARY}" opacity="0.12"/>
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#ogBg)"/>
  <rect width="1200" height="630" fill="url(#dots)"/>

  <!-- Decorative large mountain (bg, faded) -->
  <path d="M140,540 L420,120 L700,540 Z" fill="{PRIMARY}" opacity="0.04"/>

  <!-- Accent line strip at bottom -->
  <rect x="0" y="600" width="1200" height="4" fill="{ACCENT}" opacity="0.7"/>
  <rect x="0" y="596" width="600" height="2" fill="{ACCENT}" opacity="0.25"/>

  <!-- Icon mark -->
  <path d="M140,160 L280,390 L0,390 Z"   fill="url(#ogGrad)" opacity="0.22"/>
  <path d="M140,220 L258,400 L22,400 Z"  fill="url(#ogGrad)" opacity="0.55"/>
  <path d="M140,295 L210,415 L70,415 Z"  fill="url(#ogGrad)"/>
  <line x1="10"  y1="450" x2="270" y2="450" stroke="{ACCENT}" stroke-width="5" stroke-linecap="round"/>
  <line x1="10"  y1="440" x2="200" y2="440" stroke="{ACCENT}" stroke-width="2" opacity="0.35" stroke-linecap="round"/>

  <!-- Wordmark -->
  <text x="300" y="360" font-size="128" font-weight="800" fill="{TEXT_LIGHT}" letter-spacing="-4">TALENT</text>
  <text x="304" y="460" font-size="80"  font-weight="300" fill="{ACCENT}"      letter-spacing="28">SCALE</text>

  <!-- Tagline -->
  <text x="304" y="530" font-size="26" font-weight="300" fill="{PRIMARY_LIGHT}" opacity="0.7" letter-spacing="3">RECRUITMENT · INTELLIGENCE · GROWTH</text>
</svg>"""
with open(f"{OUT}/og-image.svg","w") as f: f.write(svg)

# ── 11. twitter-card.svg  1200×600 ────────────────────────────────
svg = f"""<svg width="1200" height="600" viewBox="0 0 1200 600" xmlns="http://www.w3.org/2000/svg">
  <style>text{{ {FONTS}; }}</style>
  <defs>
    <linearGradient id="twGrad" x1="0" y1="1" x2="0.5" y2="0">
      <stop offset="0%"   stop-color="{PRIMARY}"/>
      <stop offset="100%" stop-color="{PRIMARY_LIGHT}"/>
    </linearGradient>
    <linearGradient id="twBg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%"   stop-color="#08080e"/>
      <stop offset="100%" stop-color="#0c1812"/>
    </linearGradient>
    <pattern id="twdots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
      <circle cx="20" cy="20" r="1" fill="{PRIMARY}" opacity="0.1"/>
    </pattern>
  </defs>

  <rect width="1200" height="600" fill="url(#twBg)"/>
  <rect width="1200" height="600" fill="url(#twdots)"/>

  <!-- Large background mountain -->
  <path d="M980,600 L1200,200 L1200,600 Z" fill="{PRIMARY}" opacity="0.05"/>

  <!-- Left icon mark -->
  <path d="M100,130 L230,360 L-30,360 Z"  fill="url(#twGrad)" opacity="0.22"/>
  <path d="M100,190 L214,368 L-14,368 Z"  fill="url(#twGrad)" opacity="0.55"/>
  <path d="M100,265 L168,382 L32,382 Z"   fill="url(#twGrad)"/>
  <line x1="-20" y1="420" x2="220" y2="420" stroke="{ACCENT}" stroke-width="4.5" stroke-linecap="round"/>
  <line x1="-20" y1="411" x2="160" y2="411" stroke="{ACCENT}" stroke-width="1.8" opacity="0.35" stroke-linecap="round"/>

  <!-- Wordmark -->
  <text x="260" y="330" font-size="120" font-weight="800" fill="{TEXT_LIGHT}" letter-spacing="-4">TALENT</text>
  <text x="264" y="430" font-size="76"  font-weight="300" fill="{ACCENT}"      letter-spacing="26">SCALE</text>

  <!-- Bottom accent bar -->
  <rect x="0" y="572" width="1200" height="4" fill="{ACCENT}" opacity="0.65"/>
  <rect x="0" y="568" width="500"  height="2" fill="{ACCENT}" opacity="0.22"/>

  <!-- URL hint -->
  <text x="264" y="500" font-size="24" font-weight="300" fill="{PRIMARY_LIGHT}" opacity="0.55" letter-spacing="3">talentscale.io</text>
</svg>"""
with open(f"{OUT}/twitter-card.svg","w") as f: f.write(svg)

print("All SVG files written.")
