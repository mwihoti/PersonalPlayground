# Using the Docker file
 ## ** 1. Prerequisites **

 Ensure docker is installed on your machine if not you can download and install docker from the official website

 ## ** 2. Pulling the docker image **
 
 To get image from Docker registry

 ```

  docker pull mwihoti/microblog:latest 
 ```

 ## ** 3. Running docker container **
   
 Run the container using to start a new image

 ```

 docker run --name microblog -d -p 8000:5000 mwihoti/microblog:latest
 ```

 ## ** 4. Verfiy container is running **
   
 Check if the container is running by using the following command:

 ``
 docker ps

 ``

 ## ** 5. Accessing the Application **

 If your containerized application exposes a web service, you can access it by navigating to http://localhost:8000 in your web browser, assuming you mapped port 8000 as shown above.

 ## ** 6. Stopping and Removing the Container **

     To stop the running container, use:
     ``
     docker stop microblog-container
     ``

     To remove the stopped container, use:
   
     ``
     docker rm microblog-container
     ``

 ## ** 7. Troubleshooting **

     ``
    docker logs microblog-container
     ``
