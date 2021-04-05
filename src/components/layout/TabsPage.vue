<template>
  <tg-tabs class="tabs-page">
    <template #outlet>
      <router-view />
    </template>

    <template #tab-bar>
      <div v-if="!activeKeyboard" class="tab-bar">
        <router-link
          v-for="{ id, testId, icon, routeName } in tabs"
          :key="`tab-${id}`"
          :event="navigationIntent ? '' : 'click'"
          :to="{ name: routeName }"
          :data-test-id="testId"
          class="tab-bar__item"
          :class="{ 'tab-bar__item--disabled': navigationIntent }"
        >
          <tg-icon class="tg-icon" :icon="icon" size="30" />
        </router-link>
      </div>
    </template>
  </tg-tabs>
</template>

<script setup>
import { ref } from 'vue';

// Components
import TgTabs from './Tabs.vue';
import TgIcon from '@/components/Icons/TgIcon.vue';

// Setups
import { tabsSetup } from '@/setup/tabs.ts';

const navigationIntent = ref(false);
const activeKeyboard = ref(false);

const tabs = ref(tabsSetup);
</script>

<style lang="scss" scoped>
@import './../../assets/styles';

.tabs-page {
  a {
    color: #000;
    text-decoration: none;
  }

  .tab-bar {
    display: flex;
    align-items: center;
    border-top: 1px solid #f3f6fa;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    justify-content: space-around;
    height: 80px;

    &__item {
      align-items: center;
      display: flex;
      width: 100%;
      height: 100%;
      flex-direction: column;
      justify-content: center;
      font-size: 10px;
      line-height: 14px;
      padding: $spacing-xs 0 0;
      text-align: center;

      &--disabled {
        color: gray;
        cursor: not-allowed;
        pointer-events: none;

        .tg-icon {
          color: gray;
        }
      }

      &.router-link-active {
        .tg-icon {
          color: $color-primary;
          svg path {
            stroke: red;
          }
        }
      }
    }
  }
}
</style>
