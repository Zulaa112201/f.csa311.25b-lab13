import { Router } from 'express';
import { MemberRepository } from '../repositories/MemberRepository';

const router = Router();
const memberRepo = new MemberRepository();

router.post('/', async (req, res) => {
    const { name, email, memberCode } = req.body;
    if (!name || !email || !memberCode) {
        return res.status(400).json({ error: "Мэдээлэл дутуу байна." });
    }
    const member = await memberRepo.save({ id: Date.now().toString(), name, email, memberCode });
    res.status(201).json(member);
});

router.get('/:code', async (req, res) => {
    const member = await memberRepo.findByCode(req.params.code);
    member ? res.json(member) : res.status(404).json({ message: "Уншигч олдсонгүй." });
});

export default router;