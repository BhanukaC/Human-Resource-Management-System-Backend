curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash

source ~/.nvm/nvm.sh

nvm install node

sudo yum upgrade -y

sudo yum install git -y

cd /home/ec2-user

git clone https://github.com/BhanukaC/Human-Resource-Management-System-Backend

cd Human-Resource-Management-System-Backend

sudo chmod -R 755 .

nvm install 16.0.0

npm install

node index.js