// /admin/:menu/
import {useRouter} from 'next/router'
import BlogLayout from "../../components/BlogLayout"
import Head from 'next/head'

const Post = () => {
    const router = useRouter()
    const {post} = router.query

    return (
        <>
            <Head>
                <title>Blog | 글쓰기</title>
            </Head>
            <BlogLayout>
                {post} 글쓰기 페이지입니다.
            </BlogLayout>
        </>
    )
}

export default Post