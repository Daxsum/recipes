import { API_ENDPOINT } from "./config";

export const fetchRecipes = async () => {
	const response = await fetch(API_ENDPOINT);

	const data = await response.json();

	return data.posts;
};
