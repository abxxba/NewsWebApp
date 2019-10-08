import React, { Component } from "react";

export class PostForm extends Component {
  render() {
    return (
      <div class="content">
        <div class="container-fluid p-0">
          <h1 class="h3 mb-3">Post News</h1>
          <div classNameName="row">
            <div class="col-12">
              <div class="card">
                <div class="card-header">
                  <h5 class="card-title mb-0">News Title</h5>
                </div>
                <div class="card-body">
                  <input type="text" class="form-control" placeholder="Input" />
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="card">
                <div class="card-header">
                  <h5 class="card-title">News Description</h5>
                  <h6 class="card-subtitle text-muted">
                    Style the description part of the news as you need it
                  </h6>
                </div>
                <div class="card-body">
                  <div class="clearfix">
                    <div id="quill-toolbar">
                      <span class="ql-formats">
                        <select class="ql-font"></select>
                        <select class="ql-size"></select>
                      </span>
                      <span class="ql-formats">
                        <button class="ql-bold"></button>
                        <button class="ql-italic"></button>
                        <button class="ql-underline"></button>
                        <button class="ql-strike"></button>
                      </span>
                      <span class="ql-formats">
                        <select class="ql-color"></select>
                        <select class="ql-background"></select>
                      </span>
                      <span class="ql-formats">
                        <button class="ql-script" value="sub"></button>
                        <button class="ql-script" value="super"></button>
                      </span>
                      <span class="ql-formats">
                        <button class="ql-header" value="1"></button>
                        <button class="ql-header" value="2"></button>
                        <button class="ql-blockquote"></button>
                        <button class="ql-code-block"></button>
                      </span>
                      <span class="ql-formats">
                        <button class="ql-list" value="ordered"></button>
                        <button class="ql-list" value="bullet"></button>
                        <button class="ql-indent" value="-1"></button>
                        <button class="ql-indent" value="+1"></button>
                      </span>
                      <span class="ql-formats">
                        <button class="ql-direction" value="rtl"></button>
                        <select class="ql-align"></select>
                      </span>
                      <span class="ql-formats">
                        <button class="ql-link"></button>
                        <button class="ql-image"></button>
                        <button class="ql-video"></button>
                      </span>
                      <span class="ql-formats">
                        <button class="ql-clean"></button>
                      </span>
                    </div>
                    <div id="quill-editor"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="card">
                <div class="card-header">
                  <h5 class="card-title mb-0">Prewiew</h5>
                  <span>
                    If you left this field empty, the preview of the news will
                    be the first portion of the News Description
                  </span>
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
                      <label>Upload Image</label>
                      <input
                        type="file"
                        class="form-control"
                        placeholder="Image"
                      />
                    </div>
                    <div class="col-md-6">
                      <label>Video</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="youtube video ID"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="card">
                <div class="card-header">
                  <h5 class="card-title mb-0">Meta</h5>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-6">
                      <select class="form-control mb-3">
                        <option selected="">Category</option>
                        <option>One</option>
                        <option>Two</option>
                        <option>Three</option>
                      </select>
                    </div>
                    <div class="col-md-6">
                      <select class="form-control mb-3">
                        <option selected="">Source</option>
                        <option>One</option>
                        <option>Two</option>
                        <option>Three</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group col-md-6">
                    <div class="custom-control custom-switch">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="customSwitch1"
                      />
                      <label class="custom-control-label" for="customSwitch1">
                        Make Featured
                      </label>
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
                    Publish
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

export default PostForm;
