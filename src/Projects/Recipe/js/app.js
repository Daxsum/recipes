import { fetchRecipes } from "./fetchRecipe";
import { API_ENDPOINT } from "./config";
//import { header } from "./header";

class Render {
	constructor(_targetID) {
		this.targetID = _targetID;
		this.target = this.getTargetElement();
	}

	getTargetElement() {
		return document.getElementById(this.targetID);
	}

	injectContent(content) {
		this.target.innerHTML += content;
	}
}

const getRecipeCard = ({ recipeTitle, recipeImg, recipeDescription, recipeURL }) => {
	return `
		<div class="col">
			<div class="card">
				<img
					src="${recipeImg}" width="90" height="200"
					class="card-img-top"
				/>
				<div class="card-body">
					<h5 class="card-title">
						${recipeTitle}
					</h5>
					<p class="card-text">
						${recipeDescription}
					</p>
					<a target="_blank" href="${recipeURL}" class="btn btn-primary">Go somewhere</a>
				</div>
			</div>
		</div>
	`;
};

const renderRecipes = async () => {
	const recipes = await fetchRecipes();

	var recipeCards = recipes.map((recipe) => {
		return getRecipeCard({
			recipeTitle: recipe.post_title,
			recipeImg: recipe.post_img_url_src,
			recipeDescription: recipe.post_description,
			recipeURL: recipe.post_url
		});
	});
	const renderer = new Render("recipeContainer");
	renderer.injectContent(recipeCards.join(" "));
};

// const pageLoader = async () => {
// 	const pages = await fetchRecipes();
// 			//


// var page = (nextpage) => {
// 	if ((recipe.page.has_next_page = true)) {
// 		document.getElementById("readmore").href = "";
// 	} else {
// 		document.getElementById("readmore").textcontent = "end";
// 	}
// };

let btn = document.createElement("button");
btn.innerHTML = "Load More";
btn.style.color = "white";
btn.style.background = "blue";
btn.style.borderRadius = "10px";
document.body.appendChild(btn);

function Load() {
	btn.addEventListener("click", function display() {
		fetch(API_ENDPOINT)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				const recipes = data;

				if (recipes.has_next_page === true) {
					fetch(API_ENDPOINT);
					renderRecipes();
					console.log("hello i am done");
				}
				// var recipeList = ""

				//recipes.forEach((recipe) => {});
			})
			.catch((error) => {
				console.error(error);
			});
	});
}

renderRecipes();

Load();

