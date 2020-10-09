<template>
  <div class="tabs-content">
    <div class="tabs-steps container">
      <div class="row">
        <TabSteps />
      </div>
    </div>
    <div class="row tabs-table">
      <div class="container">
        <TabsTable />
      </div>
    </div>
    <div class="row tabs-should">
        <TabsShouldKnow />
    </div>
  </div>
</template>

<script>
import TabSteps from './TabSteps';
import TabsTable from './TabsTable';
import TabsShouldKnow from './TabsShouldKnow';

export default {
  components: {
    TabSteps,
    TabsTable,
    TabsShouldKnow,
  }
}
</script>

