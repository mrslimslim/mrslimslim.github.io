#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

rm -rf assets/*
# 生成静态文件
npm run docs:build
rm -rf dist/*
# 进入生成的文件夹
cp -r docs/.vuepress/dist/* ./

rm -rf docs/.vuepress/dist



# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME


# 如果发布到 https://<USERNAME>.github.io
