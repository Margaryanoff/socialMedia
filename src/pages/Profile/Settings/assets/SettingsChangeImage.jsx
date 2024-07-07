import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSingleUser } from "../../../../store/singleUser/singleUserSlice";
import Upload from "../../../../SVG/Upload";
import { fetchPatchUserImage, fetchPatchUserSocialInfo } from "../../../../store/singleUser/API";

const SettingsChangeImage = () => {
  const { singleUser } = useSelector(selectSingleUser);
  const [newImg, setNewImg] = useState("");
  const dispatch = useDispatch();
  const newImgFile = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setNewImg(reader.result);
    };
  };
  return (
    <section>
      <div className="change_pfps_main">
        <div>
          <div>
            <h2>Current Profile image</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                dispatch(fetchPatchUserImage({ id: singleUser[0]?.id, image: newImg ? newImg : singleUser[0]?.profileImage }));
              }}
            >
              <label>
                <Upload />
                <input type="file" onChange={newImgFile} />
              </label>
              <button>Save Changes</button>
            </form>
          </div>
          <div className="image_div_parent" style={{ background: `url(${singleUser[0]?.profileImage})` }}></div>
        </div>
        <div>
          <div>
            <h2>Current Background image</h2>
            <form>
              <label>
                <Upload />
                <input type="file" onChange={newImgFile} />
              </label>
              <button>Save Changes</button>
            </form>
          </div>
          <div className="image_div_parent" style={{ background: `url(${singleUser[0]?.bgImage})` }}></div>
        </div>
      </div>
    </section>
  );
};

export default SettingsChangeImage;
