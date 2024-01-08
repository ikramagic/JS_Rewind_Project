const entrepreneurs = [
  { first: "Steve", last: "Jobs", year: 1955 },
  { first: "Oprah", last: "Winfrey", year: 1954 },
  { first: "Bill", last: "Gates", year: 1955 },
  { first: "Sheryl", last: "Sandberg", year: 1969 },
  { first: "Mark", last: "Zuckerberg", year: 1984 },
  { first: "Beyonce", last: "Knowles", year: 1981 },
  { first: "Jeff", last: "Bezos", year: 1964 },
  { first: "Diane", last: "Hendricks", year: 1947 },
  { first: "Elon", last: "Musk", year: 1971 },
  { first: "Marissa", last: "Mayer", year: 1975 },
  { first: "Walt", last: "Disney", year: 1901 },
  { first: "Larry", last: "Page", year: 1973 },
  { first: "Jack", last: "Dorsey", year: 1976 },
  { first: "Evan", last: "Spiegel", year: 1990 },
  { first: "Brian", last: "Chesky", year: 1981 },
  { first: "Travis", last: "Kalanick", year: 1976 },
  { first: "Marc", last: "Andreessen", year: 1971 },
  { first: "Peter", last: "Thiel", year: 1967 },
];

// Question 1
const entrepreneursNames = entrepreneurs.map((e) => ({
  firstName: e.first,
  lastName: e.last,
}));
console.log(entrepreneursNames);

// Question 2
const currentYear = new Date().getFullYear();
const entrepreneursWithAge = entrepreneurs.map((e) => ({
  first: e.first,
  last: e.last,
  age: currentYear - e.year,
}));
console.log(entrepreneursWithAge);

// Question 3
const entrepreneursWithRenamedKeys = entrepreneursWithAge.map((e) => ({
  firstName: e.first,
  lastName: e.last,
  age: e.age,
}));
console.log(entrepreneursWithRenamedKeys);

// Question 4
const entrepreneursBornIn70s = entrepreneursWithRenamedKeys.filter(
  (e) => e.age >= 70 && e.age < 80
);
console.log(entrepreneursBornIn70s);
