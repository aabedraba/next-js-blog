import {useRouter} from 'next/router';
import Layout from '../components/Layout'


export default function Post(props) {
    const router = useRouter();

    return (
        <Layout>
            <h1>{router.query.title}</h1>
            <p>This is my {router.query.title} post</p>
        </Layout>
    );
}