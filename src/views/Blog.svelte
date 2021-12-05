<script>
  import {Link, Route, Router} from "svelte-navigator";

  export let articleId;
</script>

<Router>
  <h1>Blog</h1>
  <p>{articleId}</p>

  <ul>
    <li><Link to="1">Mes premières lignes</Link></li>
    <li><Link to="2">...</Link></li>
    <li><Link to="3">...</Link></li>
  </ul>

  <Route path="1">
    <p>First article</p>
  </Route>
  <Route path="2">
    <p>
      I did something awesome today. Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Repudiandae enim quasi animi, vero deleniti dignissimos
      sapiente perspiciatis. Veniam, repellendus, maiores.
    </p>
  </Route>
  <Route path="3">
    <p>
      I did something sweet today. Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Modi ad voluptas rem consequatur commodi minima doloribus
      veritatis nam, quas, culpa autem repellat saepe quam deleniti maxime delectus
      fuga totam libero sit neque illo! Sapiente consequatur rem minima expedita
      nemo blanditiis, aut veritatis alias nostrum vel? Esse molestias placeat,
      doloribus commodi.
    </p>
  </Route>
</Router>
