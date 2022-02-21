function getRandomTags() {
  let tags = [
    'All',
    'E-Sports',
    'Chilled',
    'MMO',
    'Anime',
    'Racing',
    'Social',
    'Among Us',
    'Cosplay',
    'Minecraft',
    'Xbox',
    'Streaming',
    'Emotes',
    'Valorant',
    'Community',
    'Entertainment',
    'Role-Playing',
    'Playstation',
    'Developer',
    'Meme',
    'Gaming',
    'gamer',
    'battleroyale ',
    'retrogaming ',
    'modernwarfare ',
    'destiny ',
    'csgo ',
    'pubgmobile ',
    'nintendoswitch ',
    'pcgamer ',
    'follow ',
    'esports ',
    'meme ',
    'bhfyp',
    'instagamer ',
    'warzone'
  ]
  let shuffledTags = tags.sort(() => Math.random() - 0.5)
  return shuffledTags.splice(4)
}

function getRandomOverview() {
  let list = [
    'Twitch Affiliate, South African, Happy place, Horror Games, Handstands.',
    '🌈 Twitch Streamer | 💜 Savage | 🎙️Content Creator | 🎮 Geek Culture | 🍕 Foodie | 🇿🇦 Cosplayer | 🦊 Foxytech Affiliate',
    'I am a variety streamer from South Africa that loves talking and playing games!',
    "Welcome to my channel where I'm just trying to be a diverse addition to the South African gaming & streaming scene.",
    "I'm a variety streamer. I ply everything! I also stream IRL content while I'm away for vacation or visiting my family! ",
    'South African - Fulltime Twitch Affiliated Streamer 🇿🇦 for Mettlestate. A Lot Of IRL Streams And Sloppy Gameplay. Welcome To My Ever-growing Family!',
    'Hello there! My name is Arshy, I am a Dubai based streamer and I plan on world dominat- i mean, making friends and spreading joy. You’re welcome to join me in some gaming frenzies and chat c:',
    "I'm a goofy, clumsy girl from The Netherlands who loves to play a variety of games. I often play with viewers as well. Oh and I cosplay :3",
    'South African Streamer with Big Dreams, Spicy Memes, and Variety Streams.',
    "Sup yall it's me it's ya boy Asmongold",
    "Fextralife is a gaming community & game news source fueled by a team of dedicated gamers! We play Action, Adventure and RPGs, some Survival & FPS too!. Elden Ring, Baldur's Gate 3 hype! Check out our 200+ Wikis, reviews on Youtube & more! This week STREAMS: Diablo 2, Chernoblyte, New World (soon!)",
    "Entrepreneur - Twitch partner - CEO @Unexpected_Fr - Casu à mon grand dam mais j'organise des trucs. - contact : @alexdach on twitter or dach@zerator.tv",
    "It's NOT easy, it's never BEEN easy and it will never BE easy. But in the end, it will ALWAYS be worth it.",
    'Welcome to Brawlhalla: the free to play platform fighter with full cross-play on PlayStation, Xbox, Nintendo Switch, Steam, iOS, and Android! Check out the Stream Schedule to know when to watch: https://www.brawlhalla.com/schedule/',
    'PepeHands',
    "I'm a professional videogame idiot from Spain. I enjoy challenging myself, goofing around and making friends.",
    ':)',
    'Progaming team DeToNator Streamer KH',
    'Professional Kiwi Gamer.',
    'Thank you for stopping by! I am a YouTube Content Creator who is here to enjoy making others happy and entertained. Follow all my social media outlets if you want to stay up to date with me :)',
    "Ahoy! I'm Danneh (Dan-Nee) and I'm and MMO Addict ☠️ I fly drones for a living and Ive created content for many well known brands around the world 🚎⛱️ Converting a Campervan into a full-time travel, filming, gaming van.",
    'Loading Bio...',
    'Mongraal streams Fortnite, Just Chatting and Naraka: Bladepoint.',
    'Hi there! Come join the stream and live chat with me! I am a hardcore streamer that LOVES every part about it!. Go check out my schedule to see when I am live!',
    'Improv artist who calls scammers, and likes to explore new things. Laughter is the best medicine.',
    'Hello. I stream sometimes. business: fundy@afkcreators.com. banner by @crustery',
    'Welcome to my channel! I am Korean streamer who likes to do outdoor streaming, gaming, and also other fun contents! I speak three languages : English, Korean and Chinese. Hope you guys have fun watching my stream :)',
    'Survival | Shooters | RP | Gamedev',
    '22 year old, fluffy entertainer looking to give the best viewing experience possible!',
    "Channel dedicated to New World & other MMOs. When I'm not streaming I'm probably working on NewWorldFans.com",
    'Yarr Harr! Welcome to the Pirates! Chat Interaction/Friendly Community/And Over the Top Gameplay and Laughs, we set sail Mon-Sat at 10PM EST.',
    'Hi.',
    'Former Pro Gamer and incredibly Hyped up girl! Variety Streamer and all around game enthusiast. Come hang out and enjoy the fun!',
    'Family-friendly • Positivity • Fortnite • Creator for Luminosity Gaming • 26 years old • Born in Nova Scotia • Canadian/Lebanese • #EhTeam',
    "I'm Ken, a highly interactive and community focused streamer! We have an amazing community here and want you to be a part of it!",
    'Come for the gameplay, Stay for the vibes. Professional player for @NRGgg on @PlayApex'
  ]
  let maxIndex = list.length > 0 ? list.length : 0
  let randomIndex = Math.floor(Math.random() * maxIndex)
  return list[randomIndex]
}

