function getRandomTags() {
  let tags = [
    'Mercedes',
    'McLaren',
    'Porsche',
    'Bentley',
    'Bugatti',
    'Ferrari',
    'BMW',
    'Audi',
    'Toyota',
    'Championship',
    'Hyundai',
    'Volvo',
    'Moto GP',
    'Formula 1',
    'Le Mans',
    'Super GT',
    'Vintage',
    'Aston Martin',
    'Lamborghini',
    'Lexus',
    'Mazda',
    'Ford',
    'Redbull'
  ]
  let shuffledTags = tags.sort(() => Math.random() - 0.5)
  return shuffledTags.splice(3)
}

function getRandomOverview() {
  let list = [
    'Pommy ipsum fancy a cuppa accordingly every fortnight lost her marbles copper',
    'Queen Elizabeth scally fancied a flutter yorkshire mixture lost her marbles, twiglets devonshire cream tea naff a tenner fancied a flutter',
    'Squirrel ear hole yorkshire mixture bloody shambles Amelia Pond have a bash, bovver boots got his end away pork dripping.',
    'Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase.',
    'Pinnace holystone mizzenmast quarter crows nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon',
    'Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.',
    'Mamasita melbourne cricket ground, the crazy wing challenge the rebels brunswick and brunswick st swanston melbourne central',
    'The emerald peacock a macaron connoisseur, trams avalon is so not melb spencer st station the corner hotel south melb dim sims',
    'South of the river, hu tong dumplings richmond tigers purple emerald bespectacled girls black is alway in fashion',
    'Lorem ipsizzle uhuh ... yih! dang amizzle, crunk adipiscing elit. Nizzle the bizzle velit, dawg volutpat, suscipizzle rizzle',
    'Fo shizzle things nisi yippiyo justo molestie ma nizzle. Stuff ligula mi, mah nizzle ac, lobortizzle ac'
  ]
  let maxIndex = list.length > 0 ? list.length : 0
  let randomIndex = Math.floor(Math.random() * maxIndex)
  return list[randomIndex]
}

let theList = [
  {
    title: 'Max Verstappen',
    image: '/img/drivers/max-verstappen-red-bull-racing-1.webp',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Daniel Ricciardo',
    image: '/img/drivers/daniel-ricciardo-mclaren-1.webp',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Lando Norris',
    image: '/img/drivers/lando-norris-mclaren-1.webp',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Sebastian Vettel',
    image: '/img/drivers/sebastian-vettel-aston-martin-1.webp',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Nicholas Latifi',
    image: '/img/drivers/nicholas-latifi-williams-racin-1.webp',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Nikita Mazepin',
    image: '/img/drivers/nikita-mazepin-haas-f1-team-1.webp',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Pierre Gasly',
    image: '/img/drivers/pierre-gasly-alphatauri-1.webp',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Sergio Perez',
    image: '/img/drivers/sergio-perez-red-bull-racing-1.webp',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Fernando Alonso',
    image: '/img/drivers/fernando-alonso-alpine-f1-team-1.webp',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Charles Leclerc',
    image: '/img/drivers/charles-leclerc-ferrari-1.webp',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Lance Stroll',
    image: '/img/drivers/lance-stroll-aston-martin-1.webp',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Yuki Tsunoda',
    image: '/img/drivers/yuki-tsunoda-alphatauri-1.webp',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Alex Albon',
    image: '/img/drivers/alex-albon-williams-1.webp',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Guanyu Zhou',
    image: '/img/drivers/guanyu-zhou-alfa-romeo-racing-1.webp',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Esteban Ocon',
    image: '/img/drivers/esteban-ocon-alpine-f1-team-1.webp',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Lewis Hamilton',
    image: '/img/drivers/lewis-hamilton-mercedes-1.webp',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Mick Schumacher',
    image: '/img/drivers/mick-schumacher-haas-f1-team-1.webp',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Carlos Sainz Jr.',
    image: '/img/drivers/carlos-sainz-jr-ferrari-1.webp',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'George Russell',
    image: '/img/drivers/george-russell-mercedes-1.webp',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Andrea Dovizioso',
    image: '/img/drivers/andrea-dovizioso-rnf-racing-1.webp',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Johann Zarco',
    image: '/img/drivers/johann-zarco-pramac-racing-1.webp',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Luca Marini',
    image: '/img/drivers/luca-marini-sky-racing-team-vr-1.webp',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Maverick Viñales',
    image: '/img/drivers/maverick-vinales-aprilia-racin-1.webp',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Fabio Quartararo',
    image: '/img/drivers/fabio-quartararo-yamaha-factor-1.webp',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Franco Morbidelli',
    image: '/img/drivers/franco-morbidelli-petronas-yam-1.webp',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Enea Bastianini',
    image: '/img/drivers/enea-bastianini-gresini-racing-1.webp',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Raúl Fernández',
    image: '/img/drivers/raul-fernandez-ktm-tech3-1.webp',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Takaaki Nakagami',
    image: '/img/drivers/takaaki-nakagami-lcr-honda-1.webp',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Brad Binder',
    image: '/img/drivers/brad-binder-red-bull-ktm-facto-1.webp',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Joan Mir',
    image: '/img/drivers/joan-mir-team-suzuki-motogp-1.webp',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Darryn Binder',
    image: '/img/drivers/darryn-binder-rnf-racing-1.webp',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Aleix Espargaro',
    image: '/img/drivers/aleix-espargaro-aprilia-racing-1.webp',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Alex Rins',
    image: '/img/drivers/alex-rins-team-suzuki-motogp-1.webp',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Jack Miller',
    image: '/img/drivers/jack-miller-ducati-team-1.webp',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    title: 'Remy Gardner',
    image: '/img/drivers/remy-gardner-ktm-tech3-1.webp',
    tags: getRandomTags(),
    overview: getRandomOverview()
  }
]

let shuffledList = theList.sort(() => Math.random() - 0.5)

export default shuffledList
