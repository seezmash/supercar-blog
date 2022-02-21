import Link from 'next/link'

import blogList from '../db/blogs.js'
import tempTags from '../db/tags.js'
import SidebarTitle from '../components/widgets/SidebarTitle'

let shortBlogList = Array.from(blogList).sort(() => Math.random() - 0.5)
let randomTags = Array.from(tempTags).sort(() => Math.random() - 0.5)

let shortBlogList2 = shortBlogList.splice(1)
let shortBlogList3 = shortBlogList2.splice(3)
let shortBlogList4 = shortBlogList3.splice(3)

randomTags.splice(9)

export default function Sidebar({ selectedTabIndex, pageSpecificTabs }) {
  return (
    <div className="h-full min-h-screen w-1/4 flex-shrink-0 pl-7">
      <div className="box_radius mt-10 flex h-9 max-w-md flex-grow border bg-white p-2 text-sm">
        <img
          className="mt-0.5 ml-2 inline-block h-3 w-3"
          src="./icons/ui/search.svg"
          alt=""
        />
        <div className="mt-1F ml-4 inline-block cursor-text text-sm leading-4 tracking-wide text-gray-500">
          Search
        </div>
      </div>
      <div className="w-fullF bg-yellow-400F ml-0 mt-8 h-80">
        <SidebarTitle title="Popular Tags" />
        <div className="mb-8 flex w-full flex-grow flex-wrap">
          {randomTags.map((item, index) => {
            return (
              <div
                key={'shortid_' + index}
                className="box_radius borderF borderF shadowF mr-2 mb-2 cursor-pointer border bg-white px-2 py-1 text-sm font-semibold"
              >
                {item}
              </div>
            )
          })}
        </div>

        <div className="mt-8 w-full">
          <SidebarTitle title="Recommended Topics" />
          {shortBlogList2.map((item, index) => {
            return (
              <Link href={'/post'} passHref key={'shortid_' + index}>
                <div className="card_container bg-whiteF relative mb-6 flex w-full flex-grow cursor-pointer select-none flex-row overflow-hidden pb-1">
                  <div className="box_radius relative top-0 left-0 mr-3 h-20 w-20 w-full flex-shrink-0 overflow-hidden">
                    <img
                      className="border-br h-fullF image_visibility absolute left-0 h-20 w-20 object-cover"
                      src={item.image}
                      alt={item.title}
                    />
                  </div>
                  <div className="blog_title_medium bold_text_color card_title mt-1 text-sm font-semibold leading-snug">
                    {item.title}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
