/* eslint-disable no-unused-vars */
import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";

const HamburgerIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="block h-7 w-7  fill-current"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
};

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header className="bg-gray-900 font-montserrat shadow-lg">
      <div className="flex flex-wrap items-center justify-between max-w-4xl p-4 mx-auto md:p-8">
        <div className="my-2 md:my-0 flex flex-no-wrap items-center justify-between w-full md:w-auto">
          <Link to="/">
            <div className="flex items-center text-white ">
              <div className="mr-4  text-white w-8 h-8 flex-shrink-0	md:w-7 md:h-7">
                <svg
                  className="w-8 h-8 mr-2 fill-current"
                  height="54"
                  viewBox="0 0 54 54"
                  width="54"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
                </svg>
              </div>
                <h1 className="block text-xl mt-1 mr-6 font-semibold tracking-tight uppercase">
                  {site.siteMetadata.title}
                </h1>
            </div>
          </Link>
          <button
            className="items-center block px-3 py-2 text-white md:hidden"
            onClick={() => toggleExpansion(!isExpanded)}
          >
            <HamburgerIcon />
          </button>
        </div>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:items-center w-full md:w-auto mt-1`}
        >
          {[
            {
              route: `/`,
              title: `Home`,
            },
            {
              route: `/about`,
              title: `About`,
            },
          ].map((link) => (
            <Link
              className="block mt-4 text-white no-underline md:inline-block md:mt-0 md:ml-6 visited:text-white"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
