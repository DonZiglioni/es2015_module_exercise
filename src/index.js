import Foods from './foods';
import { Choice, Remove } from './helpers';

let food = Choice(Foods)

console.log(`I'd like one ${food}, please`);
console.log(`Here you go: ${food}`);
console.log(`Delicious! May I have another ${food}?`);
console.log(`I'm sorry, we're all out. We have ${Remove(Foods, food).length} left.`);

