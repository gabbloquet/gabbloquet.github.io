<style lang="scss">
  @import "Hexagon";
</style>

<script>
  import Icon from 'fa-svelte';
  export let props;
</script>

<div class="hexagon-item">
  <div class="hex-item">
    <div></div>
    <div></div>
    <div></div>
  </div>
  <div class="hex-item">
    <div></div>
    <div></div>
    <div></div>
  </div>
  <a href={'#'+ props.link} class="hex-content">
    <span class="hex-content-inner">
        <span class="icon">
            <Icon icon={ props.icon }/>
        </span>
        <span class="title">{props.title}</span>
    </span>
    <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530"></path></svg>
  </a>
</div>
