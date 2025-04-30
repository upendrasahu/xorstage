# XorStage Demo Portal

XorStage is a backstage-based developer portal for demonstration purposes.

## Features

- Sample catalog with components and APIs
- TechDocs integration with sample documentation
- GitHub integration with upendrasahu organization
- Software Templates for scaffolding new services

## Getting Started

### Prerequisites

- Node.js 16 or later
- Yarn
- Docker (for TechDocs)

### Environment Setup

Create a `.env` file in the root directory with the following content:

```
GITHUB_TOKEN=<your-github-personal-access-token>
```

This token is needed to fetch catalog entities from the GitHub repositories in the upendrasahu organization.

### Installation

To install dependencies and start the app:

```bash
# Install dependencies
yarn install

# Start the app
yarn start
```

The frontend will be available at http://localhost:3000 and the backend at http://localhost:7007.

## Demo Content

This demo includes:

1. **Sample Catalog** - Preconfigured components and APIs
2. **TechDocs Demo** - A sample service with complete documentation
3. **GitHub Integration** - Integration with repositories from upendrasahu organization
4. **Software Templates** - Templates for creating new services

## Configuration

The main configuration file is `app-config.yaml`. For local development, you can create an `app-config.local.yaml` file that will override the main configuration.

## Useful Commands

```bash
# Start the frontend and backend
yarn start

# Start only the frontend
yarn start:app

# Start only the backend
yarn start:backend

# Build the app
yarn build

# Create a Docker image
yarn build-image
```

## Learn More

For more information about Backstage, check out [backstage.io](https://backstage.io)
