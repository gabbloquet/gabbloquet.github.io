<script>
	import { Router, Route } from "svelte-routing";
	import Home from "./views/Home.svelte";
	import Blog from "./views/Blog.svelte";
	import BlogPost from "./views/BlogPost.svelte";

	export let url = "";
</script>

<Router url="{url}">
	<div>
		<Route path="blog/:id" component="{BlogPost}" />
		<Route path="blog" component="{Blog}" />
		<Route path="/"><Home /></Route>
	</div>
</Router>