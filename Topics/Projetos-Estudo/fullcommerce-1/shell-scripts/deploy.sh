sudo docker container rm -f fullcommerce-1_mysql fullcommerce-1_store
# sudo docker image rm -f $(sudo docker image ls -qa)
sudo docker image rm -f fullcommerce-1_store
sudo docker-compose up -d
# sudo docker exec -it fullcommerce-1_store_1 bash