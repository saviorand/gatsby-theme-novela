import React from 'react';
//import { Link } from 'gatsby';
import styled from '@emotion/styled';

import Image from '@components/Image';

function DonateBox(props) {
  return (
        <a href="https://www.patreon.com/redzion" target="_blank" rel="noopener">
        <div style={{ backgroundColor: "#A20004", paddingTop: '1rem', paddingBottom: '1rem', paddingLeft: '1.5rem', borderRadius: '0.75rem', color: '#f7fafc', maxWidth: '32rem', marginBottom: '6rem', fontWeight: 'bold' }}>
          <Image src={''} />
        <div>
          <p>При поддержке Антона Шатунова</p>
           <p>и ещё 62 постоянных читателей</p></div>
        </div>
      </a>
  );
}

export default DonateBox;
