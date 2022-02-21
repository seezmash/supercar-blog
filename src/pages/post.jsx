import Link from 'next/link'
import Nav from '../components/Nav'

import { useState, useEffect } from 'react'

import NextHead from '../components/next/NextHead'
import GameCard from '../components/games/GameCard'
import Footer from '../components/Footer'
import BreadCrumbsBar from '../components/BreadCrumbsBar'

import PaginationBar from '../components/PaginationBar'
import SectionTitle from '../components/section/SectionTitle'
import MiniHalfBlogBlock from '../components/blog/MiniHalfBlogBlock'
import Sidebar from '../components/Sidebar'

// =================================================================
import blogArticlesArray from '../db/blogs.js'
import groupsList from '../db/groups.js'
import eventsList from '../db/events'

let sidebarGroupsList = Array.from(groupsList).reverse()
let sidebarGroupsList2 = Array.from(groupsList).reverse()
let sideBarBlogs = Array.from(blogArticlesArray).reverse()
let sideBarBlogs2 = sideBarBlogs.splice(1)
let sideBarBlogs3 = sideBarBlogs2.splice(3)
let sideBarBlogs4 = sideBarBlogs3.splice(3)

let shortBlogList = Array.from(blogArticlesArray).sort(
  () => Math.random() - 0.5
)
let shortBlogList2 = shortBlogList.splice(3)
let shortBlogList3 = shortBlogList2.splice(1)
let shortBlogList4 = shortBlogList3.splice(4)
let shortBlogList5 = shortBlogList4.splice(6)
let shortBlogList6 = shortBlogList5.splice(1)
let shortBlogList7 = shortBlogList6.splice(2)
let shortBlogList8 = shortBlogList7.splice(2)
let shortBlogList9 = shortBlogList8.splice(8)
let shortBlogList10 = shortBlogList9.splice(1)
let shortBlogList11 = shortBlogList10.splice(2)
let shortBlogList12 = shortBlogList11.splice(2)
let shortBlogList13 = shortBlogList12.splice(8)

sidebarGroupsList.splice(4)
sidebarGroupsList2.splice(4)

// =================================================================

