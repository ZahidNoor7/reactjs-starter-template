npm update
npm install react@latest react-dom@latest
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest

<!-- To create default tailwind config file. -->
npx tailwind init tailwind.js --full

<!-- S3 Bucket Sync using AWS CLI -->
"sync": "aws s3 sync [build folder path] aws 's3://[s3 bucket name]/'",
