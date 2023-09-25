// function permutations(string) { // 'abc'
//     const lettersArray = string.split(''); // ['a', 'b', 'c']
//     let result;

//     for (let i = 0; i < lettersArray.lenght; i++) {
//         currentLetter = lettersArray[i];

//         for (let k = 0; k < lettersArray.lenght; k++) {
//             if (!currentLetter) {
//                 result[currentLetter].push(lettersArray[k]);
//             }
//         };
//     };

//     return result;
// }


// console.log(permutations('ab'));






// enum piles {
//     red = 'RED',
//     blue = 'BLUE'
// }

// function sortThePile(pileOfTowels: piles[], weeklyUsedTowels: number[]) {
//     let result = pileOfTowels;
//     let pileLenght = pileOfTowels.length;

//     const usedPiles: (count: number) => void = (count) => {
//         let sortUsedPiles: piles[] = [];
//         let usedPiles: piles[] = result.slice(pileLenght - count, pileLenght);
//         let unusedPiles: piles[] = result.slice(0, pileLenght - count);
//         console.log(usedPiles, unusedPiles);

//         for (let i: number = 0; i < usedPiles.length; i++) {
//             if (usedPiles[i] === piles.red) {
//                 sortUsedPiles.unshift(usedPiles[i]);
//             } else {
//                 sortUsedPiles.push(usedPiles[i]);
//             }
//         }

//         result = [...unusedPiles, ...sortUsedPiles];
//     }

//     for (let i: number = 0; i < weeklyUsedTowels.length; i++) {
//         usedPiles(weeklyUsedTowels[i]);
//     }

//     console.log(result);
// }

// sortThePile([piles.red, piles.blue, piles.red, piles.red, piles.blue, piles.red], [5]);





// function zeros (n: number) {
//     let Z: number;

//     for (let i: number = 1; i < n; i++) {
//         Z = Z + n/5^i
//     }

//     return Z;
// }

// console.log(zeros(8))





// function matrixAddition(a: Array<number[]>, b: Array<number[]>) {
//     let result: Array<number[]> = [];

//     for (let i: number = 0; i < a.length; i ++) {
//         result.push([]);

//         for (let k: number = 0; k < a[i].length; k++) {
//             result[i][k] = a[i][k] + b[i][k];
//         }
//     }

//     return result;
// }

// console.log(matrixAddition([[1]], [[2]]));




// function generateBC(url: string, separator: string) {
//     let urlEndPoints: string[] = url.split('/');
//     let re = /.[a-zA-Z]$/;
//     let symbol = '&' || '#' || '?';
//     const conditon: any = ["the","of","in","from","by","with","and", "or", "for", "to", "at", "a"];

//     return urlEndPoints.map((el: string, idx: number) => {
//         let newEl: any = el;

//         if (el.length >= 30) {
//             newEl = el
//                     .split('-')
//                     .filter((letter: string) => !conditon.includes(letter))
//                     .map(el => el[0])
//                     .join('');
//         }

//         if (re.test(newEl)) {
//             newEl = newEl.split('.')[0];

//             if (newEl === 'index') {
//                 return;
//             }
//         }

//         if (newEl.includes(symbol)) {
//             newEl = newEl.split(symbol)[0];
//         }

//         if (idx === 0) {
//             return '<a href="/">HOME</a>'
//         } else if (idx === urlEndPoints.length - 1) {
//             return `<span class="active">${newEl.toUpperCase()}</span>`
//         } else {
//             return `<a href="/${el}/">${newEl.toUpperCase()}</a>`;
//         }
//     }).filter(el => el !== undefined).join(`${separator}`);
// }

// console.log(generateBC('www.microsoft.com/important/confidential/docs/index.htm#top', '/'));




// function incrementString (str: string) {
//     const lettersArray = str.split('');
//     let marker = lettersArray.length - 1;

//     for (let i = lettersArray.length - 1; i >= 0; i--) {
//         if (!isNaN(+lettersArray[i])) {
//             marker = marker - 1;
//         } else {
//             break;
//         }
//     };

//     if (marker === lettersArray.length) {
//         return str + '1'
//     }

