# Getting Started

## Prerequisites

- Node.js 16 or later
- Docker (for TechDocs)
- Git

## Installation

1. Clone the repository:
```bash
git clone https://github.com/upendrasahu/xorstage-demo-service.git
cd xorstage-demo-service
```

2. Install dependencies:
```bash
npm install
```

3. Start the service:
```bash
npm start
```

The service will be available at `http://localhost:8080`.

## Configuration

Configuration is managed through environment variables or a `.env` file:

| Variable | Description | Default |
| --- | --- | --- |
| `PORT` | Port to run the service on | 8080 |
| `LOG_LEVEL` | Logging level | info |
| `DATABASE_URL` | Database connection string | - |

## Development

For development, you can use the development server:

```bash
npm run dev
```

This will start the service with hot-reloading enabled.