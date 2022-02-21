import NextHead from '../components/next/NextHead'

// Page Elements
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import PaginationBar from '../components/PaginationBar'

// Sections
import Sidebar from '../components/Sidebar'

import SectionTitle from '../components/widgets/SectionTitle'

import BlogCard from '../components/cards/BlogCard_v4'

// =================================================================
import blogArticlesArray from '../db/blogs.js'

let shortBlogList = Array.from(blogArticlesArray).sort(
  () => Math.random() - 0.5
)
let shortBlogList2 = shortBlogList.splice(18)

// =================================================================

const NewsPage = () => {
  // const [movies, setMovies] = useState(null)
  // useEffect(() => {
  //   fetch('/api/movies')
  //     .then((res) => res.json())
  //     .then((json) => setMovies(json.movies))
  //     .catch((err) => console.log(err))
  // }, [])
  // console.log('our movies', movies)
  return (
    <>
      <NextHead title="Blog | Supercar Blog" />
      <Nav selectedPageIndex={3} />

      <div className="page_width_wide mx-auto flex w-full flex-row">
        <div className="outer_wrapper">
          <div className="inner_wrapper mt-8 flex h-full flex-shrink flex-col">
            <SectionTitle title="Blog" />
            <div className="relative flex w-full flex-wrap">
              {shortBlogList.map((item, index) => {
                return <BlogCard item={item} key={'event_item_home' + index} />
              })}
            </div>
          </div>
        </div>
        {/* ==================== Sidebar ==================== */}
        <Sidebar />
      </div>

      <PaginationBar />
      <Footer />
    </>
  )
}

export default NewsPage
