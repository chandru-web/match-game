import './index.css'

const ImageItem = props => {
  const {imageDetails, clickAndChangeImage} = props
  const {thumbnailUrl, category, id} = imageDetails

  const onClickImage = () => {
    clickAndChangeImage(id)
  }

  return (
    <li className="image-list-item">
      <button type="button" className="image-button" onClick={onClickImage}>
        <img src={thumbnailUrl} alt={category} className="image" />
      </button>
    </li>
  )
}
export default ImageItem
