import React from "react";
// import { GavelIcon } from "../components/icons";

import Layout from "../components/layout";
import SEO from "../components/seo";

function AboutPage() {
  return (
    <Layout>
      <SEO
        keywords={[`Gatsby`, `V3`, `Tailwind`, `Starter`]}
        title="About"
      />
      <section className="text-left">
        <p>This is a Gatsby template using Gatsby version 3 and styled with Tailwind CSS.</p>
      </section>
    </Layout>
  );
}

export default AboutPage;
