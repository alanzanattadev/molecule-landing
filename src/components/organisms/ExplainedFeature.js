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
  description,
  features,
  images,
}: {
  title: string,
  description: string,
  features: Array<string>,
  images: Array<string>,
}) => (
  <VerticalLayout margin="10px">
    <CenterLayout>
      <FeatureTitle>{title}</FeatureTitle>
    </CenterLayout>
    <CenterLayout>
      <Description centered>{description}</Description>
    </CenterLayout>
    <CenterLayout>
      <Features features={features} />
    </CenterLayout>
    <VerticalLayout>
      {images.map(image => <Image src={image} style={{ margin: "10px", objectFit: 'contain'}} />)}
    </VerticalLayout>
  </VerticalLayout>
));
