/* eslint-disable no-console */
import { connection } from "../boot.js"
import QuestSeeder from "./seeders/QuestSeeder.js"
import UserSeeder from "./seeders/UserSeeder.js"
import TaskSeeder from "./seeders/TaskSeeder.js"

class Seeder {
  static async seed() {
    // include individual seed commands here
    console.log("...seeding users")
    await UserSeeder.seed()

    console.log("...seeding quests")
    await QuestSeeder.seed()

    console.log("...seeding tasks")
    await TaskSeeder.seed()

    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder