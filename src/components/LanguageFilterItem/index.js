import {Component} from 'react'

import './index.css'

export default class LanguageFilterItem extends Component {
  render() {
    const {eachLanguage, key, isClicked, changeStateWithId} = this.props
    const {id, language} = eachLanguage

    this.changeState = () => {
      changeStateWithId(id)
    }

    const styling = isClicked ? 'style-for-button' : ''

    return (
      <li key={key}>
        <button
          onClick={this.changeState}
          className={`button-styling${styling}`}
          type="button"
        >
          {language}
        </button>
      </li>
    )
  }
}
