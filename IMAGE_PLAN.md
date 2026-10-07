# The OpenHouse — Generated Image Plan

Create a small, coherent set of original editorial property photographs for the Kuwait-focused website. Use photorealistic-natural imagery with warm daylight, ivory and soft olive tones, natural materials, and believable contemporary Gulf residential architecture. Keep the images photographic and quietly aspirational rather than lavish or staged.

All images should be generated without text, logos, watermarks, identifiable people, signage, or recognizable real addresses. Listing photos are illustrative artwork and must remain labeled as sample listings in the site.

## Temporary online placeholders

Until the generated set is available, the website uses direct Unsplash CDN photos in its image slots. Unsplash says its free-library images may be used for commercial and non-commercial purposes without permission or required attribution; attribution is appreciated. Review the [Unsplash License](https://unsplash.com/license) and avoid images containing third-party marks or recognizable people in ways that suggest endorsement. These temporary photos are decorative examples, not photos of verified OpenHouse properties.

The Showings hero currently uses an exterior architecture photo to keep the temporary gallery focused on homes. The home hero, service cards, property cards, and property-management sections use other Unsplash interior photography. These online URLs can be replaced with the local generated files listed below without changing the page layout.

## Asset set

| Planned file | Placement | Composition |
| --- | --- | --- |
| `public/images/home-hero.webp` | Home hero | Wide, calm living space with strong natural light and open negative space; crop safely to a near-square desktop hero. |
| `public/images/showings-hero.webp` | Showings page hero | Welcoming contemporary home interior with depth and a clear focal point; landscape crop. |
| `public/images/property-management-hero.webp` | Property Management page hero | Considered, well-maintained residential interior with warm daylight and subtle material detail; landscape crop. |
| `public/images/property-care-detail.webp` | Property Management editorial section | Architectural detail that suggests thoughtful upkeep, such as a sunlit entry or carefully finished interior; portrait-friendly crop. |
| `public/images/listing-salmiya.webp` | Sample Salmiya listing card | Contemporary apartment interior with a modest city-home feel; landscape card crop. |
| `public/images/listing-abu-al-hasaniya.webp` | Sample Abu Al Hasaniya listing card | Airy family-sized residence with an outdoor/garden connection; landscape card crop. |
| `public/images/listing-kuwait-city.webp` | Sample Kuwait City listing card | Compact, contemporary urban apartment; landscape card crop. |

## Prompt set

Use these as separate image-generation prompts so each page has a distinct scene while sharing one visual direction:

1. **Home hero:** Photorealistic editorial interior photograph for a modern Kuwait real estate website. A calm, contemporary Gulf home with an open living area, limestone or pale plaster surfaces, natural wood, soft olive accents, filtered late-afternoon daylight, and an uncluttered lived-in feel. Wide composition with architectural depth, no people, no text, no logos, no watermark.
2. **Showings hero:** Photorealistic editorial photograph of a welcoming contemporary residence in Kuwait, an inviting living room connected to a bright interior passage, natural stone and wood finishes, soft warm daylight, understated styling. Landscape framing, no people, no text, no logos, no watermark.
3. **Property management hero:** Photorealistic editorial photograph of a thoughtfully maintained contemporary home interior, clean but lived-in, tactile natural materials, gentle window light, calm neutral and olive palette. Landscape framing with clear room geometry, no people, no text, no logos, no watermark.
4. **Property-care detail:** Photorealistic close editorial view of a well-kept residential entry or architectural finish in a modern Kuwait home, warm natural light revealing careful materials and maintenance, refined but ordinary residential scale. Portrait-friendly composition, no people, no text, no logos, no watermark.
5. **Sample Salmiya home:** Photorealistic editorial listing photograph of a comfortable contemporary apartment interior in Salmiya, Kuwait, neutral natural finishes and practical proportions, bright daylight, camera at room level. Landscape composition, no people, no text, no logos, no watermark.
6. **Sample Abu Al Hasaniya home:** Photorealistic editorial listing photograph of a spacious contemporary family residence in Abu Al Hasaniya, Kuwait, living space opening toward a small garden or planted courtyard, warm daylight, grounded residential styling. Landscape composition, no people, no text, no logos, no watermark.
7. **Sample Kuwait City home:** Photorealistic editorial listing photograph of a compact, well-designed urban apartment in Kuwait City, clean lines, daylight, a subtle city view without recognizable landmarks, natural wood and pale stone. Landscape composition, no people, no text, no logos, no watermark.

## Integration checklist

- Generate each asset separately and review it for architectural coherence, composition, and accidental text or watermarks.
- Save approved files under `public/images/` using the filenames above, then switch the CSS backgrounds and typed listing data to those local files.
- Preserve the existing image descriptions and sample-listing disclosures; do not imply generated scenes are actual available homes.
- Check wide desktop crops and narrow mobile crops before release.
