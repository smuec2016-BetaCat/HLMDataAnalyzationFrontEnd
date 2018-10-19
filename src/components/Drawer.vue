<template>
  <md-drawer class="md-fixed" md-permanent="clipped">
    <md-list>
      <md-list-item>
        <md-icon>home</md-icon>
        <span class="md-list-item-text">我的首页</span>
      </md-list-item>
      <md-list-item>
        <md-icon>event</md-icon>
        <span class="md-list-item-text">任务管理</span>
      </md-list-item>
    </md-list>
  </md-drawer>
</template>

<script>
export default {
  name: "Drawer"
};
</script>

<style scoped>
.md-drawer {
  width: 20%;
  min-height: 600px;
}
</style>
