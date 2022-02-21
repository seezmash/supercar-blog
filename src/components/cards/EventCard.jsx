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

  let linkURL2 = '/profiles/eventProfile'

  let renderedGroupTags = groupTagsList.map((item, index) => {
    return (
      <div
        key={'groupTag' + index}
        className="inline-block text-xs bg-white bg-opacity-20 px-1 text-whiteF rounded-sm mr-1.5 "
      >
        {item}
      </div>
    )
  })

  return (
    <Link href={linkURL2} passHref>
      <div className="relative inline-block border-tF bg-white pt-10F mr-6 mb-10 w-64 h-80 flex-grow select-none rounded-md shadow p-1 bg-whiteF roundedF overflow-hidden cursor-pointer">
        <div className="relative block top-0 bg-whiteF left-0 w-full h-40 box_radius overflow-hidden">
          <img
            className="absolute object-cover object-top border-brF w-full h-full h-fullF left-0 image_visibility"
            src={item.image}
            alt={item.title}
          />
          <div className="hidden bottom-0 right-0 rounded-tlF rounded mb-0.5 mr-0.5 nav_accent_colorF absolute bg-gray-700 py-1 pt-0.5 px-1.5 top-0F text-white text-xs font-semibold radius_br">
            November 24
          </div>
        </div>
        {/* ====================================================================== */}
        <div className="relative w-full bg-whiteF mb-4 px-2 h-28F">
          <div className="group_title_medium font-bold text-lg mt-1.5 mb-1.5 h-16F">
            {item.title}
          </div>
          <div className="text-xs tracking-wide table px-1 py-0.5 font-semibold h-10F overflow-hidden rounded bg-gray-100 bg-green-50F text-green-800F">
            Febuary 17
          </div>
          <div className="text-sm h-10 overflow-hidden  mt-3">
            {item.overview}
          </div>
        </div>
        {/* ====================================================================== */}
        <div className="hidden rounded-fullF bottom-0 bg-blue-50F table px-1F text-blue-800F text_accent_color w-auto font-bold text-sm h-5">
          {/* <img
            className="inline-block w-4 h-4"
            src="./icons/ui/calendar2-event.svg"
            alt=""
          /> */}
          <span className="">November</span> <span className="ml-1.5">25</span>
          <span className="right-0 ml-3 text-whiteF bg-red-50 text-red-600 px-1 box_radius font-semibold hidden">
            live
          </span>
          <span className="right-0 ml-3 text-whiteF bg-yellow-50 text-yellow-600 px-1 box_radius font-semibold hidden">
            soon
          </span>
        </div>
        <div className="hidden mx-auto bottom-0 right-0F rounded-tlF rounded mb-1 mr-0.5F ml-1 nav_accent_colorF absolute bg-gray-100 py-1 pt-0.5 px-1.5 top-0F text-black text-xs font-semibold radius_br">
          November 24
        </div>
      </div>
    </Link>
  )
}
