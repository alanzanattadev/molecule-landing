import React from "react";
import { storiesOf, action, linkTo } from "@kadira/storybook";
import MediumArticle from "./MediumArticle";

storiesOf("MediumArticle", module).add("Basic", () => (
  <MediumArticle
    title="Introducing Molecule IDE"
    description="We’ve all been looking for the perfect text editor or IDE, the one that integrates every tool and let us work with any language. Unfortunately, it doesn’t exist. We have choices between 2 categories of editors :"
  />
));
