<template>
  <div class="nav-main">
    <ul class="nav-main__container">
      <li class="nav-main__drop-container">
        <a href="/" class="nav-link">Glasses</a>
        <div class="nav-main__drop">
          <DropdownNav />
        </div>
      </li>
      <li class="nav-main__drop-container"><a href="/" class="nav-link">Sunglasses</a></li>
      <li class="nav-main__drop-container"><a href="/" class="nav-link">Brands</a></li>
      <li><a href="/" class="nav-link">Reglaze</a></li>
      <li><a href="/" class="nav__red nav-link">Sale</a></li>
      <li class="nav-main__drop-container"><a href="/" class="nav-link">More</a></li>
      <li class="nav-main__drop-container"><a href="/" class="nav-link">Help me choose</a></li>
    </ul>
  </div>
</template>

<script>
import DropdownNav from './DropdownNav';

export default {
  components: {
    DropdownNav,
  }
}
</script>
