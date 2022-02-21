import Link from 'next/link'

const LargeBlogCard = ({ item, index }) => {
  let linkURL = '/post'

  let itemTitle = item.title
  let itemImage = item.image

  return (
    <Link href={linkURL} passHref>
      <div className="relative inline-block w-80 mr-6 mb-8 flex-shrink-0 bg-white rounded-md shadow-md flex-grow flex-colF select-none overflow-hidden cursor-pointer">
        <div className="relative top-0 bg-whiteF left-0 w-full h-52 box_radiusF overflow-hidden">
          <img
            className="object-cover border-br w-full h-52 h-fullF left-0 image_visibility"
            src={itemImage}
            alt={itemTitle}
          />
          {/* <div className="absolute -bottom-3 left-0 w-full h-3/4 bg-gradient-to-t from-black to-transparent"></div> */}
        </div>

        <div className="relative w-full flex-grow bg-whiteF box_radius px-5 py-3">
          <div className="blog_title_medium font-bold font_style text-xl bold_text_color leading-snugF">
            {itemTitle}
          </div>
          <div className="blog_text_medium pt-2 h-14">{item.overview}</div>
        </div>
      </div>
    </Link>
  )
}

export default LargeBlogCard
