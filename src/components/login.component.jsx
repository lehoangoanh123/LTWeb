import React, { Component } from 'react'
export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      input: {},
      errors: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
    this.setState({
      input
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    if (this.validate()) {
      console.log(this.state);
      let input = {};
      
      input["password"] = "";
      input["email"] = "";
      this.setState({ input: input });
      alert("Đã đăng nhập");
    }
  }
  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;   

    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Email không được để trống";
    }

    if (typeof input["email"] !== "undefined" ) {
      if (!validator.isEmail(input["email"])) {
        isValid = false;
        errors["email"] = "Email không hợp lệ";
      }
    }

    if (!input["password"]) {
      isValid = false;
      errors["password"] = "Password không được để trống";
    } 
    
    this.setState({
      errors: errors
    });
    return isValid;
  }
  render() {
    return (
      <form >
        <h3>Đăng nhập</h3>
        <div className="mb-3">
          <input
            type="email"
            name="email"
            id="email"
            value={this.state.input.email}
              onChange={this.handleChange}
            className="form-control"
            placeholder="Nhập email"
          />
          <div className="text-danger">{this.state.errors.email}</div>
        </div>
        <div className="mb-3">
          <input
            type="password"
            name="password"
            id="password"
            value={this.state.input.password}
              onChange={this.handleChange}
            className="form-control"
            placeholder="Nhập password"
          />
          <div className="text-danger">{this.state.errors.password}</div>
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Ghi nhớ tài khoản
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Đăng nhập
          </button>
        </div>
        <p className="forgot-password text-right">
          Quên <a href="#">mật khẩu?</a>
        </p>
      </form>
    )
  }
}