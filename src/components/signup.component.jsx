import React, { Component, useState } from 'react';
import validator from 'validator'
export default class SignUp extends Component {
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
      input["name"] = "";
      input["number"] = "";
      input["email"] = "";
      this.setState({ input: input });
      alert("Đã đăng ký");
    }
  }
  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;   

    if (!input["name"]) {
      isValid = false;
      errors["name"] = "Tên không được để trống";
    }

    if (!input["number"]) {
      isValid = false;
      errors["number"] = "SĐT không được để trống";
    } else{
      if(!validator.isMobilePhone(input["number"])){
        isValid = false;
        errors["number"] = "SĐT không hợp lệ";
      }
    }

    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Email không được để trống";
    } else {
      if (!validator.isEmail(input["email"])) {
        isValid = false;
        errors["email"] = "Email không hợp lệ";
      }
    }

    if (!input["password"]) {
      isValid = false;
      errors["password"] = "Password không được để trống";
    } else {
      if (!validator.isStrongPassword(input["password"], { 
        minLength: 6, minLowercase: 1, 
        minUppercase: 1, minNumbers: 1, minSymbols: 1 
    })) {
        isValid = false;
        errors["password"] = "Password cần có độ dài tối thiểu là 8, bao gồm 1 chữ thường, 1 chữ hoa, 1 số và 1 ký tự đặc biệt";
      }
    }
    this.setState({
      errors: errors
    });
    return isValid;
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Đăng ký</h3>
        <div className="mb-3">
          <input
            type="text"
            name="name"
            id="name"
            value={this.state.input.name}
              onChange={this.handleChange}
            className="form-control"
            placeholder="Nhập tên"
          />
          <div className="text-danger">{this.state.errors.name}</div>
        </div>
        <div className="mb-3">
          <input 
            type="number" 
            name="number"
            id="number"
            value={this.state.input.number}
              onChange={this.handleChange}
            className="form-control" 
            placeholder="Nhập SĐT" 
          />
          <div className="text-danger">{this.state.errors.number}</div>
        </div>
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
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Đăng ký
          </button>
        </div>
        <p className="forgot-password text-right">
          Bạn đã <a href="/sign-in">đăng ký?</a>
        </p>
      </form>
    )
  }
}