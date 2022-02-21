import Link from 'next/link'

export default function EventCard1({ item }) {
  let groupTagsList = [
    'Made in SA',
    'FPS',
    'MMORPG',
    'MOBA',
    'Events',
    'Feedback',
    'Youtube'
  ]

  let linkURL2 = 'https://www.twitch.tv/'

  let renderedGroupTags = groupTagsList.map((item, index) => {
    return (
      <div
        key={'groupTag' + index}
        className="text-whiteF mr-1.5 inline-block rounded-sm bg-white bg-opacity-20 px-1 text-xs "
      >
        {item}
      </div>
    )
  })

  return (
    <a
      href={linkURL2}
      passHref
      target="_blank"
      rel="noreferrer"
      className="inline-block w-52 flex-grow"
    >
      <div className="relative mr-6 mb-4  select-none overflow-hidden bg-white">
        <div className="live_streamer_card_image box_radius relative top-0 left-0 block h-32 w-full cursor-pointer overflow-hidden bg-gray-100">
          <img
            className="border-brF h-fullF image_visibility absolute left-0 h-full w-full object-cover object-top"
            src={item.image}
            alt={item.title}
          />
          {/* <div className="w-16F box_radiusF absolute mt-1 ml-1 h-4 rounded-sm bg-red-600 px-1 text-xs font-semibold leading-4 text-white">
            Live
          </div> */}
          <div className="w-16F ml-1F absolute bottom-0 mt-1 h-5 rounded-sm bg-black bg-opacity-50 px-2 text-xs font-semibold text-white">
            53 viewers
          </div>
          <div className="live_streamer_card_twitch_notification top-8F box_radius absolute right-2 mt-2 ml-2 h-8 w-32 bg-black bg-opacity-50 px-2 text-xs font-semibold text-white">
            <img
              className="border-brF image_visibility absolute left-0 mt-1.5 ml-2 h-5 w-5 object-cover object-top"
              src="./icons/social/twitch.png"
              alt={item.title}
            />
            <div className="ml-7 mt-1.5 inline-block">Twitch</div>
          </div>
        </div>
        <div className="bg-gray-500F relative mt-1 h-14 w-full">
          <div className="group_title_medium text-sm font-semibold">
            {item.title}
          </div>
          <div className="group_text_medium mt-0 overflow-hidden">
            {item.overview}
          </div>
        </div>
      </div>
    </a>
  )
}
