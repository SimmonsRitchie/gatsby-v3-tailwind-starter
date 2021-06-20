import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
  return (
    <Layout author="hi!">
      <SEO
        keywords={[`gatsby`, `v3`, `tailwind`, `css`]}
        title="Home"
      />

      <section className="text-center">
        <h2 className="inline-block p-3 mb-12 text-2xl font-bold bg-yellow-400">
          Gatsby V3 Tailwind Starter
        </h2>
        <p>A Gatsby version 3 starter template, styled with tailwind CSS.</p>
      </section>
    </Layout>
  );
}

export default IndexPage;
