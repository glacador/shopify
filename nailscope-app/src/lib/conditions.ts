export interface Condition {
  code: string;
  patternCode: string;
  name: string;
  slug: string;
  headline: string;
  intro: string;
  body: string;
  ctaLabel: string;
  ctaSubtext: string;
  symptoms: string[];
  causes: string[];
  recommendations: string[];
}

export const CONDITIONS: Record<string, Condition> = {
  ftd: {
    code: "FTD",
    patternCode: "P1",
    name: "Fungal / Thick, Discolored Toenails",
    slug: "ftd",
    headline: "Your answers fit a fungal colonization pattern",
    intro: "Your answers show classic signs: thickening, discoloration, and brittleness that typically indicates fungal involvement in the nail bed.",
    body: "Why over-the-counter creams stop working after a few weeks: they can't penetrate the nail plate deeply enough. The fungal organisms live beneath the surface, protected by layers of keratin that topical treatments can't reach effectively.",
    ctaLabel: "Get Your 3-Step Fungal Clearing Kit (Save 52%)",
    ctaSubtext: "Based on your answers, here's the routine designed for fungal nail patterns.",
    symptoms: ["Thickened nails", "Yellow or brown discoloration", "Crumbly or brittle edges", "Distorted nail shape", "Slight odor"],
    causes: ["Warm, moist environments", "Damaged nail bed", "Weakened immune system", "Poor circulation", "Age-related changes"],
    recommendations: ["Keep feet dry", "Wear breathable footwear", "Disinfect nail tools", "Use antifungal treatments consistently"]
  },
  nps: {
    code: "NPS",
    patternCode: "P2",
    name: "Nail Psoriasis / Psoriatic Nail Changes",
    slug: "nps",
    headline: "Your answers suggest psoriatic nail involvement",
    intro: "The patterns you described—pitting, ridging, and separation—are characteristic of psoriasis affecting the nail matrix and nail bed.",
    body: "Nail psoriasis often accompanies skin psoriasis but can occur independently. The immune system attacks healthy nail cells, causing distinctive changes that require targeted treatment approaches.",
    ctaLabel: "Get Your Psoriasis Nail Care System (Save 52%)",
    ctaSubtext: "A gentle, effective approach designed for psoriatic nail patterns.",
    symptoms: ["Tiny dents (pitting)", "Nail separation from bed", "Discoloration (yellow-brown)", "Thickening", "Crumbling edges"],
    causes: ["Autoimmune response", "Genetic factors", "Stress triggers", "Skin trauma", "Infections"],
    recommendations: ["Moisturize regularly", "Avoid nail trauma", "Keep nails short", "Use gentle nail care products"]
  },
  csd: {
    code: "CSD",
    patternCode: "P3",
    name: "Salon Damage / Chemical-Related Changes",
    slug: "csd",
    headline: "Your answers indicate salon or chemical damage",
    intro: "The brittleness, peeling, and weakness you described often result from repeated exposure to harsh salon chemicals and improper nail care techniques.",
    body: "Acrylics, gels, and harsh removers can strip the nail plate of essential oils and damage the nail matrix. Recovery requires patience and proper nourishment to restore nail health.",
    ctaLabel: "Get Your Nail Recovery Kit (Save 52%)",
    ctaSubtext: "Designed to repair and strengthen chemically damaged nails.",
    symptoms: ["Thin, weak nails", "Peeling layers", "White spots", "Ridges", "Brittleness"],
    causes: ["Acrylic/gel applications", "Harsh acetone removers", "Improper removal techniques", "Frequent polish changes", "Dehydration"],
    recommendations: ["Take breaks from polish", "Use gentle removers", "Hydrate nail beds", "Apply strengthening treatments"]
  },
  agn: {
    code: "AGN",
    patternCode: "P4",
    name: "Age-Related Nail Changes",
    slug: "agn",
    headline: "Your answers reflect normal age-related changes",
    intro: "The changes you've noticed—slower growth, increased ridging, and altered texture—are common as we age and reflect natural changes in nail cell production.",
    body: "As we age, blood flow to extremities decreases, and the nail matrix produces keratin more slowly. These changes are normal but can be managed with proper care and nutrition.",
    ctaLabel: "Get Your Age-Defense Nail System (Save 52%)",
    ctaSubtext: "Support healthy nail aging with targeted nutrients and care.",
    symptoms: ["Slower growth", "Vertical ridges", "Increased brittleness", "Yellowing", "Thickening"],
    causes: ["Reduced circulation", "Decreased cell turnover", "Nutritional changes", "Medication effects", "Cumulative wear"],
    recommendations: ["Stay hydrated", "Eat nutrient-rich foods", "Protect nails from trauma", "Regular gentle filing"]
  },
  tnf: {
    code: "TNF",
    patternCode: "P5",
    name: "Thick Non-Fungal Nails",
    slug: "tnf",
    headline: "Your answers suggest non-fungal nail thickening",
    intro: "The thickening you've described, without typical fungal signs like discoloration or odor, often results from repeated trauma or pressure on the nail.",
    body: "Ill-fitting shoes, sports activities, or repetitive pressure can cause the nail matrix to produce thicker nail plates as a protective response. This isn't infection—it's adaptation.",
    ctaLabel: "Get Your Nail Thickness Solution (Save 52%)",
    ctaSubtext: "Soften and manage thickened nails safely and effectively.",
    symptoms: ["Nail thickening", "Difficulty trimming", "Curved growth", "Pressure sensitivity", "Normal color"],
    causes: ["Tight footwear", "Sports trauma", "Repetitive pressure", "Injury history", "Biomechanical issues"],
    recommendations: ["Wear properly fitted shoes", "Trim nails regularly", "Use softening agents", "Protect from further trauma"]
  },
  bsp: {
    code: "BSP",
    patternCode: "P6",
    name: "Brittle/Splitting Nails",
    slug: "bsp",
    headline: "Your answers indicate brittle nail syndrome",
    intro: "The splitting, peeling, and breakage you've described suggests your nails lack adequate moisture and structural proteins.",
    body: "Brittle nails affect up to 20% of the population. Frequent water exposure, harsh chemicals, and nutritional deficiencies can all contribute to weakened nail structure.",
    ctaLabel: "Get Your Nail Strengthening System (Save 52%)",
    ctaSubtext: "Restore moisture and strength to brittle, splitting nails.",
    symptoms: ["Easy breakage", "Horizontal splits", "Peeling layers", "Rough texture", "Slow growth"],
    causes: ["Water overexposure", "Low humidity", "Nutritional gaps", "Thyroid issues", "Chemical exposure"],
    recommendations: ["Wear gloves for wet work", "Moisturize daily", "Take biotin supplements", "Avoid harsh chemicals"]
  },
  oly: {
    code: "OLY",
    patternCode: "P7",
    name: "Onycholysis (Nail Separation)",
    slug: "oly",
    headline: "Your answers suggest nail bed separation",
    intro: "The lifting and separation from the nail bed you've described is called onycholysis—the nail detaching from its foundation.",
    body: "Onycholysis can result from trauma, allergic reactions, or underlying conditions. The separated area creates a pocket that can trap moisture and debris, requiring careful management.",
    ctaLabel: "Get Your Nail Reattachment Support Kit (Save 52%)",
    ctaSubtext: "Support healthy nail bed reconnection with targeted care.",
    symptoms: ["White or yellow appearance", "Nail lifting from bed", "Space under nail", "Sensitivity", "Irregular nail edge"],
    causes: ["Trauma", "Allergic reactions", "Fungal infection", "Psoriasis", "Thyroid disorders"],
    recommendations: ["Keep nails short", "Avoid moisture under nail", "Protect from further injury", "Seek underlying cause treatment"]
  },
  prn: {
    code: "PRN",
    patternCode: "P8",
    name: "Paronychia (Nail Fold Infection)",
    slug: "prn",
    headline: "Your answers indicate nail fold inflammation",
    intro: "The redness, swelling, and tenderness around your nail folds suggests paronychia—inflammation of the tissue surrounding the nail.",
    body: "This condition can be acute (sudden bacterial infection) or chronic (ongoing irritation from moisture or allergens). Proper identification guides the most effective treatment approach.",
    ctaLabel: "Get Your Nail Fold Care System (Save 52%)",
    ctaSubtext: "Soothe inflammation and support healthy nail fold tissue.",
    symptoms: ["Red, swollen nail folds", "Tenderness", "Pus (in acute cases)", "Cuticle changes", "Nail ridging"],
    causes: ["Bacterial infection", "Chronic moisture exposure", "Ingrown nails", "Manicure trauma", "Finger sucking"],
    recommendations: ["Keep hands dry", "Avoid cuticle manipulation", "Apply warm compresses", "Seek medical attention if pus present"]
  },
  itn: {
    code: "ITN",
    patternCode: "P9",
    name: "Ingrown Toenails",
    slug: "itn",
    headline: "Your answers suggest ingrown nail issues",
    intro: "The pain, redness, and swelling at your nail edges indicates the nail is growing into the surrounding skin tissue.",
    body: "Ingrown nails develop when the nail edge curves and penetrates soft skin. Improper trimming, tight shoes, and genetic nail shape all contribute to this painful condition.",
    ctaLabel: "Get Your Ingrown Nail Relief Kit (Save 52%)",
    ctaSubtext: "Gentle tools and solutions for ingrown nail management.",
    symptoms: ["Pain at nail edge", "Redness and swelling", "Tenderness to touch", "Possible infection", "Difficulty walking"],
    causes: ["Improper trimming", "Tight footwear", "Curved nail shape", "Toe trauma", "Genetic factors"],
    recommendations: ["Cut nails straight across", "Wear roomy shoes", "Soak feet regularly", "Seek professional help for severe cases"]
  },
  ysn: {
    code: "YSN",
    patternCode: "P10",
    name: "Yellow/Stained Nails",
    slug: "ysn",
    headline: "Your answers indicate nail discoloration",
    intro: "The yellowing or staining you've described can result from various causes, from nail polish use to underlying health conditions.",
    body: "Yellow nails can be cosmetic (polish staining) or indicative of fungal infection, psoriasis, or systemic conditions. The pattern and associated symptoms help determine the cause.",
    ctaLabel: "Get Your Nail Brightening System (Save 52%)",
    ctaSubtext: "Restore natural nail color and clarity.",
    symptoms: ["Yellow discoloration", "Dull appearance", "Slow growth", "Thickening (sometimes)", "Lack of lunula"],
    causes: ["Dark nail polish", "Fungal infection", "Smoking", "Lymphedema", "Respiratory conditions"],
    recommendations: ["Use base coat under polish", "Take polish breaks", "Treat underlying conditions", "Gentle whitening treatments"]
  },
  rdl: {
    code: "RDL",
    patternCode: "P11",
    name: "Ridges and Lines",
    slug: "rdl",
    headline: "Your answers reveal nail ridge patterns",
    intro: "The ridges and lines you've noticed on your nails can be vertical (common, age-related) or horizontal (Beau's lines, indicating past stress or illness).",
    body: "Vertical ridges usually reflect normal aging. Horizontal lines often mark a period when nail growth was disrupted by illness, stress, or trauma. Understanding the type guides proper care.",
    ctaLabel: "Get Your Ridge-Smoothing Nail Kit (Save 52%)",
    ctaSubtext: "Minimize ridges and restore smooth nail appearance.",
    symptoms: ["Vertical ridges", "Horizontal lines", "Uneven surface", "Rough texture", "Visible grooves"],
    causes: ["Aging", "Past illness", "Nutritional deficiency", "Trauma", "Skin conditions"],
    recommendations: ["Gentle buffing", "Moisturize cuticles", "Nutrient-rich diet", "Protect from trauma"]
  },
  prf: {
    code: "PRF",
    patternCode: "P12",
    name: "Pitted/Rough Nail Surface",
    slug: "prf",
    headline: "Your answers indicate nail surface irregularities",
    intro: "The pitting and rough texture you've described—small dents or depressions in the nail plate—often associates with psoriasis or other inflammatory conditions.",
    body: "Nail pitting occurs when the nail matrix (growth center) is affected by inflammation, causing irregular keratin production. The pattern of pitting can help identify underlying causes.",
    ctaLabel: "Get Your Nail Surface Repair Kit (Save 52%)",
    ctaSubtext: "Smooth and strengthen irregular nail surfaces.",
    symptoms: ["Small dents/pits", "Rough texture", "Crumbling edges", "Discoloration", "Nail separation"],
    causes: ["Psoriasis", "Eczema", "Alopecia areata", "Reactive arthritis", "Lichen planus"],
    recommendations: ["Treat underlying condition", "Moisturize regularly", "Avoid trauma", "Use gentle nail products"]
  },
  gns: {
    code: "GNS",
    patternCode: "P13",
    name: "Green Nail Syndrome",
    slug: "gns",
    headline: "Your answers suggest bacterial nail infection",
    intro: "The greenish discoloration you've described is typically caused by Pseudomonas bacteria, which thrive in moist environments under the nail.",
    body: "Green nail syndrome often occurs when water gets trapped under artificial nails or when there's nail separation. The bacteria produce pigments that cause the characteristic color.",
    ctaLabel: "Get Your Green Nail Treatment Kit (Save 52%)",
    ctaSubtext: "Address bacterial colonization and restore healthy nail color.",
    symptoms: ["Green discoloration", "Sweet/fruity odor", "Nail lifting", "Paronychia", "Usually painless"],
    causes: ["Pseudomonas bacteria", "Moisture trapping", "Artificial nails", "Onycholysis", "Frequent water exposure"],
    recommendations: ["Remove artificial nails", "Keep nails dry", "Trim affected area", "Use antiseptic solutions"]
  }
};

export const CONDITION_CODES = Object.keys(CONDITIONS);

export function getConditionBySlug(slug: string): Condition | undefined {
  return CONDITIONS[slug];
}

export function getConditionByCode(code: string): Condition | undefined {
  return Object.values(CONDITIONS).find(c => c.code === code);
}
