

# http server 
# npm install --global http-server


#frontend

# cd client
# npm install

# export REACT_APP_SERVER='http://localhost:8080/'

# npm run build

# http-server build

# cd ..

# backend
cd server

npm install
sudo kill $(sudo lsof -t -i:8081)
export DB_URL='mongodb://127.0.0.1:27017/xmeme'
echo $DB_URL
node bin/www


