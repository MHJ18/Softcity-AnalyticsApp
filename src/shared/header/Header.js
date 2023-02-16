import React, { useState } from 'react'
import { BellFill, FileEarmarkArrowUp, FunnelFill, Gear, Grid1x2Fill, List, Person, Power, Search } from 'react-bootstrap-icons'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import userImage from '../../assets/images/User.png'
import logoImage from '../../assets/images/logosft.png'
import DashDropdown from '../../components/headerDropdowns/dashDropdown/DashDropdown'
import SubmitDropdown from '../../components/headerDropdowns/submitDropdown/SubmitDropdown'
import FilterDropdown from '../../components/headerDropdowns/filterDropdown/FilterDropdown'
import './header.css'


function Header() {
  const [ showDashDropdown, setShowDashDropdown] = useState(false);
  const [ showSubDropdown, setShowSubDropdown] = useState(false);
  const [ showFillDropdown, setShowFillDropdown] = useState(false);

  return (
    <Navbar bg="white" variant="light" expand="lg" fixed="top">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img src={logoImage} className="img-fluid" alt="Softcity Group Logo" width={200}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="me-auto ms-4 flex-row mega-menu">
          <Nav.Link href="#home" onClick={ () => document.body.classList.toggle('closed-sidebar') }><List/></Nav.Link>
          <li className="nav-item dropdown">
            <Link className="nav-link" role="button" onClick={() => setShowDashDropdown(!showDashDropdown)}>
              <Grid1x2Fill className='me-2'/> Dashboard
            </Link>
            <div id='dashDropdown'>
              {showDashDropdown &&<DashDropdown/>}
            </div>
          </li>
          <li className="nav-item position-relative">
            <Link className="nav-link" role="button" onClick={() => setShowSubDropdown(!showSubDropdown)}>
              <FileEarmarkArrowUp className='me-2'/> Submit Data
            </Link>
            <div id='submitDropdown'>
              {showSubDropdown &&<SubmitDropdown/>}
            </div>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link" role="button" onClick={() => setShowFillDropdown(!showFillDropdown)}>
              <FunnelFill className='me-2'/> Filters
            </Link>
            <div id='filterDropdown'>
              {showFillDropdown &&<FilterDropdown/>}
            </div>
          </li>
        </Nav>
        <Navbar.Collapse id="basic-navbar-nav">
          <Form className='ms-auto position-relative'>
            <Form.Control
              type="search"
              className='ps-5'
              placeholder="Search..."
              aria-label="Search"
            />
            <Button variant='link' className='position-absolute start-0 top-0'><Search/></Button>
          </Form>
          <Nav className="softcity-navbar align-items-center">
            <li className="nav-item dropdown">
              <Link className="nav-link noti-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <BellFill/> <span>12<span className="visually-hidden">unread messages</span></span>
              </Link>
              <ul className="dropdown-menu dropdown-menu-end border-0 shadow" id="notificationDropdown" style={{minWidth:"20rem"}}>
                <li>
                  <Link className="dropdown-item" to="">
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <img src={userImage} className="img-fluid rounded-circle" alt="user Profile Pic" width="50"/>
                      </div>
                      <div className="flex-grow-1 ms-2">
                        <h6 className='fw-bold mb-0 small'>You should also be aware that carousels in general</h6>
                        <small className='text-muted small'>2 min ago</small>
                      </div>
                    </div>
                  </Link>
                </li>
                <li><hr className="dropdown-divider"/></li>
                <li>
                  <Link className="dropdown-item" to="">
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <img src={userImage} className="img-fluid rounded-circle" alt="user Profile Pic" width="50"/>
                      </div>
                      <div className="flex-grow-1 ms-2">
                        <h6 className='fw-bold mb-0 small'>You should also be aware that carousels in general</h6>
                        <small className='text-muted small'>2 min ago</small>
                      </div>
                    </div>
                  </Link>
                </li>
                <li><hr className="dropdown-divider"/></li>
                <li>
                  <Link className="dropdown-item" to="">
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <img src={userImage} className="img-fluid rounded-circle" alt="user Profile Pic" width="50"/>
                      </div>
                      <div className="flex-grow-1 ms-2">
                        <h6 className='fw-bold mb-0 small'>You should also be aware that carousels in general</h6>
                        <small className='text-muted small'>2 min ago</small>
                      </div>
                    </div>
                  </Link>
                </li>
                <li><hr className="dropdown-divider"/></li>
                <li>
                  <Link className="dropdown-item" to="">
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <img src={userImage} className="img-fluid rounded-circle" alt="user Profile Pic" width="50"/>
                      </div>
                      <div className="flex-grow-1 ms-2">
                        <h6 className='fw-bold mb-0 small'>You should also be aware that carousels in general</h6>
                        <small className='text-muted small'>2 min ago</small>
                      </div>
                    </div>
                  </Link>
                </li>
                <li><hr className="dropdown-divider"/></li>
                <li>
                  <Link className="dropdown-item" to="">
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <img src={userImage} className="img-fluid rounded-circle" alt="user Profile Pic" width="50"/>
                      </div>
                      <div className="flex-grow-1 ms-2">
                        <h6 className='fw-bold mb-0 small'>You should also be aware that carousels in general</h6>
                        <small className='text-muted small'>2 min ago</small>
                      </div>
                    </div>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link profile-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <img src={userImage} className="img-fluid rounded-circle" alt="user Profile Pic" width="30"/>
                  </div>
                  <div className="flex-grow-1 ms-2">
                    <h6 className='fw-bold mb-0 small'>Franklin Jr.</h6>
                    <small className='text-muted small'>Super Admin</small>
                  </div>
                </div>                 
              </Link>
              <ul className="dropdown-menu dropdown-menu-end border-0 shadow">
                <li><Link className="dropdown-item" to=""><Person className='text-primary me-2'/> Profile</Link></li>
                <li><Link className="dropdown-item" to=""><Gear className='text-primary me-2'/> Account Setting</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li><Link className="dropdown-item" href="#"><Power className='text-danger me-2'/> Logout</Link> </li>
              </ul>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header