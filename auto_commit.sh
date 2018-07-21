local_info=`hostname`
datetime=`date "+%Y-%m-%d %H:%M:%S"`
commit_msg="[auto-commit][${local_info}] ${datetime}"
echo $commit_msg

# Auto commit
cd ~/github/elvestar/msv4/
git ci -am "${commit_msg}"
git push
