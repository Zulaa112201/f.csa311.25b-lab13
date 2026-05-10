package com.library.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private String memberCode; // Уншигчийн үнэмлэхний дугаар

    public Member() {}
    public Member(String name, String email, String memberCode) {
        this.name = name;
        this.email = email;
        this.memberCode = memberCode;
    }
}