import React from 'react'
//import { Link } from 'react-router-dom';
// import Nav from 'react-bootstrap/Nav';
//import NavDropdown from 'react-bootstrap/NavDropdown';
//import Accordion from 'react-bootstrap/Accordion';
import { HeartFill } from 'react-bootstrap-icons';
import items from '../../data/sidebar.json'
import SidebarItem from './SidebarItem';
import './sidebar.css'

export default function Sidebar() {
  return (
    <div className='app-sidebar'>
      <div className="sidebar" id="sidebar_softcity">
          { items.map((item, index) => <SidebarItem key={index} item={item}/>) }
      </div>
      <p className='text-center small text-muted sidebar-footer mb-0'>Made with <HeartFill className="text-danger"/> by SoftCity</p>
    </div>
  )
}
