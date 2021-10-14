import React from "react";
import Footer from "./../components/Footer";
import Theme from "./../components/Theme";
import Head from "next/head";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export default function Post({ post }) {
  const { title, body, from, generationDate } = post.fields;

  return (
    <div className="w-full min-h-screen">
      <div className="z-10 top-0">
        <div id="progress" className="h-1 z-20 top-0 bg-green-600"></div>
        <div className="float-right mr-32">
          <Theme />
        </div>
      </div>

      <div className="container md:max-w-3xl mx-auto pt-12">
        <Head>
          <title>KU2RU - AIPost - {title}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="w-full px-4 md:px-6 text-xl leading-normal">
          <div className="font-sans">
            <p className="text-base md:text-sm text-green-600 font-bold">
              &lt;{" "}
              <a
                href="/"
                className="text-base md:text-sm text-green-600 font-bold no-underline hover:underline"
              >
                BACK TO BLOG
              </a>
            </p>
            <h1 className="font-bold font-sans break-normal pt-6 pb-2 text-3xl md:text-4xl">
              {title}
            </h1>
            <p className="text-sm md:text-base font-normal">
              AIPost Generated: {generationDate}
            </p>

            <div className="py-6">{documentToReactComponents(body)}</div>

            <div className="flex w-full items-center py-12">
              <div className="flex-1">
                <p className="text-xs md:text-base italic">
                  <span className="text-green-600">ai</span>rticle inspired from
                </p>
                <p className="text-base font-bold text-base md:text-xl leading-none mb-2">
                  {from.media}
                </p>
              </div>
              <div className="justify-end">
                <a
                  href={from.url}
                  className="bg-transparent border border-green-600 py-2 px-4 rounded-full text-green-600"
                >
                  Original Article
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const res = await client.getEntries({ content_type: "post" });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "post",
    "fields.slug": params.slug,
  });

  return {
    props: {
      post: items[0],
    },
    revalidate: 10,
  };
}
