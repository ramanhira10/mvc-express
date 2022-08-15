# commands

npm install

npm start

docker build -t mvc-express/third .

kubectl create -f kube3.yml

kubectl scale deployments <deployment-name> --replicas <number>

# get pods, services and deployments

kubectl get pods

kubectl get services

kubectl get deployments


# deleting kubectl resources

kubectl delete pod <pod-name> --now

kubectl delete service <service-name>

kubectl delete deploy <deployment-name>

# logs

kubectl logs <pod-name>
