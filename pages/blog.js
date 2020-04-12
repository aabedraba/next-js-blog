import Layout from '../components/Layout';
import useSWR from 'swr'
import Link from 'next/link'

const PostLink = post => (
    <li>
        <Link href="posts/[id]" as={`/posts/${post.id}`}>
            <a>{post.title}</a>
        </Link>
    </li>
);

const fetcher = url => fetch(url).then(res => res.json())

export default function Blog() {
    const { data, error } = useSWR('/api/getPostList', fetcher);
    let postList = data?.posts?.map(
                                post => 
                                <PostLink key={post.id} id={post.id} title={post.title} />
                    );
    if (!data) postList = "Loading..."
    if (error) postList = "Error loading..."
    return (
        <Layout>
            <h1>Blog</h1>
            <ul>
                {postList}
            </ul>

        </Layout>
    )
}
