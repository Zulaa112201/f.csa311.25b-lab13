# /clean — Clean Architecture & Refactoring
Кодыг илүү цэгцтэй болгохын тулд:
1. **Separation of Concerns:** Router дотор бизнес логик байна уу? (Логикийг Service рүү шилжүүлэх).
2. **Naming:** `MmeberRepository` гэх мэт бичгийн алдаа болон утгагүй нэршлийг зас.
3. **DRY (Don't Repeat Yourself):** Давтагдаж буй validation эсвэл query-г нэгтгэ.
4. **Type Safety:** `any` ашигласан хэсгүүдийг `Interface` эсвэл `Type`-аар соль.