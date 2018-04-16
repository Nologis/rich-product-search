#!/usr/bin/env bash

set -eu

rm -rf out
npm run build-library
mkdir out
cp config/export/demo.html out
cp -r dist/library/* out
cd out
zip -9r out.zip *
