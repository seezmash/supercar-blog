import Link from 'next/link'

const LargeBlogCard = ({ item, index }) => {
  let linkURL = '/post'

  let itemTitle = item.title
  let itemImage = item.image

  return (
    <Link href={linkURL} passHref>
      <div className="relative inline-block w-72 mr-6 mb-8 h-60 shadow-md flex-grow flex-col select-none overflow-hidden cursor-pointer">
        <div className="relative top-0 bg-whiteF left-0 w-full h-full box_radius overflow-hidden">
          <img
            className="absolute object-cover border-br w-full h-full h-fullF left-0 image_visibility"
            src={itemImage}
            alt={itemTitle}
          />
          <div className="absolute -bottom-3 left-0 w-full h-3/4 bg-gradient-to-t from-black to-transparent"></div>
        </div>

        <div className="absolute bottom-0  bg-opacity-80F bg-gray-900F bg-blackF">
          <div className="blog_title_medium px-5 drop-shadow-lg pt-3F leading-snug pb-4 bg-gray-800F text-xl font-bold font_style text-white truncateF">
            {itemTitle}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default LargeBlogCard
