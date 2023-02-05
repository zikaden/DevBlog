import Head from 'next/head';
import { Categories, PostCard, PostWidget } from "../components"
import { getPosts } from '../services';


export default function Home({ posts }) {
  return (
    <div className='container mx-auto px-10 mb-8'>
      <Head>
        <title>DevBlog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid gird-cols-1 md:grid-cols-12 gap-12">
        <div className="col-span-1 md:col-span-8">
          {posts.map((post, index) => (
            <PostCard post={post.node} key={post.title}></PostCard>
          ))}
        </div>
        <div className="col-span-1 md:col-span-4">
          <div className="md:stick relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
