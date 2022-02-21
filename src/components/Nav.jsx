import Link from 'next/link'

const NavComponent = ({ selectedPageIndex }) => {
  let navPageButtons = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'Events',
      link: '/events'
    },
    {
      name: 'Drivers',
      link: '/drivers'
    },
    {
      name: 'Blog',
      link: '/blog'
    }
  ]

  let renderedPageButtons = navPageButtons.map((item, index) => {
    return (
      <Link href={item.link} passHref key={'navbuttonid_' + index}>
        <div
          className={
            index === selectedPageIndex
              ? 'navPageButton navPageButton_selected'
              : 'navPageButton'
          }
        >
          <div className="navPageButtonText inline-block text-sm">
            {item.name}
          </div>
          {/* <div className="inline-block">
            <div className="arrow_down ml-auto -mr-4 -mt-1.5 block"></div>
          </div> */}
          <div className="page_button_indicator nav_accent_color -mt-1.5 h-0.5 w-full"></div>
        </div>
      </Link>
    )
  })

  return (
    <nav className="border-bF relative top-0 w-full bg-slate-800">
      {/* ====================================================================== */}
      <div className="page_width_wide bg-purple-100F max-w-8xlF px-6F relative mx-auto h-14">
        <div className="align-center bg-yellow-100F flex h-full w-full">
          <Link href="/" passHref>
            <button className="mt-3 h-8 w-36 cursor-pointer">
              <img
                className="h-full w-full object-contain"
                src="/logo_white.svg"
                alt="logo"
              />
            </button>
          </Link>
          <div className="relative mx-auto h-full w-auto pt-1 text-center text-sm font-semibold text-white">
            {renderedPageButtons}
          </div>
          <div className="mt-2.5">
            {/* <div className="box_radius relative mr-3 inline-block h-8 cursor-pointer bg-slate-600 px-5 text-sm font-semibold leading-8 text-white">
              Login
            </div> */}
            <div className="nav_accent_color box_radius relative inline-block h-8 cursor-pointer px-5 text-sm font-semibold leading-8 tracking-wide text-white">
              Login
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavComponent
