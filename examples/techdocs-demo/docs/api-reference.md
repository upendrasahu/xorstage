# API Reference

## REST API Endpoints

### Users API

#### GET /api/users

Returns a list of all users.

**Query Parameters:**

- `limit` (optional): Maximum number of users to return (default: 100)
- `offset` (optional): Number of users to skip (default: 0)

**Response:**

```json
{
  "users": [
    {
      "id": "user1",
      "name": "John Doe",
      "email": "john@example.com",
      "role": "admin"
    },
    {
      "id": "user2",
      "name": "Jane Smith",
      "email": "jane@example.com",
      "role": "user"
    }
  ],
  "total": 2
}
```

#### GET /api/users/{id}

Returns details for a specific user.

**Path Parameters:**

- `id`: User ID

**Response:**

```json
{
  "id": "user1",
  "name": "John Doe",
  "email": "john@example.com",
  "role": "admin",
  "created_at": "2025-01-01T00:00:00Z",
  "updated_at": "2025-01-02T00:00:00Z"
}
```

### Services API

#### GET /api/services

Returns a list of all services.

**Response:**

```json
{
  "services": [
    {
      "id": "service1",
      "name": "Authentication Service",
      "status": "running"
    },
    {
      "id": "service2",
      "name": "Data Processing Service",
      "status": "stopped"
    }
  ]
}
```

## Error Handling

All API errors follow this format:

```json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Human readable error message"
  }
}
```

Common error codes:

| Code | Description |
| --- | --- |
| `UNAUTHORIZED` | Authentication required |
| `FORBIDDEN` | Insufficient permissions |
| `NOT_FOUND` | Resource not found |
| `VALIDATION_ERROR` | Invalid request parameters |