<template>
  <div class="game-card">
    <div class="game-card__image">
      <el-avatar
        v-if="!picture"
        shape="square"
        :size="100"
        fit="scale-down"
        src="/@/assets/game-controller.svg"
        alt="game-image"
      />
      <el-avatar
        v-else
        shape="square"
        :size="100"
        :src="`${defaultUrl}${picture}`"
        alt="empty picture image"
      />
    </div>
    <div class="game-card__description">
      <heading tag="h5">{{ title }}</heading>
      <p>{{ description && description.slice(0, 50) }}...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
// Components
const Heading = () => import('/@/components/Heading.vue')

import { defineProps } from 'vue'

const defaultUrl = process.env.API_URL || 'https://graph.myshelf.info'

defineProps({
  title: {
    type: String,
    default: ''
  },
  picture: {
    type: String,
    default: null
  },
  description: {
    type: String,
    default: ''
  }
})
</script>

<style lang="scss">
@import '../assets/styles';
.game-card {
  align-items: flex-start;
  color: #425486;
  display: flex;
  font-family: Nunito;
  font-size: $font-size-heading-h3;
  line-height: 24px;
  font-style: normal;
  min-height: 135px;
  height: 100%;
  border-radius: 8px;
  border: 0 solid;
  padding: $spacing-m;
  background-color: #fcfcfd;
  justify-content: space-between;
  text-transform: capitalize;
  box-shadow: inset 0 -1px 0 0 rgb(0 0 0 / 10%), 0 2px 5px 0 rgb(51 51 51 / 20%);
  margin-bottom: $spacing-s;

  &:active {
    background: rgb(128 128 128 / 25%);
    box-shadow: none;
  }

  &__description {
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    width: 100%;
    margin-left: $spacing-m;

    p {
      font-size: $font-size-small;
    }
  }
  .el-avatar {
    background: none;
  }
  .el-avatar > img {
    width: 100% !important;
  }
}
</style>
