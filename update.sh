#!/bin/bash

indexer Readme.md
mdpp Readme.md

hooks="find base -maxdepth 2 -name Readme.md -print0 | sort -zn | xargs -0 -I '{}' dirname '{}'"

# updating Readmes inside hooks
# find base -maxdepth 2 -name Readme.md -execdir mdpp Readme.md -q \;
echo "Updating Problem Tocs"
eval $hooks | xargs -L 1 bash -c 'cd "$0" && mdpp Readme.md -q'

# running local scripts inside hooks
#echo "Rebuilding caches..."
#eval $hooks | xargs -L 1 bash -c 'cd "$0" && mapi_def'
# find base -maxdepth 2 -name Readme.md -execdir mapi_def {} \;

# copying database
# echo "Copying database..."
# cp Readme.md ../arcade/Readme.md
# rsync -au --delete base/ ../arcade/base

# rebuilding thumbs on arcade
# cd ../arcade
# indexer Readme.md -t

