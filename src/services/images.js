import { fill } from "@cloudinary/url-gen/actions/resize";

import { CloudinaryImage } from "https://res.cloudinary.com/dsufcdevv/image/upload/v1678896760/sprint4Images/Logo_gqvpbh.png";
import { CloudinaryImage } from "https://res.cloudinary.com/dsufcdevv/image/upload/v1678896732/sprint4Images/delivery_jr9zuc.png";
import { CloudinaryImage } from "https://res.cloudinary.com/dsufcdevv/image/upload/v1678896796/sprint4Images/special_yacx6t.png";

import { CloudinaryImage } from "https://res.cloudinary.com/dsufcdevv/image/upload/v1678896767/sprint4Images/man_zxpk66.svg";

import { CloudinaryImage } from "https://res.cloudinary.com/dsufcdevv/image/upload/v1678896739/sprint4Images/done_ddf5at.svg";
import { CloudinaryImage } from "https://res.cloudinary.com/dsufcdevv/image/upload/v1678896715/sprint4Images/404_kpyjmn.svg";
import { CloudinaryImage } from "https://res.cloudinary.com/dsufcdevv/image/upload/v1678896748/sprint4Images/error404_vgpf59.svg";
import { CloudinaryImage } from "https://res.cloudinary.com/dsufcdevv/image/upload/v1678896725/sprint4Images/car_bya3uw.svg";

export const images = {
  logo: new CloudinaryImage("sample", { cloudName: "dsufcdevv" }).resize(
    fill().width(100).height(150)
  ),
  noConection,
  error404,
  carbuy,
  delivery1: new delivery1(),
  delivery2,
  men,
  done,
};
