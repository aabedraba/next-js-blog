import Layout from '../../components/Layout'
import Markdown from 'react-markdown'

export default function Post(props) {
    return (
        <Layout>
            <Markdown 
                source={props.post}
                escapeHtml={false}
                />
        </Layout>
    )
}

Post.getInitialProps = async function(context){
    const { id } = context.query;
    const post = await import(`../../content/${id}.md`)
    return {post: post.default};
}