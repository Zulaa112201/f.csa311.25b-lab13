# System Architecture

## 1. High-Level Architecture
[cite_start]Систем нь Layered Architecture буюу үе давхаргат бүтэцтэй байна[cite: 35].

```mermaid
graph TD
    User((User)) --> API[REST Controllers]
    API --> Service[Service Layer - Logic]
    Service --> Repo[Repository Layer - Data Access]
    Repo --> DB[(H2 In-Memory DB)]

    subgraph "Core Modules"
        Book[Book Module]
        Member[Member Module]
        Loan[Loan Module]
    end