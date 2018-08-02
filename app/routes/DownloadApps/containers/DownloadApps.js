import React, { Component } from 'react'
import { connect } from 'react-redux'
import Bip39 from 'bip39'

import {
  createEthAccount,
  createAccountFromMnemonic
} from '../components/PairingProcess/containers/pairEthAccount'
import Layout from '../components/Layout'
import config from '../../../../config'
import actions from './actions'

class DownloadApps extends Component {
  constructor (props) {
    super(props)

    this.androidAppLink = config.androidAppLink
    this.iosAppLink = config.iOSAppLink

    this.state = {
      showQrAndroid: false,
      showQrIos: false,
      showQrPairing: false
    }

    const { location } = this.props
    const validPassword = location && location.state && location.state.password
    this.password = validPassword ? location.state.password : undefined
  }

  componentDidMount = () => {
    const { account } = this.props
    const hasAccount = account.secondFA && Object.keys(account.secondFA).length > 0

    if (hasAccount || !this.password) {
      return
    }

    const mnemonic = Bip39.generateMnemonic()
    const currentAccount = createAccountFromMnemonic(mnemonic)
    const { encryptedMnemonic, hmac } = createEthAccount(mnemonic, this.password)

    this.props.onCreateAccount(currentAccount.getChecksumAddressString(), encryptedMnemonic, hmac)
  }

  toggleQrAndroid = () => {
    this.setState((prevState) => ({
      showQrAndroid: !prevState.showQrAndroid
    }))
  }

  toggleQrIos = () => {
    this.setState((prevState) => ({
      showQrIos: !prevState.showQrIos
    }))
  }

  toggleQrPairing = () => {
    this.setState((prevState) => ({
      showQrPairing: !prevState.showQrPairing
    }))
  }

  render () {
    const {
      showQrAndroid,
      showQrIos,
      showQrPairing
    } = this.state
    // const { safes } = this.props

    // if (safes != null && safes.safes.length > 0)
    //  return <Redirect to='/account' />
    return (
      <Layout
        toggleQrAndroid={this.toggleQrAndroid}
        toggleQrIos={this.toggleQrIos}
        toggleQrPairing={this.toggleQrPairing}
        showQrAndroid={showQrAndroid}
        showQrIos={showQrIos}
        showQrPairing={showQrPairing}
        androidAppLink={this.androidAppLink}
        iosAppLink={this.iosAppLink}
        password={this.password}
      />
    )
  }
}

const mapStateToProps = ({ account, safes }, props) => {
  return {
    account,
    safes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCreateAccount: (address, seed, hmac) => dispatch(actions.createAccount(address, seed, hmac))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DownloadApps)