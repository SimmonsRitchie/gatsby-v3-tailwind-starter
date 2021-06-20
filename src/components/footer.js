import React from "react";
import PropTypes from "prop-types";
import { graphql, useStaticQuery } from "gatsby";

const Footer = ({ note }) => {
  const currentYear = new Date().getFullYear();
  const { site } = useStaticQuery(graphql`
    query SiteAuthorQuery {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);
  console.log("author",site)

  return (
    <footer className="bg-gray-900">
      <nav className="text-gray-400 flex flex-col sm:flex-row justify-between max-w-4xl py-8 px-8 mx-auto text-sm md:p-8">
        <div className="mb-2 sm:mb-0 sm:w-40">
          <p>
            {site.siteMetadata.author}, {currentYear}
          </p>
        </div>
        {note && (
          <div>
            {note}
          </div>
        )}
      </nav>
    </footer>
  );
};

Footer.defaultProps = {
  author: "Author Name",
};

Footer.propTypes = {
  author: PropTypes.string,
  note: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

export default Footer;
