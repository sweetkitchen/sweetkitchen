# food
  yarn install
  yarn dev
  yarn build
  git checkout -b gh-pages
  yarn build
  git add -f dist
  git commit -m sweetkitchen
  git subtree push --prefix dist origin gh-pages
