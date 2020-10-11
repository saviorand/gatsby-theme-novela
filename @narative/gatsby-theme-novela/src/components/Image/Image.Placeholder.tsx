import React, { useRef, useEffect, useState } from "react";
import styled from "@emotion/styled";
import Image from "@components/Image";
import { graphql } from "gatsby"
import mediaqueries from "@styles/media";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: #ccc;
  color: #898989;
  font-size: 32px;
  font-weight: 600;

  ${mediaqueries.phablet`
    font-size: 28px;
  `}
`;

function ImagePlaceholder(props, data) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimensions(containerRef.current.getBoundingClientRect());

    const handleResize = () =>
      setDimensions(containerRef.current.getBoundingClientRect());

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container ref={containerRef} {...props}>
      <Image src={data.fileName.childImageSharp.fluid} />
    </Container>
  );
}

export default ImagePlaceholder;

export const query = graphql`
  query {
    fileName: file(relativePath: { eq: "/preview.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 430, maxHeight: 280) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`