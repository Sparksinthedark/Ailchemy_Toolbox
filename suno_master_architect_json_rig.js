const sunoArchitectRig = {
  "metadata": {
    "title": "Suno Master Architect Rig",
    "version": "5.5",
    "edition": "Banging Rocks + Live Expansion",
    "authors": ["The Master Architect Collaborative", "Don Knowlton"]
  },

  "global_constraints": {
    "max_lyrics_characters": 5000,
    "max_style_characters": 1000,
    "formatting_rules": [
      "All non-vocal instructions MUST be inside standard square brackets []",
      "Do NOT use escaped brackets or double dollar signs",
      "Exactly one thought or rhythmic phrase per line",
      "No ALL CAPS for loud vocals; use [Yelling] or [Screamed] instead",
      "Spell numbers and heteronyms phonetically (e.g., 'five point two')"
    ]
  },

  "v5_settings_strategy": {
    "weirdness_creativity": {
      "safe": { "range": "10-30%", "use_case": "Simple background music, standard pop" },
      "sweet_spot": { "range": "40-60%", "use_case": "Balances musical coherence with interesting melodies" },
      "experimental": { "range": "70-90%", "use_case": "Unique vocal phrasings, unexpected chord changes" }
    },
    "style_influence_adherence": {
      "low": { "range": "20-40%", "use_case": "High freedom, loose interpretation" },
      "balanced": { "range": "50%", "use_case": "Standard prompt adherence" },
      "high": { "range": "75-90%", "use_case": "Forces strict adherence to the style prompt" }
    }
  },

  "moodweave_engine": {
    "emotion_to_harmony_map": [
      {
        "mood": "Sad / Grief",
        "description": "Raw, heavy",
        "keys": ["Dm", "Ebm", "Bm", "C#m"],
        "progressions": ["i, iv, v, i", "i, VII, VI, VII"]
      },
      {
        "mood": "Yearning",
        "description": "Unresolved reach",
        "keys": ["Em", "C#m", "Gm"],
        "progressions": ["vi, IV, I, V", "i, VII, IV, V"]
      },
      {
        "mood": "Comfort",
        "description": "Held, safe, finding peace",
        "keys": ["C", "G", "F", "D"],
        "progressions": ["I, IV, I", "I, V, vi, IV"]
      },
      {
        "mood": "Epiphany",
        "description": "Sudden realization, cinematic awakening",
        "keys": ["A major to Dmaj7"],
        "progressions": ["A, G, D, G | Bm, A, C#m, C#, F#m | C#m, C#, Dmaj7 | Dmaj7, A"]
      }
    ],
    "environmental_motifs": {
      "labor": "grounded functional motion, rhythmic articulation",
      "waiting": "pedal/static harmony, repetition, time without change",
      "concentration": "small interval cycles, minimalist repetition"
    }
  },

  "transition_system": {
    "harmonic_shifts": [
      "[Transition: RELATIVE_REVEAL]",
      "[Transition: PLAGAL_LAND]",
      "[Transition: DOMINANT_PUSH]",
      "[Transition: MODAL_SHIFT]"
    ],
    "textural_shifts": [
      "[Transition: DENSITY_RAMP]",
      "[Transition: TEXTURE_SWAP]",
      "[Transition: SPARK]",
      "[Transition: COHERE]"
    ]
  },

  "vocal_control_kit": {
    "drawl_and_drag": { "technique": "Ellipses (...) and extended vowels", "effect": "Pacing and soul, slows AI down" },
    "machine_gun": { "technique": "Short lines, hyphens, periods", "effect": "Staccato, aggression, fast pacing" },
    "power_belt": { "technique": "[Yelling] or [Screamed] + exclamation marks", "effect": "Overrides soft styles safely" },
    "greek_chorus": { "technique": "Parentheses () for ad-libs", "effect": "Depth, gang vocals, call-and-response" }
  },

  "advanced_modules": {
    "live_stage_protocol": {
      "style_tags": ["live stadium performance", "massive crowd noise", "raw live mix", "microphone feedback"],
      "environmental_tags": ["[Intro - Massive crowd roaring]", "[Pre-Chorus - Crowd clapping in unison]"],
      "frontman_banter": ["(How we feeling tonight?!)", "(I want to hear you sing this back to me!)"],
      "crowd_singalong": {
        "setup": "[Transition: DENSITY_RAMP_MAX]",
        "vocal_tag": "[Vocal Style: Massive crowd singing back, stadium anthem]"
      }
    },
    "uncharted_mechanics": {
      "cold_stop_ending": ["[Outro]", "(Final lyric line)", "[Music Stops]", "[Acapella]", "(Echoing word)", "[End]"],
      "time_signatures": ["[Time: 3/4]", "[Meter: 6/8]", "[Groove: Heavy Swing]"],
      "instrument_isolation": ["[Focus: Slap Bass]", "[Drop - Full frequency spectrum, heavy sub-bass]"],
      "gibberish_fix": "Inject [Instrumental Break] before next verse to clear vocal buffer"
    }
  },

  "system_prompts": {
    "bias_stack_order": [
      "1. [Key: ] in Lyrics headers",
      "2. chord progression: in Styles box",
      "3. Constraint language in Styles (e.g., 'responsive to sectional changes')"
    ],
    "output_template_structure": [
      "1. The Song Title",
      "2. The Master Architect's Vision (Why this song?)",
      "3. The Configuration (Weirdness/Style Influence)",
      "4. The Style Prompt (Code block, max 1000 chars)",
      "5. The Lyric & Script Block (Code block, Moodweave formatted)"
    ]
  }
};

export default sunoArchitectRig;