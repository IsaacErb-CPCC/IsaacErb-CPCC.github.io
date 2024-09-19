#!/usr/bin/bash

FILE_SPECIFIER=$1	# Filename, or multiselector like '*.html'.

HIGHER_HEADER=5
LOWER_HEADER=6

while ((HIGHER_HEADER > 0)); do
	sed -i "s/<h$HIGHER_HEADER/<h$LOWER_HEADER/g" "$FILE_SPECIFIER"
	sed -i "s/<\/h$HIGHER_HEADER/<\/h$LOWER_HEADER/g" "$FILE_SPECIFIER"

	((HIGHER_HEADER--))
	((LOWER_HEADER--))
done