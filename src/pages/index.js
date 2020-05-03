import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

const Index = (props) => {
  const { data: { websiteData } } = props;

  // Layout.jsx and its sub components contain most of the logic to build the website
  return <Layout websiteData={websiteData} />;
};
export const query = graphql`
{
  websiteData {
    appid
    gameName
    description
    movies {
      movieID
      highlight
      name
      thumbnail
      webm {
        res480
        resMax
      }
      mp4 {
        res480
        resMax
      }
    }
    screenshots {
      screenshotID
      path_full
      path_thumbnail
    }
    supportInfo {
      email
      url
    }
    legalNotice
  }
}
`;
export default Index;