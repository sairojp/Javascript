//import {PI, getCircumference, getArea} from "./Math_util.js";
//When imported singly no need for dot operator 


import * as MathUtil from "./Math_util.js";

console.log(MathUtil.PI);

let circumference = MathUtil.getCircumference(10);
console.log(circumference);

let area = MathUtil.getArea(10);
console.log(area);