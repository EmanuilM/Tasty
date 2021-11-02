const cloudinary = require('cloudinary').v2;


function uploadImageToCloudinary (file , type = 'image') { 
    return new Promise((resolve , reject) => { 
        cloudinary.uploader.upload(file , {folder : 'Tasty' , resource_type : type } , (error , response) => { 
            if(error) { 
                return reject(error);
            }
            return resolve([response.url , response.public_id])
        })
    })
}


module.exports = {
    uploadImageToCloudinary,
}