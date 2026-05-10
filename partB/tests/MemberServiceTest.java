package com.library;

import com.library.model.Member;
import com.library.service.MemberService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class MemberServiceTest {

    @Autowired
    private MemberService memberService;

    @Test
    void testAddMember() {
        Member member = new Member("Nominzul", "zulaa@must.edu.mn", "MEM001");
        Member saved = memberService.addMember(member);
        assertNotNull(saved.getId());
        assertEquals("Nominzul", saved.getName());
    }

    @Test
    void testMemberEmailNotNull() {
        Member member = new Member("Zulaa", "test@test.com", "MEM002");
        assertNotNull(member.getEmail());
    }

    @Test
    void testGetAllMembers() {
        memberService.addMember(new Member("Munkhjin", "mugi@must.edu.mn", "MEM003"));
        assertFalse(memberService.getAllMembers().isEmpty());
    }
}