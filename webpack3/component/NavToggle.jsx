import React,{Component} from 'react'
import '../css/NavToggle.css'

class NavToggle extends Component{
    render(){
        return (
            <>
                <input type="checkbox" id="nav-toggle" className="nav-toggle" onClick={this.props.toggle} />
                <label htmlFor="nav-toggle">
                    <span></span> 
                    <span></span>
                    <span></span>
                </label>
            </>
        )
    }
}

export default NavToggle