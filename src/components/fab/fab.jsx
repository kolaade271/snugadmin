import React, { Component } from 'react'
import './fab.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'

class Fab extends Component {
    constructor(props) {
        super(props)
        this.state = { status: true }
        this.handleClick = this.handleClick.bind(this)
    }
    renderContent() {
        return (
            <ul className="fabMenu">
                {/* <li className='adadmin'>
                    <a href="#/" data-bs-toggle="modal" data-bs-target="#addAdmim">Add Admin</a>
                </li> */}
                <li className='noticeu'>
                    <a href="#/" data-bs-toggle="modal" data-bs-target="#notifyUser">Notify Users</a>
                </li>
                <li className='notice'>
                    <a href="#/" data-bs-toggle="modal" data-bs-target="#notifyDriver">Notify Drivers</a>
                </li>
                {/* <li className='adminl'>
                    <a href="#/" data-bs-toggle="modal" data-bs-target="#superAdmin">Add Super Admin</a>
                </li> */}
            </ul>
        )
    }
    handleClick() {
        this.setState({
            content: this.renderContent()
        })
        this.setState({ popstate: !this.state.popstate, status: !this.state.status })
    }
    render() {
        let mystate = this.state.popstate ? "fabopen" : "fabclose";
        return (
            <div className="fab">
                <div className="FabInner">
                    <div className="FabButton open" onClick={this.handleClick}>
                        {this.state.status ? <FontAwesomeIcon icon={faPlus} className="icon " />
                            : <FontAwesomeIcon icon={faXmark} className="icon " />}
                    </div>
                    <div className={mystate}>
                        {this.state.content}
                    </div>

                </div>


            </div>
        )
    }
}

export default Fab
