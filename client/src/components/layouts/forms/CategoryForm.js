import React, { Component } from "react";

export class CategoryForm extends Component {
  render() {
    return (
      <div class="content">
        <div class="container-fluid p-0">
          <h1 class="h3 mb-3">Create A Category</h1>
          <div className="row">
            <div class="col-12">
              <div class="card">
                <div class="card-header">
                  <h5 class="card-title mb-0">Category Name</h5>
                </div>
                <div class="card-body">
                  <input type="text" class="form-control" placeholder="Input" />
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="card">
                <div class="card-header">
                  <h5 class="card-title mb-0">Description</h5>
                  <span></span>
                </div>
                <div class="card-body">
                  <textarea
                    class="form-control"
                    rows="2"
                    placeholder="Textarea"
                  ></textarea>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="card">
                <div class="card-header">
                  <h5 class="card-title">Multimedia</h5>
                </div>

                <div class="card-body">
                  <div class="row">
                    <div class="col-md-6">
                      <label>Upload Icon</label>
                      <input
                        type="file"
                        class="form-control"
                        placeholder="Image"
                      />
                    </div>
                    <div class="col-md-6">
                      <label>Upload Image</label>
                      <input
                        type="file"
                        class="form-control"
                        placeholder="youtube video ID"
                      />
                    </div>
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
                    Submit
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

export default CategoryForm;
