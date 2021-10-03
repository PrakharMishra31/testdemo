//2. Create your own resume data in JSON format

const resumeJSON = {
  name: "Prakhar",
  age: 23,
  qualification: "B.Tech Mechanical",
  passYear: 2019,
};

//1. For the given JSON iterate over all for loops (for, for in, for of, forEach)

const size = Object.keys(resumeJSON).length;
for (let i = 0; i < size; i++) {
  console.log(resumeJSON[i]);
}

for (let i in resumeJSON) {
  console.log(i + " " + resumeJSON[i]);
}

Object.entries(resumeJSON).forEach((el) => console.log(el.join(" ")));

//Shows error as object is not iterable in "for...of loop"
for (let i of resumeJSON) {
  console.log(i + " " + resumeJSON[i]);
}
