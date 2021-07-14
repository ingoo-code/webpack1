import React from 'react'
import LayoutStore,{LayoutContext} from './LayoutContext';

const Layout = () => {
    return (
        <>
            <LayoutStore>
                <LoginBox />
            </LayoutStore>
        </>
    );
}

const LoginBox = () => {
    return (
        <>
            <Login />
        </>
    );
}

const Login = () => {
    return (
        <>
            <Button />
        </>
    );
}

const Button = () => {
    //
    const context = React.useContext(LayoutContext) // return value
    return (
        <>
            <button>{context.userid}</button>
            <ul>
                <li>{context.userid}</li>
                <li>{context.username}</li>
                <li>{context.job}</li>
            </ul>
        </>
    );
}


export default Layout