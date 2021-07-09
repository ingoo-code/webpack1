import React,{Component} from 'react'
import LoginBox from './LoginBox'

class App extends Component{
    state = {
        loginTxt:'login'
    }

    render(){
        return (
           <>
                <LoginBox v={this.state.loginTxt} /> {/* JSX 영역에서 Javascript를 사용할려면 { } */}
           </>
        )
    }
}

export default App