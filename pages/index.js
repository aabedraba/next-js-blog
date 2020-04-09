import Layout from '../components/Layout'
import Link from 'next/link'

const PostLink = (props) => {
    return (
        <li>
            <Link href="/posts/[id]" as={`/posts/${props.id}`}>
                <a>{props.title}</a>
            </Link>
        </li>
    );
}

export default function Index() {
    return (
        <Layout>
            <h1>Blog</h1>
            <ul>
                <PostLink title="First post" id="first-post" />
                <PostLink title="Second post" id="second-post" />
                <PostLink title="Third post" id="third-post" />
            </ul>
        </Layout>
    );
}