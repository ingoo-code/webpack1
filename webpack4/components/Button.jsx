import React,{Component} from 'react'

class Button extends React.Component{
    name = "ㅎㅇ"
    render(){
        return (
            <button onClick={()=>this.props.onClick(this.name)}>로그인</button>
        )
    }
}

export default Button