yarn run build &&
aws s3 sync ./build/ s3://www.molecule.sh --acl public-read &&
curl http://molecule.sh
