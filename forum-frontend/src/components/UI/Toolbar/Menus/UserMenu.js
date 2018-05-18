import React, {Fragment} from 'react';
import {Nav, NavItem} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

const UserMenu = ({user, logout}) => {
  const navTitle = (
    <Fragment>
      Hello, <b>{user.username}</b>!
    </Fragment>
  );

  return (
    <Nav bsStyle="pills" activeKey={1} pullRight>
      <NavItem >{navTitle}</NavItem>
      <LinkContainer to="/newpost">
      <NavItem eventKey={1} href="/home">
        Add new post
      </NavItem>
      </LinkContainer>
      <NavItem onClick={logout} eventKey={2}>
        Logout
      </NavItem>
    </Nav>


  )
};

export default UserMenu;
