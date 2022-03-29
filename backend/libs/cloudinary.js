import cloudinary from "cloudinary";

// datos de la cuenta de cloudinary
cloudinary.config({
  cloud_name:"nones",
  api_key:"665547119155924",
  api_secret:"z48aJLurYPdsLb4DdAjulm2mU8Y"

})

export const uploadImageCloud = async (filePath) => {
  return await cloudinary.v2.uploader.upload(filePath, {
    folder: "Products",
  });
};


// es el nombre de la carpeta de cloudinary no tiene que ver con el nombre de la base de datos de mongo, que se llaman igual

export const deleteImageCloud = async (id) => {
  return await cloudinary.v2.uploader.destroy(id);
};