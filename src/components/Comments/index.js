/* eslint-disable react/button-has-type */
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    addListItems: [],
    name: '',
    comment: '',
    count: 0,
  }

  inputChange = event => {
    this.setState({name: event.target.value})
  }

  textChange = event => {
    this.setState({comment: event.target.value})
  }

  onEventChange = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const commentList = {
      id: uuidv4(),
      name1: name,
      comment1: comment,

      active: false,
    }

    this.setState(prevState => ({
      addListItems: [...prevState.addListItems, commentList],
      name: '',
      comment: '',
      count: prevState.count + 1,
    }))
  }

  deletePhase = id => {
    const {addListItems} = this.state
    const filterList = addListItems.filter(each => each.id !== id)
    this.setState(prevState => ({
      addListItems: filterList,
      count: prevState.count - 1,
    }))
  }

  isTrue = id => {
    this.setState(prevState => ({
      addListItems: prevState.addListItems.map(each =>
        each.id === id
          ? {
              ...each,
              active: !each.active,
            }
          : each,
      ),
    }))
  }

  render() {
    const {addListItems, name, comment, count} = this.state
    return (
      <div className="whiteContainer">
        <div className="mainContainer">
          <h1>Comments</h1>
          <div className="textContainer">
            <div className="rightText">
              <p>Say something about 4.0 Technologies</p>
              <form onSubmit={this.onEventChange} type="submit">
                <input
                  placeholder="Your Name"
                  type="text"
                  value={name}
                  onChange={this.inputChange}
                  className="inputEl"
                />
                <br />
                <textarea
                  placeholder="Your Comment"
                  className="areaText"
                  type="text"
                  rows="6"
                  cols="50"
                  value={comment}
                  onChange={this.textChange}
                />
                <br />
                <button type="submit" className="button">
                  Add Comment
                </button>
              </form>
            </div>

            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="image"
            />
          </div>
          <hr />
          <div className="but">
            <button type="text" className="butt">
              {count}
            </button>
            <p>Comments</p>
          </div>
          <ul>
            {addListItems.map(each => (
              <CommentItem
                colorsList={initialContainerBackgroundClassNames[count]}
                listElements={each}
                deletePhase={this.deletePhase}
                key={each.id}
                isTrueItem={this.isTrue}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Comments
