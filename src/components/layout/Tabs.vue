<template>
  <div class="tg-tabs">
    <div class="outlet">
      <slot name="outlet" />
    </div>

    <div class="tab-bar">
      <slot name="tab-bar" />
    </div>
  </div>
</template>

<script>
export default {
  name: "TgTabs",
};
</script>

<style lang="scss" scoped>
.tg-tabs {
  bottom: 0;
  display: flex;
  flex-direction: column;
  left: 0;
  padding: 0;
  padding: env(safe-area-inset-top, 0) env(safe-area-inset-right, 0)
    env(safe-area-inset-bottom, 0) env(safe-area-inset-left, 0);
  position: absolute;
  right: 0;
  top: 0;

  .outlet {
    flex-grow: 1;
    position: relative;
  }

  .tab-bar {
    flex-shrink: 0;
  }

  .fc-page {
    padding: 0;
  }
}
</style>
