import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from 'components/Header'
import { normalizeUrl } from 'utils/helpers'

import { addWhitelistedDApp, deleteWhitelistedDApp } from 'actions/whitelistedDApps'

class WhitelistedDApps extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newDApp: '',
      errorMessage: '',
    }
  }

  updateNewDApp = (e) => {
    this.setState({ newDApp: e.target.value })
  }

  validateDApp = (dApp) => {
    if (!dApp) {
      this.setState({ errorMessage: 'Invalid DApp' })
      return false
    }

    const { whitelistedDApps } = this.props

    if (whitelistedDApps.indexOf(dApp) > -1) {
      this.setState({ errorMessage: 'DApp already whitelisted' })
      return false
    }

    this.setState({ errorMessage: '' })
    return true
  }

  handleAddDApp = (dApp) => (e) => {
    const newDApp = normalizeUrl(dApp)

    if (this.validateDApp(newDApp)) {
      this.props.onAddWhitelistedDApp(newDApp)

      this.setState({ newDApp: '' })
    }
  }

  handleDeleteDApp = (dApp) => (e) => {
    this.props.onDeleteWhitelistedDApp(dApp)
  }

  render() {
    const { newDApp, errorMessage } = this.state
    const { whitelistedDApps } = this.props

    return (
      <div>
        <Header
          account={true}
          logOut={true}
        />
        
        <div className='container'>
          <input
            type='text'
            value={newDApp}
            onChange={this.updateNewDApp} />

          {errorMessage &&
            <p>{errorMessage}</p>
          }
          <button onClick={this.handleAddDApp(newDApp)}>Add DApp</button>

          <div>
            {whitelistedDApps.map((dapp) => (
              <div key={dapp} className='dapp'>
                <div className='name'>
                  {dapp}
                </div>

                <button onClick={this.handleDeleteDApp(dapp)}>
                  Delete
              </button>
                <div className='clean'></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ whitelistedDApps }, props) => {
  return {
    whitelistedDApps
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddWhitelistedDApp: (dapp) => dispatch(addWhitelistedDApp(dapp)),
    onDeleteWhitelistedDApp: (dapp) => dispatch(deleteWhitelistedDApp(dapp))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WhitelistedDApps)