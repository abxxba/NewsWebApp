import React, { Component } from "react";

export class HeaderNav extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand navbar-light bg-white">
        <a class="sidebar-toggle d-flex mr-2">
          <i class="hamburger align-self-center"></i>
        </a>

        <div class="navbar-collapse collapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item dropdown">
              <a
                class="nav-icon dropdown-toggle d-inline-block d-sm-none"
                href="#"
                data-toggle="dropdown"
              >
                <i class="align-middle" data-feather="settings"></i>
              </a>

              <a
                class="nav-link dropdown-toggle d-none d-sm-inline-block"
                href="#"
                data-toggle="dropdown"
              >
                <img
                  src="img\avatars\user_6.png"
                  class="avatar img-fluid rounded-circle mr-1"
                  alt="Habtamu"
                />{" "}
                <span class="text-dark">Habtamu</span>
              </a>
              <div class="dropdown-menu dropdown-menu-right">
                <a class="dropdown-item" href="#">
                  Sign Out
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default HeaderNav;
