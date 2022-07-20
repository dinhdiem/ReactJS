import React, { useState } from "react";
import { Typography, Button, Input } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import axios from "axios";
import { upload } from "../../api/uploadImage";

type Props = {};

const LaptopList = (props: Props) => {
  const [base64Image, setbase64Image] = useState("");
  const [uploadedImage, setUploadedImage] = useState("");

  const handleChangeImage = (event: any) => {
    const file = event.target.files[0];
    const render: any = new FileReader();
    render.readAsDataURL(file);
    render.onloadend = () => {
      uploadImage(render.result);
    };
  };

  const uploadImage = async (base64Image: string) => {
    try {
      const res = await upload(base64Image);
      const data = res.data;
      setUploadedImage(data.url);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <div>
          <PlusCircleOutlined style={{ fontSize: 30 }} />
          <input
            type="file"
            accept="image/png, image/jpg, image/jpeg, image/gif"
            name="image"
            onChange={handleChangeImage}
          />
        </div>
        {uploadedImage && <img style={{}} src={uploadedImage} alt="Image" />}
      </div>
    </div>
  );
};

export default LaptopList;
