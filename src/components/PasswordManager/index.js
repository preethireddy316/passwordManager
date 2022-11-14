/* eslint-disable prettier/prettier */

import {v4 as uuidv4} from 'uuid'

import {Component} from 'react'

import PasswordItem from '../PasswordItem'

class PasswordManager extends Component {
  state = {
    passwordsList: [],
    website: '',
    userName: '',
    password: '',
    searchInput: '',
    isChecked: false,
  }

  onFormSubmit = event => {
    event.preventDefault()
    const {website, userName, password} = this.state
    const passwordObj = {id: uuidv4(), website, userName, password}
    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, passwordObj],website:"",userName:"",password:"",
    }))
  }

  onWebsiteChange = event => {
    this.setState({website: event.target.value})
  }

  onUserNameChange = event => {
    this.setState({userName: event.target.value})
  }

  onPasswordChange = event => {
    this.setState({password: event.target.value})
  }

  onSearchInputChange = event => {
    this.setState({searchInput: event.target.value})
  }

  onCheckStatusChange = () => {
    this.setState(prevState => ({isChecked: !prevState.isChecked}))
  }

  onDeleteItem = id => {
    const {passwordsList} = this.state
    const updatedList = passwordsList.filter(each => each.id !== id)
    this.setState({passwordsList: updatedList})
  }



  render() {
    const {
      passwordsList,
      searchInput,
      isChecked,
      website,
      password,
      userName,
    } = this.state
    const filteredList = passwordsList.filter(each =>
      each.website.toLowerCase().includes(searchInput.toLowerCase()),
    )
    const list =  (searchInput==="")? passwordsList : filteredList
    const l = list.length
    return (
      <>
      <img alt="app logo" src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"/>
        <form onSubmit={this.onFormSubmit}>
          <h1>Add New Password</h1>
          <div className="inputContainer">
            <img
              alt="website"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
            />
            <input
              onChange={this.onWebsiteChange}
              type="text"
              value={website}
              placeholder="Enter Website"
            />
          </div>
          <div>
            <img
              alt="username"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
            />

            <input
              type="text"
              onChange={this.onUserNameChange}
              value={userName}
              placeholder="Enter Username"
            />
          </div>
          <div>
            <img
              alt="password"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
            />
            <input
              onChange={this.onPasswordChange}
              type="password"
              value={password}
              placeholder="Enter Password"
            />
          </div>
          <button type="submit">Add</button>
        </form>
        <img src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png" alt="password manager"/>
        <div>
          <h1>
            Your Passwords 
          </h1>
          <p>{l}</p>
          <div>
            <img
              alt="search"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
            />

            <input type="search" 
            onChange={this.onSearchInputChange}
             value={searchInput}/>
          </div>
        </div>
        <hr />
        <input id="check" onChange={this.onCheckStatusChange} type="checkbox" value={searchInput}/>
        <label htmlFor="check">Show Passwords</label>
        {l===0?
            <>
        <img src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png" alt="no passwords"/>
        <p>No Passwords</p>
        </>
        :<ul>
        {list.map(each => (
          <PasswordItem
            itemDetails={each}
            key={each.id}
            isChecked={isChecked}
            onDeleteItem={this.onDeleteItem}
          />
        ))
        }</ul>
        }
    
      </>
    )
  }
}

export default PasswordManager
