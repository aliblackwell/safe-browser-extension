import React, { Component } from 'react'

import Page from 'components/Page'
import Footer from 'components/Footer'
import ConfirmPasswordForm from './ConfirmPasswordForm/containers/ConfirmPasswordForm'
import styles from 'assets/css/global.css'
import warningImage from 'assets/images/warning.svg'
import {
  DOWNLOAD_APPS_URL,
  CREATE_PASSWORD_URL
} from 'routes/routes'
import {
  CONFIRM_CREATE_PASSWORD_TITLE,
  CHANGE_PASSWORD_DESCRIPTION
} from '../../../../../config/messages'

class Layout extends Component {
  prevent = (e) => {
    e.preventDefault()
  }

  render () {
    const {
      confirmPassword,
      properties,
      manageConfirmPassword,
      passwordsMatch
    } = this.props

    const nextLink = passwordsMatch
      ? {
        pathname: DOWNLOAD_APPS_URL,
        state: properties
      }
      : ''

    return (
      <Page page={styles.password2} simpleHeader>
        <form onSubmit={this.prevent}>
          <div className={styles.content}>
            <h1>{CONFIRM_CREATE_PASSWORD_TITLE}</h1>
            <span className={styles.warningPassword}>
              <img src={warningImage} />
              <p>{CHANGE_PASSWORD_DESCRIPTION}</p>
            </span>
            <div className={styles.passwordForm}>
              <ConfirmPasswordForm
                confirmPassword={confirmPassword}
                manageConfirmPassword={manageConfirmPassword}
                passwordsMatch={passwordsMatch}
              />
            </div>
          </div>
          <Footer
            link={CREATE_PASSWORD_URL}
            ready={passwordsMatch}
            secondStep
            nextLink={nextLink}
          />
        </form>
      </Page>
    )
  }
}

export default Layout
