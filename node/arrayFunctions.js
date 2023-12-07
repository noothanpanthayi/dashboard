array.js;

const arr = [],
  l = console.log;

const arr2 = ([] = ["orange", "strawberry"]);

arr.push("banana", "apple", "mango");

l(arr.length);

arr[5] = "pineapple";
//adds empty array in between
let num = 6;

l("updated arr length ", arr.length);

l(Object.keys(arr));

arr.forEach((item) => {
  l(item);
});

Object.keys(arr).forEach((index) => {
  l("Item: ", arr[index]);
});

//Object.keys(arr) returns an array of indices of arr
//for in returns key/prop

// for (prop in arr) (
//     l('Prop of Arr ', prop)
// )

// const auto={ make:'Toyota', model:'Camry', year:'2024'}
// for (prop in auto) (
//     l('Prop of auto ', prop)
// )

// l('keys of auto ', Object.keys(auto))

const auto = { make: "Toyota", model: "Camry", year: "2024" };
for (prop in auto) l("Prop of auto ", prop);

l("keys of auto ", Object.keys(auto));

l(arr.concat(arr2)); //concat adds the second array arr2 to the first array arr

entries.js;
const l = console.log;
const arr = ["apple", "banana", "orange"];

//l(arr.entries())

for (const item of arr) {
  //break will work
  if (item === "orange") break;
  l(item);
}

l("=========================");

for (const [index, item] of arr.entries()) {
  //break will work
  l(index, item);
}

l("=========================");

arr.forEach((item) => {
  //break will not work
  l(item);
});

every.js;
const arr = ["apple", "banana", "orange"];
const l = console.log;

const aExist = arr.every((item) => {
  return item.includes("a");
});

l("aExist ", aExist);

fill.js;
const arr = ["apple", "banana", "orange", "pineapple"];
const l = console.log;

// arr.fill(true);
arr.fill(true, 1, 3);

arr.forEach((item) => l(item));

filter.js;
const arr = ["apple", "banana", "orange"];
const l = console.log;

const updatedArr = arr.filter((item) => {
  return item.includes("e");
});

l("aExist ", updatedArr);

find.js;
const arr = ["apple", "banana", "orange"];
const l = console.log;

const updatedArr = arr.find((item) => {
  return item.includes("a");
});

l("aExist ", updatedArr);

findindex.js;
const arr = ["apple", "banana", "orange"];
const l = console.log;

const updatedArr = arr.findIndex((item) => {
  return item.includes("g");
});

l("aExist ", updatedArr);

findlast.js;
const arr = ["apple", "banana", "orange"];
const l = console.log;

const updatedArr = arr.findLast((item) => {
  return item.includes("a");
});

l("aExist ", updatedArr);

findlastindex.js;
const arr = ["apple", "banana", "orange"];
const l = console.log;

const updatedArr = arr.findLastIndex((item) => {
  return item.includes("a");
});

l("aExist ", updatedArr);

from.js;
const str = "apple";
const l = console.log;
l(Array.from(str));

const arr = ["apple", "banana", "orange"];
const l = console.log;

includes.js;
l(arr.includes("banana"));

const str = "bananan";

l(str.toLowerCase().includes("nana"));

join.js;
const l = console.log;
const arr = ["apple", "banana", "orange"];

l(arr.join());
l(arr.join(","));
l(arr.join(""));

const str = "malayalam";

l(str.split(""));

const cdl = "apple, mango, orange";
l(cdl.split());
l(cdl.split(","));

const palendrome = "radar";

l("isPalendrome ", palendrome.split("").reverse().join("") === palendrome);

keysventries.js;

const p = console.log;

const originalJson = [
  {
    make: "Toyota",
    model: "Camry",
    year: "2024",
  },
  {
    make: "Audi",
    model: "Model 1",
    year: "2023",
  },
  {
    make: "Honda",
    model: "Accord",
    year: "2024",
  },
  {
    make: "iAuto",
    model: "Accord",
    year: "2024",
  },
];

const obj = {
  make: "Toyota",
  model: "Camry",
  year: "2024",
};

p("object.entries ", Object.entries(obj));

Object.entries(obj).forEach((item) => {
  p(item[1]);
});

for (const [prop, value] of Object.entries(obj)) {
  p(prop, "|", value);
}

for (key in obj) {
  p(key, "|", obj[key]);
}

map.js;
const arr = ["apple", "banana", "orange"];
const l = console.log;

const allItems = arr.map((item) => {
  return item.includes("p");
});

l("aExist ", allItems);

pop.js;
const l = console.log;
const arr = ["apple", "banana", "orange"];

l(arr.pop());
l(arr.length);

arr.push("pinapple");
l(arr);

arr.shift();
l(arr);

arr.unshift("mango");
l(arr);

reduce.js;
const l = console.log;
const arr = ["apple", "banana", "orange"];

const res = arr.reduce((accum, currentValue) => {
  return currentValue + accum;
});

l(res);

const arr2 = [10, 20, 30];

const res2 = arr2.reduce((accum, currentValue) => {
  console.log(accum);
  return currentValue + accum;
}, 0);

l(res2);

slice.js;
const l = console.log;
const arr = ["apple", "banana", "orange"];

l(arr.slice(1, 2));
l(arr.slice(1));
l(arr);

some.js;
const l = console.log;
const arr = ["apple", "banana", "orange"];

const aExist = arr.some((item) => {
  return item.includes("n");
});

l("aExist ", aExist);

sort.js;
const l = console.log;

const originalJson = [
  {
    make: "Toyota",
    model: "Camry",
    year: "2024",
  },
  {
    make: "Audi",
    model: "Model 1",
    year: "2023",
  },
  {
    make: "Honda",
    model: "Accord",
    year: "2024",
  },
  {
    make: "iAuto",
    model: "Accord",
    year: "2024",
  },
];

const doSort = (json) => {
  return [...json].sort((a, b) => {
    if (a["make"].toLowerCase() < b["make"].toLowerCase()) {
      return -1;
    } else if (a["make"].toLowerCase() < b["make"].toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  });
};

const sortedJson = doSort(originalJson);

l("Original Json ", originalJson);

l("Sorted Json ", sortedJson);

sorted.js;
const l = console.log;

const originalJson = [
  {
    make: "Toyota",
    model: "Camry",
    year: "2024",
  },
  {
    make: "Audi",
    model: "Model 1",
    year: "2023",
  },
  {
    make: "Honda",
    model: "Accord",
    year: "2024",
  },
  {
    make: "iAuto",
    model: "Accord",
    year: "2024",
  },
];

const doSort = (json) => {
  return [json].toSorted((a, b) => {
    if (a["make"].toLowerCase() < b["make"].toLowerCase()) {
      return -1;
    } else if (a["make"].toLowerCase() < b["make"].toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  });
};

const sortedJson = doSort(originalJson);

l("Original Json ", originalJson);

l("Sorted Json ", sortedJson);

splice.js;

const l = console.log;
const arr = ["apple", "banana", "orange", "grapes", "strawberry"];

// l(arr.splice(1));
// l(arr.splice(1,1,"pineapple"));
// l(arr.splice(1,3,"pineapple"))
// l(arr)

arr.splice(2, 1);

l(arr);
