"use babel";
// @flow

import React from "react";
import Radium from "radium";
import Features from "./Features";
import Description from "../atoms/Description";
import FeatureTitle from "../atoms/FeatureTitle";
import Image from "../atoms/Image";
import { VerticalLayout, CenterLayout } from "../nucleons/layouts";

export default Radium(({
  title,
  description = "",
  features = [],
  images = [],
  imageHero = false,
  imageStyle = {},
}: {
  title: string,
  description: string,
  features: Array<string>,
  images: Array<string>,
}) => (
  <VerticalLayout margin="10px 10px 100px 10px">
    <CenterLayout>
      <FeatureTitle>{title}</FeatureTitle>
    </CenterLayout>
    {
      imageHero && (
        <CenterLayout>
          {images.map(image => <Image src={image} style={{ margin: "10px", objectFit: 'contain', ...imageStyle }} />)}
        </CenterLayout>
      )
    }
    <CenterLayout>
      <Description centered>{description}</Description>
    </CenterLayout>
    <CenterLayout>
      <Features features={features} />
    </CenterLayout>
    {
      !imageHero && (
        <VerticalLayout>
          {images.map(image => <Image src={image} style={{ margin: "10px", objectFit: 'contain'}} />)}
        </VerticalLayout>
      )
    }
  </VerticalLayout>
));
