/* eslint-disable react/button-has-type */
import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {listElements, deletePhase, isTrueItem, colorsList} = props
  const {id, name1, active, comment1} = listElements

  const deleteComment = () => {
    deletePhase(id)
  }

  const imageElementColor = active
    ? {
        imageElement:
          'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png',
        color: 'colorBlue',
      }
    : {
        imageElement:
          'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png',
        color: '',
      }

  const clickedImage = () => {
    isTrueItem(id)
  }

  return (
    <li className="listType">
      <div className="profileStyle">
        <p className={`p ${colorsList}`}>{name1[0].toUpperCase()}</p>

        <div>
          <div className="nnn">
            <p className="o">{name1}</p>
            <p>{formatDistanceToNow(new Date())}</p>
          </div>

          <p>{comment1}</p>
        </div>
      </div>
      <div className="commentCa">
        <div className="commentC">
          <img
            src={imageElementColor.imageElement}
            className="imagek"
            alt="like"
          />

          <button
            onClick={clickedImage}
            className={`delbut ${imageElementColor.color}`}
          >
            Like
          </button>
        </div>
        <button data-testid="delete" className="delbut" onClick={deleteComment}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            className="imagek"
            alt="delete"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}
export default CommentItem
