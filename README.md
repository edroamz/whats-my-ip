[![Netlify Status](https://api.netlify.com/api/v1/badges/4d706f9e-832b-4116-8137-f8d9efa226de/deploy-status)](https://app.netlify.com/sites/whats-my-ip/deploys)

# What's my IP Address?

Site that provides your IP and location-related data

## Getting Started

### Prerequisites

1. First, You'll need an API Key in order to get data from ipdata. Get yours [here](https://ipdata.co/). It's FREE!

1. Then, create an environment variable named '.env.development' in the root of the project. Inside that file, declare a variable called REACT_APP_API_KEY and provide your key as follows:

```
REACT_APP_API_KEY=hereGoesYourKey
```

### Installing

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm start
```

## Building

Generate a full static production build

```bash
npm run build
```
