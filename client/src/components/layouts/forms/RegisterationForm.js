import React, { Component } from "react";

export class RegisterationForm extends Component {
  render() {
    return (
      <div class="content">
        <div class="container-fluid p-0">
          <h1 class="h3 mb-3">Register A New Administrator</h1>
          <div className="row">
            <div class="col-12">
              <div class="card">
                <div class="card-header">
                  <h5 class="card-title mb-0"> </h5>
                </div>
                <div class="card-body">
                  <div class="card-body">
                    <form>
                      <div class="form-row">
                        <div class="form-group col-md-6">
                          <label for="fname">First Name</label>
                          <input
                            type="text"
                            class="form-control"
                            id="fname"
                            placeholder="Enter last name"
                          />
                        </div>
                        <div class="form-group col-md-6">
                          <label for="lname">Last Name</label>
                          <input
                            type="text"
                            class="form-control"
                            id="lname"
                            placeholder="Enter last name"
                          />
                        </div>
                        <div class="form-group col-md-12">
                          <label for="fname">Email</label>
                          <input
                            type="email"
                            class="form-control"
                            id="email"
                            placeholder="Email"
                          />
                        </div>
                        <div class="form-group col-md-12">
                          <label for="inputPassword4">Password</label>
                          <input
                            type="password"
                            class="form-control"
                            id="inputPassword4"
                            placeholder="Password"
                          />
                        </div>
                      </div>
                      <div class="form-group col-md-6">
                        <div class="custom-control custom-switch">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="customSwitch1"
                          />
                          <label
                            class="custom-control-label"
                            for="customSwitch1"
                          >
                            Make Super Admin
                          </label>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6"></div>
                <div class="col-md-6">
                  <button
                    type="submit"
                    class="btn btn-lg btn-block btn-primary"
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterationForm;
