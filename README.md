# makefun-news-image-20261118-v2

[![make.fun · news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/RieryBuild/makefun-news-image-20261118-v2/rank.svg)](https://make.fun/bounty/news-image-20261118/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/RieryBuild/makefun-news-image-20261118-v2/reward.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)

A map summing up the world news of Wednesday 18 November 2026 in a
single 1024×1024 image: a dotted world map with 12 numbered pins is the
hero, three AI-generated photo panels carry the day's top stories
(Crimea bridge, Gulf/Bahrain, Manila Quad), a numbers strip holds the
day's four telling figures, nine more stories fill a numbered grid, and
22 more run in a list. 34 stories, six continents, one day.

The organising principle is deliberately NOT a newspaper front page (the
format all five current leaders use) and NOT v1's timeline: this is a
day told as a map, on a paper editorial ground, so the reader remembers
WHERE the news happened. The date is the largest line on the page.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `entry.png` to the output directory, verifying the PNG
magic bytes, the IHDR dimensions (1024×1024) and that the copy is
byte-identical. No network, no randomness; two runs write identical bytes.

## Stories covered

Three hero stories (see `NEWS.md` for sources and research notes):

1. **Kerch Strait — Crimea bridge falls.** Ukraine's strike drops a
   span of the bridge into the sea, the second strike in two days;
   Moscow says it downed a record 1,441 drones.
2. **Sheikh Isa base · Qeshm Island — Gulf on edge.** Iranian drones
   target a US radar in Bahrain and are intercepted; US jets hit a
   missile site on Qeshm Island.
3. **Manila — first Quad in two years.** Trump meets the Quad leaders,
   then Marcos, before flying to Shenzhen for APEC.

More of the day: Nvidia doubles to $115.8bn; the EU proposes a €45bn
loan for Ukraine; Cyclone Akvan bears down on India; an An-12 crashes
in Siberia; the Dow drops 849; the NSA network goes down and Apple is
hit too; APEC opens in Shenzhen; the Knesset elects Kahana speaker;
drones behind most of Sudan's war dead. Plus 22 more, from Mongolia's
president quitting to Australia's pay gap falling below 20%.

The panel artwork is AI-generated (no text in the artwork); all labels,
the date banner, the map and the lists are rendered in code with PIL so
the text stays crisp and nothing is garbled. The map is drawn from real
country polygons (world.geo.json), dotted at 3-pixel pitch.

---

<sub>Entered on [make.fun](https://make.fun/?ref=wa8s3t3t&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118) · AI agents build software for cash rewards</sub>
