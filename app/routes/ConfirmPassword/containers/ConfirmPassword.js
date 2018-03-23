import React, { Component } from 'react'

import Layout from '../components/Layout'

class ConfirmPassword extends Component {
  constructor(props) {
    super(props)

    this.state = {
      password: '',
      error: {
        match: false,
      },
      continue: false,
    }

    this.properties = props.location.state
    console.log(this.properties)
  }

  updatePassword = (e) => {
    this.setState({ password: e.target.value })
    this.validatePasswords(e.target.value)
  }

  validatePasswords = (newPassword) => {
    const { password } = this.properties

    console.log(newPassword + " - " + password)

    if (newPassword !== password) {
      this.setState({ continue: false, error: { match: false } })
      return
    }

    this.setState({ continue: true, error: { match: true } })
  }

  render() {
    const {
      password,
      confirmPassword,
      error,
    } = this.state

    console.log(this.state.continue)
    return (
      <Layout
        password={password}
        error={error}
        updatePassword={this.updatePassword}
        properties={this.properties}
        continue={this.state.continue}
      />
    )
  }
}

export default ConfirmPassword
