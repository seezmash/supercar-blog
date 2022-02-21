import Link from 'next/link'

export default function EventCard1({ item, isLastItem }) {
  let linkURL = '/post'
  let randomCategory = 'Community'

  let borderClass = isLastItem ? 'border-none' : 'border-b'
  borderClass = ''

  return (
    <Link href={linkURL} passHref>
      <div
        className={
          'relative mr-8 mb-8 w-full bg-white shadow-md p-2 rounded-md space-x-6 flex-grow select-none overflow-hidden cursor-pointer flex pt-4F pb-6F hover:text-green-700 ' +
          borderClass
        }
      >
        <div className="relative inline-block mr-3F top-0 bg-whiteF left-0 w-72 h-48 box_radius overflow-hidden">
          <img
            className="absolute object-cover border-br w-full h-full h-fullF left-0 image_visibility"
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
        <div className="relative inline-block w-1/2 flex-grow bg-whiteF box_radius pl-4F pb-0">
          <div className=" font-semibold text-sm text_accent_color">
            {randomCategory}
          </div>
          <div className="blog_title_medium max-w-lg h-28F pt-3 font-bold  font_style text-2xl bold_text_color">
            {item.title}
          </div>
          <div className="blog_text_medium text-base pt-3 h-16 truncateF hiddenF">
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
