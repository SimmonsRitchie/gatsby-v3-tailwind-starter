import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div className="flex justify-center items-center flex-col">
        <h1 className="bg-yellow-400 p-3 mb-5 text-7xl font-bold inline-block">404</h1>
        <h2 className="bg-yellow-400 text-2xl font-bold inline-block my-8 p-3">
          Sorry, nothing to see here!
        </h2>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
