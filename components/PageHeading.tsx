/*
//  Props for title page (head title of all page)
 */

import Head from "next/head";
import React from "react";

interface Iprops {
  title: string;
}

const PageHeading: React.FC<Iprops> = ({ title }): JSX.Element => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default PageHeading;
