import Link from 'next/link'

export default function EventCard1({ item }) {
  let tagsList = [
    'Gears of War',
    'Apex Legends',
    'Twitch',
    'YouTube',
    'FB Gaming',
    'MOBA',
    'Cosplay'
  ]

  let linkURL = '/streamers/userProfile'
  let linkURL2 = '/profiles/groupProfile'
  let shortTags = item.tags
  shortTags.splice(3)

  let renderedGroupTags = shortTags.map((item, index) => {
    return (
      <div
        key={'groupTag' + index}
        className="card_hashtagF w-fullF bg-yellow-100F relative mb-2 h-4 w-36"
      >
        <div className="bg-red-300F absolute ml-1 inline-block h-5 w-40 text-xs font-semibold text-gray-800">
          {item}
        </div>
      </div>
    )
  })

  return (
    <Link href={linkURL2} passHref>
      <div className="box_radius border-tF pt-10F relative mr-6 mb-10 w-48 flex-grow cursor-pointer select-none overflow-hidden bg-white pb-6 shadow">
        <div className=" relative top-0 left-0 flex h-24 w-full flex-row-reverse overflow-hidden">
          <div className="h-24 flex-grow overflow-hidden">
            <img
              className="image_visibility absolute inset-8 h-full w-full object-cover blur-2xl"
              src={item.image}
              alt={item.title}
            />
            <div className="absolute h-full w-full bg-white bg-opacity-60"></div>
            <div className="h-15 absolute mt-2 w-full overflow-hidden px-2">
              {renderedGroupTags}
            </div>
          </div>
          <div className="inline-block h-24 w-24">
            <img
              className="absolute left-0 h-24 w-24 object-cover"
              src={item.image}
              alt={item.title}
            />
          </div>
        </div>
        <div className="relative w-full px-2 ">
          <div className="group_title_medium mb-2 mt-2 truncate text-lg font-bold">
            {item.title}
          </div>
          <div className="group_text_medium h-10 overflow-hidden text-sm opacity-90">
            {item.overview}
          </div>
        </div>
      </div>
    </Link>
  )
}
