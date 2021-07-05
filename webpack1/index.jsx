import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import LoginBox from './loginBox'

class App extends Component{
    render(){
        return(
            <>
                <div>이게바로 핫로드..핫함</div>
                <LoginBox />
            </>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
