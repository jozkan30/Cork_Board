import db from "./connection.js"
import User from "./models/User.js";
import bcrypt from "bcrypt"

const insertData = async () => {
    await db.dropDatabase();
    const user1 = new User({
        username: 'justin',
        email: 'someone@gmail.com',
        password: await bcrypt.hash('1234', 11)
      })
    await user1.save()
    console.log('Created users');
    await db.close();
}

insertData();