//     let getNewEnding = (str: string) => {
//         const newLetersArray = str.split('');
//         let markerForZero = 0;
        
//         for (let i = 0; i >= 0; i++) {
//             if (+newLetersArray[i] === 0) {
//                 markerForZero = markerForZero + 1;
//             } else {
//                 break;
//             }
//         };

//         let newEnding = Number(str.substring(markerForZero)) + 1;
//         console.log(newEnding);

//         if (newEnding.toString().length > str.substring(markerForZero).length) {
//             return `${str.substring(0, markerForZero - 1)}${newEnding}`;
//         }

//         return `${str.substring(0, markerForZero)}${newEnding}`;
//     }

//     return `${str.substring(marker + 1, 0)}${getNewEnding(str.substring(marker + 1))}`;
// };

// console.log(incrementString('dfg345fghj009999'));





// function topThreeWords(text: string) {
//     let  result = [];

//     if (text === '') {
//         return result;
//     }

//     let re = /[a-zA-Z]/;
//     let obj = {};
//     let newText = text.replace(/\.|\!|\#|\$|\%|\@|\/|\\|\|/gm, ' ');


//     const func = (text: string) => {
//         if (text === '') {
//             result = Object.entries(obj).sort((a, b) => b[1] - a[1]).splice(0, 3);
            
//             return result.map((el: [string, number]) => el[0]);
//         }

//         let newText = [...text.split(' ')].filter(el => el !== '');
//         let letter = newText.splice(0, 1)[0];
//         if (re.test(letter) && letter) {
//             obj[letter.toLowerCase()]
//             ? obj[letter.toLowerCase()] = obj[letter.toLowerCase()] + 1
//             : obj[letter.toLowerCase()] = 1;
//         } else {
//             return func(newText.join(' '));
//         }

//         return func(newText.join(' '));
//     }

//     return func(newText);
// }

// console.log(topThreeWords('  ...  '));




// function ipsBetween(start: string, end: string): number {
//     const convertionFunc = (ipAdress: string) => {
//         const [x, y, z, v] = ipAdress.split('.');
//         let Xpoint = +x * 2**24;
//         let Ypoint = +y * 2**16;
//         let Zpoint = +z * 2**8;
//         let Vpoint = +v * 1;

//         return Xpoint + Ypoint + Zpoint + Vpoint;
//     }

//     let startPosition: number = convertionFunc(start);
//     let endPosition: number = convertionFunc(end);

//     return endPosition - startPosition;
// }


// console.log(ipsBetween("150.0.0.0", "150.0.0.1"));


// function perimeter(n: number) {
//     if (n === 0) {
//         return 4;
//     }

//     let result: number = 8;
//     let first = 1;
//     let second = 1;
//     let buffer = first + second;

//     const rememberPrev = () => {
//         result = result + (buffer * 4);
//         first = second;
//         second = buffer;
//         buffer = first + second;
//     }

//     for (let i = 1; i < n; i++) {
//         rememberPrev()
//     }
  
//     return result;
// }

// console.log(perimeter(5));






// const btn: HTMLButtonElement = document.querySelector('.btn');

// const getRandomInt = (max: number) => {
//     return Math.floor(Math.random() * max);
// }

// const getRandomColor = () => {
//     return `${getRandomInt(255)} ${getRandomInt(255)} ${getRandomInt(255)}`;
// }

// const clickHandler = (event: Event) => {
//     (event.target as HTMLButtonElement).style.backgroundColor = `rgb(${getRandomColor()})`;
// }

// btn.addEventListener('click', clickHandler);




// const get = (obj: object | string | undefined, path: string) => {
//     if (!obj && !path) {
//         let clearPath = path.replace(/\./gm, '');
//         if (clearPath.length > 1) {
//             let newData: object = obj[clearPath.slice(0, 1)];
//             let newPath: string = clearPath.slice(1, clearPath.length);
//             return get(newData, newPath);
//         } else {
//             return obj?.[path];
//         }
//     } else {
//         return undefined
//     }
// }

// const obj = {
//     a: {
//         b: {
//             c: 'd',
//         },
//         e: 'f',
//         f: (() => ({ y: 's'}))()
//     }
// }

