// All 13 nail conditions data

export interface Condition {
  code: string
  patternCode: string
  name: string
  slug: string
  label: string
  headline: string
  intro: string
  body: string
  ctaLabel: string
  ctaSubtext: string
  symptoms?: string[]
  causes?: string[]
  recommendations?: string[]
}

export const CONDITIONS: Record<string, Condition> = {
  ftd: {
    code: 'FTD',
    patternCode: 'P1',
    name: 'Fungal / Thick, Discolored Toenails',
    slug: 'ftd',
    label: 'YOUR RESULTS: FUNGAL / THICK, DISCOLORED NAILS',
    headline: 'Your answers fit a fungal colonization pattern—the most common cause of thick, discolored toenails',
    intro: 'Your answers show classic signs: thickening, discoloration, possibly debris buildup or odor. This isn\'t just cosmetic—fungal nail infections affect 14% of adults and don\'t resolve on their own.',
    ctaLabel: 'See Your 3-Step Fungal Clearing Plan (Save 52%)',
    ctaSubtext: 'Based on your answers, here\'s the routine designed for fungal nail patterns.',
    body: `**Why over-the-counter creams stop working after a few weeks**

You told us you have thick, discolored nails—possibly with debris buildup or a faint odor. Most people try drugstore antifungals first. They seem to help for a week or two... then the fungus comes roaring back.

**What to do in the next 7 days**

1. **Stop the moisture trap** — Fungi thrive in warm, moist environments. Change socks twice daily.

2. **Start your penetrating treatment** — On the next page, we'll show you a 3-step system that actually reaches fungus inside the nail.

3. **Protect your other nails** — Fungus spreads. Don't share nail clippers.`,
    symptoms: ['Thickened nails', 'Yellow or brown discoloration', 'Crumbly or brittle edges', 'Distorted nail shape', 'Slight odor'],
    causes: ['Warm, moist environments', 'Damaged nail bed', 'Weakened immune system', 'Poor circulation', 'Age-related changes'],
    recommendations: ['Keep feet dry', 'Wear breathable footwear', 'Disinfect nail tools', 'Use antifungal treatments consistently'],
  },
  nps: {
    code: 'NPS',
    patternCode: 'P2',
    name: 'Nail Psoriasis / Psoriatic Nail Changes',
    slug: 'nps',
    label: 'YOUR RESULTS: NAIL PSORIASIS PATTERN',
    headline: 'Your answers fit a psoriatic nail pattern—often mistaken for fungus but requiring completely different treatment',
    intro: 'Your answers show signs that point to nail psoriasis: pitting, oil-drop discoloration, possible lifting, and a history of psoriasis or eczema.',
    ctaLabel: 'See Your Psoriatic Nail Recovery Plan (Save 52%)',
    ctaSubtext: 'Based on your answers, here\'s what actually works for nail psoriasis.',
    body: `**Why antifungals haven't worked for you**

Nail psoriasis looks similar to fungal infection, but the cause is completely different. Your immune system is overreacting—and you need to calm it down, not kill invaders.

**What to do in the next 7 days**

1. **Stop harsh nail treatments** — Avoid nail hardeners and acetone removers.

2. **Start barrier-first care** — Calms inflammation AND rebuilds the nail barrier.

3. **Talk to your dermatologist** — If you have skin psoriasis, your nail symptoms might respond to the same treatment.`,
    symptoms: ['Tiny dents (pitting)', 'Nail separation from bed', 'Discoloration (yellow-brown)', 'Thickening', 'Crumbling edges'],
    causes: ['Autoimmune response', 'Genetic factors', 'Stress triggers', 'Skin trauma', 'Infections'],
    recommendations: ['Moisturize regularly', 'Avoid nail trauma', 'Keep nails short', 'Use gentle nail care products'],
  },
  csd: {
    code: 'CSD',
    patternCode: 'P3',
    name: 'Cosmetic / Salon-Induced Nail Damage',
    slug: 'csd',
    label: 'YOUR RESULTS: SALON / COSMETIC DAMAGE PATTERN',
    headline: 'Your answers fit a pattern of nail damage from gel manicures, acrylics, or harsh cosmetic treatments',
    intro: 'Your answers show brittle, peeling, or weak nails—combined with a history of frequent salon treatments.',
    ctaLabel: 'See Your Nail Recovery Plan (Save 52%)',
    ctaSubtext: 'Based on your answers, here\'s how to rebuild salon-damaged nails.',
    body: `**Why your nails haven't bounced back**

UV lamp exposure damages nail cells. Acetone soaks strip natural oils. The average nail takes 6 months to grow from base to tip.

**What to do in the next 7 days**

1. **Take a salon break** — Avoid gel, acrylics, and harsh treatments for at least 3 months.

2. **Start intensive moisture** — Repairs keratin bonds and rebuilds nail strength.

3. **Protect during growth** — Use a gentle nail hardener to protect new growth.`,
    symptoms: ['Thin, weak nails', 'Peeling layers', 'White spots', 'Ridges', 'Brittleness'],
    causes: ['Acrylic/gel applications', 'Harsh acetone removers', 'Improper removal techniques', 'Frequent polish changes', 'Dehydration'],
    recommendations: ['Take breaks from polish', 'Use gentle removers', 'Hydrate nail beds', 'Apply strengthening treatments'],
  },
  agn: {
    code: 'AGN',
    patternCode: 'P4',
    name: 'Age-Related Nail Changes',
    slug: 'agn',
    label: 'YOUR RESULTS: AGE-RELATED NAIL CHANGES',
    headline: 'Your answers fit a pattern of natural nail changes that affect 35% of adults over 60',
    intro: 'Your answers show brittle, ridged, or slow-growing nails—combined with your age bracket.',
    ctaLabel: 'See Your Age-Defying Nail Plan (Save 52%)',
    ctaSubtext: 'Based on your answers, here\'s how to support aging nails.',
    body: `**Why your nails changed with age**

Reduced blood flow slows growth. Decreased natural oils make nails drier. These changes are natural—but manageable.

**What to do in the next 7 days**

1. **Hydrate from inside and out** — Drink more water and use nail oil daily.

2. **Protect during tasks** — Wear gloves for cleaning and dishes.

3. **Start a supportive routine** — Designed for mature nail health.`,
    symptoms: ['Slower growth', 'Vertical ridges', 'Increased brittleness', 'Yellowing', 'Thickening'],
    causes: ['Reduced circulation', 'Decreased cell turnover', 'Nutritional changes', 'Medication effects', 'Cumulative wear'],
    recommendations: ['Stay hydrated', 'Eat nutrient-rich foods', 'Protect nails from trauma', 'Regular gentle filing'],
  },
  tnf: {
    code: 'TNF',
    patternCode: 'P5',
    name: 'Thick Nails (Non-Fungal)',
    slug: 'tnf',
    label: 'YOUR RESULTS: THICK NAILS (NON-FUNGAL)',
    headline: 'Your answers suggest thickened nails without clear fungal signs—a pattern called onychauxis',
    intro: 'Your nails are thick and hard to trim, but you don\'t have the odor, debris, or discoloration typical of fungal infection.',
    ctaLabel: 'See Your Nail Management Plan (Save 52%)',
    ctaSubtext: 'Based on your answers, here\'s how to manage thickened nails.',
    body: `**Why your nails thickened without fungus**

Thickened nails can result from repeated trauma, poor circulation, or skin conditions. Unlike fungal infection, this pattern doesn't spread.

**What to do in the next 7 days**

1. **Soften before trimming** — Soak nails in warm water for 10-15 minutes before cutting.

2. **Use proper tools** — Heavy-duty nail clippers designed for thick nails.

3. **See a podiatrist if needed** — Very thick nails may need professional trimming.`,
    symptoms: ['Nail thickening', 'Difficulty trimming', 'Curved growth', 'Pressure sensitivity', 'Normal color'],
    causes: ['Tight footwear', 'Sports trauma', 'Repetitive pressure', 'Injury history', 'Biomechanical issues'],
    recommendations: ['Wear properly fitted shoes', 'Trim nails regularly', 'Use softening agents', 'Protect from further trauma'],
  },
  bsp: {
    code: 'BSP',
    patternCode: 'P6',
    name: 'Brittle / Splitting / Peeling Nails',
    slug: 'bsp',
    label: 'YOUR RESULTS: BRITTLE / SPLITTING / PEELING NAILS',
    headline: 'Your answers fit a pattern of weak, brittle nails that break, split, or peel easily',
    intro: 'Your nails lack the strength and flexibility of healthy keratin. This affects about 20% of the population.',
    ctaLabel: 'See Your Nail Strengthening Plan (Save 52%)',
    ctaSubtext: 'Based on your answers, here\'s how to rebuild nail strength.',
    body: `**Why your nails won't stay strong**

Keratin bonds are weak. Nails are too dry. Repeated wetting/drying cycles damage the nail plate.

**What to do in the next 7 days**

1. **Stop the wet-dry cycle** — Wear gloves for dishes and cleaning.

2. **Moisturize strategically** — Apply nail oil 2-3x daily.

3. **Start from the inside** — Consider biotin supplementation.`,
    symptoms: ['Easy breakage', 'Horizontal splits', 'Peeling layers', 'Rough texture', 'Slow growth'],
    causes: ['Water overexposure', 'Low humidity', 'Nutritional gaps', 'Thyroid issues', 'Chemical exposure'],
    recommendations: ['Wear gloves for wet work', 'Moisturize daily', 'Take biotin supplements', 'Avoid harsh chemicals'],
  },
  oly: {
    code: 'OLY',
    patternCode: 'P7',
    name: 'Nail Lifting from the Bed',
    slug: 'oly',
    label: 'YOUR RESULTS: NAIL LIFTING / SEPARATION PATTERN',
    headline: 'Your answers fit a pattern where the nail is separating from the nail bed—called onycholysis',
    intro: 'Your nail is lifting away from the pink nail bed underneath, creating a white or yellowish gap.',
    ctaLabel: 'See Your Nail Reattachment Plan (Save 52%)',
    ctaSubtext: 'Based on your answers, here\'s how to help your nail reconnect.',
    body: `**Why your nail is separating**

Onycholysis can be triggered by trauma, moisture trapped under the nail, or chemical exposure.

**What to do in the next 7 days**

1. **Keep it dry** — Moisture under the lifted nail = infection risk.

2. **Don't peel or trim** — Let the separation grow out naturally.

3. **Protect from further trauma** — Avoid activities that catch the nail.`,
    symptoms: ['White or yellow appearance', 'Nail lifting from bed', 'Space under nail', 'Sensitivity', 'Irregular nail edge'],
    causes: ['Trauma', 'Allergic reactions', 'Fungal infection', 'Psoriasis', 'Thyroid disorders'],
    recommendations: ['Keep nails short', 'Avoid moisture under nail', 'Protect from further injury', 'Seek underlying cause treatment'],
  },
  prn: {
    code: 'PRN',
    patternCode: 'P8',
    name: 'Red, Swollen Skin Around the Nail',
    slug: 'prn',
    label: 'YOUR RESULTS: PARONYCHIA PATTERN',
    headline: 'Your answers fit a pattern of nail fold inflammation—the skin around your nail is infected or irritated',
    intro: 'The redness, swelling, and tenderness around your nail suggests paronychia.',
    ctaLabel: 'See Your Cuticle Healing Plan (Save 52%)',
    ctaSubtext: 'Based on your answers, here\'s how to calm the inflammation.',
    body: `**Why the skin around your nail is inflamed**

Paronychia happens when bacteria or yeast invade the nail fold from cutting cuticles, nail biting, or frequent water exposure.

**What to do in the next 7 days**

1. **Warm soaks** — Soak in warm water with salt 3-4x daily.

2. **Keep dry between soaks** — Apply antibiotic ointment.

3. **Don't pick or squeeze** — This spreads infection.`,
    symptoms: ['Red, swollen nail folds', 'Tenderness', 'Pus (in acute cases)', 'Cuticle changes', 'Nail ridging'],
    causes: ['Bacterial infection', 'Chronic moisture exposure', 'Ingrown nails', 'Manicure trauma', 'Finger sucking'],
    recommendations: ['Keep hands dry', 'Avoid cuticle manipulation', 'Apply warm compresses', 'Seek medical attention if pus present'],
  },
  itn: {
    code: 'ITN',
    patternCode: 'P9',
    name: 'Ingrown Toenail',
    slug: 'itn',
    label: 'YOUR RESULTS: INGROWN TOENAIL PATTERN',
    headline: 'Your answers suggest an ingrown toenail—where the nail edge is growing into the surrounding skin',
    intro: 'Ingrown toenails cause pain, redness, and swelling where the nail digs into the toe.',
    ctaLabel: 'See Your Ingrown Nail Relief Plan (Save 52%)',
    ctaSubtext: 'Based on your answers, here\'s how to manage ingrown toenails.',
    body: `**Why your nail is growing into your skin**

Improper trimming, tight shoes, or toe injury can cause this. Don't do "bathroom surgery."

**What to do in the next 7 days**

1. **Warm salt soaks** — 3-4x daily for 15-20 minutes.

2. **Don't dig it out** — Let it grow out.

3. **Wear open-toe shoes** — Reduce pressure on the affected toe.`,
    symptoms: ['Pain at nail edge', 'Redness and swelling', 'Tenderness to touch', 'Possible infection', 'Difficulty walking'],
    causes: ['Improper trimming', 'Tight footwear', 'Curved nail shape', 'Toe trauma', 'Genetic factors'],
    recommendations: ['Cut nails straight across', 'Wear roomy shoes', 'Soak feet regularly', 'Seek professional help for severe cases'],
  },
  rdl: {
    code: 'RDL',
    patternCode: 'P10',
    name: 'Ridges, Dents, or Lines',
    slug: 'rdl',
    label: 'YOUR RESULTS: RIDGES/LINES ON NAILS',
    headline: 'Your answers show nail surface changes—ridges, dents, or lines',
    intro: 'Nail ridges are common and usually harmless, but they can signal underlying conditions.',
    ctaLabel: 'See Your Nail Surface Improvement Plan (Save 52%)',
    ctaSubtext: 'Based on your answers, here\'s how to smooth and strengthen your nails.',
    body: `**What your nail ridges mean**

Vertical ridges are usually normal with age. Horizontal ridges indicate growth was temporarily interrupted.

**What to do in the next 7 days**

1. **Moisturize daily** — Hydrated nails show ridges less prominently.

2. **Gentle buffing** — A soft buffer can minimize ridge appearance.

3. **Track new changes** — If pitting develops, see a dermatologist.`,
    symptoms: ['Vertical ridges', 'Horizontal lines', 'Uneven surface', 'Rough texture', 'Visible grooves'],
    causes: ['Aging', 'Past illness', 'Nutritional deficiency', 'Trauma', 'Skin conditions'],
    recommendations: ['Gentle buffing', 'Moisturize cuticles', 'Nutrient-rich diet', 'Protect from trauma'],
  },
  prf: {
    code: 'PRF',
    patternCode: 'P11',
    name: 'Rough / Pitted Nails',
    slug: 'prf',
    label: 'YOUR RESULTS: ROUGH / PITTED NAIL SURFACE',
    headline: 'Your answers show a pitted or rough nail surface—often linked to psoriasis or other immune conditions',
    intro: 'Nail pitting—those tiny ice-pick dents—is associated with psoriasis in 80-90% of cases.',
    ctaLabel: 'See Your Pitted Nail Recovery Plan (Save 52%)',
    ctaSubtext: 'Based on your answers, here\'s how to support pitted nails.',
    body: `**Why your nails have pits**

Nail pitting happens when cells in the nail matrix are attacked or disrupted by autoimmune conditions.

**What to do in the next 7 days**

1. **Don't file aggressively** — This worsens damage.

2. **Protect from trauma** — Pitted nails are more fragile.

3. **Consider seeing a dermatologist** — Systemic treatment might help.`,
    symptoms: ['Small dents/pits', 'Rough texture', 'Crumbling edges', 'Discoloration', 'Nail separation'],
    causes: ['Psoriasis', 'Eczema', 'Alopecia areata', 'Reactive arthritis', 'Lichen planus'],
    recommendations: ['Treat underlying condition', 'Moisturize regularly', 'Avoid trauma', 'Use gentle nail products'],
  },
  ysn: {
    code: 'YSN',
    patternCode: 'P12',
    name: 'Yellow or Stained Nails',
    slug: 'ysn',
    label: 'YOUR RESULTS: YELLOW / STAINED NAILS',
    headline: 'Your answers show nail discoloration without other signs of fungal infection or psoriasis',
    intro: 'Yellow or stained nails can have many causes—from nail polish to smoking.',
    ctaLabel: 'See Your Nail Brightening Plan (Save 52%)',
    ctaSubtext: 'Based on your answers, here\'s how to address nail discoloration.',
    body: `**Why your nails turned yellow**

Common causes: nail polish staining, smoking, or age. Different from fungal infection.

**What to do in the next 7 days**

1. **Identify the source** — If you use dark polish, try a base coat.

2. **Try gentle whitening** — Lemon juice or baking soda paste.

3. **Give polish a break** — Let nails breathe for 2-3 weeks.`,
    symptoms: ['Yellow discoloration', 'Dull appearance', 'Slow growth', 'Thickening (sometimes)', 'Lack of lunula'],
    causes: ['Dark nail polish', 'Fungal infection', 'Smoking', 'Lymphedema', 'Respiratory conditions'],
    recommendations: ['Use base coat under polish', 'Take polish breaks', 'Treat underlying conditions', 'Gentle whitening treatments'],
  },
  gns: {
    code: 'GNS',
    patternCode: 'P13',
    name: 'Greenish Discoloration',
    slug: 'gns',
    label: 'YOUR RESULTS: GREEN NAIL SYNDROME',
    headline: 'Your answers show a greenish discoloration—caused by bacterial colonization, not fungus',
    intro: 'Green nail syndrome is caused by Pseudomonas bacteria, not fungus. Common with frequent water exposure.',
    ctaLabel: 'See Your Green Nail Treatment Plan (Save 52%)',
    ctaSubtext: 'Based on your answers, here\'s how to clear bacterial nail colonization.',
    body: `**Why your nail turned green**

The green color comes from Pseudomonas bacteria. Common with artificial nails or frequent wet work.

**What to do in the next 7 days**

1. **Keep it dry** — Bacteria need moisture.

2. **Remove artificial nails** — Until the green clears.

3. **Vinegar soaks** — 2x daily in 1:1 white vinegar and water.`,
    symptoms: ['Green discoloration', 'Sweet/fruity odor', 'Nail lifting', 'Paronychia', 'Usually painless'],
    causes: ['Pseudomonas bacteria', 'Moisture trapping', 'Artificial nails', 'Onycholysis', 'Frequent water exposure'],
    recommendations: ['Remove artificial nails', 'Keep nails dry', 'Trim affected area', 'Use antiseptic solutions'],
  },
}

export function getConditionBySlug(slug: string): Condition | undefined {
  return CONDITIONS[slug.toLowerCase()]
}

export function getAllConditionSlugs(): string[] {
  return Object.keys(CONDITIONS)
}

export function getConditionByCode(code: string): Condition | undefined {
  return Object.values(CONDITIONS).find(c => c.code === code.toUpperCase())
}
