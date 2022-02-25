const aws = require('aws-sdk');
const dotenv = require('dotenv');
const crypto = require('crypto');
const {promisify} = require('util');

dotenv.config();
// Uncomment if got error related to .env Here.
// dotenv.config({ debug: true });
// console.log('process.env', process.env);

const region = 'ap-southeast-1';
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
const bucketName = 'atelier-answers-photo';
const s3 = new aws.S3({
  region,
  accessKeyId,
  secretAccessKey,
  bucketName,
  signatureVersion: 'v4'
});

var generateUploadURL = async function generateUploadURL () {
  var rawBytes = await crypto.randomBytes(16);
  var imageName = rawBytes.toString('hex');
  var params = {
    Bucket: bucketName,
    Key: imageName,
    Expires: 120,
    ContentType: 'multipart/form-data'
  }
  var uploadURL = await s3.getSignedUrlPromise('putObject', params)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log('err here', err)
    });
  console.log('uploadURL', uploadURL);
  return uploadURL;
}

module.exports = generateUploadURL;