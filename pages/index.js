import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
// import { getSortedPostsData } from '../utils/local-posts';
import { getPosts } from '../utils/posts';

export async function getStaticProps() {
  const allPosts = await getPosts();
  const allPostsData = allPosts.posts

  console.log(allPostsData)
  
  return {
    props: {
      allPostsData
    }
  };
}

export default function Home( { allPostsData } ) {
  
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        { allPostsData.map(( { id, date, slug, title } ) => (
            <><p key={ id }>{ id }, { date }, { slug }, { title.rendered }</p>

            <Link href={{
              pathname: '/posts/[slug]',
              query: { slug: slug }
            }}>{title.rendered}</Link></>
          ))
        }
      </section>
    </Layout>
  );
}