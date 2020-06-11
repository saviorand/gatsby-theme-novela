import React from "react";
import { Link } from 'gatsby';

import Layout from "@narative/gatsby-theme-novela/src/components/Layout";
import Section from "@narative/gatsby-theme-novela/src/components/Section";
import SEO from "@narative/gatsby-theme-novela/src/components/SEO";
import Headings from "@narative/gatsby-theme-novela/src/components/Headings";
import Paragraph from "@narative/gatsby-theme-novela/src/components/Paragraph";
import Image, { ImagePlaceholder } from '@narative/gatsby-theme-novela/src/components/Image';
import DonateTile from '../components/DonateTile/index';

function Donate() {
  return (
    <Layout>
      <SEO />
      <Section>
        <div style={{ marginTop: "100px" }}>
          <Headings.h1>Поддержать Русский Футуризм</Headings.h1>
        </div>
        </Section>
        <Section>
        <div style={{ marginTop: "50px" }}>
        <Headings.h3 style={{color: "gray"}}>Если вам нравится то, что мы делаем – поддержите нас донатом:
        Ваш рубль, большой и малый, помогает нам в работе над максимально объективной, взвешенной, основанной на проверенных фактах подборкой новостей и аналитики.
        </Headings.h3>
        </div>
        </Section>
        <Section style={{ display: "flex", flexWrap: "wrap", justifyContent:"space-around", alignItems:"center", paddingTop: "50px", paddingBottom: "150px"}}>
        <a href="https://www.patreon.com/redzion">
       <div style={{ marginTop: "50px", marginRight:"50px"}}>
          <Image style={{width: "300px"}} src="https://betternotstop.com/wp-content/uploads/2018/03/Patreon.jpg" />
       </div>
       </a>
       <a href="https://yasobe.ru/na/futurizm">
       <div style={{ marginTop: "50px", marginRight:"50px"}}>
          <Image style={{width: "300px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81.%D0%94%D0%B5%D0%BD%D0%B5%D0%B3.svg/1920px-%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81.%D0%94%D0%B5%D0%BD%D0%B5%D0%B3.svg.png" />
       </div>
       </a>
       <a href="https://www.donationalerts.com/r/redzion">
       <div style={{ marginTop: "50px", marginRight:"50px"}}>
          <Image style={{height: "150px"}} src="https://images.mixer.com/sbb_wVirlXklEXl38ljATwgI8WnCBpE5zsGkEy67xJMM/https://ppobzor.ru/wp-content/uploads/2019/07/donationalerts-logo-min.jpg" />
       </div>
       </a>

      </Section>
    </Layout>
  );
}

export default Donate;
