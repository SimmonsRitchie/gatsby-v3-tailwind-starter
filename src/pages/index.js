import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import imgHavingFun from "../images/undraw-having-fun.png"


function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `v3`, `tailwind`, `css`]}
        title="Home"
      />

      <section className="text-center">
        <img
          alt="Cat and human sitting on a couch"
          className="block w-1/2 mx-auto mb-8"
          src={imgHavingFun}
        />

        <h2 className="inline-block p-3 mb-8 text-2xl font-bold bg-yellow-400">
          Hey there! Welcome to your first Gatsby site.
        </h2>

        <p className="leading-loose">
          This is a barebones starter for Gatsby 3 styled using{` `}
          <a
            className="font-bold text-gray-900 no-underline"
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tailwind CSS
          </a>
          , a utility-first CSS framework, and support for Sass.
        </p>
      </section>
    </Layout>
  );
}

export default IndexPage;
