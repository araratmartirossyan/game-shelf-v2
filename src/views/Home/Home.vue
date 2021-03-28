<template>
  <tg-page class="list">
    <template #top> Games </template>
    <template #append>
      <el-avatar
        shape="circle"
        :size="40"
        icon="el-icon-plus"
        class="add-icon"
        @click="push({ name: 'game-form-create' })"
      />
    </template>

    <div class="list-cards" v-if="!fetching">
      <game-card
        v-for="{ id, title, description, picture } in data.games"
        :key="id"
        :description="description"
        :title="title"
        :picture="picture?.formats.thumbnail.url"
        @click="push({ name: 'game-detail', params: { id } })"
      />
    </div>
  </tg-page>
</template>

<script setup lang="ts">
//libs
import { useQuery } from '@urql/vue'

// components
import GameCard from '/@/components/GameCardList.vue'
import TgPage from '/@/components/layout/Page.vue'

// graphQl
import GAMES_QUERY from '/@/graphql/queries/games.query.graphql'
import { useRouter } from 'vue-router'

// logic
const { fetching, data } = useQuery({ query: GAMES_QUERY })

const { push } = useRouter()
</script>

<style lang="scss">
@import './../../assets/styles';

.list-slider {
  .tg-heading {
    padding: 0 0 0 $spacing-m;
  }
}
.list-cards {
  padding: $spacing-m;
}

.add-icon {
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;

  .el-icon-plus {
    font-size: 26px;
  }
}
</style>
