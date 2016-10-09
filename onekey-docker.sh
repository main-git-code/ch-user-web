git reset --hard origin/master 
git pull 
chmod a+x onekey-docker.sh 
gradle clean && gradle build -x test 
docker build -t 10.19.13.18:5000/ch-user-web:v1.0 .   
docker push 10.19.13.18:5000/ch-user-web:v1.0 

docker rmi aioptapp/ch-user-web:v1.0
docker tag 10.19.13.18:5000/ch-user-web:v1.0 aioptapp/ch-user-web:v1.0
docker login --username=aioptapp --password=aioptapp@123 --email=wuzhen3@asiainfo.com 
docker push aioptapp/ch-user-web:v1.0
