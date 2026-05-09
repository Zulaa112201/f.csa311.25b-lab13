# ADR-001: Java & Spring Boot Selection

* [cite_start]**Status:** Accepted [cite: 55]
* **Decider:** Nominzul
* **Date:** 2026-05-09

## Context
Бяцхан номын сангийн системийг хөгжүүлэхэд бат бөх, тест хийхэд хялбар технологийн суурь шаардлагатай.

## Decision
Java 17, Spring Boot 3.x болон H2 өгөгдлийн санг ашиглахаар шийдвэрлэв.

## Consequences
* [cite_start]Давуу тал: Spring Test-ээр unit тест хийхэд хялбар[cite: 82].
* Сул тал: Проектийн эхний setup хугацаа шаардана.