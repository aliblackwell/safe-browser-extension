import React, { Component } from 'react'
import { Redirect } from 'react-router'

import FooterTransactions from 'routes/popup/Transaction/components/components/FooterTransactions'
import SendTransactionState from '../../components/TransactionState/SendTransactionState'
import RetryLoadDataTransactionState from '../../components/TransactionState/RetryLoadDataTransactionState'
import {
  TRANSACTION_URL,
  PASSWORD_URL
} from 'routes/routes'

class Layout extends Component {
  constructor (props) {
    super(props)
    this.state = {
      resolvedTransaction: false
    }
  }

  handleConfirmTransaction = () => {
    const { handleConfirmTransaction, lockedAccount } = this.props

    if (lockedAccount) {
      this.setState({ resolvedTransaction: true })
    } else {
      handleConfirmTransaction(true)
    }
  }

  render () {
    const {
      lockedAccount,
      loadedData,
      reviewedTx,
      seconds,
      handleConfirmTransaction,
      handleRejectTransaction,
      retryShowTransaction
    } = this.props
    const { resolvedTransaction } = this.state

    if (resolvedTransaction && lockedAccount) {
      const passwordUrl = {
        pathname: PASSWORD_URL,
        state: {
          dest: TRANSACTION_URL
        }
      }
      return <Redirect to={passwordUrl} />
    }

    return (
      <React.Fragment>
        {(loadedData === false) &&
          <RetryLoadDataTransactionState
            retryShowTransaction={retryShowTransaction}
          />
        }
        {loadedData && (
          <React.Fragment>
            {reviewedTx ? (
              <SendTransactionState
                seconds={seconds}
                handleConfirmTransaction={handleConfirmTransaction}
              />
            ) : (
              <FooterTransactions
                loadedData={loadedData}
                reviewedTx={reviewedTx}
                lockedAccount={lockedAccount}
                handleRejectTransaction={handleRejectTransaction}
                handleConfirmTransaction={handleConfirmTransaction}
              />
            )}
          </React.Fragment>
        )}
      </React.Fragment>
    )
  }
}

export default Layout
