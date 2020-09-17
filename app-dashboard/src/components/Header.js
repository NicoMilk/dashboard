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
      <Navbar bg="dark" variant="dark">
        <NavLink to="/"><Navbar.Brand >TF4</Navbar.Brand></NavLink>
        <Navbar.Toggle />
        { this.props.isLoggedIn && <Widgets addWidget={this.props.addWidget} />}
        <Navbar.Collapse className="justify-content-end">

          {this.props.isLoggedIn &&
            <h5 className="ml-3 text-white-50">{this.props.user.name}</h5>
          }
          {!this.props.isLoggedIn && <NavLink className="ml-3" to="/login">Login</NavLink>
          }
          {!this.props.isLoggedIn && <NavLink className="ml-3" to="/register">Register</NavLink>
          }
          {this.props.isLoggedIn && <Link to="/login" className="ml-3 btn btn-danger btn-sm" onClick={this.props.logout} >Logout</Link>
          }
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  addWidget: PropTypes.func.isRequired,
}
export default Header