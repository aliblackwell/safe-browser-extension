import React, { Component } from 'react'
import { connect } from 'react-redux'
import Blockie from 'components/Blockie'

import styles from 'assets/css/global.css'
import edit from 'assets/images/edit.svg'
import trashWhite from 'assets/images/trash_white.svg'
import actions from './actions'
import { SAVE } from '../../../../../config/messages'

class SafeItem extends Component {
  constructor (props) {
    super(props)

    this.state = {
      editSafeAlias: false
    }

    this.aliasRef = React.createRef()
    this.addressDisplayed = props.address.substring(0, 8) +
      '...' +
      props.address.substring(props.address.length - 6, props.address.length)
  }

  handleSafeAliasClick = (e) => {
    const { editSafeAlias } = this.state
    if (editSafeAlias) {
      e.stopPropagation()
    }
  }

  showEditSafeAlias = (e) => {
    e.stopPropagation()
    this.setState({ editSafeAlias: true })
  }

  saveEditSafeAlias = (address) => (e) => {
    e.stopPropagation()
    const { onUpdateSafeAlias } = this.props
    const trimAlias = this.aliasRef.current.textContent.trim()
    this.aliasRef.current.textContent = trimAlias
    const alias = trimAlias

    if (!alias) {
      return
    }
    this.setState({ editSafeAlias: false })
    onUpdateSafeAlias(address, alias)
  }

  placeCursorAtEnd = (element) => {
    if (typeof window.getSelection !== 'undefined' && typeof document.createRange !== 'undefined') {
      const range = document.createRange()
      range.selectNodeContents(element)
      range.collapse(false)
      const sElement = window.getSelection()
      sElement.removeAllRanges()
      sElement.addRange(range)
    } else if (typeof document.body.createTextRange !== 'undefined') {
      const textRange = document.body.createTextRange()
      textRange.moveToElementText(element)
      textRange.collapse(false)
      textRange.select()
    }
  }

  handleSafeAliasLength = () => {
    const alias = this.aliasRef.current.textContent
    if (alias.length > 30) {
      this.aliasRef.current.textContent = alias.substring(0, 30)
      this.placeCursorAtEnd(this.aliasRef.current)
    }
  }

  render () {
    const { editSafeAlias } = this.state
    const {
      removeSafe,
      address,
      alias
    } = this.props

    return (
      <React.Fragment>
        <div className={styles.identicon}>
          <Blockie address={address} diameter={24} />
        </div>
        <span>
          <p
            contentEditable={editSafeAlias}
            ref={this.aliasRef}
            onInput={this.handleSafeAliasLength}
            onClick={this.handleSafeAliasClick}
          >
            {alias}
          </p>
          <small>{this.addressDisplayed}</small>
          <span className={styles.safeTools}>
            <button
              className={styles.safeToolsSave}
              onClick={this.saveEditSafeAlias(address)}
            >{SAVE}</button>
            <img
              src={edit}
              height='12'
              width='12'
              className={styles.safeToolsEdit}
              onClick={this.showEditSafeAlias}
            />
            <img
              src={trashWhite}
              height='12'
              width='12'
              className={styles.safeToolsDelete}
              onClick={removeSafe(address)}
            />
          </span>
        </span>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateSafeAlias: (address, alias) => dispatch(actions.updateSafeAlias(address, alias))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(SafeItem)
