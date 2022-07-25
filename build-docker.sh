#!/usr/bin/env bash

# To run this script without docker_image_tag, open terminal & execute the below command
#   ./build-docker.sh
# To run this script with docker_image_tag, open terminal & execute the below command
#   ./build-docker.sh dockerImageTagName

# -x print commands and their arguments as they are executed, "-"" enables a shell option and "+"" disables it.
set -x;
# -e stops execution of script, if command or pipeline has error, which is opposite of default shell behaviour, which is to ignore errors in scripts.
set -e;

# if docker_image_tag is not provided latest tag will be taken as default.
docker_image_tag=latest

# Here $1 represents first-parameter when executing shell, in the below script dockerImageTagName represents $1.
#   ./build-docker.sh dockerImageTagName
if [ -n "$1" ]; then
  docker_image_tag = "$1"
fi

# login into docker-hub is required to push docker-image, once it is built.
cat ~/docker_config.txt | docker login --username='amarendharganji' --password='docker@mar#12345'
# Alternative method to login, keep docker-hub password in root/docker_config.txt file,
#   where "--password-stdin" will take password from docker_config.txt file.
# cat ~/docker_config.txt | docker login --username='amarendharganji' --password-stdin

# dot at end tells docker-build-command to use Dockerfile located in current-working-directory (here it is contact-services folder),
#   where Dockerfile contains script to build docker-image.
docker build -t amarendharganji/contact-services:${docker_image_tag} .

# Push docker-image into 
docker push amarendharganji/contact-services:${docker_image_tag}
