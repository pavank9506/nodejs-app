# Node.js Application

A modern Node.js application with comprehensive testing, Docker support, and CI/CD integration.

## Features

- **Express.js Server** - RESTful API with health check endpoints
- **Unit Tests** - Jest-based unit testing with 100% coverage
- **Integration Tests** - End-to-end testing with supertest
- **Docker Support** - Containerized deployment ready
- **CI/CD Pipeline** - GitHub Actions workflow with automated testing and deployment
- **Security Scanning** - Trivy vulnerability scanning and SBOM generation
- **Code Signing** - Docker image signing with Cosign

## Project Structure

```
nodejs-app/
├── src/
│   ├── app.js              # Express application entry point
│   ├── routes/
│   │   └── health.js       # Health check routes
│   └── services/
│       └── mathService.js  # Business logic services
├── tests/
│   ├── unit/               # Unit tests
│   │   ├── hello.test.js
│   │   └── mathService.test.js
│   └── integration/        # Integration tests
│       └── health.test.js
├── package.json            # Project dependencies
├── jest.config.js          # Jest configuration
└── Dockerfile              # Docker image definition
```

## Prerequisites

- Node.js 18+
- npm or yarn
- Docker (optional, for containerization)

## Installation

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd nodejs-app
npm install
```

## Usage

### Start the Application

```bash
npm start
```

The application will start on `http://localhost:3000`

### Health Check

```bash
curl http://localhost:3000/health
```

## Testing

### Run All Tests with Coverage

```bash
npm test -- --coverage
```

### Run Unit Tests Only

```bash
npm test
```

### Run Integration Tests Only

```bash
npm run test:integration
```

## Test Coverage

The project maintains **100% code coverage** across:
- Statements: 100%
- Branches: 100%
- Functions: 100%
- Lines: 100%

## Docker

### Build Docker Image

```bash
docker build -t pavan095/github_action_docker_nodejs:latest .
```

### Run Docker Container

```bash
docker run -p 3000:3000 pavan095/github_action_docker_nodejs:latest
```

## CI/CD Pipeline

The project uses GitHub Actions for automated:

1. **Testing** - Unit and integration tests with coverage reports
2. **Building** - Docker image creation
3. **Security Scanning** - Trivy vulnerability scanning
4. **SBOM Generation** - Software Bill of Materials with Syft
5. **Code Signing** - Docker image signing with Cosign
6. **Deployment** - Push to Docker Hub

### Workflow Files

- `.github/workflows/calling-reusable.yaml` - Main CI/CD workflow
- `.github/workflows/test-build.yaml` - Reusable test workflow (from external repository)

## Environment Variables

Set the following environment variables in your GitHub repository settings:

- `DOCKER_USERNAME` - Docker Hub username
- `DOCKER_PASSWORD` - Docker Hub access token

## API Endpoints

### Health Check

- **GET** `/health` - Returns application health status

Example response:
```json
{
  "status": "ok",
  "message": "Application is running"
}
```

## Technologies

- **Framework**: Express.js
- **Testing**: Jest
- **Containerization**: Docker
- **CI/CD**: GitHub Actions
- **Security**: Trivy, Cosign, Syft
- **Language**: Node.js (JavaScript)

## Scripts

```bash
npm start              # Start the application
npm test               # Run all tests with coverage
npm run test:integration  # Run integration tests only
npm run coverage       # Generate coverage report
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Ensure all tests pass with 100% coverage
5. Submit a pull request

## License

MIT

## Support

For issues and questions, please open an issue in the repository.
