import React, { Component } from "react";

import axios from "axios";
import { Form, Icon, Input, Button, Checkbox, Radio, AutoComplete } from "antd";
const FormItem = Form.Item;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class loginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      dataSource: [],
      type: "2",
      password: "",
      invoiceTitle: ""
    };
    this._userBlur = this._userBlur.bind(this);
    this._billClick = this._billClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this._passWordBlur = this._passWordBlur.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
  }
  _userBlur(e) {
    this.setState({
      userName: e.target.value
    });
  }
  onChange(e) {
    this.setState({
      type: e.target.value
    });
  }
  handleSubmit = e => {
    e.preventDefault();
    axios
      .post("http://v2.webqa.imart360.com/api/account/login", {
        invoiceTitle: this.state.invoiceTitle,
        type: this.state.type,
        userInfoLoginName: this.state.userName,
        userInfoPwd: this.state.password
      })
      .then(res => {
        if (res.data.resultCode === "000000") {
          this.props.history.push("/");
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  _billClick(e) {
    if (this.state.userName != "") {
      axios
        .get(
          `http://v2.apiqa.imart360.com/invoice/queryTitle/userName/${
            this.state.userName
          }/invoiceTitleType/${this.state.type}`
        )
        .then(res => {
          this.setState({
            dataSource: res.data.invoiceTitleList
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
  _passWordBlur(e) {
    this.setState({
      password: e.target.value
    });
  }
  _billBlur(e) {
    this.setState({
      invoiceTitle: e.target.value
    });
  }

  _onSubmit() {
    axios
      .post("http://v2.webqa.imart360.com/api/account/login", {
        invoiceTitle: this.state.invoiceTitle,
        type: this.state.type,
        userInfoLoginName: this.state.userName,
        userInfoPwd: this.state.password
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { dataSource } = this.state;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator("userName", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="手机/邮箱/昵称"
              onBlur={this._userBlur}
            />
          )}
        </FormItem>
        <RadioGroup onChange={this.onChange} defaultValue="2">
          <RadioButton value="2">公司</RadioButton>
          <RadioButton value="1">个人</RadioButton>
        </RadioGroup>
        <FormItem>
          {getFieldDecorator("bill", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(
            <AutoComplete dataSource={dataSource}>
              <Input
                prefix={
                  <Icon type="exception" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="请输入发票抬头"
                onClick={this._billClick}
                onBlur={this._billBlur.bind(this)}
              />
            </AutoComplete>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
              onBlur={this._passWordBlur}
            />
          )}
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const LoginComponent = Form.create()(loginComponent);

export default LoginComponent;
