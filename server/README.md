Production

//Build the app from the dockerfile and remove uneeded modules
docker build -t app .

//Run the app from the docker container (maps port 8888 to the container port 80)
docker run -p 8888:80
