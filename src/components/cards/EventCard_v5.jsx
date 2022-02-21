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
        className="text-whiteF mr-1.5 inline-block rounded-sm  bg-opacity-20 px-1 text-xs "
      >
        {item}
      </div>
    )
  })

  return (
    <Link href={linkURL2} passHref>
      <div className="box_radius relative mr-6 mb-8 inline-block w-56 flex-grow cursor-pointer select-none overflow-hidden bg-white pb-1 shadow">
        <div className=" box_radiusF relative top-0 left-0 block h-36 w-full overflow-hidden">
          <img
            className="border-brF h-fullF image_visibility absolute left-0 h-full w-full object-cover object-top"
            src={item.image}
            alt={item.title}
          />
          {/* <div className="rounded-tlF nav_accent_colorF top-0F hiddenF mb-0.5F mr-0.5F roundedF w-fullF absolute bottom-0 right-0 rounded-tl bg-gray-700 py-1 px-1.5 pt-0.5 text-xs font-semibold text-white">
            November 24
          </div> */}
        </div>
        <div className="rounded-tlF nav_accent_colorF top-0F radius_br hiddenF mb-0.5F mr-0.5F roundedF relative bottom-0 right-0 w-full bg-slate-800 py-1 px-1.5 pt-0.5 text-xs font-semibold text-white">
          November 24
        </div>
        {/* ====================================================================== */}
        <div className="h-28F relative mb-4 w-full px-2">
          <div className="group_title_medium h-16F mt-1.5 mb-1.5 text-lg font-bold">
            {item.title}
          </div>
          <div className="h-10F text-green-800F bg-gray-100F borderF bg-slate-200F table hidden overflow-hidden rounded-sm bg-green-50 px-1 py-0.5 text-xs font-semibold tracking-wide text-green-600 text-black">
            Febuary 17
          </div>
          <div className="mt-3 h-10 overflow-hidden  text-sm">
            {item.overview}
          </div>
        </div>
        {/* ====================================================================== */}
        <div className="rounded-fullF bg-blue-50F px-1F text-blue-800F text_accent_color bottom-0 table hidden h-5 w-auto text-sm font-bold">
          {/* <img
            className="inline-block w-4 h-4"
            src="./icons/ui/calendar2-event.svg"
            alt=""
          /> */}
          <span className="">November</span> <span className="ml-1.5">25</span>
          <span className="text-whiteF box_radius right-0 ml-3 hidden bg-red-50 px-1 font-semibold text-red-600">
            live
          </span>
          <span className="text-whiteF box_radius right-0 ml-3 hidden bg-yellow-50 px-1 font-semibold text-yellow-600">
            soon
          </span>
        </div>
        <div className="right-0F rounded-tlF mr-0.5F nav_accent_colorF top-0F radius_br absolute bottom-0 mx-auto mb-1 ml-1 hidden rounded bg-gray-100 py-1 px-1.5 pt-0.5 text-xs font-semibold text-black">
          November 24
        </div>
      </div>
    </Link>
  )
}
