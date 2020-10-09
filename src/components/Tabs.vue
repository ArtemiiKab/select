<template>
  <div>
    <div class="container">
      <div class="row">
        <ul
          class="tabs"
        >
          <li
            :class="{'active':tabActive===tab, 'tabs-title':true}"
            v-for="tab in tabs"
            :key=tab
            @click="choseActiveTab"
          >
            {{tab}}
          </li>
        </ul>
      </div>
    </div>
    <div class="row">
      <TabsContent />
    </div>
  </div>
</template>

<script>
import TabsContent from './TabsContent';

export default {
  data(){
    return {
      tabActive:'Information',
      tabs:['Information', 'Reviews(420)'],
    }
  },

  components:{
    TabsContent,
  },

  methods:{
    choseActiveTab(e){
      this.tabActive = this.tabs.find(tab => tab === e.target.innerText);
    }
  },
}
</script>

