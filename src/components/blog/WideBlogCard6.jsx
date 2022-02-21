import Link from "next/link"

export default function EventCard1({ item, isLastItem }) {
  let linkURL = "/post"
  let borderClass = isLastItem ? " border-none" : " border-b"
  borderClass = ""

  return (
    <Link href={linkURL} passHref>
      <div
        className={
          "relative mb-2F border-b pb-5 w-full flex-grow select-none overflow-hidden cursor-pointer flex mb-5 pb-5F " +
          borderClass
        }
      >
        <div className="relative inline-block w-1/2 flex-grow bg-whiteF box_radius pr-6 pb-0">
          {/* <div className="blog_category_hF font-semibold text-sm text-green-600">
            News
          </div> */}
          <div className="blog_title_medium ml-0 pl-0 pt-0.5 font-bold font_style text-lg leading-6 bold_text_color">
            {item.title}
          </div>
          {/* <div className="blog_text_medium pt-1.5 h-12 truncateF hiddenF text-xs tracking-wider uppercaseF ">
            By Soap McTavish 4 days ago
          </div> */}
        </div>
        <div className="relative top-0 bg-whiteF left-0 w-40 h-28 box_radius overflow-hidden">
          <img
            className="absolute object-cover border-br w-full h-40 h-fullF left-0 image_visibility"
            src={item.image}
            alt={item.title}
          />
          {/* <div className="absolute right-0 bg_accent_color py-1 px-2 text-white text-xs font-semibold radius_bl">
            News
          </div> */}
        </div>
      </div>
    </Link>
  )
}
