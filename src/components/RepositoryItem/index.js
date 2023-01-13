import {Component} from 'react'
import './index.css'

export default class RepositoryItem extends Component {
  render() {
    const {key, eachRepoItem} = this.props
    const {name, issuesCount, forksCount, starsCount, avatarUrl} = eachRepoItem
    return (
      <li className="repo-item-container" key={key}>
        <img className="avatar-image" alt={name} src={avatarUrl} />
        <h1 className="repo-heading">{name}</h1>
        <div className="small-container">
          <img
            className="star-image"
            alt="stars"
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          />
          <p>{starsCount} stars</p>
        </div>
        <div className="small-container">
          <img
            className="star-image"
            alt="forks"
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          />
          <p>{forksCount} forks</p>
        </div>
        <div className="small-container">
          <img
            className="star-image"
            alt="open issues"
            src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          />
          <p>{issuesCount} open issues</p>
        </div>
      </li>
    )
  }
}
