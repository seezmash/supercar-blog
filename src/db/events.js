function getRandomCategory() {
  return 'Sweaty Gamers'
}

function getRandomOverview() {
  let randomList = [
    'Find empty spot in cupboard and sleep all day make meme, make cute face when in doubt, wash.',
    'Mewl for food at 4am flex claws on the humans belly and purr like a lawnmower',
    "It's a wonderful restaurant! If this tableau I recreate, perhaps I can re-snare my mate. I know, I just call her Annabelle",
    'Bless up. Watch your back, but more importantly when you get out the shower, dry your back, its a cold world out there.',
    'The key to more success is to have a lot of pillows. Find peace, life is like a water fall, you’ve gotta flow.'
  ]
  let maxIndex = randomList.length > 0 ? randomList.length : 0
  let randomIndex = Math.floor(Math.random() * maxIndex)
  return randomList[randomIndex]
}

let theList = [
  {
    title: '2022 F1 World Championship Round 1 - Bahrain Grand Prix',
    image: '/img/events/XPB_1079682_HiRes.jpg',
    category: getRandomCategory(),
    overview: getRandomOverview()
  },
  {
    title: '2022 F1 World Championship Round 2 - Saudi Arabian Grand Prix',
    image: '/img/events/XPB_1123781_HiRes.jpg',
    category: getRandomCategory(),
    overview: getRandomOverview()
  },
  {
    title: '2022 F1 World Championship Round 3 - Australian Grand Prix',
    image: '/img/events/XPB_979074_HiRes.jpg',
    category: getRandomCategory(),
    overview: getRandomOverview()
  },
  {
    title: '2022 F1 World Championship Round 4 - Emilia Romagna Grand Prix',
    image: '/img/events/XPB_1081732_HiRes_0.jpg',
    category: getRandomCategory(),
    overview: getRandomOverview()
  },
  {
    title: '2022 F1 World Championship Round 5 - Miami Grand Prix',
    image: '/img/events/Miami_Map_Corners.jpeg',
    category: getRandomCategory(),
    overview: getRandomOverview()
  },
  {
    title: '2022 F1 World Championship Round 6 - Spanish Grand Prix',
    image: '/img/events/XPB_1085704_HiRes.jpg',
    category: getRandomCategory(),
    overview: getRandomOverview()
  },
  {
    title: '2022 F1 World Championship Round 7 - Monaco Grand Prix',
    image: '/img/events/XPB_1088260_HiRes.jpg',
    category: getRandomCategory(),
    overview: getRandomOverview()
  },
  {
    title: '2022 F1 World Championship Round 8 - Azerbaijan Grand Prix',
    image: '/img/events/XPB_1090519_HiRes.jpg',
    category: getRandomCategory(),
    overview: getRandomOverview()
  },
  {
    title: '2022 F1 World Championship Round 9 - Canadian Grand Prix',
    image: '/img/events/XPB_991845_HiRes.jpg',
    category: getRandomCategory(),
    overview: getRandomOverview()
  },
  {
    title: '2022 F1 World Championship Round 10 - British Grand Prix',
    image: '/img/events/XPB_1099607_HiRes.jpg',
    category: getRandomCategory(),
    overview: getRandomOverview()
  },
  {
    title: '2022 F1 World Championship Round 11 - Austrian Grand Prix',
    image: '/img/events/XPB_1096716_HiRes.jpg',
    category: getRandomCategory(),
    overview: getRandomOverview()
  },
  {
    title: '2022 F1 World Championship Round 12 - French Grand Prix',
    image: '/img/events/XPB_1093043_HiRes.jpg',
    category: getRandomCategory(),
    overview: getRandomOverview()
  },
  {
    title: '2022 F1 World Championship Round 13 - Hungarian Grand Prix',
    image: '/img/events/XPB_1101920_HiRes.jpg',
    category: getRandomCategory(),
    overview: getRandomOverview()
  },
  {
    title: '2022 F1 World Championship Round 14 - Belgian Grand Prix',
    image: '/img/events/XPB_1105320_HiRes.jpg',
    category: getRandomCategory(),
    overview: getRandomOverview()
  },
  {
    title: '2022 F1 World Championship Round 15 - Dutch Grand Prix',
    image: '/img/events/XPB_1107146_HiRes.jpg',
    category: getRandomCategory(),
    overview: getRandomOverview()
  },
  {
    title: '2022 F1 World Championship Round 16 - Italian Grand Prix',
    image: '/img/events/XPB_1109408_HiRes.jpg',
    category: getRandomCategory(),
    overview: getRandomOverview()
  },
  {
    title: '2022 F1 World Championship Round 17 - Russian Grand Prix',
    image: '/img/events/XPB_1111928_HiRes.jpg',
    category: getRandomCategory(),
    overview: getRandomOverview()
  },
  {
    title: '2022 F1 World Championship Round 18 - Singapore Grand Prix',
    image: '/img/events/XPB_1010249_HiRes.jpg',
    category: getRandomCategory(),
    overview: getRandomOverview()
  },
  {
    title: '2022 F1 World Championship Round 19 - Japanese Grand Prix',
    image: '/img/events/XPB_1015320_HiRes.jpg',
    category: getRandomCategory(),
    overview: getRandomOverview()
  },
  {
    title: '2022 F1 World Championship Round 20 - United States Grand Prix',
    image: '/img/events/XPB_1116245_HiRes.jpg',
    category: getRandomCategory(),
    overview: getRandomOverview()
  },
  {
    title: '2022 F1 World Championship Round 21 - Mexico City Grand Prix',
    image: '/img/events/XPB_1118199_HiRes.jpg',
    category: getRandomCategory(),
    overview: getRandomOverview()
  },
  {
    title: '2022 F1 World Championship Round 22 - São Paulo Grand Prix',
    image: '/img/events/XPB_1119926_HiRes.jpg',
    category: getRandomCategory(),
    overview: getRandomOverview()
  },
  {
    title: '2022 F1 World Championship Round 23 - Abu Dhabi Grand Prix',
    image: '/img/events/XPB_1126023_HiRes.jpg',
    category: getRandomCategory(),
    overview: getRandomOverview()
  },
  {
    title: '2022 F1 Pre-Season Test - Barcelona, Spain',
    image: '/img/events/XPB_1085508_HiRes.jpg',
    category: getRandomCategory(),
    overview: getRandomOverview()
  },
  {
    title: 'F1 2022 Pre-Season Test - Sakhir, Bahrain',
    image: '/img/events/XPB_1077988_HiRes.jpg',
    category: getRandomCategory(),
    overview: getRandomOverview()
  }
]

export default theList
