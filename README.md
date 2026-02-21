# NextJS Portfolio

⛔️ DEPRECATED: This has been replaced with a [new version](https://github.com/tomdickman/portfolio2026).

This is my personal website [https://tomdickman.com.au](https://tomdickman.com.au), built with NextJS and very little else.

## Getting Started

First, run the development server:

```bash
nvm use # To ensure you are using the correct Node version.
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This site is designed for deployment as a static website via S3 behind a CloudFront distribution in order to prevent the need for a Lambda or any server.

To deploy:

```bash
npm run build
```

Copy the content of the `out` directory to your cloud storage.
