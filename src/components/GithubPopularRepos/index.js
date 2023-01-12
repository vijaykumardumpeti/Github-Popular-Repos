import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

export default class GithubPopularRepos extends Component {
  state = {
    repoItemsList: [],
    filterText: languageFiltersData[0].id,
    isLoading: true,
  }

  componentDidMount() {
    this.getDataByQueryParams()
  }

  getDataByQueryParams = async () => {
    const {filterText} = this.state
    // apis.ccbp.in/popular-repos?language=ALL
    const url = `https://apis.ccbp.in/popular-repos?language=${filterText}`
    const response = await fetch(url)
    console.log(response)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      const frontEndData = data.popular_repos.map(e => ({
        name: e.name,
        id: e.id,
        issuesCount: e.issues_count,
        forksCount: e.forks_count,
        starsCount: e.stars_count,
        avatarUrl: e.avatar_url,
      }))
      console.log(frontEndData)
      this.setState({
        repoItemsList: frontEndData,
        isLoading: false,
      })
    }
  }

  changeStateWithId = id => {
    this.setState({filterText: id, isLoading: true}, this.getDataByQueryParams)
  }

  render() {
    const {repoItemsList, filterText, frontEndData, isLoading} = this.state
    console.log(filterText)
    console.log(frontEndData)

    return (
      <div className="bg-container">
        <h1 className="main-heading">Popular</h1>
        <ul className="language-items-container">
          {languageFiltersData.map(eachLanguage => (
            <LanguageFilterItem
              changeStateWithId={this.changeStateWithId}
              eachLanguage={eachLanguage}
              key={eachLanguage.id}
              isClicked={eachLanguage.id === filterText}
            />
          ))}
        </ul>

        <ul className="repository-items-container">
          {isLoading ? (
            <div data-testid="loader">
              <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
            </div>
          ) : (
            repoItemsList.map(eachRepoItem => (
              <RepositoryItem
                eachRepoItem={eachRepoItem}
                key={eachRepoItem.id}
              />
            ))
          )}
        </ul>
      </div>
    )
  }
}
