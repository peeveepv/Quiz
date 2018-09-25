#!/bin/sh
npm run build
rm -rf ../quiz-backend/build
cp -r build ../quiz-backend/