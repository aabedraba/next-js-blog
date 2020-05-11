import Layout from '../components/Layout';
import {getPostsData} from '../lib/posts'
import fetch from 'node-fetch'
import Link from 'next/link'

const PostLink = post => (
    <li>
        <Link href="posts/[id]" as={`/posts/${post.id}`}>
            <a>{post.title}</a>
        </Link>
    </li>
);

export default function Blog(props) {
    
    let postList = props.paths.map(
                                post => 
                                <PostLink key={post.id} id={post.id} title={post.title} />
                    );

    return (
        <Layout>
            <h1>Blog</h1>
            <ul>
                {postList}
            </ul>

        </Layout>
    )
}

export async function getStaticProps(){
    const data = getPostsData()
    const paths = data.map(post => ({
        id: post.id,
        title: post.title
    }))

    return { props: {paths} }
}