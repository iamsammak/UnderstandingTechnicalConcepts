##How to merge remote changes to Github repo?

###Error
[rejected] master -> master (non-fast forward)
error: failed to push some refs to 'git@github.com:me/me.git'
To prevent you from losing history, non-fast-forward updates were rejected
Merge the remote changes before pushing again.  See the 'non-fast forward'
section of 'git push --help' for details.

####Potential Solutions
1. Perform "git pull", resolve potential conflicts then "git push" the result

2. Force push your local repo
get push origin +local_repo_branch

[stackoverflow][stack-overflow-link]


<!-- Links -->
[stack-overflow-link]: http://stackoverflow.com/questions/1713137/how-to-merge-remote-changes-at-github
