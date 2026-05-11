# Mini Library System - Implementation Details

## Хэрэгжүүлсэн функцууд
1. **Book Management:** Ном нэмэх, жагсаалт харах, устгах.
2. **Member Management:** Уншигчийн бүртгэл хөтлөх.
3. **Loan Tracking:** Ном олгох (Loan) болон номын бэлэн байдлыг (availability) хянах.

## Технологийн стак
- Java 17, Spring Boot 3.2.5
- H2 In-Memory Database
- Spring Data JPA & Lombok

## Проектыг ажиллуулах заавар
- Build: `./mvnw clean install`
- Run: `./mvnw spring-boot:run`
- Tests: `./mvnw test`

## Тестийн үр дүн
Нийт 10 unit test амжилттай (Pass) ажиллаж байна.