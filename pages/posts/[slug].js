import Layout from '../../components/layout';
import Head from 'next/head';
import Date from '../../components/date';
// import { getPostData, getAllPostIds } from '../../utils/local-posts';
import { getPostData, getAllPostSlugs } from '../../utils/posts';

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = await getAllPostSlugs();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {

    const postOb = await getPostData(params.slug);

    const postData = postOb.post[0]

    return {
      props: {
        postData,
      },
    };
  }

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title.rendered}</title>
      </Head>
      {postData.title.rendered}
      <br />
      {postData.id}
      <br />
      <Date dateString={postData.date} />
      <div dangerouslySetInnerHTML={{ __html: postData.content.rendered }} />
    </Layout>
  );
}