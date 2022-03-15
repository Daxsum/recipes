const user = {
	username: "johndoe",
	email: "johndoe@email.com",
	githubHandle: "@johndoe"
};

// const username = user.username
// const email = user.email
// const githubHandle = user.githubHandle

const { username: name, email, githubHandle } = user;
console.log(name); // johndoe // Aliasing

const users = ["johndoe", "janedoe", "smith"];
// const user1 = users[0]
// const user2 = users[1]
// const user3 = users[3]

const [user1, user2, user3] = users;

/** ------------- */
// function fetchRepos(language, minStars, maxStars, createdBefore, createAfter,) {}
// fetchRepos("JavaScript", 100, null, new Date("01.01.2017").getTime(), null,);

// function fetchRepos({ language, minStars, maxStars, createdBefore, createAfter }) {}
// fetchRepos({
// 	language: "JavaScript",
// 	maxStars: null,
// 	createdAfter: null,
// 	createdBefore: new Date("01/01/2017").getTime(),
// 	minStars: 100
// });
/** ------------- */

/** ------------- */
function fetchRepos({ language, minStars, maxStars, createdBefore, createdAfter }) {
	language = language || "All";
	minStars = minStars || 0;
	maxStars = maxStars || "";
	createdBefore = createdBefore || "";
	createdAfter = createdAfter || "";
}

// function fetchRepos({
//     language = "All",
//     minStars = 0,
//     maxStars = "",
//     createdBefore = "",
//     createdAfter = ""
// }) {}

fetchRepos({
	language: "JavaScript",
	createdBefore: new Date("01/01/2017").getTime(),
	minStars: 100
});
/** ------------- */

/** ------------- */
function getUserData(player) {
	return Promise.all([getProfile(player), getRepos(player)]).then(function (data) {
		const profile = data[0];
		const repos = data[1];
		return { profile: profile, repos: repos };
	});
}
/** ------------- */

/** ------------- */
function getUserData(player) {
	return Promise.all([getProfile(player), getRepos(player)]).then(function (data) {
		const [profile, repos] = data;
		return { profile: profile, repos: repos };
	});
}
/** ------------- */

/** ------------- */
function getUserData(player) {
	return Promise.all([getProfile(player), getRepos(player)]).then(([profile, repos]) => {
		return { profile: profile, repos: repos };
	});
}
/** ------------- */
