import React, { useState } from "react";
import { Link } from "react-router-dom";

function SidebarItem({ item }) {
  const [open, setOpen] = useState(false);
  // const currentLink = window.location.href

  // console.log(currentLink);
  if (item.childrens) {
    return (
      <div className={open ? "sidebar-item open" : "sidebar-item"}>
        <div className="sidebar-title" onClick={() => setOpen(!open)}>
          <span className="menu-icon">
            {item.icon && <i className={item.icon}></i>}
          </span>
          <span className="menu-title">{item.title}</span>
          <i className="bi-chevron-down toggle-btn menu-arrow"></i>
        </div>
        <div className="sidebar-content">
          {item.childrens.map((child, index) => (
            <SidebarItem key={index} item={child} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <Link to={item.path || "#"} className="sidebar-item plain">
        <div className="sidebar-title">
          <span className="menu-icon">
            {item.icon && <i className={item.icon}></i>}
          </span>
          <span className="menu-title">{item.title}</span>
        </div>
      </Link>
    );
  }
}
export default SidebarItem;
