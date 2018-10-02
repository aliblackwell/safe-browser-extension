import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'

import styles from 'assets/css/global.css'
import { CREATE_PASSWORD_URL } from 'routes/routes'

const cx = classNames.bind(styles)

const Layout = ({
  showDisclaimer,
  toggleDisclaimer
}) => (
  <div className={cx(styles.extension, styles.welcome)}>
    <div className={styles.extensionInner}>
      <div className={cx(styles.content, showDisclaimer && styles.blur)}>
        <span className={cx(styles.safeLogo, styles.animated, styles.fadeInUp)} data-network='rinkeby' />
        <h1>Safely store Ether and ERC20 tokens with 2-factor authentication.</h1>
        <button onClick={toggleDisclaimer} className={cx(styles.button, styles.round)}>
          GET STARTED
        </button>
      </div>
    </div>
    <div className={cx(styles.disclaimer, showDisclaimer ? styles.show : null)}>
      <span>
        <h2>Terms</h2>
        <p>
          Please review our <a href='https://safe.gnosis.io/terms' target='_blank'>Terms of Use</a> and <a href='https://safe.gnosis.io/privacy' target='_blank'>Privacy Policy</a>.
          <ul>
            <li>We do not collect demographic data like age and gender.</li>
            <li>We collect anonymized app usage data and crash reports to ensure the quality of our app.</li>
          </ul>
        </p>

        <div>
          <button onClick={toggleDisclaimer} className={cx(styles.button, styles.naked)}>NO THANKS</button>
          <Link to={CREATE_PASSWORD_URL} className={styles.button}>AGREE</Link>
        </div>
      </span>
    </div>
  </div>
)

export default Layout