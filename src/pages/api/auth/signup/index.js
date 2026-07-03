import { Users } from "@/constants/Users";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "src", "constants", "Users.js");

export default function handler(req, res) {
    if (req.method === "POST") {
        const { username, password, level } = req.body;

        // پیدا کردن آخرین id
        const lastUser = Users[Users.length - 1];
        const newId = lastUser ? parseInt(lastUser.id)+1:0 ;

        // بررسی وجود کاربر با آیدی مشابه
        const userExists = Users.find(user => user.id === newId.toString());
        if (userExists) {
            return res.status(400).json({ message: "کاربر با این آیدی قبلاً ثبت‌نام شده است." });
        }

        // اضافه کردن کاربر جدید
        const newUser = { id: newId.toString(), username, password, level };
        const updatedUsers = [...Users, newUser];
        const fileContent = `const Users = ${JSON.stringify(updatedUsers, null, 2)};\n\nexport { Users };`;

        fs.writeFileSync(filePath, fileContent);

        return res.status(201).json({ message: "کاربر جدید با موفقیت ثبت‌نام شد.", user: newUser });
    }
}
