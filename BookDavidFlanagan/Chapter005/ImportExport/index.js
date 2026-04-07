"use strict";

import { myNumber, square, cube } from "./Service/myExports.js";
import * as myModule from "./Service/myExports.js";

console.log(myNumber); // 42
console.log(square(5)); // 25
console.log(cube(3)); // 27

console.log(myModule.myNumber); // 42
console.log(myModule.square(5)); // 25
console.log(myModule.cube(3)); // 27
