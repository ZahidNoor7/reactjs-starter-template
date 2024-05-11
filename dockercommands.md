<----- Create Docker Image ------------------------------------------------------->

npm run build 
docker build -t reactjs-starter-template .

<----- Docker Image Testing ------------------------------------------------------>

docker run -p 3000:3000 reactjs-starter-template
