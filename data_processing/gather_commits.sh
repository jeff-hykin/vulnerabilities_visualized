git_repo_url="$1"
git_repo_name="$(basename "$git_repo_url")"

# create temp folder
echo "making sure there's a temp folder"
mkdir -p temp.ignore/
cd temp.ignore/
echo "done"

# clone it
echo "cloning"
git clone "$git_repo_url"
# enter it
echo "entering"
cd "$git_repo_name"

log_data_filepath="log_data.broken.json"
# generate log data for it
# check if file exists
if ! [ -f "$log_data_filepath" ]
then
    echo "generating log"
    git log --stat --branches="*" --pretty=format:'%n^@^^@^Start^@^^@^%n{%n^@^hash^@^:^@^%h^@^,%n^@^author^@^:^@^%an^@^,%n^@^date^@^:^@^%ad^@^,%n^@^email^@^:^@^%aE^@^,%n^@^message^@^:^@^%s^@^,%n^@^commitFullDate^@^:^@^%ai^@^,%n^@^age^@^:^@^%cr^@^%n},^@^^@^End^@^^@^%n' > "$log_data_filepath" || exit
fi
# use node to process it
echo "formatting log"
new_file="$(node --max-old-space-size=8192 "$FORNIX_FOLDER/data_processing/format_commit_data.js" "$log_data_filepath")"
echo "moving file"
final_filepath="$FORNIX_FOLDER/data/full_commit_logs/$git_repo_name.json"
rm -f "$final_filepath"
mkdir -p "$(dirname "$final_filepath")"
mv "$new_file" "$final_filepath"