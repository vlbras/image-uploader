## Description

Image Uploader to AWS S3 Bucket with Throttler - a common technique to protect applications from brute-force attacks.

## Installation

```bash
$ pnpm install
```

## Configuration
```bash
$ cp .env .env.example
```
Replace the commented AWS environment variables with your own.

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```
