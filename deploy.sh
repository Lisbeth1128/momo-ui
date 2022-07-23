rm -rf dist &&
npm run build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M main &&
git remote add origin git@github.com:Lisbeth1128/momo-ui-website.git &&
git push -f -u origin main &&
cd -
echo https://lisbeth1128.github.io/momo-ui-website/index.html