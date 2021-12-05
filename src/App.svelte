<script>
	import { Router, Route } from "svelte-navigator";
	import Home from "./views/Home.svelte";
	import Blog from "./views/Blog.svelte";

	export let url = "";
</script>

<Router url="{url}">
	<div>
		<Route path="blog/*articleId" component={Blog} />
		<Route path="/home"><Home /></Route>
		<Route path="/"><Home /></Route>
	</div>
</Router>