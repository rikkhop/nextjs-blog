import Layout from '../../components/layout';
// import { getPostData, getAllPostIds } from '../../utils/local-posts';
import { getPostData, getAllPostIds } from '../../utils/posts';

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = await getAllPostIds();

//   console.log(paths)

  return {
    paths,
    fallback: false,
  };
}

// export async function getStaticPaths() {
//     const paths = getAllPostIds();
//     console.log(paths)
//     return {
//       paths,
//       fallback: false,
//     };
//   }

export async function getStaticProps({ params }) {

    // console.log(params)

    const postOb = await getPostData(params.id);

    const postData = postOb.post

    // // console.log(postData)

    return {
      props: {
        postData,
      },
    };
}

// export async function getStaticProps({ params }) {
//     // console.log(params)
//     const postData = getPostData(params.id);
//     return {
//       props: {
//         postData,
//       },
//     };
//   }

export default function Post({ postData }) {
    console.log(postData)
    return (
        <Layout>
        {postData.title.rendered}
        <br />
        {postData.id}
        <br />
        {postData.date}
        </Layout>
    );
}