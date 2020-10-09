<template>
  <div id="app">
    <Header />
    <main>
      <section>
        <Info />
      </section>
      <section class="highlight">
        <Highlight />
      </section>
      <section>
        <Tabs />
      </section>
    </main>
  </div>
</template>

<script>
import Header from'./components/Header';
import Info from './components/Info';
import Highlight from './components/Highlight';
import Tabs from './components/Tabs';

export default {
  name: 'App',
  components: {
    Header,
    Info,
    Highlight,
    Tabs,
  },
}
</script>

<style lang="scss">
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #222;
  overflow-x: hidden;

}

.highlight {
  background: #f7f5f6;
}

</style>
