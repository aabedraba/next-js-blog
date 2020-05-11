import Layout from '../../components/Layout'
import {getPostsData} from '../../lib/posts'
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

export async function getStaticPaths(){
    const data = getPostsData()

    const paths = data.map(post => ({
        params: {id: post.id},
    }))

    return { paths, fallback: false }
}

export async function getStaticProps({params}){
    const posts = getPostsData()
    const post = posts.find(post => post.id === params.id)
    
    return {props: {post: post.content}};
}