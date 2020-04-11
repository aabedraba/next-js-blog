import Layout from '../../components/Layout'
import fetch from 'isomorphic-unfetch'

const Post = props => (
    <Layout>
        <h1>{props.data.name}</h1>
        <p>{props.data.summary.replace(/<[/]?[pb]>/g, '')}</p>
    </Layout>
);

Post.getInitialProps = async function (context) {
    const { id } = context.query;

    const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const data = await res.json();

    return { data }
}

export default Post;