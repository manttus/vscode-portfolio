export default {
  connection_string: process.env.NEXT_PUBLIC_POSTGRES,
  resend_secret_key: process.env.NEXT_PUBLIC_RESEND,
  cloudinary_cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  cloudinary_secret_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  cloudinary_api_key: process.env.NEXT_PUBLIC_CLOUDINARY_SECRET_KEY,
};