let theList = [
  {
    title: 'TheMainSalad',
    image: '/img/groups/salad.jpg',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Bravado Gaming',
    image: '/img/groups/bravado.jpg',
    tags: getRandomTags(),
    overview:
      'South Africa’s premier #esports team and gaming lifestyle brand. Sponsors: @Alienware @intelgaming Discover: http://linktr.ee/bravadogaming'
  },
  {
    title: 'Energy Esports',
    image: '/img/groups/energy.jpg',
    tags: getRandomTags(),
    overview:
      'Founded in 2012, Energy Esports is a professional multi-gaming organisation (MGO) that competes at the highest level of competitive Gaming in South Africa.'
  },
  {
    title: 'Big 5 Esports',
    image: '/img/groups/big5.jpg',
    tags: getRandomTags(),
    overview: 'Electronic Sports & Gaming Entertainment Organization 🇿🇦'
  },
  {
    title: 'Goliath Gaming',
    image: '/img/groups/goliath.jpg',
    tags: getRandomTags(),
    overview:
      'Flag of South Africaesports team: FIFA, Fortnite, Street Fighter, Tekken, StarCraft & Counter-Strike #GoliathGamingArmy Powered by @PredatorAfrica.'
  },
  {
    title: 'The A-Team Community ZA',
    image: '/img/groups/a_team.jpg',
    tags: getRandomTags(),
    overview: '😊Meet Cool New Members And Soon To Be Friends'
  },
  {
    title: 'Legacy ZA',
    image: '/img/groups/legacy.jpg',
    tags: ['Gaming', 'Rust', 'Scum', 'Youtube'],
    overview: 'PUBG and variety streamer'
  },
  {
    title: 'Sinister5',
    image: '/img/groups/sinister.jpg',
    tags: getRandomTags(),
    overview:
      'South African MGO with teams participating in #Dota2, #CSGO, #FIFA, #PUBG, #Simracing & #R6Siege'
  },
  {
    title: 'Power supremacy😫',
    image: '/img/groups/power.jpg',
    tags: getRandomTags(),
    overview:
      'A fun, friendly server for south Africans who wanna make friends we play a lot of games,come to join us always open to suggestions also be scared of the admin(Jk) but the owner is nice.😁'
  },
  {
    title: 'Chill Centeral ZA',
    image: '/img/groups/chill.jpg',
    tags: getRandomTags(),
    overview: 'I like long walks on the beach'
  },
  {
    title: 'Telkom VS Gaming',
    image: '/img/groups/telkom.jpg',
    tags: getRandomTags(),
    overview:
      'African gaming brand and the leading platform for esports in South Africa. Dare to be better. #TelkomVSGaming #ComicConAfrica'
  },
  {
    title: '🌙Sleepover🌟',
    image: '/img/groups/sleepover.jpg',
    tags: getRandomTags(),
    overview:
      'We welcome you to SLEEPOVER. What makes our server special, you ask?'
  },
  {
    title: 'Gamer-Topia',
    image: '/img/groups/topia.jpg',
    tags: getRandomTags(),
    overview:
      'Were a pretty chill community people who like to talk about art and gaming and stuff. If you have trouble making friends youll fit right in.'
  },
  {
    title: 'SUGAR N’ SPICE',
    image: '/img/groups/spice.jpg',
    tags: getRandomTags(),
    overview:
      '(14+) This server is for gamers who are looking to talk, play, and become friends with fellow players!'
  },
  {
    title: 'Banana Beach',
    image: '/img/groups/banana.jpg',
    tags: getRandomTags(),
    overview:
      'A fun server with lots of stuff and bots great community many active members.'
  },
  {
    title: 'The SUSmigos 🌮',
    image: '/img/groups/sus.jpg',
    tags: getRandomTags(),
    overview:
      'A small, exclusive group of active gamers with nightly play sessions. Very Among Us focused, but also featuring Jackbox, Poker, UNO, Gartic Phone, Skribbl.io, All Bad Cards, Bombergrounds, and more!'
  },
  {
    title: 'Sweet Tea',
    image: '/img/groups/tea.jpg',
    tags: getRandomTags(),
    overview:
      'Welcome to Sweet Tea server, a fun server where can simply just get to know new people from around the world, were still quiet a new server but we are growing!'
  },
  {
    title: 'Hogwarts',
    image: '/img/groups/hogwarts.jpg',
    tags: getRandomTags(),
    overview:
      'Harry Potter Role play and chatting server with So many funny bots Join here. But remember no NSWF. SO we invite you to join. Enjoy the server'
  },
  {
    title: 'Cat Café | Anime & Community',
    image: '/img/groups/cafe.jpg',
    tags: getRandomTags(),
    overview:
      'Cat Café is a great place to socialize and make new Friends! 🌺 Feel welcome to Hangout with over 1500+ Friendly Anime Fans 🎀 60+Self Roles'
  },
  {
    title: 'Anime Haven',
    image: '/img/groups/Anime Haven.jpg',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Anti-Social Society',
    image: '/img/groups/Anti-Social Society.jpg',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Atarashii',
    image: '/img/groups/Atarashii.jpg',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Cali Anime Social',
    image: '/img/groups/Cali Anime Social.jpg',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Crunchyroll',
    image: '/img/groups/Crunchyroll.jpg',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Gaming & Chats',
    image: '/img/groups/Gaming & Chats.jpg',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Luna Academy  Anime & Gaming',
    image: '/img/groups/Luna Academy  Anime & Gaming.jpg',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Pokemon Panda Palace',
    image: '/img/groups/Pokemon Panda Palace.jpg',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'RWBY FNDM',
    image: '/img/groups/RWBY FNDM.jpg',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Shimeji Simulation Discord',
    image: '/img/groups/Shimeji Simulation Discord.jpg',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Smithtainment Gaming',
    image: '/img/groups/Smithtainment Gaming.jpg',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Sushiba',
    image: '/img/groups/Sushiba.jpg',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'The Persona SMT Server',
    image: '/img/groups/The Persona SMT Server.jpg',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'The Raptors Hub',
    image: '/img/groups/The Raptors Hub.jpg',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'TrueGamers',
    image: '/img/groups/TrueGamers.jpg',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Karuta WRLD',
    image: '/img/groups/karuta.jpg',
    tags: getRandomTags(),
    overview:
      '¶We are a friendly and helpful server mainly based around the discord bot Karuta and we have:'
  },
  {
    title: '⭐ PokeXperience ⭐',
    image: '/img/groups/⭐ PokeXperience ⭐.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'a crumb of egirls pls',
    image: '/img/groups/a crumb of egirls pls.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'AFK Arena',
    image: '/img/groups/AFK Arena.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Among Us Community',
    image: '/img/groups/Among Us Community.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Among Us France',
    image: '/img/groups/Among Us France.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Animal Crossing 3DS en Español🇪🇸',
    image: '/img/groups/Animal Crossing 3DS en Español🇪🇸.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: "Army's Chillin",
    image: "/img/groups/Army's Chillin.png",
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'BIG Games',
    image: '/img/groups/BIG Games.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: "Blathers' Library",
    image: "/img/groups/Blathers' Library.png",
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Dank Daily',
    image: '/img/groups/Dank Daily.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Dank Trades',
    image: '/img/groups/Dank Trades.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Dark Traders',
    image: '/img/groups/Dark Traders.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Dynamo Gaming',
    image: '/img/groups/Dynamo Gaming.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'FALLEN 🌸 Social ★ Anime ★ Art ★ Emote & Emoji & Stickers',
    image:
      '/img/groups/FALLEN 🌸 Social ★ Anime ★ Art ★ Emote & Emoji & Stickers.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Fellow Epics',
    image: '/img/groups/Fellow Epics.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'FNCS Scrims EU',
    image: '/img/groups/FNCS Scrims EU.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'FNPL Console LFG',
    image: '/img/groups/FNPL Console LFG.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Genshin Impact Unofficial',
    image: '/img/groups/Genshin Impact Unofficial.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'GIFLAND',
    image: '/img/groups/GIFLAND.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Islanders',
    image: '/img/groups/Islanders.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'ISO GAMING COMMUNITY',
    image: '/img/groups/ISO GAMING COMMUNITY.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Jailbreak',
    image: '/img/groups/Jailbreak.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'KBBQ Social • Emotes & Emojis • Anime • Music • Nitro',
    image:
      '/img/groups/KBBQ Social • Emotes & Emojis • Anime • Music • Nitro.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'KFCEATBOX',
    image: '/img/groups/KFCEATBOX.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Kungarna East Scrims',
    image: '/img/groups/Kungarna East Scrims.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Love, Death & Gaming',
    image: '/img/groups/Love, Death & Gaming.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Lunaris Labs',
    image: '/img/groups/Lunaris Labs.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Memeology',
    image: '/img/groups/Memeology.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Mobile Legends Bang Bang',
    image: '/img/groups/Mobile Legends Bang Bang.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'MrBeast Gaming',
    image: '/img/groups/MrBeast Gaming.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Naruto WRLD',
    image: '/img/groups/Naruto WRLD.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Neo',
    image: '/img/groups/Neo.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'NOBRU',
    image: '/img/groups/NOBRU.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Nookazon',
    image: '/img/groups/Nookazon.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Path of Exile',
    image: '/img/groups/Path of Exile.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'PewDiePie Floor Gang',
    image: '/img/groups/PewDiePie Floor Gang.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'PollitoCrew🐤',
    image: '/img/groups/PollitoCrew🐤.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'RBLX.Land Community',
    image: '/img/groups/RBLX.Land Community.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Rise of Kingdoms',
    image: '/img/groups/Rise of Kingdoms.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Sakura Onsen Art & Anime',
    image: '/img/groups/Sakura Onsen Art & Anime.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Social Lites',
    image: '/img/groups/Social Lites.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Socialize Fun & Gaming',
    image: '/img/groups/Socialize Fun & Gaming.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'TacoShack Official Server',
    image: '/img/groups/TacoShack Official Server.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Universo do Godenot',
    image: '/img/groups/Universo do Godenot.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Villager Esports',
    image: '/img/groups/Villager Esports.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Voicemod',
    image: '/img/groups/Voicemod.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Wolves Of Alt Street',
    image: '/img/groups/Wolves Of Alt Street.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'WorldBox - God Simulator',
    image: '/img/groups/WorldBox - God Simulator.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: "zipporah's cottage.png",
    image: "/img/groups/zipporah's cottage.png",
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: '🍕 UnbelievaBoat 🍕',
    image: '/img/groups/🍕 UnbelievaBoat 🍕.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  }
]

let shuffledList = theList.sort(() => Math.random() - 0.5)

export default shuffledList
