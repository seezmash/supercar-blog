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
        className="card_hashtagF relative w-fullF w-36 bg-yellow-100F h-4 mb-2"
      >
        <div className="absolute inline-block ml-1 bg-red-300F h-5 w-40 text-xs font-semibold text-gray-800">
          {item}
        </div>
      </div>
    )
  })

  return (
    <Link href={linkURL2} passHref>
      <div className="relative border-tF mr-6 mb-10 pt-10F bg-white w-48 shadow p-1 pb-6 rounded-md flex-grow select-none cursor-pointer">
        <div className="relative top-0 left-0 w-full h-24 flex box_radius overflow-hidden flex-row-reverse">
          <div className="flex-grow h-24 overflow-hidden">
            <img
              className="absolute object-cover w-full h-full blur-2xl inset-8 image_visibility"
              src={item.image}
              alt={item.title}
            />
            <div className="absolute w-full h-full bg-white bg-opacity-60"></div>
            <div className="absolute px-2 h-15 overflow-hidden mt-2 w-full">
              {renderedGroupTags}
            </div>
          </div>
          <div className="inline-block w-24 h-24">
            <img
              className="absolute object-cover w-24 h-24 left-0"
              src={item.image}
              alt={item.title}
            />
          </div>
        </div>
        <div className="relative w-full px-2 ">
          <div className="group_title_medium mb-2 mt-2 font-bold text-lg truncate">
            {item.title}
          </div>
          <div className="group_text_medium text-sm opacity-90 h-10 overflow-hidden">
            {item.overview}
          </div>
        </div>
      </div>
    </Link>
  )
}
