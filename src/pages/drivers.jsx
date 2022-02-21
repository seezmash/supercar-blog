import NextHead from '../components/next/NextHead'

// Layout
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import PaginationBar from '../components/PaginationBar'

// Sections
import ProfileAccountsGrid from '../components/sections/ProfileAccountsGrid'
import Sidebar from '../components/Sidebar'
import SectionTitle from '../components/widgets/SectionTitle'

// Temp Data
import driversList from '../db/drivers.js'

// =================================================================

const StreamersPage = () => {
  return (
    <>
      <NextHead title="Drivers | Supercar Blog" />
      <Nav selectedPageIndex={2} />

      <div className="page_width_wide mx-auto flex w-full flex-row">
        <div className="outer_wrapper">
          <div className="inner_wrapper mt-8 flex h-full flex-shrink flex-col">
            <SectionTitle title="Drivers" />
            <ProfileAccountsGrid accountsToDisplay={driversList} />
          </div>
        </div>
        <Sidebar />
      </div>

      <PaginationBar />
      <Footer />
    </>
  )
}

export default StreamersPage
