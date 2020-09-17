import React from 'react';
//import { Link } from 'gatsby';
import styled from '@emotion/styled';

import Image from '@components/Image';

function DonateBox(props) {
  return (
        <a href="https://www.patreon.com/redzion" target="_blank" rel="noopener">
        <div style={{ backgroundColor: "#17a9ff", paddingTop: '1rem', paddingBottom: '1rem', borderRadius: '0.75rem', color: '#FFFFFF', maxWidth: '680px', marginLeft: 'auto', marginRight: 'auto', marginBottom: '6rem', fontWeight: 'bold', textAlign: 'center' }}>
          <Image src={''} />
        <div>
          <p>При поддержке Антона Шатунова</p>
           <p>и ещё 62 постоянных читателей</p></div>
        </div>
      </a>
  );
}

export default DonateBox;
