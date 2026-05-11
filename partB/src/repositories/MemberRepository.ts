import { Member } from '../models';

export class MemberRepository {
    private members: Member[] = [];

    async save(member: Member): Promise<Member> {
        this.members.push(member);
        return member;
    }

    async findByCode(code: string): Promise<Member | undefined> {
        return this.members.find(m => m.memberCode === code);
    }
}