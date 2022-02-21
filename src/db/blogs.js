let theList = [
  {
    title: '2021 Acura TLX long-term update: The Type S handoff',
    image: '/img/roadshow/tlx-front.jpg',
    overview:
      'In which we say goodbye to our TLX 2.0T Advance and welcome a lovely Type S to our long-term fleet.'
  },
  {
    title:
      '2021 Lincoln Corsair Grand Touring first drive review: Speak softly and carry a big battery',
    image: '/img/roadshow/2021-lincoln-corsair-grand-touring-31.jpg',
    overview:
      'The addition of a plug-in hybrid drivetrain makes the compact Corsair far more efficient, if not necessarily more engaging.'
  },
  {
    title: '2022 Volkswagen Jetta first drive review: Little updates add up',
    image: '/img/roadshow/jetta-promo.jpg',
    overview: "Mild tweaks make up the Jetta's midcycle refresh."
  },
  {
    title: '2022 Porsche Taycan GTS first drive review: Predictably excellent',
    image: '/img/roadshow/2022-porsche-taycan-gts-009.jpg',
    overview:
      "The electric Taycan reaps the benefits of Porsche's GTS treatment."
  },
  {
    title:
      '2022 Honda Civic Si first drive review: A practical, approachable performer',
    image: '/img/roadshow/honda-civic-si-2022-19.jpg',
    overview:
      'The new Honda Civic Si does its part to save the manuals, delivering engaging and accessible performance for three-pedal enthusiasts.'
  },
  {
    title: '2021 Tesla Model Y review: Nearly great, critically flawed',
    image: '/img/roadshow/2021-tesla-model-y-06.jpg',
    overview:
      'The Tesla Model Y seems like the complete package, but its active safety suite is so fundamentally flawed that the whole dish is completely ruined.'
  },
  {
    title: '2022 Bentley Bentayga S review: Lively luxury',
    image: '/img/roadshow/dsc01288.jpg',
    overview: 'The Bentayga S is a great mix of affluence and agility.'
  },
  {
    title: '2022 Hyundai Elantra N first drive review: Just aggro enough',
    image: '/img/roadshow/2022-hyundai-elantra-n021.jpg',
    overview:
      'The turbocharged Elantra N hits the scene with bold looks and exciting performance.'
  },
  {
    title: '2022 Hyundai Kona N first drive review: Wild child',
    image: '/img/roadshow/2022-hyundai-kona-n-001.jpg',
    overview: "Hyundai's little Kona crossover SUV gets big-time N performance."
  },
  {
    title:
      "Porsche Mission R prototype quick drive review: Tomorrow's GT racer, today",
    image: '/img/roadshow/porsche-mission-r-00003.jpg',
    overview:
      "It may not be 2025 yet, but Porsche's electric Mission R prototype is ready to drive, and we've been lucky enough to have a go."
  },
  {
    title: '2021 Ford Escape Plug-In Hybrid review: Unexcitingly efficient',
    image: '/img/roadshow/escape-phev-promo.jpg',
    overview:
      "The Escape's delayed PHEV variant is no-nonsense electrified transportation."
  },
  {
    title: '2022 Audi RS E-Tron GT review: Almost perfect',
    image: '/img/roadshow/2022-audi-rs-e-tron-gt-05.jpg',
    overview:
      "After just a few miles behind the wheel of Audi's latest grand tourer, you'll wonder why we ever started burning gas in the first place."
  },
  {
    title: '2022 Mazda MX-30 first drive review: Is 100 miles enough?',
    image: '/img/roadshow/mazda-mx-30-2022-736561.jpg',
    overview:
      "This all-electric crossover is upscale inside and pleasant to drive, but that's not enough to make up for its cramped interior and paltry range."
  },
  {
    title: '2022 Infiniti QX60 review: Recently renovated',
    image: '/img/roadshow/2022-infiniti-qx60-autograph-01.jpg',
    overview:
      "The QX60 looks better than before and has more features, even if it's fundamentally the same."
  },
  {
    title: '2021 Ford Bronco Badlands review: The Jeep wrangler',
    image: '/img/roadshow/ford-bronco-badlands-2dr-2022-735957.jpg',
    overview:
      "If you've been thinking about getting a Wrangler as your daily driver, think again."
  },
  {
    title: '2022 Volvo XC40 Recharge review: A great SUV made even better',
    image: '/img/roadshow/2022-volvo-xc40-recharge-ev-111.jpg',
    overview:
      "An electric powertrain seriously improves Volvo's fashionable compact crossover."
  },
  {
    title:
      '2022 Volvo XC60 B6 first drive review: Mild hybrid, major improvements',
    image: '/img/roadshow/2022-volvo-xc60-b6-r-design-122.jpg',
    overview:
      "The Swedish brand's turbocharged and supercharged four-cylinder powertrain is vastly better with a little electric assist."
  },
  {
    title:
      '2022 Audi A3 and S3 first drive review: A strong case for sticking with sedans',
    image: '/img/roadshow/a3-article-promo.jpg',
    overview:
      "Audi's entry-level four-doors are compelling, even as the market keeps shifting to crossovers."
  },
  {
    title:
      '25 years of Porsche Boxster: An inspired drive with the inspiration',
    image: '/img/roadshow/2021-porsche-boxster-25-years-17.jpg',
    overview:
      'The Porsche 718 Boxster 25 Years heritage model not only honors its predecessor, but delivers in its own right.'
  },
  {
    title: '2022 BMW M5 CS review: Go for the gold',
    image: '/img/roadshow/2022-bmw-m5-cs-020.jpg',
    overview: 'The lightweight CS treatment takes the BMW M5 to new heights.'
  },
  {
    title: '2021 Porsche Panamera 4S review: Petrol pusher',
    image: '/img/roadshow/panamera-promo.jpg',
    overview:
      'The Panamera 4S refines its sporty formula for 2021 with few drawbacks.'
  },
  {
    title: '2022 BMW i4 first drive review: The best 4 Series is electric',
    image: '/img/roadshow/2022-bmw-i4-022.jpg',
    overview:
      'With strong electric power and iDrive 8 smarts, the new i4 is everything you could want out of a 4 Series EV.'
  },
  {
    title: '2022 Honda Civic Hatchback review: A sure thing',
    image: '/img/roadshow/civic-promo.jpg',
    overview:
      'The redesigned five-door Civic offers luxury-car sophistication and grown-up design in a practical, comfortable package.'
  },
  {
    title:
      '2022 Ford Mustang Mach-E GT first drive review: More power, more tech, more fun',
    image: '/img/roadshow/mach-e-promo.jpg',
    overview:
      "With more power, stronger brakes, stickier tires and Ford's BlueCruise hands-free driving assistant, the GT isn't just a better Mach-E, it's one of the best Mustangs, full stop."
  },
  {
    title: '2022 Mercedes-Benz EQS second drive review: The S-Class of EVs',
    image: '/img/roadshow/mercedes-benz-eqs-580-2022-736710.jpg',
    overview:
      "The all-electric EQS sedan showcases a level of luxury and technology that can't really be matched by any of its competitors."
  },
  {
    title: '2022 Lexus NX first drive review: Hitting all the marks',
    image: '/img/roadshow/nx-promo.jpg',
    overview:
      "Just about every part of this compact luxury SUV that should've been improved, is."
  },
  {
    title: '2021 BMW M8 by CarBahn Autoworks quick drive review: Crazy on you',
    image: '/img/roadshow/carbahn-bmw-m8-021.jpg',
    overview:
      'Leave it to Steve Dinan to make an already great sports coupe even better.'
  },
  {
    title: '2022 Infiniti QX55 review: Fetching but flawed',
    image: '/img/roadshow/qx55-promo.jpg',
    overview:
      "This crossover-coupe is super-stylish and decently premium, but it's lackluster to drive and the tech isn't great."
  },
  {
    title: '2022 BMW iX first drive review: A techy EV with an eye on design',
    image: '/img/roadshow/2022-bmw-ix-first-drive-promo.jpg',
    overview:
      'The new BMW iX has a powerful electric powertrain and one of the coolest interiors around.'
  },
  {
    title:
      '2022 Rivian R1T first drive review: Electric pickup tackles the trail',
    image: '/img/roadshow/r1t-ext-offroaduphill-00515-final-rx.jpg',
    overview:
      "Bursting at the seams with capability, Rivian's R1T is not just the first battery-powered light-duty pickup, it's also just a really good truck."
  },
  {
    title: '2021 Lamborghini Huracan STO first drive review: Race car cosplay',
    image: '/img/roadshow/lamborghini-huracan-sto-015.jpg',
    overview:
      'Lamborghini uses its motorsports know-how to make the ultimate road-legal Huracan.'
  },
  {
    title: '2021 Polaris Slingshot review: Still crazy after all these gears',
    image: '/img/roadshow/2021-polaris-slingshot-70.jpg',
    overview:
      "Much improved, this trike still isn't for everyone, but that's by design. Just be sure you like attention."
  },
  {
    title: '2022 Volkswagen Taos review: Fashionably late',
    image: '/img/roadshow/taos-promo.jpg',
    overview:
      'VW took its sweet time introducing a compact SUV, but it was worth the wait.'
  },
  {
    title:
      '2022 Mercedes-AMG SL prototype first ride review: Back to its roots',
    image: '/img/roadshow/2022-mercedes-amg-sl-sl63-roadster-prototype-118.jpg',
    overview:
      "Sleeker, lighter and a whole lot sportier, Mercedes' redesigned roadster packs major fundamental changes."
  },
  {
    title: '2022 Porsche Macan S first drive review: S is for sweet spot',
    image: '/img/roadshow/2022-porsche-macan-s-012.jpg',
    overview:
      'The midtier Macan S offers the best balance of power, performance and price.'
  },
  {
    title:
      '2021 Volkswagen ID 4 Pro S review: A good EV let down by the details',
    image: '/img/roadshow/2022-volkswagen-id-4-pro-s-26.jpg',
    overview:
      'This all-electric SUV is a solid, if not outstanding option. It nails the fundamentals, though a number of quirks degrade the experience.'
  },
  {
    title:
      "2021 Lexus RC F Fuji Speedway Edition review: Exclusive doesn't always mean good",
    image: '/img/roadshow/2021-lexus-rc-f-fuji-speedway-edition-5.jpg',
    overview:
      "This limited-edition RC F looks and sounds ferocious, but there isn't much bite to back up that bark."
  },
  {
    title:
      '2022 Bentley Continental GT Speed first drive review: Power and precision',
    image: '/img/roadshow/2022-bentley-continental-gt-speed-julep-14.jpg',
    overview:
      'Bentley adds horsepower and sharpens handling creating a Continental GT peak performer.'
  },
  {
    title: '2021 Mazda MX-5 Miata review: Simply the best',
    image: '/img/roadshow/dsc00971.jpg',
    overview:
      "Mazda's little convertible still offers one of the most joyful driving experiences on the road today."
  },
  {
    title: '2021 Ford GT quick drive review: Still so special',
    image: '/img/roadshow/ford-gt-002.jpg',
    overview:
      "Ford's GT is no longer the new hotness, but it's an exciting supercar that still turns heads -- especially at Monterey Car Week."
  },
  {
    title: '2022 Toyota GR 86 first drive review: An enthralling second act',
    image: '/img/roadshow/2022-toyota-gr-86-premium-53.jpg',
    overview: 'Toyota powers up and refines its lightweight sports coupe.'
  },
  {
    title:
      '2021 Porsche Panamera Turbo S E-Hybrid review: Pure plug-in pleasure',
    image: '/img/roadshow/panamera35.jpg',
    overview:
      "Porsche's range-topping Panamera proves plug-in hybrid power can bolster sports car performance."
  }
]

export default theList
