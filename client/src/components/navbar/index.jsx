import { useState } from "react";
import logo from "../../assets/images/random-click-logo.png";
import { Link, useNavigate } from "react-router-dom";
// import AddProduct from "../add-product";
import AddQuote from "../add-quote";


const Navbar = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  // const [isAuthenticated] = useState(false);
  const [showModal, setShowModal] = useState(false)

  const navLinks = [
    { id: 1, title: "Home", url: "/" },
    { id: 2, title: "Gallery", url: "/gallery" },
    { id: 3, title: "Photographers", url: "/photographers" },
    { id: 4, title: "About us", url: "/about" },
    { id: 5, title: "Contact us", url: "/contact" },
  ];

  const isAuthenticated = localStorage.getItem("token")
  const navigate = useNavigate()
  return (
    <>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-24 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => setShowMobileNav(!showMobileNav)}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>

                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img className="h-20 w-auto" src={logo} alt="Your Company" />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4 items-center h-full">
                  {navLinks.map((navItem) => (
                    <Link
                      key={navItem.id}
                      to={navItem.url}
                      className="hover:bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      {navItem.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {isAuthenticated ? (
                <>
                <button type="button" className="px-4 py-2 bg-green-800 rounded-xl text-white mr-2"
                onClick={() => setShowModal(!showModal)}>
                  Add Quote
                </button>
                  <button
                    type="button"
                    className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">View notifications</span>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                      />
                    </svg>
                  </button>

                  <div className="relative ml-3">
                    <div>
                      <button
                        type="button"
                        className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        id="user-menu-button"
                        aria-expanded="false"
                        aria-haspopup="true"
                        onClick={() => setShowProfile(!showProfile)}
                      >
                        <span className="absolute -inset-1.5"></span>
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-10 w-10 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </button>
                    </div>

                    {showProfile && (
                      <div
                        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="user-menu-button"
                        tabIndex="-1"
                      >
                        <Link
                          to="/profile"
                          className="block px-4 py-2 text-sm text-gray-700"
                          role="menuitem"
                          tabIndex="-1"
                          id="user-menu-item-0"
                        >
                          Your Profile
                        </Link>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700"
                          role="menuitem"
                          tabIndex="-1"
                          id="user-menu-item-1"
                        >
                          Settings
                        </a>
                        <button
                          type="button"
                          className="block px-4 py-2 text-sm text-gray-700"
                          onClick={() => {
                            localStorage.removeItem("token")
                            navigate("/login")
                          }}
                        >
                          Sign out
                        </button>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <Link to="/login"
                    className="relative rounded-full bg-blue-300 hover:bg-blue-400 px-3 py-2 text-gray-800 hover:text-white focus:outline-none  transition-all duration-200"
                  >
                    Login
                  </Link>
                  <div className="relative ml-3">
                    <div>
                      <Link to="/signup"
                        className="relative flex rounded-full border border-blue-300 bg-gray-800 hover:bg-gray-700 px-3 py-2 text-gray-300 hover:text-white text-sm focus:outline-none  transition-all duration-200"
                      >
                        {" "}
                        Signup
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {showMobileNav && (
          <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navLinks.map((navItem) => (
                <Link
                  key={navItem.id}
                  to={navItem.url}
                  className="hover:bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
                >
                  {navItem.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* {showModal && 
      <AddProduct showModal={showModal} setShowModal={setShowModal}/>} */}
      {showModal && 
      <AddQuote showModal={showModal} setShowModal={setShowModal}/>}
    </>
  );
};

export default Navbar;
