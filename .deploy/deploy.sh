cd ~/Advance-frontend
npm run build:prod

rm -rf ~/../var/www/advance_frontend/html
mv ~/Advance-frontend/build ~/../var/www/advance_frontend/html