export default function Home() {
  const [selectedBlog, setHomeBlogs] = useState(null)

  useEffect(() => {
    // async function fetchCurrentArticle() {
    //   const response = await fetch('http://localhost:1337/api/blog-posts')
    //   const data = await response.json()
    //   setHomeBlogs(data.data)
    //   console.log(setHomeBlogs(data.data))
    // }
    // const getPosts = async () => {
    //   let content = await fetchCurrentArticle().then()
    //   console.log('set content ', content)
    // }
    // fetchCurrentArticle().then(console.log('set content ', selectedBlog))
    // getPosts()
  }, [])

  function getTempTitle() {
    return selectedBlog[0].attributes.Title
  }

  function getTempTitle() {
    return selectedBlog[0].attributes.Title
  }

  let tempTitle = selectedBlog ? getTempTitle() : ''
  let tempContent = selectedBlog ? selectedBlog[1].attributes.Content : ''
  let linkURL = '/post'

  return (
    <>
      <NextHead title={shortBlogList[0].title + ' | Supercar Blog'} />
      <Nav selectedPageIndex={1} />

      <main className="page_width_wide mx-auto w-full">
        <div className="mb-0 flex w-full">
          <div className="box_radius borderF h-96 w-20"></div>
          {/* ============================= BLOGS ========================================= */}
          {/* ====================================================================== */}
          <div className="h-full w-40 flex-grow pr-8">
            {/* ====================================================================== */}

            <div
              className="relative mr-4 mt-14 w-full flex-grow select-none overflow-hidden"
              mt-6
            >
              <div className="blog_title_medium bold_text_colorF pt-0.5 text-4xl font-bold leading-snug tracking-normal text-gray-800">
                {shortBlogList[0].title}
              </div>
              <div className="blog_text_medium mt-4 h-12  text-sm text-gray-600">
                By{' '}
                <span className="text_accent_color font-semibold text-green-600">
                  Madeleine H. Burry
                </span>{' '}
                updated 7 Days ago
              </div>
              {/* ====================================================================== */}
              <div className="box_radius relative h-96 overflow-hidden pr-8">
                <img
                  className="border-brF h-fullF image_visibility absolute left-0 h-full w-full object-cover object-center"
                  src={shortBlogList[0].image}
                  alt={shortBlogList[0].title}
                />
              </div>
              {/* ====================================================================== */}
            </div>
            {/* ====================================================================== */}
            <div className="pr-8F mt-8 w-full flex-grow">
              <div className="blog_title_medium italicF bold_text_color pr-8 text-xl font-bold leading-normal">
                {shortBlogList[0].overview}
              </div>
              <p className="font-style  mt-6 text-lg leading-relaxed text-black">
                {tempContent}
              </p>
            </div>
            {/* ====================================================================== */}
            <div className="w-full flex-grow pr-8">
              <p className="font-style  mt-8 leading-relaxed text-black">
                Epic cheeseburgers come in all kinds of manifestations, but we
                want them in and around our mouth no matter what. Slide those
                smashed patties with the gently caramelized meat fat between a
                toasted brioche bun and pass it over. You fall in love with the
                cheeseburger itself but the journey ain't half bad either.
                They're the childhood friend that knows your highest highs and
                lowest lows. They've been with you through thick and thin and
                they're the best at keeping secrets. Whether it's dressed up or
                informal, cheeseburgers have your back.
              </p>
            </div>
            {/* ====================================================================== */}
            <div className="w-full flex-grow pr-8">
              <p className=" box_radius article_bgF font-style  py-6 leading-relaxed">
                The hotel, the casino. The Corleone Family wants to buy you out.
                Don Corleone, I am honored and grateful that you have invited me
                to your home on the wedding day of your daughter. And may their
                first child be a masculine child. Your enemies always get strong
                on what you leave behind. I see you took the name of the town.
              </p>
            </div>
            {/* ====================================================================== */}
            <div className="box_radius relative mt-8 h-96 w-full overflow-hidden pr-8 ">
              <img
                className="left-0 h-full w-full rounded object-cover object-center"
                src={shortBlogList2[0].image}
                alt={shortBlogList2[0].title}
              />
            </div>
            {/* ====================================================================== */}
            <div className="mt-8 w-full flex-grow pr-8">
              <p className=" box_radius article_bgF font-style  py-6 leading-relaxed">
                Graphical user interface crowdfunding release bandwidth assets
                channels. Pitch partner network traction burn rate launch party
                scrum project investor analytics user experience angel investor.
                Series A financing scrum project angel investor funding facebook
                market network effects holy grail gamification
                business-to-business direct mailing. Scrum project android
                customer long tail pitch value proposition product management
                user experience focus.
              </p>

              <p className=" box_radius article_bgF font-style  py-6 leading-relaxed">
                Knows bugger all about nowt and cheerio challenge you to a duel
                a total jessie, doofer bottled it loo guinness toad in the
                whole, upper class tad blighty. Brown sauce ridicule a reet
                bobbydazzler wind up guinness leisurely every fortnight, well
                chuffed spiffing smeg bowler hat rambunctious. Sorted it manky
                loo devonshire cream tea numpty plum pudding ridiculous
                yorkshire pudding, bottled it could murder a pint pulled a right
                corker warts and all spam fritters big light, bossy britches one
                off know your onions smeg cornish pasty old girl.
              </p>
            </div>
          </div>
          {/* ====================================================================== */}
          {/* ============================= SIDEBAR ========================================= */}
          <Sidebar />
        </div>

        {/* ================================ main content wrapper ====================================== */}
      </main>
      <PaginationBar />
      <Footer />
    </>
  )
}
