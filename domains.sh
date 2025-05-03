#!/bin/bash

# Usage: ./find_subdomains.sh example.com

DOMAIN=$1

# Fetch data from Wayback Machine CDX API
curl -s "http://web.archive.org/cdx/search/cdx?url=*.$DOMAIN/*&output=json&collapse=urlkey" |
  jq -r '.[].url' |                 # Extract URLs
  sed -E 's|https?://([^/]+)/.*|\1|' |  # Extract hostnames
  grep "\.$DOMAIN$" |               # Filter subdomains
  sort -u                           # Remove duplicates
