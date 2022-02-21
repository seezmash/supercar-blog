import Link from 'next/link'
import WideBlogCard5 from '../blog/WideBlogCard5'
import MiniHalfBlogBlock from '../blog/MiniHalfBlogBlock'
import SidebarWideBlogCard from '../blog/SidebarWideBlogCard'

export default function Sidebar({ blogArticlesArray }) {
  let linkURL = '/post'
  let shortBlogList = Array.from(blogArticlesArray)
  let shortBlogList2 = shortBlogList.splice(15)
  let shortBlogList3 = shortBlogList2.splice(11)
  let shortBlogList4 = shortBlogList3.splice(4)
  let shortBlogList5 = shortBlogList4.splice(5)
  let shortBlogList6 = shortBlogList5.splice(2)
  let shortBlogList7 = shortBlogList6.splice(2)

  let randomTags = ['Gaming', 'Hardware', 'Community', 'News']

  return (
    <div className=" mt-4F mb-0 flex w-full">
      {/* ============================= BLOGS ========================================= */}
      {/* ====================================================================== */}
      <div className="bg-yellow-200F h-full w-40 flex-grow pr-8">
        <div className="w-full flex-grow">
          {shortBlogList.map((item, index) => {
            return (
              <WideBlogCard5
                item={item}
                key={'shortid_' + index}
                isLastItem={index + 1 === shortBlogList.length}
              />
            )
          })}
        </div>
      </div>

      {/* ====================================================================== */}
      {/* ============================= SIDEBAR ========================================= */}
      {/* ====================================================================== */}

      <div className="sidebar_widthF border-lF bg-green-200F ml-4 h-full w-72 max-w-md pl-5">
        <div className="w-full">
          {shortBlogList2.map((item, index) => {
            return (
              <Link href={linkURL} passHref key={'shortid_' + index}>
                <div className="pt-2F flexF border-bF pt-6F relative mr-4 mb-2 w-full flex-grow cursor-pointer select-none overflow-hidden pb-4">
                  <div className="box_radius relative top-0 left-0 mr-3 h-36 w-full overflow-hidden">
                    <img
                      className="border-br h-fullF image_visibility absolute left-0 h-full w-full object-cover"
                      src={item.image}
                      alt={item.title}
                    />
                  </div>
                  <div className="relative w-full flex-grow pt-3">
                    <div className=" text_accent_color text-xs font-semibold">
                      Community
                    </div>
                    <div className="blog_title_medium font_styleF bold_text_color mt-1 text-base font-bold leading-snug">
                      {item.title}
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      {/* ====================================================================== */}
    </div>
  )
}
