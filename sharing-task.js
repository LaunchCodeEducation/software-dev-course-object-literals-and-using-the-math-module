/*
===========================================
📚 Collaborative Object Literal Library
===========================================

🎯 Objective:
Students will collaboratively create a library of object literals based on a theme of their choice
(e.g., animals, vehicles, recipes, planets). This activity promotes:

- Teamwork and collaboration
- Practicing object literals
- Creativity and knowledge sharing

---
🧭 Instructions
*/

// ============================================
// 👥 Step 1: Form Small Groups
// ============================================
// - Divide into groups of 3–4
// - Choose a theme (e.g., "Animals", "Vehicles", "Fruits")

// ============================================
// 🧱 Step 2: Define the Object Structure
// ============================================
// - Agree on a consistent format for your objects

// Example Object Structure (Theme: Animals):
/*
{
  name: "Elephant",
  species: "African Elephant",
  diet: "Herbivore",
  habitat: "Savanna",
  endangeredStatus: "Vulnerable"
}
*/

// ============================================
// ✍️ Step 3: Create the Objects
// ============================================
// - Each group member creates 2–3 unique objects
// - Combine them into an array called `library`

const animalLibrary = [
  {
    name: "Elephant",
    species: "African Elephant",
    diet: "Herbivore",
    habitat: "Savanna",
    endangeredStatus: "Vulnerable"
  },
  {
    name: "Tiger",
    species: "Bengal Tiger",
    diet: "Carnivore",
    habitat: "Forest",
    endangeredStatus: "Endangered"
  },
  {
    name: "Kangaroo",
    species: "Red Kangaroo",
    diet: "Herbivore",
    habitat: "Grasslands",
    endangeredStatus: "Least Concern"
  }
];

// ============================================
// 🔍 Step 4: Share and Query
// ============================================
// - Share your library with another group
// - Write code to interact with the other group's library

// Example Queries:

// 🔎 Find all carnivores
const carnivores = animalLibrary.filter(animal => animal.diet === "Carnivore");
console.log("Carnivores:", carnivores);

// ➕ Add a new animal
animalLibrary.push({
  name: "Penguin",
  species: "Emperor Penguin",
  diet: "Carnivore",
  habitat: "Antarctica",
  endangeredStatus: "Near Threatened"
});

// ✏️ Modify an existing animal
animalLibrary[0].endangeredStatus = "Endangered"; // Change Elephant status

// ❌ Delete an animal based on a condition
const updatedLibrary = animalLibrary.filter(animal => animal.name !== "Tiger");
console.log("After removing Tiger:", updatedLibrary);

// ============================================
// 📢 Step 5: Present and Discuss
// ============================================
// - Present your object library to the class
// - Share examples of queries and modifications you made on another group's data
// - Reflect on what you learned from other teams
