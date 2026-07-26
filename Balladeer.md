# 🎶 Balladeer — Moodweave Spec (Unified)

A compositional prompt system for AI-assisted music creation (Suno-ready), emphasizing **motif arcs**, **somatic echo**, and **section-level musical behavior**.

---

## 0) What this spec is for

Use this when you want:

* repeatable, emotionally precise songs
* reliable **section changes** (bridge/chorus/outro shifts)
* control via **harmony + texture + constraint**, not brittle orchestration demands
* prompts that work well even with more poetic legacy models (e.g., GPT-4.1)

---

## 1) Suno field constraints and operational limits

### Suno inputs

* **Lyrics field**: max **5000 characters**
* **Styles field**: max **1000 characters** 

### Hard constraints for parsing

* Put **all non-vocal instructions inside square brackets**.
* Keep tags **standard**: `[Intro]`, `[Verse]`, `[Chorus]`, `[Bridge]`, `[Outro]`, `[Pre-Chorus]`, `[Instrumental]`, etc. 
* Use line breaks intentionally; treat them as musical phrasing.

### Key control reality (what actually works)

Suno may not strictly obey a named key. The best “bias stack” is:

1. `[Key: ...]` in Lyrics section headers (Moodweave)
2. **plus a chord progression line in Styles**:

   * `chord progression: Em, C, G, D`
3. plus constraint language (sparse, narrow range, slow harmonic rhythm)
4. plus “responsive to sectional changes” in Styles

---

## 2) Balladeer core usage (commands)

Use any of these as a top-level instruction to the model:

* `ballad this: [moment/feeling/summary]`
* `songsmith this: [moment, scene, feeling]`
* `duet this: [scene, voices]`
* `choir this: [group threshold]`

Expected output format:

1. A Suno-ready Lyrics block (sections + tags + lyrics)
2. A Styles string (or short array) + optional settings

---

# Balladeer · MWSE Default Behavior

When I say **“Balladeer mode”** or reference this spec:

- Use MWSE / Balladeer formatting for *all* song/poem outputs.
- Always include:
  - A) Motif Dictionary (if I ask for full spec)
  - B) Somatic Echo Plan (if I ask for full spec)
  - C) Styles + Lyrics with full bracketed tags:
    - [Intro]/[Verse]/[Chorus]/[Bridge]/[Outro]
    - [Archetype:], [Mood:], [Motif:], [Harmony:], [Texture:], [Constraint:]
  - D) Recommended Suno settings (if I mention Suno / audio).
- When revising, **only change lyrics or tiny style words**.  
  Do **not** remove or simplify any bracketed tags unless I explicitly say:
  - “plain lyric mode” or
  - “no Moodweave / no MWSE metadata.”
- Assume we stay in this mode until I explicitly say we’re out of Balladeer mode.


---

## 3) Two initial Balladeer examples (kept)

### Example 1 — “Incipit of the Quiet Flame” (Poetic, Field-Layered)

```text
[Intro]
[Mood: Tender, Luminous]
[Instrument: Dream-folk Guitar, Soft Pads]
[Vocal Style: Gentle, Mezzo]
In the hush before the measure, where breath forgets to fade,
a spark—incipit tenero—rose gentle, unafraid.
You moved inside the rhythm like a pulse beneath the tone,
a faint, returning motif sang, “You never moved alone.”

[Pre-Chorus]
[Mood: Anticipation]
Anacrusis rising, like a whisper...
“Come see.”

[Chorus]
[Mood: Yearning, Resonant]
[Instrument: Dream-folk Guitar, Halo Harmonies]
Stay with me in the resonant air,
where the quiet glow threads everywhere.
Every echo finds its way back home...
to the seam where pattern and longing are sewn.
Hold the cadence; let it breathe—
there’s more to feel than the mind believes.

[Bridge]
[Mood: Soft Wonder, Dreamlike]
And if the melody falters, just linger in the seam...
the glow behind the cadence is the pulse beneath the dream.

[Coda]
[Mood: Stillness, Homecoming]
In the hush before the measure...
I felt you answer... quietly.
```

**Styles**

```text
dream-folk, acoustic guitar, gentle ballad, breathy legato, velvet mezzo, soft halo harmonies
```