// console.log(get(obj, 'a.b'))     // {c: 'd'}
// console.log(get(obj, 'a.b.c'))  // 'd'
// console.log(get(obj, 'a.d.c'))  // 'undifened'
// console.log(get(obj, 'a.e'))     // 'f'
// console.log(get(obj, 'a.x.e'))   // undifened
// console.log(get(obj, 'a.f.y'))   // s

// function pigIt(str: string) {
//     return str.split(' ').map(el => {

//         if (!/[a-zA-Z0-9]/.test(el)) {
//             console.log(el)
//             return el;
//         };

//         let marker = el.length - 1;

//         while (!/[a-zA-Z0-9]/.test(el[marker])) {
//             marker--;
//         };

//         return `${el.slice(1, marker + 1)}${el.slice(0, 1)}ay${el.slice(marker + 1)}`;
//     }).join(' ');
// };





// type TreeNode = Nodo | null

// class Nodo {
//     value: number
//     left: TreeNode
//     right: TreeNode
//     constructor(value: number, left: TreeNode = null, right: TreeNode = null) {
//       this.value = value;
//       this.left  = left;
//       this.right = right;
//     }
// }

// const treeOne =
//     new Nodo(2,
//         new Nodo(8,
//           new Nodo(1),
//           new Nodo(3)
//         ),
//         new Nodo(9,
//           new Nodo(4),
//           new Nodo(5)
//     )
// );

// function treeByLevels (node: Nodo): number[] {
//     let result = [];
//     let rootNode = node;
//     if (rootNode.value) {
//         result.push(rootNode.value);
//     }

//     const leftFucn = (node: Nodo) => {
//         console.log(node)
//         if (node.left === null && node.right === null && result.length !== 0) {
//             return
//         }

//         if (node.left) {
//             result.push(node.left.value)
//         }

//         if (node.right) {
//             result.push(node.right.value)
//         }

//         if (node.left) {
//             return leftFucn(node.left);
//         } else {
//             return leftFucn(rootNode.right);
//         }
//     }

//     leftFucn(rootNode);

//     return result;
// }

// console.log(treeByLevels(treeOne));




// const is = <T>(
//     ...args: T[]
// ): boolean => {
//     let first: T = [...args][0];
//     return [...args].every(el => el === first);
// }

// const call = <T extends unknown[], R extends string[]>(
//     f: (...args: T) => R,
//     ...args: T
// ): R => {
//     return f(...args);
// }

// const fill = (
//     length: number,
//     value: string,
// ): string[] => {
//     return Array.from({length}, () => value);
// }

// const test = (
//     length: number,
//     value: number
// ): number[] => {
//     return Array.from({length}, () => value);
// }

// call(fill, 10, '1');
// call(test, 10, 1);




// type Color = 'Black' | 'White'
// type Path = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'
// type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

// class Game {
//     private pieces = Game.makePieces()

//     private static makePieces() {
//         return [
//             new King('White', 'E', 1),
//             new King('Black', 'E', 8),

//             new Queenn('White', 'D', 1),
//             new Queenn('Black', 'D', 8),

//             new Bishop('White', 'C', 1),
//             new Bishop('White', 'F', 1),
//             new Bishop('Black', 'C', 8),
//             new Bishop('Black', 'F', 8),

//             new Knight('White', 'G', 1),
//             new Knight('White', 'B', 1),
//             new Knight('Black', 'G', 8),
//             new Knight('Black', 'B', 8),

//             new Rook('White', 'A', 1),
//             new Rook('White', 'H', 1),
//             new Rook('Black', 'A', 8),
//             new Rook('Black', 'H', 8),

            
//             new Pawn('White', 'A', 2),
//             new Pawn('White', 'B', 2),
//             new Pawn('White', 'C', 2),
//             new Pawn('White', 'D', 2),
//             new Pawn('White', 'E', 2),
//             new Pawn('White', 'F', 2),
//             new Pawn('White', 'G', 2),
//             new Pawn('White', 'H', 2),

