# CloudFlare Worker IP Echo Service

[CloudFlare Workers](https://www.cloudflare.com/products/cloudflare-workers/) are pretty awesome. This project leverages Workers to turn CloudFlare's massive network into a super quick, distributed, and reliable IP echo service. Is this overkill for an IP echo service? Absolutely, but it's fun.

*This is replacing my old [Golang based IP echo service](https://github.com/tjhop/golang-ip-echo)*

## Prerequisites
1. Get a CloudFlare account, if you don't already have one.
2. Sign up for CloudFlare Workers and register your `worker.dev` subdomain.
3. Install [Wrangler](https://github.com/cloudflare/wrangler).
4. Set up your Wrangler config with your CloudFlare creds.

## Installation and Configuration
1. Clone this repo.
2. Copy `wrangler.toml.example` -> `wrangler.toml` and fill in: 
	a. Your CloudFlare account/zone ID (if you want to deploy this worker to a non `worker.dev` subdomain).
	b. A route where the worker will be hosted from (I use tjhop.io/echo)

## Usage and Deploy
```shell
# make your config, if you haven't already
wrangler config

# preview the build in the Worker Sandbox
wrangler preview --watch

# publish the worker to your `worker.dev` subdomain
wrangler publish

# or publish it to your domain on CloudFlare
wrangler publish --release
```
