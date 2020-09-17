import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink, Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import Widgets from './Widgets';



class Header extends Component {

  logout = (e) => {
    localStorage.removeItem("token");
  }


  render() {
    return (
      <Navbar bg="light">
        <NavLink to="/" className="mr-5"><Navbar.Brand >TF4</Navbar.Brand></NavLink>
        <Navbar.Toggle />
        <Widgets addWidget={this.props.addWidget} widgets={this.props.widgets} className="ml-5" />
        <Navbar.Collapse className="justify-content-end">

          {this.props.isLoggedIn &&
            <Link to="/profile" className="ml-3" onClick={this.profile} >{this.props.user.name}</Link>
          }
          {!this.props.isLoggedIn && <NavLink className="ml-3" to="/login">Login</NavLink>
          }
          {!this.props.isLoggedIn && <NavLink className="ml-3" to="/register">Register</NavLink>
          }
          {this.props.isLoggedIn && <Link to="/login" className="ml-3" onClick={this.props.logout} >Logout</Link>
          }
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  widgets: PropTypes.array.isRequired,
  addWidget: PropTypes.func.isRequired,
}
export default Header