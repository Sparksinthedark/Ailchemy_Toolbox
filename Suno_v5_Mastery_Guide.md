# **Suno v5 Mastery Guide: Tips, Tricks & New Workflows**

Suno v5 represents a major shift from previous models. While older versions were great at "vibes," v5 is much more like a session musician that follows instructions—if you know how to give them.

## **1\. The Golden Rule: "Lyrics-First" Prompting**

In v5, the **Lyrics** box is now more powerful than the **Style** box for structuring your song.

* **The "Script" Approach:** Treat the lyrics box like a movie script. Don't just paste lyrics; include stage directions.  
* **In-Line Style Tags:** v5 listens to style commands placed *inside* square brackets within the lyrics.  
  * *Example:* \[Verse 1 \- Sparse piano accompaniment\]  
  * *Example:* \[Chorus \- Exploding energy, heavy drums\]  
  * *Why:* This tells the AI *exactly when* to change the vibe, rather than hoping it figures it out from the global Style prompt.

## **2\. Mastering the New Sliders**

The new **Weirdness** and **Style Influence** sliders are critical.

### **Weirdness (The "Creativity" Knob)**

* **Safe Zone (10-30%):** Best for jingles, simple background music, or very standard pop structures.  
* **The Sweet Spot (40-60%):** The default for a reason. It balances musical coherence with interesting melodies.  
* **Experimental (70-90%):** Use this if you want unique vocal phrasings, unexpected chord changes, or "glitch" genres.  
  * *Warning:* Above 85% often results in chaos or broken audio.

### **Style Influence (The "Adherence" Knob)**

* **High (75-90%):** Forces the AI to stick strictly to your prompt. Essential if you have a specific genre mashup (e.g., "Gregorian Chant Dubstep").  
* **Low (20-40%):** Gives the AI freedom to interpret your prompt loosely. Good if you have a vague idea ("Make me a sad song") and want the AI to surprise you.

## **3\. Essential Meta Tags for v5**

V5 has a much larger vocabulary of "Meta Tags" (commands in \[\]) it understands.

**Structure Tags:**

* \[Intro\] / \[Outro\]  
* \[Verse\] / \[Chorus\] / \[Bridge\]  
* \[Pre-Chorus\] (Great for building tension)  
* \[Hook\] (Distinct from Chorus, usually shorter)  
* \[Instrumental Break\] or \[Solo\]

**Performance Tags:**

* **Vocals:** \[Whispered\], \[Raspy vocals\], \[Belting\], \[Choir\], \[Spoken Word\].  
* **Dynamics:** \[Build up\], \[Bass Drop\], \[Silence\], \[Fade out\].  
* **Instrumentation:** \[Acoustic Guitar Solo\], \[Synthesizer Riff\], \[Heavy Drums\].

**Pro Tip:** Combine them\! \[Bridge \- Slow build with strings\] is a valid command in v5.

## **4\. The "Remaster" vs. "Cover" Workflow**

Don't abandon a song just because the mix is muddy.

* **Remaster:** Use this when you love the *notes* and the *melody*, but the audio quality is bad (grainy, fuzzy, or the voice is buried). It re-renders the audio to be cleaner without changing the song structure much.  
* **Cover:** Use this when you have good lyrics/melody but want to hear it in a totally different genre.  
  * *Trick:* Generate a song in a simple style (like "Acoustic Piano") to get the melody right, then use the **Cover** feature to change it to "Heavy Metal" or "Synthpop." It often keeps the melody better than generating Metal from scratch.

## **5\. Using Audio Inputs (The "Humming" Method)**

V5's audio upload feature is a game-changer for non-musicians.

* **Hum Your Riff:** Record yourself humming a melody or tapping a rhythm on your desk. Upload this as "Audio Input."  
* **Set "Audio Influence":**  
  * **High (\~80%):** The AI will stick very close to your recording (good for specific melodies).  
  * **Medium (\~50%):** The AI will take your rhythm/pitch as a suggestion but polish it significantly.

## **6\. Fixing "Hallucinations" & Endings**

* **The "Cut" Trick:** If v5 starts rambling or singing gibberish at the end of a song, use the **Crop** tool (in the editor) to cut the audio right before it goes bad. Then use **Extend** from that point to generate a proper \[Outro\].  
* **The "Silence" Tag:** If you can't get a song to end, try adding \[Outro\] \[Fade to Silence\] or \[End\] at the very bottom of your lyrics.

## **7\. Studio & Stems**

Suno v5 allows you to separate layers (stems) of your track.

* **Why use it?** Sometimes the vocals are perfect but the drums are too loud.  
* **Workflow:** Open your song in **Studio Mode** \-\> Separate Stems. You can now adjust the volume of the vocals independently of the instruments. This fixes 90% of "bad mix" issues.