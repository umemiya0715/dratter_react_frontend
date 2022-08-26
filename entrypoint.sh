#!/bin/bash
set -e

if [ ! -e "/frontend/package.json" ]; then
  echo 'nextjsを新規インストール'
  npm init -y
  npm install create-next-app
  npx create-next-app@latest --use-npm --typescript
  rm -rf .gitignore
fi

if [ ! -d "/frontend/node_modules" ]; then
  echo 'dratterの環境構築'
  npm install
fi

# Then exec the container's main process (what's set as CMD in the Dockerfile).
exec "$@"