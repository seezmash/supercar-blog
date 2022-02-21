import NextHead from '../components/next/NextHead'
import Link from 'next/link'
import { useState, useEffect } from 'react'
// Layout
import Nav from '../components/Nav'
import Footer from '../components/Footer'
// Sections
// import HomepageGrid from '../components/sections/HomepageGrid'
import SectionTitle from '../components/widgets/SectionTitle'
import Sidebar from '../components/Sidebar'
// Cards
import BlogCard from '../components/cards/BlogCard_v4'
import EventCard from '../components/cards/EventCard_v6'
import ProfileCard from '../components/cards/ProfileCard_v4'
// Data
import gamingBlogList from '../db/blogs.js'
import eventsList from '../db/events'
import groupsList from '../db/drivers.js'

let shortEventsList = Array.from(eventsList).sort(() => Math.random() - 0.5)
let shortBlogList = Array.from(gamingBlogList).sort(() => Math.random() - 0.5)
let shortGroupsList = Array.from(groupsList).sort(() => Math.random() - 0.5)

let shortBlogList2 = shortBlogList.splice(3)
let shortBlogList3 = shortBlogList2.splice(6)
let shortBlogList4 = shortBlogList3.splice(3)
let shortGroupsList2 = shortGroupsList.splice(12)
let shortEventsList2 = shortEventsList.splice(12)

const HomePage = () => {
  return (
    <>
      <NextHead title="Home | Supercar Blog" />
      <Nav selectedPageIndex={0} />

      <div className="page_width_wide mx-auto flex w-full flex-row">
        <div className="outer_wrapper">
          <div className="inner_wrapper mt-8 flex h-full flex-shrink flex-col">
            <SectionTitle title="Latest News" />
            <div className="relative flex w-full flex-wrap">
              {shortBlogList.map((item, index) => {
                return <BlogCard item={item} key={'shortid_' + index} />
              })}
            </div>

            <SectionTitle title="Featured Drivers" />
            <div className="relative flex w-full flex-wrap">
              {shortGroupsList.map((item, index) => {
                return <ProfileCard item={item} key={'shortid_' + index} />
              })}
            </div>

            <SectionTitle title="Trending Events" />
            <div className="relative flex w-full flex-wrap">
              {shortEventsList.map((item, index) => {
                return <EventCard item={item} key={'event_item_home' + index} />
              })}
            </div>
          </div>
        </div>
        {/* ==================== Sidebar ==================== */}
        <Sidebar />
      </div>
      {/* <PaginationBar /> */}
      <Footer />
    </>
  )
}

export default HomePage
