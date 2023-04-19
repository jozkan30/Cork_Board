import connection from './connection.js'
import Review from './models/Wine_model.js'
import User from "./models/User.js";
import bcrypt from "bcrypt"

const reviews = [
    {
        title: "Test",
        vintage: 2023,
         reigon: "Napa Valley",
        country: "USA",
        description: "Delicous wine",
        rating: 3,
        image:"https://www.bvwines.com/dw/image/v2/BDBC_PRD/on/demandware.static/-/Sites-tweus-master-catalog/default/dwe9eb77af/images/hi-res/BV/8033835-2018-Beaulieu-Vineyard-Tapestry-NV-Red_750/8033835-2018-Beaulieu-Vineyard-Tapestry-NV-Red_750.png?sw=566&sh=849&sm=fit"
        
    }]
    
    const insertData = async () => {
        await connection.dropDatabase();
        await Review.create(reviews)
        const user1 = new User({
        username: 'justin',
        email: 'someone@gmail.com',
        password: await bcrypt.hash('1234', 11)
      })
    await user1.save()
    console.log('Created users');


        await connection.close();
    }
    
    insertData();