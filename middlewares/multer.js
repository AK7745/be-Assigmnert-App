import multer from "multer";
import aws from "aws-sdk";
import multerS3 from "multer-s3";
// import multer from "multer"

// const Storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'uploads');
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.originalname);
//     }
//   });

// export const upload = multer({ storage:Storage });

// Configure AWS
aws.config.update({
  accessKeyId: "AKIAWOWJQJ6RYQMJN24I",
  secretAccessKey: "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",
  region: "ap-south-1",
});

// Create an instance of the S3 service
const s3 = new aws.S3();

// Set up Multer-S3 storage
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "be-photos",
    metadata: function (req, file, cb) {
      cb(null, {
        fieldName: file.fieldname + "_" + Date.now(),
        // Add any other metadata you want to store with the file
      });
    },
    key: function (req, file, cb) {
      cb(null, (file.originalname + "_" + Date.now()));
    },
  }),
});

export default upload;