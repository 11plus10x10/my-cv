#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn run build

# navigate into the build output directory
cd dist

git add -A
git commit -m 'deploy'

git push -f https://github.com/11plus10x10/11plus10x10.github.io.git main

cd -
