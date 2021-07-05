const React = require('react')
const {Component} = React

class LoginBox extends Component{
    state = {
        userid:'',
        userpw:''
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]:e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onCreate(this.state)
        this.setState({
            userid:'',
            userpw:'',
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    placeholder='아이디를 입력해주세요.'
                    value={this.state.userid}
                    onChange={this.handleChange}
                    name="userid"
                />
                <input 
                    type="password" 
                    placeholder='패스워드를 입력해주세요.'
                    value={this.state.userpw}
                    onChange={this.handleChange}
                    name="userpw"
                />
                <button type="submit">로그인</button>
            </form>
        )
    }
}

module.exports = LoginBox