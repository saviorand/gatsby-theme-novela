import React from "react";

import { Link } from 'gatsby';

import Layout from "@narative/gatsby-theme-novela/src/components/Layout";
import Section from "@narative/gatsby-theme-novela/src/components/Section";
import SEO from "@narative/gatsby-theme-novela/src/components/SEO";
import Headings from "@narative/gatsby-theme-novela/src/components/Headings";

function NotFoundPage() {
  return (
    <Layout>
      <SEO />
      <Section>
        <div style={{ marginTop: "100px" }}>
          <Headings.h1>404: У нас нет такой страницы.
          </Headings.h1>
          </div>
          <div>
          <Headings.h1 style={{ marginTop: "30px" }}><Link to='/' style={{ color: "blue" }}>Домой?</Link></Headings.h1>
        </div>
      </Section>
    </Layout>
  );
}

export default NotFoundPage;
