# System Architecture

## Overview
Энэхүү "Mini Library" систем нь **Layered Architecture** (Давхаргат архитектур) зарчмаар хөгжүүлэгдсэн. Энэ нь кодын хамаарлыг багасгаж, тест хийх болон засвар үйлчилгээ хийхэд хялбар болгодог.

## Architecture Layers
1. **Routes Layer:** API endpoint-үүдийг тодорхойлж, хүсэлтийг хүлээн авна.
2. **Controller/Service Logic:** Бизнес дүрмүүдийг хэрэгжүүлнэ (Жишээ нь: Ном олгох боломжтой эсэхийг шалгах).
3. **Repository Layer:** Өгөгдлийн сантай (SQLite/Memory) шууд харилцаж, CRUD үйлдлүүдийг гүйцэтгэв.
4. **Models:** Системийн өгөгдлийн бүтцийг (Book, Member, Loan) тодорхойлно.

## Data Flow
User Request -> Routes -> Repositories -> Data Storage