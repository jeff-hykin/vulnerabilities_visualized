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
unique_identifier="@#20498@2308423#@"
if ! [ -f "$log_data_filepath" ]
then
    true
    echo "generating log"
    git log --stat --branches="*" --pretty=format:"%n${unique_identifier}${unique_identifier}Start${unique_identifier}${unique_identifier}%n{%n${unique_identifier}hash${unique_identifier}:${unique_identifier}%h${unique_identifier},%n${unique_identifier}author${unique_identifier}:${unique_identifier}%an${unique_identifier},%n${unique_identifier}date${unique_identifier}:${unique_identifier}%ad${unique_identifier},%n${unique_identifier}email${unique_identifier}:${unique_identifier}%aE${unique_identifier},%n${unique_identifier}message${unique_identifier}:${unique_identifier}%s${unique_identifier},%n${unique_identifier}commitFullDate${unique_identifier}:${unique_identifier}%ai${unique_identifier},%n${unique_identifier}age${unique_identifier}:${unique_identifier}%cr${unique_identifier}%n},${unique_identifier}${unique_identifier}End${unique_identifier}${unique_identifier}%n" > "$log_data_filepath" || exit
fi
# use node to process it
echo "formatting log"
new_file="$(node --max-old-space-size=8192 "$FORNIX_FOLDER/data_processing/format_commit_data.js" "$log_data_filepath" "$unique_identifier")"
echo "moving file"
final_filepath="$FORNIX_FOLDER/data/full_commit_logs/$git_repo_name.json"
rm -f "$final_filepath"
mkdir -p "$(dirname "$final_filepath")"
mv "$new_file" "$final_filepath"