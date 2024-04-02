let hash1 = new Map();

hash1.set('a', 2);
hash1.set('b', 7);
hash1.set('c', 5);

console.log(hash1);
console.log(hash1.get('a'));
console.log(hash1.size);
hash1.delete('b');
console.log(hash1);