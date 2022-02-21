import Link from 'next/link'

export default function EventCard1({ item, isLastItem }) {
  let linkURL = '/post'
  let randomCategory = 'Community'

  let borderClass = isLastItem ? 'border-none' : 'border-b'
  borderClass = 'border-none'

  return (
    <Link href={linkURL} passHref>
      <div
        className={
          'pt-4F relative mr-8 mb-6 flex w-full flex-grow cursor-pointer select-none space-x-6 overflow-hidden pb-6 hover:text-green-700 ' +
          borderClass
        }
      >
        <div className="mr-3F bg-whiteF box_radius relative top-0 left-0 inline-block h-40 w-64 overflow-hidden">
          <img
            className="border-br h-fullF image_visibility absolute left-0 h-full w-full object-cover"
            src={item.image}
            alt={item.title}
          />
          {/* <div className="absolute top-0 bg_accent_color py-1 px-2 text-white text-xs radius_br">
            News
          </div> */}
          {/* <div className="hidden absolute bg_accent_color py-1 px-2 text-white text-xs font-semibold radius_br">
            News
          </div> */}
        </div>
        <div className="bg-whiteF box_radius pl-4F relative inline-block w-1/2 flex-grow pb-0">
          <div className=" text_accent_colorF roundedF bg-gray-200F p-1F px-2F table text-xs font-semibold tracking-wide">
            {randomCategory}
          </div>
          <div className="blog_title_medium h-28F font_style bold_text_color max-w-lg pt-3 text-xl font-bold">
            {item.title}
          </div>
          <div className="blog_text_medium truncateF hiddenF h-14 pt-2 text-sm">
            {item.overview}
          </div>
          {/* <div className="blog_text_medium pt-1.5 h-12 truncateF hiddenF text-xs tracking-wider uppercase ">
            By Soap McTavish 4 days ago
          </div> */}
        </div>
      </div>
    </Link>
  )
}
