const aws = require('aws-sdk');
const dotenv = require('dotenv');

dotenv.config();

const region = 'ap-southeast-1';
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
const bucketName = 'atelier-answers-photo'
const s3 = new aws.S3({
  region,
  accessKeyId,
  secretAccessKey,
  bucketName,
  signatureVersion: 'v4'
});

var generateUploadURL = async function generateUploadURL () {
  console.log('generateUploadURL called');
  var imageName = "random image name";
  var params = {
    Bucket: bucketName,
    Key: imageName,
    Expires: 60
  }
  var uploadURL = await s3.getSignedUrlPromise('putObject', params)
    .then((res) => {
      console.log('res here', res)
    })
    .catch((err) => {
      console.log('err here', err)
    });
  console.log('uploadURL', uploadURL);
  return uploadURL;
}

module.exports = generateUploadURL;