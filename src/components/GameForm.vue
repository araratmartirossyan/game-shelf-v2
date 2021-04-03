<template>
  <el-form
    ref="validationRef"
    label-width="100px"
    label-position="top"
    :rules="rules"
  >
    <el-form-item label="Название игры">
      <el-input placeholder="Название игры" v-model="gameForm.title" />
    </el-form-item>
    <el-form-item label="Описание игры">
      <el-input
        type="textarea"
        :rows="4"
        placeholder="Описание игры"
        v-model="gameForm.description"
      />
    </el-form-item>
    <el-form-item label="Выбрать жанр">
      <el-select
        v-model="gameForm.genres"
        filterable
        multiple
        remote
        reserve-keyword
        placeholder="Жанр"
        :remote-method="searchGenre"
      >
        <el-option
          v-for="item in foundGenres"
          :key="item.id"
          :label="item.title"
          :value="item.id"
        />
      </el-select>
    </el-form-item>

    <el-form-item label="Выбрать платформу">
      <el-select
        v-model="gameForm.platform"
        filterable
        remote
        reserve-keyword
        placeholder="Playstation"
        :remote-method="searchPlatform"
      >
        <el-option
          v-for="item in foundPlatforms"
          :key="item.id"
          :label="item.title"
          :value="item.id"
        />
      </el-select>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
// libs
import { ref, defineEmit, defineProps } from 'vue'

import { useQuery } from '@urql/vue'
import useFuse from './../hooks/useFuse'

// Graph Ql
import FETCH_GENRE from '/@/graphql/queries/genres.query.graphql'
import FETCH_PLATFORMS from '/@/graphql/queries/platforms.query.graphql'

defineEmit(['updateForm'])

defineProps({
  gameForm: {
    type: Object,
    default: () => ({
      title: '',
      description: '',
      genres: null,
      platform: null,
    }),
  },
})

const validationRef = ref(null)

const rules = {
  plarform: [
    { required: true, message: 'Выберите платформу', trigger: 'blur' },
  ],
  genres: [
    { required: true, message: 'Выберите как мин один жанр', trigger: 'blur' },
  ],
}

// Genres
const foundGenres = ref<GSAPI.Genre[]>([])
const { data: genresResult } = useQuery({ query: FETCH_GENRE })

const searchGenre = (title: string) => {
  foundGenres.value = useFuse<GSAPI.Genre>(genresResult.value.genres, title, {
    threshold: 0.3,
    keys: ['title'],
  })
}

// Platform
const foundPlatforms = ref<GSAPI.Platform[]>([])
const { data: platformResult } = useQuery({ query: FETCH_PLATFORMS })

const searchPlatform = (title: string) => {
  foundPlatforms.value = useFuse<GSAPI.Platform>(
    platformResult.value.platforms,
    title,
    {
      threshold: 0.3,
      keys: ['title'],
    }
  )
}
</script>

<style lang="scss">
.el-form-item__label {
  padding-bottom: 0;
  font-family: Nunito;
  padding: 0 !important;
}

::placeholder,
.el-select-dropdown__item {
  font-family: Nunito;
}
</style>
