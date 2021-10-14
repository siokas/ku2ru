import Head from "next/head";
import Footer from "./components/Footer";
import { getAllPosts } from "./../utils/getPosts";
import Navigation from "./components/Navigation";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const limit = 0;

function Posts({ posts, page = 1 }) {
  const [searchText, setSearchText] = useState("");
  const [currentPage, updateCurrentPage] = useState(page);
  const router = useRouter();

  const Pagginator = () => (
    <div className="flex my-12">
      <button className="border border-green-600 text-green-600 block rounded-sm font-bold py-4 px-6 mr-2 flex items-center hover:bg-green-600 hover:text-white">
        <svg
          className="h-5 w-5 mr-2 fill-current"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="-49 141 512 512"
        >
          <path
            id="XMLID_10_"
            d="M438,372H36.355l72.822-72.822c9.763-9.763,9.763-25.592,0-35.355c-9.763-9.764-25.593-9.762-35.355,0 l-115.5,115.5C-46.366,384.01-49,390.369-49,397s2.634,12.989,7.322,17.678l115.5,115.5c9.763,9.762,25.593,9.763,35.355,0 c9.763-9.763,9.763-25.592,0-35.355L36.355,422H438c13.808,0,25-11.193,25-25S451.808,372,438,372z"
          ></path>
        </svg>
        Previous page
      </button>
      <button className="border border-green-600 bg-green-600 text-white block rounded-sm font-bold py-4 px-6 ml-2 flex items-center">
        Next page
        <svg
          className="h-5 w-5 ml-2 fill-current"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="-49 141 512 512"
        >
          <path
            id="XMLID_11_"
            d="M-24,422h401.645l-72.822,72.822c-9.763,9.763-9.763,25.592,0,35.355c9.763,9.764,25.593,9.762,35.355,0
            l115.5-115.5C460.366,409.989,463,403.63,463,397s-2.634-12.989-7.322-17.678l-115.5-115.5c-9.763-9.762-25.593-9.763-35.355,0
            c-9.763,9.763-9.763,25.592,0,35.355l72.822,72.822H-24c-13.808,0-25,11.193-25,25S-37.808,422-24,422z"
          />
        </svg>
      </button>
    </div>
  );

  // useEffect(() => {
  //   router.push({ pathname: "/posts", query: { page } });
  // }, [page]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>KU2RU - airticles</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main className="flex flex-col items-center w-full flex-1 text-center mt-16">
        <h3 className="text-6xl font-bold logo-font">
          All <span className="text-green-600">ai</span>rticles
        </h3>
        <div className="pt-2 relative mx-auto text-gray-600">
          <input
            className="w-80 border-2 border-gray-300 bg-white h-12 px-5 pr-16 rounded-lg text-sm focus:outline-none focus:border-green-600"
            type="search"
            name="search"
            placeholder="Search"
            onChange={(event) => setSearchText(event.target.value)}
          />
          <button type="submit" className="absolute right-0 top-0 mt-6 mr-4">
            <svg
              className="text-green-600 h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 56.966 56.966"
            >
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </button>
        </div>
        <div className="mt-8 text-center">
          {posts
            .filter((val) => {
              if (searchText === "") {
                return val;
              } else if (
                val.fields.title
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              ) {
                return val;
              }
            })
            .map((post, index) => (
              <div className="" key={index}>
                <div className="md:text-xl font-bold py-6">
                  <a
                    className="text-green-600"
                    href={"/post/" + post.fields.slug}
                  >
                    {post.fields.title}
                  </a>
                </div>
                {/* <div className="text-sm font-bold text-blue-600 dark:text-blue-200">
                {post.fields.generationDate}
              </div> */}
                <div className="w-full flex justify-center">
                  <div className="w-1/2 border-b-4 border-gray-600 dark:border-gray-200 pb-4 overflow-ellipsis">
                    {post.fields.thumbnail ? (
                      <img
                        src={post.fields.thumbnail.fields.file.url}
                        className="mb-4"
                      />
                    ) : (
                      <></>
                    )}

                    <span className="font-bold">Read More</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </main>

      {limit > 0 ? <Pagginator /> : <></>}

      <Footer />
    </div>
  );
}

Posts.getInitialProps = async ({ query }) => {
  let page: number = 1;

  if (query.page) {
    page = parseInt(query.page + "");
    console.log(page);
  }

  const posts = await getAllPosts(limit, (page - 1) * limit);

  return { posts };
};

export default Posts;
