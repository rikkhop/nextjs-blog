const BASE_URL = 'https://wordpresstest.ddev.site/wp-json/wp/v2';

export async function getPosts(id) {
    const postsRes = await fetch(`http://wordpresstest.ddev.site/wp-json/wp/v2/posts`);
        
    const posts = await postsRes.json()

    return {
        posts
    }
}

// export async function getPostData(id) {
//     const postRes = await fetch(`http://wordpresstest.ddev.site/wp-json/wp/v2/posts/${id}`);
        
//     const post = await postRes.json()

//     return {
//         post
//     }
// }

export async function getPostData(slug) {
    // console.log(id)
    const postRes = await fetch(`http://wordpresstest.ddev.site/wp-json/wp/v2/posts/?slug=${slug}`);
        
    const post = await postRes.json()

    return {
        post
    }
}

// export async function getAllPostIds() {
//     const posts = await getPosts()

//     return posts.posts.map(({ id }) => {
        
//         return {
//             params: {
//                 id: id.toString()
//             }
//         }
//     })
// }

export async function getAllPostSlugs() {
    const posts = await getPosts()

    return posts.posts.map(({ slug, id }) => {
        
        return {
            params: {
                id: id.toString(),
                slug: slug
            }
        }
    })
}


