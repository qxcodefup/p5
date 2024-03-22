#!/bin/bash

indexer Readme.md
mdpp Readme.md

hooks="find base -maxdepth 2 -name Readme.md -print0 | sort -zn | xargs -0 -I '{}' dirname '{}'"

# updating Readmes inside hooks

echo "Updating Problem Tocs"
eval $hooks | xargs -L 1 bash -c 'cd "$0" && mdpp Readme.md -q'


