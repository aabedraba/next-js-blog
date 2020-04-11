import Layout from '../components/Layout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const PostLink = (props) => {
    return (
        <li>
            <Link href="/posts/[id]" as={`/posts/${props.id}`}>
                <a>{props.title}</a>
            </Link>
        </li>
    );
}


const Index = props => (
    <Layout>
        <h1>Blog</h1>
        <ul>
            {props.shows.map(show => <PostLink key={show.id} title={show.name} id={show.id} />)}
        </ul>
    </Layout>
)

Index.getInitialProps = async function () {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();

    return {
        shows: data.map(entry => entry.show)
    };
}

export default Index;
