
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

// Initialize the S3 client
const s3Client = new S3Client({
  region: 'us-east-1', // Replace with your AWS region
  credentials: {
    accessKeyId: 'YOUR_ACCESS_KEY_ID', // Replace with your AWS access key
    secretAccessKey: 'YOUR_SECRET_ACCESS_KEY', // Replace with your AWS secret key
  }
});

const BUCKET_NAME = 'your-wedding-photos-bucket'; // Replace with your S3 bucket name

export const uploadFileToS3 = async (file: File): Promise<string> => {
  const fileExtension = file.name.split('.').pop();
  const timestamp = new Date().getTime();
  const randomString = Math.random().toString(36).substring(2, 10);
  const fileName = `${timestamp}-${randomString}.${fileExtension}`;

  // Convert the file to a Buffer (required for AWS SDK v3)
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const params = {
    Bucket: BUCKET_NAME,
    Key: fileName,
    Body: buffer, // Use Buffer instead of ArrayBuffer
    ContentType: file.type,
    ACL: 'public-read', // Makes the file publicly accessible
  };

  try {
    await s3Client.send(new PutObjectCommand(params));
    // Construct the URL based on S3 bucket location and file path
    return `https://${BUCKET_NAME}.s3.amazonaws.com/${fileName}`;
  } catch (error) {
    console.error('Error uploading file to S3:', error);
    throw error;
  }
};

export const uploadMultipleFilesToS3 = async (files: File[]): Promise<string[]> => {
  const uploadPromises = files.map(file => uploadFileToS3(file));
  return Promise.all(uploadPromises);
};
