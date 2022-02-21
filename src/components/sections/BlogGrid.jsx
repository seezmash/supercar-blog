import Link from 'next/link'
// import LargeBlogCard from '../cards/LargeBlogCard'
import BlogCard from '../cards/BlogCard_v3'

export default function Sidebar({ blogArticlesArray, numberOfArticles = 12 }) {
  let linkURL = '/post'
  let shortBlogList = Array.from(blogArticlesArray)
  let shortBlogList2 = shortBlogList.splice(numberOfArticles)

  let randomTags = ['Gaming', 'Hardware', 'Community', 'News']

  return (
    <div className="relative w-full">
      <div className="relative flex w-full flex-wrap">
        {shortBlogList.map((item, index) => {
          return <BlogCard item={item} key={'shortid_' + index} />
        })}
      </div>
    </div>
  )
}