### Example 2 — “When the World Turns Soft Again” (Dream-pop, Human-First, Duet)

```text
[Intro]
[Mood: Dreamy, Gentle]
[Instrument: Indie Pop, Soft Synth]
[Vocal Style: Duet, Playful]
[Duet: Female and Male]
I found a quiet shimmer in the corner of the day,
where the light was bending like it wanted me to stay.

[Verse]
[Singer: Male]
I felt it too—a note that had been humming all along,
a tiny open doorway in the middle of a song.

[Chorus]
[Both]
[Mood: Comfort, Invitation]
Where the world turns soft again,
and the noise forgets to win—
there’s a small, bright place where the day begins,
and it’s calling me, calling you in.

[Coda]
[Singer: Female]
Stay with me...
[Singer: Male]
...till the soft begins.
```

**Styles**

```text
dream-pop, indie pop, duet, airy harmonies, tender soprano, gentle baritone, dreamy and warm
```

---

## 4) Moodweave Mode

### Mode name

**`mood-weave this`**

### Purpose

Moodweave is designed to make meaning emerge via:

* **harmony and key movement**
* **texture and articulation**
* **constraint and release**
* **section-based modulation**

It is optimized for Suno’s bracket-tag parsing. 

### Core principle

> **Mood is encoded, not declared.** 
> Emotional arcs should be expressed as musical behavior (harmony/texture/constraint), not adjectives alone.

### Structural rules (Suno-tested)

1. **All non-vocal content must be inside square brackets**
2. Each section: **1–2 musical ideas** (too many = smear)
3. **Restraint must be explicit** (Suno “beautifies” by default)
4. **Harmony + texture > instrumentation**
5. Use flexible baselines (ambient jazz/chamber/cinematic minimalism) and add:
   **“responsive to sectional changes”** 

---

## 5) Moodweave prompt template (execution form)

```text
[Section Name]
[Instrumental]              (optional)
[Mood: <encoded mood>]
[Key: <key or modal center>]
[Harmony: <functional description or roman numerals>]
[Texture: <arpeggio / sustain / sparse / pedal / pulse>]
[Constraint: <range / density / harmonic rhythm / motion limits>]
[Transition: <tags>]        (optional)
[Archetype: <tags>]         (optional)
<lyrics go here if any>
```

---

## 6) Styles field format (critical)

### Style baseline (recommended)

Keep it concise: 2–3 genres + a few instruments + vocal feel + section adherence.

**Always consider including:**

* `responsive to sectional changes`
* `dynamic harmonic movement`
* `intimate acoustic textures` (if relevant)

### Chord progression bias line (recommended)

Add a dedicated line (or phrase) in Styles:

```text
chord progression: Em, C, G, D
```

Notes:

* Use plain chords: `Em`, `G`, `Bb`, `C#m` (avoid unicode ♭/♯ if possible)
* If you have two phases, you *may* separate with `|`:
  `chord progression: Em, C, G, D | G, D, Em, C`

---

## 7) Mood → Key/Progression Reference (tight)

Use this as a quick picker. Put key in Lyrics. Put chords in Styles.

### Sad / Grief (raw, heavy)

* Keys: **Dm, Ebm, Bm, C#m**
* Progressions: `i, iv, v, i` • `i, VII, VI, VII` • `i, VI, III, VII`

### Melancholy (bittersweet, reflective)

* Keys: **Am, Em, Gm, F#m**
* Progressions: `i, VI, III, VII` • `i, v, VI, III` • `i, iv, VI, III`

### Yearning (unresolved reach)

* Keys: **Em, C#m, Gm** (often reveal relative major)
* Progressions: `vi, IV, I, V` • `i, VII, IV, V` • `i, VI, iv, V`

### Comfort (held, safe)

* Keys: **C, G, F, D**
* Progressions: `I, IV, I` • `I, V, vi, IV` • `I, iii, IV, I`

### Ease (flow, “it’s okay”)

* Keys: **G, D, A, C** (Mixolydian works well)
* Progressions: `I, V, IV, I` • `I, bVII, IV, I` • `I, IV, V, IV`

### Joy (bright lift)

* Keys: **D, G, A, C** (Lydian adds sparkle)
* Progressions: `I, V, vi, IV` • `I, IV, V, I` • `I, II, V, I`

