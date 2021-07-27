import BlogLayout from "../components/BlogLayout"
import Head from 'next/head'

const Index = () => {
    return (
        <>  
            <Head>
                <title>Blog</title>
            </Head>
            <BlogLayout>
                Hello Next.js
                <div>
                    {/* 
                        public
                        -> localhost:3001/app/100.jpg
                        -> localhost:3001/1.jpg
                     */}
                    <img src="/1.jpg" />
                </div>
            </BlogLayout>
        </>
    )
}

export default Index