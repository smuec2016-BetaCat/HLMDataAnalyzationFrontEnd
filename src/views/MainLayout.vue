<template>
    <md-app>
      <md-app-toolbar class="md-primary">
        <h3 class="md-title">BetaCat Demo</h3>
        <div class="md-toolbar-section-end">
          <a href="#">登录</a>
        </div>
      </md-app-toolbar>
      <md-app-drawer class="md-fixed" md-permanent="clipped">
        <md-list>
          <md-list-item>
            <md-field>
              <label>样本数</label>
              <md-input v-model="count"/>
            </md-field>
          </md-list-item>
          <md-list-item>
            <md-button class="md-primary md-raised" @click="createData">创建数据</md-button>
          </md-list-item>
          <md-list-item>
            <md-button class="md-primary md-raised" @click="clearData">清空数据</md-button>
          </md-list-item>
        </md-list>
      </md-app-drawer>
      <md-app-content>
        <router-view></router-view>
      </md-app-content>
    </md-app>
</template>

<script>
export default {
  name: "MainLayout",
  data: () => {
    return {
      count: 10000
    };
  },
  components: {}
};
</script>

<style scoped>
</style>
