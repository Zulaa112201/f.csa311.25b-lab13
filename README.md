#  AI-Driven Mini Library Construction
> **Хичээл:** F.CSM311 Программ хангамжийн бүтээлт  
> **Бие даалт:** №13 - AI-Assisted Software Construction  
> **Оюутан:** Номинзул 
> **Сургууль:** ШУТИС, МХТС  

---

##  Төслийн философи
Энэхүү төсөл нь хөгжүүлэгч болон AI (Claude)-ийн хамтын ажиллагааны үр дүнд **Robustness (Найдвартай байдал)** болон **Quality (Чанар)**-ыг хамгийн дээд түвшинд хангасан номын сангийн системийг бүтээх туршилт юм. Бид зөвхөн код бичих биш, AI-г "Ухаалаг туслах" болгон ашиглаж, системийн архитектурыг оновчилсон.

---

## Хурдан эхлэх (Quick Start)

###  Системийг ажиллуулах
```bash
cd partB
npm install
npm run dev
# Сервер ажиллах хаяг: http://localhost:3000




###Системийн бүтэц
bie-daalt-13/
├── CLAUDE.md              # Build-ийн дүрэм, Конвенц, Хориотой бүсүүд
├── .claude/commands/      # Custom Slash Commands (AI-г удирдах 6 тархи)
├── partA/                 # Төлөвлөлт: Архитектур, ADR, Стак харьцуулалт
├── partB/                 # Хэрэгжилт: Express + TypeScript + SQLite
└── partC/                 # Эргэцүүлэл: 1500+ үгтэй тайлан, Өөрийн үнэлгээ


Технологийн стак (The Stack)
Runtime & Language: Node.js + TypeScript (Type-safety-г хангах зорилгоор)

Framework: Express.js (API Layer)

Database: SQLite (better-sqlite3) - Хөнгөн бөгөөд найдвартай

Testing: Jest + Supertest (Integration & Unit testing)

AI Orchestration: Claude 3.5 Sonnet & Custom Instructions

