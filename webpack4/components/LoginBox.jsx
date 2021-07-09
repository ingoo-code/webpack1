import React,{Component} from 'react'
import Login from './Login'

 class LoginBox extends Component{
    render(){
        return (
            <>
                <Login v={this.props.v}/>
            </>
        )
    }
}

export default LoginBox