import Head from "next/head";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { getPosts } from "./../utils/getPosts";
import Link from "next/link";

export default function Home({ posts }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>KU2RU - airticles</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation currentPage="home" />

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div>
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            height="150px"
            viewBox="0 0 235.511 235.511"
          >
            <g>
              <path
                className="fill-current text-green-600"
                d="M181.232,135.068c0-0.076,0.092-0.124,0.092-0.2l-0.152-67.509c0-0.519-0.132-1.014-0.16-1.527
			c0.028-0.797,0.236-1.545,0.236-2.353C181.248,28.475,152.775,0,117.767,0C82.762,0,54.289,28.475,54.289,63.479
			c0,0.597,0.164,1.138,0.172,1.728c-0.08,0.817-0.244,1.591-0.244,2.408l0.026,8.682c0,0.072-0.088,0.126-0.088,0.207
			l0.276,126.118c0,2.456,1.994,4.424,4.426,4.424l24.173-0.036l-15.593,21.447c-0.966,1.351-1.098,3.122-0.345,4.617
			c0.753,1.494,2.284,2.437,3.955,2.437h93.441c0.092,0,0.16,0,0.208,0c2.444,0,4.42-1.984,4.42-4.429c0-1.427-0.673-2.7-1.73-3.49
			l-15.057-20.706l24.594-0.044c1.183-0.017,2.316-0.485,3.126-1.319c0.813-0.821,1.307-1.963,1.307-3.121L181.232,135.068z
			 M63.277,191.269l-0.112-55.956c0-0.076,0.097-0.14,0.097-0.208l-0.097-39.814c9.588,16.375,26.121,27.972,45.659,30.761
			L63.277,191.269z M117.414,90.375c0.142,0,0.18-0.118,0.322-0.142c0.141,0.024,0.194,0.142,0.329,0.142
			c2.451-0.01,4.42-1.99,4.42-4.426l-0.008-18.476c-0.03-6.708,2.546-13.044,7.268-17.809c4.692-4.743,10.948-7.372,17.572-7.384
			c0.016,0,0.044,0,0.06,0c6.656,0,12.896,2.593,17.581,7.318c4.468,4.486,6.868,10.435,7.153,16.747
			c-1.535,28.773-25.195,51.748-54.337,51.748C88.508,118.093,64.76,94.926,63.42,66c0.832-13.086,11.381-23.578,24.563-23.6
			c0.022,0,0.038,0,0.06,0c13.708,0,24.886,11.243,24.912,25.091l0.03,18.458C112.986,88.394,114.979,90.375,117.414,90.375z
			 M172.287,95.479l0.229,97.668l-46.811-67.004C145.614,123.635,162.541,112.025,172.287,95.479z M117.783,8.862
			c21.475,0,39.961,12.594,48.867,30.689c-5.627-3.955-12.263-6.139-19.256-6.139c-0.032,0-0.048,0-0.076,0
			c-9.033,0.022-17.496,3.579-23.889,10.034c-2.38,2.407-4.218,5.186-5.75,8.107c-5.71-10.668-16.775-18.016-29.611-18.016
			c-0.024,0-0.038,0-0.062,0c-7.057,0.006-13.619,2.254-19.051,6.013C77.824,21.448,96.305,8.862,117.783,8.862z M155.825,226.65
			H79.764l14.287-19.641l47.407-0.093L155.825,226.65z M100.486,198.129l17.296-23.78l17.228,23.704L100.486,198.129z
			 M121.369,164.206c-1.687-2.292-5.488-2.292-7.175,0L89.52,198.153l-20.255,0.04l47.977-68.699l47.836,68.499l-19.144,0.044
			L121.369,164.206z"
              />
              <circle
                className="fill-current text-gray-800 dark:text-yellow-400"
                cx="147.361"
                cy="64.547"
                r="8.477"
              />
              <circle
                className="fill-current text-gray-800 dark:text-yellow-400"
                cx="88.202"
                cy="64.547"
                r="8.477"
              />
            </g>
          </svg>
        </div>
        <h1 className="text-6xl font-bold logo-font mt-6">KU2RU</h1>

        <p className="mt-3 text-2xl">
          <span className="font-bold text-blue-700 dark:text-blue-300">ai</span>
          rticles
        </p>

        <div className="mt-32 text-xl font-bold text-green-600">
          Latest Posts
        </div>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-2 sm:w-full">
          <table className="table-auto">
            <tbody>
              {posts.map((post, index) => (
                <tr key={index} className="h-10">
                  <td className="w-28 text-blue-700 dark:text-blue-300">
                    {post.fields.generationDate}
                  </td>
                  <td className="font-italics">
                    <a className="" href={"/post/" + post.fields.slug}>
                      {post.fields.title}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8">
          <Link href="/posts">
            <a className="text-2xl font-bold">All Posts</a>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getPosts({ limit: 3 });

  return {
    props: { posts },
    revalidate: 10,
  };
}
