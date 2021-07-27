import Link from 'next/link'
import NavToggle from './NavToggle'
import Header from './layout/Header'

const BlogLayout = ({children}) => {
    return (
        <>
            <Header />
            <div className="container">
                {children}
            </div>
            <div className="footer">
                copyright &copy; all reserved 
            </div>
        </>
    )
}

export default BlogLayout