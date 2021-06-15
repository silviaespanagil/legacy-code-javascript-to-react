import React from "react";
import PropTypes from "prop-types";
import defaultAvatar from "../images/defaulMiniImage.jpg";

class GetAvatar extends React.Component {
  constructor(props) {
    super(props);

    this.fr = new FileReader();

    this.myFileField = React.createRef();
    this.uploadImage = this.uploadImage.bind(this);
    this.getImage = this.getImage.bind(this);
  }

  uploadImage(ev) {
    if (ev.currentTarget.files.length > 0) {
      const myFile = ev.currentTarget.files[0];

      this.fr.addEventListener("load", this.getImage);

      this.fr.readAsDataURL(myFile);
    }
  }

  getImage() {
    const image = this.fr.result;

    this.props.updateAvatar(image);
  }

  render() {
    const avatar = this.props.avatar === "" ? defaultAvatar : this.props.avatar;
    return (
      <div className="formf__box--container">
        <label className="formf__box--button" type="button">
          Cargar imagen
          <input
            type="file"
            ref={this.myFileField}
            className="js__profile-upload-btn formf__box--inputFile"
            onChange={this.uploadImage}
          />
        </label>

        <div
          className="get-avatar__preview"
          style={{ backgroundImage: `url(${avatar})` }}
        ></div>
      </div>
    );
  }
}

GetAvatar.propTypes = {
  avatar: PropTypes.string.isRequired,
  updateAvatar: PropTypes.func.isRequired,
};

export default GetAvatar;
