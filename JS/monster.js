const monsters = [
  {
    name: "Tweedle",
    audio: "sounds/Tweedle_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Tweedle.png",
      rare: "images/bm/Rare Tweedle.png",
      epic: "images/bm/Epic Tweedle.png",
    },
    stats: {
      normal: `Breeding Time: 4 hr <br> Enhanced Time: 3 hr`,
      rare: "Rare Breeding Time: 6 hr , <br> <br> Enhanced Time: 4 hr 30 min <br>",
      epic: "Epic Breeding Time: 11 hr , <br> <br> Enhanced Time: 8 hr 15 min <br>",
    },
  },
  {
    name: "Potbelly",
    audio: "sounds/Potbelly_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Potbelly.png",
      rare: "images/bm/Rare Potbelly.png",
      epic: "images/bm/Epic Potbelly.png",
    },
    stats: {
      normal: `Breeding Time: 2 hr <br> Enhanced: 1 hr 30 min`,
      rare: "Rare Breeding Time: 6 hr , <br> <br> Enhanced Time: 4 hr 30 min <br>",
      epic: "Epic Breeding Time: 9 hr, <br> <br> Enhanced Time: 6 hr 45 min <br>",
    },
  },
  {
    name: "Noggin",
    audio: "sounds/Noggin_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Noggin.png",
      rare: "images/bm/Rare Noggin.png",
      epic: "images/bm/Epic Noggin.png",
    },
    stats: {
      normal: "Breeding Time: 5 sec <br> Enhanced Time: 3 sec",
      rare: "Rare Breeding Time: 6 hr , <br> <br> Enhanced Time: 4 hr 30 min <br>",
      epic: "Epic Breeding Time: 9 hr, <br> <br> Enhanced Time: 6 hr 45 min <br>",
    },
  },
  {
    name: "Toe Jammer",
    audio: "sounds/Toe_Jammer_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Toe Jammer.png",
      rare: "images/bm/Rare Toe Jammer.png",
      epic: "images/bm/Epic Toe Jammer.png",
    },
    stats: {
      normal: "Breeding Time: 1 min <br> Enhanced Time: 45 sec",
      rare: "Rare Breeding Time: 6 hr , <br> <br> Enhanced Time: 4 hr 30 min <br>",
      epic: "Epic Breeding Time: 3 hr, <br> <br> Enhanced Time: 2 hr 15 min <br>",
    },
  },
  {
    name: "Mammott",
    audio: "sounds/Mammott_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Mammott.png",
      rare: "images/bm/Rare Mammott.png",
      epic: "images/bm/Epic Mammott.png",
    },
    stats: {
      normal: "Breeding Time: 2 min <br> Enhanced Time: 1 min 30 sec ",
      rare: "Rare Breeding Time: 6 hr , <br> <br> Enhanced Time: 4 hr 30 min <br>",
      epic: "Epic Breeding Time: 5 hr, <br> <br> Enhanced Time: 3 hr 45 min <br>",
    },
  },
  {
    name: "Kayna",
    audio: "sounds/Kayna_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Kayna.png",
      rare: "images/bm/Rare Kayna.png",
      epic: "images/bm/Epic Kayna.png",
    },
    stats: {
      normal: "Breeding Time: 7 hr <br> Enhanced Time: 5 hr 15 min, ",
      rare: "Rare Breeding Time: 8 hr , <br> <br> Enhanced Time: 6 hr <br>",
      epic: "Epic Breeding Time: 15 hr, <br> <br> Enhanced Time: 11 hr 15 min <br>",
    },
  },
  {
    name: "Shrubb",
    audio: "sounds/Shrubb_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Shrubb.png",
      rare: "images/bm/Rare Shrubb.png",
      epic: "images/bm/Epic Shrubb.png",
    },
    stats: {
      normal: "Breeding Time: 8 hr, <br> <br> Enhanced Time: 6 hr <br>",
      rare: "Rare Breeding Time: 10 hr 30 min, <br> <br> Enhanced Time: 7 hr 52 min 30 sec <br>",
      epic: "Epic Breeding Time: 19 hr, <br> <br> Enhanced Time: 14 hr 15 min <br>",
    },
  },
  {
    name: "Oaktopus",
    audio: "sounds/Oaktopus_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Oaktopus.png",
      rare: "images/bm/Rare Oaktopus.png",
      epic: "images/bm/Epic Oaktopus.png",
    },
    stats: {
      normal: "Breeding Time: 8 hr, <br> <br> Enhanced Time: 6 hr <br>",
      rare: "Rare Breeding Time: 10 hr 30 min, <br> <br> Enhanced Time: 7 hr 52 min 30 sec <br>",
      epic: "Epic Breeding Time: 1 day 7 hr, <br> <br> Enhanced Time: 23 hr 15 min <br>",
    },
  },
  {
    name: "Furcorn",
    audio: "sounds/Furcorn_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Furcorn.png",
      rare: "images/bm/Rare Furcorn.png",
      epic: "images/bm/Epic Furcorn.png",
    },
    stats: {
      normal: "Breeding Time: 8 hr, <br> <br> Enhanced Time: 6 hr <br>",
      rare: "Rare Breeding Time: 10 hr 30 min, <br> <br> Enhanced Time: 7 hr 52 min 30 sec <br>",
      epic: "Epic Breeding Time: 17 hr, <br> <br> Enhanced Time: 12 hr 45 min <br>",
    },
  },
  {
    name: "Fwog",
    audio: "sounds/Fwog_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Fwog.png",
      rare: "images/bm/Rare Fwog.png",
      epic: "images/bm/Epic Fwog.png",
    },
    stats: {
      normal:
        "Breeding Time: 30 min, <br> <br> Enhanced Time: 22 min, 30 sec <br>",
      rare: "Rare Breeding Time: 1 hr 15 min, <br> <br> Enhanced Time: 56 min 15 sec <br>",
      epic: "Epic Breeding Time: 7 hr, <br> <br> Enhanced Time: 5 hr 15 min <br>",
    },
  },
  {
    name: "Drumpler",
    audio: "sounds/Drumpler_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Drumpler.png",
      rare: "images/bm/Rare Drumpler.png",
      epic: "images/bm/Epic Drumpler.png",
    },
    stats: {
      normal:
        "Breeding Time: 30 min, <br> <br> Enhanced Time: 22 min 30 sec <br>",
      rare: "Rare Breeding Time: 1 hr 7 min 30 sec, <br> <br> Enhanced Time: 50 min 37 sec <br>",
      epic: "Epic Breeding Time: 15 hr, <br> <br> Enhanced Time: 11 hr 15 min <br>",
    },
  },
  {
    name: "Maw",
    audio: "sounds/Maw_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Maw.png",
      rare: "images/bm/Rare Maw.png",
      epic: "images/bm/Epic Maw.png",
    },
    stats: {
      normal: "Breeding Time: 30 min, ",
      rare: "Rare Breeding Time: 1 hr 7 min 30 sec, <br> <br> Enhanced Time: 50 min 37 sec <br>",
      epic: "Epic Breeding Time: 13 hr, <br> <br> Enhanced Time: 9 hr 45 min <br>",
    },
  },
  {
    name: "Dandidoo",
    audio: "sounds/Dandidoo_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Dandidoo.png",
      rare: "images/bm/Rare Dandidoo.png",
      epic: "images/bm/Epic Dandidoo.png",
    },
    stats: {
      normal: "Breeding Time: 8 hr, <br> <br> Enhanced Time: 6 hr <br>",
      rare: "Rare Breeding Time: 10 hr 30 min, <br> <br> Enhanced Time: 7 hr 52 min 30 sec <br>",
      epic: "Epic Breeding Time: 1 day 5 hr, <br> <br> Enhanced Time: 21 hr 45 min <br>",
    },
  },
  {
    name: "Quibble",
    audio: "sounds/Quibble_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Quibble.png",
      rare: "images/bm/Rare Quibble.png",
      epic: "images/bm/Epic Quibble.png",
    },
    stats: {
      normal: "Breeding Time: 8 hr, <br> <br> Enhanced Time: 6 hr <br>",
      rare: "Rare Breeding Time: 10 hr 30 min, <br> <br> Enhanced Time: 7 hr 52 min 30 sec <br>",
      epic: "Epic Breeding Time: 21 hr, <br> <br> Enhanced Time: 15 hr 45 min <br>",
    },
  },
  {
    name: "Pango",
    audio: "sounds/Pango_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Pango.png",
      rare: "images/bm/Rare Pango.png",
      epic: "images/bm/Epic Pango.png",
    },
    stats: {
      normal: "Breeding Time: 8 hr, <br> <br> Enhanced Time: 6 hr <br>",
      rare: "Rare Breeding Time: 10 hr 30 min, <br> <br> Enhanced Time: 7 hr 52 min 30 sec <br>",
      epic: "Epic Breeding Time: 1 Day 3 hr, <br> <br> Enhanced Time: 20 hr 15 min <br>",
    },
  },
  {
    name: "Cybop",
    audio: "sounds/Cybop_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Cybop.png",
      rare: "images/bm/Rare Cybop.png",
      epic: "images/bm/Epic Cybop.png",
    },
    stats: {
      normal: "Breeding Time: 8 hr, <br> <br> Enhanced Time: 6 hr <br>",
      rare: "Rare Breeding Time: 10 hr 30 min, <br> <br> Enhanced Time: 7 hr 52 min 30 sec <br>",
      epic: "Epic Breeding Time: 23 hr, <br> <br> Enhanced Time: 17 hr 15 min <br>",
    },
  },
  {
    name: "Glowl",
    audio: "sounds/Glowl_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Glowl.png",
      rare: "images/bm/Rare Glowl.png",
      epic: "images/bm/Epic Glowl.png",
    },
    stats: {
      normal:
        "Breeding Time: 13 hr 30 min , <br> <br> Enhanced Time: 10 hr 7 min 30 sec <br>",
      rare: "Rare Breeding Time: 13 hr 30 min, <br> <br> Enhanced Time: 10 hr 7 min 30 sec <br>",
      epic: "Epic Breeding Time: 1 day 1 hr, <br> <br> Enhanced Time: 18 hr 45 min <br>",
    },
  },
  {
    name: "Flowah",
    audio: "sounds/Flowah_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Flowah.png",
      rare: "images/bm/Rare Flowah.png",
      epic: "images/bm/Epic Flowah.png",
    },
    stats: {
      normal: "Breeding Time: 10 hr, <br> <br> Enhanced Time: 7 hr 30 min <br>",
      rare: "Rare Breeding Time: 13 hr 30 min , <br> <br> Enhanced Time: 10 hr 7 min 30 sec <br>",
      epic: "Epic Breeding Time: 17 hr, <br> <br> Enhanced Time: 12 hr 45 min <br>",
    },
  },
  {
    name: "Stogg",
    audio: "sounds/Stogg_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Stogg.png",
      rare: "images/bm/Rare Stogg.png",
      epic: "images/bm/Epic Stogg.png",
    },
    stats: {
      normal: "Breeding Time: 10 hr, <br> <br> Enhanced Time: 7 hr 30 min <br>",
      rare: "Rare Breeding Time: 13 hr 30 min , <br> <br> Enhanced Time: 10 hr 7 min 30 sec <br>",
      epic: "Epic Breeding Time: 1 day 5 hr, <br> <br> Enhanced Time: 21 hr 45 min <br>",
    },
  },
  {
    name: "Phangler",
    audio: "sounds/Phangler_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Phangler.png",
      rare: "images/bm/Rare Phangler.png",
      epic: "images/bm/Epic Phangler.png",
    },
    stats: {
      normal: "Breeding Time: 10 hr, <br> <br> Enhanced Time: 7 hr 30 min <br>",
      rare: "Rare Breeding Time: 13 hr 30 min , <br> <br> Enhanced Time: 10 hr 7 min 30 sec <br>",
      epic: "Epic Breeding Time: 23 hr, <br> <br> Enhanced Time: 17 hr 15 min <br>",
    },
  },
  {
    name: "Boskus",
    audio: "sounds/Boskus_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Boskus.png",
      rare: "images/bm/Rare Boskus.png",
      epic: "images/bm/Epic Boskus.png",
    },
    stats: {
      normal: "Breeding Time: 10 hr, <br> <br> Enhanced Time: 7 hr 30 min <br>",
      rare: "Rare Breeding Time: 13 hr 30 min , <br> <br> Enhanced Time: 10 hr 7 min 30 sec <br>",
      epic: "Epic Breeding Time: 19 hr, <br> <br> Enhanced Time: 14 hr 15 min <br>",
    },
  },
  {
    name: "Pummel",
    audio: "sounds/Pummel_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Pummel.png",
      rare: "images/bm/Rare Pummel.png",
      epic: "images/bm/Epic Pummel.png",
    },
    stats: {
      normal: "Breeding Time: 12 hr, <br> <br> Enhanced Time: 9 hr <br>",
      rare: "Rare Breeding Time: 15 hr 30 min , <br> <br> Enhanced Time: 11 hr 37 min 30 sec <br>",
      epic: "Epic Breeding Time: 1 day 7 hr, <br> <br> Enhanced Time: 23 hr 15 min <br>",
    },
  },
  {
    name: "Clamble",
    audio: "sounds/Clamble_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Clamble.png",
      rare: "images/bm/Rare Clamble.png",
      epic: "images/bm/Epic Clamble.png",
    },
    stats: {
      normal: "Breeding Time: 12 hr, <br> <br> Enhanced Time: 9 hr <br>",
      rare: "Rare Breeding Time: 15 hr 30 min , <br> <br> Enhanced Time: 11 hr 37 min 30 sec <br>",
      epic: "Epic Breeding Time: 21 hr, <br> <br> Enhanced Time: 15 hr 45 min <br>",
    },
  },
  {
    name: "Bowgart",
    audio: "sounds/Bowgart_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Bowgart.png",
      rare: "images/bm/Rare Bowgart.png",
      epic: "images/bm/Epic Bowgart.png",
    },
    stats: {
      normal: "Breeding Time: 12 hr, <br> <br> Enhanced Time: 9 hr <br>",
      rare: "Rare Breeding Time: 15 hr 30 min , <br> <br> Enhanced Time: 11 hr 37 min 30 sec <br>",
      epic: "Epic Breeding Time: 1 day 5 hr, <br> <br> Enhanced Time: 21 hr 45 min <br>",
    },
  },
  {
    name: "T Rox",
    audio: "sounds/T-Rox_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/T-Rox.png",
      rare: "images/bm/Rare T-Rox.png",
      epic: "images/bm/Epic T-Rox.png",
    },
    stats: {
      normal: "Breeding Time: 8 hr, <br> <br> Enhanced Time: 6 hr <br>",
      rare: "Rare Breeding Time: 10 hr 30 min , <br> <br> Enhanced Time: 7 hr 52 min 30 sec <br>",
      epic: "Epic Breeding Time: 19 hr, <br> <br> Enhanced Time: 14 hr 15 min <br>",
    },
  },
  {
    name: "Entbrat",
    audio: "sounds/Entbrat_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Entbrat.png",
      rare: "images/bm/Rare Entbrat.png",
      epic: "images/bm/Epic Entbrat.png",
    },
    stats: {
      normal: "Breeding Time: 24 hr, <br> <br> Enhanced Time: 18 hr <br>",
      rare: "Rare Breeding Time: 1 day 6 hr 30 min , <br> <br> Enhanced Time: 22 hr 52 min 30 sec <br>",
      epic: "Epic Breeding Time: 1 day 21 hr, <br> <br> Enhanced Time: 1 day 9 hr 45 min<br>",
    },
  },
  {
    name: "Shellbeat",
    audio: "sounds/Shellbeat_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Shellbeat.png",
      rare: "images/bm/Rare Shellbeat.png",
      epic: "images/bm/Epic Shellbeat.png",
    },
    stats: {
      normal: "Breeding Time: 24 hr, <br> <br> Enhanced Time: 18 hr <br>",
      rare: "Rare Breeding Time: 1 day 6 hr 30 min , <br> <br> Enhanced Time: 22 hr 52 min 30 sec <br>",
      epic: "Epic Breeding Time: 1 day 19 hr, <br> <br> Enhanced Time: 1 day 8 hr 15 min<br>",
    },
  },
  {
    name: "Quarrister",
    audio: "sounds/Quarrister_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Quarrister.png",
      rare: "images/bm/Rare Quarrister.png",
      epic: "images/bm/Epic Quarrister.png",
    },
    stats: {
      normal: "Breeding Time: 24 hr, <br> <br> Enhanced Time: 18 hr <br>",
      rare: "Rare Breeding Time: 1 day 6 hr 30 min , <br> <br> Enhanced Time: 22 hr 52 min 30 sec <br>",
      epic: "Epic Breeding Time: 1 day 11 hr, <br> <br> Enhanced Time: 1 day 2 hr 15 min<br>",
    },
  },
  {
    name: "Deedge",
    audio: "sounds/Deedge_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Deedge.png",
      rare: "images/bm/Rare Deedge.png",
      epic: "images/bm/Epic Deedge.png",
    },
    stats: {
      normal: "Breeding Time: 24 hr, <br> <br> Enhanced Time: 18 hr <br>",
      rare: "Rare Breeding Time: 1 day 6 hr 30 min , <br> <br> Enhanced Time: 22 hr 52 min 30 sec <br>",
      epic: "Epic Breeding Time: 1 day 17 hr, <br> <br> Enhanced Time: 1 day 6 hr 45 min<br>",
    },
  },
  {
    name: "Riff",
    audio: "sounds/Riff_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Riff.png",
      rare: "images/bm/Rare Riff.png",
      epic: "images/bm/Epic Riff.png",
    },
    stats: {
      normal: "Breeding Time: 24 hr, <br> <br> Enhanced Time: 18 hr <br>",
      rare: "Rare Breeding Time: 1 day 6 hr 30 min , <br> <br> Enhanced Time: 22 hr 52 min 30 sec <br>",
      epic: "Epic Breeding Time: 1 day 17 hr, <br> <br> Enhanced Time: 1 day 6 hr 45 min<br>",
    },
  },
  {
    name: "Spunge",
    audio: "sounds/Spunge_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Spunge.png",
      rare: "images/bm/Rare Spunge.png",
      epic: "images/bm/Epic Spunge.png",
    },
    stats: {
      normal: "Breeding Time: 12 hr, <br> <br> Enhanced Time: 9 hr <br>",
      rare: "Rare Breeding Time:15 hr 30 min , <br> <br> Enhanced Time: 11 hr 37 min <br>",
      epic: "Epic Breeding Time: 1 day 1 hr, <br> <br> Enhanced Time: 18 hr 45 min <br>",
    },
  },
  {
    name: "Thumpies",
    audio: "sounds/Thumpies_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Thumpies.png",
      rare: "images/bm/Rare Thumpies.png",
      epic: "images/bm/Epic Thumpies.png",
    },
    stats: {
      normal: "Breeding Time: 12 hr, <br> <br> Enhanced Time: 9 hr <br>",
      rare: "Rare Breeding Time:15 hr 30 min , <br> <br> Enhanced Time: 11 hr 37 min <br>",
      epic: "Epic Breeding Time: 1 day 9 hr, <br> <br> Enhanced Time: 1 day 45 min<br>",
    },
  },
  {
    name: "Congle",
    audio: "sounds/Congle_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Congle.png",
      rare: "images/bm/Rare Congle.png",
      epic: "images/bm/Epic Congle.png",
    },
    stats: {
      normal: "Breeding Time: 12 hr, <br> <br> Enhanced Time: 9 hr <br>",
      rare: "Rare Breeding Time:15 hr 30 min , <br> <br> Enhanced Time: 11 hr 37 min <br>",
      epic: "Epic Breeding Time: 23 hr, <br> <br> Enhanced Time: 17 hr 15 min <br>",
    },
  },
  {
    name: "Sneyser",
    audio: "sounds/Sneyser_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Sneyser.png",
      rare: "images/bm/Rare Sneyser.png",
      epic: "images/bm/Epic Sneyser.png",
    },
    stats: {
      normal: "Breeding Time: 40 hr, <br> <br> Enhanced Time: 30 hr <br>",
      rare: "Rare Breeding Time: 2 days 4 hr 30 min, <br> <br> Enhanced Time: 1 day 15 hr 22 min 30 sec <br>",
      epic: "Epic Breeding Time: 1 day 17 hr, <br> <br> Enhanced Time: 1 day 6 hr 45 min<br>",
    },
  },
  {
    name: "Scups",
    audio: "sounds/Scups_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Scups.png",
      rare: "images/bm/Rare Scups.png",
      epic: "images/bm/Epic Scups.png",
    },
    stats: {
      normal: "Breeding Time: 12 hr, <br> <br> Enhanced Time: 9 hr <br>",
      rare: "Rare Breeding Time:15 hr 30 min , <br> <br> Enhanced Time: 11 hr 37 min <br>",
      epic: "Epic Breeding Time: 1 day 13 hr, <br> <br> Enhanced Time: 1 day 3 hr 45 min<br>",
    },
  },
  {
    name: "PomPom",
    audio: "sounds/PomPom_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/PomPom.png",
      rare: "images/bm/Rare PomPom.png",
      epic: "images/bm/Epic PomPom.png",
    },
    stats: {
      normal: "Breeding Time: 12 hr, <br> <br> Enhanced Time: 9 hr <br>",
      rare: "Rare Breeding Time: 15 hr 30 min, <br> <br> Enhanced Time: 11 hr 37 min 30 sec <br>",
      epic: "Epic Breeding Time: 1 Day 3 hr, <br> <br> Enhanced Time: 20 hr 15 min <br>",
    },
  },
  {
    name: "Reedling",
    audio: "sounds/Reedling_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Reedling.png",
      rare: "images/bm/Rare Reedling.png",
      epic: "images/bm/Epic Reedling.png",
    },
    stats: {
      normal: "Breeding Time: 12 hr, <br> <br> Enhanced Time: 9 hr <br>",
      rare: "Rare Breeding Time:15 hr 30 min , <br> <br> Enhanced Time: 11 hr 37 min <br>",
      epic: "Epic Breeding Time: 17 hr, <br> <br> Enhanced Time: 12 hr 45 min <br>",
    },
  },
  {
    name: "Tring",
    audio: "sounds/Tring_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Tring.png",
      rare: "images/bm/Rare Tring.png",
      epic: "images/bm/Epic Tring.png",
    },
    stats: {
      normal: "Breeding Time: 40 hr, <br> <br> Enhanced Time: 30 hr <br>",
      rare: "Rare Breeding Time: 2 days 4 hr 30 min, <br> <br> Enhanced Time: 1 day 15 hr 22 min 30 sec <br>",
      epic: "Epic Breeding Time: 1 day 21 hr, <br> <br> Enhanced Time: 1 day 9 hr 45 min<br>",
    },
  },
  {
    name: "Barrb",
    audio: "sounds/Barrb_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Barrb.png",
      rare: "images/bm/Rare Barrb.png",
      epic: "images/bm/Epic Barrb.png",
    },
    stats: {
      normal: "Breeding Time: 20 hr, <br> <br> Enhanced Time: 15 hr <br>",
      rare: "Rare Breeding Time: 1 day 2 hr 30 min, <br> <br> Enhanced Time: 19 hr 52 min 30 sec <br>",
      epic: "Epic Breeding Time: 1 day 15 hr, <br> <br> Enhanced Time: 1 day 5 hr 15 min<br>",
    },
  },
  {
    name: "Floogull",
    audio: "sounds/Floogull_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Floogull.png",
      rare: "images/bm/Rare Floogull.png",
      epic: "images/bm/Epic Floogull.png",
    },
    stats: {
      normal: "Breeding Time: 20 hr, <br> <br> Enhanced Time: 15 hr <br>",
      rare: "Rare Breeding Time: 1 day 2 hr 30 min, <br> <br> Enhanced Time: 19 hr 52 min 30 sec <br>",
      epic: "Epic Breeding Time: 1 day 13 hr , <br> <br> Enhanced Time: 1 day 3 hr 45 min <br>",
    },
  },
  {
    name: "Repatillo",
    audio: "sounds/Repatillo_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Repatillo.png",
      rare: "images/bm/Rare Repatillo.png",
      epic: "images/bm/Epic Repatillo.png",
    },
    stats: {
      normal: "Breeding Time: 20 hr, <br> <br> Enhanced Time: 15 hr <br>",
      rare: "Rare Breeding Time: 1 day 2 hr 30 min, <br> <br> Enhanced Time: 19 hr 52 min 30 sec <br>",
      epic: "Epic Breeding Time: 1 day 9 hr, <br> <br> Enhanced Time: 1 day 45 min<br>",
    },
  },
  {
    name: "Whaddle",
    audio: "sounds/Whaddle_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Whaddle.png",
      rare: "images/bm/Rare Whaddle.png",
      epic: "images/bm/Epic Whaddle.png",
    },
    stats: {
      normal: "Breeding Time: 20 hr, <br> <br> Enhanced Time: 15 hr <br>",
      rare: "Rare Breeding Time: 1 day 2 hr 30 min, <br> <br> Enhanced Time: 19 hr 52 min 30 sec <br>",
      epic: "Epic Breeding Time: 1 day 1 hr, <br> <br> Enhanced Time: 18 hr 45 min <br>",
    },
  },
  {
    name: "Woolabee",
    audio: "sounds/Woolabee_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Woolabee.png",
      rare: "images/bm/Rare Woolabee.png",
      epic: "images/bm/Epic Woolabee.png",
    },
    stats: {
      normal: "Breeding Time: 20 hr, <br> <br> Enhanced Time: 15 hr <br>",
      rare: "Rare Breeding Time: 1 day 2 hr 30 min, <br> <br> Enhanced Time: 19 hr 52 min 30 sec <br>",
      epic: "Epic Breeding Time: 1 day 19 hr, <br> <br> Enhanced Time: 1 day 8 hr 15 min<br>",
    },
  },
  {
    name: "Wynq",
    audio: "sounds/Wynq_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Wynq.png",
      rare: "images/bm/Rare Wynq.png",
      epic: "images/bm/Epic Wynq.png",
    },
    stats: {
      normal: "Breeding Time: 20 hr, <br> <br> Enhanced Time: 15 hr <br>",
      rare: "Rare Breeding Time: 1 day 2 hr 30 min, <br> <br> Enhanced Time: 19 hr 52 min 30 sec <br>",
      epic: "Epic Breeding Time: 1 day 5 hr, <br> <br> Enhanced Time: 21 hr 45 min <br>",
    },
  },
  {
    name: "Thrumble",
    audio: "sounds/Thrumble_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Thrumble.png",
      rare: "images/bm/Rare Thrumble.png",
      epic: "images/bm/Epic Thrumble.png",
    },
    stats: {
      normal: "Breeding Time: 20 hr, <br> <br> Enhanced Time: 15 hr <br>",
      rare: "Rare Breeding Time: 1 day 2 hr 30 min, <br> <br> Enhanced Time: 19 hr 52 min 30 sec <br>",
      epic: "Epic Breeding Time: 1 day 7 hr, <br> <br> Enhanced Time: 23 hr 15 min <br>",
    },
  },
  {
    name: "Rootitoot",
    audio: "sounds/Rootitoot_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Rootitoot.png",
      rare: "images/bm/Rare Rootitoot.png",
      epic: "images/bm/Epic Rootitoot.png",
    },
    stats: {
      normal: "Breeding Time: 20 hr, <br> <br> Enhanced Time: 15 hr <br>",
      rare: "Rare Breeding Time: 1 day 2 hr 30 min, <br> <br> Enhanced Time: 19 hr 52 min 30 sec <br>",
      epic: "Epic Breeding Time: 1 day 11 hr, <br> <br> Enhanced Time: 1 day 2 hr 15 min<br>",
    },
  },
  {
    name: "Sooza",
    audio: "sounds/Sooza_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Sooza.png",
      rare: "images/bm/Rare Sooza.png",
      epic: "images/bm/Epic Sooza.png",
    },
    stats: {
      normal: "Breeding Time: 20 hr, <br> <br> Enhanced Time: 15 hr <br>",
      rare: "Rare Breeding Time: 1 day 2 hr 30 min, <br> <br> Enhanced Time: 19 hr 52 min 30 sec <br>",
      epic: "Epic Breeding Time: 1 Day 3 hr, <br> <br> Enhanced Time: 20 hr 15 min <br>",
    },
  },
  {
    name: "Ziggurab",
    audio: "sounds/Ziggurab_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Ziggurab.png",
      rare: "images/bm/Rare Ziggurab.png",
      epic: "images/bm/Epic Ziggurab.png",
    },
    stats: {
      normal: "Breeding Time: 20 hr, <br> <br> Enhanced Time: 15 hr <br>",
      rare: "Rare Breeding Time: 1 day 2 hr 30 min, <br> <br> Enhanced Time: 19 hr 52 min 30 sec <br>",
      epic: "Epic Breeding Time: 1 day 11 hr, <br> <br> Enhanced Time: 1 day 2 hr 15 min<br>",
    },
  },
  {
    name: "Blow t",
    audio: "sounds/Blow t_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Blow_t.png",
      rare: "images/bm/Rare Blow_t.png",
      epic: "images/bm/Epic Blow_t.png",
    },
    stats: {
      normal: "Breeding Time: 32 hr, <br> <br> Enhanced Time: 24 hr <br>",
      rare: "Breeding Time: 1 day 18 hr 30 min, <br> <br> Enhanced Time: 1 day 7 hr 52 min 30 sec <br>",
      epic: "",
    },
  },
  {
    name: "Gloptic",
    audio: "sounds/Gloptic_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Gloptic.png",
      rare: "images/bm/Rare Gloptic.png",
      epic: "images/bm/Epic Gloptic.png",
    },
    stats: {
      normal: "Breeding Time: 32 hr, <br> <br> Enhanced Time: 24 hr <br>",
      rare: "Rare Breeding Time: 1 day 18 hr 30 min, <br> <br> Enhanced Time: 1 day 7 hr 52 min 30 sec <br>",
      epic: "",
    },
  },
  {
    name: "Hairionette",
    audio: "sounds/Hairionette_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Hairionette (Major).png",
      rare: "images/bm/Rare Hairionette (Major).png",
      epic: "images/bm/Epic Hairionette (Major).png",
    },
    stats: {
      normal: "Breeding Time: 1 day 8 hr, <br> <br> Enhanced Time: 24 hr <br>",
      rare: "Rare Breeding Time: 1 day 4 hr 48 min, <br> <br> Enhanced Time: 1 day 7 hr 52 min 30 sec <br>",
      epic: "",
    },
  },
  {
    name: "Pladdie",
    audio: "sounds/Pladdie_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Pladdie.png",
      rare: "images/bm/Rare Pladdie.png",
      epic: "images/bm/Epic Pladdie.png",
    },
    stats: {
      normal: "Breeding Time: 32 hr, <br> <br> Enhanced Time: 24 hr <br>",
      rare: "Breeding Time: 1 day 18 hr 30 min <br> <br> Enhanced Breeding Time: 1 day 7 hr 52 min 30 sec",
      epic: "",
    },
  },
  {
    name: "Plinkajou",
    audio: "sounds/Plinkajou_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Plinkajou.png",
      rare: "images/bm/Rare Plinkajou.png",
      epic: "images/bm/Epic Plinkajou.png",
    },
    stats: {
      normal: "Breeding Time: 32 hr, <br> <br> Enhanced Time: 24 hr <br>",
      rare: "1 day 18 hr 30 min <br> <br> Enhanced Breeding Time: 1 day 7 hr 52 min 30 sec",
      epic: "",
    },
  },
  {
    name: "Enchantling",
    audio: "sounds/Enchantling_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Enchantling.png",
      rare: "images/bm/Rare Enchantling.png",
      epic: "images/bm/Epic Enchantling.png",
    },
    stats: {
      normal:
        "Breeding Time: 50 hr, <br> <br> Enhanced Time: 37 hr 30 min <br>",
      rare: "",
      epic: "",
    },
  },
  {
    name: "Shugabush",
    audio: "sounds/Shugabush_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Shugabush.png",
      rare: "images/bm/Rare Shugabush.png",
      epic: "images/bm/Epic Shugabush.png",
    },
    stats: {
      normal:
        "Breeding Time: 35 hr, <br> <br> Enhanced Time: 26 hr 15 min <br>",
      rare: "",
      epic: "",
    },
  },
  {
    name: "Ghazt",
    audio: "sounds/Ghazt_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Ghazt.png",
      rare: "images/bm/Rare Ghazt.png",
      epic: "images/bm/Epic Ghazt.png",
    },
    stats: {
      normal: "Breeding Time: 36 hr, <br> <br> Enhanced Time: 27 hr <br>",
      rare: "Rare Breeding Time: 1 day 21 hr 30 min, <br> <br> Enhanced Time: 1 day 10 hr 7 min 30 sec <br>",
      epic: "Epic Breeding Time: 1 hr 6 hr <br> <br> Enhanced Time: 22 hr 30 min<br>",
    },
  },
  {
    name: "Grumpyre",
    audio: "sounds/Grumpyre_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Grumpyre.png",
      rare: "images/bm/Rare Grumpyre.png",
      epic: "images/bm/Epic Grumpyre.png",
    },
    stats: {
      normal: "Breeding Time: 36 hr, <br> <br> Enhanced Time: 27 hr <br>",
      rare: "Rare Breeding Time: 1 day 21 hr 30 min, <br> <br> Enhanced Time: 1 day 10 hr 7 min 30 sec <br>",
      epic: "Epic Breeding Time: 1 day 4 hr, <br> <br> Enhanced Time: 21 hr<br>",
    },
  },
  {
    name: "Reebro",
    audio: "sounds/Reebro_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Reebro.png",
      rare: "images/bm/Rare Reebro.png",
      epic: "images/bm/Epic Reebro.png",
    },
    stats: {
      normal: "Breeding Time: 36 hr, <br> <br> Enhanced Time: 27 hr <br>",
      rare: "Rare Breeding Time: 1 day 21 hr 30 min, <br> <br> Enhanced Time: 1 day 10 hr 7 min 30 sec <br>",
      epic: "Epic Breeding Time: 1 day 10 hr, <br> <br> Enhanced Time: 1 day 1 hr 30 min<br>",
    },
  },
  {
    name: "Jeeode",
    audio: "sounds/Jeeode_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Jeeode.png",
      rare: "images/bm/Rare Jeeode.png",
      epic: "images/bm/Epic Jeeode.png",
    },
    stats: {
      normal: "Breeding Time: 36 hr, <br> <br> Enhanced Time: 27 hr <br>",
      rare: "Rare Breeding Time: 1 day 21 hr 30 min, <br> <br> Enhanced Time: 1 day 10 hr 7 min 30 sec <br>",
      epic: "Epic Breeding Time: 1 day 2 hr, <br> <br> Enhanced Time: 19 hr 30 min<br>",
    },
  },
  {
    name: "Humbug",
    audio: "sounds/Humbug_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Humbug.png",
      rare: "images/bm/Rare Humbug.png",
      epic: "images/bm/Epic Humbug.png",
    },
    stats: {
      normal: "Breeding Time: 36 hr, <br> <br> Enhanced Time: 27 hr <br>",
      rare: "Rare Breeding Time: 1 day 21 hr 30 min, <br> <br> Enhanced Time: 1 day 10 hr 7 min 30 sec <br>",
      epic: "Epic Breeding Time: 1 day 8 hr, <br> <br> Enhanced Time: 1 day<br>",
    },
  },
  {
    name: "Whisp",
    audio: "sounds/Whisp_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Whisp.png",
      rare: "images/bm/Rare Whisp.png",
      epic: "images/bm/Epic Whisp.png",
    },
    stats: {
      normal:
        "Breeding Time: 42 hr, <br> <br> Enhanced Time: 31 hr 30 min <br>",
      rare: "Rare Breeding Time: 2 day 4 hr 30 min, <br> <br> Enhanced Time: 1 day 15 hr 22 min 30 sec <br>",
      epic: "Epic Breeding Time: 1 day 16 hr, <br> <br> Enhanced Time: 1 day 6 hr<br>",
    },
  },
  {
    name: "Nebulob",
    audio: "sounds/Nebulob_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Nebulob.png",
      rare: "images/bm/Rare Nebulob.png",
      epic: "images/bm/Epic Nebulob.png",
    },
    stats: {
      normal:
        "Breeding Time: 42 hr, <br> <br> Enhanced Time: 31 hr 30 min <br>",
      rare: "Rare Breeding Time: 2 day 4 hr 30 min, <br> <br> Enhanced Time: 1 day 15 hr 22 min 30 sec <br>",
      epic: "Epic Breeding Time: 1 day 20 hr, <br> <br> Enhanced Time: 1 day 9 hr<br>",
    },
  },
  {
    name: "Arackulele",
    audio: "sounds/Arackulele_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Arackulele.png",
      rare: "images/bm/Rare Arackulele.png",
      epic: "images/bm/Epic Arackulele.png",
    },
    stats: {
      normal:
        "Breeding Time: 42 hr, <br> <br> Enhanced Time: 31 hr 30 min <br>",
      rare: "Rare Breeding Time: 2 day 4 hr 30 min, <br> <br> Enhanced Time: 1 day 15 hr 22 min 30 sec <br>",
      epic: "Epic Breeding Time: 1 day 16 hr, <br> <br> Enhanced Time: 1 day 6 hr <br>",
    },
  },
  {
    name: "Sox",
    audio: "sounds/Sox_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Sox.png",
      rare: "images/bm/Rare Sox.png",
      epic: "images/bm/Epic Sox.png",
    },
    stats: {
      normal:
        "Breeding Time: 42 hr, <br> <br> Enhanced Time: 31 hr 30 min <br>",
      rare: "Rare Breeding Time: 2 day 4 hr 30 min, <br> <br> Enhanced Time: 1 day 15 hr 22 min 30 sec <br>",
      epic: "Epic Breeding Time: 1 day 12 hr, <br> <br> Enhanced Time: 1 day 3 hr<br>",
    },
  },
  {
    name: "Boodoo",
    audio: "sounds/Boodoo_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Boodoo.png",
      rare: "images/bm/Rare Boodoo.png",
      epic: "images/bm/Epic Boodoo.png",
    },
    stats: {
      normal:
        "Breeding Time: 42 hr, <br> <br> Enhanced Time: 31 hr 30 min <br>",
      rare: "Rare Breeding Time: 2 day 4 hr 30 min, <br> <br> Enhanced Time: 1 day 15 hr 22 min 30 sec <br>",
      epic: "Epic Breeding Time: 1 day 18 hr, <br> <br> Enhanced Time: 1 day 7 hr 30 min<br>",
    },
  },
  {
    name: "Bellowfish",
    audio: "sounds/Bellowfish_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Bellowfish.png",
      rare: "images/bm/Rare Bellowfish.png",
      epic: "images/bm/Epic Bellowfish.png",
    },
    stats: {
      normal:
        "Breeding Time: 42 hr, <br> <br> Enhanced Time: 31 hr 30 min <br>",
      rare: "Rare Breeding Time: 2 day 4 hr 30 min, <br> <br> Enhanced Time: 1 day 15 hr 22 min 30 sec <br>",
      epic: "Epic Breeding Time: 2 day<br> <br> Enhanced Time: 1 day 12 hr<br>",
    },
  },
  {
    name: "Jellbilly",
    audio: "sounds/Jellbilly_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Jellbilly.png",
      rare: "images/bm/Rare Jellbilly.png",
      epic: "images/bm/Epic Jellbilly.png",
    },
    stats: {
      normal:
        "Breeding Time: 42 hr, <br> <br> Enhanced Time: 31 hr 30 min <br>",
      rare: "Rare Breeding Time: 2 day 4 hr 30 min, <br> <br> Enhanced Time: 1 day 15 hr 22 min 30 sec <br>",
      epic: "Epic Breeding Time: 1 day 14 hr, <br> <br> Enhanced Time: 1 day 4 hr 30 min<br>",
    },
  },
  {
    name: "Kazilleon",
    audio: "sounds/Kazilleon_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Kazilleon.png",
      rare: "images/bm/Rare Kazilleon.png",
      epic: "images/bm/Epic Kazilleon.png",
    },
    stats: {
      normal:
        "Breeding Time: 42 hr, <br> <br> Enhanced Time: 31 hr 30 min <br>",
      rare: "Rare Breeding Time: 2 day 4 hr 30 min, <br> <br> Enhanced Time: 1 day 15 hr 22 min 30 sec <br>",
      epic: "Epic Breeding Time: 1 day 14 hr, <br> <br> Enhanced Time: 1 day 4 hr 30 min<br>",
    },
  },
  {
    name: "Dragong",
    audio: "sounds/Dragong_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Dragong.png",
      rare: "images/bm/Rare Dragong.png",
      epic: "images/bm/Epic Dragong.png",
    },
    stats: {
      normal:
        "Breeding Time: 42 hr, <br> <br> Enhanced Time: 31 hr 30 min <br>",
      rare: "Rare Breeding Time: 2 day 4 hr 30 min, <br> <br> Enhanced Time: 1 day 15 hr 22 min 30 sec <br>",
      epic: "Epic Breeding Time: 1 day 12 hr <br> <br> Enhanced Time: 1 day 3 hr",
    },
  },
  {
    name: "Fung Pray",
    audio: "sounds/Fung Pray_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Fung Pray.png",
      rare: "images/bm/Rare Fung Pray.png",
      epic: "images/bm/Epic Fung Pray.png",
    },
    stats: {
      normal:
        "Breeding Time: 42 hr, <br> <br> Enhanced Time: 31 hr 30 min <br>",
      rare: "Rare Breeding Time: 2 day 4 hr 30 min, <br> <br> Enhanced Time: 1 day 15 hr 22 min 30 sec <br>",
      epic: "Epic Breeding Time: 1 day 20 hours <br><br> Enhanced Time: 1 day 9 hr",
    },
  },
  {
    name: "G joob",
    audio: "sounds/G'joob_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/G_joob.png",
      rare: "images/bm/Rare G_joob.png",
      epic: "images/bm/Epic G_joob.png",
    },
    stats: {
      normal: "Breeding Time: 18hr, <br> <br> Enhanced Time: 13 hr 30 min <br>",
      rare: "Rare Breeding Time: 22 hr 30 min, <br> <br> Enhanced Time: 16 hr 52 min 30 sec <br>",
      epic: "Epic Breeding Time: 1 day 9 hr 10 min, <br> <br> Enhanced Time: 1 day 52 min 30 sec<br>",
    },
  },
  {
    name: "Strombonin",
    audio: "sounds/Strombonin_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Strombonin.png",
      rare: "images/bm/Rare Strombonin.png",
      epic: "images/bm/Epic Strombonin.png",
    },
    stats: {
      normal:
        "Breeding Time: 23 hr, <br> <br> Enhanced Time: 17 hr 15 min <br>",
      rare: "Rare Breeding Time: 1 day 4 hr 45 min, <br> <br> Enhanced Time: 21 hr 33 min 45 sec <br>",
      epic: "Epic Breeding Time: 1 day 10 hr 30 min, <br> <br> Enhanced Time: 1 day 1 hr 52 min 30 sec<br>",
    },
  },
  {
    name: "Yawstrich",
    audio: "sounds/Yawstrich_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Yawstrich.png",
      rare: "images/bm/Rare Yawstrich.png",
      epic: "images/bm/Epic Yawstrich.png",
    },
    stats: {
      normal: "Breeding Time: 28 hr, <br> <br> Enhanced Time: 21 hr <br>",
      rare: "Rare Breeding Time: 1 day 11 hr, <br> <br> Enhanced Time: 1 day 2 hr 15 min 45 sec <br>",
      epic: "Epic Breeding Time: 1 day 14 hr 23 min, <br> <br> Enhanced Time: 1 day 4 hr 30 min<br>",
    },
  },
  {
    name: "Anglow",
    audio: "sounds/Anglow_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Anglow.png",
      rare: "images/bm/Rare Anglow.png",
      epic: "images/bm/Epic Anglow.png",
    },
    stats: {
      normal:
        "Breeding Time: 33 hr, <br> <br> Enhanced Time: 24 hr 45 min <br>",
      rare: "Rare Breeding Time: 1 day 17 hr 15 min, <br> <br> Enhanced Time: 1 day 6 hr 56 min 15 sec <br>",
      epic: "Epic Breeding Time: 1 day 17 hr 13 min, <br><br> Enchanced Time: 1 day 6 hr 54 min 45 sec<br>",
    },
  },
  {
    name: "Hyehehe",
    audio: "sounds/Hyehehe_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Hyehehe.png",
      rare: "images/bm/Rare Hyehehe.png",
      epic: "images/bm/Epic Hyehehe.png",
    },
    stats: {
      normal: "Breeding Time: 28 hr, <br> <br> Enhanced Time: 21 hr <br>",
      rare: "Rare Breeding Time: 1 day 11 hr, <br> <br> Enhanced Time: 1 day 2 hr 15 min 45 sec <br>",
      epic: "Epic Breeding Time: 1 day 9 hr 28 min <br> <br> Enhanced Breeding Time: 1 day 1 hr 6 min",
    },
  },
  {
    name: "Buzzinga",
    audio: "sounds/Buzzinga_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Buzzinga.png",
      rare: "images/bm/Rare Buzzinga.png",
      epic: "images/bm/Epic Buzzinga.png",
    },
    stats: {
      normal: "Breeding Time: 28 hr, <br> <br> Enhanced Time: 21 hr <br>",
      rare: "Rare Breeding Time: 1 day 11 hr, <br> <br> Enhanced Time: 1 day 2 hr 15 min 45 sec <br>",
      epic: "Epic Breeding Time: 1 day 4 hr 10 min, <br> <br> Enhanced Time: 1 day 2 hr 30 min<br>",
    },
  },
  {
    name: "Cherubble",
    audio: "sounds/Cherubble_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Cherubble.png",
      rare: "images/bm/Rare Cherubble.png",
      epic: "images/bm/Epic Cherubble.png",
    },
    stats: {
      normal:
        "Breeding Time: 18 hr, <br> <br> Enhanced Time: 13 hr 30 min <br>",
      rare: "Rare Breeding Time: 22 hr 30 min, <br> <br> Enhanced Time: 16 hr 52 min 30 sec <br>",
      epic: "Breeding TIme: 1 day 17 hr 13 min <br> <br> Enhanced Breeding Time: 1 day 6 hr 54 min 45 sec ",
    },
  },
  {
    name: "Cataliszt",
    audio: "sounds/Cataliszt_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Cataliszt.png",
      rare: "images/bm/Rare Cataliszt.png",
      epic: "images/bm/Epic Cataliszt.png",
    },
    stats: {
      normal: "Breeding Time: 9 hr, <br> <br> Enhanced Time: 6 hr 45 min <br>",
      rare: "Rare Breeding Time: 11 hr 15 min, <br> <br> Enhanced Time: 8 hr 26 min 15 sec <br>",
      epic: "",
    },
  },
  {
    name: "Bleatnik",
    audio: "sounds/Bleatnik_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Bleatnik.png",
      rare: "images/bm/Rare Bleatnik.png",
      epic: "images/bm/Epic Bleatnik.png",
    },
    stats: {
      normal: "Breeding Time: 27 hr, <br> <br> Enhanced Time: 20 hr 15 min <br>",
      rare: "Breeding Time: 1 day 9 hr 45 min <br><br> Enhanced Time: 1 day 1 hr 18 min 45 sec",
      epic: "Breeding Time: 2 days 1 hr 13 min <br><br> Enhanced Time: 1 day 12 hr 54 min 45 sec",
    },
  },
  {
    name: "Cranchee",
    audio: "sounds/Cranchee_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Cranchee.png",
      rare: "images/bm/Rare Cranchee.png",
      epic: "images/bm/Epic Cranchee.png",
    },
    stats: {
      normal: "Breeding Time: 32 hr, <br> <br> Enhanced Time: 24 hr <br>",
      rare: "",
      epic: "",
    },
  },
  {
    name: "Sporerow",
    audio: "sounds/Sporerow_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Sporerow.png",
      rare: "images/bm/Rare Sporerow.png",
      epic: "images/bm/Epic Sporerow.png",
    },
    stats: {
      normal:
        "Breeding Time: 37 hr, <br> <br> Enhanced Time: 27 hr 45 min <br>",
      rare: "Rare Breeding Time: 1 day 22 hr 15 min <br><br> Enhanced Time: 1 day 10 hr 41 min 15 sec",
      epic: "",
    },
  },
  {
    name: "Pinghound",
    audio: "sounds/Pinghound_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Pinghound.png",
      rare: "images/bm/Rare Pinghound.png",
      epic: "images/bm/Epic Pinghound.png",
    },
    stats: {
      normal:
        "Breeding Time: 42 hr, <br> <br> Enhanced Time: 31 hr 30 min <br>",
      rare: "Breeding TIme: 2 days 4 hr 30 min <br><br> Enhanced Time: 1 day 15 hr 22 min 30 sec ",
      epic: "",
    },
  },
  {
    name: "Wheezel",
    audio: "sounds/Wheezel_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Wheezel.png",
      rare: "images/bm/Rare Wheezel.png",
      epic: "images/bm/Epic Wheezel.png",
    },
    stats: {
      normal:
        "Breeding Time: 37 hr, <br> <br> Enhanced Time: 27 hr 45 min <br>",
      rare: "Breeding Time: 1 day 22 hr 15 min <br><br> Enhanced Breeding Time: 1 day 10 hr 41 min 15 sec",
      epic: "",
    },
  },
  {
    name: "Knurv",
    audio: "sounds/Knurv_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Knurv.png",
      rare: "images/bm/Rare Knurv.png",
      epic: "images/bm/Epic Knurv.png",
    },
    stats: {
      normal: "Breeding Time: 32 hr, <br> <br> Enhanced Time: 24 hr <br>",
      rare: "Breeding Time: 1 day 16 hr, <br> <br> Enhanced Time: 1 day 6 hr <br>",
      epic: "",
    },
  },
  {
    name: "shLep",
    audio: "sounds/shLep_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/shLep.png",
      rare: "images/bm/Rare shLep.png",
      epic: "images/bm/Epic shLep.png",
    },
    stats: {
      normal:
        "Breeding Time: 27 hr, <br> <br> Enhanced Time: 20 hr 15 min <br>",
      rare: "Breeding Time: 1 day 9 hr 45 min <br><br> Enhanced Breeding Time: 1 day 1 hr 18 min 45 sec",
      epic: "",
    },
  },
  {
    name: "Punkleton",
    audio: "sounds/Punkleton_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Punkleton.png",
      rare: "images/bm/Rare Punkleton.png",
      epic: "images/bm/Epic Punkleton.png",
    },
    stats: {
      normal:
        "Breeding Time: 18 hr, <br> <br> Enhanced Time: 13 hr 30 min <br>",
      rare: "Rare Breeding Time: 1 day 7 hr 45 min, <br> <br> Enhanced Time: 23 hr 48 min 45 sec<br>",
      epic: "Epic Breeding Time: 1 day 7 hr 10 min, <br> <br> Enhanced Time: 23 hr 22 min<br>",
    },
  },
  {
    name: "Yool",
    audio: "sounds/Yool_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Yool.png",
      rare: "images/bm/Rare Yool.png",
      epic: "images/bm/Epic Yool.png",
    },
    stats: {
      normal: "Breeding Time: 36 hr, <br> <br> Enhanced Time: 1 day 3 hr <br>",
      rare: "Rare Breeding Time: 1 day 7 hr 45 min, <br> <br> Enhanced Time: 23 hr 48 min 45 sec<br>",
      epic: "Epic Breeding Time: 1 day 1 hr 22 hr, <br> <br> Enhanced Time: 19 hr 1 min 30 sec<br>",
    },
  },
  {
    name: "Schmoochle",
    audio: "sounds/Schmoochle_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Schmoochle.png",
      rare: "images/bm/Rare Schmoochle.png",
      epic: "images/bm/Epic Schmoochle.png",
    },
    stats: {
      normal:
        "Breeding Time: 31 hr 6 min 30 sec, <br> <br> Enhanced Time: 23 hr 19 min 52 sec <br>",
      rare: "Rare Breeding Time: 1 day 7 hr 45 min, <br> <br> Enhanced Time: 23 hr 48 min 45 sec<br>",
      epic: "Epic Breeding Time: 22 hr 14 min, <br> <br> Enhanced Time: 16 hr 40 min 30 sec<br>",
    },
  },
  {
    name: "Blabbit",
    audio: "sounds/Blabbit_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Blabbit.png",
      rare: "images/bm/Rare Blabbit.png",
      epic: "images/bm/Epic Blabbit.png",
    },
    stats: {
      normal:
        "Breeding Time: 19 hr, <br> <br> Enhanced Time: 14 hr 15 min <br>",
      rare: "Rare Breeding Time: 1 day 7 hr 45 min, <br> <br> Enhanced Time: 23 hr 48 min 45 sec<br>",
      epic: "Epic Breeding Time: 1 day 1 hr 22 min, <br> <br> Enhanced Time: 19 hr 1 min 30 sec<br>",
    },
  },
  {
    name: "Hoola",
    audio: "sounds/Hoola_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Hoola.png",
      rare: "images/bm/Rare Hoola.png",
      epic: "images/bm/Epic Hoola.png",
    },
    stats: {
      normal:
        "Breeding Time: 25 hr, <br> <br> Enhanced Time: 18 hr 45 min <br>",
      rare: "Rare Breeding Time: 1 day 7 hr 45 min, <br> <br> Enhanced Time: 23 hr 48 min 45 sec<br>",
      epic: "Epic Breeding Time: 21hr 20 min, <br> <br> Enhanced Time: 16 hr<br>",
    },
  },
  {
    name: "Viveine",
    audio: "sounds/Viveine_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Viveine.png",
      rare: "images/bm/Rare Viveine.png",
      epic: "images/bm/Epic Viveine.png",
    },
    stats: {
      normal:
        "Breeding Time: 26 hr 5 min 20 sec, <br> <br> Enhanced Time: 19 hr 34 min <br>",
      rare: "Rare Breeding Time: 1 day 7 hr 45 min, <br> <br> Enhanced Time: 23 hr 48 min 45 sec<br>",
      epic: "Epic Breeding Time: 1 day 8 hr 10 min, <br> <br> Enhanced Time: 1 day 7 min 30 sec<br>",
    },
  },
  {
    name: "Monculus",
    audio: "sounds/Monculus_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Monculus.png",
      rare: "images/bm/Rare Monculus.png",
      epic: "images/bm/Epic Monculus.png",
    },
    stats: {
      normal:
        "Breeding Time: 20 hr 4 min, <br> <br> Enhanced Time: 15 hr 3 min <br>",
      rare: "Rare Breeding Time: 1 day 7 hr 45 min, <br> <br> Enhanced Time: 23 hr 48 min 45 sec<br>",
      epic: "Epic Breeding Time: 2 day 9 hr 30 min 40 sec, <br> <br> Enhanced Time: 1 day 19 hr 8 min<br>",
    },
  },
  {
    name: "Gobbleygourd",
    audio: "sounds/Gobbleygourd_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Gobbleygourd.png",
      rare: "images/bm/Rare Gobbleygourd.png",
      epic: "images/bm/Epic Gobbleygourd.png",
    },
    stats: {
      normal:
        "Breeding Time: 21 hr, <br> <br> Enhanced Time: 15 hr 45 min <br>",
      rare: "Rare Breeding Time: 1 day 7 hr 45 min, <br> <br> Enhanced Time: 23 hr 48 min 45 sec<br>",
      epic: "Epic Breeding Time: 1 day 3 hr 11 min, <br> <br> Enhanced Time: 20 hr 23 min 15 sec<br>",
    },
  },
  {
    name: "Spurrit",
    audio: "sounds/Spurrit_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Spurrit.png",
      rare: "images/bm/Rare Spurrit.png",
      epic: "images/bm/Epic Spurrit.png",
    },
    stats: {
      normal:
        "Breeding Time: 20 hr 18 min, <br> <br> Enhanced Time: 15 hr 13 min 30 sec <br>",
      rare: "Rare Breeding Time: 1 day 7 hr 45 min, <br> <br> Enhanced Time: 23 hr 48 min 45 sec<br>",
      epic: "Epic Breeding Time: 1 day 3 hr 20 sec, <br> <br> Enhanced Time: 20 hr 30 min<br>",
    },
  },
  {
    name: "Whiz bang",
    audio: "sounds/Whiz-bang_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Whiz-bang.png",
      rare: "images/bm/Rare Whiz-bang.png",
      epic: "images/bm/Epic Whiz-bang.png",
    },
    stats: {
      normal:
        "Breeding Time: 28 hr 6 min, <br> <br> Enhanced Time: 21 hr 4 min 30 sec <br>",
      rare: "Rare Breeding Time: 1 day 7 hr 45 min, <br> <br> Enhanced Time: 23 hr 48 min 45 sec<br>",
      epic: "Epic Breeding Time: 1 day 6 hr 30 min, <br> <br> Enhanced Time: 22 hr 52 min 30 sec<br>",
    },
  },
  {
    name: "Boo'qwurm",
    audio: "sounds/Boo_qwurm_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Boo_qwurm.png",
      rare: "images/bm/Rare Boo_qwurm.png",
      epic: "images/bm/Epic Boo_qwurm.png",
    },
    stats: {
      normal:
        "Breeding Time: 1 day 6 min 24 sec, <br> <br> Enhanced Time: 18 hr 4 min 48 sec <br>",
      rare: "Rare Breeding Time: 1 day 7 hr 45 min, <br> <br> Enhanced Time: 23 hr 48 min 45 sec<br>",
      epic: "Epic Breeding Time: 2 day 4 hr 10 min, <br> <br> Enhanced Time: 1 day 15 hr 7 min 30 sec<br>",
    },
  },
  {
    name: "Ffidyll",
    audio: "sounds/Ffidyll_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Ffidyll.png",
      rare: "images/bm/Rare Ffidyll.png",
      epic: "images/bm/Epic Ffidyll.png",
    },
    stats: {
      normal:
        "Breeding Time: 22 hr 44 min, <br> <br> Enhanced Time: 17 hr 3 min <br>",
      rare: "Rare Breeding Time: 1 day 7 hr 45 min, <br> <br> Enhanced Time: 23 hr 48 min 45 sec<br>",
      epic: "Epic Breeding Time: 1 day 6 hr 17 min, <br> <br> Enhanced Time: 22 hr 42 min 45 sec<br>",
    },
  },
  {
    name: "Clavavera",
    audio: "sounds/Clavavera_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Clavavera.png",
      rare: "images/bm/Rare Clavavera.png",
      epic: "images/bm/Epic Clavavera.png",
    },
    stats: {
      normal:
        "Breeding Time: 22 hr 11 min, <br> <br> Enhanced Time: 16 hr 38 min 15 sec <br>",
      rare: "Rare Breeding Time: 1 day 7 hr 45 min, <br> <br> Enhanced Time: 23 hr 48 min 45 sec<br>",
      epic: "Epic Breeding Time: 23 hr 11 min, <br> <br> Enhanced Time: 17 hr 23 min 15 sec<br>",
    },
  },
  {
    name: "Carillong",
    audio: "sounds/Carillong_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Carillong.png",
      rare: "images/bm/Rare Carillong.png",
      epic: "images/bm/Epic Carillong.png",
    },
    stats: {
      normal:
        "Breeding Time: 27 hr 9 min 32 sec, <br> <br> Enhanced Time: 20 hr 22 min 9 sec <br>",
      rare: "Rare Breeding Time: 1 day 7 hr 45 min, <br> <br> Enhanced Time: 23 hr 48 min 45 sec<br>",
      epic: "Epic Breeding Time: 1 day 12 hr 12 min, <br> <br> Enhanced Time: 1 day 3 hr 9 min<br>",
    },
  },
  {
    name: "Jam Boree",
    audio: "sounds/Jam_Boree_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Jam Boree - Year 11.png",
      rare: "images/bm/Rare Jam Boree - Year 11.png",
      epic: "images/bm/Epic Jam Boree - Year 11.png",
    },
    stats: {
      normal:
        "Breeding Time: 40 hr 24 min, <br> <br> Enhanced Time: 1 day 6 hr 18 min <br>",
      rare: "Rare Breeding Time: 2 day 2 hr, <br> <br> Enhanced Time: 1 day 13 hr 30 min<br>",
      epic: "Epic Breeding Time: 1 day 16 hr 23 min, <br> <br> Enhanced Time: 1 day 6 hr 17 min 15 sec<br>",
    },
  },
  {
    name: "Fluoress",
    audio: "sounds/Fluoress_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Fluoress.png",
      rare: "images/bm/Rare Fluoress.png",
      epic: "images/bm/Epic Fluoress.png",
    },
    stats: {
      normal:
        "Breeding Time: 1 hr 48 min, <br> <br> Enhanced Time: 1 hr 18 min <br>",
      rare: "Rare Breeding Time: 8 hr, <br> <br> Enhanced Time: 6 hr<br>",
      epic: "",
    },
  },
  {
    name: "Theremind",
    audio: "sounds/Theremind_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Theremind.png",
      rare: "images/bm/Rare Theremind.png",
      epic: "images/bm/Epic Theremind.png",
    },
    stats: {
      normal: "Breeding Time: 3 hr, <br> <br> Enhanced Time: 2 hr 15 min <br>",
      rare: "Rare Breeding Time: 8 hr, <br> <br> Enhanced Time: 6 hr<br>",
      epic: "",
    },
  },
  {
    name: "Floot Fly",
    audio: "sounds/Floot_Fly_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Floot Fly.png",
      rare: "images/bm/Rare Floot Fly.png",
      epic: "images/bm/Epic Floot Fly.png",
    },
    stats: {
      normal: "Breeding Time: 4 hr, <br> <br> Enhanced Time: 3 hr <br>",
      rare: "Rare Breeding Time: 8 hr, <br> <br> Enhanced Time: 6 hr<br>",
      epic: "",
    },
  },
  {
    name: "Clackula",
    audio: "sounds/Clackula_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Clackula.png",
      rare: "images/bm/Rare Clackula.png",
      epic: "images/bm/Epic Clackula.png",
    },
    stats: {
      normal: "Breeding Time: 5 hr, <br> <br> Enhanced Time: 3 hr 45 min <br>",
      rare: "Rare Breeding Time: 8 hr, <br> <br> Enhanced Time: 6 hr<br>",
      epic: "Epic Breeding Time: 20 hr 6 min <br><br> Enhanced Time: 15 hr 4 min 30 sec <br>",
    },
  },
  {
    name: "Gob",
    audio: "sounds/Gob_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Gob.png",
      rare: "images/bm/Rare Gob.png",
      epic: "images/bm/Epic Gob.png",
    },
    stats: {
      normal: "Breeding Time: 9 hr, <br> <br> Enhanced Time: 6 hr 45 min <br>",
      rare: "Rare Breeding Time: 12 hr 30 min, <br> <br> Enhanced Time: 9 hr 22 min 30 sec<br>",
      epic: "",
    },
  },
  {
    name: "Bulbo",
    audio: "sounds/Bulbo_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Bulbo.png",
      rare: "images/bm/Rare Bulbo.png",
      epic: "images/bm/Epic Bulbo.png",
    },
    stats: {
      normal: "Breding Time: 9 hr, <br> <br> Enhanced Time: 6 hr 45 min <br>",
      rare: "Rare Breeding Time: 12 hr 30 min <br> <br> Enchanced Time: 9 hr 22 min 30 sec <br>",
      epic: "",
    },
  },
  {
    name: "Pluckbill",
    audio: "sounds/Pluckbill_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Pluckbill.png",
      rare: "images/bm/Rare Pluckbill.png",
      epic: "images/bm/Epic Pluckbill.png",
    },
    stats: {
      normal: "Breeding Time: 9 hr, <br> <br> Enhanced Time: 6 hr 45 min <br>",
      rare: "Rare Breeding Time: 12 hr 30 min, <br> <br> Enhanced Time: 9 hr 22 min 30 sec<br>",
      epic: "",
    },
  },
  {
    name: "Bonkers",
    audio: "sounds/Bonkers_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Bonkers.png",
      rare: "images/bm/Rare Bonkers.png",
      epic: "images/bm/Epic Bonkers.png",
    },
    stats: {
      normal: "Breeding Time: 9 hr, <br> <br> Enhanced Time: 6 hr 45 min <br>",
      rare: "Rare Breeding Time: 12 hr 30 min, <br> <br> Enhanced Time: 9 hr 22 min 30 sec<br>",
      epic: "",
    },
  },
  {
    name: "Poppette",
    audio: "sounds/Poppette_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Poppette.png",
      rare: "images/bm/Rare Poppette.png",
      epic: "images/bm/Epic Poppette.png",
    },
    stats: {
      normal: "Breeding Time: 9 hr, <br> <br> Enhanced Time: 6 hr 45 min <br>",
      rare: "Rare Breeding Time: 12 hr 30 min, <br> <br> Enhanced Time: 9 hr 22 min 30 sec<br>",
      epic: "",
    },
  },
  {
    name: "Yuggler",
    audio: "sounds/Yuggler_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Yuggler.png",
      rare: "images/bm/Rare Yuggler.png",
      epic: "images/bm/Epic Yuggler.png",
    },
    stats: {
      normal: "Breeding Time: 9 hr, <br> <br> Enhanced Time: 6 hr 45 min <br>",
      rare: "Rare Breeding Time: 12 hr 30 min, <br> <br> Enhanced Time: 9 hr 22 min 30 sec<br>",
      epic: "",
    },
  },
  {
    name: "HippityHop",
    audio: "sounds/HippityHop_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/HippityHop.png",
      rare: "images/bm/Rare HippityHop.png",
      epic: "images/bm/Epic HippityHop.png",
    },
    stats: {
      normal: "Breeding Time: 9 hr, <br> <br> Enhanced Time: 6 hr 45 min <br>",
      rare: "Rare Breeding Time: 12 hr 30 min, <br> <br> Enhanced Time: 9 hr 22 min 30 sec<br>",
      epic: "",
    },
  },
  {
    name: "Squot",
    audio: "sounds/Squot_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Squot.png",
      rare: "images/bm/Rare Squot.png",
      epic: "images/bm/Epic Squot.png",
    },
    stats: {
      normal: "Breeding Time: 9 hr, <br> <br> Enhanced Time: 6 hr 45 min <br>",
      rare: "Breeding Time: 12 hr 30 min <br><br> Enhanced Breeding Time: 9 hr 22 min 30 sec",
      epic: "",
    },
  },
  {
    name: "Wimmzies",
    audio: "sounds/Wimmzies_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Wimmzies.png",
      rare: "images/bm/Rare Wimmzies.png",
      epic: "images/bm/Epic Wimmzies.png",
    },
    stats: {
      normal: "Breeding Time: 9 hr, <br> <br> Enhanced Time: 6 hr 45 min <br>",
      rare: "Rare Breeding Time: 12 hr 30 min, <br> <br> Enhanced Time: 9 hr 22 min 30 sec<br>",
      epic: "",
    },
  },
  {
    name: "Peckidna",
    audio: "sounds/Peckidna_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Peckidna.png",
      rare: "images/bm/Rare Peckidna.png",
      epic: "images/bm/Epic Peckidna.png",
    },
    stats: {
      normal: "Breeding Time: 9 hr, <br> <br> Enhanced Time: 6 hr 45 min <br>",
      rare: "Breeding Time: 12 hr 30 min <br><br> Enhanced Breeding Time: 9 hr 22 min 30 sec",
      epic: "",
    },
  },
  {
    name: "Denchuhs",
    audio: "sounds/Denchuhs_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Denchuhs.png",
      rare: "images/bm/Rare Denchuhs.png",
      epic: "images/bm/Epic Denchuhs.png",
    },
    stats: {
      normal: "Breeding Time: 9 hr, <br> <br> Enhanced Time: 6 hr 45 min <br>",
      rare: "Breeding Time: 12 hr 30 min, <br> <br> Enhanced Time: 9 hr 22 min 30 sec <br>",
      epic: "",
    },
  },
  {
    name: "Hawlo",
    audio: "sounds/Hawlo_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Hawlo.png",
      rare: "images/bm/Rare Hawlo.png",
      epic: "images/bm/Epic Hawlo.png",
    },
    stats: {
      normal: "Breeding Time: 9 hr, <br> <br> Enhanced Time: 6 hr 45 min <br>",
      rare: "Rare Breeding Time: 12 hr 30 min, <br> <br> Enhanced Time: 9 hr 22 min 30 sec<br>",
      epic: "",
    },
  },
  {
    name: "Xyster",
    audio: "sounds/Xyster_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Xyster.png",
      rare: "images/bm/Rare Xyster.png",
      epic: "images/bm/Epic Xyster.png",
    },
    stats: {
      normal: "Breeding Time: 20 hr, <br> <br> Enhanced Time: 15 hr <br>",
      rare: "Rare Breeding Time: 1 day 2 hr 30 min, <br> <br> Enhanced Time: 19 hr 52 min 30 sec<br>",
      epic: "",
    },
  },
  {
    name: "Cahoot",
    audio: "sounds/Cahoot_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Cahoot.png",
      rare: "images/bm/Rare Cahoot.png",
      epic: "images/bm/Epic Cahoot.png",
    },

    stats: {
      normal: "Breeding Time: 20 hr, <br> <br> Enhanced Time: 15 hr <br>",
      rare: "Breeding Time: 1 day 2 hr 30 min <br><br> Enhanced Breeding Time: 19 hr 52 min 30 sec",
      epic: "",
    },
  },
  {
    name: "Deja-Jin",
    audio: "sounds/Deja-Jin_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Déjà-Jin.png",
      rare: "images/bm/Rare Déjà-Jin.png",
      epic: "images/bm/Epic Déjà-Jin.png",
    },
    stats: {
      normal: "Breeding Time: 20 hr, <br> <br> Enhanced Time: 15 hr <br>",
      rare: "Breeding Time: 1 day 2 hr 30 min, <br> <br> Enhanced Time: 19 hr 52 min 30 sec <br>",
      epic: "",
    },
  },
  {
    name: "Roarick",
    audio: "sounds/Roarick_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Roarick.png",
      rare: "images/bm/Rare Roarick.png",
      epic: "images/bm/Epic Roarick.png",
    },
    stats: {
      normal: "Breeding Time: 20 hr, <br> <br> Enhanced Time: 15 hr <br>",
      rare: "1 day 2 hr 30 min <br> <br> 19 hr 52 min 30 sec",
      epic: "",
    },
  },
  {
    name: "Osstax",
    audio: "sounds/Osstax_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Osstax.png",
      rare: "images/bm/Rare Osstax.png",
      epic: "images/bm/Epic Osstax.png",
    },
    stats: {
      normal: "Breeding Time: 20 hr, <br> <br> Enhanced Time: 15 hr <br>",
      rare: "",
      epic: "",
    },
  },
  {
    name: "Knucklehead",
    audio: "sounds/Knucklehead_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Knucklehead.png",
      rare: "images/bm/Rare Knucklehead.png",
      epic: "images/bm/Epic Knucklehead.png",
    },
    stats: {
      normal: "Breeding Time: 20 hr, <br> <br> Enhanced Time: 15 hr <br>",
      rare: "",
      epic: "",
    },
  },
  {
    name: "Spytrap",
    audio: "sounds/Spytrap_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Spytrap.png",
      rare: "images/bm/Rare Spytrap.png",
      epic: "images/bm/Epic Spytrap.png",
    },
    stats: {
      normal: "Breeding Time: 16 hr, <br> <br> Enhanced Time: 12 <br>",
      rare: "Breeding Time: 1 day 1 hr 30 min <br> <br> Enhanced Breeding Time: 19 hours 7 min 30 sec",
      epic: "",
    },
  },
  {
    name: "TooToo",
    audio: "sounds/TooToo_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/TooToo.png",
      rare: "images/bm/Rare TooToo.png",
      epic: "images/bm/Epic TooToo.png",
    },
    stats: {
      normal: "Breeding Time: 16 hr, <br> <br> Enhanced Time: 12 <br>",
      rare: "Rare Breeding Time: 1 day 1 hr 30 min, <br> <br> Enhanced Time: 19 hr 7 min 30 sec<br>",
      epic: "",
    },
  },
  {
    name: "Fiddlement",
    audio: "sounds/Fiddlement_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Fiddlement.png",
      rare: "images/bm/Rare Fiddlement.png",
      epic: "images/bm/Epic Fiddlement.png",
    },
    stats: {
      normal: "Breeding Time: 16 hr, <br> <br> Enhanced Time: 12 hr <br>",
      rare: "Breeding Time: 1 day 1 hr 30 sec, <br> <br> Enhanced Time: 19 hr 7 min 30 sec <br>",
      epic: "",
    },
  },
  {
    name: "Tapricorn",
    audio: "sounds/Tapricorn_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Tapricorn.png",
      rare: "images/bm/Rare Tapricorn.png",
      epic: "images/bm/Epic Tapricorn.png",
    },
    stats: {
      normal: "Breeding Time: 16 hr, <br> <br> Enhanced Time: 12 <br>",
      rare: "Breeding Time: 1 day 1 hr 30 sec, <br> <br> Enhanced Time: 19 hr 7 min 30 sec <br>",
      epic: "",
    },
  },
  {
    name: "Rooba",
    audio: "sounds/Rooba_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Rooba.png",
      rare: "images/bm/Rare Rooba.png",
      epic: "images/bm/Epic Rooba.png",
    },
    stats: {
      normal: "Breeding Time: 16 hr, <br> <br> Enhanced Time: 12 <br>",
      rare: "Rare Breeding Time: 1 day 1 hr 30 min, <br> <br> Enhanced Time: 19 hr 7 min 30 sec<br>",
      epic: "",
    },
  },
  {
    name: "Periscorp",
    audio: "sounds/Periscorp_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Periscorp.png",
      rare: "images/bm/Rare Periscorp.png",
      epic: "images/bm/Epic Periscorp.png",
    },
    stats: {
      normal: "Breeding Time: 16 hr, <br> <br> Enhanced Time: 12 <br>",
      rare: "Breeding Time: 1 day 1 hr 30 min <br><br> Enhanced Breeding Time: 19 hr 7 min 30 sec",
      epic: "",
    },
  },
  {
    name: "Cantorell",
    audio: "sounds/Cantorell_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Cantorell.png",
      rare: "images/bm/Rare_Cantorell.jpg",
      epic: "images/bm/Epic Cantorell.png",
    },
    stats: {
      normal: "Breeding Time: 16 hr, <br> <br> Enhanced Time: 12 <br>",
      rare: "Rare Breeding Time: 1 day 1 hr 30 min, <br> <br> Enhanced Time: 19 hr 7 min 30 sec<br>",
      epic: "",
    },
  },
  {
    name: "Bridg it",
    audio: "sounds/Bridg-it_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Bridg-it.png",
      rare: "images/bm/Rare Bridg-it.png",
      epic: "images/bm/Epic Bridg-it.png",
    },
    stats: {
      normal: "Breeding Time: 16 hr, <br> <br> Enhanced Time: 12 <br>",
      rare: "Rare Breeding Time: 1 day 1 hr 30 min, <br> <br> Enhanced Time: 19 hr 7 min 30 sec<br>",
      epic: "",
    },
  },
  {
    name: "Clavi Gnat",
    audio: "sounds/Clavi_Gnat_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Clavi Gnat.png",
      rare: "images/bm/Rare Clavi Gnat.png",
      epic: "images/bm/Epic Clavi Gnat.png",
    },
    stats: {
      normal: "Breeding Time: 16 hr, <br> <br> Enhanced Time: 12 <br>",
      rare: "Breeding Time: 1 day 1 hr 30 min, <br> <br> Enhanced Time: 19 hr 7 min 30 sec <br>",
      epic: "",
    },
  },
  {
    name: "Withur",
    audio: "sounds/Withur_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Withur.png",
      rare: "images/bm/Rare Withur.png",
      epic: "images/bm/Epic Withur.png",
    },
    stats: {
      normal: "Breeding Time: 16 hr, <br> <br> Enhanced Time: 12 <br>",
      rare: "Rare Breeding Time: 1 day 1 hr 30 min, <br> <br> Enhanced Time: 19 hr 7 min 30 sec<br>",
      epic: "",
    },
  },
  {
    name: "Uuduk",
    audio: "sounds/Uuduk_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Uuduk.png",
      rare: "images/bm/Rare Uuduk.png",
      epic: "images/bm/Epic Uuduk.png",
    },
    stats: {
      normal: "Breeding Time: 16 hr, <br> <br> Enhanced Time: 12 <br>",
      rare: "Breeding Time: 1 day 1 hr 30 min, <br> <br> Enhanced Time: 19 hr 7 min 30 sec <br>",
      epic: "",
    },
  },
  {
    name: "Banjaw",
    audio: "sounds/Banjaw_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Banjaw.png",
      rare: "images/bm/Rare Banjaw.png",
      epic: "images/bm/Epic Banjaw.png",
    },
    stats: {
      normal: "Breeding Time: 16 hr, <br> <br> Enhanced Time: 12 <br>",
      rare: "Rare Breeding Time: 1 day 1 hr 30 min, <br> <br> Enhanced Time: 19 hr 7 min 30 sec<br>",
      epic: "",
    },
  },
  {
    name: "G'day",
    audio: "sounds/G_day_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/G_day.png",
      rare: "images/bm/Rare G'day.png",
      epic: "images/bm/Epic G_day.png",
    },
    stats: {
      normal:
        "Breeding Time: 30 hr, <br> <br> Enhanced Time: 22 hr 30 min <br>",
      rare: "Breeding Time: 1 day 13 hr 30 min <br> <br> Enhanced Time: 1 day 4 hr 7 min 30 sec ",
      epic: "",
    },
  },
  {
    name: "Larvaluss",
    audio: "sounds/Larvaluss_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Larvaluss.png",
      rare: "images/bm/Rare Larvaluss.png",
      epic: "images/bm/Epic Larvaluss.png",
    },
    stats: {
      normal:
        "Breeding Time: 30 hr, <br> <br> Enhanced Time: 22 hr 30 min <br>",
      rare: "Breeding Time: 1 day 13 hr 30 min, <br> <br> Enhanced Time: 1 day 4 hr 7 min 30 sec <br>",
      epic: "",
    },
  },
  {
    name: "Frondley",
    audio: "sounds/Frondley_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Frondley.png",
      rare: "images/bm/Rare Frondley.png",
      epic: "images/bm/Epic Frondley.png",
    },
    stats: {
      normal:
        "Breeding Time: 30 hr, <br> <br> Enhanced Time: 22 hr 30 min <br>",
      rare: "Breeding Time: 1 day 13 hr 30 min <br><br> Enhanced Breeding Time: 1 day 4 hr 7 min 30 sec",
      epic: "",
    },
  },
  {
    name: "Mushaboom",
    audio: "sounds/Mushaboom_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Mushaboom.png",
      rare: "images/bm/Rare Mushaboom.png",
      epic: "images/bm/Epic Mushaboom.png",
    },
    stats: {
      normal:
        "Breeding Time: 30 hr, <br> <br> Enhanced Time: 22 hr 30 min <br>",
      rare: "Breeding Time: 1 day 13 hr 30 min <br><br> Enhanced Breeding Time: 1 day 4 hr 7 min 30 sec",
      epic: "",
    },
  },
  {
    name: "Gnarls",
    audio: "sounds/Gnarls_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Gnarls.png",
      rare: "images/bm/Rare Gnarls.png",
      epic: "images/bm/Epic Gnarls.png",
    },
    stats: {
      normal:
        "Breeding Time: 3 days, 8 hr, <br> <br> Enhanced Time: 2 days 12 hr <br>",
      rare: "15,000 Starpower <br> <br> Breeding Time: 3 days 23 hr 30 min, <br> <br> Enhanced Time: 2 days,  23 hr 37 min 30 sec <br> Success: 3 days 23 hr 30 min <br><br> Failure: 1 day 16 hr<br>",
      epic: "",
    },
  },
  {
    name: "Bisonorus",
    audio: "sounds/Bisonorus_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Bisonorus.png",
      rare: "images/bm/Rare Bisonorus.png",
      epic: "images/bm/Epic Bisonorus.png",
    },
    stats: {
      normal:
        "1 day 16 hr <br> <br> Enhanced Time: 1 day 6 hr <br> <br>Buy From Shop: 300 Relics ",
      rare: "Starpower 10,000 <br> <br> Breeding Time: 2 days, 4 hr 30 mins <br> <br>Enhanced Time: 1 day 15 hr 22 min 30 sec",
      epic: "Breeding Time: 2 day 3 hr <br> <br> Enhanced Breeding Time: 1 day 14 hr 15 min",
    },
  },
  {
    name: "Yelmut",
    audio: "sounds/Yelmut_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Yelmut.png",
      rare: "images/bm/Rare Yelmut.png",
      epic: "images/bm/Epic Yelmut.png",
    },
    stats: {
      normal:
        "Breeding Time: 1 day, 16 hr <br> <br> Enhanced Time: 1 day 6 hr <br> <br> Buy From Shop: 300 Relics ",
      rare: "10,000 Starpower <br> <br> Breeding Time: 2 days, 4 hr 30 mins <br><br> Enhanced Time: 1 days 15 hr 22 min 30 sec",
      epic: "Breeding Time: 1 day, 15 hr <br> <br> Enhanced Breeding Time: 1 day, 5 hr, 15 min",
    },
  },
  {
    name: "Flum Ox",
    audio: "sounds/Flum Ox_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Flum Ox.png",
      rare: "images/bm/Rare Flum Ox.png",
      epic: "images/bm/Epic Flum Ox.png",
    },
    stats: {
      normal:
        "1 day 16 hr <br> <br> Enhanced Time: 1 day 6 hr <br> <br>Buy From Shop: 300 Relics ",
      rare: "Starpower 10,000 <br> <br> Breeding Time: 2 days, 4 hr 30 mins <br> <br>Enhanced Time: 1 day 15 hr 22 min 30 sec",
      epic: "Breeding Time: 1 day 13 hr <br> <br> Enhanced Time: 1 day 3 hr 45 min <br><br> Success: 1 day 13 hr <br><br> Fail: 20 hr",
    },
  },
  {
    name: "Krillby",
    audio: "sounds/Krillby_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Krillby.png",
      rare: "images/bm/Rare Krillby.png",
      epic: "images/bm/Epic Krillby.png",
    },
    stats: {
      normal:
        "1 day 16 hr <br> <br> Enhanced Time: 1 day 6 hr <br> <br>Buy From Shop: 300 Relics ",
      rare: "Starpower 10,000 <br> <br> Breeding Time: 2 days, 4 hr 30 mins <br> <br>Enhanced Time: 1 day 15 hr 22 min 30 sec",
      epic: "1 day 19 hr <br> <br> Enhanced Time: 1 day 8 hr 15 min <br> <br> Evolution Success: 1 day 19 hr <br> <br> Fail: 20 hours",
    },
  },
  {
    name: "Edamimi",
    audio: "sounds/Edamimi_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Edamimi.png",
      rare: "images/bm/Rare Edamimi.png",
      epic: "images/bm/Epic Edamimi.png",
    },
    stats: {
      normal:
        "1 day 16 hr <br> <br> Enhanced Time: 1 day 6 hr <br> <br>Buy From Shop: 300 Relics ",
      rare: "Starpower 10,000 <br> <br> Breeding Time: 2 days, 4 hr 30 mins <br> <br>Enhanced Time: 1 day 15 hr 22 min 30 sec",
      epic: "Epic Breeding Time: 1 day, 21 hr <br> <br> Enhanced Breeding Time: 1 day, 9 hr, 45 min<br>",
    },
  },
  {
    name: "Tiawa",
    audio: "sounds/Tiawa_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Tiawa.png",
      rare: "images/bm/Rare Tiawa.png",
      epic: "images/bm/Epic Tiawa.png",
    },
    stats: {
      normal:
        "1 day 16 hr <br> <br> Enhanced Time: 1 day 6 hr <br> <br>Buy From Shop: 300 Relics ",
      rare: "Starpower 10,000 <br> <br> Breeding Time: 2 days, 4 hr 30 mins <br> <br>Enhanced Time: 1 day 15 hr 22 min 30 sec",
      epic: "Breeding Time: 2 days 1 hr <br><br> Enhanced Time: 1 day 12 hr 45 min",
    },
  },
  {
    name: "Candelavra",
    audio: "sounds/Candelavra_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Candelavra.png",
      rare: "images/bm/Rare Candelavra.png",
      epic: "images/bm/Epic Candelavra.png",
    },
    stats: {
      normal:"Breeding Time: 3 days 8 hr <br><br>Enhanced Time: 2 days 12 hr <br><br>Buy From Shop: 500 Relics ",
      rare: "15,000 Starpower <br><br>Breeding Time: 3 days, 23 hr 30 mins <br><br> Enchanced time: 2 days 23 hr 37 min 30 sec",
      epic: "Breeding Time: 2 day 5 hr <br><br>Enhanced Time: 1 day 15 hr 45 min",
    },
  },
  {
    name: "Drummidary",
    audio: "sounds/Drummidary_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Drummidary.png",
      rare: "images/bm/Rare Drummidary.png",
      epic: "images/bm/Epic Drummidary.png",
    },
    stats: {
      normal:
        "Breeding Time: 3 days 8 hr <br><br>Enhanced Time: 2 days 12 hr <br><br>Buy From Shop: 500 Relics ",
      rare: "15,000 Starpower <br><br>Breeding Time: 3 days, 23 hr 30 mins <br><br> Enchanced time: 2 days 23 hr 37 min 30 sec",
      epic: "",
    },
  },
  {
    name: "Bowhead",
    audio: "sounds/Bowhead_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Bowhead.png",
      rare: "images/bm/Rare Bowhead.png",
      epic: "images/bm/Epic Bowhead.png",
    },
    stats: {
      normal:
        "Breeding Time: 3 days 8 hr <br><br>Enhanced Time: 2 days 12 hr <br><br>Buy From Shop: 500 Relics ",
      rare: "15,000 Starpower <br><br>Breeding Time: 3 days, 23 hr 30 mins <br><br> Enchanced time: 2 days 23 hr 37 min 30 sec",
      epic: "",
    },
  },
  {
    name: "Tuskski",
    audio: "sounds/Tuskski_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Tuskski.png",
      rare: "images/bm/Rare Tuskski.png",
      epic: "images/bm/Epic Tuskski.png",
    },
    stats: {
      normal:
        "Breeding Time: 3 days 8 hr <br><br>Enhanced Time: 2 days 12 hr <br><br>Buy From Shop: 500 Relics ",
      rare: "15,000 Starpower <br><br>Breeding Time: 3 days, 23 hr 30 mins <br><br> Enchanced time: 2 days 23 hr 37 min 30 sec",
      epic: "",
    },
  },
  {
    name: "Yooreek",
    audio: "sounds/Yooreek_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Yooreek.png",
      rare: "images/bm/Rare Yooreek.png",
      epic: "images/bm/Epic Yooreek.png",
    },
    stats: {
      normal: "Success: 1 day 6 hr <br><br> Failure: 10 hr",
      rare: "Success: 1 day 11 hr",
      epic: "",
    },
  },
  {
    name: "Meebkin",
    audio: "sounds/Meebkin_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Meebkin.png",
      rare: "images/bm/Rare Meebkin.png",
      epic: "images/bm/Epic Meebkin.png",
    },
    stats: {
      normal: "Success: 1 day 6 hr <br><br> Failure: 10 hr",
      rare: "Success: 1 day 11 hr",
      epic: "",
    },
  },
  {
    name: "Blarret",
    audio: "sounds/Blarret_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Blarret.png",
      rare: "images/bm/Rare Blarret.png",
      epic: "images/bm/Epic Blarret.png",
    },
    stats: {
      normal: "Success: 1 day 6 hr <br><br> Failure: 10 hr",
      rare: "Success: 1 day 11 hr",
      epic: "",
    },
  },
  {
    name: "Gaddzooks",
    audio: "sounds/Gaddzooks_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Gaddzooks.png",
      rare: "images/bm/Rare Gaddzooks.png",
      epic: "images/bm/Epic Gaddzooks.png",
    },
    stats: {
      normal: "Success: 1 day 6 hr <br><br> Failure: 10 hr",
      rare: "Success: 1 day 11 hr",
      epic: "",
    },
  },
  {
    name: "Auglur",
    audio: "sounds/Auglur_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Auglur.png",
      rare: "images/bm/Rare Auglur.png",
      epic: "images/bm/Epic Auglur.png",
    },
    stats: {
      normal: "Success: 1 day 6 hr <br><br> Failure: 10 hr",
      rare: "Success: 1 day 11 hr",
      epic: "",
    },
  },
  {
    name: "Flasque",
    audio: "sounds/Flasque_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Flasque.png",
      rare: "images/bm/Rare Auglur.png",
      epic: "images/bm/Epic Flasque.png",
    },
    stats: {
      normal: "Success: 1 day 6 hr <br><br> Failure: 10 hr",
      rare: "",
      epic: "",
    },
  },
  {
    name: "Nitebear",
    audio: "sounds/Nitebear_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Nitebear.png",
      rare: "images/bm/Rare Nitebear.png",
      epic: "images/bm/Epic Nitebear.png",
    },
    stats: {
      normal: "Success: 1 day 6 hr <br><br> Failure: 10 hr",
      rare: "Success: 1 day 11 hr <br><br> Failure: Unknown (I think 11 hr)",
      epic: "",
    },
  },
  {
    name: "Piplash",
    audio: "sounds/Piplash_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Piplash.png",
      rare: "images/bm/Rare Piplash.png",
      epic: "images/bm/Epic Piplash.png",
    },
    stats: {
      normal: "Success: 1 day 6 hr <br><br> Failure: 10 hr",
      rare: "",
      epic: "",
    },
  },
  {
    name: "X rt",
    audio: "sounds/X_rt_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/X_rt.png",
      rare: "images/bm/Rare X_rt.png",
      epic: "images/bm/Epic X_rt.png",
    },
    stats: {
      normal: "Success: 1 day 6 hr <br><br> Failure: 10 hr",
      rare: "",
      epic: "",
    },
  },
  {
    name: "Teeter Tauter",
    audio: "sounds/Teeter-Tauter_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Teeter-Tauter.png",
      rare: "images/bm/Rare Teeter-Tauter.png",
      epic: "images/bm/Epic Teeter-Tauter.png",
    },
    stats: {
      normal: "Success: 1 day 6 hr <br><br> Failure: 10 hr",
      rare: "",
      epic: "",
    },
  },
  {
    name: "Whaill",
    audio: "sounds/Whaill_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Whaill.png",
      rare: "images/bm/Rare Whaill.png",
      epic: "images/bm/Epic Whaill.png",
    },
    stats: {
      normal: "Success: 1 day 18 hr <br><br> Failure: 17 hr",
      rare: "",
      epic: "",
    },
  },
  {
    name: "Vhenshun",
    audio: "sounds/Vhenshun_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Vhenshun.png",
      rare: "images/bm/Rare Vhenshun.png",
      epic: "images/bm/Epic Vhenshun.png",
    },
    stats: {
      normal: "Success: 1 day 18 hr <br><br> Failure: 17 hr",
      rare: "",
      epic: "",
    },
  },
  {
    name: "Pentumbra",
    audio: "sounds/Pentumbra_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Pentumbra.png",
      rare: "images/bm/Rare Pentumbra.png",
      epic: "images/bm/Epic Pentumbra.png",
    },
    stats: {
      normal: "Success: 1 day 18 hr <br><br> Failure: 17 hr",
      rare: "",
      epic: "",
    },
  },
  {
    name: "Rhysmuth",
    audio: "sounds/Rhysmuth_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Rhysmuth.png",
      rare: "images/bm/Rare Rhysmuth.png",
      epic: "images/bm/Epic Rhysmuth.png",
    },
    stats: {
      normal: "Success: 1 day 18 hr <br><br> Failure: 17 hr",
      rare: "",
      epic: "",
    },
  },
  {
    name: "Oogiddy",
    audio: "sounds/Oogiddy_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Oogiddy.png",
      rare: "images/bm/Rare Oogiddy.png",
      epic: "images/bm/Epic Oogiddy.png",
    },
    stats: {
      normal: "Success: 1 day 18 hr <br><br> Failure: 17 hr",
      rare: "",
      epic: "",
    },
  },
  {
    name: "BeMeebEth",
    audio: "sounds/BeMeebEth_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/BeMeebEth.png",
      rare: "images/bm/Rare BeMeebEth.png",
      epic: "images/bm/Epic BeMeebEth.png",
    },
    stats: {
      normal: "Success: 2 day 7 hr <br><br> Failure: 22 hr",
      rare: "",
      epic: "",
    },
  },
  {
    name: "Normal Meeb",
    image: {
      normal: "images/bm/Meeb.png",
      rare: "images/bm/Rare Meeb.png",
      epic: "images/bm/Epic Meeb.png",
    },
    stats: {
      normal: "Oh Me? Just Floatin Around",
      rare: "",
      epic: "",
    },
  },
  {
    name: "Plasma Meeb",
    image: {
      normal: "images/bm/PlasmaMeeb.png",
      rare: "images/bm/Rare PlasmaMeeb.png",
      epic: "images/bm/Epic PlasmaMeeb.png",
    },
    stats: {
      normal: "Oh Me? Just Floatin Around",
      rare: "",
      epic: "",
    },
  },
  {
    name: "Shadow Meeb",
    image: {
      normal: "images/bm/ShadowMeeb.png",
      rare: "images/bm/Rare ShadowMeeb.png",
      epic: "images/bm/Epic ShadowMeeb.png",
    },
    stats: {
      normal: "Oh Me? Just Floatin Around",
      rare: "",
      epic: "",
    },
  },
  {
    name: "Crystal Meeb",
    image: {
      normal: "images/bm/CrystalMeeb.png",
      rare: "images/bm/Rare CrystalMeeb.png",
      epic: "images/bm/Epic CrystalMeeb.png",
    },
    stats: {
      normal: "Oh Me? Just Floatin Around",
      rare: "",
      epic: "",
    },
  },
  {
    name: "Mech Meeb",
    image: {
      normal: "images/bm/MechMeeb.png",
      rare: "images/bm/Rare MechMeeb.png",
      epic: "images/bm/Epic MechMeeb.png",
    },
    stats: {
      normal: "Oh Me? Just Floatin Around",
      rare: "",
      epic: "",
    },
  },
  {
    name: "Poison Meeb",
    image: {
      normal: "images/bm/PoisonMeeb.png",
      rare: "images/bm/Rare PoisonMeeb.png",
      epic: "images/bm/Epic PoisonMeeb.png",
    },
    stats: {
      normal: "Oh Me? Just Floatin Around",
      rare: "",
      epic: "",
    },
  },
  {
    name: "Lowb",
    audio: "sounds/Lowb_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Lowb.png",
      rare: "images/bm/Rare Lowb.png",
      epic: "images/bm/Epic Lowb.png",
    },
    stats: {
      normal: "Breeding Time: 2 days 2 hr",
      rare: "",
      epic: "",
    },
  },
  {
    name: "Owlesque",
    audio: "sounds/Owlesque_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Owlesque (Major).png",
      rare: "images/bm/Rare Owlesque (Major).png",
      epic: "images/bm/Epic Owlesque (Major).png",
    },
    stats: {
      normal:
        "Breeding Time: 1 days 10 hr <br><br> Enhanced Time: 1 day 1 hr 30 min",
      rare: "",
      epic: "",
    },
  },
  {
    name: "PongPing",
    audio: "sounds/PongPing_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/PongPing.png",
      rare: "images/bm/Rare PongPing.png",
      epic: "images/bm/Epic PongPing.png",
    },
    stats: {
      normal:
        "300 Relics <br><br> Breeding Time: 1 days 16 hr <br><br> Enhanced Time: 1 day 6 hr",
      rare: "10,000 <br><br> Breeding Time: 2 days 4 hr 30 min <br><br> Enhanced Time: 1 day 15 hr 30 sec",
      epic: "Breeding Time: 1 day 23 hr<br><br> Enhanced Time: 1 day 11 hr 15 min",
    },
  },
  {
    name: "Mimic",
    audio: "sounds/Mimic_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Mimic.png",
      rare: "images/bm/Rare Mimic.png",
      epic: "images/bm/Epic Mimic.png",
    },
    stats: {
      normal:
        "Breeding Time: 3 days 8 hr <br> <br> Enhanced Breeding Time: 2 days 12 hr",
      rare: "Breeding Time: 3 days 23 hr 30 min <br><br> Enhanced Breeding Time: 2 days 23 hr 37 min 30 sec",
      epic: "",
    },
  },

  // ADDING WUBLINS + `WUBBOX`'S (Normal + Rare + Epic :))
  {
    name: "Brump",
    audio: "sounds/Brump_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Brump.png",
      rare: "images/bm/Rare Brump.png",
      epic: "images/bm/Epic Brump.png",
    },
    stats: {
      normal: "",
      rare: "",
      epic: "",
    },
  },
  {
    name: "Zynth",
    audio: "sounds/Zynth_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Zynth.png",
      rare: "images/bm/Rare Zynth.png",
      epic: "images/bm/Epic Zynth.png",
    },
    stats: {
      normal: "",
      rare: "",
      epic: "",
    },
  },
  {
    name: "Poewk",
    audio: "sounds/Poewk_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Poewk.png",
      rare: "images/bm/Rare Poewk.png",
      epic: "images/bm/Epic Poewk.png",
    },
    stats: {
      normal: "",
      rare: "",
      epic: "",
    },
  },
  {
    name: "Thwok",
    audio: "sounds/Thwok_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Thwok.png",
      rare: "images/bm/Rare Thwok.png",
      epic: "images/bm/Epic Thwok.png",
    },
    stats: {
      normal: "",
      rare: "",
      epic: "",
    },
  },
  {
    name: "Dwumrohl",
    audio: "sounds/Dwumrohl_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Dwumrohl.png",
      rare: "images/bm/Rare Dwumrohl.png",
      epic: "images/bm/Epic Dwumrohl.png",
    },
    stats: {
      normal: "",
      rare: "",
      epic: "",
    },
  },
  {
    name: "Zuuker",
    audio: "sounds/Zuuker_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Zuuker.png",
      rare: "images/bm/Rare Zuuker.png",
      epic: "images/bm/Epic Zuuker.png",
    },
    stats: {
      normal: "",
      rare: "",
      epic: "",
    },
  },
  {
    name: "Screemu",
    audio: "sounds/Screemu_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Screemu.png",
      rare: "images/bm/Rare Screemu.png",
      epic: "images/bm/Epic Screemu.png",
    },
    stats: {
      normal: "",
      rare: "",
      epic: "",
    },
  },
  {
    name: "Tympa",
    audio: "sounds/Tympa_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Tympa.png",
      rare: "images/bm/Rare Tympa.png",
      epic: "images/bm/Epic Tympa.png",
    },
    stats: {
      normal: "",
      rare: "",
      epic: "",
    },
  },
  {
    name: "Dermit",
    audio: "sounds/Dermit_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Dermit.png",
      rare: "images/bm/Rare Dermit.png",
      epic: "images/bm/Epic Dermit.png",
    },
    stats: {
      normal: "",
      rare: "",
      epic: "",
    },
  },
  {
    name: "Gheegur",
    audio: "sounds/Gheegur_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Gheegur.png",
      rare: "images/bm/Rare Gheegur.png",
      epic: "images/bm/Epic Gheegur.png",
    },
    stats: {
      normal: "",
      rare: "",
      epic: "",
    },
  },
  {
    name: "Whajje",
    audio: "sounds/Whajje_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Whajje.png",
      rare: "images/bm/Rare Whajje.png",
      epic: "images/bm/Epic Whajje.png",
    },
    stats: {
      normal: "",
      rare: "",
      epic: "",
    },
  },
  {
    name: "Creepuscule",
    audio: "sounds/Creepuscule_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Creepuscule.png",
      rare: "images/bm/Rare Creepuscule.png",
      epic: "images/bm/Epic Creepuscule.png",
    },
    stats: {
      normal: "",
      rare: "",
      epic: "",
    },
  },
  {
    name: "Blipsqueak",
    audio: "sounds/Blipsqueak_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Blipsqueak.png",
      rare: "images/bm/Rare Blipsqueak.png",
      epic: "images/bm/Epic Blipsqueak.png",
    },
    stats: {
      normal: "",
      rare: "",
      epic: "",
    },
  },

  {
    name: "Scargo",
    audio: "sounds/Scargo_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Scargo.png",
      rare: "images/bm/Rare Scargo.png",
      epic: "images/bm/Epic Scargo.png",
    },
    stats: {
      normal: "",
      rare: "",
      epic: "",
    },
  },
  {
    name: "Astropod",
    audio: "sounds/Astropod_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Astropod.png",
      rare: "images/bm/Rare Astropod.png",
      epic: "images/bm/Epic Astropod.png",
    },
    stats: {
      normal: "",
      rare: "",
      epic: "",
    },
  },
  {
    name: "Pixolotl",
    audio: "sounds/Pixolotl_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Pixolotl.png",
      rare: "images/bm/Rare Pixolotl.png",
      epic: "images/bm/Epic Pixolotl.png",
    },
    stats: {
      normal: "",
      rare: "",
      epic: "",
    },
  },

  {
    name: "Bona Petite",
    audio: "sounds/Bona_Petite_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Bona-Petite.png",
      rare: "images/bm/Rare Bona-Petite.png",
      epic: "images/bm/Epic Bona-Petite.png",
    },
    stats: {
      normal: "",
      rare: "",
      epic: "",
    },
  },
  {
    name: "Maulch",
    audio: "sounds/Maulch_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Maulch.png",
      rare: "images/bm/Rare Maulch.png",
      epic: "images/bm/Epic Maulch.png",
    },
    stats: {
      normal: "",
      rare: "",
      epic: "",
    },
  },
  {
    name: "Fleechwurm",
    audio: "sounds/Fleechwurm_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Fleechwurm.png",
      rare: "images/bm/Rare Fleechwurm.png",
      epic: "images/bm/Epic Fleechwurm.png",
    },
    stats: {
      normal: "",
      rare: "",
      epic: "",
    },
  },
  {
    name: "Wubbox",
    audio: "sounds/Rare_Wubbox_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Wubbox.png",
      rare: "images/bm/Rare Wubbox.png",
      epic: "images/bm/Epic Wubbox Plant.png",
    },
    stats: {
      normal: "",
      rare: "",
      epic: "",
    },
  },
  //Adding 4.8.2 Update :)
  {
    name: "Cruv Laaphtian Crocus",
    audio: "sounds/Cruv'laaphtian_Crocus_Memory_Sample.mp3",
    image: {
      normal: "images/bm/Cruv'laaphtian Crocus.png",
      rare: "images/bm/Rare Cruv'laaphtian Crocus.png",
      epic: "images/bm/Epic Cruv'laaphtian Crocus.png",
    },
    stats: {
      normal: "Breeding Time: 12 hr <br> <br> Enhanced Breeding Time: 8 hr",
      rare: "",
      epic: "",
    },
  },
  {
    name: "Clc",
    audio: "sounds/Cruv'laaphtian_Crocus_Memory_Sample.mp3",
    image: {
      normal: "images/bm/Cruv'laaphtian Crocus.png",
      rare: "images/bm/Rare Cruv'laaphtian Crocus.png",
      epic: "images/bm/Epic Cruv'laaphtian Crocus.png",
    },
    stats: {
      normal: "Breeding Time: 12 hr <br> <br> Enhanced Breeding Time: 8 hr",
      rare: "",
      epic: "",
    },
  },

  {
    name: "Phosphoran Phlox",
    audio: "sounds/Phosphoran_Phlox_Memory_Sample.wav",
    image: {
      normal: "images/bm/Phosphoran Phlox.png",
      rare: "images/bm/Rare Phosphoran Phlox.png",
      epic: "images/bm/Epic Phosphoran Phlox.png",
    },
    stats: {
      normal: "Breeding Time: 12 hr <br> <br> Enhanced Breeding Time: 8 hr",
      rare: "",
      epic: "",
    },
  },
  {
    name: "Tawkerr",
    audio: "sounds/Tawkerr_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Tawkerr.png",
      rare: "images/bm/Rare Tawkerr.png",
      epic: "images/bm/Epic Tawkerr.png",
    },
    stats: {
      normal: "Breeding Time: 8 hr <br><br> Enhanced Breeding Time: 6 hr",
      rare: "",
      epic: "",
    },
  },
  {
    name: "Parlsona",
    audio: "sounds/Parlsona_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Parlsona.png",
      rare: "images/bm/Rare Parlsona.png",
      epic: "images/bm/Epic Parlsona.png",
    },
    stats: {
      normal: "Breeding Time: 8 hr <br><br> Enhanced Breeding Time: 6 hr",
      rare: "",
      epic: "",
    },
  },
  {
    name: "Do (CLICK ON ME)",
    audio: "sounds/Do_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Do.png",
      rare: "images/bm/Rare .png",
      epic: "images/bm/Epic .png",
    },
    stats: {
      normal: "Buy From Shop via Keys (Number varry per island)",
      rare: "",
      epic: "",
    },
  },
  {
    name: "Re (CLICK ON ME)",
    audio: "sounds/Re_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Re.png",
      rare: "images/bm/Rare Re.png",
      epic: "images/bm/Epic Re.png",
    },
    stats: {
      normal: "Buy From Shop via Keys (Number varry per island)",
      rare: "",
      epic: "",
    },
  },
  {
    name: "Mi (CLICK ON ME)",
    audio: "sounds/Mi_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Mi.png",
      rare: "images/bm/Rare Mi.png",
      epic: "images/bm/Epic Mi.png",
    },
    stats: {
      normal: "Buy From Shop via Keys (Number varry per island)",
      rare: "",
      epic: "",
    },
  },
  {
    name: "Fa (CLICK ON ME)",
    audio: "sounds/Fa_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Fa.png",
      rare: "images/bm/Rare Fa.png",
      epic: "images/bm/Epic Fa.png",
    },
    stats: {
      normal: "Buy From Shop via Keys (Number varry per island)",
      rare: "",
      epic: "",
    },
  },
  {
    name: "Sol (CLICK ON ME)",
    audio: "sounds/Sol_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Sol.png",
      rare: "images/bm/Rare Sol.png",
      epic: "images/bm/Epic Sol.png",
    },
    stats: {
      normal: "Buy From Shop via Keys (Number varry per island)",
      rare: "",
      epic: "",
    },
  },
  {
    name: "La (CLICK ON ME)",
    audio: "sounds/La_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/La.png",
      rare: "images/bm/Rare La.png",
      epic: "images/bm/Epic La.png",
    },
    stats: {
      normal: "Buy From Shop via Keys (Number varry per island)",
      rare: "",
      epic: "",
    },
  },
  {
    name: "Ti(CLICK ON ME)",
    audio: "sounds/Ti_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Ti.png",
      rare: "images/bm/Rare Ti.png",
      epic: "images/bm/Epic Ti.png",
    },
    stats: {
      normal: "Buy From Shop via Keys (Number varry per island)",
      rare: "",
      epic: "",
    },
  },
  {
    name: "Maggpi",
    audio: "sounds/Maggpi_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Maggpi.png",
      rare: "images/bm/Rare Maggpi.png",
      epic: "images/bm/Epic Maggpi.png",
    },
    stats: {
      normal: "Breeding Time: 8 hr <br><br> Enhanced Breeding Time: 6 hr",
      rare: "",
      epic: "",
    },
  },
  {
    name: "Stoowarb",
    audio: "sounds/Stoowarb_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Stoowarb.png",
      rare: "images/bm/Rare Stoowarb.png",
      epic: "images/bm/Epic Stoowarb.png",
    },
    stats: {
      normal: "Breeding Time: 8 hr <br><br> Enhanced Breeding Time: 6 hr",
      rare: "",
      epic: "",
    },
  },
  {
    name: "Bogle",
    audio: "sounds/Bogle_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Bogle.png",
      rare: "images/bm/Rare Bogle.png",
      epic: "images/bm/Epic Bogle.png",
    },
    stats: {
      normal: "Breeding Time: 2 day 2 hr",
      rare: "",
      epic: "",
    },
  },
  {
    name: "Arcorina",
    audio: "sounds/Arcorina_(Major)_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Arcorina (Major).png",
      rare: "images/bm/Rare Arcorina (Major).png",
      epic: "images/bm/Epic Arcorina (Major).png",
    },
    stats: {
      normal:
        "Breeding Time: 1 days 12 hr <br><br> Enhanced Time: 1 day 3 hr",
      rare: "",
      epic: "",
    },
  },
  {
    name: "Incisaur",
    image: {
      normal: "images/bm/Incisaur.png",
      rare: "images/bm/Rare Incisaur.png",
      epic: "images/bm/Epic Incisaur.png",
    },
    stats: {
      normal: "Breeding Time: 1 day 16 hr <br> <br> Enhanced Breeding Time: 1 day 6 hr",
      rare: "10,000 Starpower <br> <br> Breeding Time: 2 day 4 hr 30 min <br> <br> Enhanced Breeding Time: 1 day 15 hr 22 min 30 sec",
      epic: "Breeding Time: 1 day 17 hr <br> <br> Enhanced Breeding Time: 1 day 6 hr 45 min",
    },
  },
  {
    name: "Hornacle",
    audio: "sounds/Hornacle_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Hornacle.png",
      rare: "images/bm/Rare Hornacle.png",
      epic: "images/bm/Epic Hornacle.png"
    },
    stats: {
      normal: "12 days",
      rare: "",
      epic: ""
    }
  },
  {
    name: "Furnoss",
    audio: "sounds/Furnoss_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Furnoss.png",
      rare: "images/bm/Rare Furnoss.png",
      epic: "images/bm/Epic Furnoss.png"
    },
    stats: {
      normal: "25 Days",
      rare: "",
      epic: ""
    }
  },
  {
    name: "Glaishur",
    audio: "sounds/Glaishur_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Glaishur.png",
      rare: "images/bm/Rare Glaishur.png",
      epic: "images/bm/Epic Glaishur.png"
    },
    stats: {
      normal: "10 Days",
      rare: "",
      epic: ""
    }
  },
  {
    name: "Blasoom",
    audio: "sounds/Blasoom_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Blasoom.png",
      rare: "images/bm/Rare Blasoom.png",
      epic: "images/bm/Epic Blasoom.png"
    },
    stats: {
      normal: "14 Days",
      rare: "",
      epic: ""
    }
  },
  {
    name: "Syncopite",
    audio: "sounds/Syncopite_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Syncopite.png",
      rare: "images/bm/Rare Syncopite.png",
      epic: "images/bm/Epic Syncopite.png"
    },
    stats: {
      normal: "11 Days",
      rare: "",
      epic: ""
    }
  },
  {
    name: "Vhamp",
    audio: "sounds/Vhamp_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Vhamp.png",
      rare: "images/bm/Rare Vhamp.png",
      epic: "images/bm/Epic Vhamp.png"
    },
    stats: {
      normal: "8 Days",
      rare: "",
      epic: ""
    }
  },
  {
    name: "Galvana",
    audio: "sounds/Galvana_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Galvana.png",
      rare: "images/bm/Rare Galvana.png",
      epic: "images/bm/Epic Galvana.png"
    },
    stats: {
      normal: "28 Days",
      rare: "",
      epic: ""
    }
  },
  {
    name: "Scaratar",
    audio: "sounds/Scaratar_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Scaratar.png",
      rare: "images/bm/Rare Scaratar.png",
      epic: "images/bm/Epic Scaratar.png"
    },
    stats: {
      normal: "9 Day",
      rare: "",
      epic: ""
    }
  },
  {
    name: "Loodvigg",
    audio: "sounds/Loodvigg_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Loodvigg.png",
      rare: "images/bm/Rare Loodvigg.png",
      epic: "images/bm/Epic Loodvigg.png"
    },
    stats: {
      normal: "8 Days",
      rare: "",
      epic: ""
    }
  },
  {
    name: "Torrt",
    audio: "sounds/Torrt_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Torrt.png",
      rare: "images/bm/Rare Torrt.png",
      epic: "images/bm/Epic Torrt.png"
    },
    stats: {
      normal: "13 Days",
      rare: "",
      epic: ""
    }
  },
  {
    name: "Plixie",
    audio: "sounds/Plixie_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Plixie.png",
      rare: "images/bm/Rare Plixie.png",
      epic: "images/bm/Epic Plixie.png"
    },
    stats: {
      normal: "13 Days",
      rare: "",
      epic: ""
    }
  },
  {
    name: "Attmoz",
    audio: "sounds/Attmoz_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Attmoz.png",
      rare: "images/bm/Rare Attmoz.png",
      epic: "images/bm/Epic Attmoz.png"
    },
    stats: {
      normal: "12 Days",
      rare: "",
      epic: ""
    }
  },


  {
    name: "Adult Hornacle",
    audio: "sounds/Hornacle_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Hornacle (adult).png",
      rare: "images/bm/Rare Hornacle.png",
      epic: "images/bm/Epic Hornacle.png"
    },
    stats: {
      normal: "31 days",
      rare: "",
      epic: ""
    }
  },
  {
    name: "Adult Furnoss",
    audio: "sounds/Furnoss_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Furnoss (adult).png",
      rare: "images/bm/Rare Furnoss.png",
      epic: "images/bm/Epic Furnoss.png"
    },
    stats: {
      normal: "28/29 Days",
      rare: "",
      epic: ""
    }
  },
  {
    name: "Adult Glaishur",
    audio: "sounds/Glaishur_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Glaishur (adult).png",
      rare: "images/bm/Rare Glaishur.png",
      epic: "images/bm/Epic Glaishur.png"
    },
    stats: {
      normal: "30 Days",
      rare: "",
      epic: ""
    }
  },
  {
    name: "Adult Blasoom",
    audio: "sounds/Blasoom_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Blasoom (adult).png",
      rare: "images/bm/Rare Blasoom.png",
      epic: "images/bm/Epic Blasoom.png"
    },
    stats: {
      normal: "31 Days",
      rare: "",
      epic: ""
    }
  },
  {
    name: "Adult Syncopite",
    audio: "sounds/Syncopite_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Syncopite (adult).png",
      rare: "images/bm/Rare Syncopite.png",
      epic: "images/bm/Epic Syncopite.png"
    },
    stats: {
      normal: "31 Days",
      rare: "",
      epic: ""
    }
  },
  {
    name: "Adult Vhamp",
    audio: "sounds/Vhamp_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Vhamp (adult).png",
      rare: "images/bm/Rare Vhamp.png",
      epic: "images/bm/Epic Vhamp.png"
    },
    stats: {
      normal: "30 Days",
      rare: "",
      epic: ""
    }
  },
  {
    name: "Adult Galvana",
    audio: "sounds/Galvana_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Galvana (adult).png",
      rare: "images/bm/Rare Galvana.png",
      epic: "images/bm/Epic Galvana.png"
    },
    stats: {
      normal: "31 Days",
      rare: "",
      epic: ""
    }
  },
  {
    name: "Adult Scaratar",
    audio: "sounds/Scaratar_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Scaratar (adult).png",
      rare: "images/bm/Rare Scaratar.png",
      epic: "images/bm/Epic Scaratar.png"
    },
    stats: {
      normal: "31 Day",
      rare: "",
      epic: ""
    }
  },
  {
    name: "Adult Loodvigg",
    audio: "sounds/Loodvigg_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Loodvigg (adult).png",
      rare: "images/bm/Rare Loodvigg.png",
      epic: "images/bm/Epic Loodvigg.png"
    },
    stats: {
      normal: "30 Days",
      rare: "",
      epic: ""
    }
  },
  {
    name: "Adult Torrt",
    audio: "sounds/Torrt_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Torrt (adult).png",
      rare: "images/bm/Rare Torrt.png",
      epic: "images/bm/Epic Torrt.png"
    },
    stats: {
      normal: "31 Days",
      rare: "",
      epic: ""
    },
  },
  {
    name: "Adult Plixie",
    audio: "sounds/Plixie_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Plixie (adult).png",
      rare: "images/bm/Rare Plixie.png",
      epic: "images/bm/Epic Plixie.png"
    },
    stats: {
      normal: "13 Days",
      rare: "",
      epic: ""
    }
  },
  {
    name: "Adult Attmoz",
    audio: "sounds/Attmoz_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Attmoz (adult).png",
      rare: "images/bm/Rare Attmoz.png",
      epic: "images/bm/Epic Attmoz.png"
    },
    stats: {
      normal: "31 Days",
      rare: "",
      epic: ""
    }
  },
  {
    name: "Shhimmer",
    audio: "sounds/Shhimmer_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Shhimmer (Major).png",
      rare: "images/bm/Rare Shhimmer (Major).png",
      epic: "images/bm/Epic Shhimmer (Major).png"
    },
    stats: {
      normal: "Breeding Time: 1 day 6 hr Enhanced Time: 22 hr 30 min",
      rare: "",
      epic: ""
    }
  },
  {
    name: "Scallyrags",
    audio: "sounds/Scallyrags_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Scallyrags (Major).png",
      rare: "images/bm/Rare Scallyrags.png",
      epic: "images/bm/Epic Scallyrags.png"
    },
    stats: {
      normal: "Breeding Time: 1 day 21 hr <br><br> Enhanced Time: 1 day 9 hr 45 min",
      rare: "",
      epic: ""
    }
  },
  {
    name: "Dakktyl",
    audio: "sounds/Dakktyl_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Dakktyl (Major).png",
      rare: "images/bm/Rare Dakktyl.png",
      epic: "images/bm/Epic Dakktyl.png"
    },
    stats: {
      normal: "Breeding Time: 1 day 21 hr <br><br> Enhanced Time: 1 day 9 hr 45 min",
      rare: "",
      epic: ""
    }
  },
  {
    name: "Jerm",
    audio: "sounds/Jerm_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Jerm (Major).png",
      rare: "images/bm/Rare Jerm.png",
      epic: "images/bm/Epic Jerm.png"
    },
    stats: {
      normal: "Breeding Time: 2 day 8 hr <br><br> Enhanced Time: 1 day 18 hr",
      rare: "",
      epic: ""
    }
  },
];
/*
{
    name: "",
    image: {
      normal: "images/bm/",
      rare: "",
      epic: "",
    },
    stats: {
      normal: "",
      rare: "",
      epic: ""
    }
},
*/
const wubboxs = [
  {
    name: "Plant Wubbox",
    audio: "sounds/Epic_Wubbox_(Plant)_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Epic Wubbox Plant.png",
      rare: "images/bm/Epic Wubbox Plant.png",
      epic: "images/bm/Epic Wubbox Plant.png",
    },
    stats: {
      normal: "Buy From The Store For <b>1 Diamond</b>",
      rare: "",
      epic: "",
    },
  },
  {
    name: "Cold Wubbox",
    audio: "sounds/Epic_Wubbox_(Cold)_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Epic Wubbox Cold.png",
      rare: "images/bm/Epic Wubbox Cold.png",
      epic: "images/bm/Epic Wubbox Cold.png",
    },
    stats: {
      normal: "Buy From The Store For <b>1 Diamond</b>",
      rare: "",
      epic: "",
    },
  },
  {
    name: "Air Wubbox",
    audio: "sounds/Epic_Wubbox_(Air)_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Epic Wubbox Air.png",
      rare: "images/bm/Epic Wubbox Air.png",
      epic: "images/bm/Epic Wubbox Air.png",
    },
    stats: {
      normal: "Buy From The Store For <b>1 Diamond</b>",
      rare: "",
      epic: "",
    },
  },
  {
    name: "Water Wubbox",
    audio: "sounds/Epic_Wubbox_(Water)_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Epic Wubbox Water.png",
      rare: "images/bm/Epic Wubbox Water.png",
      epic: "images/bm/Epic Wubbox Water.png",
    },
    stats: {
      normal: "Buy From The Store For <b>1 Diamond</b>",
      rare: "",
      epic: "",
    },
  },
  {
    name: "Earth Wubbox",
    audio: "sounds/Epic_Wubbox_(Earth)_Memory_Sample.mp3.mpeg",
    image: {
      normal: "images/bm/Epic Wubbox Earth.png",
      rare: "images/bm/Epic Wubbox Earth.png",
      epic: "images/bm/Epic Wubbox Earth.png",
    },
    stats: {
      normal: "Buy From The Store For <b>1 Diamond</b>",
      rare: "",
      epic: "",
    },
  },
]

const breedingCombinations = {
  "Get From Shop!": ["Gnarls"],
  "Potbelly + Noggin": ["Shrubb"],
  "Potbelly + Toe Jammer": ["Oaktopus"],
  "Potbelly + Mammott": ["Furcorn"],
  "Noggin + Toe Jammer": ["Fwog"],
  "Noggin + Mammott": ["Drumpler"],
  "Toe Jammer + Mammott": ["Maw"],
  "Tweedle + Toe Jammer": ["Quibble"],
  "Tweedle + Mammott": ["Pango"],
  "Tweedle + Noggin": ["Cybop"],
  "Tweedle + Kayna": ["Glowl"],
  "Potbelly + Kayna": ["Flowah"],
  "Noggin + Kayna": ["Stogg"],
  "Toe Jammer + Kayna": ["Phangler"],
  "Mammott + Kayna": ["Boskus"],
  // Three Elements
  "Fwog + Potbelly": ["Pummel"],
  "Oaktopus + Noggin": ["Pummel"],
  "Shrubb + Toe Jammer": ["Pummel"],
  "Pummel + Noggin": ["Pummel"],
  "Furcorn + Noggin": ["Clamble"],
  "Drumpler + Potbelly": ["Clamble"],
  "Shrubb + Mammott": ["Clamble"],
  "Clamble + Noggin": ["Clamble"],
  "Furcorn + Toe Jammer": ["Bowgart"],
  "Oaktopus + Mammott": ["Bowgart"],
  "Maw + Potbelly": ["Bowgart"],
  "Bowgart + Toe Jammer": ["Bowgart"],
  "Maw + Noggin": ["T-Rox"],
  "Drumpler + Toe Jammer": ["T-Rox"],
  "Fwog + Mammott": ["T-Rox"],
  "T-Rox + Entbrat": ["T-Rox"],
  "T-Rox + Noggin": ["T-Rox"],
  "Dandidoo + Toe Jammer": ["Spunge"],
  "Quibble + Potbelly": ["Spunge"],
  "Oaktopus + Tweedle": ["Spunge"],
  "Spunge + Toe Jammer": ["Spunge"],
  "Dandidoo + Mammott": ["Thumpies"],
  "Pango + Potbelly": ["Thumpies"],
  "Furcorn + Tweedle": ["Thumpies"],
  "Maw + Tweedle": ["Congle"],
  "Pango + Toe Jammer": ["Congle"],
  "Quibble + Mammott": ["Congle"],
  "Congle + Sneyser": ["Congle", "Sneyser"],
  "Congle + Toe Jammer": ["Congle"],
  "Tweedle + Fwog": ["Scups"],
  "Quibble + Noggin": ["Scups"],
  "Cybop + Toe Jammer": ["Scups"],
  "Scups + Noggin": ["Scups"],
  "Drumpler + Tweedle": ["PomPom"],
  "Pango + Noggin": ["PomPom"],
  "Cybop + Mammott": ["PomPom"],
  "PomPom + Noggin": ["PomPom"],
  "Dandidoo + Noggin": ["Reedling"],
  "Cybop + Potbelly": ["Reedling"],
  "Shrubb + Tweedle": ["Reedling"],
  "Reedling + Noggin": ["Reedling"],
  "Reedling + Tring": ["Reedling"],
  "Dandidoo + Kayna": ["Barrb"],
  "Flowah + Tweedle": ["Barrb"],
  "Glowl + Potbelly": ["Barrb"],
  "Barrb + Tring": ["Barrb", "Tring"],
  "Cybop + Kayna": ["Floogull"],
  "Stogg + Tweedle": ["Floogull"],
  "Glowl + Noggin": ["Floogull"],
  "Floogull + Tring": ["Floogull", "Tring"],
  "Shrubb + Kayna": ["Repatillo"],
  "Stogg + Potbelly": ["Repatillo"],
  "Flowah + Noggin": ["Repatillo"],
  "Repatillo + Tring": ["Repatillo", "Tring"],
  "Repatillo + Noggin": ["Repatillo"],
  "Quibble + Kayna": ["Whaddle"],
  "Phangler + Tweedle": ["Whaddle"],
  "Glowl + Toe Jammer": ["Whaddle"],
  "Whaddle + Sneyser": ["Whaddle", "Sneyser"],
  "Pango + Kayna": ["Woolabee"],
  "Boskus + Tweedle": ["Woolabee"],
  "Glowl + Mammott": ["Woolabee"],
  "Woolabee + Sneyser": ["Woolabee", "Sneyser"],
  "Maw + Kayna": ["Wynq"],
  "Boskus + Toe Jammer": ["Wynq"],
  "Phangler + Mammott": ["Wynq"],
  "Wynq + Sneyser": ["Wynq", "Sneyser"],
  "Boskus + Potbelly": ["Sooza"],
  "Flowah + Mammott": ["Sooza"],
  "Furcorn + Kayna": ["Sooza"],
  "Sooza + Blow t": ["Sooza", "Blow t"],
  "Oaktopus + Kayna": ["Rootitoot"],
  "Flowah + Toe Jammer": ["Rootitoot"],
  "Phangler + Potbelly": ["Rootitoot"],
  "Rootitoot + Gloptic": ["Rootitoot", "Gloptic"],
  "Drumpler + Kayna": ["Ziggurab"],
  "Stogg + Mammott": ["Ziggurab"],
  "Boskus + Noggin": ["Ziggurab"],
  "Ziggurab + Pladdie": ["Ziggurab", "Pladdie"],
  "Fwog + Kayna": ["Thrumble"],
  "Stogg Toe Jammer": ["Thrumble"],
  "Phangler + Noggin": ["Thrumble"],
  "Thrumble + Plinkajou": ["Thrumble", "Plinkajou"],
  //Four Elements
  "Shrubb + Maw": ["Entbrat"],
  "Oaktopus + Drumpler": ["Entbrat"],
  "Furcorn + Fwog": ["Entbrat"],
  "Clamble + Toe Jammer": ["Entbrat"],
  "Bowgart + Noggin": ["Entbrat"],
  "T-Rox + Potbelly": ["Entbrat"],
  "Pummel + Mammott": ["Entbrat"],
  "Dandidoo + Maw": ["Deedge"],
  "Quibble + Furcorn": ["Deedge"],
  "Pango + Oaktopus": ["Deedge"],
  "Spunge + Mammott": ["Deedge"],
  "Thumpies + Toe Jammer": ["Deedge"],
  "Congle + Potbelly": ["Deedge"],
  "Bowgart + Tweedle": ["Deedge"],
  "Cybop + Maw": ["Riff"],
  "Quibble + Drumpler": ["Riff"],
  "Pango + Fwog": ["Riff"],
  "Scups + Mammott": ["Riff"],
  "T-Rox + Tweedle": ["Riff"],
  "Congle + Noggin": [""],
  "PomPom + Toe Jammer": ["Riff"],
  "Dandidoo + Fwog": ["Shellbeat"],
  "Cybop + Oaktopus": ["Shellbeat"],
  "Quibble + Shrubb": ["Shellbeat"],
  "Scups + Potbelly": ["Shellbeat"],
  "Reedling + Toe Jammer": ["Shellbeat"],
  "Pummel + Tweedle": ["Shellbeat"],
  "Spunge + Noggin": ["Shellbeat"],
  "Dandidoo + Drumpler": ["Quarrister"],
  "Cybop + Furcorn": ["Quarrister"],
  "Pango + Shrubb": ["Quarrister"],
  "Reedling + Mammott": ["Quarrister"],
  "Thumpies + Noggin": ["Quarrister"],
  "PomPom + Potbelly": ["Quarrister"],
  "Clamble + Tweedle": ["Quarrister"],
  "Stogg + Dandidoo": ["Tring"],
  "Shrubb + Glowl": ["Tring"],
  "Flowah + Cybop": ["Tring"],
  "Reedling + Kayna": ["Tring"],
  "Floogull + Potbelly": ["Tring"],
  "Barrb + Noggin": ["Tring"],
  "Quibble + Boskus": ["Sneyser"],
  "Pango + Phangler": ["Sneyser"],
  "Glowl + Maw": ["Sneyser"],
  "Congle + Kayna": ["Sneyser"],
  "Whaddle + Kayna": ["Sneyser"],
  "Woolabee + Toe Jammer": ["Sneyser"],
  "Wynq + Tweedle": ["Sneyser"],
  "Bowgart + Clamble": ["Shugabush"],
  "Shugabush + Mammott": ["Shugarock", "Mammott", "Epic PomPom"],
  "Shugabush + Potbelly": ["Shugabass", "Epic Deedge"],
  "Shugabush + Oaktopus": ["Shugajo", "Oaktopus", "Epic Mammott", "Viveine"],
  "Shugabush + Furcorn": ["Shugabeats", "Furcorn", "Epic Potbelly"],
  "Shugabush + Quibble": ["Shugabuzz", "Quibble", "Epic Oaktopus"],
  "Shugabush + PomPom": ["Shugitar", "PomPom", "Epic Viveine"],
  "Shugabush + Deedge": ["Shugavox", "Deedge", "Epic Furcorn"],
  "Entbrat + T-Rox": ["Ghazt", "T-Rox"],
  "Entbrat + Clamble": ["Ghazt", "Clamble"],
  "Entbrat + Pummel": ["Ghazt", "Pummel"],
  "Entbrat + Bowgart": ["Ghazt", "Bowgart"],
  "Deedge + Congle": ["Grumpyre", "Congle"],
  "Deedge + Bowgart": ["Grumpyre", "Bowgart"],
  "Deedge + Spunge": ["Grumpyre", "Spunge"],
  "Deedge + Thumpies": ["Grumpyre", "Thumpies"],
  "Riff + Congle": ["Reebro", "Congle"],
  "Riff + Scups": ["Reebro", "Scups"],
  "Riff + PomPom": ["Reebro", "PomPom"],
  "Riff + T-Rox": ["Reebro", "T-Rox"],
  "Shellbeat + Spunge": ["Jeeode", "Spunge"],
  "Shellbeat + Pummel": ["Jeeode", "Pummel"],
  "Shellbeat + Scups": ["Jeeode", "Scups"],
  "Shellbeat + Reedling": ["Jeeode", "Reedling"],
  "Quarrister + Reedling": ["Humbug", "Reedling"],
  "Quarrister + PomPom": ["Humbug", "PomPom"],
  "Quarrister + Thumpies": ["Humbug", "Thumpies"],
  "Quarrister + Clamble": ["Humbug", "Clamble"],
  "Ghazt + Grumpyre": ["Whisp"],
  "Ghazt + Reebro": ["Nebulob"],
  "Grumpyre + Reebro": ["Arackulele"],
  "Ghazt + Jeeode": ["Sox"],
  "Grumpyre + Jeeode": ["Boodoo"],
  "Reebro + Jeeode": ["Bellowfish"],
  "Ghazt + Humbug": ["Jellbilly"],
  "Grumpyre + Humbug": ["Kazilleon"],
  "Reebro + Humbug": ["Dragong"],
  "Jeeode + Humbug": ["Fung Pray"],
  "T-Rox + Pummel": ["G joob"],
  "Gloptic + Rootitoot": ["Hairionette"],
  "Gloptic + Tapricorn": ["Hairionette"],
  "Gloptic + Rooba": ["Hairionette"],
  "Gloptic + Periscorp": ["Hairionette"],
  "Bowgart + Spunge": ["Strombonin"],
  "T-Rox + Scups": ["Yawstrich"],
  "Scups + Pummel": ["Anglow"],
  "Thumpies + PomPom": ["Hyehehe", "Rare Hyehehe"],
  "Congle + Woolabee": ["Cherubble"],
  "Cataliszt + G joob": ["Bleatnik", "Epic Strombonin"],
  "Cataliszt + Strombonin": ["Cranchee", "Epic Yawstrich"],
  "Cataliszt + Yawstrich": ["Sporerow", "Epic G joob", "Rare Sporerow"],
  "Cataliszt + Hyehehe": ["Wheezel", "Rare Wheezel"],
  "Cataliszt + Cherubble": ["shLep", "Epic Bleatnik"],
  "Thumpies + Congle": ["Yool"],
  "Riff + Tweedle": ["Schmoochle"],
  "Spunge + Scups": ["Blabbit"],
  "PomPom + Pango": ["Hoola"],
  "Punkleton + Blabbit": ["Viveine"],
  "Yool + Hoola": ["Monculus"],
  "Punkleton + Yool": ["Gobbleygourd"],
  "Blabbit + Hoola": ["Spurrit"],
  "Yool + Blabbit": ["Whiz bang"],
  "Schmoochle + Hoola": ["Boo'qwurm"],
  "Schmoochle + Blabbit": ["Ffidyll"],
  "Punkleton + Schmoochle": ["Clavavera"],
  "Yool + Schmoochle": ["Carillong"],
  "Punkleton + Hoola": ["Jam Boree"],
  "Potbelly + Fluoress": ["Gob"],
  "Mammott + Fluoress": ["Bulbo"],
  "Kayna + Fluoress": ["Pluckbill"],
  "Potbelly + Theremind": ["Bonkers"],
  "Toe Jammer + Theremind": ["Poppette"],
  "Kayna + Theremind": ["Yuggler"],
  "Noggin + Floot Fly": ["HippityHop"],
  "Mammott + Floot Fly": ["Squot", "Rare Squot"],
  "Kayna + Floot Fly": ["Wimmzies"],
  "Noggin + Clackula": ["Peckidna", "Rare Peckidna"],
  "Toe Jammer + Clackula": ["Denchuhs"],
  "Kayna + Clackula": ["Hawlo"],
  "Theremind + Clackula": ["Xyster"],
  "Theremind + Fluoress": ["Cahoot", "Rare Cahoot"],
  "Theremind + Floot Fly": ["Deja-Jin"],
  "Clackula + Fluoress": ["Roarick"],
  "Floot Fly + Clackula": ["Osstax"],
  "Floot Fly + Fluoress": ["Knucklehead"],
  "Gob + Mammott": ["Spytrap"],
  "Pluckbill + Potbelly": ["TooToo"],
  "Pluckbill + Mammott": ["Fiddlement"],
  "Bonkers + Toe Jammer": ["Tapricorn"],
  "Yuggler + Potbelly": ["Rooba"],
  "Yuggler + Toe Jammer": ["Periscorp", "Rare Periscorp"],
  "Squot + Noggin": ["Cantorell"],
  "Wimmzies + Noggin": ["Bridg it"],
  "Wimmzies + Mammott": ["Clavi Gnat"],
  "Denchuhs + Noggin": ["Withur"],
  "Hawlo + Noggin": ["Banjaw"],
  "Xyster + Fluoress": ["G'day"],
  "Osstax + Theremind": ["Larvaluss"],
  "Deja + Fluoress": ["Frondley", "Rare Frondley"],
  "Osstax + Fluoress": ["Mushaboom"],
  "Furcorn + Pluckbill": ["Blow t"],
  "Flowah + Bulbo": ["Blow t"],
  "Boskus + Gob": ["Blow t"],
  "TooToo + Mammott": ["Blow t"],
  "Fiddlement + Potbelly": ["Blow t"],
  "Spytrap + Kayna": ["Blow t"],
  "Sooza + Fluoress": ["Blow t"],
  "Oaktopus + Yuggler": ["Gloptic", "Rare Gloptic"],
  "Flowah + Poppette": ["Gloptic", "Rare Gloptic"],
  "Phangler + Bonkers": ["Gloptic", "Rare Gloptic"],
  "Rootitoot + Theremind": ["Gloptic", "Rare Gloptic"],
  "Tapricorn + Kayna": ["Gloptic", "Rare Gloptic"],
  "Rooba + Toe Jammer": ["Gloptic", "Rare Gloptic"],
  "Periscorp + Potbelly": ["Gloptic", "Rare Gloptic"],
  "Drumpler + Wimmzies": ["Pladdie"],
  "Stogg + Squot": ["Pladdie"],
  "Boskus + HippityHop": ["Pladdie"],
  "Clavi Gnat + Noggin": ["Pladdie"],
  "Bridg it + Mammott": ["Pladdie"],
  "Cantorell + Kayna": ["Pladdie"],
  "Ziggurab + Floot Fly": ["Pladdie"],
  "Pladdie + Drumpler": ["Drumpler", "Pladdie"],
  "Fwog + Hawlo": ["Plinkajou"],
  "Stogg + Denchuhs": ["Plinkajou"],
  "Phangler + Peckidna": ["Plinkajou"],
  "Banjaw + Noggin": ["Plinkajou"],
  "Uuduk + Toe Jammer": ["Plinkajou"],
  "Withur + Kayna": ["Plinkajou"],
  "Thrumble + Clackula": ["Plinkajou"],
  "Plinkajou + Fwog": ["Plinkajou", "Fwog"],
  "Deja-Jin + Roarick": ["Enchantling"],
  "Xyster + Knucklehead": ["Enchantling"],
  "Cahoot + Osstax": ["Enchantling"],
  "Mushaboom + Theremind": ["Enchantling"],
  "G'day + Floot Fly": ["Enchantling"],
  "Frondley + Clackula": ["Enchantling"],
  "Larvaluss + Fluoress": ["Enchantling"],
  "Plasma Meeb + Shadow Meeb + Mech Meeb": ["Yooreek"],
  "Plasma Meeb + Shadow Meeb + Crystal Meeb": ["Meebkin"],
  "Plasma Meeb + Shadow Meeb + Poison Meeb": ["Blarret"],
  "Plasma Meeb + Mech Meeb + Crystal Meeb": ["Gaddzooks"],
  "Plasma Meeb + Shadow Meeb + Mech Meeb": ["Yooreek"],
  "Plasma Meeb + Mech Meeb + Poison Meeb": ["Auglur"],
  "Plasma Meeb + Crystal Meeb + Poison Meeb": ["Flasque"],
  "Shadow Meeb + Mech Meeb + Crystal Meeb": ["Nitebear"],
  "Shadow Meeb + Mech Meeb + Poison Meeb": ["Piplash"],
  "Shadow Meeb + Crystal Meeb + Poison Meeb": ["X rt"],
  "Mech Meeb + Crystal Meeb + Poison Meeb": ["Teeter Tauter"],
  "Plasma Meeb + Shadow Meeb + Mech Meeb + Crystal Meeb": ["Whaill"],
  "Plasma Meeb + Shadow Meeb + Mech Meeb + Poison Meeb": ["Vhenshun"],
  "Plasma Meeb + Shadow Meeb + Crystal Meeb + Poison Meeb": ["Pentumbra"],
  "Plasma Meeb + Mech Meeb + Crystal Meeb + Poison Meeb": ["Rhysmuth"],
  "Shadow Meeb + Mech Meeb + Crystal Meeb + Poison Meeb": ["Oogiddy"],
  "Plasma Meeb + Shadow Meeb + Mech Meeb + Crystal Meeb + Poison Meeb": ["BeMeebEth"],
  "Pladdie + Ziggurab": ["Owlesque"],
  "Pladdie + Cantorell": ["Owlesque"],
  "Pladdie + Bridg it": ["Owlesque"],
  "Pladdie + Clavi Gnat": ["Owlesque"],

  //Epic Breeding Combos!
  "Entbrat + Maw": ["Epic G joob"], //Heres the main method to breed epic monsters in the two boxes
  "Deedge + Dandidoo": ["Epic Tweedle"],
  "Riff + Cybop": ["Epic Tweedle"],
  "Shellbeat + Quibble": ["Epic Tweedle"],
  "Quarrister + Pango": ["Epic Tweedle"],
  "Tring + Shrubb": ["Epic Tweedle"],
  "Sneyser + Maw": ["Epic Tweedle"],
  "Entbrat + Shrubb": ["Epic Potbelly"],
  "Deedge + Oaktopus": ["Epic Potbelly"],
  "Shellbeat + Dandidoo": ["Epic Potbelly"],
  "Quarrister + Furcorn": ["Epic Potbelly"],
  "Tring + Cybop": ["Epic Potbelly"],
  "Blow t + Boskus": ["Epic Potbelly"],
  "Gloptic + Phangler": ["Epic Potbelly"],
  "Shugabush + Furcorn": ["Epic Potbelly"],
  "Entbrat + Fwog": ["Epic Noggin"],
  "Riff + Drumpler": ["Epic Noggin"],
  "Shellbeat + Shrubb": ["Epic Noggin"],
  "Quarrister + Cybop": ["Epic Noggin"],
  "Tring + Dandidoo": ["Epic Noggin"],
  "Pladdie + Boskus": ["Epic Noggin"],
  "Plinkajou + Phangler": ["Epic Noggin"],
  "Entbrat + Oaktopus": ["Epic Toe Jammer"],
  "Deedge + Quibble": ["Epic Toe Jammer"],
  "Riff + Maw": ["Epic Toe Jammer"],
  "Shellbeat + Fwog": ["Epic Toe Jammer"],
  "Sneyser + Pango": ["Epic Toe Jammer"],
  "Gloptic + Flowah": ["Epic Toe Jammer"],
  "Plinkajou + Stogg": ["Epic Toe Jammer"],
  "Entbrat + Furcorn": ["Epic Mammott"],
  "Deedge + Maw": ["Epic Mammott"],
  "Riff + Pango": ["Epic Mammott"],
  "Quarrister + Drumpler": ["Epic Mammott"],
  "Sneyser + Quibble": ["Epic Mammott"],
  "Blow t + Flowah": ["Epic Mammott"],
  "Pladdie + Stogg": ["Epic Mammott"],
  "Shugabush + Oaktopus": ["Epic Mammott"],
  "Tring + Stogg": ["Epic Kayna"],
  "Sneyser + Phangler": ["Epic Kayna"],
  "Blow t + Furcorn": ["Epic Kayna"],
  "Gloptic + Oaktopus": ["Epic Kayna"],
  "Pladdie + Drumpler": ["Epic Kayna"],
  "Plinkajou + Fwog": ["Epic Kayna"],
  "Bowgart + Quibble": ["Epic Dandidoo"],
  "Pummel + Cybop": ["Epic Dandidoo"],
  "Clamble + Pango": ["Epic Dandidoo"],
  "Reedling + Flowah": ["Epic Dandidoo"],
  "Congle + Drumpler": ["Epic Cybop"],
  "Scups + Dandidoo": ["Epic Cybop"],
  "PomPom + Shrubb": ["Epic Cybop"],
  "Reedling + Stogg": ["Epic Cybop"],
  "Congle + Dandidoo": ["Epic Quibble"],
  "Scups + Maw": ["Epic Quibble"],
  "Spunge + Shrubb": ["Epic Quibble"],
  "Wynq + Pango": ["Epic Quibble"],
  "Shugabush + PomPom": ["Epic Quibble"],
  "Thumpie + Oaktopus": ["Epic Pango"],
  "Congle + Cybop": ["Epic Pango"],
  "Reedling + Furcorn": ["Epic Pango"],
  "Whaddle + Maw": ["Epic Pango"],
  "T-Rox + Oaktopus": ["Epic Shrubb"],
  "Reedling + Quibble": ["Epic Shrubb"],
  "PomPom + Dandidoo": ["Epic Shrubb"],
  "Barrb + Cybop": ["Epic Shrubb"],
  "Bowgart + Shrubb": ["Epic Oaktopus"],
  "Spunge + Pango": ["Epic Oaktopus"],
  "Reedling + Fwog": ["Epic Oaktopus"],
  "Rootitoot + Bonkers": ["Epic Oaktopus"],
  "Shugabush + Quibble": ["Epic Oaktopus"],
  "Clamble + Fwog": ["Epic Furcorn"],
  "Spunge + Maw": ["Epic Furcorn"],
  "Thumpies + Drumpler": ["Epic Furcorn"],
  "Sooza + Pluckbill": ["Epic Furcorn"],
  "Pummel + Furcorn": ["Epic Fwog"],
  "Scups + Furcorn": ["Epic Fwog"],
  "Reedling + Oaktopus": ["Epic Fwog"],
  "Thrumble + Denchuhs": ["Epic Fwog"],
  "Clamble + Maw": ["Epic Drumpler"],
  "PomPom + Fwog": ["Epic Drumpler"],
  "Thumpies + Cybop": ["Epic Drumpler"],
  "Ziggurab + HippityHop": ["Epic Drumpler"],
  "Bowgart + Drumpler": ["Epic Maw"],
  "Spunge + Furcorn": ["Epic Maw"],
  "T-Rox + Quibble": ["Epic Maw"],
  "Whaddle + Pango": ["Epic Maw"],
  "Floogull + Dandidoo": ["Epic Glowl"],
  "Wynq + Quibble": ["Epic Glowl"],
  "Barrb + Shrubb": ["Epic Flowah"],
  "Fiddlement + Gob": ["Epic Flowah"],
  "Rooba + Poppette": ["Epic Flowah"],
  "Repatillo + Glowl": ["Epic Stogg"],
  "Bridg it + Squot": ["Epic Stogg"],
  "Withur + Phangler": ["Epic Stogg"],
  "Congle + Glowl": ["Epic Phangler"],
  "Tapricorn + Yuggler": ["Epic Phangler"],
  "Banjaw + Peckidna": ["Epic Phangler"],
  "Woolabee + Maw": ["Epic Boskus"],
  "TooToo + Bulbo": ["Epic Boskus"],
  "Cantorell + Wimmzies": ["Epic Boskus"],
  "Spunge + Fwog": ["Epic Reedling"],
  "Thumpies + Shrubb": ["Epic Reedling"],
  "Repatillo + Cybop": ["Epic Reedling"],
  "Thumpies + Quibble": ["Epic Spunge"],
  "Scups + Oaktopus": ["Epic Spunge"],
  "Congle + Oaktopus": ["Epic Thumpies"],
  "Reedling + Pango": ["Epic Thumpies"], //Next is Scups!
  "PomPom + Maw": ["Epic Scups"],
  "Pummel + Dandidoo": ["Epic Scups"],
  "T-Rox + Cybop": ["Epic PomPom"],
  "Thumpies + Mammott": ["Thumpies"],
  "Reedling + Drumpler": ["Epic PomPom"],
  "Shugabush + Mammott": ["Epic PomPom"],
  "Thumpies + Maw": ["Epic Congle"],
  "Scups + Drumpler": ["Epic Congle"],
  "Woolabee + Quibble": ["Epic Congle"],
  "Bowgart + Fwog": ["Epic Pummel"],
  "Scups + Shrubb": ["Epic Pummel"],
  "Pummel + Maw": ["Epic Clamble"],
  "PomPom + Furcorn": ["Epic Clamble"],
  "Clamble + Oaktopus": ["Epic Bowgart"],
  "Congle + Furcorn": ["Epic Bowgart"],
  "Pummel + Drumpler": ["Epic T-Rox"],
  "Congle + Fwog": ["Epic T-Rox"],
  "Floogull + Shrubb": ["Epic Barrb"],
  "Reedling + Glowl": ["Epic Floogull"],
  "Congle + Phangler": ["Epic Whaddle"],
  "Whaddle + Boskus": ["Epic Woolabee"],
  "Floogull + Flowah": ["Epic Repatillo"],
  "Rooba + Oaktopus": ["Epic Rootitoot"],
  "TooToo + Boskus": ["Epic Sooza"],
  "Uuduk + Denchuhs": ["Epic Thrumble"],
  "Bridg it + Drumpler": ["Epic Ziggurab"],
  "Congle + Boskus": ["Epic Wynq"],
  "Spunge + Cybop": ["Epic Shellbeat"],
  "Clamble + Dandidoo": ["Epic Quarrister"],
  "Pango + Bowgart": ["Epic Deedge"],
  "PomPom + Quibble": ["Epic Riff"],
  "T-Rox + Shrubb": ["Epic Entbrat"],
  "Barrb + Stogg": ["Epic Tring"],
  "Woolabee + Phangler": ["Epic Sneyser"],
  "T-Rox + Furcorn": ["Epic Ghazt"],
  "Boodoo + Dragong": ["Epic Ghazt"],
  "Bowgart + Dandidoo": ["Epic Grumpyre"],
  "Nebulob + Fung Pray": ["Epic Grumpyre"],
  "T-Rox + Pango": ["Epic Reebro"],
  "Sox + Kazilleon": ["Epic Reebro"],
  "Pummel + Quibble": ["Epic Jeeode"],
  "Jellbilly + Arackulele": ["Epic Jeeode"],
  "Clamble + Cybop": ["Epic Humbug"],
  "Whisp + Bellowfish": ["Epic Humbug"],
  "Nebulob + Kazilleon": ["Epic Whisp"],
  "Boodoo + Jellbilly": ["Epic Nebulob"],
  "Jellbilly + Bellowfish": ["Epic Sox"],
  "Arackulele + Fung Pray": ["Epic Jellbilly"],
  "Sox + Dragong": ["Epic Arackulele"],
  "Kazilleon + Bellowfish": ["Epic Boodoo"],
  "Sox + Arackulele": ["Epic Kazilleon"],
  "Whisp + Dragong": ["Epic Bellowfish"],
  "Whisp + Fung Pray": ["Epic Dragong"],
  "Nebulob + Boodoo": ["Epic Fung Pray"],
  "Entbrat +  Drumpler": ["Epic Punkleton"],
  "Schmoochle + Blabbit": ["Epic Punkleton"],
  "Deedge + Pango": ["Epic Yool"],
  "Hoola + Blabbit": ["Epic Yool"],
  "Riff + Quibble": ["Epic Schmoochle"],
  "Punkleton + Hoola": ["Epic Schmoochle"],
  "Shellbeat + Oaktopus": ["Epic Blabbit"],
  "Punkelton + Yool": ["Epic Blabbit"],
  "Riff + Fwog": ["Epic Hoola"],
  "Quarrister + Dandidoo": ["Epic Hoola"],
  "Tring + Flowah": ["Epic Gobbleygourd"],
  "Sneyser + Boskus": ["Epic Gobbleygourd"],
  "Jam Boree + Clavavera": ["Epic Gobbleygourd"],
  "Plinkajou + Hawlo": ["Epic Clavavera"],
  "Viveine + Whiz bang": ["Epic Clavavera"],
  "Shugabush + PomPom": ["Epic Viveine"],
  "Ffidyll + Monculus": ["Epic Viveine"],
  "Gobbleygourd + Boo'qwurm": ["Epic Jam Boree"],
  "Enchantling + Roarick": ["Epic Carillong"],
  "Whiz bang + Monculus": ["Epic Carillong"],
  "Blow t + Bulbo": ["Epic Whiz bang"],
  "Boo'qwurm + Spurrit": ["Epic Whiz bang"],
  "Whisp + Humbug": ["Epic Monculus"],
  "Ffidyll + Carillong": ["Epic Monculus"],
  "Pladdie + HippityHop": ["Epic Ffidyll"],
  "Viveine + Spurrit": ["Epic Ffidyll"],
  "Gloptic + Bonkers": ["Epic Boo'qwurm"],
  "Gobbleygourd + Clavavera": ["Epic Boo'qwurm"],
  "Sneyser + Glowl": ["Epic Spurrit"],
  "Jam Boree + Carillong": ["Epic Spurrit"],
  "Entbrat + Maw": ["Epic G joob"],
  "Deedge + Furcorn": ["Epic Strombonin"],
  "Riff + Fwog": ["Epic Yawstrich"],
  "Shellbeat + Cybop": ["Epic Anglow"],
  "Cataliszt + Cherubble": ["Epic Anglow"],
  "Quarrister + Shrubb": ["Epic Hyehehe"],
  "Cataliszt + Buzzinga": ["Knurv", "Epic Hyehehe"],
  "Tring + Glowl": ["Epic Buzzinga"],
  "Cataliszt + Anglow": ["Pinghound", "Epic Buzzinga"],
  "Blow t + Kayna": ["Epic Yelmut"],
  "Sneyser + Boskus": ["Epic Cherubble"],
  "Cataliszt + Hyehehe": ["Epic Cherubble"],

  //Update V3 ~Seasonal Fix :)
  "Kayna + Barrb": ["Buzzinga"],
  "Withur + Clackula": ["Clavavera"],
  "Shugabush + Oaktopus": ["Viveine", "Epic Mammott"],
  "Punkleton + Hoola": ["Jam Boree", "Epic Schmoochle"],
  "Schmoochle + Yool": ["Carillong"],
  "Mushaboom + Roarick": ["Carillong"],
  "Blow t + Spytrap": ["Whiz bang", "Shhimmer"],
  "Nebulob + Jeeode": ["Monculus"],
  "Pladdie + Floot Fly": ["Ffidyll", "Epic PongPing"],
  "Periscorp + Bonkers": ["Boo'qwurm"],
  "Wynq + Maw": ["Spurrit"],
  "500 Relics": ["Mimic"],
  "Buy From Store For 100 Relics": ["Stoowarb", "Parlsona", "Tawkerr", "Maggpi",],
  "Plinkajou + Thrumble": ["Arcorina"],
  "Plinkajou + Withur": ["Arcorina"],
  "Plinkajou + Uuduk": ["Arcorina"],
  "Plinkajou + Banjaw": ["Arcorina"],

  // UPDATE 5.0! 
  "Blow t + Sooza": ["Shhimmer"],
  "Blow t + TooToo": ["Shhimmer"],
  "Blow t + Fiddlement": ["Shhimmer"],
  "Hairionette + Owlesque": ["Scallyrags"],
  "Owlesque + Arcorina": ["Dakktyl"],
  "Scallyrags + Arcorina": ["Jerm"],
  "Dakktyl + Hairionette": ["Jerm"],

  // "Clamble + Bowgart": ["Rare Mammott"],
  // "Clamble + T Rox": ["Rare Mammott"], 
  "Bowgart + T Rox": ["Punkleton", "Rare Mammott"],
  "Thumpies +  Congle": ["Rare Mammott"],
  // "Thumpies + Bowgart": ["Rare Mammott"],
  // "Congle + Bowgart": ["Rare Mammott"],
  // "PomPom + Congle": ["Rare Mammott"],
  // "PomPom + T Rox": ["Rare Mammott"],
  "Congle + T Rox": ["Rare Mammott"],
  "Thumpies + PomPom": ["Rare Mammott"],
  // "Thumpies + Clamble": ["Rare Mammott"],
  // "Clamble + PomPom": ["Rare Mammott"],
  // "Congle + Woolabee": ["Rare Mammott"],
  "Congle + Wynq": ["Rare Mammott"],
  // "Woolabee + Wynq": ["Rare Mammott"],
  // "Sooza + Spytrap": ["Rare Mammott"],
  // "Sooza + Fiddlement": ["Rare Mammott"],
  "Spytrap + Fiddlement": ["Rare Mammott"],
  // "Ziggurab + Cantorell": ["Rare Mammott"],
  // "Ziggurab + Clavi Gnat": ["Rare Mammott"],
  "Cantorell + Clavi Gnat": ["Rare Mammott"],
  "Pummel + T Rox": ["Rare Noggin"],
  "Scups + T Rox": ["Rare Noggin"],
  "Reedling + Pummel": ["Rare Noggin"],
  "Reedling + Clamble": ["Rare Noggin"],
  "Reedling + Floogull": ["Rare Noggin", "Rare Tweedle"],
  "Ziggurab + Bridg it": ["Rare Noggin"],
  "Thrumble + Withur": ["Rare Noggin", "Rare Toe Jammer"],
  "Pummel + Bowgart": ["Rare Potbelly", "Rare Toe Jammer"],
  "Spunge + Bowgart": ["Rare Potbelly", "Rare Tweedle"],
  "Reedling + Spunge": ["Rare Potbelly", "Rare Tweedle"],
  "Reedling + Thumpies": ["Rare Potbelly"],
  "Reedling + Barrb": ["Rare Potbelly"],
  "Sooza + Spytrap": ["Rare Potbelly"],
  "Rootitoot + Tapricorn": ["Rare Potbelly", "Rare Toe Jammer"],
  "Spunge + Thumpies": ["Rare Tweedle"],
  "Scups + PomPom": ["Rare Tweedle"],
  "Congle + Whaddle": ["Rare Tweedle", "Rare Toe Jammer"],
  "Spunge + Congle": ["Rare Toe Jammer"],
  "Scups + Congle": ["Rare Toe Jammer"],
  "Spunge + Scups": ["Rare Toe Jammer"],
  "Barrb + Floogull": ["Rare Kayna"],
  "Whaddle + Woolabbe": ["Rare Kayna"],
  "Sooza + TooToo": ["Rare Kayna"],
  "Rootitoot + Rooba": ["Rare Kayna"],
  "Thrumble + Uuduk": ["Rare Kayna"],
  "Spytrap + TooToo": ["Rare Fluoress"],
  "G day + Frondley": ["Rare Fluoress", "Rare Theremind", "Rare Floot Fly", "Rare Clackula"],
  "Tapricorn + Rooba": ["Rare Theremind"],
  "Cantorell + Bridg it": ["Rare Floot Fly"],
  "Withur + Uuduk": ["Rare Clackula"],
  "Plinkajou + Denchuhs": ["Epic Clackula"],
  "Repatillo + Dandidoo": ["Epic Candelavra"],
  "Buy From Shop": ["Toe Jammer", "Mammott", "Potbelly", "Tweedle", "Kayna", "Noggin", "Clackula", "Floot Fly", "Fluoress", "Theremind"]
};

const monsterCostumes = [
  {
    "name": "Anglow",
    "normal": {
      "c1": "Anglow_(Little_Cosmic_Egg)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Arackulele",
    "normal": {
      "c1": "Arackulele_(Baseborn_Busker)",
      "c2": "Arackulele_(Blimp_My_Ride)",
      "c3": "Arackulele_(Fastest_Webslinger)",
      "c4": "Arackulele_(Lionized)",
      "c5": "Arackulele_(Pollinator_Poise)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Barrb",
    "normal": {
      "c1": "Barrb_(Gourdness_Gracious)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "BeMeebEth",
    "normal": {
      "c1": "BeMeebEth_(Planetarium_Voyager)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Bellowfish",
    "normal": {
      "c1": "Bellowfish_(Aquaslime_Spout)",
      "c2": "Bellowfish_(Bellow-blerite_Belly)",
      "c3": "Bellowfish_(Crystal_Habit)",
      "c4": "Bellowfish_(Take_the_Plunge)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Bisonorus",
    "normal": {
      "c1": "Bisonorus_(Candy_Smorgasbord)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Blabbit",
    "normal": {
      "c1": "Blabbit_(Big_Shell-Out)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Blow t",
    "normal": {
      "c1": "Blow't_(Short_Fused)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Bonkers",
    "normal": {
      "c1": "Bonkers_(Hardcover_Hits)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Boodoo",
    "normal": {
      "c1": "Boodoo_(Private_Eyes)",
      "c2": "Boodoo_(We_All_Scream)"
    },
    "rare": {
      "c1": "Rare_Boodoo_(Speaking_in_Tongues)"
    },
    "epic": {}
  },
  {
    "name": "Boskus",
    "normal": {
      "c1": "Boskus_(Trample_On)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Bowgart",
    "normal": {
      "c1": "Bowgart_(Bowzo_the_Clown)",
      "c2": "Bowgart_(Jack_Eloper)",
      "c3": "Bowgart_(Oh_Ossy!)",
      "c4": "Bowgart_(Ushanka_Very_Much)",
      "c5": "Bowgart_(Wintergreen_Vesture)",
      "c6": "Bowgart_(Wood_You_Mind)",
      "c7": "Bowgart_Spooktacle_2012",
      "c8": "Bowgart_Spooktacle_2015",
      "c9": "Bowgart_Spooktacle_2018"
    },
    "rare": {
      "c1": "Rare_Bowgart_(Bolt-gart)",
      "c2": "Rare_Bowgart_(Bolt-gart)",
      "c3": "Rare_Bowgart_Spooktacle_2015",
      "c4": "Rare_Bowgart_Xmas_2015"
    },
    "epic": {}
  },
  {
    "name": "Bowhead",
    "normal": {
      "c1": "Bowhead_(Tale_of_a_Whale)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Bulbo",
    "normal": {
      "c1": "Bulbo_(Merry_and_Bright)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Buzzinga",
    "normal": {
      "c1": "Buzzinga_(Orn_of_Plenty)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Candelavra",
    "normal": {
      "c1": "Candelavra_(Gobbley_Idolater)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Cantorell",
    "normal": {
      "c1": "Cantorell_(Buckled_Caps)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Cherubble",
    "normal": {
      "c1": "Cherubble_(Shape_of_Umm)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Clackula",
    "normal": {
      "c1": "Clackula_(Charming_Charro)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Clamble",
    "normal": {
      "c1": "Clamble_(Bough_Down)",
      "c2": "Clamble_(Merch_Mogul)",
      "c3": "Clamble_(Nevernoot)",
      "c4": "Clamble_(Veggie_Burger)",
      "c5": "Clamble_(Working_in_the_Lab)",
      "c6": "Clamble_(You've_Got_Mail)"
    },
    "rare": {
      "c1": "Rare_Clamble_(On_a_LARP)"
    },
    "epic": {
      "c1": "Epic_Clamble_(D.I.Y.-zard)"
    }
  },
  {
    "name": "Congle",
    "normal": {
      "c1": "Congle_(Beat_Poet)",
      "c2": "Congle_(Catch_of_the_Day)",
      "c3": "Congle_(Chick_'n'_Chokk)",
      "c4": "Congle_(Giddy_Giftwrap)",
      "c5": "Congle_(Monster_Mothma)",
      "c6": "Congle_(Playground_Calico)",
      "c7": "Congle_(Playground_Snow_Crab)",
      "c8": "Congle_(Ten_Gallon_Hat)",
      "c9": "Congle_(Water-shellon)"
    },
    "rare": {
      "c1": "Rare_Congle_(Gaudy_Giftwrap)"
    },
    "epic": {}
  },
  {
    "name": "Cybop",
    "normal": {
      "c1": "Cybop_(Chitin_Mittens)",
      "c2": "Cybop_(Parasol-ing)",
      "c3": "Cybop_(Petal_Propeller)",
      "c4": "Cybop_(Rag_Mop)",
      "c5": "Cybop_(Talent_in_Spades)"
    },
    "rare": {},
    "epic": {
      "c1": "Epic_Cybop_(Thruster_Thorns)"
    }
  },
  {
    "name": "Dandidoo",
    "normal": {
      "c1": "Dandidoo_(Bubble_Whammy)",
      "c2": "Dandidoo_(Fanciful_Florets)",
      "c3": "Dandidoo_(GrillMonster)",
      "c4": "Dandidoo_(Memories_of_Youth)",
      "c5": "Dandidoo_(Orrery_Story)",
      "c6": "Dandidoo_(Punk_Apparel)",
      "c7": "Dandidoo_(Stocking_Cap)"
    },
    "rare": {
      "c1": "Rare_Dandidoo_(Onesie_Twosie)",
      "c2": "Rare_Dandidoo_Xmas_2015"
    },
    "epic": {
      "c1": "Epic_Dandidoo_(Major_Egghead)"
    }
  },
  {
    "name": "Deedge",
    "normal": {
      "c1": "Deedge_(Beach_Bum)",
      "c2": "Deedge_(Cousin_Steady)",
      "c3": "Deedge_(Ore_So_Vein)",
      "c4": "Deedge_(Skrooball)",
      "c5": "Deedge_(Vintage_Speakers)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Deja Jin",
    "normal": {
      "c1": "D├йj├а-Jin_(Lucky_Mask)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Denchuhs",
    "normal": {
      "c1": "Denchuhs_Best_Cuspuds"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Do",
    "normal": {
      "c1": "Do_(Daffodil_Topper)",
      "c2": "Do_(Heart_Box_Topper)",
      "c3": "Do_(Palm_Tree_Topper)",
      "c4": "Do_(Prezzie_Topper)",
      "c5": "Do_(Undead_Hand_Topper)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Dragong",
    "normal": {
      "c1": "Dragong_(Archaeo_Rodeo)",
      "c2": "Dragong_(Frill_Thrill)",
      "c3": "Dragong_(Terracotta_Regalia)",
      "c4": "Dragong_(Time_to_Pretend)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Drummidary",
    "normal": {
      "c1": "Drummidary_(Get_the_Hook)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Drumpler",
    "normal": {
      "c1": "Drumpler_(Bionic_Braces)",
      "c2": "Drumpler_(Cherubic_Cheer)",
      "c3": "Drumpler_(Foot_of_Furcorn_Helm)",
      "c4": "Drumpler_(Forward_March)",
      "c5": "Drumpler_(Lifeguard_Luxe)",
      "c6": "Drumpler_(Lycan_Likeness)",
      "c7": "Drumpler_(Thingia_Swag)",
      "c8": "Drumpler_(Tomayto_Tomahto)",
      "c9": "Drumpler_(Tune_Up_Mechanic)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Edamimi",
    "normal": {
      "c1": "Edamimi_(Fruit_Salad_Style)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Entbrat",
    "normal": {
      "c1": "Entbrat_(Brat-wurst)",
      "c2": "Entbrat_(Gigacheep_Chic)",
      "c3": "Entbrat_(He-Brat_Harness)",
      "c4": "Entbrat_(Horn_Warmers)",
      "c5": "Entbrat_(Playground_Hydrangea)",
      "c6": "Entbrat_(Playground_Peony)",
      "c7": "Entbrat_(Spiral_Engravings)"
    },
    "rare": {
      "c1": "Rare_Entbrat_Halloween_2016"
    },
    "epic": {
      "c1": "Epic_Entbrat_(Zombie-ie-ie)"
    }
  },
  {
    "name": "Fa",
    "normal": {
      "c1": "Fa_(Freesia_Topper)",
      "c2": "Fa_(Headstone_Topper)",
      "c3": "Fa_(Love_Letter_Topper)",
      "c4": "Fa_(Snow_Cone_Topper)",
      "c5": "Fa_(Tiki_Mask_Topper)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Floogull",
    "normal": {
      "c1": "Floogull_(Appetizing_Apron)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Floot Fly",
    "normal": {
      "c1": "Floot_Fly_(The_Green_Mon)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Flowah",
    "normal": {
      "c1": "Flowah_(Gobbley_Mascot)",
      "c2": "Flowah_(Secondhand_Sunnies)"
    },
    "rare": {
      "c1": "Rare_Flowah_(Beads_of_Sweat)"
    },
    "epic": {}
  },
  {
    "name": "Flum Ox",
    "normal": {
      "c1": "Flum_Ox_(Bovine_Unicorn)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Fluoress",
    "normal": {
      "c1": "Fluoress_(Pride_and_Precious_Fits)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Frondley",
    "normal": {
      "c1": "Frondley_(Hot_Pot_Hum)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Fung Pray",
    "normal": {
      "c1": "Fung_Pray_(Awesome_Saucer)",
      "c2": "Fung_Pray_(Burgomaster)",
      "c3": "Fung_Pray_(Tip_Topiary)",
      "c4": "Fung_Pray_(Under_my_Umbrella)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Furcorn",
    "normal": {
      "c1": "Furcorn_('Chaun_Job)",
      "c2": "Furcorn_(Canuck_Stalk)",
      "c3": "Furcorn_(Fandemonium_Frock)",
      "c4": "Furcorn_(Fashion_Forward)",
      "c5": "Furcorn_(Festive_Socks)",
      "c6": "Furcorn_(Freshener-Faced)",
      "c7": "Furcorn_(Lucky_Thirteen)",
      "c8": "Furcorn_(Playground_Pourge)",
      "c9": "Furcorn_(Playground_Strawberry)",
      "c10": "Furcorn_(Spritely_Sheet)",
      "c11": "Furcorn_(Voidcorn)",
      "c12": "Furcorn_Spooktacle_2015",
      "c13": "Furcorn_Spooktacle_2018",
      "c14": "Furcorn_Spooktacle_2019"
    },
    "rare": {
      "c1": "Rare_Furcorn_(Furcorn_the_13th)",
      "c2": "Rare_Furcorn_(What's_the_Ti)",
      "c3": "Rare_Furcorn_Halloween_2015",
      "c4": "Rare_Furcorn_Yay_2014"
    },
    "epic": {
      "c1": "Epic_Furcorn_(Big_Blue_Bauble)",
      "c2": "Epic_Furcorn_Spooktacle_2019"
    }
  },
  {
    "name": "Fwog",
    "normal": {
      "c1": "Fwog_(All_Squashed_Up)",
      "c2": "Fwog_(Bunny_Slippers)",
      "c3": "Fwog_(Calaca_Coiffure)",
      "c4": "Fwog_(Ironclad_Claws)",
      "c5": "Fwog_(Lovestruck)",
      "c6": "Fwog_(Mer-Meridian)",
      "c7": "Fwog_(Narwhaaa_)"
    },
    "rare": {
      "c1": "Rare_Fwog_Spooktacle_2018"
    },
    "epic": {
      "c1": "Epic_Fwog_(See__No_Bite)"
    }
  },
  {
    "name": "G'joob",
    "normal": {
      "c1": "G'joob_(Sgt._Flipper)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Ghazt",
    "normal": {
      "c1": "Ghazt_(Blinded_with_Science)",
      "c2": "Ghazt_(GKO)",
      "c3": "Ghazt_(Kinda_Sketchy)",
      "c4": "Ghazt_(Med-Hiss-inal)",
      "c5": "Ghazt_(Seus-spicious)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Gloptic",
    "normal": {
      "c1": "Gloptic_(Lang'strump)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Glowl",
    "normal": {
      "c1": "Glowl_(Airhart)",
      "c2": "Glowl_(Gobbley_Tribute)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Gnarls",
    "normal": {
      "c1": "Gnarls_(Teddiberry_Trim)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Gob",
    "normal": {
      "c1": "Gob_(Blinky_Buddy)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Grumpyre",
    "normal": {
      "c1": "Grumpyre_(Dungeon_Master)",
      "c2": "Grumpyre_(Garbed_in_Goth)",
      "c3": "Grumpyre_(Holly-lujah)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Hawlo",
    "normal": {
      "c1": "Hawlo_(Hawlo_Knight)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "HippityHop",
    "normal": {
      "c1": "HippityHop_(Peanut_Gallery)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Hoola",
    "normal": {
      "c1": "Hoola_(DJ_Epic_Drip)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Humbug",
    "normal": {
      "c1": "Humbug_(Big_Fungus)",
      "c2": "Humbug_(MailMon_Mike)",
      "c3": "Humbug_(Straw_Hat_Disguise)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Hyehehe",
    "normal": {
      "c1": "Hyehehe_(Snicker_Snorkel)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Incisaur",
    "normal": {
      "c1": "Incisaur_(Amiable_Alebrije)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Jam Boree",
    "normal": {
      "c1": "Jam_Boree_(Say_Cherry_Cheese)"
    },
    "rare": {
      "c1": "Rare_Jam_Boree_(Corporate_Cake)"
    },
    "epic": {
      "c1": "Epic_Jam_Boree_(Almighty_Ambrosia)"
    }
  },
  {
    "name": "Jeeode",
    "normal": {
      "c1": "Jeeode_(Arctic_Armonica)",
      "c2": "Jeeode_(Darlin'_Garlands)",
      "c3": "Jeeode_(For_Soothsayer)",
      "c4": "Jeeode_(Krystillium_Kouture)",
      "c5": "Jeeode_(Tactile_Taproot)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Jellbilly",
    "normal": {
      "c1": "Jellbilly_(Propeller_Beanie)",
      "c2": "Jellbilly_(Refrain_Conductor)",
      "c3": "Jellbilly_(Revisionist_History)",
      "c4": "Jellbilly_(Think_Tank)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Kayna",
    "normal": {
      "c1": "Kayna_(Gobbley_Get-Up)",
      "c2": "Kayna_(Halleberry_Heat)",
      "c3": "Kayna_(Light-Bright)",
      "c4": "Kayna_(Playground_Frostbite)",
      "c5": "Kayna_(Playground_Roseate)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Kazilleon",
    "normal": {
      "c1": "Kazilleon_(Ivy_League)",
      "c2": "Kazilleon_(Lobster_Role)",
      "c3": "Kazilleon_(Paleo_Diet)",
      "c4": "Kazilleon_(Scale_Model)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Knurv",
    "normal": {
      "c1": "Knurv_(Cadaverous_Cryptid)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "La",
    "normal": {
      "c1": "La_(Frosty_Face_Topper)",
      "c2": "La_(Hibiscus_Topper)",
      "c3": "La_(Lily-of-the-Valley_Topper)",
      "c4": "La_(Teddybear_Topper)",
      "c5": "La_(Witch_Hat_Topper)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Maggpi",
    "normal": {
      "c1": "Maggpi_(Cane-Do_Attitude)",
      "c2": "Maggpi_(Positively_Brimming)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Mammott",
    "normal": {
      "c1": "Mammott_Pirate",
      "c2": "Halloween_Mammott",
      "c3": "Mammott_(Automammotton)",
      "c4": "Mammott_(Belt_of_Belting)",
      "c5": "Mammott_(Bunce_Cap)",
      "c6": "Mammott_(Fandemonium_Duds)",
      "c7": "Mammott_(Father_Yay)",
      "c8": "Mammott_(Mam-maillot)",
      "c9": "Mammott_(Off_the_Cuffs)",
      "c10": "Mammott_(Playground_Panda)",
      "c11": "Mammott_(Playground_Sloth)",
      "c12": "Mammott_(Sea_Sharp)",
      "c13": "Mammott_(Stentorian_Skeleton)",
      "c14": "Mammott_(Water_Buff-a-low)",
      "c15": "Mammott_(_Bill_)",
    },
    "rare": {
      "c1": "Rare_Mammott_(Kramp_My_Style)",
      "c2": "Rare_Mammott_Halloween_2015"
    },
    "epic": {
      "c1": "Epic_Mammott_Yay_2018",
      "c2": "Spooktacle_Epic_Mammott"
    }
  },
  {
    "name": "Maw",
    "normal": {
      "c1": "Maw_(Antique_Antennae)",
      "c2": "Maw_(Groucho_Slouch)",
      "c3": "Maw_(Heart_Bopper)",
      "c4": "Maw_(Honeycombover)",
      "c5": "Maw_(No_Eyes_with_a_Vase)",
      "c6": "Maw_(Portable_Maptop)",
      "c7": "Maw_(Sensory_Furphones)",
      "c8": "Maw_(Wreck_the_Halls)"
    },
    "rare": {
      "c1": "Rare_Maw_(Smitten_Stritch)"
    },
    "epic": {
      "c1": "Epic_Maw_(Guided_Mistletoe)",
      "c2": "Epic_Maw_Spooktacle_2019"
    }
  },
  {
    "name": "Mi",
    "normal": {
      "c1": "Mi_(Boo-in-the-Box_Topper)",
      "c2": "Mi_(Muscari_Topper)",
      "c3": "Mi_(Pineapple_Topper)",
      "c4": "Mi_(Stocking_Topper)",
      "c5": "Mi_(Sweetheart_Topper)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Mimic",
    "normal": {
      "c1": "Mimic_(Festyvalgoer)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Mushaboom",
    "normal": {
      "c1": "Mushaboom_(Gift_Box_Goodies)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Nebulob",
    "normal": {
      "c1": "Nebulob_(Air_Purifier)",
      "c2": "Nebulob_(Mega_Mon)",
      "c3": "Nebulob_(Shake_'n'_Flake)",
      "c4": "Nebulob_(Sticky_Handed)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Noggin",
    "normal": {
      "c1": "Noggin_(Ball_Bearing)",
      "c2": "Noggin_(Chalk-full)",
      "c3": "Noggin_(HELPful_Rings)",
      "c4": "Noggin_(Kinetic_Kicks)",
      "c5": "Noggin_(Rock_Candy)",
      "c6": "Noggin_(Slideshow_Intern)",
      "c7": "Noggin_(Two_to_Tango)"
    },
    "rare": {
      "c1": "Rare_Noggin_(Rock_and_Dice_Roll)",
      "c2": "Rare_Noggin_Spooktacle_2015"
    },
    "epic": {
      "c1": "Epic_Noggin_Burning_Love"
    }
  },
  {
    "name": "Oaktopus",
    "normal": {
      "c1": "Oaktopus_(Bred_Delicious)",
      "c2": "Oaktopus_(Cotton_Dandy)",
      "c3": "Oaktopus_(Cushy_Curlers)",
      "c4": "Oaktopus_(Eggy_Wiggs)",
      "c5": "Oaktopus_(Gone_Commercial)",
      "c6": "Oaktopus_(TP'd_Shoubadour)",
      "c7": "Oaktopus_(Target_Practice)",
      "c8": "Oaktopus_(Touch_of_Tromino)"
    },
    "rare": {},
    "epic": {
      "c1": "Epic_Oaktopus_Spooktacle_2019"
    }
  },
  {
    "name": "Osstax",
    "normal": {
      "c1": "Osstax_(Golden_Ginkgos)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Pango",
    "normal": {
      "c1": "Pango_(Rainbow_Raiment)",
      "c2": "Pango_(Cozy_Winter_Wear)",
      "c3": "Pango_(Downhome_Puffin)",
      "c4": "Pango_(Dynamic_Dome)",
      "c5": "Pango_(Lei_It_On_Me)",
      "c6": "Pango_(Playground_Blue_Jay)",
      "c7": "Pango_(Playground_Toucan)",
      "c8": "Pango_(PosiTRONic)",
      "c9": "Pango_(Prom_King)",
      "c10": "Pango_(Rainbow_Raiment)",
      "c11": "Pango_(Serving_of_Just_Ice)"
    },
    "rare": {
      "c1": "Rare_Pango_Christmas.PNG"
    },
    "epic": {
      "c1": "Epic_Pango_Yay_2020"
    }
  },
  {
    "name": "Parlsona",
    "normal": {
      "c1": "Parlsona_(Papercute)",
      "c2": "Parlsona_(Witch_is_Which)",
      "c3": "Parlsona_(Wondrous_Waistcoat)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Peckidna",
    "normal": {
      "c1": "Peckidna_(Calaverita_Cutie)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Periscorp",
    "normal": {
      "c1": "Periscorp_(Other_Monster)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Phangler",
    "normal": {
      "c1": "Phangler_(Sumpter_Net)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Pladdie",
    "normal": {
      "c1": "Pladdie_(Bullate_Bloomer)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Plinkajou",
    "normal": {
      "c1": "Plinkajou_(Monarch's_Rest)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "PomPom",
    "normal": {
      "c1": "PomPom_('Borg_Booties)",
      "c2": "PomPom_(Drop-Dead_Gorg)",
      "c3": "PomPom_(Fandemonium_Uniform)",
      "c4": "PomPom_(Fantasy_Wings)",
      "c5": "PomPom_(Homecoming_Queen)",
      "c6": "PomPom_(Not_So_Mid_Summer)",
      "c7": "PomPom_(Offworld_Outfit)",
      "c8": "PomPom_(On_the_Bleachers)",
      "c9": "PomPom_(Playground_Candy_Cane)",
      "c10": "PomPom_(Playground_Moody)",
      "c11": "PomPom_(Pom-Mohawk)"
    },
    "rare": {
      "c1": "Rare_PomPom_Halloween_2015"
    },
    "epic": {}
  },
  {
    "name": "PongPing",
    "normal": {
      "c1": "PongPing_(Luck_o'_the_Firish)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Potbelly",
    "normal": {
      "c1": "Potbelly_(Beauteous_Bloom)",
      "c2": "Potbelly_(Bowl-Cuttings)",
      "c3": "Potbelly_(Infamous_Mug_Pot)",
      "c4": "Potbelly_(Lichenthrope)",
      "c5": "Potbelly_(Mean_Green)",
      "c6": "Potbelly_(Shopping_Spurge)",
      "c7": "Potbelly_(Soils_of_Spore)"
    },
    "rare": {
      "c1": "Rare_Potbelly_Xmas_2015"
    },
    "epic": {
      "c1": "Epic_Potbelly_(Drake_the_Halls)"
    }
  },
  {
    "name": "Pummel",
    "normal": {
      "c1": "Pummel_(Baited_Breath)",
      "c2": "Pummel_(Carotene_Bump)",
      "c3": "Pummel_(Horned_Spangenhelm)",
      "c4": "Pummel_(Ol'_1-2_Thump)",
      "c5": "Pummel_(Rainbow_Shark)",
      "c6": "Pummel_(Toque-n_Togs)",
      "c7": "Pummel_(Trickster_Trappings)"
    },
    "rare": {
      "c1": "Rare_Pummel_Yay_2016",
      "c2": "Rare_Pummell_Halloween_2015"
    },
    "epic": {
      "c1": "Epic_Pummel_(Bonnethead)"
    }
  },
  {
    "name": "Punkleton",
    "normal": {
      "c1": "Punkleton_(Mouth_Waterer)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Quarrister",
    "normal": {
      "c1": "Quarrister_(Rock_Pile_Rags)",
      "c2": "Quarrister_(Sparring_Pads)",
      "c3": "Quarrister_(Sweatbands)",
      "c4": "Quarrister_(Teddy_Rocks-Pin)",
      "c5": "Quarrister_(Tentacool)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Quibble",
    "normal": {
      "c1": "Quibble_(Beaky_Clean)",
      "c2": "Quibble_(Chokkolit_Keys)",
      "c3": "Quibble_(Dyad_Hatters)",
      "c4": "Quibble_(Miner_Key)",
      "c5": "Quibble_(Sakura_Corsage)",
      "c6": "Quibble_(Torrtle_Doves)",
      "c7": "Quibble_(Valiant_Visors)"
    },
    "rare": {
      "c1": "Rare_Quibble_(Sunday_Best)"
    },
    "epic": {}
  },
  {
    "name": "Re",
    "normal": {
      "c1": "Re_(Abnormal_Skull_Topper)",
      "c2": "Re_(Choktruff_Topper)",
      "c3": "Re_(Pull_Bow_Topper)",
      "c4": "Re_(Ranunculus_Topper)",
      "c5": "Re_(Volcano_Topper)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Reebro",
    "normal": {
      "c1": "Reebro_(Brain_on_Plugs)",
      "c2": "Reebro_(Chiefly_Masterful)",
      "c3": "Reebro_(Future_So_Bright)",
      "c4": "Reebro_(Love_Machine)",
      "c5": "Reebro_(Proof_of_Concept)"
    },
    "rare": {
      "c1": "Rare_Reebro_Spooktacle_2018"
    },
    "epic": {}
  },
  {
    "name": "Reedling",
    "normal": {
      "c1": "Halloween_Rare_Reedling",
      "c2": "Reedling_(Beetle_Bounce)",
      "c3": "Reedling_(Breath_Tweeter)",
      "c4": "Reedling_(Grassy_Gnoll)",
      "c5": "Reedling_(In_It_To_Fin_It)",
      "c6": "Reedling_(Oni-rous_Mask)",
      "c7": "Reedling_(Smunkin_Mask)",
      "c8": "Reedling_Spooktacle_2018"
    },
    "rare": {
      "c1": "Rare_Reedling_Spooktacle_2018"
    },
    "epic": {
      "c1": "Epic_Reedling_(Can't_Stand_the_Heat)"
    }
  },
  {
    "name": "Repatillo",
    "normal": {
      "c1": "Repatillo_(Gobbley_Homage)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Riff",
    "normal": {
      "c1": "Riff_(Heavymetal_Helmet)",
      "c2": "Riff_(Power_of_Luff)",
      "c3": "Riff_(Rockin'_Around_the_Yay_Tree)",
      "c4": "Riff_(Seaweed_Wraps)",
      "c5": "Riff_(Spiny_Six-String)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Rooba",
    "normal": {},
    "rare": {
      "c1": "Rare_Rooba_('Picsie_Perfect)"
    },
    "epic": {}
  },
  {
    "name": "Schmoochle",
    "normal": {
      "c1": "Schmoochle_(Dashing_Suitor)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Scups",
    "normal": {
      "c1": "Scups_(Aloof_Leaf)",
      "c2": "Scups_(Nest_Egg)",
      "c3": "Scups_(Plans_for_Nigel)",
      "c4": "Scups_(Plug_Lyfe)",
      "c5": "Scups_(Ruddy_Rednose)",
      "c6": "Scups_(Shape_of_You)",
      "c7": "Scups_(Space_Ploddity)"
    },
    "rare": {
      "c1": "Rare_Scups_Yay_2015"
    },
    "epic": {
      "c1": "Epic_Scups_(Dongle_the_Thing)"
    }
  },
  {
    "name": "Shellbeat",
    "normal": {
      "c1": "Shellbeat_(Call_of_Shellthulhu)",
      "c2": "Shellbeat_(Cod_Topper)",
      "c3": "Shellbeat_(Cooler_Head_Prevails)",
      "c4": "Shellbeat_(Dirty_Work)",
      "c5": "Shellbeat_(Driftwood_Drum)",
      "c6": "Shellbeat_(Gene_Krabba)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Shrubb",
    "normal": {
      "c1": "Shrubb_(Conehead)",
      "c2": "Shrubb_(Drool_Noodles)",
      "c3": "Shrubb_(Ire_Hydrant)",
      "c4": "Shrubb_(Shrubbles_the_Clown)",
      "c5": "Shrubb_(Thumpiebait_Cap)",
      "c6": "Shrubb_Yay_2015"
    },
    "rare": {
      "c1": "Rare_Shrubb_Halloween_2016",
      "c2": "Rare_Shrubb_Yay_2015"
    },
    "epic": {
      "c1": "Epic_Shrubb_(Mage's_Cackleberry)",
      "c2": "Epic_Shrubb_Yay_2020"
    }
  },
  {
    "name": "Sneyser",
    "normal": {
      "c1": "Sneyser_(Observatoribum)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Sol",
    "normal": {
      "c1": "Sol_(Chokstrawb_Topper)",
      "c2": "Sol_(Coconut_Topper)",
      "c3": "Sol_(Smunk-o-Lantern_Topper)",
      "c4": "Sol_(Snowdrop_Topper)",
      "c5": "Sol_(Two_Canes_Topper)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Sooza",
    "normal": {
      "c1": "Sooza_(Parade_Prepped)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Sox",
    "normal": {
      "c1": "Sox_(Business_Casual)",
      "c2": "Sox_(Careless_Kit)",
      "c3": "Sox_(Forest_Cloak)",
      "c4": "Sox_(What_Big_Eyes)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Spunge",
    "normal": {
      "c1": "Spunge_(Holiday_Party)",
      "c2": "Spunge_(Peep_Show)",
      "c3": "Spunge_(Perfect_Hennin)",
      "c4": "Spunge_(Starry_Eyes)",
      "c5": "Spunge_(Umbrella_Hat)",
      "c6": "Spunge_(Vampiric_Veneer)",
      "c7": "Spunge_(Wetsuit_Whimsy)"
    },
    "rare": {
      "c1": "Rare_Spunge_Halloween_2015"
    },
    "epic": {
      "c1": "Epic_Spunge_(O_Spungy_Tree)"
    }
  },
  {
    "name": "Spurrit",
    "normal": {
      "c1": "Spurrit_(Badge_of_Honor)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Spytrap",
    "normal": {
      "c1": "Spytrap_(Prismatica_Ball)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Stogg",
    "normal": {
      "c1": "Stogg_(Drop_the_Myc)",
      "c2": "Stogg_(Monkey_Business)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Stoowarb",
    "normal": {
      "c1": "Stoowarb_(Adorpheus)",
      "c2": "Stoowarb_(Nutcracker_Sweetie)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Strombonin",
    "normal": {
      "c1": "Strombonin_(Peppermint_Swirl)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "T Rox",
    "normal": {
      "c1": "T-Rox_(Chain_Reaction)",
      "c2": "T-Rox_(Cinderfella)",
      "c3": "T-Rox_(Construction,_a_Head)",
      "c4": "T-Rox_(Fossil_Faucet)",
      "c5": "T-Rox_(Gamma_Guise)",
      "c6": "T-Rox_(Gilded_Pauldrons)",
      "c7": "T-Rox_(Pi├▒ata_T-Rox)",
      "c8": "T-Rox_(Summer_Blockbuster)"
    },
    "rare": {},
    "epic": {
      "c1": "Epic_T-Rox_(Dino-morph)"
    }
  },
  {
    "name": "Tapricorn",
    "normal": {
      "c1": "Tapricorn_(Edge_of_the_Map)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Tawkerr",
    "normal": {
      "c1": "Tawkerr_(Detective_SherTawk)",
      "c2": "Tawkerr_(I_Want_My_Mummy)",
      "c3": "Tawkerr_(Stark_Raving)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Theremind",
    "normal": {
      "c1": "Theremind_(Believe_in_Magic)",
      "c2": "Theremind_(Rhymes_with_Orange_)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Thrumble",
    "normal": {
      "c1": "Thrumble_(If_Looks_Could_Kill)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Thumpies",
    "normal": {
      "c1": "Thumpies_(Aug-mandibles)",
      "c2": "Thumpies_(ChoMph_and_MoSH)",
      "c3": "Thumpies_(Crash_Test_Gear)",
      "c4": "Thumpies_(Fluffy_Snowballs)",
      "c5": "Thumpies_(FwoOT_and_BuTter)",
      "c6": "Thumpies_(KaL_and_Gooie)",
      "c7": "Thumpies_(Odd-ball_Flavor)",
      "c8": "Thumpies_(Take_Me_to_Thumpie_Town)",
      "c9": "Thumpies_(Thump_and_Chase)",
      "c10": "Thumpies_(sKetcHY_and_BeehAw)"
    },
    "rare": {
      "c1": "Rare_Thumpies_(FLipPy_and_TawooO)",
      "c2": "Rare_Thumpies_(Gahwg_and_Anyanka)",
      "c3": "Rare_Thumpies_(SkwEE_and_ChesH)",
      "c4": "Rare_Thumpies_Halloween_2015"
    },
    "epic": {
      "c1": "Epic_Thumpies_(BoOoo_and_YucKLeS)",
      "c2": "Epic_Thumpies_(MacE_and_KarrTooF)"
    }
  },
  {
    "name": "Ti",
    "normal": {
      "c1": "Ti_(Bouquet_Topper)",
      "c2": "Ti_(Festive_Tree_Topper)",
      "c3": "Ti_(Flora_Topper)",
      "c4": "Ti_(Treat_Bag_Topper)",
      "c5": "Ti_(Tulip_Topper)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Tiawa",
    "normal": {
      "c1": "Tiawa_(Flash_Prance)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Toe Jammer",
    "normal": {
      "c1": "Toe_Jammer_(Bow_Glamor)",
      "c2": "Toe_Jammer_(Flair_Supply)",
      "c3": "Toe_Jammer_(Floral_Fascinator)",
      "c4": "Toe_Jammer_(Folly_Roger)",
      "c5": "Toe_Jammer_(Frosty_the_Toe_Mon)",
      "c6": "Toe_Jammer_(Pad_Hair_Day)",
      "c7": "Toe_Jammer_(Slippery_when_Iced)",
      "c8": "Toe_Jammer_(Socks_of_Splendor)"
    },
    "rare": {
      "c1": "Rare_Toe_Jammer_(Bunny_Ears)"
    },
    "epic": {
      "c1": "Epic_Toe_Jammer_(Medusa_Doozy)"
    }
  },
  {
    "name": "TooToo",
    "normal": {
      "c1": "TooToo_(CMYK_Cutie)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Tring",
    "normal": {
      "c1": "Tring_(Harvest_Basket)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Tweedle",
    "normal": {
      "c1": "Tweedle_(All-Seeing_Belly)",
      "c2": "Tweedle_(Be_Like_the_Bluebird)",
      "c3": "Tweedle_(Club_Box_Necklace)",
      "c4": "Tweedle_(Growth_Spur-ts)",
      "c5": "Tweedle_(Party_Hardy_Hat)",
      "c6": "Tweedle_(Plaster_of_Power)",
      "c7": "Tweedle_(Rose-Colored_Glasses)",
      "c8": "Tweedle_(Tuxtweedo_Mask)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Uuduk",
    "normal": {
      "c1": "Uuduk_(Sugar_Skull)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Whaddle",
    "normal": {
      "c1": "Whaddle_(Great_Scaup!)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Whisp",
    "normal": {
      "c1": "Whisp_(Cute_Corsair)",
      "c2": "Whisp_(Familiar_Phase)",
      "c3": "Whisp_(Flaxen_Siren)",
      "c4": "Whisp_(Fractal_Crown)"
    },
    "rare": {
      "c1": "Rare_Whisp_Spooktacle_2018 (1)"
    },
    "epic": {}
  },
  {
    "name": "Wimmizies",
    "normal": {
      "c1": "Wimmzies_(The_Jig_is_Up)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Woolabee",
    "normal": {
      "c1": "Woolabee_(Cartographer_Cud)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Wubbox",
    "normal": {
      "c1": "Wubbox_(In_Da_Club)",
      "c2": "Wubbox (Boomerkrang)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Wynq",
    "normal": {
      "c1": "Wynq_(Loopy_Loupes)",
      "c2": "Wynq_(Ranch_Dressing)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "X rt",
    "normal": {
      "c1": "X'rt_(X'rt_Likes_Soup)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Xyster",
    "normal": {
      "c1": "Xyster_(Koi_With_Me)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Yawstrich",
    "normal": {
      "c1": "Yawstrich_(First_Date)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Yelmut",
    "normal": {
      "c1": "Yelmut_(Apt_Apriarist)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Yool",
    "normal": {
      "c1": "Yool_(Fir_Suit)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Yuggler",
    "normal": {
      "c1": "Yuggler_(Puzzle_Solver)"
    },
    "rare": {},
    "epic": {}
  },
  {
    "name": "Ziggurab",
    "normal": {
      "c1": "Ziggurab_(Heart_of_Gold)"
    },
    "rare": {},
    "epic": {}
  }
];

// Valid breeding combinations
let titleSkinCounter = 0;
let million = "m"; // Never Used, needs fixing. 

/**
  ulike: {
    0: "",
    1: "",
    2: "",
  },
  likes: {

  }
 */
const monsterInfo = {
  potbelly: {
    name: "Potbelly",
    image: "images/Monster_Avatars/Potbelly.png",
    diamonds: 0,
    coins: 250,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('potbelly'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Bloofi Tree"],
  },
  noggin: {
    name: "Noggin",
    image: "images/Monster_Avatars/Noggin.png",
    diamonds: 0,
    coins: 300,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('noggin'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ['Fire Bush']
  },
  toe_jammer: {
    name: "Toe Jammer",
    diamonds: 0,
    coins: 250,
    image: "images/Monster_Avatars/Toe Jammer.png",
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('toe_jammer'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ['Hollow Log']
  },
  mammott: {
    name: "Mammott",
    diamonds: 0,
    coins: 300,
    image: "images/Monster_Avatars/Mammott.png",
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('mammott'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ['Stritch Skin	']
  },
  tweedle: {
    name: "Tweedle",
    diamonds: 0,
    coins: 300,
    image: "images/Monster_Avatars/Tweedle.png",
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('tweedle'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ['Harpsitree']
  },
  kayna: {
    name: "Kayna",
    image: "images/Monster_Avatars/Kayna.png",
    diamonds: 0,
    relics: 30,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('kayna'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ['Floofy Nest', 'Woolabee']
  },
  fwog: {
    name: "Fwog",
    image: "images/Monster_Avatars/Fwog.png",
    diamonds: 30,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('fwog'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ['Spurrit Statue', 'PomPom']
  },
  shrubb: {
    name: "Shrubb",
    image: "images/Monster_Avatars/Shrubb.png",
    diamonds: 30,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('shrubb'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Shrubb"]
  },
  oaktopus: {
    name: "Oaktopus",
    image: "images/Monster_Avatars/Oaktopus.png",
    diamonds: 30,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('Oaktopus'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Clamble", "Spurrit Statue"]
  },
  furcorn: {
    name: "Furcorn",
    image: "images/Monster_Avatars/Furcorn.png",
    diamonds: 30,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch(''); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    silke: ["Smunkin Patch"]
  },
  drumpler: {
    name: "Drumpler",
    image: "images/Monster_Avatars/Drumpler.png",
    diamonds: 30,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('drumpler'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ['Smunkin Patch']
  },
  maw: {
    name: "Maw",
    image: "images/Monster_Avatars/Maw.png",
    diamonds: 30,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('maw'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Dragoon Statue"]
  },
  dandidoo: {
    name: "Dandidoo",
    image: "images/Monster_Avatars/Dandidoo.png",
    diamonds: 30,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('dandidoo'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Spurrit Statue"]
  },
  cybop: {
    name: "Cybop",
    diamonds: 30,
    coins: 0,
    image: "images/Monster_Avatars/Cybop.png",
    description: `<button id="monsterListButton" onClick="simulateMonsterSearch('cybop');">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Razzzli Tree"]
  },
  quibble: {
    name: "Quibble",
    image: "images/Monster_Avatars/Quibble.png",
    diamonds: 30,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('quibble'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Castanevine"]
  },
  pango: {
    name: "Pango",
    image: "images/Monster_Avatars/Pango.png",
    diamonds: 30,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('pango'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Babayag Tower"]
  },
  glowl: {
    name: "Glowl",
    image: "images/Monster_Avatars/Glowl.png",
    diamonds: 0,
    relics: 50,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('glowl'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Drummidary", "Tree Hut"]
  },
  flowah: {
    name: "Flowah",
    image: "images/Monster_Avatars/Flowah.png",
    diamonds: 0,
    relics: 50,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('flowah'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Bowhead", "Bottomless Pit"]
  },
  stogg: {
    name: "Stogg",
    image: "images/Monster_Avatars/Stogg.png",
    diamonds: 0,
    relics: 50,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('stogg'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Gnarls", "Eerie Remains"]
  },
  spunge: {
    name: "Spunge",
    image: "images/Monster_Avatars/Spunge.png",
    diamonds: 50,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('spunge'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Bloofi Tree"]
  },
  reedling: {
    name: "Reedling",
    image: "images/Monster_Avatars/Reedling.png",
    diamonds: 50,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('reedling'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Shrubb", "Squeed Statue"]
  },
  thumpies: {
    name: "Thumpies",
    image: "images/Monster_Avatars/Thumpies.png",
    diamonds: 50,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('thumpies'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Dragoon Statue"]
  },
  congle: {
    name: "Congle",
    image: "images/Monster_Avatars/Congle.png",
    diamonds: 50,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('congle'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Meldablend"]
  },
  pummel: {
    name: "Pummel",
    image: "images/Monster_Avatars/Pummel.png",
    diamonds: 50,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('pummel'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Maw", "Fuzzle Tree"]
  },
  clamble: {
    name: "Clamble",
    image: "images/Monster_Avatars/Clamble.png",
    diamonds: 50,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('clamble'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Barbloo Statue"]
  },
  bowgart: {
    name: "Bowgart",
    image: "images/Monster_Avatars/Bowgart.png",
    diamonds: 50,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('bowgart'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Eerie Remains"]
  },
  t_rox: {
    name: "T Rox",
    image: "images/Monster_Avatars/T-Rox.png",
    diamonds: 50,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('t_rox'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Dragoon Statue"]
  },
  scups: {
    name: "Scups",
    image: "images/Monster_Avatars/Scups.png",
    diamonds: 50,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('scups'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Dragon Tower"]
  },
  pompom: {
    name: "PomPom",
    image: "images/Monster_Avatars/PomPom.png",
    diamonds: 50,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('pompom'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Toob"]
  },
  barrb: {
    name: "Barrb",
    image: "images/Monster_Avatars/Barrb.png",
    diamonds: 0,
    relics: 100,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('id ('barrb')'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Gnarls", "Puffle Tree"]
  },
  floogull: {
    name: "Floogull",
    image: "images/Monster_Avatars/Floogull.png",
    diamonds: 0,
    relics: 100,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('id ('floogull')'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Incisaur", "Fossil-osaurus"]
  },
  repatillo: {
    name: "Repatillo",
    image: "images/Monster_Avatars/Repatillo.png",
    diamonds: 0,
    relics: 100,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('id ('repatillo')'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Tiawa", "Leafy Sea Dragon"]
  },
  entbrat: {
    name: "Entbrat",
    image: "images/Monster_Avatars/Entbrat.png",
    diamonds: 150,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('entbrat'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Babayag Tower"]
  },
  deedge: {
    name: "Deedge",
    image: "images/Monster_Avatars/Deedge.png",
    diamonds: 150,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('deedge'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Squeed Statue"]
  },
  riff: {
    name: "Riff",
    image: "images/Monster_Avatars/Riff.png",
    diamonds: 150,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('riff'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Crumpler Tree"]
  },
  shellbeat: {
    name: "Shellbeat",
    image: "images/Monster_Avatars/Shellbeat.png",
    diamonds: 150,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('shellbeat'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Dragon Tower"]
  },
  quarrister: {
    name: "Quarrister",
    image: "images/Monster_Avatars/Quarrister.png",
    diamonds: 150,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('quarrister'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Zuffle Tree"]
  },
  tring: {
    name: "Tring",
    image: "images/Monster_Avatars/Tring.png",
    diamonds: 0,
    relics: 200,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('id ('tring')'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Drummidary", "Flappy Flag"]
  },
  ghazt: {
    name: "Ghazt",
    image: "images/Monster_Avatars/Ghazt.png",
    diamonds: 1000,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('ghazt'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Crumpler Tree", "Flasque"]
  },
  grumpyre: {
    name: "Grumpyre",
    image: "images/Monster_Avatars/Grumpyre.png",
    diamonds: 1000,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('grumpyre'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Bass String Bridge"]
  },
  reebro: {
    name: "Reebro",
    image: "images/Monster_Avatars/Reebro.png",
    diamonds: 1000,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('reebro'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Fuzzle Tree", "Yooreek"]
  },
  jeeode: {
    name: "Jeeode",
    image: "images/Monster_Avatars/Jeeode.png",
    diamonds: 1000,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('jeeode'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Tub Fountain"]
  },
  humbug: {
    name: "Humbug",
    image: "images/Monster_Avatars/Humbug.png",
    diamonds: 1000,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('humbug'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Piney Tree"]
  },
  wubbox: {
    name: "Wubbox",
    image: "images/Monster_Avatars/Wubbox.png",
    diamonds: 0,
    coins: 1000,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('wubbox'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Tub Fountain"]
  },
  punkleton: {
    name: "Punkleton",
    image: "images/Monster_Avatars/Punkleton.png",
    diamonds: 225,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('punkleton'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Beeyoot Tree"]
  },
  yool: {
    name: "Yool",
    image: "images/Monster_Avatars/Yool.png",
    diamonds: 225,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('yool'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Piney Tree"]
  },
  schmoochle: {
    name: "Schmoochle",
    image: "images/Monster_Avatars/Schmoochle.png",
    diamonds: 225,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('schmoochle'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Yum Yum Tree"]
  },
  hoola: {
    name: "Hoola",
    image: "images/Monster_Avatars/Hoola.png",
    diamonds: 225,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('hoola'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Castanevine"]
  },
  blabbit: {
    name: "Blabbit",
    image: "images/Monster_Avatars/Blabbit.png",
    diamonds: 225,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('blabbit'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Floofy Nest"]
  },
  gobbleygourd: {
    name: "Gobbleygourd",
    image: "images/Monster_Avatars/Gobbleygourd.png",
    diamonds: 225,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('id ('gobbleygourd')'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Ambered Thing"]
  },
  g_joob: {
    name: "G joob",
    image: "images/Monster_Avatars/G_joob.png",
    diamonds: 225,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('g_joob'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Inverdigus Fern"]
  },
  strombonin: {
    name: "Strombonin",
    image: "images/Monster_Avatars/Strombonin.png",
    diamonds: 225,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('strombonin'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Cave Crystal Teleporter"]
  },
  yawstrich: {
    name: "Yawstrich",
    image: "images/Monster_Avatars/Yawstrich.png",
    diamonds: 225,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('yawstrich'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Jarhead"]
  },
  anglow: {
    name: "Anglow",
    image: "images/Monster_Avatars/Anglow.png",
    diamonds: 225,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('anglow'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Englobulated F.U.M."]
  },
  hyehehe: {
    name: "Hyehehe",
    image: "images/Monster_Avatars/Hyehehe.png",
    diamonds: 225,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('hyehehe'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Thumpies Totem"]
  },
  buzzinga: {
    name: "Buzzinga",
    image: "images/Monster_Avatars/Buzzinga.png",
    diamonds: 225,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('id ('buzzinga')'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Harmonorb Holder"]
  },
  tawkerr: {
    name: "Tawkerr",
    image: "images/Monster_Avatars/Tawkerr.png",
    diamonds: 0,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('tawkerr'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Leafy Sea Dragon"]
  },
  maggpi: {
    name: "Maggpi",
    image: "images/Monster_Avatars/Maggpi.png",
    diamonds: 0,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('maggpi'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Cozee Cabin"]
  },
  parlsona: {
    name: "Parlsona",
    image: "images/Monster_Avatars/Parlsona.png",
    diamonds: 0,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('parlsona'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Bass String Bridge"]
  },
  stoowarb: {
    name: "Stoowarb",
    image: "images/Monster_Avatars/Stoowarb.png",
    diamonds: 0,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('stoowarb'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Spurrit Statue"]
  },
  do: {
    name: "Do",
    image: "images/Monster_Avatars/Dipster - Do.png",
    diamonds: 0,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('do'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Leafy Sea Dragon"]
  },
  re: {
    name: "Re",
    image: "images/Monster_Avatars/Dipster - Re.png",
    diamonds: 0,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('re'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Cozze Cabin"]
  },
  mi: {
    name: "Mi",
    image: "images/Monster_Avatars/Dipster - Mi.png",
    diamonds: 0,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('mi'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Babayag Tower"]
  },
  fa: {
    name: "Fa",
    image: "images/Monster_Avatars/Dipster - Fa.png",
    diamonds: 0,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('fa'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Bass String Bridge"]
  },
  sol: {
    name: "Sol",
    image: "images/Monster_Avatars/Dipster - Sol.png",
    diamonds: 0,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('sol'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Razzli Tree"]
  },
  la: {
    name: "La",
    image: "images/Monster_Avatars/Dipster - La.png",
    diamonds: 0,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('la'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Directions to Nowhere"]
  },
  ti: {
    name: "Ti",
    image: "images/Monster_Avatars/Dipster - Ti.png",
    diamonds: 0,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('ti'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Trumplite"]
  },

  // Rare versions
  rare_potbelly: {
    name: "Rare Potbelly",
    diamonds: 75,
    coins: 0,
    image: "images/Monster_Avatars/Potbelly - Rare.png",
    description: `<button id="monsterListButton" onClick="simulateMonsterSearch('rare_potbelly');">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Tweedle", "Fluoress", "Theremind", "Furcorn"]
  },
  rare_noggin: {
    name: "Rare Noggin",
    diamonds: 75,
    coins: 0,
    image: "images/Monster_Avatars/Noggin - Rare.png",
    description: `<button id="monsterListButton" onClick="simulateMonsterSearch('rare_noggin');">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Mammott", "Toe Jammer", "Tweedle", "Floot Fly", "Clackula"]
  },
  rare_toe_jammer: {
    name: "Rare Toe Jammer",
    diamonds: 75,
    coins: 0,
    image: "images/Monster_Avatars/Toe Jammer - Rare.png",
    description: `<button id="monsterListButton" onClick="simulateMonsterSearch('rare_toe_jammer');">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Mammott", "Toe Jammer", "Theremind", "Clackula"]
  },
  rare_mammott: {
    name: "Rare Mammott",
    diamonds: 75,
    coins: 0,
    image: "images/Monster_Avatars/Mammott - Rare.png",
    description: `<button id="monsterListButton" onClick="simulateMonsterSearch('rare_mammott');">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Mammott", "Tweedle", "Fluoress", "Floot Fly", "Deedge"]
  },
  rare_tweedle: {
    name: "Rare Tweedle",
    diamonds: 75,
    coins: 0,
    image: "images/Monster_Avatars/Tweedle - Rare.png",
    description: `<button id="monsterListButton" onClick="simulateMonsterSearch('rare_tweedle');">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Mammott", "Toe Jammer", "Tweedle"]
  },
  rare_fwog: {
    name: "Rare Fwog",
    diamonds: 40,
    coins: 0,
    image: "images/Monster_Avatars/Fwog - Rare.png",
    description: `<button id="monsterListButton" onClick="simulateMonsterSearch('rare_fwog');">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Zuffle Tree"]
  },
  rare_furcorn: {
    name: "Rare Furcorn",
    diamonds: 40,
    coins: 0,
    image: "images/Monster_Avatars/Furcorn - Rare.png",
    description: `<button id="monsterListButton" onClick="simulateMonsterSearch('rare_furcorn');">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Yum Yum Tree"]
  },
  rare_cybop: {
    name: "Rare Cybop",
    diamonds: 40,
    coins: 0,
    image: "images/Monster_Avatars/Cybop - Rare.png",
    description: `<button id="monsterListButton" onClick="simulateMonsterSearch('rare_cybop');">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Flappy Flag"]
  },
  rare_drumpler: {
    name: "Rare Drumpler",
    image: "images/Monster_Avatars/Drumpler - Rare.png",
    diamonds: 40,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_drumpler'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Bloofi Tree"]
  },
  rare_maw: {
    name: "Rare Maw",
    diamonds: 40,
    coins: 0,
    image: "images/Monster_Avatars/Maw - Rare.png",
    description: `<button id="monsterListButton" onClick="simulateMonsterSearch('rare_maw');">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Guitree"]
  },
  rare_dandidoo: {
    name: "Rare Dandidoo",
    image: "images/Monster_Avatars/Dandidoo - Rare.png",
    diamonds: 40,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_dandidoo'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Piney Tree"]
  },
  rare_quibble: {
    name: "Rare Quibble",
    image: "images/Monster_Avatars/Quibble - Rare.png",
    diamonds: 40,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_quibble'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Bottomless Pit"]
  },
  rare_pango: {
    name: "Rare Pango",
    image: "images/Monster_Avatars/Pango - Rare.png",
    diamonds: 40,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_pango'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Saggle Tree"]
  },
  rare_oaktopus: {
    name: "Rare Oaktopus",
    image: "images/Monster_Avatars/Oaktopus - Rare.png",
    diamonds: 40,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_oaktopus'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Dragoon Statue"]
  },
  rare_shrubb: {
    name: "Rare Shurbb",
    image: "images/Monster_Avatars/Shrubb - Rare.png",
    diamonds: 40,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_shrubb'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Puffle Tree"]
  },
  rare_pummel: {
    name: "Rare Pummel",
    image: "images/Monster_Avatars/Pummel - Rare.png",
    diamonds: 65,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_pummel'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Barbloo Statue"]
  },
  rare_clamble: {
    name: "Rare Clamble",
    image: "images/Monster_Avatars/Clamble - Rare.png",
    diamonds: 65,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_clamble'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Piney Tree"]
  },
  rare_bowgart: {
    name: "Rare Bowgart",
    image: "images/Monster_Avatars/Bowgart - Rare.png",
    diamonds: 65,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_bowgart'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Squeed Statue"]
  },
  rare_spunge: {
    name: "Rare Spunge",
    image: "images/Monster_Avatars/Spunge - Rare.png",
    diamonds: 65,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_spunge'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Smunkin Patch"]
  },
  rare_reedling: {
    name: "Rare Reedling",
    image: "images/Monster_Avatars/Reedling - Rare.png",
    diamonds: 65,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_reedling'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Zuffle Tree"]
  },
  rare_scups: {
    name: "Rare Scups",
    image: "images/Monster_Avatars/Spunge - Rare.png",
    diamonds: 65,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_scups'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Tree Hut"]
  },
  rare_pompom: {
    name: "Rare PomPom",
    image: "images/Monster_Avatars/PomPom - Rare.png",
    diamonds: 65,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_pompom'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Guitree"]
  },
  rare_thumpies: {
    name: "Rare Thumpies",
    image: "images/Monster_Avatars/Thumpies - Rare.png",
    diamonds: 65,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_thumpies'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Bass String Bridge"]
  },
  rare_congle: {
    name: "Rare Congle",
    image: "images/Monster_Avatars/Congle - Rare.png",
    diamonds: 65,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_congle'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Pipes of Cicado"]
  },
  rare_t_rox: {
    name: "Rare T Rox",
    image: "images/Monster_Avatars/T-Rox - Rare.png",
    diamonds: 65,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_t_rox'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Yum Yum Tree"]
  },
  rare_entbrat: {
    name: "Rare Entbrat",
    image: "images/Monster_Avatars/Entbrat - Rare.png",
    diamonds: 200,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_entbrat'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Meldablend"]
  },
  rare_deedge: {
    name: "Rare Deedge",
    image: "images/Monster_Avatars/Deedge - Rare.png",
    diamonds: 200,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_deedge'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Stritch Skin"]
  },
  rare_riff: {
    name: "Rare Riff",
    image: "images/Monster_Avatars/Riff - Rare.png",
    diamonds: 200,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_riff'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Fuzzle Tree"]
  },
  rare_shellbeat: {
    name: "Rare Shellbeat",
    image: "images/Monster_Avatars/Shellbeat - Rare.png",
    diamonds: 200,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_shellbeat'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Crumpler Tree"]
  },
  rare_quarrister: {
    name: "Rare Quarrister",
    image: "images/Monster_Avatars/Quarrister - Rare.png",
    diamonds: 200,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_quarrister'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Tub Fountain"]
  },
  rare_ghazt: {
    name: "Rare Ghazt",
    image: "images/Monster_Avatars/Ghazt - Rare.png",
    diamonds: 1500,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_ghazt'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Razzli Tree"]
  },
  rare_grumpyre: {
    name: "Rare Grumpyre",
    image: "images/Monster_Avatars/Grumpyre - Rare.png",
    diamonds: 1500,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_grumpyre'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Harpsitree"]
  },
  rare_reebro: {
    name: "Rare Reebro",
    image: "images/Monster_Avatars/Reebro - Rare.png",
    diamonds: 1500,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_reebro'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Leafy Sea Dragon"]
  },
  rare_jeeode: {
    name: "Rare Jeeode",
    image: "images/Monster_Avatars/Jeeode - Rare.png",
    diamonds: 1500,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_jeeode'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Wild Bagpipe"]
  },
  rare_humbug: {
    name: "Rare Humbug",
    image: "images/Monster_Avatars/Humbug - Rare.png",
    diamonds: 1500,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_humbug'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Yum Yum Tree"]
  },
  rare_wubbox: {
    name: "Rare Wubbox",
    image: "images/Monster_Avatars/Wubbox - Rare.png",
    diamonds: 0,
    stars: 1,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_wubbox'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Boss Monument"]
  },

  rare_punkleton: {
    name: "Rare Punkleton",
    image: "images/Monster_Avatars/Punkleton - Rare.png",
    diamonds: 500,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_punkleton'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Reflecting Pool"]
  },
  rare_yool: {
    name: "Rare Yool",
    image: "images/Monster_Avatars/Yool - Rare.png",
    diamonds: 500,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_yool'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Tree Forte Tower"]
  },
  rare_schmoochle: {
    name: "Rare Schmoochle",
    image: "images/Monster_Avatars/Schmoochle - Rare.png",
    diamonds: 500,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_schmoochle'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Leafy Sea Dragon"]
  },
  rare_hoola: {
    name: "Rare Hoola",
    image: "images/Monster_Avatars/Hoola - Rare.png",
    diamonds: 500,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_hoola'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Leafy Sea Dragon"]
  },
  rare_blabbit: {
    name: "Rare Blabbit",
    image: "images/Monster_Avatars/Blabbit - Rare.png",
    diamonds: 500,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_blabbit'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Babayag Tower"]
  },
  rare_g_joob: {
    name: "Rare G joob",
    image: "images/Monster_Avatars/G_joob - Rare.png",
    diamonds: 500,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_g_joob'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Mountain Morsel"]
  },
  rare_strombonin: {
    name: "Rare Strombonin",
    image: "images/Monster_Avatars/Strombonin - Rare.png",
    diamonds: 500,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_strombonin'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Piney Tree"]
  },
  rare_yawstrich: {
    name: "Rare Yawstrich",
    image: "images/Monster_Avatars/Yawstrich - Rare.png",
    diamonds: 500,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_yawstrich'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Shrini"]
  },
  rare_anglow: {
    name: "Rare Anglow",
    image: "images/Monster_Avatars/Anglow - Rare.png",
    diamonds: 500,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_anglow'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Spatial Sapling"]
  },
  rare_hyehehe: {
    name: "Rare Hyehehe",
    image: "images/Monster_Avatars/Hyehehe - Rare.png",
    diamonds: 500,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_hyehehe'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Reflecting Pool"]
  },

  // Epic versions
  epic_potbelly: {
    name: "Epic Potbelly",
    diamonds: 250,
    coins: 0,
    image: "images/Monster_Avatars/Potbelly - Epic.png",
    description: `<button id="monsterListButton" onClick="simulateMonsterSearch('epic_potbelly');">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Castanevine"]
  },
  epic_noggin: {
    name: "Epic Noggin",
    diamonds: 250,
    coins: 0,
    image: "images/Monster_Avatars/Noggin - Epic.png",
    description: `<button id="monsterListButton" onClick="simulateMonsterSearch('epic_noggin');">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Innertuba"]
  },
  epic_toe_jammer: {
    name: "Epic Toe Jammer",
    diamonds: 250,
    coins: 0,
    image: "images/Monster_Avatars/Toe Jammer - Epic.png",
    description: `<button id="monsterListButton" onClick="simulateMonsterSearch('epic_toe_jammer');">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Sweetstreamz Tree"]
  },
  epic_mammott: {
    name: "Epic Mammott",
    diamonds: 250,
    coins: 0,
    image: "images/Monster_Avatars/Mammott - Epic.png",
    description: `<button id="monsterListButton" onClick="simulateMonsterSearch('epic_mammott');">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Star Rocks (Plant Island)"]
  },
  epic_tweedle: {
    name: "Epic Tweedle",
    diamonds: 250,
    coins: 0,
    image: "images/Monster_Avatars/Tweedle - Epic.png",
    description: `<button id="monsterListButton" onClick="simulateMonsterSearch('epic_tweedle');">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Ockulo Tree"]
  },
  epic_fwog: {
    name: "Epic Fwog",
    diamonds: 150,
    coins: 0,
    image: "images/Monster_Avatars/Fwog - Epic.png",
    description: `<button id="monsterListButton" onClick="simulateMonsterSearch('epic_fwog');">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Swurlee Tree"]
  },
  epic_furcorn: {
    name: "Epic Furcorn",
    diamonds: 150,
    coins: 0,
    image: "images/Monster_Avatars/Furcorn - Epic.png",
    description: `<button id="monsterListButton" onClick="simulateMonsterSearch('epic_furcorn');">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Freed Thing"]
  },
  epic_drumpler: {
    name: "Epic Drumpler",
    diamonds: 150,
    coins: 0,
    image: "images/Monster_Avatars/Drumpler - Epic.png",
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_drumpler'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    silke: ["Fossil-osaurus"]
  },
  epic_maw: {
    name: "Epic Maw",
    diamonds: 150,
    coins: 0,
    image: "images/Monster_Avatars/Maw - Epic.png",
    description: `<button id="monsterListButton" onClick="simulateMonsterSearch('epic_maw');">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["The Thunker"]
  },
  epic_cybop: {
    name: "Epic Cybop",
    diamonds: 150,
    coins: 0,
    image: "images/Monster_Avatars/Cybop - Epic.png",
    description: `<button id="monsterListButton" onClick="simulateMonsterSearch('epic_cybop');">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["The Thunker"]
  },
  epic_dandidoo: {
    name: "Epic Dandidoo",
    diamonds: 150,
    coins: 0,
    image: "images/Monster_Avatars/Dandidoo - Epic.png",
    description: `<button id="monsterListButton" onClick="simulateMonsterSearch('epic_dandidoo');">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Squeed Statue"]
  },
  epic_quibble: {
    name: "Epic Quibble",
    diamonds: 150,
    coins: 0,
    image: "images/Monster_Avatars/Quibble - Epic.png",
    description: `<button id="monsterListButton" onClick="simulateMonsterSearch('epic_quibble');">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Givutawai Tree"]
  },
  epic_pango: {
    name: "Epic Pango",
    diamonds: 150,
    coins: 0,
    image: "images/Monster_Avatars/Pango - Epic.png",
    description: `<button id="monsterListButton" onClick="simulateMonsterSearch('epic_pango');">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Swurlee Tree"]
  },
  epic_oaktopus: {
    name: "Epic Oaktopus",
    diamonds: 150,
    coins: 0,
    image: "images/Monster_Avatars/Oaktopus - Epic.png",
    description: `<button id="monsterListButton" onClick="simulateMonsterSearch('epic_oaktopus');">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Sweetstremz Tree"]
  },
  epic_shrubb: {
    name: "Epic Shrubb",
    diamonds: 150,
    coins: 0,
    image: "images/Monster_Avatars/Shrubb - Epic.png",
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_shrubb'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Bottomless Pit"]
  },
  epic_pummel: {
    name: "Epic Pummel",
    diamonds: 500,
    coins: 0,
    image: "images/Monster_Avatars/Pummel - Epic.png",
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_pummel'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Thumpies Totem, Too"]
  },
  epic_spunge: {
    name: "Epic Spunge",
    diamonds: 500,
    coins: 0,
    image: "images/Monster_Avatars/Spunge - Epic.png",
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_spunge'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Cold Globe"]
  },
  epic_reedling: {
    name: "Epic Reedling",
    diamonds: 500,
    coins: 0,
    image: "images/Monster_Avatars/Reedling - Epic.png",
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_reedling'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Spatial Sapling"]
  },
  epic_scups: {
    name: "Epic Scups",
    diamonds: 500,
    coins: 0,
    image: "images/Monster_Avatars/Scups - Epic.png",
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_scups'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Thumpies Totem, Too"]
  },
  epic_pompom: {
    name: "Epic PomPom",
    diamonds: 500,
    coins: 0,
    image: "images/Monster_Avatars/PomPom - Epic.png",
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_pompom'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Hammock"]
  },
  epic_thumpies: {
    name: "Epic Thumpies",
    diamonds: 500,
    coins: 0,
    image: "images/Monster_Avatars/Thumpies - Epic.png",
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_thumpies'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Fire Bush"]
  },
  epic_congle: {
    name: "Epic Congle",
    diamonds: 500,
    coins: 0,
    image: "images/Monster_Avatars/Congle - Epic.png",
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_congle'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Elmenco Strump"]
  },
  epic_clamble: {
    name: "Epic Clamble",
    diamonds: 500,
    coins: 0,
    image: "images/Monster_Avatars/Clamble - Epic.png",
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_clamble'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Cold Globe"]
  },
  epic_bowgart: {
    name: "Epic Bowgart",
    diamonds: 500,
    coins: 0,
    image: "images/Monster_Avatars/Bowgart - Epic.png",
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_bowgart'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Spatial Sapling"]
  },
  epic_t_rox: {
    name: "Epic T Rox",
    diamonds: 500,
    coins: 0,
    image: "images/Monster_Avatars/T-Rox - Epic.png",
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_t_rox'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Elmenco Stump"]
  },
  epic_entbrat: {
    name: "Epic Entbrat",
    diamonds: 750,
    coins: 0,
    image: "images/Monster_Avatars/Entbrat - Epic.png",
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_entbrat'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["The Thunker"]
  },
  epic_deedge: {
    name: "Epic Deedge",
    diamonds: 750,
    coins: 0,
    image: "images/Monster_Avatars/Deedge - Epic.png",
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_deedge'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Barbloo Statue"]
  },
  epic_riff: {
    name: "Epic Riff",
    diamonds: 750,
    coins: 0,
    image: "images/Monster_Avatars/Riff - Epic.png",
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_riff'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Hammock"]
  },
  epic_shellbeat: {
    name: "Epic Shellbeat",
    diamonds: 750,
    coins: 0,
    image: "images/Monster_Avatars/Shellbeat - Epic.png",
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_shellbeat'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Star Rocks (Water Island)"]
  },
  epic_quarrister: {
    name: "Epic Quarrister",
    diamonds: 750,
    coins: 0,
    image: "images/Monster_Avatars/Quarrister - Epic.png",
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_quarrister'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Mount Knottshurr"]
  },
  epic_ghazt: {
    name: "Epic Ghazt",
    diamonds: 2250,
    coins: 0,
    image: "images/Monster_Avatars/Ghazt - Epic.png",
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_ghazt'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Thumpies Totem, Too"]
  },
  epic_grumpyre: {
    name: "Epic Grumpyre",
    diamonds: 2250,
    coins: 0,
    image: "images/Monster_Avatars/Grumpyre - Epic.png",
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_grumpyre'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Smunkit"]
  },
  epic_reebro: {
    name: "Epic Reebro",
    diamonds: 2250,
    coins: 0,
    image: "images/Monster_Avatars/Reebro - Epic.png",
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_reebro'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Cold Globe"]
  },
  epic_humbug: {
    name: "Epic Humbug",
    diamonds: 2250,
    coins: 0,
    image: "images/Monster_Avatars/Humbug - Epic.png",
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_humbug'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Bloofi Tree"]
  },
  epic_plant_wubbox: { // HERES HOW THIS WORKS!! the id epic_plant_wubbox in this case, is the same one in the simulateMonsterSearch function (desc line), which then it says Okay, epic_plant_wubbox.name is what? And then searches it inside of all Normal, Rare, Epic list of monsters above to find search result. 
    name: "Epic PWubbox",
    image: "images/Monster_Avatars/Wubbox - Epic (Plant).png",
    diamonds: 1,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_plant_wubbox'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Ockulo Tree"]
  },
  epic_cold_wubbox: {
    name: "Epic CWubbox",
    image: "images/Monster_Avatars/Wubbox - Epic (Cold).png",
    diamonds: 1,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_cold_wubbox'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Cold Globe"]
  },
  epic_air_wubbox: {
    name: "Epic AWubbox ",
    image: "images/Monster_Avatars/Wubbox - Epic (Air).png",
    diamonds: 1,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_air_wubbox'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Innertuba"]
  },
  epic_water_wubbox: {
    name: "Epic WWubbox",
    image: "images/Monster_Avatars/Wubbox - Epic (Water).png",
    diamonds: 1,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_water_wubbox'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Swurlee Tree"]
  },
  epic_earth_wubbox: {
    name: "Epic EWubbox",
    image: "images/Monster_Avatars/Wubbox - Epic (Earth).png",
    diamonds: 1,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_earth_wubbox'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Ockulo Tree"]
  },
  epic_haven_wubbox: {
    name: "Epic Wubbox (Haven)",
    image: "images/Monster_Avatars/Wubbox - Epic (Haven).png",
    diamonds: 1,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_wubbox (Haven)'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Givutawai Tree"]
  },
  epic_fire_oasis_wubbox: {
    name: "Epic Wubbox (Oasis)",
    image: "images/Monster_Avatars/Wubbox - Epic (Oasis).png",
    diamonds: 1,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_wubbox'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Fire Bush"]
  },
  epic_punkleton: {
    name: "Epic Punkleton",
    image: "images/Monster_Avatars/Punkleton - Epic.png",
    diamonds: 1000,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_punkleton'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Frightful Fripperies"]
  },
  epic_yool: {
    name: "Epic Yool",
    image: "images/Monster_Avatars/Yool - Epic.png",
    diamonds: 1000,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_yool'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Yaytide Trimmings"]
  },
  epic_schmoochle: {
    name: "Epic Schmoochle",
    image: "images/Monster_Avatars/Schmoochle - Epic.png",
    diamonds: 1000,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_schmoochle'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Curious Cultivar"]
  },
  epic_hoola: {
    name: "Epic Hoola",
    image: "images/Monster_Avatars/Hoola - Epic.png",
    diamonds: 1000,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_hoola'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Hot Tub"]
  },
  epic_blabbit: {
    name: "Epic Blabbit",
    image: "images/Monster_Avatars/Blabbit - Epic.png",
    diamonds: 1000,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_blabbit'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Multiversal Phabberjay"]
  },
  epic_g_joob: {
    name: "Epic G joob",
    image: "images/Monster_Avatars/G_joob - Epic.png",
    diamonds: 500,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_g_joob'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Trumplite"]
  },
  epic_strombonin: {
    name: "Epic Strombonin",
    image: "images/Monster_Avatars/Strombonin - Epic.png",
    diamonds: 500,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_strombonin'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["PU System"]
  },
  epic_yawstrich: {
    name: "Epic Yawstrich",
    image: "images/Monster_Avatars/Yawstrich - Epic.png",
    diamonds: 500,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_yawstrich'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Bass String Bridge"]
  },
  epic_anglow: {
    name: "Epic Anglow",
    image: "images/Monster_Avatars/Anglow - Epic.png",
    diamonds: 500,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_anglow'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Shrini"]
  },
  epic_hyehehe: {
    name: "Epic Hyehehe",
    image: "images/Monster_Avatars/Hyehehe - Epic.png",
    diamonds: 500,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_hyehehe'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Odd-o-Mobile"]
  },

  // Now Onto all the rest of the islands after the core 5 ones. 
  candelavra: {
    name: "Candelavra",
    image: "images/Monster_Avatars/Candelavra.png",
    diamonds: 0,
    relics: 500,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('id ('candelavra ')'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Bowhead", "The Thunker"]
  },
  rare_kayna: {
    name: "Rare Kayna",
    image: "images/Monster_Avatars/Kayna - Rare.png",
    diamonds: 150,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_kayna'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Tweedle", "Mammott", "Fluoress", "Theremind", "Floot Fly", "Clackula", "Candelavra"]
  },
  rare_glowl: {
    name: "Rare Glowl",
    image: "images/Monster_Avatars/Glowl - Rare.png",
    diamonds: 250,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_glowl'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Bowhead", "Barbloo Statue"]
  },
  rare_flowah: {
    name: "Rare Flowah",
    image: "images/Monster_Avatars/Flowah - Rare.png",
    diamonds: 250,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_flowah'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Tuskski", "Squeed Statue"]
  },
  rare_stogg: {
    name: "Rare Stogg",
    image: "images/Monster_Avatars/Stogg - Rare.png",
    diamonds: 250,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_stogg'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Bisonorus", "Travelers' Sign"]
  },
  rare_barrb: {
    name: "Rare Barrb",
    image: "images/Monster_Avatars/Barrb - Rare.png",
    diamonds: 500,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_barrb'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Drummidary", "Smunkin Patch"]
  },
  rare_floogull: {
    name: "Rare Floogull",
    image: "images/Monster_Avatars/Floogull - Rare.png",
    diamonds: 500,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_floogull'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Rootitoot", "Pipes of Cicado"]
  },
  rare_repatillo: {
    name: "Rare Repatillo",
    image: "images/Monster_Avatars/Repatillo - Rare.png",
    diamonds: 500,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_repatillo'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Incisaur", "Wild Bagpipe"]
  },
  rare_tring: {
    name: "Rare Tring",
    image: "images/Monster_Avatars/Tring - Rare.png",
    diamonds: 750,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_tring'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Tiawa", "Cozze Cabin"]
  },
  rare_candelavra: {
    name: "Rare Candelavra",
    image: "images/Monster_Avatars/Candelavra - Rare.png",
    diamonds: 0,
    stars: 15000,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_candelavra'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Tuskski", "Ockulo Tree"]
  },
  rare_gobbleygourd: {
    name: "Rare Gobbleygourd",
    image: "images/Monster_Avatars/Gobbleygourd - Rare.png",
    diamonds: 500,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_gobbleygourd'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Tub Fountain"]
  },
  rare_buzzinga: {
    name: "Rare Buzzinga",
    image: "images/Monster_Avatars/Buzzinga - Rare.png",
    diamonds: 500,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_buzzinga'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Cold Globe"]
  },
  epic_kayna: {
    name: "Epic Kayna",
    image: "images/Monster_Avatars/Kayna - Epic.png",
    diamonds: 300,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_kayna'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Wynq", "Thumpies Totem, Too"]
  },
  epic_glowl: {
    name: "Epic Glowl",
    image: "images/Monster_Avatars/Glowl - Epic.png",
    diamonds: 500,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_glowl'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Tuskski", "Monster Scareglowls"]
  },
  epic_flowah: {
    name: "Epic Flowah",
    image: "images/Monster_Avatars/Flowah - Epic.png",
    diamonds: 500,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_flowah'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Gnarls", "PU System"]
  },
  epic_stogg: {
    name: "Epic Stogg",
    image: "images/Monster_Avatars/Stogg - Epic.png",
    diamonds: 500,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_stogg'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Drummidary", "Mount Knottshurr"]
  },
  epic_barrb: {
    name: "Epic Barrb",
    image: "images/Monster_Avatars/Barrb - Epic.png",
    diamonds: 750,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_barrb'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Whaddle", "Striking Bulbs"]
  },
  epic_floogull: {
    name: "Epic Floogull",
    image: "images/Monster_Avatars/Floogull - Epic.png",
    diamonds: 750,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_floogull'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Sooza", "Swurlee Tree"]
  },
  epic_repatillo: {
    name: "Epic Repatillo",
    image: "images/Monster_Avatars/Repatillo - Epic.png",
    diamonds: 750,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('id ('epic_repatillo')'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Gnarls", "Optiglowbe"]
  },
  epic_tring: {
    name: "Epic Tring",
    image: "images/Monster_Avatars/Tring - Epic.png",
    diamonds: 1000,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_tring'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Bowhead", "Cold Globe"]
  },
  epic_gobbleygourd: {
    name: "Epic Gobbleygourd",
    image: "images/Monster_Avatars/Gobbleygourd - Epic.png",
    diamonds: 1000,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_gobbleygourd'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Oversized Pies"]
  },
  epic_buzzinga: {
    name: "Epic Buzzinga",
    image: "images/Monster_Avatars/Buzzinga - Epic.png",
    diamonds: 1000,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_buzzinga') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Cave Crystal Teleporter"]
  },
  epic_candelavra: {
    name: "Epic Candelavra",
    image: "images/Monster_Avatars/Candelavra - Epic.png",
    diamonds: 1750,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_candelavra'); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Jarhead"]
  },
  phangler: {
    name: "Phangler",
    image: "images/Monster_Avatars/Phangler.png",
    diamonds: 0,
    relics: 50,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('phangler') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Candelavra", "Bass String Bridge"]
  },
  boskus: {
    name: "Boskus",
    image: "images/Monster_Avatars/Boskus.png",
    diamonds: 0,
    relics: 50,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('boskus') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Drummidary", "Digger"]
  },
  whaddle: {
    name: "Whaddle",
    image: "images/Monster_Avatars/Whaddle.png",
    diamonds: 0,
    relics: 100,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('whaddle') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Bowhead", "Cozze Cabin"]
  },
  woolabee: {
    name: "Woolabee",
    image: "images/Monster_Avatars/Woolabee.png",
    diamonds: 0,
    relics: 100,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('woolabee') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    silke: ["Gnarls", "Fuzzle Tree"]
  },
  wynq: {
    name: "Wynq",
    image: "images/Monster_Avatars/Wynq.png",
    diamonds: 0,
    relics: 100,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('wynq') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Rootitoot", "Bloofi Tree"]
  },
  sneyser: {
    name: "Sneyser",
    image: "images/Monster_Avatars/Sneyser.png",
    diamonds: 0,
    relics: 200,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('sneyser') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Tuskski", "Toob"]
  },
  mimic: {
    name: "Mimic",
    image: "images/Monster_Avatars/Mimic.png",
    diamonds: 0,
    relics: 500,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('mimic') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Mountain Morsel"]
  },
  spurrit: {
    name: "Spurrit",
    image: "images/Monster_Avatars/Spurrit.png",
    diamonds: 225,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('spurrit') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Zuffle Tree"]
  },
  cherubble: {
    name: "Cherubble",
    image: "images/Monster_Avatars/Cherubble.png",
    diamonds: 225,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('cherubble') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Macho Monument"]
  },
  rare_phangler: {
    name: "Rare Phangler",
    image: "images/Monster_Avatars/Phangler - Rare.png",
    diamonds: 250,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_phangler') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Drummidary", "Smunkin Patch"]
  },
  rare_boskus: {
    name: "Rare Boskus",
    image: "images/Monster_Avatars/Boskus - Rare.png",
    diamonds: 250,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_boskus') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Bowhead", "Trumplite"]
  },
  rare_whaddle: {
    name: "Rare Whaddle",
    image: "images/Monster_Avatars/Whaddle - Rare.png",
    diamonds: 500,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_whaddle') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Tuskski", "Bloofi Tree"]
  },
  rare_woolabee: {
    name: "Rare Woolabee",
    image: "images/Monster_Avatars/Woolabee - Rare.png",
    diamonds: 500,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_woolabee') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Candelavra", "Leafy Sea Dragon"]
  },
  rare_wynq: {
    name: "Rare Wynq",
    image: "images/Monster_Avatars/Wynq - Rare.png",
    diamonds: 500,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_wynq') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Drummidary", "Yum Yum Tree"]
  },
  rare_sneyser: {
    name: "Rare Sneyser",
    image: "images/Monster_Avatars/Sneyser - Rare.png",
    diamonds: 750,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_sneyser') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Tring", "Tree Hut"]
  },
  rare_mimic: {
    name: "Rare Mimic",
    image: "images/Monster_Avatars/Mimic - Rare.png",
    diamonds: 0,
    stars: 15000,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_mimic') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Shrini"]
  },
  rare_spurrit: {
    name: "Rare Spurrit",
    image: "images/Monster_Avatars/Spurrit - Rare.png",
    diamonds: 500,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_spurrit') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Flappy Flag"]
  },
  rare_cherubble: {
    name: "Rarer Cherubble",
    image: "images/Monster_Avatars/Cherubble - Rare.png",
    diamonds: 500,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_cherubble') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Hammock"]
  },
  epic_phangler: {
    name: "Epic Phangler",
    image: "images/Monster_Avatars/Phangler - Epic.png",
    diamonds: 500,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_phangler') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Bowhead", "Givutawai Tree"]
  },
  epic_boskus: {
    name: "Epic Boskus",
    image: "images/Monster_Avatars/Boskus - Epic.png",
    diamonds: 500,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_boskus') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["PongPing", "Innertuba"]
  },
  epic_whaddle: {
    name: "Epic Whaddle",
    image: "images/Monster_Avatars/Whaddle - Epic.png",
    diamonds: 750,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_whaddle') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Incisaur", "Sweetstreamz Tree"]
  },
  epic_woolabee: {
    name: "Epic Woolabee",
    image: "images/Monster_Avatars/Woolabee - Epic.png",
    diamonds: 750,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_woolabee') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Drummidary", "Swurlee Tree"]
  },
  epic_wynq: {
    name: "Epic Wynq",
    image: "images/Monster_Avatars/Wynq - Epic.png",
    diamonds: 750,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_wynq') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Tuskski", "Squeed Statue"]
  },
  epic_sneyser: {
    name: "Epic Sneyser",
    image: "images/Monster_Avatars/Sneyser - Epic.png",
    diamonds: 1000,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_sneyser') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Drummidary", "Mount Knottshurr"]
  },
  // epic_mimic: {
  //   name: "Epic Mimic",
  //   image: "images/Monster_Avatars/Mimic - Epic.png",
  //   diamonds: 0,
  //   stars: 15000,
  //   description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_mimic') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  // },
  epic_spurrit: {
    name: "Epic Spurrit",
    image: "images/Monster_Avatars/Spurrit - Epic.png",
    diamonds: 1000,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_spurrit') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Expedition Tent"]
  },
  epic_cherubble: {
    name: "Epic Cherubble",
    image: "images/Monster_Avatars/Cherubble - Epic.png",
    diamonds: 1000,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_cherubble') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Mount Knottshurr"]
  },
  fluoress: {
    name: "Fluoress",
    image: "images/Monster_Avatars/Fluoress.png",
    diamonds: 0,
    coins: 30000,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('fluoress') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Fuzzle Tree"]
  },
  gob: {
    name: "Gob",
    image: "images/Monster_Avatars/Gob.png",
    diamonds: 150,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('gob') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Mountian Morsel"]
  },
  bulbo: {
    name: "Bulbo",
    image: "images/Monster_Avatars/Bulbo.png",
    diamonds: 150,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('bulbo') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Crumpler Tree"]
  },
  pluckbill: {
    name: "Pluckbill",
    image: "images/Monster_Avatars/Pluckbill.png",
    diamonds: 150,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('pluckbill') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Saggle Tree"]
  },
  sooza: {
    name: "Sooza",
    image: "images/Monster_Avatars/Sooza.png",
    diamonds: 0,
    relics: 100,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('sooza') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Tuskski", "Reflecting Pool"]
  },
  spytrap: {
    name: "Spytrap",
    image: "images/Monster_Avatars/Spytrap.png",
    diamonds: 300,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('spytrap') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Castanevine"]
  },
  tooToo: {
    name: "TooToo",
    image: "images/Monster_Avatars/TooToo.png",
    diamonds: 300,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('tooToo') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Fire Bush"]
  },
  fiddlement: {
    name: "Fiddlement",
    image: "images/Monster_Avatars/Fiddlement.png",
    diamonds: 300,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('fiddlement') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Piney Tree"]
  },
  blow_t: {
    name: "Blow t",
    image: "images/Monster_Avatars/Blow_t.png",
    diamonds: 600,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('blow_t') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Wubbox Stockpile"]
  },
  yelmut: {
    name: "Yelmut",
    image: "images/Monster_Avatars/Yelmut.png",
    diamonds: 0,
    relics: 300,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('yelmut') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Tring", "The Thunker"]
  },
  tiawa: {
    name: "Tiawa",
    image: "images/Monster_Avatars/Tiawa.png",
    diamonds: 0,
    relics: 300,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('tiawa') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Gnarls", "Spatial Sapling"]
  },
  drummidary: {
    name: "Drummidary",
    image: "images/Monster_Avatars/Drummidary.png",
    diamonds: 0,
    relics: 500,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('drummidary') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Tuskski", "Sweetstreamz Tree"]
  },
  phosphoran_phlox: {
    name: "Phosphoran Phlox",
    image: "images/Monster_Avatars/Phosphoran Phlox.png",
    diamonds: 0,
    coins: '10M',
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('phosphoran_phlox') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    // There is no likes for these monsters currently (At least I could not find any on the wiki)
  },
  whiz_bang: {
    name: "Whiz bang",
    image: "images/Monster_Avatars/Whiz-bang.png",
    diamonds: 225,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('whiz_bang') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Wild Bagpipe"]
  },
  rare_fluoress: {
    name: "Rare Fluoress",
    image: "images/Monster_Avatars/Fluoress - Rare.png",
    diamonds: 150,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_fluoress') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["PU System"]
  },
  rare_gob: {
    name: "Rare Gob",
    image: "images/Monster_Avatars/Gob - Rare.png",
    diamonds: 250,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_gob') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["The Thunker"]
  },
  rare_bulbo: {
    name: "Rare Bulbo",
    image: "images/Monster_Avatars/Bulbo - Rare.png",
    diamonds: 250,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_bulbo') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Babayag Tower"]
  },
  rare_pluckbill: {
    name: "Rare Pluckbill",
    image: "images/Monster_Avatars/Pluckbill - Rare.png",
    diamonds: 250,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_pluckbill') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Orb of Aklino"]
  },
  rare_sooza: {
    name: "Rare Sooza",
    image: "images/Monster_Avatars/Sooza - Rare.png",
    diamonds: 500,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_sooza') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Sneyser", "Tree Hut"]
  },
  rare_spytrap: {
    name: "Rare Spytrap",
    image: "images/Monster_Avatars/Spytrap - Rare.png",
    diamonds: 500,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_spytrap') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Englobulated F.U.M."]
  },
  rare_tooToo: {
    name: "TooToo",
    image: "images/Monster_Avatars/TooToo.png",
    diamonds: 300,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_tooToo') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Spatial Sapling"]
  },
  rare_fiddlement: {
    name: "Rare Fiddlement",
    image: "images/Monster_Avatars/Fiddlement - Rare.png",
    diamonds: 500,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_fiddlement') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Fossil-osaurus"]
  },
  rare_blow_t: {
    name: "Rare Blow t",
    image: "images/Monster_Avatars/Blow_t - Rare.png",
    diamonds: 750,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_blow_t') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Odd-o-Mobile"]
  },
  rare_yelmut: {
    name: "Rare Yelmut",
    image: "images/Monster_Avatars/Yelmut - Rare.png",
    diamonds: 0,
    relics: 300,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_yelmut') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Bisonorus", "Thumpies Totem, Too"]
  },
  rare_tiawa: {
    name: "Tiawa",
    image: "images/Monster_Avatars/Tiawa - Rare.png",
    diamonds: 0,
    stars: 10000,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_tiawa') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Candelavra", "Boss Monument"]
  },
  rare_drummidary: {
    name: "Rare Drummidary",
    image: "images/Monster_Avatars/Drummidary - Rare.png",
    diamonds: 0,
    stars: 1500,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_drummidary') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Incisaur", "Miniature Island Complex"]
  },
  rare_whiz_bang: {
    name: "Rare Whiz bang",
    image: "images/Monster_Avatars/Whiz-bang - Rare.png",
    diamonds: 500,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_whiz_bang') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Toob"]
  },

  // rare_fluoress: {
  //   name: "Rare Fluoress",
  //   image: "images/Monster_Avatars/Fluoress - Rare.png",
  //   diamonds: 150,
  //   coins: 0,
  //   description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_fluoress') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  // },
  // rare_gob: {
  //   name: "Rare Gob",
  //   image: "images/Monster_Avatars/Gob - Rare.png",
  //   diamonds: 250,
  //   coins: 0,
  //   description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_gob') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  // },
  // rare_bulbo: {
  //   name: "Rare Bulbo",
  //   image: "images/Monster_Avatars/Bulbo - Rare.png",
  //   diamonds: 250,
  //   coins: 0,
  //   description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_bulbo') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  // },
  // rare_pluckbill: {
  //   name: "Rare Pluckbill",
  //   image: "images/Monster_Avatars/Pluckbill - Rare.png",
  //   diamonds: 250,
  //   coins: 0,
  //   description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_bulbo') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  // },
  epic_sooza: {
    name: "Epic Sooza",
    image: "images/Monster_Avatars/Sooza - Epic.png",
    diamonds: 750,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_sooza') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Tuskski", "Givutawai Tree"]
  },
  // rare_spytrap: {
  //   name: "Rare Spytrap",
  //   image: "images/Monster_Avatars/Spytrap - Rare.png",
  //   diamonds: 500,
  //   coins: 0,
  //   description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_spytrap') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  // },
  // rare_tooToo: {
  //   name: "TooToo",
  //   image: "images/Monster_Avatars/TooToo.png",
  //   diamonds: 300,
  //   coins: 0,
  //   description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_tooToo') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  // },
  // rare_fiddlement: {
  //   name: "Rare Fiddlement",
  //   image: "images/Monster_Avatars/Fiddlement - Rare.png",
  //   diamonds: 500,
  //   coins: 0,
  //   description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_fiddlement') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  // },
  // rare_blow_t: {
  //   name: "Rare Blow t",
  //   image: "images/Monster_Avatars/Blow t - Rare.png",
  //   diamonds: 750,
  //   coins: 0,
  //   description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_blow_t') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  // },
  epic_yelmut: {
    name: "Epic Yelmut",
    image: "images/Monster_Avatars/Yelmut - Epic.png",
    diamonds: 1250,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_yelmut') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Ziggurab", "Sweetstreamz Tree"]
  },
  epic_tiawa: {
    name: "Epic Tiawa",
    image: "images/Monster_Avatars/Tiawa - Epic.png",
    diamonds: 1250,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_tiawa') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Incisaur", "Optiglowbe"]
  },
  // rare_drummidary: {
  //   name: "Rare Drummidary",
  //   image: "images/Monster_Avatars/Drummidary - Rare.png",
  //   diamonds: 0,
  //   stars: 1500,
  //   description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_drummidary') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  // },
  epic_whiz_bang: {
    name: "Epic Whiz bang",
    image: "images/Monster_Avatars/Whiz-bang - Epic.png",
    diamonds: 1000,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_whiz_bang') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Kaleidoscope"]
  },


  theremind: {
    name: "Theremind",
    image: "images/Monster_Avatars/Theremind.png",
    diamonds: 0,
    coins: 25000,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('theremind') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Fossil-osaurus"]
  },
  bonkers: {
    name: "Bonkers",
    image: "images/Monster_Avatars/Bonkers.png",
    diamonds: 150,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('bonkers') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Ambered Thing"]
  },
  poppette: {
    name: "Poppette",
    image: "images/Monster_Avatars/Poppette.png",
    diamonds: 150,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('poppette') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Barbloo Statue"]
  },
  yuggler: {
    name: "Yuggler",
    image: "images/Monster_Avatars/Yuggler.png",
    diamonds: 150,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('yuggler') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Digger"]
  },
  rootitoot: {
    name: "Rootitoot",
    image: "images/Monster_Avatars/Rootitoot.png",
    diamonds: 0,
    relics: 100,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rootitoot') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Krillby", "Piney Tree"]
  },
  tapricorn: {
    name: "Tapricorn",
    image: "images/Monster_Avatars/Tapricorn.png",
    diamonds: 300,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('tapricorn') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Guitree"]
  },
  rooba: {
    name: "Rooba",
    image: "images/Monster_Avatars/Rooba.png",
    diamonds: 300,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rooba') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Crumpler Tree"]
  },
  periscorp: {
    name: "Periscorp",
    image: "images/Monster_Avatars/Periscorp.png",
    diamonds: 300,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('periscorp') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Pipes of Cicado	"]
  },
  gloptic: {
    name: "Gloptic",
    image: "images/Monster_Avatars/Gloptic.png",
    diamonds: 600,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('gloptic') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Travelers' Sign"]
  },
  edamimi: {
    name: "Edamimi",
    image: "images/Monster_Avatars/Edamimi.png",
    diamonds: 0,
    relics: 300,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('edamimi') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Tuskski", "Swurlee Tree"]
  },
  bisonorus: {
    name: "Bisonorus",
    image: "images/Monster_Avatars/Bisonorus.png",
    diamonds: 0,
    relics: 300,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('bisonorus') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Gnarls", "Innertuba"]
  },
  bowhead: {
    name: "Bowhead",
    image: "images/Monster_Avatars/Bowhead.png",
    diamonds: 0,
    relics: 500,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('bowhead') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Drummidary", "Cold Globe"]
  },
  hairionette: {
    name: "Hairionette",
    image: "images/Monster_Avatars/Hairionette (Major).png",
    diamonds: 700,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('hairionette') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Star Rocks (Psychic Island)"]
  },
  clc: {
    name: "Cruv Laaphtian Crocus",
    image: "images/Monster_Avatars/Cruv'laaphtian Crocus.png",
    diamonds: 0,
    coins: 10000000,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('clc') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  boo_qwurm: {
    name: "Boo_qwurm",
    image: "images/Monster_Avatars/Boo_qwurm.png",
    diamonds: 225,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('boo_qwurm') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Toob"]
  },
  rare_theremind: {
    name: "Rare Theremind",
    image: "images/Monster_Avatars/Theremind - Rare.png",
    diamonds: 150,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_theremind') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["The Thunker"]
  },
  rare_bonkers: {
    name: "Rare Bonkers",
    image: "images/Monster_Avatars/Bonkers - Rare.png",
    diamonds: 250,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_bonkers') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Cave Crystal Teleporter"]
  },
  rare_poppette: {
    name: "Rare Poppette",
    image: "images/Monster_Avatars/Poppette - Rare.png",
    diamonds: 250,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_poppette') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Optiglowbe"]
  },
  rare_yuggler: {
    name: "Rare Yuggler",
    image: "images/Monster_Avatars/Yuggler - Rare.png",
    diamonds: 250,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_yuggler') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["PU System"]
  },
  rare_rootitoot: {
    name: "Rare Rootitoot",
    image: "images/Monster_Avatars/Rootitoot - Rare.png",
    diamonds: 500,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_rootitoot') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Sneyser", "Pipes of Cicado"]
  },
  rare_tapricorn: {
    name: "Rare Tapricorn",
    image: "images/Monster_Avatars/Tapricorn - Rare.png",
    diamonds: 500,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_tapricorn') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Harmonorb Holder"]
  },
  rare_rooba: {
    name: "Rare Rooba",
    image: "images/Monster_Avatars/Rooba - Rare.png",
    diamonds: 500,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_rooba') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Elmenco Stump"]
  },
  rare_periscorp: {
    name: "Rare Periscorp",
    image: "images/Monster_Avatars/Periscorp - Rare.png",
    diamonds: 500,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_periscorp') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Shrini"]
  },
  rare_gloptic: {
    name: "Rare Gloptic",
    image: "images/Monster_Avatars/Gloptic - Rare.png",
    diamonds: 750,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_gloptic') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Englobulated F.U.M."]
  },
  rare_edamimi: {
    name: "Rare Edamimi",
    image: "images/Monster_Avatars/Edamimi - Rare.png",
    diamonds: 0,
    stars: 10000,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_edamimi') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Tiawa", "Fire Bush"]
  },
  rare_bisonorus: {
    name: "Rare Bisonorus",
    image: "images/Monster_Avatars/Bisonorus - Rare.png",
    diamonds: 0,
    stars: 10000,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_bisonorus') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Woolabee", "Mountain Morsel"]
  },
  rare_bowhead: {
    name: "Rare Bowhead",
    image: "images/Monster_Avatars/Bowhead - Rare.png",
    diamonds: 0,
    stars: 15000,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_bowhead') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Gnarls", "Macho Monument"]
  },
  rare_boo_qwurm: {
    name: "Rare Boo_qwurm",
    image: "images/Monster_Avatars/Boo_qwurm - Rare.png",
    diamonds: 500,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_boo_qwurm') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Eerie Remains"]
  },
  epic_rootitoot: {
    name: "Epic Rootitoot",
    image: "images/Monster_Avatars/Rootitoot - Epic.png",
    diamonds: 750,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_rootitoot') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Tring", "Smunkit"]
  },
  epic_edamimi: {
    name: "Epic Edamimi",
    image: "images/Monster_Avatars/Edamimi - Epic.png",
    diamonds: 1250,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_edamimi') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Tiawa", "Fire Bush"]
  },
  epic_bisonorus: {
    name: "Epic Bisonorus",
    image: "images/Monster_Avatars/Bisonorus - Epic.png",
    diamonds: 1250,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_bisonorus') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Woolabee", "Mountain Morsel"]
  },
  epic_boo_qwurm: {
    name: "Epic Boo_qwurm",
    image: "images/Monster_Avatars/Boo_qwurm - Epic.png",
    diamonds: 1000,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_boo_qwurm') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Floating Library"]
  },
  floot_fly: {
    name: "Floot Fly",
    image: "images/Monster_Avatars/Floot Fly.png",
    diamonds: 0,
    coins: 30000,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('floot_fly') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Tree Hut"]
  },
  hippityHop: {
    name: "HippityHop",
    image: "images/Monster_Avatars/HippityHop.png",
    diamonds: 150,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('hippityHop') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Jarhead"]
  },
  squot: {
    name: "Squot",
    image: "images/Monster_Avatars/Squot.png",
    diamonds: 150,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('squot') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Squeed Statue"]
  },
  wimmzies: {
    name: "Wimmzies",
    image: "images/Monster_Avatars/Wimmzies.png",
    diamonds: 150,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('wimmzies') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Cozze Cabin"]
  },
  ziggurab: {
    name: "Ziggurab",
    image: "images/Monster_Avatars/Ziggurab.png",
    diamonds: 0,
    relics: 100,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('ziggurab') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Bisonorus", "Tree Forte Tower"]
  },
  cantorell: {
    name: "Cantorell",
    image: "images/Monster_Avatars/Cantorell.png",
    diamonds: 300,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('cantorell') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Beeyoot Tree"]
  },
  bridg_it: {
    name: "Bridg it",
    image: "images/Monster_Avatars/Bridg-it.png",
    diamonds: 300,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('bridg_it') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Ambered Thing"]
  },
  clavi_Gnat: {
    name: "Clavi Gnat",
    image: "images/Monster_Avatars/Clavi Gnat.png",
    diamonds: 300,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('clavi_Gnat') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Dragon Tower"]
  },
  pladdie: {
    name: "Pladdie",
    image: "images/Monster_Avatars/Pladdie.png",
    diamonds: 600,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('pladdie') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Pipes of Cicado"]
  },
  krillby: {
    name: "Krillby",
    image: "images/Monster_Avatars/Krillby.png",
    diamonds: 0,
    relics: 300,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('krillby') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Bisonorus", "Boss Monument"]
  },
  pongPing: {
    name: "PongPing",
    image: "images/Monster_Avatars/PongPing.png",
    diamonds: 0,
    relics: 300,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('pongping') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Gnarls", "Bingo Bango Bongos"]
  },
  tuskski: {
    name: "Tuskski",
    image: "images/Monster_Avatars/Tuskski.png",
    diamonds: 0,
    relics: 500,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('tuskski') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Incisaur", "Swurlee Tree"]
  },
  owlesque: {
    name: "Owlesque",
    image: "images/Monster_Avatars/Owlesque (Major).png",
    diamonds: 900,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('owlesque') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Star Rocks (Faerie Island)"]
  },
  ffidyll: {
    name: "Ffidyll",
    image: "images/Monster_Avatars/Ffidyll.png",
    diamonds: 225,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('ffidyll') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Guitree"]
  },
  rare_floot_fly: {
    name: "Rare Floot Fly",
    image: "images/Monster_Avatars/Floot Fly - Rare.png",
    diamonds: 150,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_floot_fly') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Striking Bulbs"]
  },
  rare_hippityHop: {
    name: "Rare HippityHop",
    image: "images/Monster_Avatars/HippityHop - Rare.png",
    diamonds: 250,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_hippityHop') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Ambered Thing"]
  },
  rare_squot: {
    name: "Rare Squot",
    image: "images/Monster_Avatars/Squot - Rare.png",
    diamonds: 250,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_squot') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Striking Bulbs"]
  },
  rare_wimmzies: {
    name: "Rare Wimmzies",
    image: "images/Monster_Avatars/Wimmzies - Rare.png",
    diamonds: 250,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_wimmzies') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Swurlee Tree"]
  },
  rare_ziggurab: {
    name: "Rare Ziggurab",
    image: "images/Monster_Avatars/Ziggurab - Rare.png",
    diamonds: 500,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_ziggurab') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Barrb", "Razzli Tree"]
  },
  rare_cantorell: {
    name: "Rare Cantorell",
    image: "images/Monster_Avatars/Cantorell - Rare.png",
    diamonds: 300,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_cantorell') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Miniature Island Complex"]
  },
  rare_bridg_it: {
    name: "Rare Bridg it",
    image: "images/Monster_Avatars/Bridg-it - Rare.png",
    diamonds: 500,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_bridg_it') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Sweetstreamz Tree"]
  },
  rare_clavi_Gnat: {
    name: "Rare Clavi Gnat",
    image: "images/Monster_Avatars/Clavi Gnat - Rare.png",
    diamonds: 300,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_clavi_Gnat') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Beeyoot Tree"]
  },
  rare_pladdie: {
    name: "Rare Pladdie",
    image: "images/Monster_Avatars/Pladdie - Rare.png",
    diamonds: 750,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_pladdie') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Macho Monument"]
  },
  rare_krillby: {
    name: "Rare Krillby",
    image: "images/Monster_Avatars/Krillby - Rare.png",
    diamonds: 0,
    stars: 10000,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_krillby') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Yelmut", "Ockulo Tree"]
  },
  rare_pongping: {
    name: "Rare PongPing",
    image: "images/Monster_Avatars/PongPing - Rare.png",
    diamonds: 0,
    stars: 10000,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_pongping') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Krillby", "Spatial Sapling"]
  },
  rare_tuskski: {
    name: "Rare Tuskski",
    image: "images/Monster_Avatars/Tuskski - Rare.png",
    diamonds: 0,
    stars: 15000,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_tuskski') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Wynq", "Thumpies Totem, Too"]
  },
  rare_ffidyll: {
    name: "Rare Ffidyll",
    image: "images/Monster_Avatars/Ffidyll - Rare.png",
    diamonds: 500,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_ffidyll') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Wild Bagpipe"]
  },
  epic_krillby: {
    name: "Epic Krillby",
    image: "images/Monster_Avatars/Krillby - Epic.png",
    diamonds: 1250,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_krillby') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Flowah", "PU System"]
  },
  epic_ziggurab: {
    name: "Epic Ziggurab",
    image: "images/Monster_Avatars/Ziggurab - Epic.png",
    diamonds: 1250,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_ziggurab') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Gnarls", "The Thunker"]
  },
  epic_pongping: {
    name: "Epic PongPing",
    image: "images/Monster_Avatars/PongPing - Epic.png",
    diamonds: 1250,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_pongping') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Incisaur", "The Thunker"]
  },
  epic_ffidyll: {
    name: "Epic Ffidyll",
    image: "images/Monster_Avatars/Ffidyll - Epic.png",
    diamonds: 1000,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_ffidyll') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Green Cupcakes"]
  },
  clackula: {
    name: "Clackula",
    image: "images/Monster_Avatars/Clackula.png",
    diamonds: 0,
    coins: 25000,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('clackula') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Cozee Cabin"]
  },
  peckidna: {
    name: "Peckidna",
    image: "images/Monster_Avatars/Peckidna.png",
    diamonds: 150,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('peckidna') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Barbloo Statue"]
  },
  denchuhs: {
    name: "Denchuhs",
    image: "images/Monster_Avatars/Denchuhs.png",
    diamonds: 150,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('denchuhs') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Saggle Tree"]
  },
  hawlo: {
    name: "Hawlo",
    image: "images/Monster_Avatars/Hawlo.png",
    diamonds: 150,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('hawlo') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Flappy Flag"]
  },
  thrumble: {
    name: "Thrumble",
    image: "images/Monster_Avatars/Thrumble.png",
    diamonds: 0,
    relics: 100,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('thrumble') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Gnarls", "Dragon Tower"]
  },
  withur: {
    name: "Withur",
    image: "images/Monster_Avatars/Withur.png",
    diamonds: 300,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('withur') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Eerie Remains"]
  },
  uuduk: {
    name: "Uuduk",
    image: "images/Monster_Avatars/Uuduk.png",
    diamonds: 300,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('uuduk') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Babayag Tower"]
  },
  banjaw: {
    name: "Banjaw",
    image: "images/Monster_Avatars/Banjaw.png",
    diamonds: 300,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('banjaw') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Meldablend"]
  },
  plinkajou: {
    name: "Plinkajou",
    image: "images/Monster_Avatars/Plinkajou.png",
    diamonds: 600,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('plinkajou') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Tree Hut"]
  },
  flum_Ox: {
    name: "Flum Ox",
    image: "images/Monster_Avatars/Flum Ox.png",
    diamonds: 0,
    relics: 300,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('flum_Ox') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Wynq", "Givutawai Tree"]
  },
  incisaur: {
    name: "Incisaur",
    image: "images/Monster_Avatars/Incisaur.png",
    diamonds: 0,
    relics: 300,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('incisaur') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Edamimi", "Star Rocks (Bone Island)"]
  },
  gnarls: {
    name: "Gnarls",
    image: "images/Monster_Avatars/Gnarls.png",
    diamonds: 0,
    relics: 500,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('gnarls') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Tring", "Striking Bulbs"]
  },
  arcorina: {
    name: "Arcorina",
    image: "images/Monster_Avatars/Arcorina (Major).png",
    diamonds: 1100,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('arcorina') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Star Rocks (Bone Island)"]
  },
  clavavera: {
    name: "Clavavera",
    image: "images/Monster_Avatars/Clavavera.png",
    diamonds: 225,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('clavavera') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Bottomless Pit"]
  },
  rare_clackula: {
    name: "Rare Clackula",
    image: "images/Monster_Avatars/Clackula - Rare.png",
    diamonds: 150,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_clackula') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Yum Yum Tree"]
  },
  rare_peckidna: {
    name: "Rare Peckidna",
    image: "images/Monster_Avatars/Peckidna - Rare.png",
    diamonds: 250,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_peckidna') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Shrini"]
  },
  rare_denchuhs: {
    name: "Rare Denchuhs",
    image: "images/Monster_Avatars/Denchuhs - Rare.png",
    diamonds: 250,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_denchuhs') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Kab_s Wax"]
  },
  rare_hawlo: {
    name: "Rare Hawlo",
    image: "images/Monster_Avatars/Hawlo - Rare.png",
    diamonds: 250,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_hawlo') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Cold Globe"]
  },
  rare_thrumble: {
    name: "Rare Thrumble",
    image: "images/Monster_Avatars/Thrumble - Rare.png",
    diamonds: 500,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_thrumble') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Tiawa", "Bass String Bridge"]
  },
  rare_withur: {
    name: "Rare Withur",
    image: "images/Monster_Avatars/Withur - Rare.png",
    diamonds: 500,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_withur') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Star Rocks (Bone Island)"]
  },
  rare_uuduk: {
    name: "Rare Uuduk",
    image: "images/Monster_Avatars/Uuduk - Rare.png",
    diamonds: 500,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_uuduk') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Cave Crystal Teleporter"]
  },
  rare_banjaw: {
    name: "Rare Banjaw",
    image: "images/Monster_Avatars/Banjaw - Rare.png",
    diamonds: 500,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_banjaw') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Spatial Sapling"]
  },
  rare_plinkajou: {
    name: "Rare Plinkajou",
    image: "images/Monster_Avatars/Plinkajou - Rare.png",
    diamonds: 750,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_plinkajou') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Harmonorb Holder	"]
  },
  rare_flum_Ox: {
    name: "Flum Ox",
    image: "images/Monster_Avatars/Flum Ox - Rare.png",
    diamonds: 0,
    satrs: 10000,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_flum_Ox') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Barrb", "Bingo Bango Bongos"]
  },
  rare_incisaur: {
    name: "Rare Incisaur",
    image: "images/Monster_Avatars/Incisaur - Rare.png",
    diamonds: 0,
    stars: 10000,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_incisaur') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Tiawa", "The Thunker"]
  },
  rare_gnarls: {
    name: "Rare Gnarls",
    image: "images/Monster_Avatars/Gnarls - Rare.png",
    diamonds: 0,
    stars: 15000,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_gnarls') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Bisonorus", "Miniature Island Complex"]
  },
  // arcorina: {
  //   name: "Arcorina",
  //   image: "images/Monster_Avatars/Arcorina.png",
  //   diamonds: 1100,
  //   coins: 0,
  //   description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('arcorina') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  // },
  rare_clavavera: {
    name: "Rare Clavavera",
    image: "images/Monster_Avatars/Clavavera - Rare.png",
    diamonds: 500,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_clavavera') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Fossil-osaurus"]
  },
  epic_thrumble: {
    name: "Epic Thrumble",
    image: "images/Monster_Avatars/Thrumble - Epic.png",
    diamonds: 750,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_thrumble') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Bowhead", "Spatial Sapling"]
  },
  epic_incisaur: {
    name: "Epic Incisaur",
    image: "images/Monster_Avatars/Incisaur - Epic.png",
    diamonds: 1250,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_incisaur') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Tring", "Shrini"]
  },
  epic_clavavera: {
    name: "Epic Clavavera",
    image: "images/Monster_Avatars/Clavavera - Epic.png",
    diamonds: 1000,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_clavavera') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Little Drummer"]
  },
  epic_clackula: {
    name: "Epic Clackula",
    image: "images/Monster_Avatars/Clackula - Epic.png",
    diamonds: 1000,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_clackula') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Cave Crystal Teleporter"]
  },
  shugabush: {
    name: "Shugabush",
    image: "images/Monster_Avatars/Shugabush.png",
    diamonds: 700,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('shugabush') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Bottomless Pit", "Razzli Tree"]
  },
  shugarock: {
    name: "Shugarock",
    image: "images/Monster_Avatars/Shugarock.png",
    diamonds: 700,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('shugarock') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Cozze Cabin"]
  },
  shugajo: {
    name: "Shugajo",
    image: "images/Monster_Avatars/Shugajo.png",
    diamonds: 700,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('shugajo') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Shugabuzz"]
  },
  shugabeats: {
    name: "Shugabeats",
    image: "images/Monster_Avatars/Shugabeats.png",
    diamonds: 700,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('shugabeats') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Shugabuzz"]
  },
  shugabuzz: {
    name: "Shugabuzz",
    image: "images/Monster_Avatars/Shugabuzz.png",
    diamonds: 700,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('shugabuzz') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Yum Yum Tree"]
  },
  shugitar: {
    name: "Shugitar",
    image: "images/Monster_Avatars/Shugitar.png",
    diamonds: 700,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('shugitar') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Fire Bush"]
  },
  shugavox: {
    name: "Shugavox",
    image: "images/Monster_Avatars/Shugavox.png",
    diamonds: 700,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('shugavox') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Puffle Tree"]
  },
  viveine: {
    name: "Viveine",
    image: "images/Monster_Avatars/Viveine.png",
    diamonds: 225,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('viveine') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Razzli Tree", "Gnarls"]
  },
  rare_viveine: {
    name: "Rare Viveine",
    image: "images/Monster_Avatars/Viveine - Rare.png",
    diamonds: 500,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_viveine') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Reflecting Pool"]
  },
  epic_viveine: {
    name: "Epic Viveine",
    image: "images/Monster_Avatars/Viveine - Epic.png",
    diamonds: 1000,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_viveine') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Golden Simian"]
  },
  whisp: {
    name: "Whisp",
    image: "images/Monster_Avatars/Whisp.png",
    diamonds: 1250,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('whisp') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Puffle Tree", "Lowb"]
  },
  nebulob: {
    name: "Nebulob",
    image: "images/Monster_Avatars/Nebulob.png",
    diamonds: 1250,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('nebulob') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Lowb", "Auglur"]
  },
  sox: {
    name: "Sox",
    image: "images/Monster_Avatars/Sox.png",
    diamonds: 1250,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('sox') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Spurrit Statue", "Lowb"]
  },
  jellbilly: {
    name: "Jellbilly",
    image: "images/Monster_Avatars/Jellbilly.png",
    diamonds: 1250,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('jellbilly') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Squeed Statue", "Flasque"]
  },
  arackulele: {
    name: "Arackulele",
    image: "images/Monster_Avatars/Arackulele.png",
    diamonds: 1250,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('arackulele') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Guitree", "Auglur"]
  },
  boodoo: {
    name: "Boodoo",
    image: "images/Monster_Avatars/Boodoo.png",
    diamonds: 1250,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('boodoo') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Fossil-osaurus"]
  },
  kazilleon: {
    name: "Kazilleon",
    image: "images/Monster_Avatars/Kazilleon.png",
    diamonds: 1250,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('kazilleon') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Eerie Remains"]
  },
  bellowfish: {
    name: "Bellowfish",
    image: "images/Monster_Avatars/Bellowfish.png",
    diamonds: 1250,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('bellowfish') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Zuffle Tree", "Yooreek"]
  },
  dragong: {
    name: "Dragong",
    image: "images/Monster_Avatars/Dragong.png",
    diamonds: 1250,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('dragong') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Dragoon Statue", "Yooreek"]
  },
  fung_Pray: {
    fung_Pray: "Fung Pray",
    image: "images/Monster_Avatars/Fung Pray.png",
    diamonds: 1250,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('fung_Pray') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Cozee Cabin"]
  },
  monculus: {
    name: "Monculus",
    image: "images/Monster_Avatars/Monculus.png",
    diamonds: 250,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('monculus') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Mountain Morsel"]
  },
  rare_whisp: {
    name: "Rare Whisp",
    image: "images/Monster_Avatars/Whisp - Rare.png",
    diamonds: 2000,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_whisp') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Reflecting Pool"]
  },
  rare_nebulob: {
    name: "Rare Nebulob",
    image: "images/Monster_Avatars/Nebulob - Rare.png",
    diamonds: 2000,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_nebulob') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Tub Fountain"]
  },
  rare_sox: {
    name: "Rare Sox",
    image: "images/Monster_Avatars/Sox - Rare.png",
    diamonds: 2000,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_sox') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Yum Yum Tree"]
  },
  rare_jellbilly: {
    name: "Rare Jellbilly",
    image: "images/Monster_Avatars/Jellbilly - Rare.png",
    diamonds: 2000,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_jellbilly') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Tub Fountain"]
  },
  rare_arackulele: {
    name: "Rare Arackulele",
    image: "images/Monster_Avatars/Arackulele - Rare.png",
    diamonds: 2000,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_arackulele') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Dragoon Statue"]
  },
  rare_boodoo: {
    name: "Rare Boodoo",
    image: "images/Monster_Avatars/Boodoo - Rare.png",
    diamonds: 2000,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_boodoo') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Tree Hut"]
  },
  rare_kazilleon: {
    name: "Rare Kazilleon",
    image: "images/Monster_Avatars/Kazilleon - Rare.png",
    diamonds: 2000,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_kazilleon') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Fossil-osaurus"]
  },
  rare_bellowfish: {
    name: "Rare Bellowfish",
    image: "images/Monster_Avatars/Bellowfish - Rare.png",
    diamonds: 2000,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_bellowfish') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Tree Forte Tower"]
  },
  rare_dragong: {
    name: "Rare Dragong",
    image: "images/Monster_Avatars/Dragong - Rare.png",
    diamonds: 2000,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_dragong') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Eerie Remains"]
  },
  rare_fung_Pray: {
    fung_Pray: "Rare Fung Pray",
    image: "images/Monster_Avatars/Fung Pray - Rare.png",
    diamonds: 2000,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_fung_Pray') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Pipes of Cicado"]
  },
  rare_monculus: {
    name: "Rare Monculus",
    image: "images/Monster_Avatars/Monculus - Rare.png",
    diamonds: 500,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_monculus') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Crumpler Tree"]
  },
  epic_whisp: {
    name: "Epic Whisp",
    image: "images/Monster_Avatars/Whisp - Epic.png",
    diamonds: 3500,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_whisp') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Ockulo Tree"]
  },
  epic_nebulob: {
    name: "Epic Nebulob",
    image: "images/Monster_Avatars/Nebulob - Epic.png",
    diamonds: 3500,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_nebulob') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Englobulated F.U.M."]
  },
  epic_sox: {
    name: "Epic Sox",
    image: "images/Monster_Avatars/Sox - Epic.png",
    diamonds: 3500,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_sox') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Mount Knottshurr"]
  },
  epic_jellbilly: {
    name: "Epic Jellbilly",
    image: "images/Monster_Avatars/Jellbilly - Epic.png",
    diamonds: 3500,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_jellbilly') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Jarhead"]
  },
  epic_arackulele: {
    name: "Epic Arackulele",
    image: "images/Monster_Avatars/Arackulele - Epic.png",
    diamonds: 3500,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_arackulele') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Elmenco Stump"]
  },
  epic_boodoo: {
    name: "Epic Boodoo",
    image: "images/Monster_Avatars/Boodoo - Epic.png",
    diamonds: 3500,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_boodoo') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Bingo Bango Bongos"]
  },
  epic_kazilleon: {
    name: "Epic Kazilleon",
    image: "images/Monster_Avatars/Kazilleon - Epic.png",
    diamonds: 3500,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_kazilleon') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Fuzzle Tree"]
  },
  epic_bellowfish: {
    name: "Epic Bellowfish",
    image: "images/Monster_Avatars/Bellowfish - Epic.png",
    diamonds: 3500,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_bellowfish') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Piney Tree"]
  },
  epic_dragong: {
    name: "Epic Dragong",
    image: "images/Monster_Avatars/Dragong - Epic.png",
    diamonds: 3500,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_dragong') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Odd-o-Mobile"]
  },
  epic_fung_Pray: {
    fung_Pray: "Epic Fung Pray",
    image: "images/Monster_Avatars/Fung Pray - Epic.png",
    diamonds: 3500,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_fung_Pray') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Ockulo Tree"]
  },
  epic_monculus: {
    name: "Epic Monculus",
    image: "images/Monster_Avatars/Monculus - Epic.png",
    diamonds: 1000,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_monculus') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Blueprint Workshop"]
  },
  cataliszt: {
    name: "Cataliszt",
    image: "images/Monster_Avatars/Cataliszt.png",
    diamonds: 0,
    coins: 100000,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('cataliszt') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Harmonorb Holder"]
  },
  bleatnik: {
    name: "Bleatnik",
    image: "images/Monster_Avatars/Bleatnik.png",
    diamonds: 750,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('bleatnik') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Wubbox Stockpile"]
  },
  cranchee: {
    name: "Cranchee",
    image: "images/Monster_Avatars/Cranchee.png",
    diamonds: 750,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('cranchee') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Miniature Island Complex"]
  },
  sporerow: {
    name: "Sporerow",
    image: "images/Monster_Avatars/Sporerow.png",
    diamonds: 750,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('sporerow') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Optiglowbe"]
  },
  pinghound: {
    name: "Pinghound",
    image: "images/Monster_Avatars/Pinghound.png",
    diamonds: 750,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('pinghound') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Wubbox Stockpile"]
  },
  wheezel: {
    name: "Wheezel",
    image: "images/Monster_Avatars/Wheezel.png",
    diamonds: 750,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('wheezel') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Odd-o-Mobile"]
  },
  knurv: {
    name: "Knurv",
    image: "images/Monster_Avatars/Knurv.png",
    diamonds: 750,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('knurv') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Cave Crystal Teleporter"]
  },
  shLep: {
    name: "shLep",
    image: "images/Monster_Avatars/shLep.png",
    diamonds: 750,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('shLep') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Macho Monument"]
  },
  rare_bleatnik: {
    name: "Rare Bleatnik",
    image: "images/Monster_Avatars/Bleatnik - Rare.png",
    diamonds: 1100,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_bleatnik') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Swurlee Tree"]
  },
  rare_cranchee: {
    name: "Rare Cranchee",
    image: "images/Monster_Avatars/Cranchee - Rare.png",
    diamonds: 1100,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_cranchee') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Leafy Sea Dragon"]
  },
  rare_sporerow: {
    name: "Rare Sporerow",
    image: "images/Monster_Avatars/Sporerow - Rare.png",
    diamonds: 1100,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_sporerow') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Guitree"]
  },
  rare_pinghound: {
    name: "Rare Pinghound",
    image: "images/Monster_Avatars/Pinghound - Rare.png",
    diamonds: 1100,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_sporerow') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Dragon Tower"]
  },
  rare_wheezel: {
    name: "Rare Wheezel",
    image: "images/Monster_Avatars/Wheezel - Rare.png",
    diamonds: 1100,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_wheezel') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Smunkit"]
  },
  rare_knurv: {
    name: "Rare Knurv",
    image: "images/Monster_Avatars/Knurv - Rare.png",
    diamonds: 1100,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_knurv') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Tub Fountain"]
  },
  rare_shLep: {
    name: "Rare shLep",
    image: "images/Monster_Avatars/shLep - Rare.png",
    diamonds: 1100,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_shLep') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Yum Yum Tree"]
  },
  xyster: {
    name: "Xyster",
    image: "images/Monster_Avatars/Xyster.png",
    diamonds: 200,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('xyster') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Xyster"]
  },
  cahoot: {
    name: "Cahoot",
    image: "images/Monster_Avatars/Cahoot.png",
    diamonds: 200,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('cahoot') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Spurrit Statue"]
  },
  deja_Jin: {
    name: "Deja Jin",
    image: "images/Monster_Avatars/Déjà-Jin.png",
    diamonds: 200,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('deja_Jin') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Reflecting Pool"]
  },
  roarick: {
    name: "Roarick",
    image: "images/Monster_Avatars/Roarick.png",
    diamonds: 200,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('roarick') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Leafy Sea Dragon"]
  },
  osstax: {
    name: "Osstax",
    image: "images/Monster_Avatars/Osstax.png",
    diamonds: 200,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('osstax') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Hollow Log"]
  },
  knucklehead: {
    name: "Knucklehead",
    image: "images/Monster_Avatars/Knucklehead.png",
    diamonds: 200,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('knucklehead') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Dragoon Statue"]
  },
  g_day: {
    name: "G Day",
    image: "images/Monster_Avatars/G'Day.png",
    diamonds: 400,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('g_day') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Inverdigus Fern"]
  },
  larvaluss: {
    name: "Larvaluss",
    image: "images/Monster_Avatars/Larvaluss.png",
    diamonds: 400,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('larvaluss') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Barbloo Statue"]
  },
  frondley: {
    name: "Frondley",
    image: "images/Monster_Avatars/Frondley.png",
    diamonds: 400,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('frondley') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Saggle Tree"]
  },
  mushaboom: {
    name: "Mushaboom",
    image: "images/Monster_Avatars/Mushaboom.png",
    diamonds: 400,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('mushaboom') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Crumpler Tree"]
  },
  enchantling: {
    name: "Enchantling",
    image: "images/Monster_Avatars/Enchantling.png",
    diamonds: 750,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('enchantling') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Ambered Thing"]
  },
  carillong: {
    name: "Carillong",
    image: "images/Monster_Avatars/Carillong.png",
    diamonds: 225,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('carillong') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Fire Bush"]
  },
  rare_xyster: {
    name: "Rare Xyster",
    image: "images/Monster_Avatars/Xyster - Rare.png",
    diamonds: 300,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_xyster') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Swurlee Tree"]
  },
  rare_cahoot: {
    name: "Rare Cahoot",
    image: "images/Monster_Avatars/Cahoot - Rare.png",
    diamonds: 300,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_cahoot') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Ockulo Tree"]
  },
  rare_deja_Jin: {
    name: "Rare Deja Jin",
    image: "images/Monster_Avatars/Déjà-Jin - Rare.png",
    diamonds: 300,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_deja_Jin') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Optiglowbe"]
  },
  rare_roarick: {
    name: "Rare Roarick",
    image: "images/Monster_Avatars/Roarick - Rare.png",
    diamonds: 300,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_roarick') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Harmonorb Holder"]
  },
  rare_osstax: {
    name: "Rare Osstax",
    image: "images/Monster_Avatars/Osstax - Rare.png",
    diamonds: 300,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_osstax') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Thumpies Totem, Too"]
  },
  rare_knucklehead: {
    name: "Rare Knucklehead",
    image: "images/Monster_Avatars/Knucklehead - Rare.png",
    diamonds: 300,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_knucklehead') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Macho Monument"]
  },
  rare_g_day: {
    name: "Rare G Day",
    image: "images/Monster_Avatars/G'Day - Rare.png",
    diamonds: 600,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_g_day') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Bingo Bango Bongos"]
  },
  rare_larvaluss: {
    name: "Rare Larvaluss",
    image: "images/Monster_Avatars/Larvaluss - Rare.png",
    diamonds: 600,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_larvaluss') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Kab_s Wax"]
  },
  rare_frondley: {
    name: "Rare Frondley",
    image: "images/Monster_Avatars/Frondley - Rare.png",
    diamonds: 600,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_frondley') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Cold Globe"]
  },
  rare_mushaboom: {
    name: "Rare Mushaboom",
    image: "images/Monster_Avatars/Mushaboom - Rare.png",
    diamonds: 600,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_mushaboom') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Cave Crystal Teleporter"]
  },
  // enchantling: {
  //   name: "Enchantling",
  //   image: "images/Monster_Avatars/enchantling.png",
  //   diamonds: 750,
  //   coins: 0,
  //   description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('enchantling') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  // },
  rare_carillong: {
    name: "Rare Carillong",
    image: "images/Monster_Avatars/Carillong - Rare.png",
    diamonds: 500,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_carillong') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Hollow Log"]
  },
  epic_carillong: {
    name: "Epic Carillong",
    image: "images/Monster_Avatars/Carillong - Epic.png",
    diamonds: 1000,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_carillong') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Floating Lanterns"]
  },
  jam_boree: {
    name: "Jam Boree",
    image: "images/Monster_Avatars/Jam Boree.png",
    diamonds: 500,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('jam_Boree') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Dragon Tower"]
  },
  rare_jam_boree: {
    name: "Rare Jam Boree",
    image: "images/Monster_Avatars/Jam Boree - Rare.png",
    diamonds: 625,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_jam_Boree') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Eerie Remains"]
  },
  epic_jam_boree: {
    name: "Epic Jam Boree",
    image: "images/Monster_Avatars/Jam Boree - Epic.png",
    diamonds: 1225,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_jam_Boree') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["11th Anniversary Monument"]
  },
  brump: {
    name: "Brump",
    image: "images/Monster_Avatars/Brump.png",
    diamonds: 0,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('brump') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  zynth: {
    name: "Zynth",
    image: "images/Monster_Avatars/Zynth.png",
    diamonds: 0,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('zynth') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  poewk: {
    name: "Poewk",
    image: "images/Monster_Avatars/Poewk.png",
    diamonds: 0,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('poewk') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  thwok: {
    name: "Thwok",
    image: "images/Monster_Avatars/Thwok.png",
    diamonds: 0,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('thwok') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  dwumrohl: {
    name: "Dwumrohl",
    image: "images/Monster_Avatars/Dwumrohl.png",
    diamonds: 0,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('dwumrohl') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  zuuker: {
    name: "Zuuker",
    image: "images/Monster_Avatars/Zuuker.png",
    diamonds: 0,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('zuuker') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  screemu: {
    name: "Screemu",
    image: "images/Monster_Avatars/Screemu.png",
    diamonds: 0,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('screemu') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  tympa: {
    name: "Tympa",
    image: "images/Monster_Avatars/Tympa.png",
    diamonds: 0,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('tympa') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  dermit: {
    name: "Dermit",
    image: "images/Monster_Avatars/Dermit.png",
    diamonds: 0,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('dermit') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  gheegur: {
    name: "Gheegur",
    image: "images/Monster_Avatars/Gheegur.png",
    diamonds: 0,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('gheegur') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  whajje: {
    name: "Whajje",
    image: "images/Monster_Avatars/Whajje.png",
    diamonds: 0,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('whajje') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  creepuscule: {
    name: "Creepuscule",
    image: "images/Monster_Avatars/Creepuscule.png",
    diamonds: 0,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('creepuscule') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  blipsqueak: {
    name: "Blipsqueak",
    image: "images/Monster_Avatars/Blipsqueak.png",
    diamonds: 0,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('blipsqueak') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  scargo: {
    name: "Scargo",
    image: "images/Monster_Avatars/Scargo.png",
    diamonds: 0,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('scargo') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  astropod: {
    name: "Astropod",
    image: "images/Monster_Avatars/Astropod.png",
    diamonds: 0,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('astropod') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  pixolotl: {
    name: "Pixolotl",
    image: "images/Monster_Avatars/Pixolotl.png",
    diamonds: 0,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('pixolotl') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  bona_Petite: {
    name: "Bona Petite",
    image: "images/Monster_Avatars/Bona-Petite.png",
    diamonds: 0,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('Bona-Petite') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  maulch: {
    name: "Maulch",
    image: "images/Monster_Avatars/Maulch.png",
    diamonds: 0,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('maulch') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  fleechwurm: {
    name: "Fleechwurm",
    image: "images/Monster_Avatars/Fleechwurm.png",
    diamonds: 0,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('fleechwurm') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  rare_brump: {
    name: "Rare Brump",
    image: "images/Monster_Avatars/Brump - Rare.png",
    diamonds: 0,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_brump') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  rare_zynth: {
    name: "Rare Zynth",
    image: "images/Monster_Avatars/Zynth - Rare.png",
    diamonds: 0,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_zynth') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  rare_poewk: {
    name: "Rare Poewk",
    image: "images/Monster_Avatars/Poewk - Rare.png",
    diamonds: 0,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_poewk') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  rare_thwok: {
    name: "Rare Thwok",
    image: "images/Monster_Avatars/Thwok - Rare.png",
    diamonds: 0,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_thwok') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  rare_dwumrohl: {
    name: "Rare Dwumrohl",
    image: "images/Monster_Avatars/Dwumrohl - Rare.png",
    diamonds: 0,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_dwumrohl') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  rare_zuuker: {
    name: "Rare Zuuker",
    image: "images/Monster_Avatars/Zuuker - Rare.png",
    diamonds: 0,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_zuuker') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  rare_tympa: {
    name: "Rare Tympa",
    image: "images/Monster_Avatars/Tympa - Rare.png",
    diamonds: 0,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_tympa') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  rare_screemu: {
    name: "Rare Screemu",
    image: "images/Monster_Avatars/Screemu - Rare.png",
    diamonds: 0,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_screemu') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  rare_dermit: {
    name: "Rare Dermit",
    image: "images/Monster_Avatars/Dermit - Rare.png",
    diamonds: 0,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_dermit') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  rare_gheegur: {
    name: "Rare Gheegur",
    image: "images/Monster_Avatars/Gheegur - Rare.png",
    diamonds: 0,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_gheegur') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  rare_whajje: {
    name: "Rare Whajje",
    image: "images/Monster_Avatars/Whajje - Rare.png",
    diamonds: 0,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_whajje') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  rare_creepuscule: {
    name: "Rare Creepuscule",
    image: "images/Monster_Avatars/Creepuscule - Rare.png",
    diamonds: 0,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_creepuscule') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  rare_blipsqueak: {
    name: "Rare Blipsqueak",
    image: "images/Monster_Avatars/Blipsqueak - Rare.png",
    diamonds: 0,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_blipsqueak') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  rare_scargo: {
    name: "Rare Scargo",
    image: "images/Monster_Avatars/Scargo - Rare.png",
    diamonds: 0,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_scargo') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  rare_astropod: {
    name: "Rare Astropod",
    image: "images/Monster_Avatars/Astropod - Rare.png",
    diamonds: 0,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_astropod') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  rare_pixolotl: {
    name: "Rare Pixolotl",
    image: "images/Monster_Avatars/Pixolotl - Rare.png",
    diamonds: 0,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_pixolotl') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  rare_bona_Petite: {
    name: "Rare Bona Petite",
    image: "images/Monster_Avatars/Bona-Petite - Rare.png",
    diamonds: 0,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_bona-Petite') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  rare_maulch: {
    name: "Rare Maulch",
    image: "images/Monster_Avatars/Maulch - Rare.png",
    diamonds: 0,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_maulch') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  rare_fleechwurm: {
    name: "Rare Fleechwurm",
    image: "images/Monster_Avatars/Fleechwurm - Rare.png",
    diamonds: 0,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_fleechwurm') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  epic_brump: {
    name: "Epic Brump",
    image: "images/Monster_Avatars/Brump - Epic.png",
    diamonds: 0,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_brump') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  epic_zynth: {
    name: "Epic Zynth",
    image: "images/Monster_Avatars/Zynth - Epic.png",
    diamonds: 0,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_zynth') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  epic_poewk: {
    name: "Epic Poewk",
    image: "images/Monster_Avatars/Poewk - Epic.png",
    diamonds: 0,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_poewk') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  epic_thwok: {
    name: "Epic Thwok",
    image: "images/Monster_Avatars/Thwok - Epic.png",
    diamonds: 0,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_thwok') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  epic_dwumrohl: {
    name: "Epic Dwumrohl",
    image: "images/Monster_Avatars/Dwumrohl - Epic.png",
    diamonds: 0,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_dwumrohl') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  epic_zuuker: {
    name: "Epic Zuuker",
    image: "images/Monster_Avatars/Zuuker - Epic.png",
    diamonds: 0,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_zuuker') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  epic_tympa: {
    name: "Epic Tympa",
    image: "images/Monster_Avatars/Tympa - Epic.png",
    diamonds: 0,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('epic_tympa') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },

  hornacle: {
    name: "Hornacle",
    image: "images/Monster_Avatars/Hornacle.png",
    diamonds: 120,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('hornacle') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  furnoss: {
    name: "Furnoss",
    image: "images/Monster_Avatars/Furnoss.png",
    diamonds: 85,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('furnoss') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  glaishur: {
    name: "Glaishur",
    image: "images/Monster_Avatars/Glaishur.png",
    diamonds: 95,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('glaishur') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  blasoom: {
    name: "Blasoom",
    image: "images/Monster_Avatars/Blasoom.png",
    diamonds: 145,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('blasoom') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  syncopite: {
    name: "Syncopite",
    image: "images/Monster_Avatars/Syncopite.png",
    diamonds: 90,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('syncopite') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  vhamp: {
    name: "Vhamp",
    image: "images/Monster_Avatars/Vhamp.png",
    diamonds: 140,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('vhamp') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  galvana: {
    name: "Galvana",
    image: "images/Monster_Avatars/Galvana.png",
    diamonds: 150,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('galvana') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  scaratar: {
    name: "Scaratar",
    image: "images/Monster_Avatars/Scaratar.png",
    diamonds: 100,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('scaratar') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  loodvigg: {
    name: "Loodvigg",
    image: "images/Monster_Avatars/Loodvigg.png",
    diamonds: 160,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('loodvigg') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  torrt: {
    name: "Torrt",
    image: "images/Monster_Avatars/Torrt.png",
    diamonds: 175,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('torrt') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  plixie: {
    name: "Plixie",
    image: "images/Monster_Avatars/Plixie.png",
    diamonds: 110,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('plixie') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  attmoz: {
    name: "Attmoz",
    image: "images/Monster_Avatars/Attmoz.png",
    diamonds: 75,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('attmoz') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  adult_hornacle: {
    name: "Adult Hornacle",
    image: "images/Monster_Avatars/Hornacle - adult.png",
    diamonds: 0,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('adult_hornacle') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  adult_furnoss: {
    name: "Adult Furnoss",
    image: "images/Monster_Avatars/Furnoss - adult.png",
    diamonds: 0,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('adult_furnoss') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  adult_glaishur: {
    name: "Adult Glaishur",
    image: "images/Monster_Avatars/Glaishur - adult.png",
    diamonds: 0,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('adult_glaishur') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  adult_blasoom: {
    name: "Adult Blasoom",
    image: "images/Monster_Avatars/Blasoom - adult.png",
    diamonds: 0,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('adult_blasoom') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  adult_syncopite: {
    name: "Adult Syncopite",
    image: "images/Monster_Avatars/Syncopite - adult.png",
    diamonds: 0,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('adult_syncopite') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  adult_vhamp: {
    name: "Adult Vhamp",
    image: "images/Monster_Avatars/Vhamp - adult.png",
    diamonds: 0,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('adult_vhamp') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  rare_galvana: {
    name: "Adult Galvana",
    image: "images/Monster_Avatars/Galvana - adult.png",
    diamonds: 0,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('adult_galvana') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  rare_scaratar: {
    name: "Adult Scaratar",
    image: "images/Monster_Avatars/Scaratar - adult.png",
    diamonds: 0,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('adult_scaratar') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  adult_loodvigg: {
    name: "Adult Loodvigg",
    image: "images/Monster_Avatars/Loodvigg - adult.png",
    diamonds: 0,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('adult_loodvigg') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  adult_torrt: {
    name: "Adult Torrt",
    image: "images/Monster_Avatars/Torrt - adult.png",
    diamonds: 0,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('adult_torrt') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  adult_plixie: {
    name: "Adult Plixie",
    image: "images/Monster_Avatars/Plixie - adult.png",
    diamonds: 0,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('adult_plixie') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  adult_attmoz: {
    name: "Adult Attmoz",
    image: "images/Monster_Avatars/Attmoz - adult.png",
    diamonds: 0,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('adult_attmoz') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  yooreek: {
    name: "Yooreek",
    image: "images/Monster_Avatars/Yooreek.png",
    diamonds: 1500,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('yooreek') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Yum Yum Tree", "Nebulob", "Arackulele"]
  },
  meebkin: {
    name: "Meebkin",
    image: "images/Monster_Avatars/Meebkin.png",
    diamonds: 1600,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('meebkin') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Barbloo Statue", "Sox"]
  },
  blarret: {
    name: "Blarret",
    image: "images/Monster_Avatars/Blarret.png",
    diamonds: 1700,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('blarret') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Drections to Nowhere", "Jellbilly"]
  },
  gaddzooks: {
    name: "Gaddzooks",
    image: "images/Monster_Avatars/Gaddzooks.png",
    diamonds: 1800,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('gaddzooks') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Bottomless Pit", "Sox", "Bogle"]
  },
  auglur: {
    name: "Auglur",
    image: "images/Monster_Avatars/Auglur.png",
    diamonds: 1900,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('auglur') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Optiglowbe", "Jellbilly", "Bogle"]
  },
  flasque: {
    name: "Flasque",
    image: "images/Monster_Avatars/Flasque.png",
    diamonds: 2000,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('flasque') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Babayag Tower", "Lowb"]
  },
  nitebear: {
    name: "Nitebear",
    image: "images/Monster_Avatars/Nitebear.png",
    diamonds: 2100,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('nitebear') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Reflecting Pool"]
  },
  piplash: {
    name: "Piplash ",
    image: "images/Monster_Avatars/Piplash .png",
    diamonds: 2200,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('piplash') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Fuzzle Tree", "Arackulele"]
  },
  x_rt: {
    name: "X rt",
    image: "images/Monster_Avatars/X'rt.png",
    diamonds: 2300,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('x_rt') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Mountain Morsel"]
  },
  teeter_tauter: {
    name: "Teeter Tauter",
    image: "images/Monster_Avatars/Teeter-Tauter.png",
    diamonds: 2400,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('teeter_tauter') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Beeyoot Tree"]
  },
  whaill: {
    name: "Whaill",
    image: "images/Monster_Avatars/Whaill.png",
    diamonds: 3000,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('whaill') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Inverdigus Fern", "Lowb"]
  },
  vhenshun: {
    name: "Vhenshun",
    image: "images/Monster_Avatars/Vhenshun.png",
    diamonds: 3100,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('vhenshun') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Guitree", "Bogle"]
  },
  pentumbra: {
    name: "Pentumbra",
    image: "images/Monster_Avatars/Pentumbra.png",
    diamonds: 3200,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('pentumbra') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Harmonorb Holder"]
  },
  rhysmuth: {
    name: "Rhysmuth",
    image: "images/Monster_Avatars/Rhysmuth.png",
    diamonds: 3300,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rhysmuth') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Tub Fountain"]
  },
  oogiddy: {
    name: "Oogiddy",
    image: "images/Monster_Avatars/Oogiddy.png",
    diamonds: 3400,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('oogiddy') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Bass String Bridge"]
  },
  beMeebEth: {
    name: "BeMeebEth",
    image: "images/Monster_Avatars/BeMeebEth.png",
    diamonds: 5555,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('beMeebEth') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Jarhead"]
  },
  rare_yooreek: {
    name: "Rare Yooreek",
    image: "images/Monster_Avatars/Yooreek - Rare.png",
    diamonds: 3000,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_yooreek') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Odd-o-Mobile"]
  },
  rare_meebkin: {
    name: "Rare Meebkin",
    image: "images/Monster_Avatars/Meebkin - Rare.png",
    diamonds: 3100,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_meebkin') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Stritch Skin"]
  },
  rare_blarret: {
    name: "Rare Blarret",
    image: "images/Monster_Avatars/Blarret - Rare.png",
    diamonds: 3200,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_blarret') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Tub Fountain"]
  },
  rare_gaddzooks: {
    name: "Rare Gaddzooks",
    image: "images/Monster_Avatars/Gaddzooks - Rare.png",
    diamonds: 3300,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_gaddzooks') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Tree Forte Tower"]
  },
  rare_auglur: {
    name: "Rare Auglur",
    image: "images/Monster_Avatars/Auglur - Rare.png",
    diamonds: 3400,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_auglur') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Castanevine"]
  },
  rare_nitebear: {
    name: "Rare Nitebear",
    image: "images/Monster_Avatars/Nitebear - Rare.png",
    diamonds: 3600,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('rare_nitebear') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Bloofi Tree"]
  },
  lowb: {
    name: "Lowb",
    image: "images/Monster_Avatars/Lowb.png",
    diamonds: 5000,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('lowb') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Jellbilly"]
  },
  bogle: {
    name: "Bogle",
    image: "images/Monster_Avatars/Bogle.png",
    diamonds: 5000,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('bogle') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Bellowfish"]
  },
  shhimmer: {
    name: "Shhimmer",
    image: "images/Monster_Avatars/Shhimmer.png",
    diamonds: 500,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('shhimmer') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
    slike: ["Star Rocks (Light Island)"]
  },
  dakktyl: {
    name: "Dakktyl",
    image: "images/Monster_Avatars/Dakktyl.png",
    diamonds: 3000,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('dakktyl') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  scallyrags: {
    name: "Scallyrags",
    image: "images/Monster_Avatars/Scallyrags.png",
    diamonds: 3000,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('scallyrags') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
  jerm: {
    name: "Jerm",
    image: "images/Monster_Avatars/Jerm.png",
    diamonds: 4000,
    coins: 0,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('jerm') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },
};
/* 
  ulike: {
    0: "",
    1: "",
    2: "",
  },
  likes: {

  }

  name: {
    name: "",
    image: "images/Monster_Avatars/.png",
    diamonds: #,
    coins: #,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch('top_name') })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },

  name: {
    name: "",
    image: "images/Monster_Avatars/.png",
    diamonds: #,
    relics: #,
    description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch(top_name) })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
  },

*/

const islandData = {
  plant: {
    common: [
      "Potbelly",
      "Noggin",
      "Toe Jammer",
      "Mammott",
      "Shrubb",
      "Oaktopus",
      "Furcorn",
      "Fwog",
      "Drumpler",
      "Maw",
      "Pummel",
      "Clamble",
      "Bowgart",
      "T Rox",
      "Entbrat",
      "Ghazt",
      "Wubbox",
      "Shugabush",
      "Tawkerr",
      "Parlsona",
      "Punkleton",
      "G joob",
      "Do",
      "Re",
      "Mi",
      "Fa",
      "Sol",
      "La",
      "Ti",
    ],
    rare: [
      "Rare Potbelly",
      "Rare Noggin",
      "Rare Toe Jammer",
      "Rare Mammott",
      "Rare Shrubb",
      "Rare Oaktopus",
      "Rare Furcorn",
      "Rare Fwog",
      "Rare Drumpler",
      "Rare Maw",
      "Rare Pummel",
      "Rare Clamble",
      "Rare Bowgart",
      "Rare T Rox",
      "Rare Entbrat",
      "Rare Ghazt",
      "Rare Wubbox",
      "Rare G joob",
      "Rare Punkleton",
    ],
    epic: [
      "Epic Potbelly",
      "Epic Noggin",
      "Epic Toe Jammer",
      "Epic Mammott",
      "Epic Shrubb",
      "Epic Oaktopus",
      "Epic Furcorn",
      "Epic Fwog",
      "Epic Drumpler",
      "Epic Maw",
      "Epic Pummel",
      "Epic Clamble",
      "Epic Bowgart",
      "Epic T Rox",
      "Epic Entbrat",
      "Epic Ghazt",
      "Epic Plant Wubbox",
      "Epic G joob",
      "Epic Punkleton",
    ],
  },
  cold: {
    common: [
      "Tweedle",
      "Potbelly",
      "Toe Jammer",
      "Mammott",
      "Dandidoo",
      "Quibble",
      "Pango",
      "Oaktopus",
      "Furcorn",
      "Maw",
      "Spunge",
      "Thumpies",
      "Congle",
      "Bowgart",
      "Deedge",
      "Grumpyre",
      "Wubbox",
      "Tawkerr",
      "Maggpi",
      "Yool",
      "Strombonin",
      "Do",
      "Re",
      "Mi",
      "Fa",
      "Sol",
      "La",
      "Ti",
    ],
    rare: [
      "Rare Tweedle",
      "Rare Potbelly",
      "Rare Toe Jammer",
      "Rare Mammott",
      "Rare Dandidoo",
      "Rare Quibble",
      "Rare Pango",
      "Rare Oaktopus",
      "Rare Furcorn",
      "Rare Maw",
      "Rare Spunge",
      "Rare Thumpies",
      "Rare Congle",
      "Rare Bowgart",
      "Rare Deedge",
      "Rare Grumpyre",
      "Rare Wubbox",
      "Rare Yool",
      "Rare Strombonin",
    ],
    epic: [
      "Epic Tweedle",
      "Epic Potbelly",
      "Epic Toe Jammer",
      "Epic Mammott",
      "Epic Dandidoo",
      "Epic Quibble",
      "Epic Pango",
      "Epic Oaktopus",
      "Epic Furcorn",
      "Epic Maw",
      "Epic Spunge",
      "Epic Thumpies",
      "Epic Congle",
      "Epic Bowgart",
      "Epic Deedge",
      "Epic Grumpyre",
      "Epic Cold Wubbox",
      "Epic Yool",
      "Epic Strombonin",
    ],
  },
  air: {
    common: [
      "Tweedle",
      "Noggin",
      "Toe Jammer",
      "Mammott",
      "Cybop",
      "Quibble",
      "Pango",
      "Fwog",
      "Drumpler",
      "Maw",
      "Scups",
      "PomPom",
      "Congle",
      "T Rox",
      "Riff",
      "Reebro",
      "Wubbox",
      "Parlsona",
      "Stoowarb",
      "Schmoochle",
      "Hoola",
      "Yawstrich",
      "Do",
      "Re",
      "Mi",
      "Fa",
      "Sol",
      "La",
      "Ti",
    ],
    rare: [
      "Rare Tweedle",
      "Rare Noggin",
      "Rare Toe Jammer",
      "Rare Mammott",
      "Rare Cybop",
      "Rare Quibble",
      "Rare Pango",
      "Rare Fwog",
      "Rare Drumpler",
      "Rare Maw",
      "Rare Scups",
      "Rare PomPom",
      "Rare Congle",
      "Rare T Rox",
      "Rare Riff",
      "Rare Reebro",
      "Rare Wubbox",
      "Rare Schmoochle",
      "Rare Hoola",
      "Rare Yawstrich",
    ],
    epic: [
      "Epic Tweedle",
      "Epic Noggin",
      "Epic Toe Jammer",
      "Epic Mammott",
      "Epic Cybop",
      "Epic Quibble",
      "Epic Pango",
      "Epic Fwog",
      "Epic Drumpler",
      "Epic Maw",
      "Epic Scups",
      "Epic PomPom",
      "Epic Congle",
      "Epic T Rox",
      "Epic Riff",
      "Epic Reebro",
      "Epic Air Wubbox",
      "Epic Schmoochle",
      "Epic Hoola",
      "Epic Yawstrich",
    ],
  },
  water: {
    common: [
      "Tweedle",
      "Potbelly",
      "Noggin",
      "Toe Jammer",
      "Dandidoo",
      "Cybop",
      "Quibble",
      "Shrubb",
      "Oaktopus",
      "Fwog",
      "Reedling",
      "Spunge",
      "Scups",
      "Pummel",
      "Shellbeat",
      "Jeeode",
      "Wubbox",
      "Maggpi",
      "Parlsona",
      "Blabbit",
      "Anglow",
      "Do",
      "Re",
      "Mi",
      "Fa",
      "Sol",
      "La",
      "Ti",
    ],
    rare: [
      "Rare Tweedle",
      "Rare Potbelly",
      "Rare Noggin",
      "Rare Toe Jammer",
      "Rare Dandidoo",
      "Rare Cybop",
      "Rare Quibble",
      "Rare Shrubb",
      "Rare Oaktopus",
      "Rare Fwog",
      "Rare Reedling",
      "Rare Spunge",
      "Rare Scups",
      "Rare Pummel",
      "Rare Shellbeat",
      "Rare Jeeode",
      "Rare Wubbox",
      "Rare Maggpi",
      "Rare Parlsona",
      "Rare Blabbit",
      "Rare Anglow",
    ],
    epic: [
      "Epic Tweedle",
      "Epic Potbelly",
      "Epic Noggin",
      "Epic Toe Jammer",
      "Epic Dandidoo",
      "Epic Cybop",
      "Epic Quibble",
      "Epic Shrubb",
      "Epic Oaktopus",
      "Epic Fwog",
      "Epic Reedling",
      "Epic Spunge",
      "Epic Scups",
      "Epic Pummel",
      "Epic Shellbeat",
      "Epic Jeeode",
      "Epic Water Wubbox",
      "Epic Maggpi",
      "Epic Parlsona",
      "Epic Blabbit",
      "Epic Anglow",
    ],
  },
  earth: {
    common: [
      "Tweedle",
      "Potbelly",
      "Noggin",
      "Mammott",
      "Dandidoo",
      "Cybop",
      "Pango",
      "Shrubb",
      "Furcorn",
      "Drumpler",
      "Reedling",
      "Thumpies",
      "PomPom",
      "Clamble",
      "Quarrister",
      "Humbug",
      "Wubbox",
      "Tawkerr",
      "Stoowarb",
      "Hoola",
      "Hyehehe",
      "Do",
      "Re",
      "Mi",
      "Fa",
      "Sol",
      "La",
      "Ti",
    ],
    rare: [
      "Rare Tweedle",
      "Rare Potbelly",
      "Rare Noggin",
      "Rare Mammott",
      "Rare Dandidoo",
      "Rare Cybop",
      "Rare Pango",
      "Rare Shrubb",
      "Rare Furcorn",
      "Rare Drumpler",
      "Rare Reedling",
      "Rare Thumpies",
      "Rare PomPom",
      "Rare Clamble",
      "Rare Quarrister",
      "Rare Humbug",
      "Rare Hoola",
      "Rare Hyehehe",
      "Rare Wubbox",
    ],
    epic: [
      "Epic Tweedle",
      "Epic Potbelly",
      "Epic Noggin",
      "Epic Mammott",
      "Epic Dandidoo",
      "Epic Cybop",
      "Epic Pango",
      "Epic Shrubb",
      "Epic Furcorn",
      "Epic Drumpler",
      "Epic Reedling",
      "Epic Thumpies",
      "Epic PomPom",
      "Epic Clamble",
      "Epic Quarrister",
      "Epic Humbug",
      "Epic Hoola",
      "Epic Hyehehe",
      "Epic Earth Wubbox",
    ],
  },
  haven: {
    common: [
      "Tweedle",
      "Potbelly",
      "Noggin",
      "Kayna",
      "Dandidoo",
      "Cybop",
      "Glowl",
      "Shrubb",
      "Flowah",
      "Stogg",
      "Reedling",
      "Barrb",
      "Floogull",
      "Repatillo",
      "Tring",
      "Candelavra",
      "Wubbox",
      "Gobbleygourd",
      "Buzzinga",
      "Do",
      "Re",
      "Mi",
      "Fa",
      "Sol",
      "La",
      "Ti",
    ],
    rare: [
      "Rare Tweedle",
      "Potbelly",
      "Rare Noggin",
      "Rare Kayna",
      "Rare Dandidoo",
      "Rare Cybop",
      "Rare Glowl",
      "Rare Shrubb",
      "Rare Flowah",
      "Rare Stogg",
      "Rare Reedling",
      "Rare Barrb",
      "Rare Floogull",
      "Rare Repatillo",
      "Rare Tring",
      "Rare Candelavra",
      "Rare Wubbox",
      "Rare Gobbleygourd",
      "Rare Buzzinga",

    ],
    epic: [
      "Epic Tweedle",
      "Epic Potbelly",
      "Epic Noggin",
      "Epic Kayna",
      "Epic Dandidoo",
      "Epic Cybop",
      "Epic Glowl",
      "Epic Shrubb",
      "Epic Flowah",
      "Epic Stogg",
      "Epic Reedling",
      "Epic Barrb",
      "Epic Floogull",
      "Epic Repatillo",
      "Epic Tring",
      "Epic Candelavra",
      "Epic Fire Haven Wubbox",
      "Epic Gobbleygourd",
      "Epic Buzzinga",

    ],
  },
  oasis: {
    common: [
      "Tweedle",
      "Toe Jammer",
      "Mammott",
      "Kayna",
      "Quibble",
      "Glowl",
      "Maw",
      "Boskus",
      "Congle",
      "Whaddle",
      "Woolabee",
      "Wynq",
      "Sneyser",
      "Mimic",
      "Wubbox",
      "Gobbleygourd",
      "Spurrit",
      "Cherubble",
      "Do",
      "Re",
      "Mi",
      "Fa",
      "Sol",
      "La",
      "Ti",
    ],
    rare: [
      "Rare Tweedle",
      "Rare Toe Jammer",
      "Rare Mammott",
      "Rare Kayna",
      "Rare Quibble",
      "Rare Glowl",
      "Rare Maw",
      "Rare Boskus",
      "Rare Congle",
      "Rare Whaddle",
      "Rare Woolabee",
      "Rare Wynq",
      "Rare Sneyser",
      "Rare Mimic",
      "Rare Wubbox",
      "Rare Gobbleygourd",
      "Rare Spurrit",
      "Rare Cherubble",
    ],
    epic: [
      "Epic Tweedle",
      "Epic Toe Jammer",
      "Epic Mammott",
      "Epic Kayna",
      "Epic Quibble",
      "Epic Glowl",
      "Epic Maw",
      "Epic Boskus",
      "Epic Congle",
      "Epic Whaddle",
      "Epic Woolabee",
      "Epic Wynq",
      "Epic Sneyser",
      "Epic Mimic",
      "Epic Wubbox",
      "Epic Gobbleygourd",
      "Epic Spurrit",
      "Epic Cherubble",
    ]
  },
  light: {
    common: [
      "Mammott",
      "Kayna",
      "Fluoress",
      "Furcorn",
      "Flowah",
      "Gob",
      "Boskus",
      "Bulbo",
      "Pluckbill",
      "Sooza",
      "Spytrap",
      "TooToo",
      "Fiddlement",
      "Blow t",
      "Yelmut",
      "Tiawa",
      "Drummidary",
      "Phosphoran Phlox",
      "Whiz bang",
      "Do",
      "Re",
      "Mi",
      "Fa",
      "Sol",
      "La",
      "Ti",
    ],
    rare: [
      "Rare Mammott",
      "Rare Kayna",
      "Rare Fluoress",
      "Rare Furcorn",
      "Rare Flowah",
      "Rare Gob",
      "Rare Boskus",
      "Rare Bulbo",
      "Rare Pluckbill",
      "Rare Sooza",
      "Rare TooToo",
      "Rare Spytrap",
      "Rare Fiddlement",
      "Rare Blow t",
      "Rare Yelmut",
      "Rare Tiawa",
      "Rare Drummidary",
      // "Rare Phosphoran Phlox",
      "Rare Whiz bang",
    ],
    epic: [
      "Epic Mammott",
      "Epic Kayna",
      "Epic Fluoress",
      "Epic Furcorn",
      "Epic Flowah",
      "Epic Gob",
      "Epic Boskus",
      "Epic Bulbo",
      "Epic Pluckbill",
      "Epic Sooza",
      "Epic TooToo",
      "Epic Spytrap",
      "Epic Fiddlement",
      "Epic Blow t",
      "Epic Yelmut",
      "Epic Tiawa",
      "Epic Drummidary",
      // "Epic Phosphoran Phlox",
      "Epic Whiz bang",
    ]
  },
  psychic: {
    common: [
      "Potbelly",
      "Toe Jammer",
      "Kayna",
      "Theremind",
      "Oaktopus",
      "Flowah",
      "Bonkers",
      "Phangler",
      "Poppette",
      "Yuggler",
      "Rootitoot",
      "Tapricorn",
      "Rooba",
      "Periscorp",
      "Gloptic",
      "Edamimi",
      "Bisonorus",
      "Bowhead",
      "Hairionette",
      "Clc",
      "Boo qwurm",
      "Do",
      "Re",
      "Mi",
      "Fa",
      "Sol",
      "La",
      "Ti"
    ],
    rare: [
      "Rare Potbelly",
      "Rare Toe Jammer",
      "Rare Kayna",
      "Rare Theremind",
      "Rare Oaktopus",
      "Rare Flowah",
      "Rare Bonkers",
      "Rare Phangler",
      "Rare Poppette",
      "Rare Yuggler",
      "Rare Rootitoot",
      "Rare Tapricorn",
      "Rare Rooba",
      "Rare Periscorp",
      "Rare Gloptic",
      "Rare Edamimi",
      "Rare Bisonorus",
      "Rare Bowhead",
      "Rare Hairionette",
      // "Rare Cruv laaphtian Crocus",
      "Rare Boo qwurm"
    ],
    epic: [
      "Epic Toe Jammer",
      "Epic Potbelly",
      "Epic Kayna",
      "Epic Theremind",
      "Epic Oaktopus",
      "Epic Flowah",
      "Epic Bonkers",
      "Epic Phangler",
      "Epic Poppette",
      "Epic Yuggler",
      "Epic Rootitoot",
      "Epic Tapricorn",
      "Epic Rooba",
      "Epic Periscorp",
      "Epic Gloptic",
      "Epic Edamimi",
      "Epic Bisonorus",
      "Epic Bowhead",
      "Epic Hairionette",
      // "Epic Cruv laaphtian Crocus",
      "Epic Boo qwurm"
    ]
  },
  faerie: {
    common: [
      "Noggin",
      "Mammott",
      "Kayna",
      "Floot Fly",
      "Drumpler",
      "Stogg",
      "HippityHop",
      "Boskus",
      "Squot",
      "Wimmzies",
      "Ziggurab",
      "Cantorell",
      "Bridg it",
      "Clavi Gnat",
      "Pladdie",
      "Krillby",
      "Pongping",
      "Tuskski",
      "Owlesque",
      "Ffidyll",
      "Do",
      "Re",
      "Mi",
      "Fa",
      "Sol",
      "La",
      "Ti"
    ],
    rare: [
      "Rare Noggin",
      "Rare Mammott",
      "Rare Kayna",
      "Rare Floot Fly",
      "Rare Drumpler",
      "Rare Stogg",
      "Rare HippityHop",
      "Rare Boskus",
      "Rare Squot",
      "Rare Wimmzies",
      "Rare Ziggurab",
      "Rare Cantorell",
      "Rare Bridg it",
      "Rare Clavi Gnat",
      "Rare Pladdie",
      "Rare Krillby",
      "Rare PongPing",
      "Rare Tuskski",
      // "Rare Owlesque",
      "Rare Ffidyll",

    ],
    epic: [
      "Epic Noggin",
      "Epic Mammott",
      "Epic Kayna",
      "Epic Floot Fly",
      "Epic Drumpler",
      "Epic Stogg",
      "Epic HippityHop",
      "Epic Boskus",
      "Epic Squot",
      "Epic Wimmzies",
      "Epic Ziggurab",
      "Epic Cantorell",
      "Epic Bridg it",
      "Epic Clavi Gnat",
      "Epic Pladdie",
      "Epic Krillby",
      "Epic PongPing",
      "Epic Tuskski",
      // "Epic Owlesque",
      "Epic Ffidyll",

    ]
  },
  bone: {
    common: [
      "Noggin",
      "Toe Jammer",
      "Kayna",
      "Clackula",
      "Fwog",
      "Stogg",
      "Peckidna",
      "Phangler",
      "Denchuhs",
      "Hawlo",
      "Thrumble",
      "Withur",
      "Uuduk",
      "Banjaw",
      "Plinkajou",
      "Flum Ox",
      "Incisaur",
      "Gnarls",
      "Arcorina",
      "Clavavera",
      "Do",
      "Re",
      "Mi",
      "Fa",
      "Sol",
      "La",
      "Ti"
    ],
    rare: [
      "Rare Noggin",
      "Rare Toe Jammer",
      "Rare Kayna",
      "Rare Clackula",
      "Rare Fwog",
      "Rare Stogg",
      "Rare Peckidna",
      "Rare Phangler",
      "Rare Denchuhs",
      "Rare Hawlo",
      "Rare Thrumble",
      "Rare Withur",
      "Rare Uuduk",
      "Rare Banjaw",
      "Rare Plinkajou",
      "Rare Flum Ox",
      "Rare Incisaur",
      "Rare Gnarls",
      // "Rare Arcorina",
      "Rare Clavavera",
    ],
    epic: [
      "Epic Noggin",
      "Epic Toe Jammer",
      "Epic Kayna",
      "Epic Clackula",
      "Epic Fwog",
      "Epic Stogg",
      "Epic Peckidna",
      "Epic Phangler",
      "Epic Denchuhs",
      "Epic Hawlo",
      "Epic Thrumble",
      "Epic Withur",
      "Epic Uuduk",
      "Epic Banjaw",
      "Epic Plinkajou",
      "Epic Flum Ox",
      "Epic Incisaur",
      "Epic Gnarls",
      // "Epic Arcorina",
      "Epic Clavavera",
    ]
  },
  shugabush: {
    common: [
      "Potbelly",
      "Mammott",
      "Quibble",
      "Oaktopus",
      "Furcorn",
      "PomPom",
      "Deedge",
      "Shugabush",
      "Shugarock",
      "Shugabass",
      "Shugajo",
      "Shugabeats",
      "Shugabuzz",
      "Shugitar",
      "Shugavox",
      "Viveine",
    ],
    rare: [
      "Rare Potbelly",
      "Rare Mammott",
      "Rare Quibble",
      "Rare Oaktopus",
      "Rare Furcorn",
      "Rare PomPom",
      "Rare Deedge",
      "Rare Viveine",
    ],
    epic: [
      "Epic Potbelly",
      "Epic Mammott",
      "Epic Quibble",
      "Epic Oaktopus",
      "Epic Furcorn",
      "Epic PomPom",
      "Epic Deedge",
      "Epic Viveine",
    ]
  },
  ethereal: {
    common: [
      "Ghazt",
      "Grumpye",
      "Reebro",
      "Jeeode",
      "Humbug",
      "Whisp",
      "Nebulob",
      "Sox",
      "Jellbilly",
      "Arackulele",
      "Boodoo",
      "Kazilleon",
      "Bellowfish",
      "Dragong",
      "Fung Pray",
      "Wubbox",
      "Monculus",
      "Do",
      "Re",
      "Mi",
      "Fa",
      "Sol",
      "La",
      "Ti"
    ],
    rare: [
      "Rare Ghazt",
      "Rare Grumpye",
      "Rare Reebro",
      "Rare Jeeode",
      "Rare Humbug",
      "Rare Whisp",
      "Rare Nebulob",
      "Rare Sox",
      "Rare Jellbilly",
      "Rare Arackulele",
      "Rare Boodoo",
      "Rare Kazilleon",
      "Rare Bellowfish",
      "Rare Dragong",
      "Rare Fung Pray",
      "Rare Wubbox",
      "Rare Monculus",
    ],
    epic: [
      "Epic Ghazt",
      "Epic Grumpye",
      "Epic Reebro",
      "Epic Jeeode",
      "Epic Humbug",
      "Epic Whisp",
      "Epic Nebulob",
      "Epic Sox",
      "Epic Jellbilly",
      "Epic Arackulele",
      "Epic Boodoo",
      "Epic Kazilleon",
      "Epic Bellowfish",
      "Epic Dragong",
      "Epic Fung Pray",
      "Epic Wubbox",
      "Epic Monculus",
    ]
  },
  mythical: {
    common: [
      "Cataliszt",
      "G joob",
      "Strombonin",
      "Yawstrich",
      "Anglow",
      "Hyehehe",
      "Buzzinga",
      "Cherubble",
      "Bleatnik",
      "Cranchee",
      "Sporerow",
      "Pinghound",
      "Wheezel",
      "Knurv",
      "shLep"
    ],
    rare: [
      "Rare Cataliszt",
      "Rare G joob",
      "Rare Strombonin",
      "Rare Yawstrich",
      "Rare Anglow",
      "Rare Hyehehe",
      "Rare Buzzinga",
      "Rare Cherubble",
      "Rare Bleatnik",
      "Rare Cranchee",
      "Rare Sporerow",
      "Rare Pinghound",
      "Rare Wheezel",
      "Rare Knurv",
      "Rare shLep"
    ],
    epic: [
      // "Epic Cataliszt",
      "Epic G joob",
      "Epic Strombonin",
      "Epic Yawstrich",
      "Epic Anglow",
      "Epic Hyehehe",
      "Epic Buzzinga",
      "Epic Cherubble",
      "Epic Bleatnik",
      // "Epic Cranchee",
      // "Epic Sporerow",
      // "Epic Pinghound",
      // "Epic Wheezel",
      // "Epic Knurv",
      // "Epic shLep"
    ]
  },
  magical: {
    common: [
      "Theremind",
      "Clackula",
      "Fluoress",
      "Floot Fly",
      "Xyster",
      "Cahoot",
      "Deja Jin",
      "Roarick",
      "Osstax",
      "Knucklehead",
      "G'day",
      "Laraluss",
      "Frondley",
      "Mushaboom",
      "Enchantling",
      "Carillong",
      "Do",
      "Re",
      "Mi",
      "Fa",
      "Sol",
      "La",
      "Ti"

    ],
    rare: [
      "Rare Theremind",
      "Rare Clackula",
      "Rare Fluoress",
      "Rare Floot Fly",
      "Rare Xyster",
      "Rare Cahoot",
      "Rare Deja Jin",
      "Rare Roarick",
      "Rare Osstax",
      "Rare Knucklehead",
      "Rare G'day",
      "Rare Laraluss",
      "Rare Frondley",
      "Rare Mushaboom",
      // "Rare Enchantling",
      "Rare Carillong",
    ],
    epic: [
      // "Epic Theremind",
      // "Epic Clackula",
      // "Epic Fluoress",
      // "Epic Floot Fly",
      // "Epic Xyster",
      // "Epic Cahoot",
      // "Epic Deja Jin",
      // "Epic Roarick",
      // "Epic Osstax",
      // "Epic Knucklehead",
      // "Epic G'day",
      // "Epic Laraluss",
      // "Epic Frondley",
      // "Epic Mushaboom",
      // "Epic Enchantling",
      "Epic Carillong",
    ]
  },
  seasonal: {
    common: [
      "Punkleton",
      "Yool",
      "Schmoochle",
      "Blabbit",
      "Hoola",
      "Gobbleygourd",
      "Clavavera",
      "Viveine",
      "Jam Boree",
      "Carillong",
      "Whiz bang",
      "Monculus",
      "Ffidyll",
      "Boo'qwurm",
      "Spurrit"
    ],
    rare: [
      "Rare Punkleton",
      "Rare Yool",
      "Rare Schmoochle",
      "Rare Blabbit",
      "Rare Hoola",
      "Rare Gobbleygourd",
      "Rare Clavavera",
      "Rare Viveine",
      "Rare Jam Boree",
      "Rare Carillong",
      "Rare Whiz bang",
      "Rare Monculus",
      "Rare Ffidyll",
      "Rare Boo'qwurm",
      "Rare Spurrit"
    ],
    epic: [
      "Epic Punkleton",
      "Epic Yool",
      "Epic Schmoochle",
      "Epic Blabbit",
      "Epic Hoola",
      "Epic Gobbleygourd",
      "Epic Clavavera",
      "Epic Viveine",
      "Epic Jam Boree",
      "Epic Carillong",
      "Epic Whiz bang",
      "Epic Monculus",
      "Epic Ffidyll",
      "Epic Boo'qwurm",
      "Epic Spurrit"
    ]
  },
  amber: {
    common: [
      "Kayna",
      "Glowl",
      "Flowah",
      "Stogg",
      "Phangler",
      "Boskus",
      "Barrb",
      "Floogull",
      "Whaddle",
      "Woolabee",
      "Repatillo",
      "Rootitoot",
      "Sooza",
      "Thrumble",
      "Ziggurab",
      "Wynq",
      "Tring",
      "Bisonorus",
      "Yelmut",
      "Flum Ox",
      "Krillby",
      "Sneyser",
      "Edamimi",
      "Pongping",
      "Incisaur",
      "Tiawa",
      "Candelavra",
      "Drummidary",
      "Bowhead",
      "Tuskski",
      "Gnarls",
      "Viveine"
    ],
    rare: [
      "Rare Kayna",
      "Rare Glowl",
      "Rare Flowah",
      "Rare Stogg",
      "Rare Phangler",
      "Rare Boskus",
      "Rare Barrb",
      "Rare Floogull",
      "Rare Whaddle",
      "Rare Woolabee",
      "Rare Repatillo",
      "Rare Rootitoot",
      "Rare Sooza",
      "Rare Thrumble",
      "Rare Ziggurab",
      "Rare Wynq",
      "Rare Tring",
      "Rare Bisonorus",
      "Rare Yelmut",
      "Rare Flum Ox",
      "Rare Krillby",
      "Rare Sneyser",
      "Rare Edamimi",
      "Rare PongPing",
      "Rare Incisaur",
      "Rare Tiawa",
      "Rare Candelavra",
      "Rare Drummidary",
      "Rare Bowhead",
      "Rare Tuskski",
      "Rare Gnarls",
      "Rare Viveine"
    ],
    epic: [
      "Epic Kayna",
      "Epic Glowl",
      "Epic Flowah",
      "Epic Stogg",
      "Epic Phangler",
      "Epic Boskus",
      "Epic Barrb",
      "Epic Floogull",
      "Epic Whaddle",
      "Epic Woolabee",
      "Epic Repatillo",
      "Epic Rootitoot",
      "Epic Sooza",
      "Epic Thrumble",
      "Epic Ziggurab",
      "Epic Wynq",
      "Epic Tring",
      "Epic Bisonorus",
      "Epic Yelmut",
      "Epic Flum Ox",
      "Epic Krillby",
      "Epic Sneyser",
      "Epic Edamimi",
      "Epic PongPing",
      "Epic Incisaur",
      "Epic Tiawa",
      "Epic Candelavra",
      // "Epic Drummidary",
      // "Epic Bowhead",
      // "Epic Tuskski",
      // "Epic Gnarls",
      "Epic Viveine"
    ]
  },
  wublin: {
    common: [
      "Brump",
      "Zynth",
      "Poewk",
      "Thwok",
      "Dwumrohl",
      "Zuuker",
      "Screemu",
      "Tympa",
      "Dermit",
      "Gheegur",
      "Whajje",
      "Creepuscule",
      "Blipsqueak",
      "Scargo",
      "Astropod",
      "Pixolotl",
      "Bona Petite",
      "Maulch",
      "Fleechwurm",
      "Wubbox",
      "Monculus"
    ],
    rare: [
      "Rare Brump",
      "Rare Zynth",
      "Rare Poewk",
      "Rare Thwok",
      "Rare Dwumrohl",
      "Rare Zuuker",
      "Rare Screemu",
      "Rare Tympa",
      "Rare Dermit",
      "Rare Gheegur",
      "Rare Whajje",
      "Rare Creepuscule",
      "Rare Blipsqueak",
      "Rare Scargo",
      "Rare Astropod",
      "Rare Pixolotl",
      "Rare Bona Petite",
      "Rare Maulch",
      "Rare Fleechwurm",
      "Rare Wubbox",
      "Rare Monculus"
    ],
    epic: [
      "Epic Brump",
      "Epic Zynth",
      "Epic Poewk",
      "Epic Thwok",
      "Epic Dwumrohl",
      "Epic Zuuker",
      // "Epic Screemu",
      "Epic Tympa",
      // "Epic Dermit",
      // "Epic Gheegur",
      // "Epic Whajje",
      // "Epic Creepuscule",
      // "Epic Blipsqueak",
      // "Epic Scargo",
      // "Epic Astropod",
      // "Epic Pixolotl",
      // "Epic Bona Petite",
      // "Epic Maulch",
      // "Epic Fleechwurm",
      // "Epic Wubbox",
      "Epic Monculus"
    ]
  },
  celestial: {
    common: [
      "Hornacle",
      "Furnoss",
      "Galvana",
      "Blasoom",
      "Syncopite",
      "Vhamp",
      "Galvana",
      "Scaratar",
      "Loodvigg",
      "Torrt",
      "Pilxie",
      "Attmoz",
      "Adult Hornacle",
      "Adult Furnoss",
      "Adult Galvana",
      "Adult Blasoom",
      "Adult Syncopite",
      "Adult Vhamp",
      "Adult Galvana",
      "Adult Scaratar",
      "Adult Loodvigg",
      "Adult Torrt",
      "Adult Pilxie",
      "Adult Attmoz",
    ]
  },
  wethereal: {
    common: [
      "Yooreek",
      "Meebkin",
      "Blarret",
      "Gaddzooks",
      "Auglur",
      "Flasque",
      "Nitebear",
      "Piplash",
      "X'rt",
      "Teeter Tauter",
      "Whaill",
      "Vhenshun",
      "Pentumbra",
      "Rhysmuth",
      "Oogiddy",
      "BeMeebEth"
    ],
    rare: [
      "Rare Yooreek",
      "Rare Meebkin",
      "Rare Blarret",
      "Rare Gaddzooks",
      "Rare Auglur"
    ]
  },
  plasma: {
    common: [
      "Ghazt",
      "Whisp",
      "Nebulob",
      "Sox",
      "Jellbilly",
      "Yooreek",
      "Meebkin",
      "Blarret",
      "Gaddzooks",
      "Auglur",
      "Flasque",
      "Whaill",
      "Lowb"
    ],
    rare: [
      "Rare Ghazt",
      "Rare Whisp",
      "Rare Nebulob",
      "Rare Sox",
      "Rare Jellbilly",
    ],
    epic: [
      "Epic Ghazt",
      "Epic Whisp",
      "Epic Nebulob",
      "Epic Sox",
      "Epic Jellbilly",
    ]
  },
  mech: {
    common: [
      "Reebro",
      "Nebulob",
      "Arackulele",
      "Bellowfish",
      "Dragong",
      "Yooreek",
      "Gaddzooks",
      "Auglur",
      "Nitebear",
      "Teeter Tauter",
      "Vhenshun",
      "Bogle"
    ],
    rare: [
      "Rare Reebro",
      "Rare Nebulob",
      "Rare Arackulele",
      "Rare Bellowfish",
      "Rare Dragong",
      "Rare Nitebear"
    ],
    epic: [
      "Epic Reebro",
      "Epic Nebulob",
      "Epic Arackulele",
      "Epic Bellowfish",
      "Epic Dragong",
    ]
  },
  gold: {
    common: [
      "Tweedle",
      "Potbelly",
      "Noggin",
      "Toe Jammer",
      "Mammott",
      "Dandidoo",
      "Cybop",
      "Quibble",
      "Pango",
      "Shrubb",
      "Oaktopus",
      "Furcorn",
      "Fwog",
      "Maw",
      "Reedling",
      "Spunge",
      "Thumpies",
      "Scups",
      "PomPom",
      "Congle",
      "Pummel",
      "Clamble",
      "Bowgart",
      "T Rox",
      "Shellbeat",
      "Quarrister",
      "Deedge",
      "Riff",
      "Entbrat",
      "Wubbox",
      "Shugabush",
      "Punkleton",
      "Yool",
      "Schmoochle",
      "Blabbit",
      "Hoola",
      "Jam Boree"
    ],
    rare: [
      "Rare Tweedle",
      "Rare Potbelly",
      "Rare Noggin",
      "Rare Toe Jammer",
      "Rare Mammott",
      "Rare Dandidoo",
      "Rare Cybop",
      "Rare Quibble",
      "Rare Pango",
      "Rare Shrubb",
      "Rare Oaktopus",
      "Rare Furcorn",
      "Rare Fwog",
      "Rare Maw",
      "Rare Reedling",
      "Rare Spunge",
      "Rare Thumpies",
      "Rare Scups",
      "Rare PomPom",
      "Rare Congle",
      "Rare Pummel",
      "Rare Clamble",
      "Rare Bowgart",
      "Rare T Rox",
      "Rare Shellbeat",
      "Rare Quarrister",
      "Rare Deedge",
      "Rare Riff",
      "Rare Entbrat",
      "Rare Wubbox",
      "Rare Shugabush",
      "Rare Punkleton",
      "Rare Yool",
      "Rare Schmoochle",
      "Rare Blabbit",
      "Rare Hoola",
      "Rare Jam Boree"
    ],
    epic: [
      "Epic Tweedle",
      "Epic Potbelly",
      "Epic Noggin",
      "Epic Toe Jammer",
      "Epic Mammott",
      "Epic Dandidoo",
      "Epic Cybop",
      "Epic Quibble",
      "Epic Pango",
      "Epic Shrubb",
      "Epic Oaktopus",
      "Epic Furcorn",
      "Epic Fwog",
      "Epic Maw",
      "Epic Reedling",
      "Epic Spunge",
      "Epic Thumpies",
      "Epic Scups",
      "Epic PomPom",
      "Epic Congle",
      "Epic Pummel",
      "Epic Clamble",
      "Epic Bowgart",
      "Epic T Rox",
      "Epic Shellbeat",
      "Epic Quarrister",
      "Epic Deedge",
      "Epic Riff",
      "Epic Entbrat",
      "Epic Wubbox",
      "Epic Shugabush",
      "Epic Punkleton",
      "Epic Yool",
      "Epic Schmoochle",
      "Epic Blabbit",
      "Epic Hoola",
      "Epic Jam Boree"
    ]
  },
  nexus: {
    common: [
      "Theremind",
      "Clackula",
      "Fluoress",
      "Floot Fly",
      "Bonkers",
      "Gob",
      "Peckidna",
      "HippityHop",
      "Poppette",
      "Denchuhs",
      "Bulbo",
      "Squot",
      "Yuggler",
      "Hawlo",
      "Pluckbill",
      "Wimmzies",
      "Tapricorn",
      "Spytrap",
      "Rooba",
      "TooToo",
      "Withur",
      "Cantorell",
      "Uuduk",
      "Bridg it",
      "Periscorp",
      "Banjaw",
      "Fiddlement",
      "Clavi Gnat",
      "Gloptic",
      "Blow t",
      "Plinkajou",
      "Pladdie"
    ],
    rare: [
      "Rare Theremind",
      "Rare Clackula",
      "Rare Fluoress",
      "Rare Floot Fly",
      "Rare Bonkers",
      "Rare Gob",
      "Rare Peckidna",
      "Rare HippityHop",
      "Rare Poppette",
      "Rare Denchuhs",
      "Rare Bulbo",
      "Rare Squot",
      "Rare Yuggler",
      "Rare Hawlo",
      "Rare Pluckbill",
      "Rare Wimmzies",
      "Rare Tapricorn",
      "Rare Spytrap",
      "Rare Rooba",
      "Rare TooToo",
      "Rare Withur",
      "Rare Cantorell",
      "Rare Uuduk",
      "Rare Bridg it",
      "Rare Periscorp",
      "Rare Banjaw",
      "Rare Fiddlement",
      "Rare Clavi Gnat",
      "Rare Gloptic",
      "Rare Blow t",
      "Rare Plinkajou",
      "Rare Pladdie"
    ]
  },
  paironormal: {
    common: [
      "Hairionette",
      "Owlesque",
      "Arcorina",
      "Shhimmer",
      "Scallyrags",
      "Dakktyl",
      "Jerm"
    ]
  }
};

const islandKeyMap = {
  "Plant Island": "plant",
  "Cold Island": "cold",
  "Air Island": "air",
  "Water Island": "water",
  "Earth Island": "earth",
  "Haven": "haven",
  "Oasis": "oasis",
  "Light Island": "light",
  "Psychic Island": "psychic",
  "Faerie Island": "faerie",
  "Bone Island": "bone",
  "Shugabush Island": "shugabush",
  "Ethereal Island": "ethereal",
  "Mythical Island": "mythical",
  "Magical Sanctum": "magical_sanctum",
  "Seasonal Shanty": "seasonal",
  "Amber Island": "amber",
  "Wublin Island": "wublin",
  "Celestial Island": "celestial",
  "Ethereal Workshop": "ethereal_workshop",
  "Plasma Islet": "plasma",
  "Mech Islet": "mech",
  "Gold Island": "gold",
  "Magical Nexus": "nexus",
  "Paironormal Carnival": "paironormal"
};
function switchIslandSkin() {
  const islandImage = document.getElementById("islandImg");
  let islandName = document.getElementById("islandNameImg");
  const selectedIsland = islandDropdown.value;

  // Define skin sets by island
  const islandSkins = {
    plant: [
      allIslandSkins[0].src,
      allIslandSkins[1].src,
      allIslandSkins[2].src,
      "images/islands/Plant Island.png"
    ],
    cold: [
      allIslandSkins[3].src,
      allIslandSkins[4].src,
      allIslandSkins[5].src,
      "images/islands/Cold Island.png"
    ],
    air: [
      allIslandSkins[6].src,
      allIslandSkins[7].src,
      allIslandSkins[8].src,
      "images/islands/Air Island.png"
    ],
    water: [
      allIslandSkins[9].src,
      allIslandSkins[10].src,
      allIslandSkins[11].src,
      "images/islands/Water Island.png"
    ],
    earth: [
      allIslandSkins[12].src,
      allIslandSkins[13].src,
      allIslandSkins[14].src,
      "images/islands/Earth Island.png"
    ],
    haven: [
      allIslandSkins[15].src,
      "images/islands/Fire Haven Island.png"
    ],
    oasis: [
      allIslandSkins[16].src,
      "images/islands/Fire Oasis Island.png"
    ],
    light: [
      allIslandSkins[17].src,
      allIslandSkins[18].src,
      "images/islands/Light Island.png"
    ],
    psychic: [
      allIslandSkins[19].src,
      allIslandSkins[20].src,
      "images/islands/Psychic Island.png"
    ],
    faerie: [
      allIslandSkins[21].src,
      allIslandSkins[22].src,
      "images/islands/Faerie Island.png"
    ],
    bone: [
      allIslandSkins[23].src,
      allIslandSkins[24].src,
      "images/islands/Bone Island.png"
    ],
    ethereal: [
      allIslandSkins[25].src,
      "images/islands/Ethereal Island.png"
    ],
    "magical Sanctum": [
      allIslandSkins[26].src,
      "images/islands/Magical Sanctum Island.png"
    ],
    amber: [
      allIslandSkins[27].src,
      "images/islands/Amber Island.png"
    ],
    gold: [
      allIslandSkins[28].src,
      "images/islands/Gold Island.png"
    ],
    paironormal: [
      allIslandSkins[29].src,
      "images/islands/Paironormal Carnival - Major.png"
    ]
  };

  const islandTitles = {
    plant: [
      allIslandSkins[0].titleSrc,
      allIslandSkins[1].titleSrc,
      allIslandSkins[2].titleSrc,
      "images/Titles/Plant Island.png"
    ],
    cold: [
      allIslandSkins[3].titleSrc,
      allIslandSkins[4].titleSrc,
      allIslandSkins[5].titleSrc,
      "images/Titles/Cold Island.png"
    ],
    air: [
      allIslandSkins[6].titleSrc,
      allIslandSkins[7].titleSrc,
      allIslandSkins[8].titleSrc,
      "images/Titles/Air Island.png"
    ],
    water: [
      allIslandSkins[9].titleSrc,
      allIslandSkins[10].titleSrc,
      allIslandSkins[11].titleSrc,
      "images/Titles/Water Island.png"
    ],
    earth: [
      allIslandSkins[12].titleSrc,
      allIslandSkins[13].titleSrc,
      allIslandSkins[14].titleSrc,
      "images/Titles/Earth Island.png"
    ],
    haven: [
      allIslandSkins[15].titleSrc,
      "images/Titles/Fire Haven.png"
    ],
    oasis: [
      allIslandSkins[16].titleSrc,
      "images/Titles/Fire Oasis.png"
    ],
    light: [
      allIslandSkins[17].titleSrc,
      allIslandSkins[18].titleSrc,
      "images/Titles/Light Island.png"
    ],
    psychic: [
      allIslandSkins[19].titleSrc,
      allIslandSkins[20].titleSrc,
      "images/Titles/Psychic Island.png"
    ],
    faerie: [
      allIslandSkins[21].titleSrc,
      allIslandSkins[22].titleSrc,
      "images/Titles/Faerie Island.png"
    ],
    bone: [
      allIslandSkins[23].titleSrc,
      allIslandSkins[24].titleSrc,
      "images/Titles/Bone Island.png"
    ],
    ethereal: [
      allIslandSkins[25].titleSrc,
      "images/Titles/Ethereal Island.png"
    ],
    "magical Sanctum": [
      allIslandSkins[26].titleSrc,
      "images/Titles/Magical Sanctum.png"
    ],
    amber: [
      allIslandSkins[27].titleSrc,
      "images/Titles/Amber Island.png"
    ],
    gold: [
      allIslandSkins[28].titleSrc,
      "images/Titles/Gold Island.png"
    ],
    paironormal: [
      allIslandSkins[29].titleSrc,
      "images/Titles/Paironormal Carnival - Major.png"
    ]
  }

  // If the selected island has skins
  if (islandSkins[selectedIsland]) {
    islandImage.src = islandSkins[selectedIsland][skinCounter];
    islandName.src = islandTitles[selectedIsland][skinCounter];
    titleSkinCounter = (titleSkinCounter + 1) % islandTitles[selectedIsland].length;
    skinCounter = (skinCounter + 1) % islandSkins[selectedIsland].length;
    // console.log(islandName); 
  }
}

// Suggestions list
const suggestionsList = monsters.map((monster) => monster.name);
const searchMonsterInput = document.getElementById("Search_Monster");
const firstMonsterInput = document.getElementById("First_Monster");
const secondMonsterInput = document.getElementById("Second_Monster");
const suggestionsBox1 = document.getElementById("suggestions1");
const suggestionsBox2 = document.getElementById("suggestions2");
const suggestionsBox3 = document.getElementById("suggestions3");
const breedButton = document.getElementById("breedButton");
const imageContainer = document.getElementById("imageContainer");
const statsContainer = document.getElementById("statsContainer");
const combinationsContainer = document.getElementById("Search_Monster");
const resetButton = document.getElementById("resetButton");


// Create monster data map for easy access
const monsterData = Object.fromEntries(
  monsters.map((monster) => [
    monster.name,
    { image: monster.image, stats: monster.stats, audio: monster.audio },
  ])
);

function switchCostume(activeRarity) {
  // Normalize search query like your input handler does
  let query = searchMonsterInput.value.trim();
  if (!query) {
    console.warn("switchCostume: search box empty — aborting");
    return;
  }
  if (query.toLowerCase().startsWith("rare ")) query = query.slice(5);
  else if (query.toLowerCase().startsWith("epic ")) query = query.slice(5);
  // console.log("switchCostume: normalized query:", query);

  const monster = monsterCostumes.find(m => m.name === query);
  // console.log("switchCostume: monster lookup:", monster && monster.name);

  const img = imageContainer.querySelector(".monster-image");
  if (!img) {
    console.warn("No monster image found in container.");
    return;
  }

  // Try to infer rarity if missing
  if (!activeRarity) {
    activeRarity =
      img.dataset.currentActiveRarity ||
      imageContainer.dataset.currentActiveRarity ||
      (document.querySelector(".tab-button.active") &&
        document.querySelector(".tab-button.active").textContent.toLowerCase());
    // console.log("switchCostume: inferred activeRarity:", activeRarity);
  }

  if (!activeRarity) {
    console.warn("switchCostume: no activeRarity provided and could not infer it — aborting.");
    return;
  }

  const rarity = monster[activeRarity];
  console.log("switchCostume: rarity object:", rarity);

  if (!rarity || Object.keys(rarity).length === 0) {
    console.warn(`No costumes defined for ${activeRarity} of ${query}`);
    return;
  }

  const keys = Object.keys(rarity);
  const datasetKey = `currentCostumeIndex_${activeRarity}`;

  // Default image state = -1
  if (!img.dataset[datasetKey]) img.dataset[datasetKey] = "-1";
  let currentIndex = parseInt(img.dataset[datasetKey], 10);
  // console.log("switchCostume: currentIndex (before):", currentIndex, "available keys:", keys);

  currentIndex++;

  // Loop around (after last costume → back to default)
  if (currentIndex > keys.length - 1) currentIndex = -1;

  let newSrc;

  if (currentIndex === -1) {
    const baseFolder = "images/bm/";

    if (activeRarity === "rare" || activeRarity === "epic") {
      const rarityCapitalized = activeRarity.charAt(0).toUpperCase() + activeRarity.slice(1);
      newSrc = `${baseFolder}${rarityCapitalized} ${monster.name}.png`;
    } else {
      newSrc = `${baseFolder}${monster.name}.png`;
    }

    // console.log("switchCostume: reverted to default image ->", newSrc);
  } else {
    let folderPath = `images/Costumes/${monster.name}/`;
    if (activeRarity === "rare" || activeRarity === "epic") {
      folderPath += `${activeRarity.charAt(0).toUpperCase() + activeRarity.slice(1)}/`;
    }
    newSrc = `${folderPath}${rarity[keys[currentIndex]]}.png`;
    // console.log("switchCostume: setting img.src ->", newSrc);
  }

  img.src = newSrc;
  img.dataset[datasetKey] = String(currentIndex);
  img.dataset.currentActiveRarity = activeRarity;

  // console.log("<<< switchCostume finished. new dataset:", img.dataset);
}

// Function to clear all inputs and results
const resetAll = () => {
  // Clear input fields
  searchMonsterInput.value = "";
  firstMonsterInput.value = "";
  secondMonsterInput.value = "";

  // Clear suggestions
  suggestionsBox1.innerHTML = "";
  suggestionsBox1.style.display = "none";
  suggestionsBox2.innerHTML = "";
  suggestionsBox2.style.display = "none";
  suggestionsBox3.innerHTML = "";
  suggestionsBox3.style.display = "none";

  // Clear results containers
  imageContainer.innerHTML = ""; // Clear previous images
  statsContainer.innerHTML = ""; // Clear previous stats

  // Enable all inputs
  firstMonsterInput.disabled = false;
  secondMonsterInput.disabled = false;
  searchMonsterInput.disabled = false;

  // Reset input styles
  firstMonsterInput.style.backgroundColor = "";
  secondMonsterInput.style.backgroundColor = "";
  searchMonsterInput.style.backgroundColor = "";
};

// Add event listener to the reset button
resetButton.addEventListener("click", resetAll);

// Function to show suggestions
let currentSuggestions = []; // Array to hold current suggestions

const showSuggestions = (input, suggestionsBox) => {
  const query = input.value.toLowerCase();
  suggestionsBox.innerHTML = ""; // Clear previous suggestions
  currentSuggestions = []; // Reset current suggestions
  if (query) {
    const filteredSuggestions = suggestionsList.filter((item) =>
      item.toLowerCase().includes(query)
    );
    if (filteredSuggestions.length > 0) {
      suggestionsBox.style.display = "block";
      const rect = input.getBoundingClientRect();
      suggestionsBox.style.left = `${rect.left}px`;
      suggestionsBox.style.top = `${rect.bottom + window.scrollY + 5}px`;

      filteredSuggestions.forEach((suggestion) => {
        currentSuggestions.push(suggestion); // Store current suggestions
        const div = document.createElement("div");
        div.textContent = suggestion;
        div.classList.add("suggestion-item");
        div.addEventListener("click", () => {
          input.value = suggestion;
          suggestionsBox.innerHTML = "";
          suggestionsBox.style.display = "none";
        });
        suggestionsBox.appendChild(div);
      });
    } else {
      suggestionsBox.style.display = "none";
    }
  } else {
    suggestionsBox.style.display = "none";
  }
};

// Add keydown event listener for selecting the first suggestion
firstMonsterInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && currentSuggestions.length > 0) {
    firstMonsterInput.value = currentSuggestions[0]; // Autofill with first suggestion
    suggestionsBox1.innerHTML = "";
    suggestionsBox1.style.display = "none"; // Hide suggestions
    event.preventDefault(); // Prevent default form submission if inside a form
  }
});

secondMonsterInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && currentSuggestions.length > 0) {
    secondMonsterInput.value = currentSuggestions[0]; // Autofill with first suggestion
    suggestionsBox2.innerHTML = "";
    suggestionsBox2.style.display = "none"; // Hide suggestions
    event.preventDefault(); // Prevent default form submission if inside a form
  }
});

searchMonsterInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && currentSuggestions.length > 0) {
    searchMonsterInput.value = currentSuggestions[0]; // Autofill with first suggestion
    suggestionsBox3.innerHTML = "";
    suggestionsBox3.style.display = "none"; // Hide suggestions
    event.preventDefault(); // Prevent default form submission if inside a form
  }
});

// Event listeners for suggestion boxes
firstMonsterInput.addEventListener("input", () =>
  showSuggestions(firstMonsterInput, suggestionsBox1)
);
secondMonsterInput.addEventListener("input", () =>
  showSuggestions(secondMonsterInput, suggestionsBox2)
);
searchMonsterInput.addEventListener("input", () =>
  showSuggestions(searchMonsterInput, suggestionsBox3)
);

// Hide suggestions when clicking outside
document.addEventListener("click", (event) => {
  if (
    !suggestionsBox1.contains(event.target) &&
    event.target !== firstMonsterInput
  ) {
    suggestionsBox1.innerHTML = "";
    suggestionsBox1.style.display = "none";
  }
  if (
    !suggestionsBox2.contains(event.target) &&
    event.target !== secondMonsterInput
  ) {
    suggestionsBox2.innerHTML = "";
    suggestionsBox2.style.display = "none";
  }
  if (
    !suggestionsBox3.contains(event.target) &&
    event.target !== searchMonsterInput
  ) {
    suggestionsBox3.innerHTML = "";
    suggestionsBox3.style.display = "none";
  }
});

firstMonsterInput.addEventListener("input", () =>
  showSuggestions(firstMonsterInput, suggestionsBox1)
);
secondMonsterInput.addEventListener("input", () =>
  showSuggestions(secondMonsterInput, suggestionsBox2)
);

// New function to display results with tabs
const searchBreedingCombinations = (monsterName) => {
  const combinations = Object.entries(breedingCombinations).filter(
    ([key, value]) => {
      return value.includes(monsterName);
    }
  );

  if (combinations.length > 0) {
    combinationsContainer.innerHTML = ""; // Clear previous results
    combinations.forEach(([combination, results]) => {
      const div = document.createElement("div");
      const monsterInfo = monsters.find(
        (monster) => monster.name === results[0]
      );

      let breedingTimeText = "Breeding Time not available";
      if (monsterInfo) {
        breedingTimeText = monsterInfo.stats.normal;
      }

      div.innerHTML = `${combination}: ${results.join(
        ", "
      )} - ${breedingTimeText}`;
      combinationsContainer.appendChild(div);
    });
  } else {
    combinationsContainer.innerHTML = "No breeding combinations found.";
  }
};

const resultContainer = document.createElement("div");
resultContainer.classList.add("result-container");

const blackBox = document.createElement("div");
blackBox.classList.add("black-box");

const resultText = document.createElement("div");
resultText.classList.add("result-text");

searchMonsterInput.addEventListener("input", () => { // This is what makes automatic search work. 

  const value = searchMonsterInput.value;

  if (!value) return;

  // Create a list of exceptions where the second word should not be capitalized
  const exceptions = ['joob'];  // Add only the second word as exceptions (e.g., "joob" but not "G joob")

  // Always capitalize the first letter
  let formatted = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();

  // Split the string into words
  let words = formatted.split(' ');

  // If there's a second word, handle it based on the exception list
  if (words.length > 1) {
    const secondWord = words[1].toLowerCase();  // Ensure the second word is lowercase for comparison

    // Check if the second word is in the exceptions list
    if (exceptions.includes(secondWord)) {
      // If it's an exception, keep it lowercase
      words[1] = secondWord;
    } else {
      // Otherwise, capitalize the second word
      words[1] = secondWord.charAt(0).toUpperCase() + secondWord.slice(1);
    }
  }

  // Join the words back into a string
  formatted = words.join(' ');

  // Only update the input if it changed
  if (formatted !== value) {
    const cursorPos = searchMonsterInput.selectionStart;
    searchMonsterInput.value = formatted;
    searchMonsterInput.setSelectionRange(cursorPos, cursorPos);
  }

  // Call restrictMonsterSearch() to check if it's a valid search term
  if (!restrictMonsterSearch()) return; // stops if no valid monster starts with input

  let rawQuery = searchMonsterInput.value.trim();
  let baseQuery = rawQuery;
  let defaultTab = "Normal";

  // Detect prefix for Rare/Epic
  if (rawQuery.toLowerCase().startsWith("rare ")) {
    baseQuery = rawQuery.slice(5);
    defaultTab = "Rare";
  } else if (rawQuery.toLowerCase().startsWith("epic ")) {
    baseQuery = rawQuery.slice(5);
    defaultTab = "Epic";
  }

  // Helper: get monster data by rarity
  function getMonsterData(name, rarity) {
    rarity = rarity.toLowerCase();
    if (rarity === "epic") return epicMonsterData[name] || monsterData[name];
    if (rarity === "rare") return monsterData[name]; // adjust if you have rareMonsterData
    return monsterData[name];
  }

  // Only proceed if restrictMonsterSearch passed
  const monsterInfoForSearch = monsterData[baseQuery];

  if (!monsterInfoForSearch) {
    // Don't show message while typing, just stop
    return;
  }

  // Clear previous content
  imageContainer.innerHTML = "";
  statsContainer.innerHTML = "";

  const img = document.createElement("img");
  img.classList.add("monster-image");
  img.alt = "Monster Image";
  img.onerror = () => img.src = "images/important/NoImageFound.png";

  // Set initial image based on defaultTab
  const rarityLower = defaultTab.toLowerCase();
  img.src = monsterInfoForSearch.image[rarityLower] || monsterInfoForSearch.image.normal;
  imageContainer.appendChild(img);

  showBlur(); // keep your blur effect

  // Create tabs
  const tabs = ["Normal", "Rare", "Epic"];
  const tabContainer = document.createElement("div");
  tabContainer.classList.add("tab-container");

  const tabContentContainer = document.createElement("div");
  tabContentContainer.classList.add("tab-content-container");

  const switchCostumeButton = document.createElement("button");
  switchCostumeButton.innerHTML = "<i>Switch Costume</i>";
  switchCostumeButton.title = "Change Costume";
  switchCostumeButton.classList.add("costume-button");

  const monsterCostumeData = monsterCostumes.find(m => m.name === baseQuery);

  function hasCostume(rarity) {
    return monsterCostumeData && monsterCostumeData[rarity] && Object.keys(monsterCostumeData[rarity]).length > 0;
  }

  if (hasCostume(rarityLower)) {
    tabContainer.appendChild(switchCostumeButton);
    switchCostumeButton.addEventListener("click", () => switchCostume(rarityLower));
  }

  const switchWubbox = document.createElement("button");
  switchWubbox.innerHTML = "<i>Switch Epic Wubbox</i>";
  switchWubbox.title = "Change Mode";
  switchWubbox.classList.add("tab-button-minor");
  let removeWubboxButton = 0;
  let wubboxMode = 0;

  switchWubbox.addEventListener("click", () => {
    switch (removeWubboxButton) {
      case 1:
        img.src = `images/bm/Epic Wubbox Cold.png`;
        removeWubboxButton++;
        break;
      case 2:
        img.src = `images/bm/Epic Wubbox Air.png`;
        removeWubboxButton++;
        break;
      case 3:
        img.src = `images/bm/Epic Wubbox Water.png`;
        removeWubboxButton++;
        break;
      case 4:
        img.src = `images/bm/Epic Wubbox Earth.png`;
        removeWubboxButton++;
        break;
      case 5:
        img.src = `images/bm/Epic Wubbox Haven.png`;
        removeWubboxButton++;
        break;
      case 6:
        img.src = `images/bm/Epic Wubbox Oasis.png`;
        removeWubboxButton++;
        break;
      case 7:
        img.src = `images/bm/Epic Wubbox Ethereal.png`
        removeWubboxButton++;
        break;
      case 8:
        img.src = `images/bm/Epic Wubbox Gold (Neutral).png`;
        removeWubboxButton++;
        break;
      case 9:
        img.src = `images/bm/Epic Wubbox Plant.png`
        removeWubboxButton = 1;
        break;
    }
  });

  // Function to update stats & breeding info
  function renderStatsAndBreeding(rarity) {
    statsContainer.innerHTML = "";
    const resultContainer = document.createElement("div");
    resultContainer.classList.add("result-container");

    const blackBox = document.createElement("div");
    blackBox.classList.add("black-box");

    const resultText = document.createElement("div");
    resultText.classList.add("result-text");

    const monsterStats =
      monsterInfoForSearch.stats[rarity] ||
      "Unknown Currently <br><br> Please Come Back Soon!";

    resultText.innerHTML = `
    <h3>${rarity.charAt(0).toUpperCase() + rarity.slice(1)} Version of ${baseQuery}!</h3>
    <p>${monsterStats}</p>
  `;

    // --- Breeding combos ---
    let breedingCombinationText = "";
    const specialRareMonsters = [
      "Mammott", "Toe Jammer", "Noggin", "Tweedle", "Potbelly",
      "Kayna", "Theremind", "Clackula", "Fluoress", "Floot Fly"
    ];

    for (let combo in breedingCombinations) {
      const results = breedingCombinations[combo];
      if (
        (rarity === "normal" && results.includes(baseQuery)) ||
        (rarity === "epic" && results.includes(`Epic ${baseQuery}`))
      ) {
        breedingCombinationText += `<p>${combo}</p>`;
      }

      if (rarity === "rare") {
        if (specialRareMonsters.includes(baseQuery)) {
          if (results.includes(`Rare ${baseQuery}`)) {
            breedingCombinationText += `<p>${combo}</p>`;
          }
        } else if (results.includes(baseQuery)) {
          breedingCombinationText += `<p>${combo}</p>`;
        }
      }
    }

    // Determine prefix for image & lookup
    const prefixType =
      rarity === "rare" ? "Rare" :
        rarity === "epic" ? "Epic" : "";

    // Normalize and lookup the monster (handles Rare/Epic)
    let normalized = baseQuery.toLowerCase().replace(/\s+/g, '_');
    let monsterLikeCheck =
      monsterInfo[`${prefixType.toLowerCase()}_${normalized}`] ||
      monsterInfo[normalized];

    if (breedingCombinationText) {
      if (
        monsterLikeCheck &&
        Array.isArray(monsterLikeCheck['slike']) &&
        monsterLikeCheck['slike'].length > 0
      ) {
        let secretLikesHTML = "<h4><u>Secret Likes:</u></h4>";

        monsterLikeCheck['slike'].forEach(like => {
          let likeKey = like.toLowerCase().replace(/\s+/g, '_');
          let imagePath = '';
          let imageName = like;

          if (
            monsterInfo[likeKey] ||
            monsterInfo[`rare_${likeKey}`] ||
            monsterInfo[`epic_${likeKey}`]
          ) {
            if (monsterInfo[`rare_${likeKey}`]) {
              imageName = `${like}`;
            } else if (monsterInfo[`epic_${likeKey}`]) {
              imageName = `${like}`;
            }
            imagePath = `images/bm/${imageName}.png`;
          } else {
            imagePath = `images/Decorations/${like}.png`;
          }

          secretLikesHTML += `
          <div style="text-align: center; margin-bottom: 10px;">
            <p><b><u>${like}</u></b></p>
            <img src="${imagePath}" style="width: 50px;">
          </div>
        `;
        });

        resultText.innerHTML += `
        <h4><u>Breeding Combinations:</u></h4>
        ${breedingCombinationText}
        ${secretLikesHTML}
      `;
      } else {
        resultText.innerHTML += `
        <h4><u>Breeding Combinations:</u></h4>
        ${breedingCombinationText}
        <h4><u>Secret Like:</u></h4>
        Unknown Right Now, Come Back Later!
      `;
      }
    } else {
      resultText.innerHTML += `<p><em>No breeding combinations found.</em></p>`;
    }

    resultContainer.appendChild(blackBox);
    resultContainer.appendChild(resultText);
    statsContainer.appendChild(resultContainer);
  }



  // Create tabs
  tabs.forEach(tabName => {
    const tab = document.createElement("button");
    tab.classList.add("tab-button");
    tab.textContent = tabName;

    tab.addEventListener("click", () => {
      const activeRarity = tabName.toLowerCase();
      imageContainer.dataset.currentActiveRarity = activeRarity;
      switchCostumeButton.dataset.activeRarity = activeRarity;

      // Set correct image
      img.src = monsterInfoForSearch.image[activeRarity] || monsterInfoForSearch.image.normal;

      // Enable costume button if available
      switchCostumeButton.disabled = !hasCostume(activeRarity);

      if (activeRarity === "epic" && baseQuery === "Wubbox") {
        removeWubboxButton = 1;
        tabContainer.appendChild(switchWubbox);
        if (tabContainer.contains(switchCostumeButton)) tabContainer.removeChild(switchCostumeButton);
      } else {
        removeWubboxButton = 0;
        if (tabContainer.contains(switchWubbox)) tabContainer.removeChild(switchWubbox);
      }
      renderStatsAndBreeding(activeRarity);
      tabContentContainer.appendChild(img);
    });

    tabContainer.appendChild(tab);
  });

  // Volume button
  const volumeButton = document.createElement("button");
  volumeButton.classList.add("volume-button");
  volumeButton.innerHTML = '<i class="fas fa-volume-up"></i>';
  volumeButton.title = "Play Sound";
  volumeButton.addEventListener("click", () => {
    const monster = getMonsterData(baseQuery, defaultTab);
    if (monster && monster.audio) {
      new Audio(monster.audio).play().catch(err => console.error(err));
    }
  });


  const paironormalSwitch = document.createElement("button");
  paironormalSwitch.classList.add("tab-button-minor");
  paironormalSwitch.innerHTML = 'Switch Form';
  paironormalSwitch.title = "Switch Form";
  let switchClick = 0;
  const paironormals = ['Shhimmer', "Hairionette", "Owlesque", "Arcorina", "Dakktyl", "Jerm", "Scallyrags"];

  paironormalSwitch.addEventListener("click", () => {

    if (switchClick === 0) {
      img.src = `images/bm/${searchMonsterInput.value} (Minor).png`;
      switchClick = 1;
    } else if (switchClick === 1) {
      img.src = `images/bm/${searchMonsterInput.value} (Major).png`;
      switchClick = 0;
    }
  });

  for (let i = 0; i <= paironormals.length; i++) {

    // console.log(i); 
    if (paironormals[i] === searchMonsterInput.value) {
      tabContainer.appendChild(paironormalSwitch);

    }
  }

  imageContainer.appendChild(tabContainer);
  imageContainer.appendChild(tabContentContainer);
  tabContainer.appendChild(volumeButton);

  // Auto-click default tab
  const defaultTabButton = Array.from(tabContainer.children).find(btn => btn.textContent === defaultTab);
  if (defaultTabButton) defaultTabButton.click();
});

breedButton.addEventListener("click", () => {
  const monster1 = firstMonsterInput.value.trim();
  const monster2 = secondMonsterInput.value.trim();
  const searchMonster = searchMonsterInput.value.trim();

  imageContainer.innerHTML = "";
  statsContainer.innerHTML = "";

  document.getElementById("suggestions1").style.display = "none";
  document.getElementById("suggestions2").style.display = "none";
  document.getElementById("suggestions3").style.display = "none";

  const getMonsterInfo = (name) =>
    monsters.find((m) => m.name.toLowerCase() === name.toLowerCase());

  const playMonsterSound = (name) => {
    const actualName = name.includes("Hairionette") ? "Hairionette" : name;
    const monster = monsterData[actualName];
    if (monster && monster.audio) {
      new Audio(monster.audio)
        .play()
        .catch((err) => console.error("Playback error:", err));
    } else {
      console.warn("No audio found for:", actualName);
    }
  };

  const renderStats = (monsterInfo, monsterName, form) => {
    const stats =
      monsterInfo.stats?.[form] ||
      "Unknown Currently <br><br> Please Come Back Soon!";

    resultText.innerHTML = `
    <h3>${form === "normal"
        ? "Normal Version Of:"
        : form.charAt(0).toUpperCase() + form.slice(1) + " Version of"
      }<br><h3 id="search_monster_result">${monsterName}!</h3></h3>
    <p>${stats}</p>
  `;

    console.log(monsterInfo, monsterName, form);

    // --- Updated Breeding Combo Logic (supports Rare & Epic results) ---
    let breedingCombinationText = "";

    for (let combo in breedingCombinations) {
      const results = breedingCombinations[combo];

      // Normal version
      if (results.includes(monsterName) && form === "normal") {
        breedingCombinationText += `<p>${combo}</p>`;
      }

      // Rare version
      if (results.includes(`Rare ${monsterName}`) && form === "rare") {
        breedingCombinationText += `<p>${combo}</p>`;
      }

      // Epic version
      if (results.includes(`Epic ${monsterName}`) && form === "epic") {
        breedingCombinationText += `<p>${combo}</p>`;
      }
    }

    // Display section if combos exist
    if (breedingCombinationText) {
      resultText.innerHTML += `
      <h4><u>Breeding Combinations:</u></h4>
      ${breedingCombinationText}
    `;
    }

    // Append to containers
    resultContainer.appendChild(blackBox);
    resultContainer.appendChild(resultText);
    statsContainer.appendChild(resultContainer);
  };

  const createTabButton = (label, onClick) => {
    const btn = document.createElement("button");
    btn.classList.add("tab-button");
    btn.textContent = label;
    btn.addEventListener("click", onClick);
    return btn;
  };

  if (searchMonster) {
    const monsterInfo = getMonsterInfo(searchMonster);
    if (!monsterInfo) {
      statsContainer.innerHTML =
        '<img src="images/important/Nomonsterfound.png" id="noMonster">';
      return;
    }

    const img = document.createElement("img");
    img.src = monsterInfo.image.normal;
    img.onerror = () => img.src = "images/important/NoImageFound.png";
    img.classList.add("monster-image");
    imageContainer.appendChild(img);

    const tabContainer = document.createElement("div");
    tabContainer.classList.add("tab-container");

    const tabContentContainer = document.createElement("div");
    tabContentContainer.classList.add("tab-content-container");



    ["Normal", "Rare", "Epic"].forEach((tabName) => {
      tabContainer.appendChild(
        createTabButton(tabName, () => {
          tabContentContainer.innerHTML = "";
          statsContainer.innerHTML = "";
          const lowerTab = tabName.toLowerCase();

          img.src = monsterInfo.image[lowerTab] || monsterInfo.image.normal;
          tabContentContainer.appendChild(img);
          renderStats(monsterInfo, searchMonster, lowerTab);
        })
      );
    });

    const volumeButton = document.createElement("button");
    volumeButton.classList.add("volume-button");
    volumeButton.innerHTML = '<i class="fas fa-volume-up"></i>';
    volumeButton.title = "Play Sound";
    volumeButton.addEventListener("click", () =>
      playMonsterSound(searchMonster)
    );
    tabContainer.appendChild(volumeButton);

    imageContainer.appendChild(tabContainer);
    imageContainer.appendChild(tabContentContainer);
    tabContainer.querySelector(".tab-button").click(); // Auto click Normal
    return;
  }

  if (monster1 && monster2) {
    const results = getResultingMonsters(monster1, monster2);
    if (!results.length) {
      statsContainer.innerHTML =
        '<img src="images/important/Nomonsterfound.png" id="noMonster">';
      return;
    }

    const tabContainer = document.createElement("div");
    tabContainer.classList.add("tab-container");
    const tabContentContainer = document.createElement("div");
    tabContentContainer.classList.add("tab-content-container");

    results.forEach((name, index) => {
      const tab = createTabButton(name, () => {
        tabContentContainer.innerHTML = "";
        statsContainer.innerHTML = "";

        const form = name.startsWith("Epic ") ? "epic" : name.startsWith("Rare ") ? "rare" : "normal";
        const baseName = name.replace(/^(Epic |Rare )/, "");
        const info = monsterData[baseName];

        if (info) {
          const img = document.createElement("img");

          // Pick the correct image based on the form
          if (form === "normal") {
            img.src = info.image.normal;
          } else if (form === "rare") {
            img.src = info.image.rare || info.image.normal;
          } else if (form === "epic") {
            img.src = info.image.epic || info.image.normal;
          }

          img.alt = `<img src="images/important/NoImageFound.png">`;
          img.classList.add("monster-image");
          tabContentContainer.appendChild(img);

          renderStats(info, name, form);

          const volumeButton = document.createElement("button");
          volumeButton.classList.add("volume-button");
          volumeButton.innerHTML = '<i class="fas fa-volume-up"></i>';
          volumeButton.title = "Play Sound";
          volumeButton.addEventListener("click", () => playMonsterSound(baseName));

          if (!tabContainer.querySelector(".volume-button")) {
            tabContainer.appendChild(volumeButton);
          }

          const paironormalSwitch = document.createElement("button");
          paironormalSwitch.classList.add("tab-button-minor");
          paironormalSwitch.innerHTML = 'Switch Form';
          paironormalSwitch.title = "Switch Form";
          let switchClick = 0;
          const paironormals = ['Shhimmer', "Hairionette", "Owlesque", "Arcorina", "Dakktyl", "Jerm", "Scallyrags"];

          paironormalSwitch.addEventListener("click", () => {

            if (switchClick === 0) {
              img.src = `images/bm/${name} (Minor).png`;
              switchClick = 1;
            } else if (switchClick === 1) {
              img.src = `images/bm/${name} (Major).png`;
              switchClick = 0;
            }
          });

          for (let i = 0; i <= paironormals.length; i++) {
            if (paironormals[i] === name) {
              tabContainer.appendChild(paironormalSwitch);
            }
          }
        } else {
          statsContainer.innerHTML =
            '<img src="images/important/Nomonsterfound.png" id="noMonster">';
        }
      });
      tabContainer.appendChild(tab);
      if (index === 0) tab.click();
    });



    imageContainer.appendChild(tabContainer);
    imageContainer.appendChild(tabContentContainer);
  } else {
    statsContainer.innerHTML =
      '<img src="images/important/Enterrightmonster.png" id="noMonster">';
  }
});

// Function to check breeding combinations
//!This IS what you have been looking for! :D
const getResultingMonsters = (monster1, monster2) => {
  const comboKey = `${monster1} + ${monster2}`;
  const reverseComboKey = `${monster2} + ${monster1}`;
  return (
    breedingCombinations[comboKey] ||
    breedingCombinations[reverseComboKey] ||
    []
  );
};

const toggleSearchMonsterInput = () => {
  if (firstMonsterInput.value.trim() || secondMonsterInput.value.trim()) {
    searchMonsterInput.disabled = true;
    searchMonsterInput.value = ""; // Clear the input
  } else {
    searchMonsterInput.disabled = false;
  }
};

// Add event listeners to toggle the Search_Monster input
firstMonsterInput.addEventListener("input", () => {
  showSuggestions(firstMonsterInput, suggestionsBox1);
  toggleSearchMonsterInput();
});

secondMonsterInput.addEventListener("input", () => {
  showSuggestions(secondMonsterInput, suggestionsBox2);
  toggleSearchMonsterInput();
});

// Initial toggle call
toggleSearchMonsterInput();

// Function to toggle graying out of inputs
const toggleInputStyles = () => {
  const isSearchActive = searchMonsterInput.value.trim() !== "";
  firstMonsterInput.disabled = isSearchActive;
  secondMonsterInput.disabled = isSearchActive;
  firstMonsterInput.style.backgroundColor = isSearchActive ? "#d3d3d3" : "";
  secondMonsterInput.style.backgroundColor = isSearchActive ? "#d3d3d3" : "";

  const isFirstOrSecondActive =
    firstMonsterInput.value.trim() !== "" ||
    secondMonsterInput.value.trim() !== "";
  searchMonsterInput.disabled = isFirstOrSecondActive;
  searchMonsterInput.style.backgroundColor = isFirstOrSecondActive
    ? "#d3d3d3"
    : "";
};

// Add event listeners to toggle the inputs
firstMonsterInput.addEventListener("input", () => {
  showSuggestions(firstMonsterInput, suggestionsBox1);
  toggleInputStyles();
});

secondMonsterInput.addEventListener("input", () => {
  showSuggestions(secondMonsterInput, suggestionsBox2);
  toggleInputStyles();
});

searchMonsterInput.addEventListener("input", () => {
  showSuggestions(searchMonsterInput, suggestionsBox3);
  toggleInputStyles();
});

// Initial toggle call
toggleInputStyles();

// Hide suggestions when clicking outside
document.addEventListener("click", (event) => {
  if (
    !suggestionsBox1.contains(event.target) &&
    event.target !== firstMonsterInput
  ) {
    suggestionsBox1.innerHTML = "";
    suggestionsBox1.style.display = "none";
  }
  if (
    !suggestionsBox2.contains(event.target) &&
    event.target !== secondMonsterInput
  ) {
    suggestionsBox2.innerHTML = "";
    suggestionsBox2.style.display = "none";
  }
});


// Function to show the blur overlay and message
function showBlur() {
  document.getElementById("blurOverlay").style.display = "block";
  document.getElementById("blurMessage").style.display = "block"; // Show the message

  // Hide input elements and buttons
  document.getElementById("inputContainer").classList.add("hidden"); // Hide the input container
  const inputs = document.querySelectorAll(
    "#inputContainer input, #inputContainer button #suggestions .suggestions, #slidePanel, #slideButton, #checklistMenu, #slideButtonForChecklist"); // #musicSlidePanel, #musicSlideButton
  inputs.forEach((input) => input.classList.add("hidden")); // Hide each input/button

  // Hide suggestion boxes
  const suggestionsBox1 = document.getElementById("suggestions1");
  const suggestionsBox2 = document.getElementById("suggestions2");
  const suggestionsBox3 = document.getElementById("suggestions3");

  suggestionsBox1.innerHTML = ""; // Clear suggestions
  suggestionsBox1.style.display = "none"; // Hide suggestions box 1
  suggestionsBox2.innerHTML = ""; // Clear suggestions
  suggestionsBox2.style.display = "none"; // Hide suggestions box 2
  suggestionsBox3.innerHTML = ""; // Clear suggestions
  suggestionsBox3.style.display = "none"; // Hide suggestions box 3

  // Hide all suggestion items (custom)
  const suggestionItems = document.querySelectorAll(".suggestion-item");
  suggestionItems.forEach((item) => {
    item.style.display = "none"; // Hide each suggestion item
  });

  // Optionally, hide the autocomplete suggestions from the browser
  inputs.forEach((input) => {
    input.setAttribute("autocomplete", "off"); // Disable autocomplete
  });

  // Set z-index for image and stats container above fog
  document.getElementById("imageContainer").style.zIndex = "102"; // Set z-index to 102
  document.getElementById("statsContainer").style.zIndex = "102"; // Set z-index to 102
}

// Function to hide the blur overlay and message
function hideBlur() {
  document.getElementById("blurOverlay").style.display = "none";
  document.getElementById("blurMessage").style.display = "none"; // Hide the message

  // Show input elements and buttons
  document.getElementById("inputContainer").classList.remove("hidden"); // Show the input container
  const inputs = document.querySelectorAll(
    "#inputContainer input, #inputContainer button #suggestions3, #slidePanel, #slideButton, #checklistMenu, #slideButtonForChecklist" //#musicSlidePanel, #musicSlideButton
  ); // Select input fields and buttons
  inputs.forEach((input) => {
    input.classList.remove("hidden"); // Show each input/button
    input.setAttribute("autocomplete", "on"); // Re-enable autocomplete
  });

  // Reset z-index for image and stats container
  document.getElementById("imageContainer").style.zIndex = "0"; // Reset z-index to 0
  document.getElementById("statsContainer").style.zIndex = "0"; // Reset z-index to 0
}

// Example of how you might handle finding a combination
document.getElementById("breedButton").addEventListener("click", function () {
  // Simulate finding a combination
  const combinationFound = true; // Set this based on your logic

  if (combinationFound) {
    showBlur(); // Show the blur overlay
  } else {
    hideBlur(); // Hide if no combination is found (optional)
  }

});

// Add event listener for keydown event
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeMenu();
  }
});



function displayMonster(monster, type) {
  const resultsContainer = document.getElementById("resultsContainer");
  const monsterDiv = document.createElement("div");
  monsterDiv.className = "monster-result";

  const name =
    type === "normal"
      ? monster.name
      : `${type.charAt(0).toUpperCase() + type.slice(1)} ${monster.name}`;
  monsterDiv.innerHTML = `
    <h3>${name}</h3>
    <img src="${monster.image.normal}" alt="<img src="image/important/NoImageFound.png">" />
    <p>Breeding Time: ${monster.stats.normal}</p>
  `;

  // Show breeding combos for this monster and type
  let breedingText = "";
  for (let combo in breedingCombinations) {
    const results = breedingCombinations[combo];
    if (
      (type === "normal" && results.includes(monster.name)) ||
      (type === "rare" && results.includes(`Rare ${monster.name}`)) ||
      (type === "epic" && results.includes(`Epic ${monster.name}`))
    ) {
      breedingText += `<p>${combo}</p>`;
    }
  }

  if (breedingText) {
    monsterDiv.innerHTML += `<h4><u>Breeding Combinations:</u></h4>${breedingText}<h4><u>Secret Like:</u></h4>`;
  }

  resultsContainer.appendChild(monsterDiv);
}

// Call hideBlur on page load to ensure it starts hidden
hideBlur();

const slideButton = document.getElementById("slideButton");
const slidePanel = document.getElementById("slidePanel");

slideButton.addEventListener("click", () => {
  if (checklistMenu.classList.value === "open") {
    checklistMenu.classList.value = "closed"
    slideButton.style.backgroundColor = `rgb(147, 112, 219, 0.7)`;
  } else {
    slidePanel.classList.toggle("open");
  }
  if (slideButton.innerHTML === `<i class="fas fa-arrow-right"></i>` && checklistMenu.classList.value !== "open") {
    slideButton.innerHTML = `<i class="fas fa-arrow-left"></i>`;
    slideButton.style.backgroundColor = `rgb(255, 109, 109, 0.7)`;
    if (checklistMenu.classList.value === "closed") {
      slideButton.innerHTML = `<i class="fas fa-arrow-right"></i>`;
      slideButton.style.backgroundColor = `rgb(147, 112, 219, 0.7)`;
      checklistMenu.classList.value = ""
    }
    console.log("Closed");
  } else if (checklistMenu.classList.value !== "open") {
    slideButton.innerHTML = `<i class="fas fa-arrow-right"></i>`;
    slideButton.style.backgroundColor = `rgb(147, 112, 219, 0.7)`;
    console.log("Open")
  }
});

document
  .getElementById("islandDropdown")
  .addEventListener("change", function () {
    const value = this.value;
    const islandTitleImg = document.getElementById("islandNameImg");
    const islandImg = document.getElementById("islandImg");
    const islandNameChecklist = document.getElementById("islandNameChecklist");
    // Capitalize first letter for display
    const capitalized = value.charAt(0).toUpperCase() + value.slice(1);
    skinCounter = 0;

    // Update the name and image
    if (value === "Plasma Islet" || value === "Mech Islet" || value === "Ethereal Workshop" || value === "oasis" || value === "haven" || capitalized === "Magical Sanctum" || capitalized === "Seasonal Shanty" || value === "nexus" || value === "paironormal") {
      islandImg.src = `images/islands/${capitalized} Island.png`;
      islandTitleImg.src = `images/Titles/${capitalized}.png`;

      if (value === "oasis") {
        islandImg.src = `images/islands/Fire ${capitalized} Island.png`;
        islandTitleImg.src = `images/Titles/Fire ${capitalized}.png`;
      } else if (value === "haven") {
        islandImg.src = `images/islands/Fire ${capitalized} Island.png`;
        islandTitleImg.src = `images/Titles/Fire ${capitalized}.png`;
      } else if (value === "nexus") {
        islandImg.src = `images/islands/Magical ${capitalized}.png`;
        islandTitleImg.src = `images/Titles/Magical ${capitalized}.png`;
      } else if (value === "paironormal") {
        islandImg.src = `images/islands/Paironormal Carnival - Major.png`;
        islandTitleImg.src = `images/Titles/Paironormal Carnival - Major.png`;
      }

      // console.log(islandTitleImg, value, capitalized)
    } else if (value !== "Plasma Islet" && value !== "Mech Islet" && value !== "Ethereal Workshop" && capitalized !== "Oasis" && capitalized !== "Fire Haven" && capitalized !== "Magical Sanctum" && capitalized !== "Seasonal Shanty" && value !== "nexus") {
      islandImg.src = `images/islands/${capitalized} Island.png`;
      islandTitleImg.src = `images/Titles/${capitalized} Island.png`;
      // console.log(islandTitleImg, value, capitalized)
    }

    hideIslandSkin();
  });

document
  .getElementById("monsterTypeDropdown")
  .addEventListener("change", function () {
    const value = this.value;

    const commonPanel = document.getElementById("commonSection");
    const rarePanel = document.getElementById("rareSection");
    const epicPanel = document.getElementById("epicSection");

    // Collapse all
    commonPanel.classList.remove("active");
    rarePanel.classList.remove("active");
    epicPanel.classList.remove("active");

    // Expand selected + trigger its select change
    if (value === "common") {
      commonPanel.classList.add("active");
      const select = commonPanel.querySelector("select");
      if (select) select.dispatchEvent(new Event("change"));
    } else if (value === "rare") {
      rarePanel.classList.add("active");
      const select = rarePanel.querySelector("select");
      if (select) select.dispatchEvent(new Event("change"));
    } else if (value === "epic") {
      epicPanel.classList.add("active");
      const select = epicPanel.querySelector("select");
      if (select) select.dispatchEvent(new Event("change"));
    }
  });

/** 
 *  "": {
     name: "",
     image: "images/Monster_Avatars/.png",
     diamonds: ,
     coins: ,
       description: `<button id="monsterListButton" onClick="(function() { simulateMonsterSearch(''); })();">Breeding Combo</button><button id="openChecklistButton" onClick="(function() { openChecklist(); })();">Open Checklist</button>`,
   },
*/

const dropdown = document.getElementById("monsterTypeDropdown");

function updateDropdown(islandName) {
  const island = islandData[islandName];

  const commonOpt = dropdown.querySelector('option[value="common"]');
  const rareOpt = dropdown.querySelector('option[value="rare"]');
  const epicOpt = dropdown.querySelector('option[value="epic"]');

  // Disable options if that rarity list is empty/missing
  commonOpt.disabled = !island?.common?.length;
  rareOpt.disabled = !island?.rare?.length;
  epicOpt.disabled = !island?.epic?.length;

  // Pick first valid option if current one is disabled
  if (dropdown.options[dropdown.selectedIndex].disabled) {
    const firstEnabled = [...dropdown.options].find(opt => !opt.disabled);
    if (firstEnabled) dropdown.value = firstEnabled.value;
  }

  // Trigger change so your panel logic updates
  dropdown.dispatchEvent(new Event("change"));
}


function populateMonsterSections(islandKey) {
  const island = islandData[islandKey];
  if (!island) return;

  const sections = {
    common: document.querySelector("#commonSection select"),
    rare: document.querySelector("#rareSection select"),
    epic: document.querySelector("#epicSection select"),
  };

  for (const [rarity, monsters] of Object.entries(island)) {
    const select = sections[rarity];
    select.innerHTML = "";

    monsters.forEach((monster) => {
      const option = document.createElement("option");
      option.textContent = monster;
      option.value = monster.toLowerCase().replace(/\s+/g, "_");
      select.appendChild(option);
    });

    updateDropdown(islandKey);
    //Auto-select the first monster for each rarity
    if (monsters.length > 0) {
      select.value = monsters[0].toLowerCase().replace(/\s+/g, "_");
      //Trigger the correct change event immediately
      select.dispatchEvent(new Event("change"));
    }
  }
}

// Load initial island with first-monster auto-selection
const defaultSelectedIsland = "plant";
populateMonsterSections(defaultSelectedIsland);

function showSection(rarity) {
  // Hide all
  document.querySelector("#commonSection").style.display = "none";
  document.querySelector("#rareSection").style.display = "none";
  document.querySelector("#epicSection").style.display = "none";

  // Show the chosen one
  document.querySelector(`#${rarity}Section`).style.display = "block";
  skinCounter = 0;
  const select = document.querySelector(`#${rarity}Section select`);
  if (select && select.value) {
    select.dispatchEvent(new Event("change"));
  }
  hideIslandSkin();
}

let universalMonster = '';
let universalIsland = defaultSelectedIsland;

document
  .getElementById("islandDropdown")
  .addEventListener("change", function () {
    let selectedIsland = this.value; // e.g., "plant", "cold"
    universalIsland = selectedIsland;
    skinCounter = 0;

    if (selectedIsland === "oasis") {
      selectedIsland = "oasis"; // THIS IS HOW YOU ASSIGN NEW ISLANDS WITHOUT CHANGING ID!!! 
      populateMonsterSections(selectedIsland);
      console.log("Oasis", selectedIsland);
    } else if (selectedIsland === "haven") {
      selectedIsland = "haven"; // THIS IS HOW YOU ASSIGN NEW ISLANDS WITHOUT CHANGING ID!!! 
      populateMonsterSections(selectedIsland);
    } else if (selectedIsland === "Seasonal Shanty") {
      selectedIsland = "seasonal";
      populateMonsterSections(selectedIsland);
    } else if (selectedIsland === "magical Sanctum") {
      selectedIsland = "magical Sanctum";
      populateMonsterSections(selectedIsland);
    } else if (selectedIsland === "Ethereal Workshop") {
      selectedIsland = "wethereal";
      populateMonsterSections(selectedIsland);
    } else if (selectedIsland === "Plasma Islet") {
      selectedIsland = "plasma";
      populateMonsterSections(selectedIsland);
    } else if (selectedIsland === "Mech Islet") {
      selectedIsland = "mech";
      populateMonsterSections(selectedIsland);
    } else {
      populateMonsterSections(selectedIsland);
      console.log("Other Islands", selectedIsland);
    }
    hideIslandSkin();
  });

document
  .querySelector("#commonSection select")
  .addEventListener("change", function () {
    const selected = this.value;
    const info = monsterInfo[selected];
    console.log(info);
    const img = document.getElementById("monsterImage");
    const desc = document.getElementById("monsterDescription");
    const diamonds = document.getElementById("diamonds");
    const coins = document.getElementById("coins");
    const relics = document.getElementById('relics');
    const stars = document.getElementById('star_power');
    const relicImg = document.getElementById('relicImg');
    const coinImg = document.getElementById('coinImg');
    const starImg = document.getElementById('starImg');

    universalMonster = info.name.toLowerCase().replace(/\s/g, '_');
    if (info) {
      img.src = info.image;
      desc.innerHTML = info.description;
      diamonds.innerHTML = info.diamonds;

      if (info.coins >= 0) {
        relicImg.style.display = 'none';
        relics.innerHTML = '';
        starImg.style.display = 'none';
        stars.innerHTML = '';
        coinImg.style.display = 'block';
        coins.innerHTML = info.coins;
      } else if (info.stars >= 0) {
        starImg.style.display = 'block';
        stars.innerHTML = info.stars;
        relicImg.style.display = 'none';
        relics.innerHTML = '';
        coinImg.style.display = 'none';
        coins.innerHTML = '';
      } else {
        relicImg.style.display = 'block';
        relics.innerHTML = info.relics;
        coinImg.style.display = 'none';
        coins.innerHTML = '';
        starImg.style.display = 'none';
        stars.innerHTML = '';
      }
      // relics.innerHTML = info.relics; 
    }
  });

// Event listener for the rare section
document
  .querySelector("#rareSection select")
  .addEventListener("change", function () {
    const selected = this.value;
    const info = monsterInfo[selected];
    console.log(selected);
    console.log(info);
    const img = document.getElementById("monsterImageRare");
    const desc = document.getElementById("monsterDescriptionRare");
    const diamonds = document.getElementById("diamondsRare");
    const coins = document.getElementById("coinsRare");
    const relics = document.getElementById("relicsRare");
    const stars = document.getElementById('rare_star_power');
    const relicImg = document.getElementById('RarerelicImg');
    const coinImg = document.getElementById('RarecoinImg');
    const starImg = document.getElementById('RarestarImg');

    if (info) {
      img.src = info.image;
      desc.innerHTML = info.description;
      diamonds.innerHTML = info.diamonds;

      if (info.coins >= 0) {
        relicImg.style.display = 'none';
        relics.innerHTML = '';
        starImg.style.display = 'none';
        stars.innerHTML = '';
        coinImg.style.display = 'block';
        coins.innerHTML = info.coins;
      } else if (info.stars >= 0) {
        starImg.style.display = 'block';
        stars.innerHTML = info.stars;
        relicImg.style.display = 'none';
        relics.innerHTML = '';
        coinImg.style.display = 'none';
        coins.innerHTML = '';
      } else {
        relicImg.style.display = 'block';
        relics.innerHTML = info.relics;
        coinImg.style.display = 'none';
        coins.innerHTML = '';
        starImg.style.display = 'none';
        stars.innerHTML = '';
      }
      // relics.innerHTML = info.relics; 
    }
  });

// Event listener for the epic section
document
  .querySelector("#epicSection select")
  .addEventListener("change", function () {
    const selected = this.value;
    const info = monsterInfo[selected];

    const img = document.getElementById("monsterImageEpic");
    const desc = document.getElementById("monsterDescriptionEpic");
    const diamonds = document.getElementById("diamondsEpic");
    const coins = document.getElementById("coinsEpic");
    const relics = document.getElementById("relicsEpic");
    const stars = document.getElementById('epic_star_power');
    const relicImg = document.getElementById('EpicrelicImg');
    const coinImg = document.getElementById('EpiccoinImg');
    const starImg = document.getElementById('EpicstarImg');

    if (info) {
      img.src = info.image;
      desc.innerHTML = info.description;
      diamonds.innerHTML = info.diamonds;

      if (info.coins >= 0) {
        relicImg.style.display = 'none';
        relics.innerHTML = '';
        starImg.style.display = 'none';
        stars.innerHTML = '';
        coinImg.style.display = 'block';
        coins.innerHTML = info.coins;
      } else if (info.stars >= 0) {
        starImg.style.display = 'block';
        stars.innerHTML = info.stars;
        relicImg.style.display = 'none';
        relics.innerHTML = '';
        coinImg.style.display = 'none';
        coins.innerHTML = '';
      } else {
        relicImg.style.display = 'block';
        relics.innerHTML = info.relics;
        coinImg.style.display = 'none';
        coins.innerHTML = '';
        starImg.style.display = 'none';
        stars.innerHTML = '';
      }
      // relics.innerHTML = info.relics; 
    }
  });


// From here one I do believe it SHOULD only be checklist related things. 
const islandDropdown = document.getElementById("islandDropdown");
const prevButton = document.getElementById("prevPage");
const nextButton = document.getElementById("nextPage");

// The full list of islands (this is necessary for pagination)
const allIslands = [
  { value: "plant", text: "Plant Island" },
  { value: "cold", text: "Cold Island" },
  { value: "air", text: "Air Island" },
  { value: "water", text: "Water Island" },
  { value: "earth", text: "Earth Island" },
  { value: "haven", text: "Fire Haven" },
  { value: "oasis", text: "Fire Oasis" },
  { value: "light", text: "Light Island" },
  { value: "psychic", text: "Psychic Island" },
  { value: "faerie", text: "Faerie Island" },
  { value: "bone", text: "Bone Island" },
  { value: "shugabush", text: "Shugabush Island" },
  { value: "ethereal", text: "Ethereal Island" },
  { value: "mythical", text: "Mythical Island" },
  { value: "magical Sanctum", text: "Magical Sanctum" },
  { value: "Seasonal Shanty", text: "Seasonal Shanty" },
  { value: "amber", text: "Amber Island" },
  { value: "wublin", text: "Wublin Island" },
  { value: "celestial", text: "Celestial Island" },
  { value: "Ethereal Workshop", text: "Ethereal Workshop" },
  { value: "Plasma Islet", text: "Plasma Islet" },
  { value: "Mech Islet", text: "Mech Islet" },
  { value: "gold", text: "Gold Island" },
  { value: "nexus", text: "Magical Nexus" },
  { value: "paironormal", text: "Paironormal Carnival" }
];
// { value: "", text: "", titleSrc: "images/Titles/", src: "images/islands/" },
const allIslandSkins = [
  //Plant Islands
  { value: "spooktacleplant", text: "Spooktacle", titleSrc: "images/Titles/Spooktacle.png", src: "images/islands/Plant Island (Spooktacle Skin).png" },
  { value: "vegetableplant", text: "Vegetable Medley", titleSrc: "images/Titles/Plant Island.png", src: "images/islands/Plant Island (Vegetable Medley Skin).png" },
  { value: "mirrorplant", text: "Plant Island Mirror", titleSrc: "images/Titles/Mirror Plant Island.png", src: "images/islands/Mirror Plant Island.png" },
  //Cold Islands
  { value: "festivalcold", text: "Festival Of Yay", titleSrc: "images/Titles/Festival of Yay (Horizontal).png", src: "images/islands/Cold Island (Festival of Yay Skin).png" },
  { value: "sweticold", text: "Sweti Settlement", titleSrc: "images/Titles/Cold Island.png", src: "images/islands/Cold Island (Sweti Settlement Skin).png" },
  { value: "mirrorcold", text: "Cold Island Mirror", titleSrc: "images/Titles/Mirror Cold Island.png", src: "images/islands/Mirror Cold Island.png" },
  //Air Islands
  { value: "loveair", text: "Season Of Love", titleSrc: "images/Titles/Season of Love (Horizontal).png", src: "images/islands/Air Island (Season of Love Skin).png" },
  { value: "gigacheepair", text: "Gigacheap Nest Skin", titleSrc: "images/Titles/Air Island.png", src: "images/islands/Air Island (Gigacheep Nest Skin).png" },
  { value: "mirrorair", text: "Air Island Mirror", titleSrc: "images/Titles/Mirror Air Island.png", src: "images/islands/Mirror Air Island.png" },
  // //Water Island
  { value: "eggwater", text: "Eggs Travaganza", titleSrc: "images/Titles/Eggs-Travaganza (Horizontal).png", src: "images/islands/Water Island (Eggs-Travaganza Skin).png" },
  { value: "gluberwater", text: "Glubber Lagoon", titleSrc: "images/Titles/Water Island.png", src: "images/islands/Water Island (Glubber Lagoon Skin).png" },
  { value: "mirrorwater", text: "Water Island Mirror", titleSrc: "images/Titles/Mirror Water Island.png", src: "images/islands/Mirror Water Island.png" },
  // //Earth Island
  { value: "summerearth", text: "Summer Song", titleSrc: "images/Titles/SummerSong.png", src: "images/islands/Earth Island (SummerSong Skin).png" },
  { value: "hahooearth", text: "Temple Of Hahoo", titleSrc: "images/Titles/Earth Island.png", src: "images/islands/Earth Island (Temple of Hahoo Skin).png" },
  { value: "mirrorearth", text: "Earth Island Mirror", titleSrc: "images/Titles/Mirror Earth Island.png", src: "images/islands/Mirror Earth Island.png" },

  // Haven 
  { value: "feasthave", text: "Feast Ember", titleSrc: "images/Titles/Feast-Ember.png", src: "images/islands/Fire Haven (Feast-Ember Skin).png" },

  //Oasis
  { value: "perplexoasis", text: "Perplexplore", titleSrc: "images/Titles/Perplexplore.png", src: "images/islands/Fire Oasis (Perplexplore Skin).png" },

  //light
  { value: "skylight", text: "SkyPainting", titleSrc: "images/Titles/SkyPainting.png", src: "images/islands/Light Island (SkyPainting Skin).png" },
  { value: "mirrorlight", text: "Mirror Light", titleSrc: "images/Titles/Mirror Light Island.png", src: "images/islands/Mirror Light Island.png" },

  //psychic
  { value: "bogglepsychic", text: "MindBoggle", titleSrc: "images/Titles/MindBoggle.png", src: "images/islands/Psychic Island (MindBoggle Skin).png" },
  { value: "mirrorpsychic", text: "Mirror Psychic", titleSrc: "images/Titles/Mirror Psychic Island.png", src: "images/islands/Mirror Psychic Island.png" },
  //faerie
  { value: "cloverfaerie", text: "Clover Spell", titleSrc: "images/Titles/Cloverspell.png", src: "images/islands/Faerie Island (Cloverspell Skin).png" },
  { value: "mirrorfaerie", text: "Mirror Faerie", titleSrc: "images/Titles/Mirror Faerie Island.png", src: "images/islands/Mirror Faerie Island.png" },

  //bone
  { value: "hereafterbeat", text: "Beat Hereafter", titleSrc: "images/Titles/Beat Hereafter (Horizontal).png", src: "images/islands/Bone Island (Beat Hereafter Skin).png" },
  { value: "mirrorbone", text: "Mirror Bone", titleSrc: "images/Titles/Mirror Bone Island.png", src: "images/islands/Mirror Bone Island.png" },

  //ethereal 
  { value: "formulaetheral", text: "Life Formula", titleSrc: "images/Titles/Life-Formula.png", src: "images/islands/Ethereal Island (Life-Formula Skin).png" },

  //sanctum 
  { value: "crescendosanctum", text: "Crescendo Moon", titleSrc: "images/Titles/Crescendo Moon.png", src: "images/islands/Magical Sanctum (Crescendo Moon Skin).png" },

  //amber 
  { value: "echoesamber", text: "Echoes of Eco", titleSrc: "images/Titles/Echoes of Eco (Horizontal).png", src: "images/islands/Amber Island (Echoes of Eco Skin).png" },

  //gold 
  { value: "anniversarygold", text: "Anniversary", titleSrc: "images/Titles/Anniversary Month.png", src: "images/islands/Gold Island (Anniversary Month Skin).png" },

  { value: "mirrorpaironormal", text: "Mirror Paironormal", titleSrc: "images/Titles/Paironormal Carnival - Minor.png", src: "images/islands/Paironormal Carnival - Minor.png" },
];

const islandsPerPage = 5;
let currentPage = 0;
const ITEMS_PER_PAGE = 5;
let skinCounter = 0;

function renderIslands() {
  islandDropdown.innerHTML = "";
  skinCounter = 0;

  const startIndex = currentPage * islandsPerPage;
  const endIndex = Math.min(startIndex + islandsPerPage, allIslands.length);

  for (let i = startIndex; i < endIndex; i++) {
    const option = document.createElement("option");
    option.value = allIslands[i].value;
    option.textContent = allIslands[i].text;
    skinCounter = 0;
    islandDropdown.appendChild(option);
    hideIslandSkin();
  }

  updateButtons();
}

function updateButtons() {
  prevButton.disabled = currentPage === 0;
  nextButton.disabled = (currentPage + 1) * islandsPerPage >= allIslands.length;
}

prevButton.addEventListener("click", () => {
  if (currentPage > 0) {
    currentPage--;
    renderIslands();
    islandDropdown.selectedIndex = 0;
    skinCounter = 0;
    updateIslandDisplay();
    hideIslandSkin();
  }
});

nextButton.addEventListener("click", () => {
  const totalPages = Math.ceil(allIslands.length / ITEMS_PER_PAGE);
  if (currentPage < totalPages - 1) {
    currentPage++;
    renderIslands();
    islandDropdown.selectedIndex = 0;
    skinCounter = 0;
    updateIslandDisplay();
    hideIslandSkin();
  }
});

function updateIslandDisplay() {
  let islandImage = document.getElementById("islandImg");
  let islandName = document.getElementById("islandNameImg");
  const selectedIsland = islandDropdown[0].innerHTML;
  let defaultSelectedIsland = selectedIsland.toLowerCase().split(" ")[0];

  if (selectedIsland === "Fire Haven") defaultSelectedIsland = "haven";
  if (selectedIsland === "Seasonal Shanty") defaultSelectedIsland = "seasonal";
  if (selectedIsland === "Plasma Islet") defaultSelectedIsland = "plasma";
  if (selectedIsland === "Bone Island") defaultSelectedIsland = "bone";
  if (selectedIsland === "Plant Island") defaultSelectedIsland = "plant";
  universalIsland = defaultSelectedIsland;

  populateMonsterSections(defaultSelectedIsland);
  islandName.src = `images/Titles/${selectedIsland}.png`;

  if (
    selectedIsland === "Fire Haven" ||
    selectedIsland === "Seasonal Shanty" ||
    selectedIsland === "Plasma Islet"
  ) {
    islandImage.src = `images/islands/${selectedIsland} Island.png`;
  } else {
    islandImage.src = `images/islands/${selectedIsland}.png`;
  }
}

function hideIslandSkin() {
  const islandButton = document.getElementById('switchIsland');
  const selectedIsland = islandDropdown.value;
  const SKIN_ISLANDS = ['plant', 'cold', 'air', 'water', 'earth', 'haven', 'oasis', 'light', 'psychic', 'faerie', 'bone', 'ethereal', 'magical Sanctum', 'amber', 'gold', 'paironormal'];
  if (SKIN_ISLANDS.includes(selectedIsland)) {
    islandButton.style.display = 'block';
  } else {
    islandButton.style.display = 'none';
  }
}
// Initial render
renderIslands();
hideIslandSkin();

// ------------------ CHECKLIST -------------------

const allIslandsNames = [
  "Plant Island",
  "Cold Island",
  "Air Island",
  "Water Island",
  "Earth Island",
  "Haven",
  "Oasis",
  "Light Island",
  "Psychic Island",
  "Faerie Island",
  "Bone Island",
  "Shugabush Island",
  "Ethereal Island",
  "Mythical Island",
  "Magical Sanctum",
  "Seasonal Shanty",
  "Amber Island",
  "Wublin Island",
  "Celestial Island",
  "Ethereal Workshop",
  "Plasma Islet",
  "Mech Islet",
  "Gold Island",
  "Magical Nexus",
  "Paironormal Carnival"
];

const islandColors = {
  "Plant Island": "#a8d5a3",
  "Cold Island": "#a9d0ff",
  "Air Island": "#f7f3b3",
  "Water Island": "#75deeeff",
  "Earth Island": "#d89047ff",
  "Haven": "#fc8259ff",
  "Oasis": "#fba284ff",
  "Light Island": "#fff3b0",
  "Psychic Island": "#b364f3ff",
  "Faerie Island": "#e376f9ff",
  "Bone Island": "#cec6b8ff",
  "Shugabush Island": "#82d3a9ff",
  "Ethereal Island": "#a77fe7ff",
  "Mythical Island": "#494147ff",
  "Magical Sanctum": "#7e70d1ff",
  "Seasonal Shanty": "#ffe0b3",
  "Amber Island": "#f1ad47ff",
  "Wublin Island": "#3b34cbff",
  "Celestial Island": "#f9cfa8ff",
  "Ethereal Workshop": "#d9cce6",
  "Plasma Islet": "#d6aaff",
  "Mech Islet": "#b2cedcff",
  "Gold Island": "#bda71eff",
  "Magical Nexus": "#064f73ff",
  "Paironormal Carnival": "#8b2ca5ff"
};

let visibleIslands = allIslandsNames.slice(0, 5);
let startIndex = 0;
const checkboxStates = {};

function openChecklist() {
  const checklistMenu = document.getElementById("checklistMenu");
  checklistMenu.classList.toggle("open");
  checklistMenu.classList.value = "open";
}

function renderChecklist() {
  const headerRow = document.getElementById("header-row");
  const monsterRows = document.getElementById("monster-rows");
  const svgNS = "http://www.w3.org/2000/svg";

  headerRow.innerHTML = "";
  monsterRows.innerHTML = "";

  document.documentElement.style.setProperty("--visible-islands-count", visibleIslands.length);

  const labelCell = document.createElement("div");
  labelCell.className = "cell label";
  labelCell.textContent = "Island Names:";
  labelCell.style.backgroundColor = "rgba(72, 3, 148, 0.7)";
  headerRow.appendChild(labelCell);

  visibleIslands.forEach((island) => {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.style.backgroundColor = islandColors[island] || "#fff";

    const title = document.createElement("div");
    title.textContent = island;
    title.style.marginBottom = "4px";
    cell.appendChild(title);

    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("viewBox", "0 0 36 36");
    svg.classList.add("progress-ring");

    const circleBackground = document.createElementNS(svgNS, "circle");
    circleBackground.setAttribute("class", "progress-ring__background");
    circleBackground.setAttribute("cx", "18");
    circleBackground.setAttribute("cy", "18");
    circleBackground.setAttribute("r", "16");
    circleBackground.setAttribute("fill", "none");
    circleBackground.setAttribute("stroke", "#999");
    circleBackground.setAttribute("stroke-width", "4");
    svg.appendChild(circleBackground);

    const circle = document.createElementNS(svgNS, "circle");
    circle.setAttribute("class", "progress-ring__circle");
    circle.setAttribute("cx", "18");
    circle.setAttribute("cy", "18");
    circle.setAttribute("r", "16");
    circle.setAttribute("fill", "none");
    circle.setAttribute("stroke", "#4caf50"); // Default green color
    circle.setAttribute("stroke-width", "4");
    circle.setAttribute("stroke-linecap", "round");
    circle.setAttribute("stroke-dasharray", "100");
    circle.setAttribute("stroke-dashoffset", "100");
    svg.appendChild(circle);

    const text = document.createElementNS(svgNS, "text");
    text.setAttribute("class", "progress-ring__text");
    text.setAttribute("x", "18");
    text.setAttribute("y", "22");
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("font-size", "8");
    text.setAttribute("fill", "#4caf50");
    text.textContent = "0%";
    svg.appendChild(text);

    cell.appendChild(svg);
    cell.progressCircle = circle;
    cell.progressText = text;

    headerRow.appendChild(cell);
  });

  // Create a set of monsters that appear on the currently visible islands
  const visibleMonsters = new Set();
  visibleIslands.forEach((islandName) => {
    const key = islandName.toLowerCase().split(" ")[0]; // Normalize island name
    const data = islandData[key];
    if (!data) return;

    // Add all monsters of each rarity type to the set
    ["common", "rare", "epic"].forEach((rarity) => {
      if (data[rarity]) {
        data[rarity].forEach((monster) => visibleMonsters.add(monster));
      }
    });
  });

  // Loop through all known monsters and render only those that are visible
  Object.values(monsterInfo).forEach((monster) => {
    if (!visibleMonsters.has(monster.name)) return;

    const row = document.createElement("div");
    row.className = "row";

    // Create the monster cell with image and name
    const monsterCell = document.createElement("div");
    monsterCell.className = "cell monster";
    monsterCell.innerHTML = `<img src="${monster.image}" alt="${monster.name}"><span style="color: #fff; text-shadow: 0 0 10px #9b59b6;">${monster.name}</span>`;
    row.appendChild(monsterCell);

    // For each visible island, add a checkbox if the monster is available there
    visibleIslands.forEach((island) => {
      const cell = document.createElement("div");
      cell.className = "cell";
      cell.style.backgroundColor = islandColors[island] || "#fff";

      const islandKey = island.toLowerCase().split(" ")[0];
      const islandDataEntry = islandData[islandKey];

      // Check if monster is present on this island
      const monsterPresent = ["common", "rare", "epic"].some(
        (rarity) => islandDataEntry?.[rarity]?.includes(monster.name)
      );

      if (monsterPresent) {
        const key = `${monster.name}|${island}`;
        const checked = checkboxStates[key] || false;

        // Create toggle switch for monster collection status
        const wrapper = document.createElement("div");
        wrapper.className = "checkbox-wrapper-8";

        const id = `chk-${monster.name.replace(/\s+/g, "_")}-${island.replace(/\s+/g, "_")}`;
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "tgl tgl-skewed";
        checkbox.id = id;
        checkbox.checked = checked;

        // Update state and progress when checkbox changes
        checkbox.addEventListener("change", () => {
          checkboxStates[key] = checkbox.checked;
          saveCheckboxStates();   // <-- Save to localStorage
          updateProgress();
        });

        const label = document.createElement("label");
        label.className = "tgl-btn";
        label.setAttribute("data-tg-off", "Not Collected");
        label.setAttribute("data-tg-on", "Collected!");
        label.setAttribute("for", id);

        wrapper.appendChild(checkbox);
        wrapper.appendChild(label);
        cell.appendChild(wrapper);
      } else {
        // Monster not available on this island
        cell.textContent = "Not Available On This Island";
        cell.classList.add("unavailable");
      }

      row.appendChild(cell);
    });

    monsterRows.appendChild(row);
  });

  // Function to update progress rings based on collected monsters
  function updateProgress() {
    const islandTotals = {};       // Total monsters per island
    const islandCheckedCounts = {}; // Collected monsters per island

    // Count total monsters per island
    visibleIslands.forEach((island) => {
      const key = islandKeyMap[island];
      const data = islandData[key];
      islandTotals[island] = ["common", "rare", "epic"].reduce(
        (sum, rarity) => sum + (data?.[rarity]?.length || 0),
        0
      );
      islandCheckedCounts[island] = 0;
    });

    // Count how many monsters are checked (collected)
    Object.entries(checkboxStates).forEach(([key, checked]) => {
      if (!checked) return;
      const [, island] = key.split("|");
      if (visibleIslands.includes(island)) {
        islandCheckedCounts[island] = (islandCheckedCounts[island] || 0) + 1;
      }
    });

    // Update each island's progress ring and percentage text
    visibleIslands.forEach((island, idx) => {
      const cell = headerRow.children[idx + 1]; // Skip label cell
      if (!cell?.progressCircle || !cell?.progressText) return;

      const total = islandTotals[island];
      const checked = islandCheckedCounts[island];
      const percent = total > 0 ? (checked / total) * 100 : 0;

      const circumference = 2 * Math.PI * 16; // Circle radius = 16
      const offset = circumference * (1 - percent / 100);

      // Change stroke color based on progress
      if (percent === 100) {
        cell.progressCircle.style.stroke = "yellow";  // Change to yellow when 100%
      } else {
        cell.progressCircle.style.stroke = "#4caf50"; // Default green
      }

      cell.progressCircle.style.strokeDashoffset = offset;
      cell.progressText.textContent = `${Math.round(percent)}%`;
    });
  }

  // Initial progress update after rendering
  updateProgress();
}

// Advance islands
function updateChecklistWithAnimation(direction = 1) {
  const container = document.getElementById("header-row");

  // Trigger fade-out
  container.classList.add("fade-out");

  // After fade-out ends, update content
  setTimeout(() => {
    // Move the visible window of islands
    startIndex = (startIndex + direction + allIslandsNames.length) % allIslandsNames.length;
    const end = startIndex + 5;
    visibleIslands =
      end <= allIslandsNames.length
        ? allIslandsNames.slice(startIndex, end)
        : allIslandsNames
          .slice(startIndex)
          .concat(allIslandsNames.slice(0, end - allIslandsNames.length));

    // Replace contents AFTER old has faded out
    renderChecklist();

    // Force reflow to restart animation
    void container.offsetWidth;

    // Trigger fade-in
    container.classList.remove("fade-out");
    container.classList.add("fade-in");

    // Clean up fade-in class
    setTimeout(() => container.classList.remove("fade-in"), 400);
  }, 400); // match this to your CSS fade-out duration
}


document.getElementById("next-island").addEventListener("click", () => updateChecklistWithAnimation(1));
document.getElementById("previous-island").addEventListener("click", () => updateChecklistWithAnimation(-1));

renderChecklist();

// ---------------- LOCAL STORAGE HELPERS ----------------
function saveCheckboxStates() {
  localStorage.setItem("checkboxStates", JSON.stringify(checkboxStates));
}

function loadCheckboxStates() {
  const saved = localStorage.getItem("checkboxStates");
  if (saved) {
    Object.assign(checkboxStates, JSON.parse(saved));
  }
}

// Load states immediately on page load
loadCheckboxStates();

// Now render checklist with restored states + rings
renderChecklist();

let flipped = false; // track flip state

const checklist = document.getElementById('checklist');
const checklistName = document.getElementById('monsterNameList');
const monsterTypeDropdown = document.getElementById('monsterTypeDropdown');
const commonSection = document.getElementById('commonSection');
const rareSection = document.getElementById('rareSection');
const epicSection = document.getElementById('epicSection');


const diamonds = document.getElementById('Diamonds');
const coins = document.getElementById('Coins');
const relic = document.getElementById('Relic');
const starPower = document.getElementById('StarPower');
const monsterBreedingButtons = document.getElementById('monsterDescription');

// const rare_diamonds = document.getElementById("diamondsRare");
// const rare_coins = document.getElementById("coinsRare");
// const rare_relics = document.getElementById("relicsRare");
// const rare_stars = document.getElementById('rare_star_power');
// const desc = document.getElementById("monsterDescriptionRare");

// Come back to that after completing common lists :)

const monsterLikesName = document.getElementById('monsterNameList');
const monsterLikeContainer = document.getElementById('monsterLikeContainer');
const monsterSelection = document.getElementById('monsterSelection');
const switchIsland = document.getElementById('switchIsland');
const slideMenuTitle = document.getElementById('slideMenuTitle');
const flipBtn = document.getElementById('flipChecklistBtn');

// flipBtn.addEventListener('click', () => {
//   flipped = !flipped; // toggle flip state

//   // Flip animation
//   checklist.classList.toggle('flip-view', flipped);
//   checklistName.classList.toggle('flip-view', flipped);
//   monsterTypeDropdown.classList.toggle('flip-view', flipped);
//   commonSection.classList.toggle('flip-view', flipped);
//   rareSection.classList.toggle('flip-view', flipped);
//   epicSection.classList.toggle('flip-view', flipped);
//   monsterSelection.classList.toggle('flip-view', flipped);
//   flipBtn.classList.toggle('flip-view', flipped);
//   prevButton.classList.toggle('flip-view', flipped);
//   nextButton.classList.toggle('flip-view', flipped);
//   islandDropdown.classList.toggle('flip-view', flipped);
//   switchIsland.classList.toggle('flip-view', flipped);
//   slidePanel.classList.toggle('flip-view', flipped);
//   // Hide or show resource elements
//   if (flipped) {
//     diamonds.style.display = 'none';
//     coins.style.display = 'none';
//     relic.style.display = 'none';
//     starPower.style.display = 'none';
//     monsterBreedingButtons.style.display = 'none';
//     monsterLikeContainer.style.display = 'flex';
//     monsterLikesName.innerHTML = `Monster Likes`;
//     slideButton.style.backgroundColor = 'rgb(207, 81, 64, 0.7)';
//     slideMenuTitle.style.background = 'linear-gradient(to bottom, lightgreen, #ae0505)';
//     slideMenuTitle.style.backgroundClip = 'text';
//   } else {
//     checklist.style.transition = 'transform 0.6s'; // ensures smooth animation
//     diamonds.style.display = 'flex';
//     coins.style.display = 'flex';
//     relic.style.display = 'flex';
//     starPower.style.display = 'flex';
//     monsterLikeContainer.style.display = 'none';
//     monsterBreedingButtons.style.display = 'block';
//     monsterLikesName.innerHTML = `Monster List:`;
//     slideButton.style.backgroundColor = 'rgb(147, 112, 219, 0.7)';
//     slideMenuTitle.style.background = 'linear-gradient(to bottom, lightgreen, rgb(245, 189, 84))';
//     slideMenuTitle.style.backgroundClip = 'text';
//   }

//   // console.log('Flipped:', flipped);
// });



function closeMenu() {
  hideBlur(); // Hide the blur overlay
  resetAll();
}

function simulateMonsterSearch(monsterName) {
  // console.log(monsterName);
  searchMonsterInput.value = monsterInfo[monsterName].name;
  // console.log(searchMonsterInput.value);
  searchMonsterInput.dispatchEvent(new Event("input"));
}

function searchMonsters() {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();
  const resultsContainer = document.getElementById("resultsContainer");
  resultsContainer.innerHTML = "";

  const matchedMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchTerm)
  );

  if (matchedMonsters.length === 0) {
    resultsContainer.innerHTML = "<p>Unknown Currently <br><br> Please Come Back Soon!</p>";
    return;
  }

  matchedMonsters.forEach((monster) => {
    // Show as Normal
    displayMonster(monster, "normal");

    // Optionally show Rare if it has a rare image
    if (monster.image.rare) displayMonster(monster, "rare");

    // Optionally show Epic if it has an epic image
    if (monster.image.epic) displayMonster(monster, "epic");
  });
}

function restrictMonsterSearch() {
  const value = searchMonsterInput.value;
  if (value.length === 0) {
    searchMonsterInput.style.border = "";
    return true;
  }

  // Generate all monster variations (Base, Rare, Epic)
  const allMonsterNames = monsters.flatMap(m => [
    m.name,                // Base name
    `Rare ${m.name}`,      // Rare version
    `Epic ${m.name}`       // Epic version
  ]);

  // Capitalize the first letter of each word but respect lowercase for words like "joob"
  const formattedInput = value
    .toLowerCase()
    .replace(/(^|[\s_\-'])+([a-z])/g, (m, before, letter, offset, string) => {
      // Lookahead to preserve lowercase letter if needed
      const nextChar = string[offset + 1];
      const shouldCapitalize = nextChar && nextChar === nextChar.toUpperCase(); // "Joob" vs "joob"
      return before + (shouldCapitalize ? letter.toUpperCase() : letter);
    });

  const matches = allMonsterNames.filter(name =>
    name.toLowerCase().startsWith(formattedInput.toLowerCase())
  );

  if (matches.length === 0) {
    // No possible monster starts this way → block nonsense
    searchMonsterInput.style.border = "2px solid red";
    searchMonsterInput.value = value.slice(0, -1); // Remove the last invalid char
    return false;
  } else {
    // At least one possible match → fine
    searchMonsterInput.style.border = "";
    return true;
  }
}


[firstMonsterInput, secondMonsterInput].forEach((input) => {
  input.addEventListener("input", () => {
    const oldStart = input.selectionStart;
    const oldEnd = input.selectionEnd;

    let value = input.value;
    if (!value) return;

    // Capitalize the first letter of each word, but leave lowercase for names like "joob"
    let formatted = value.replace(/\b[a-z]/g, (char, index, str) => {
      const nextChar = str[index + 1];
      const shouldCapitalize = nextChar && nextChar === nextChar.toUpperCase(); // Check for uppercase in next word

      // If the next word should start with uppercase, capitalize, otherwise leave as lowercase
      return shouldCapitalize ? char.toUpperCase() : char;
    });

    // Try to match correct casing from monster list
    const allMonsterNames = monsters.flatMap(m => {
      const names = [m.name]; // Normal
      if (m.image.rare) names.push(`Rare ${m.name}`);
      if (m.image.epic) names.push(`Epic ${m.name}`);
      return names;
    });

    const possibleMatches = allMonsterNames.filter(name =>
      name.toLowerCase().startsWith(formatted.toLowerCase())
    );

    if (possibleMatches.length > 0) {
      const bestMatch = possibleMatches[0];
      formatted = bestMatch.slice(0, formatted.length);
    }

    // Only update input if it changed
    if (formatted !== value) {
      const diff = formatted.length - value.length;
      input.value = formatted;
      const newPos = Math.max(0, oldEnd + diff);
      input.setSelectionRange(newPos, newPos);
    }

    // Block invalid input
    const matches = allMonsterNames.filter(name =>
      name.toLowerCase().startsWith(formatted.toLowerCase())
    );
    if (matches.length === 0 && value.length > 0) {
      input.style.border = "2px solid red";
      input.value = value.slice(0, -1);
    } else {
      input.style.border = "";
    }
  });
});