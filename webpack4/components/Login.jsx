import React,{Component} from 'react'
import Button from './Button'

class Login extends Component{
    onClickHandle = (data) => {
        console.log(this.props.v,data)
    }

    arrowFunction(i){
        console.log(i)
    }

    render(){
        return (
            <>
                <Button onClick={(i)=>this.arrowFunction(i)} />
            </>
        )
        
    }
}

export default Login