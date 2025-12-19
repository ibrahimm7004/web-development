# pip install requests beautifulsoup4
import os
import re
import requests
from bs4 import BeautifulSoup

URL = "https://www.bostonneurobehavioral.com/conditions"
SAVE_DIR = r"C:\Users\hp\Desktop\github-projects\bnba-redesign\images\conditions"

os.makedirs(SAVE_DIR, exist_ok=True)

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                  "AppleWebKit/537.36 (KHTML, like Gecko) "
                  "Chrome/120.0.0.0 Safari/537.36"
}


def clean_title(title: str) -> str:
    """Format condition name into proper file naming convention."""
    title = title.strip()
    parts = re.split(r"[\s\-]+", title)
    formatted = "-".join(
        [w if w.isupper() else w.capitalize() for w in parts]
    )
    return formatted + ".webp"


def get_highest_res_url(img_tag):
    """
    Parse srcset/data-srcset and return the highest-resolution URL.
    Fallback to src or data-src if srcset missing.
    """
    for attr in ["data-srcset", "srcset"]:
        srcset = img_tag.get(attr)
        if srcset:
            # Split by comma, then pick the one with the largest width
            candidates = [s.strip().split(" ")[0] for s in srcset.split(",")]
            if candidates:
                # Usually last is highest res
                return candidates[-1]
    # fallback
    return img_tag.get("data-src") or img_tag.get("src")


def main():
    print("Fetching conditions page...")
    res = requests.get(URL, headers=HEADERS)
    res.raise_for_status()
    soup = BeautifulSoup(res.text, "html.parser")

    articles = soup.find_all("article", class_="item section-item")
    print(f"Found {len(articles)} condition entries.")

    for art in articles:
        # Extract condition name
        h3 = art.find("h3")
        if not h3:
            continue
        condition = h3.get_text(strip=True)

        # Extract main image (first <img> in pic-side div)
        img_tag = art.find("div", class_="pic-side")
        if not img_tag:
            continue
        img = img_tag.find("img")
        if not img:
            continue

        img_url = get_highest_res_url(img)
        if not img_url:
            continue

        filename = clean_title(condition)
        save_path = os.path.join(SAVE_DIR, filename)

        try:
            print(f"Downloading {condition} → {filename}")
            r = requests.get(img_url, headers=HEADERS, stream=True)
            r.raise_for_status()
            with open(save_path, "wb") as f:
                for chunk in r.iter_content(8192):
                    f.write(chunk)
        except Exception as e:
            print(f"❌ Failed to download {condition}: {e}")

    print(f"\n✅ Done! Full-resolution images saved to:\n{SAVE_DIR}")


if __name__ == "__main__":
    main()