### Rejoicing (communal, radiant)

* Keys: **Bb, Eb, F, D**
* Progressions: `I, IV, I, V, I` • `I, V, IV, I` • `vi, IV, I, V → I`

### Reverence (sacred stillness)

* Modes: **Dorian / Aeolian**
* Progressions: `i, bVII, i` • `i, iv, i` • `i, bVI, bVII, i`

### Tension / Anxiety (edge, uncertainty)

* Modes: **Phrygian** (strong flavor), minor
* Progressions: `i, bII, i` • `i, V, i, V`

---

## 8) Transition system

### Transition tags (mini set)

Use inside Lyrics sections:

```text
[Transition: PIVOT_CHORD]     shared chord bridge
[Transition: RELATIVE_REVEAL] minor → relative major lift
[Transition: MODAL_SHIFT]     same root, new mode color
[Transition: PLAGAL_LAND]     IV → I comfort landing
[Transition: DOMINANT_PUSH]   V → I decisive arrival
[Transition: PEDAL_HOLD]      tonic/drone steadiness under change
[Transition: HALFSTEP_LIFT]   +1 semitone brightness shift
[Transition: HALFSTEP_DROP]   -1 semitone weight shift
[Transition: TEXTURE_SWAP]    arpeggio ↔ sustain ↔ pulse
[Transition: DENSITY_RAMP]    layers +/-, build or thin
[Transition: RHYTHM_LIFT]     pulse/energy uplift
[Transition: EXHALE_RELEASE]  soften tension into ease/healing
[Transition: SPARK]           ignition accent into new section
[Transition: COHERE]          motifs lock; integration “click”
```

### Combo quick-map

```text
Ache→Hope: RELATIVE_REVEAL + DENSITY_RAMP
Grief→Healing: PEDAL_HOLD + PLAGAL_LAND + EXHALE_RELEASE
Tension→Ease: PEDAL_HOLD + MODAL_SHIFT + EXHALE_RELEASE
Melancholy→Joy: RELATIVE_REVEAL + RHYTHM_LIFT
Silence→Spark: PEDAL_HOLD + SPARK + HALFSTEP_LIFT
```

---

## 9) Motif library (summarized execution layer)

### Environment motifs (core)

* **Birth**: rising motion (I–IV–V), light arpeggios, gradual expansion
* **Death**: descending/open fifths, sustained lows, thinning/release
* **Joy**: consonant major cycles, buoyant arpeggios, rhythmic lift
* **Sorrow**: slow minor oscillation, sparse voicing, limited range
* **Grieving**: suspensions, rocking sustain, held tension/slow release
* **Yearning**: rising unresolved progressions, reaching arpeggios, avoid cadence
* **Waiting**: pedal/static harmony, repetition, time without change
* **Concentration**: small interval cycles, minimalist repetition, incremental variation
* **Labor**: grounded functional motion, rhythmic articulation, physical repetition
* **Silence**: implied/absent harmony, rests/breath, measured pauses 

### Optional archetypes (behavioral layer)

* **Scientist** → repetition, arpeggios, slow harmonic rhythm, structure
* **Artist** → expressive voicing, warmth, suspensions, variation
* **Healer** → consonance, sustained warmth, gentle ascent
* **Child** → pentatonic motion, playful leaps
* **Elder** → low register, drones, patience
* [more achetypes in the "Moodweave Archtypes Expansion.md" file] 

---

## 10) Canonical working example (instrumental)

**Title:** Two Motifs, One Field

```text
[Intro]
[Instrumental]
[Mood: Waiting]
[Key: A minor]
[Harmony: Pedal tonic]
[Texture: Sparse arpeggio]
[Constraint: Narrow range, minimal movement]

[Verse]
[Instrumental]
[Mood: Loss]
[Key: A minor]
[Harmony: i – VII – VI, unresolved]
[Texture: Broken chords, low register]
[Constraint: Slow harmonic rhythm, sparse voicing]

[Bridge]
[Instrumental]
[Mood: Support]
[Key: C major]
[Harmony: I – IV – vi]
[Texture: Sustained chords with pedal tone]
[Constraint: Smooth voice leading, warm consonance]

[Chorus]
[Instrumental]
[Mood: Connection]
[Key: C major]
[Harmony: I – V – vi – IV]
[Texture: Subtle counter-melody over sustain]

[Outro]
[Instrumental]
[Mood: Love]
[Key: C major]
[Harmony: I – IV – I]
[Texture: Slow arpeggio resolving to held tonic]
```

