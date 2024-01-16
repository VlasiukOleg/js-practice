// const planets = ['Земля', 'Марс', 'Венера', 'Юпітер'];

// const planetsToUpperCase = planets.map(planet => planet.toUpperCase());

// console.log(planetsToUpperCase);

// const students = [
//   { name: 'Манго', courses: ['математика', 'фізика'] },
//   { name: 'Полі', courses: ['інформатика', 'математика'] },
//   { name: 'Ківі', courses: ['фізика', 'біологія'] },
// ];

// const flatStudents = students.map(student => student.courses);

// console.log(flatStudents);

// const flatMapStudents = students.flatMap(student => student.courses);

// console.log(flatMapStudents);

// const values = [51, -3, 27, 21, -68, 42, -37];

// const numberForFind = 21;

// const filteredValues = values.filter(number => number === numberForFind);

// console.log(filteredValues);

// const allCourses = ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];

// const uniqueCourses = allCourses.filter((course, index, array) => array.indexOf(course) === index);

// console.log(uniqueCourses);

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

// const colorToFind = colorPickerOptions.find(color => color.label === 'green');

// const findColorIndex = colorPickerOptions.findIndex(color => color.label === 'pink');

// console.log(colorToFind);
// console.log(findColorIndex);

// const numbers = [1, 3, 5, 7, 8, 9, 10];

// const total = numbers.reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);

// console.log(total);

// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Полі', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Ківі', score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// const totalScore = students.reduce((total, students) => {
//   return total + students.score;
// }, 0);

// console.log(totalScore);

// const averageScore = totalScore / students.length;

// console.log(averageScore);

// ? Порахувати суму всіх лайків

// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 25, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// const likes = tweets.reduce((total, tweet) => {
//   return total + tweet.likes;
// }, 0);

// console.log(likes);

// const tags = tweets.reduce((allTags, tweet) => {
//   //   return allTags.concat(tweet.tags);
//   allTags.push(...tweet.tags);

//   return allTags;
// }, []);

// console.log(tags);

// TODO зробимо функцію для прорахунку кількості лайків

// const countLikes = tweets => {
//   return tweets.reduce((totalLikes, tweet) => {
//     return totalLikes + tweet.likes;
//   }, 0);
// };

// console.log(countLikes(tweets));

// const values = [51, 27, 21, 42, 4, 15];

// values.sort();

// console.log(values);

// const scores = [61, 19, 74, 35, 92, 56, 4];

// const ascedingScores = [...scores].sort((a, b) => a - b);

// console.log(ascedingScores);
