# food
  yarn install
  yarn dev
  yarn build
  git push origin --delete gh-pages
  git checkout -b gh-pages
  git subtree push --prefix dist origin gh-pages