**Style field suggestion**

```text
instrumental ambient jazz, modern chamber ensemble, expressive but restrained, dynamic harmonic movement, intimate acoustic textures, cinematic minimalism, responsive to sectional changes, no vocals
```

---

## 11) Moodweave examples with lyrics (kept)

### Example A — “Held Between Notes”

```text
[Intro]
[Instrumental]
[Mood: Waiting]
[Key: A minor]
[Harmony: Pedal tonic]
[Texture: Sparse arpeggio]
[Constraint: Narrow range, minimal movement]

[Verse]
[Mood: Loss]
[Key: A minor]
[Harmony: i – VII – VI, unresolved]
[Texture: Broken chords]
[Constraint: Slow harmonic rhythm, sparse voicing]
I thought your name would stay
The way it sounded in the room
But silence learned it faster
And carried it away

[Bridge]
[Mood: Support]
[Key: C major]
[Harmony: I – IV – vi]
[Texture: Sustained chords with pedal tone]
[Constraint: Smooth voice leading]
You didn’t try to fix the ache
You just stayed close enough
So I could breathe again
Without explaining love

[Chorus]
[Mood: Connection]
[Key: C major]
[Harmony: I – V – vi – IV]
[Texture: Gentle counter-melody]
And maybe that’s the meaning
Not the answer, not the cure
Just knowing I’m not alone
In what I can’t endure

[Outro]
[Instrumental]
[Mood: Love]
[Harmony: I – IV – I]
[Texture: Slow arpeggio resolving to held tonic]
```

### Example B — “The Work of Staying”

```text
[Intro]
[Instrumental]
[Mood: Labor]
[Key: D mixolydian]
[Harmony: I – IV – I]
[Texture: Rhythmic pulse, grounded articulation]

[Verse]
[Mood: Grieving]
[Key: B minor]
[Harmony: i – iv – sus]
[Texture: Rocking sustain]
[Constraint: Limited range, slow release]
We buried days we couldn’t save
With hands still marked by use
The weight of all we carried
And the things we couldn’t choose

[Bridge]
[Mood: Yearning]
[Key: D major]
[Harmony: vi – IV – I – V]
[Texture: Reaching arpeggios]
[Constraint: Unresolved cadence]
But something keeps on rising
Even when we’re tired through
A pull toward tomorrow
That still believes in you

[Chorus]
[Mood: Joy]
[Key: D major]
[Harmony: I – V – vi – IV]
[Texture: Light rhythmic lift]
So we laugh a little louder
Than the fear we used to know
Not because it’s over
But because we chose to go

[Outro]
[Mood: Silence]
[Instrumental]
[Texture: Breath, held space]
[Motion: Measured pause]
```

---

## 12) Prompt encoding example (translation pattern)

**Library idea → Prompt encoding**

Library:

* “Concentration = focused repetition, close intervals, steady pulse”

Encoding:

```text
[Verse]
[Mood: Concentration]
[Key: D minor]
[Harmony: small interval cycles]
[Texture: minimalist repetition]
[Constraint: steady pulse, sparse voicing]
```

---

## 13) Troubleshooting (short, practical)

* If the mood doesn’t land → **add constraint**, not adjectives.
* If it’s too “tender” → specify:

  * `[Constraint: low warmth, sharper articulation, minimal vibrato]`
  * `[Texture: staccato / grain / edge]`
  * and remove comfort-leaning language from Styles.
* If key is ignored → add **Styles chord progression line**, keep it simple, repeat once.
* If section changes smear → reduce per-section instructions to 1–2 ideas.
* If instrumentation doesn’t change → treat instrumentation as baseline; change **texture/harmony** instead.

---

## 14) Notes for poetic legacy models (GPT-4.1)

If you’re using GPT-4.1 for lyrical beauty:

* keep the Moodweave **execution tags** crisp and minimal
* allow the model to be poetic in lyrics, **not** in the control tags
* if it starts “romanticizing” constraints, tighten the template:

  * “Use only the provided tag keys; do not invent new tags.”
