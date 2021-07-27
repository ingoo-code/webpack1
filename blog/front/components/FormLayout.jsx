import Router from 'next/router'
import styeld from './FormLayout.module.css'

const FormLayout = ({children}) => {
    return (
        <>
            <button onClick={()=>Router.back()}>뒤로가기</button>
            {children}
            <div className={styeld.footer}>
                copyright &copy; all reserved 
            </div>
        </>
    )
}

export default FormLayout