//             new Pawn('Black', 'A', 7),
//             new Pawn('Black', 'B', 7),
//             new Pawn('Black', 'C', 7),
//             new Pawn('Black', 'D', 7),
//             new Pawn('Black', 'E', 7),
//             new Pawn('Black', 'F', 7),
//             new Pawn('Black', 'G', 7),
//             new Pawn('Black', 'H', 7),
//         ]
//     }
// }

// abstract class Piece {
//     protected position: Position

//     constructor (
//         private readonly color: Color,
//         path: Path,
//         rank: Rank
//     ) {
//         this.position = new Position(path, rank)
//     }

//     moveTo(position: Position) {
//         this.position = position
//     }

//     abstract canMoveTo(position: Position): boolean 
// }

// class Position {
//     constructor (
//         private path: Path,
//         private rank: Rank
//     ) {}

//     distanceFrom(position: Position) {
//         return {
//             rank: Math.abs(position.rank - this.rank),
//             path: Math.abs(position.path.charCodeAt(0) - this.path.charCodeAt(0))
//         }
//     }
// }

// class King extends Piece {
//     canMoveTo(position: Position): boolean {
//         let distance = this.position.distanceFrom(position)
//         return distance.rank < 2 && distance.path < 2
//     }
// }

// class Queenn extends Piece {
//         canMoveTo(position: Position): boolean {
//         let distance = this.position.distanceFrom(position)
//         return distance.rank < 2 && distance.path < 2
//     }
// }
// class Bishop extends Piece {
//         canMoveTo(position: Position): boolean {
//         let distance = this.position.distanceFrom(position)
//         return distance.rank < 2 && distance.path < 2
//     }
// }
// class Knight extends Piece {
//         canMoveTo(position: Position): boolean {
//         let distance = this.position.distanceFrom(position)
//         return distance.rank < 2 && distance.path < 2
//     }
// }
// class Rook extends Piece {
//         canMoveTo(position: Position): boolean {
//         let distance = this.position.distanceFrom(position)
//         return distance.rank < 2 && distance.path < 2
//     }
// }
// class Pawn extends Piece {
//         canMoveTo(position: Position): boolean {
//         let distance = this.position.distanceFrom(position)
//         return distance.rank < 2 && distance.path < 2
//     }
// }


// let set = new Set;
// set.add("1").add('2').add('3');
// set.has(2);
// set.has(5);

// class NewSet {
//     has<T>(value: T): boolean {
//         return 
//     }
//     add<T>(value: T): this {
//         return 
//     }
// }

// class MutableSet extends NewSet {
//     delete<T>(value: T): boolean {
//         return
//     }
// }

// interface A {
//     good: number,
//     bad: number,
// }

// interface B extends A {
//     good: number,
//     bad: number 
// }

// interface B extends A {
//     good: number,
//     bad: number 
// }

// type C = {
//     good: number,
//     bad: number,
// }

// type F = {
//     happy: number,
// }

// type E = C | F
// type K = C & F

// const test: K = {
//     good: 1,
//     bad: 1,
//     happy: 1 
// }




// type State = {
//     [key: string]: string
// }

// class StringDatabase {
//     state: State = {}

//     get(key: string): string | null {
//         return key in this.state ? this.state[key] : null
//     }

//     set(key: string, value: string): void {
//         this.state[key] = value
//     }

//     static from(state: State) {
//         let db = new StringDatabase 
//         for (let key in state) {
//             db.set(key, state[key])
//         }
//         return db;
//     }
// }

// let db1 = new StringDatabase();
// let db2 = StringDatabase.from({});


// class MyMap<K, V> {
//     initialKey: K;
//     initialValue: V;
//     constructor(initialKey: K, initialValue: V) {
//         this.initialKey = initialKey;
//         this.initialValue = initialValue;
//     }
//     get(key: K) {

//     }

//     set(key: K, value: V) {

//     }

//     merge<K1, V1>(map: MyMap<K1, V1>): MyMap<K | K1, V | V1> {
//         return 
//     }

//     static of<K, V>(k: K, v: V): MyMap<K, V> {
//         return 
//     }
// }

// type key = string | number | symbol 

// interface test<K> {
//     [key: key]: K
// }

// const testFunc = <V>(key: key, value: V): test<V> => {
//     return {
//         [key]: value
//     }
// }

// const obj = testFunc('test', 123)

