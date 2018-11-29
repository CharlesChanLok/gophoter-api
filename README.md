# Docker
1. Clone this repo
2. Inside docker folder, run `docker-compose up`
Run containers in the background
`docker-compose up -d`

To go into api's bash:
`docker-compose exec gophoter-api bash`
**Make sure the containers are running in the background**
Run `docker ps` to check if they are running in the background 

# '\r' error in WSL (Windows) when building containers:
Reference: https://askubuntu.com/questions/966488/how-do-i-fix-r-command-not-found-errors-running-bash-scripts-in-wsl
To solve the error of [$'\r': command not found] when parsing the script during building the containers:
Run `dos2unix [FILE ...]` after the filename.sh was modified: