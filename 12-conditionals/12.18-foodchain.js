/*
 * Programming Quiz - Navigating the Food Chain (3-8)
 *
 * Use a series of ternary operator to set the category to one of the following:
 *   - "herbivore" if an animal eats plants
 *   - "carnivore" if an animal eats animals
 *   - "omnivore" if an animal eats plants and animals
 *   - undefined if an animal doesn't eat plants or animals
 *
 * Notes
 *   - use the variables `eatsPlants` and `eatsAnimals` in your ternary expressions
 *   - `if` statements aren't allowed ;-)
 */

// change the values of `eatsPlants` and `eatsAnimals` to test your code
var eatsPlants = false;
var eatsAnimals = true;

var category = (eatsPlants && eatsAnimals ? "omnivore" : eatsAnimals ? "carnivore" : eatsPlants ? "herbivore" : undefined); //Omnivore if it eats plants & animals, if not, ask if it eats just animals = carnivore, if not, ask if it eats plants = herbivore

console.log(category);
