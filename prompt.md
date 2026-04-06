# First prompt to enhance the coding IA prompt
I have a software desing project and i need you to improve the description to be a little more comprenssive for a coding IA. This is the project description: 

Microservices with Micronaut for boat tours offered by local community members without tourism permits. Build a distributed system where local guides publish boat tours and users can view them, implementing small, well-isolated microservices within a monorepo. Pair exercise. 
- Architecture: Micronaut + microservices + REST 
- Monorepo with multiple independent microservices 
- Each microservice with its own layers: business logic, repositories, model 
- Strict separation with no code sharing between microservices 
- Small database per service (can be H2 or SQLite) 
- Write operation: POST /tours in the tours microservice to create a tour with name, location, and price 
- Read operation: GET /tours to list available tours 
- Ability to deploy and run each microservice separately 
- Frontend: React + Tailwind consuming the microservices 
- Individual scripts per microservice for development and production 
- All running locally with minimal configuration 

Please, change this description to be more clear to a coding IA, check the technology stack and the version of teh dependencies to ensure all technologies work well together.

# Coding IA Prompt
Overview:
Build a distributed microservices-based system for a community-driven marketplace of boat tours offered by local guides (non-regulated tourism context).

The system allows:
- Local guides to publish boat tours
- Users to browse available tours

The system must follow a strict microservices architecture, where each service is fully independent and communicates via HTTP (REST)

## Architecture
- Architecture style: Microservices
- Framework: Micronaut
- Communication: REST APIs over HTTP (JSON)
- Repository structure: Monorepo, but with strict isolation per service

### Key Constraints
Each microservice must:
- Be independently runnable
- Have its own:
    - Controller layer (REST)
    - Service layer (business logic)
    - Repository layer (data access)
    - Domain models
- Use its own database (no shared database)
No code sharing between microservices (no shared libraries)
No direct database access between services

## Technology Stack
### Backend
- Language: Java 17 (LTS)
- Framework: Micronaut 4.x
- Build tool: Gradle 8.x (recommended) or Maven 3.9+
- API: REST (JSON)
### Databases (per service)
- Option 1: H2 (in-memory, for simplicity)
- Option 2: SQLite (file-based, lightweight persistence)
Use Micronaut Data for ORM:
- Micronaut Data JDBC (recommended for simplicity)

### Frontend
- Library: React 18.x
- Styling: Tailwind CSS 3.x
- Communication: Fetch API or Axios (REST calls to microservices)

## Microservices Definition
### Tours Service (Required)
Handles creation and retrieval of tours.

#### Data Model
Tour:
- id (UUID or Long)
- name (String)
- location (String)
- price (Decimal)
#### API Endpoints
- POST /tours
    - Description: Create a new tour
    - Request body:
        {
            "name": "Sunset Boat Tour",
            "location": "Gulf Bay",
            "price": 50.0
        }
    - Response: Created tour object
- GET /tours
    - Description: Retrieve all available tours
    - Response:
        [
            {
                "id": "1",
                "name": "Sunset Boat Tour",
                "location": "Gulf Bay",
                "price": 50.0
            }
        ]
## Execution Requirements
- Each microservice must:
    - Run independently via its own command: ./gradlew run
    - Use a different port (e.g., 8081, 8082, etc.)
- Frontend runs separately:
    - npm install
    - npm run dev
- All services must run locally with minimal configuration
    - No cloud dependencies
    - No external infrastructure required

## Integration
- Frontend consumes backend via REST:
    - Example: GET http://localhost:8081/tours
- No API Gateway required (optional extension)

## Non-Functional Constraints
- Keep services small and focused
- Favor simplicity over completeness
- No authentication required
- No message queues required (pure REST)
