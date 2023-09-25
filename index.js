// function permutations(string) { // 'abc'
//     const lettersArray = string.split(''); // ['a', 'b', 'c']
//     let result;
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
var is = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var first = __spreadArray([], args, true)[0];
    return __spreadArray([], args, true).every(function (el) { return el === first; });
};
var call = function (f) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return f.apply(void 0, args);
};
var fill = function (length, value) {
    return Array.from({ length: length }, function () { return value; });
};
var test = function (length, value) {
    return Array.from({ length: length }, function () { return value; });
};
call(fill, 10, '1');
call(test, 10, 1);
