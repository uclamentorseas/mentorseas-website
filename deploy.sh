BUILD_FOLDER=build
DEPLOY_DIR=/usr/public/www/mentorship

# Build the website
yarn build

# Send it to SEASnet
# The SEAS_USER and SEAS_PASS variables come from TravisCI's console settings
apt-get install sshpass
sshpass -p "$SEAS_PASS" scp -r $BUILD_FOLDER/* $SEAS_USER@lnxsrv09.seas.ucla.edu:$DEPLOY_DIR