# 1D-Chess

An implementation of 1D chess, a chess variant played on a single row of eight squares.

Play as White against the CPU (Black).

The weekly board is fetched from
`https://eapl.me/1dchess/api/`; local browser requests require the API server to
allow your local origin with CORS.

To overcome the CORS issue, this project is being hosted on `https://eapl.me/1dchess/`.

## Run locally

Serve the directory over HTTP (for example, `python3 -m http.server 8000`) and open
`http://localhost:8000`.

## Rules

Each side has a king, knight, and rook.

- **King:** moves one square in either direction.
- **Knight:** moves two squares in either direction and can jump over pieces.
- **Rook:** moves any number of unobstructed squares in either direction.

Win by checkmating the opposing king. Draws occur by stalemate, threefold repetition, or insufficient material when only kings remain.

## Credits

This project is forked from https://github.com/Rowan441/Rowan441.github.io

This variant was described by Martin Gardner in the July 1980 *Scientific American* Mathematical Games column. [Read the column on JSTOR](https://www.jstor.org/stable/24966361).
