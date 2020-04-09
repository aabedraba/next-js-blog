import Layout from '../components/Layout'
import Link from 'next/link'

const PostLink = (props) => {
    return (
        <li>
            <Link href={`/post?title=${props.title}`}>
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
                <PostLink title="First post" />
                <PostLink title="Second post" />
                <PostLink title="Third post" />
            </ul>
        </Layout>
    );
}