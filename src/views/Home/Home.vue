<template>
  <tg-page class="list">
    <template #top> Games ({{ data && gamesList.length }}) </template>
    <template #append>
      <el-avatar
        shape="circle"
        :size="40"
        icon="el-icon-plus"
        class="add-icon"
        alt="plus-icon"
        @click="push({ name: 'game-form-create' })"
      />
    </template>

    <div class="list-cards" v-if="!fetching">
      <el-input
        class="list-cards__search"
        suffix-icon="el-icon-search"
        placeholder="Поиск"
        v-model="search"
        clearable
      />
      <game-card
        v-if="gamesList"
        v-for="{ id, title, description, picture } in gamesList"
        :key="id"
        :description="description"
        :title="title"
        :picture="picture?.formats.thumbnail.url"
        @click="push({ name: 'game-detail', params: { id } })"
      />
      <div v-else>Sorry nothing found</div>
    </div>
  </tg-page>
</template>

<script setup lang="ts">
// libs
import { useQuery } from '@urql/vue'
import { ref, computed, defineAsyncComponent } from 'vue'
import useFuse from '../../hooks/useFuse'

// components
const GameCard = defineAsyncComponent(
  () => import('/@/components/GameCardList.vue')
)
const TgPage = defineAsyncComponent(
  () => import('/@/components/layout/Page.vue')
)
// graphQl
import GAMES_QUERY from '/@/graphql/queries/games.query.graphql'
import { useRouter } from 'vue-router'

// logic
const { fetching, data } = useQuery({
  query: GAMES_QUERY
})

const { push } = useRouter()

const search = ref('')

const gamesList = (computed(() =>
  useFuse(data?.value?.games, search.value, {
    threshold: 0.3,
    keys: ['title']
  })
) as unknown) as GSAPI.Game[]
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

  &__search {
    margin-bottom: $spacing-m;
  }
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
