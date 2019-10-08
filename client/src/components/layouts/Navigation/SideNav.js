import React, { Component } from "react";
import { Link } from "react-router-dom";
export class Navbar extends Component {
  render() {
    return (
      <nav id="sidebar" className="sidebar">
        <div className="sidebar-content ">
          <Link className="sidebar-brand" to="/">
            <span className="align-middle">News App</span>
          </Link>

          <ul className="sidebar-nav">
            <li className="sidebar-header">Posting</li>
            <li className="sidebar-item">
              <Link to="/" className="sidebar-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-edit align-middle mr-2"
                >
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>{" "}
                <span className="align-middle">Post News</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link to="/category" className="sidebar-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-copy align-middle mr-2"
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>{" "}
                <span className="align-middle">Create Category</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link to="/source" className="sidebar-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-external-link align-middle mr-2"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                <span className="align-middle">Add Source</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link to="/register" className="sidebar-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-user-plus align-middle mr-2"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="8.5" cy="7" r="4"></circle>
                  <line x1="20" y1="8" x2="20" y2="14"></line>
                  <line x1="23" y1="11" x2="17" y2="11"></line>
                </svg>{" "}
                <span className="align-middle">Register A New User</span>
              </Link>
            </li>
          </ul>
          <div class="sidebar-bottom d-none d-lg-block">
            <div class="media">
              <div class="media-body">
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
