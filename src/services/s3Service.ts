
import { S3 } from 'aws-sdk';

// Initialize the S3 client
const s3 = new S3({
  region: 'us-east-1', // Replace with your AWS region
  accessKeyId: 'YOUR_ACCESS_KEY_ID', // Replace with your AWS access key
  secretAccessKey: 'YOUR_SECRET_ACCESS_KEY', // Replace with your AWS secret key
});

const BUCKET_NAME = 'your-wedding-photos-bucket'; // Replace with your S3 bucket name

export const uploadFileToS3 = async (file: File): Promise<string> => {
  const fileExtension = file.name.split('.').pop();
  const timestamp = new Date().getTime();
  const randomString = Math.random().toString(36).substring(2, 10);
  const fileName = `${timestamp}-${randomString}.${fileExtension}`;

  const params = {
    Bucket: BUCKET_NAME,
    Key: fileName,
    Body: file,
    ContentType: file.type,
    ACL: 'public-read', // Makes the file publicly accessible
  };

  try {
    const uploadResult = await s3.upload(params).promise();
    return uploadResult.Location; // Return the URL of the uploaded file
  } catch (error) {
    console.error('Error uploading file to S3:', error);
    throw error;
  }
};

export const uploadMultipleFilesToS3 = async (files: File[]): Promise<string[]> => {
  const uploadPromises = files.map(file => uploadFileToS3(file));
  return Promise.all(uploadPromises);
};
