import React from 'react'
import { Form, Icon, Input, Button } from 'antd';
import toastr from 'toastr'
import AuthService from '../../services/auth'

const service = new AuthService()

class NormalLoginForm extends React.Component {
  
  state = {
    values: {
      email: '',
      password: ''
    }
  }

  handleInputs = e => {
    const { values } = this.state
    values[e.target.name] = e.target.value
    this.setState(values)
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        service 
          .login(values)
          .then(response => {
            if (response.err) return toastr.error(response.err)
            toastr.success('Successful login!')
            window.localStorage.setItem('loggedUser', JSON.stringify(response.data))
            this.props.history.push('/profile')
        })
          .catch(err => {
          return toastr.error('Please register')
        })
      }
    });
  };

  render() {
    console.log(this.props)
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your E-mail!' }],
          })(
            <Input
              prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="email"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default WrappedNormalLoginForm