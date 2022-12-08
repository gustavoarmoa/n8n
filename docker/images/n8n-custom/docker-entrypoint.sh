#!/bin/sh
if [ "$#" -gt 0 ]; then
  # Got started with arguments
  COMMAND=$1;

  if [[ "$COMMAND" == "n8n" ]]; then
    shift
    (cd /app/packages/cli; exec node ./bin/n8n "$@")
  else
    exec node "$@"
  fi

else
# Got started without arguments
cd /app/packages/cli; exec node ./bin/n8n
fi
