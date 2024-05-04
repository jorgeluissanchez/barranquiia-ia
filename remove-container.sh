#!/bin/bash

# Remove the container
echo 'Removing the container...'
sudo docker compose down &&
echo 'Container removed'
