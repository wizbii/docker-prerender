# Prerender docker image

A [Prerender.io](https://github.com/prerender/prerender) image with the in memory caching middleware enabled.

Available environment variables:

- `CACHE_MAXSIZE`: max items in cache, default to `1000`
- `CACHE_TTL`: cache item lifetime in seconds, default to `600`
- `PORT`: port to bind the http server, default to `3000`

## Usage

```
docker run -p 3000:3000 wizbii/prerender

curl 'http://localhost:3000/render?url=https://google.com'
```
