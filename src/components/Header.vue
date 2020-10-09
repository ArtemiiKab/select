<template>
  <header class="container-fluid">
    <div class="header row">
      <div class="col-lg-5 sm-0">
      </div>
      <div class="header__logo col-lg-2 col-4">
        <a href="https://www.selectspecs.com/" id="siteLogo"></a>
      </div>
      <div class="col-lg-5 col-8">
        <div class="row header-icons">
           <HeaderIcons />
        </div>  
      </div>
    </div>
    <div class="row-12">
      <Nav />
    </div>
    <div class="row covid-popup">
      <p class="col-12">
        <strong>COVID-19 UPDATE:</strong> Open online and delivering. 
        <a class="blue_ul" href="https://www.selectspecs.com/content/covid19/">COVID-19 info »</a>
      </p>
    </div>
  </header>
    
</template>

<script>
import HeaderIcons from './HeaderIcons';
import Nav from './Nav';

export default {
  components: {
    HeaderIcons,
    Nav,
  }
}
</script>
