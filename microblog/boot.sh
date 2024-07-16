#!/bin/bash
while true; do
    flask db upgrade
    if [["$?" == "0"]]; then
        break
    fi
    echo upgrade command failed, retrying in 5 secs...
done
exec gunicorn -b :5000 --access-logfile - --error-logfile - microblog:app