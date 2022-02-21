import NextHead from '../components/next/NextHead'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import PaginationBar from '../components/PaginationBar'
import SectionTitle from '../components/widgets/SectionTitle'
import Sidebar from '../components/Sidebar'
import BlogCard from '../components/cards/BlogCard_v4'
import EventCard from '../components/cards/EventCard_v6'
import blogList from '../db/blogs.js'
import eventsList from '../db/events'

let shortEventsList = Array.from(eventsList).sort(() => Math.random() - 0.5)
let shortBlogList = Array.from(blogList).sort(() => Math.random() - 0.5)

let shortBlogList2 = shortBlogList.splice(3)
let shortBlogList3 = shortBlogList2.splice(2)
let shortBlogList4 = shortBlogList3.splice(3)
let shortEventsList2 = shortEventsList.splice(24)
let shortEventsList3 = shortEventsList2.splice(6)
let shortEventsList4 = shortEventsList3.splice(6)
let shortEventsList5 = shortEventsList4.splice(6)
let shortEventsList6 = shortEventsList5.splice(6)

const HomePage = () => {
  return (
    <>
      <NextHead title="Events | Supercar Blog" />
      <Nav selectedPageIndex={1} />

      <div className="page_width_wide mx-auto flex w-full flex-row">
        <div className="outer_wrapper">
          <div className="inner_wrapper mt-8 flex h-full flex-shrink flex-col">
            <SectionTitle title="Events" />
            <div className="relative flex w-full flex-wrap">
              {shortEventsList.map((item, index) => {
                return <EventCard item={item} key={'event_item_home' + index} />
              })}
            </div>
          </div>
        </div>
        <Sidebar />
      </div>
      <PaginationBar />
      <Footer />
    </>
  )
}

export default HomePage
