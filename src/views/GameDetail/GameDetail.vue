<template>
  <tg-page class="create-game">
    <template #prepend>
      <el-avatar
        shape="circle"
        :size="40"
        icon="el-icon-back"
        class="header-icon"
        @click="push('/')"
      />
    </template>
    <template #top> Игра </template>
    <template #append>
      <el-avatar
        shape="circle"
        :size="50"
        icon="el-icon-delete"
        class="add-icon"
        @click="handleDeleteGame"
      />
    </template>

    <div class="game-info" v-if="data">
      <div class="game-info__header">
        <el-avatar shape="square" scale="fill" :src="picture" />
      </div>
      <div class="game-info__content">
        <div class="game-info__content-header">
          <div class="game-info__content_text">
            <heading tag="h5">
              {{ data.game.title }}
            </heading>
            <span class="game-info__content_platform">
              {{ data?.game?.platform?.title }}
            </span>

            <div class="game-info__content_tags">
              <el-tag
                class="game-info__content_tags"
                v-for="tag in data?.game?.genres"
                :key="tag?.title"
                type="info"
              >
                #{{ tag?.title }}
              </el-tag>
            </div>
          </div>
        </div>

        <div class="game-info__content-description">
          <heading tag="h5" bold> Описание: </heading>
          <p class="paragraph">
            {{ data.game.description }}
          </p>
        </div>
      </div>
    </div>
  </tg-page>
</template>

<script setup lang="ts">
import TgPage from '/@/components/layout/Page.vue'
import Heading from '/@/components/Heading.vue'
import * as defaultImage from '/@/assets/game-controller.svg'

// libs
import { useQuery, useMutation } from '@urql/vue'
import { useRoute, useRouter } from 'vue-router'
import { ElMessage, ElMessageBox } from 'element-plus'

// GraphQl
import FETCH_GAME from '/@/graphql/queries/game.query.graphql'
import DELETE_GAME from '/@/graphql/mutations/deleteGame.mutation.graphql'

import { computed } from 'vue'

const defaultUrl = process.env.API_URL || 'https://graph.myshelf.info'

const { params } = useRoute()
const { push } = useRouter()

const { data } = useQuery<GSAPI.GameResponse>({
  query: FETCH_GAME,
  variables: { id: params.id },
})

const picture = computed(() => {
  const picture = data?.value?.game?.picture?.formats.large
  return picture ? `${defaultUrl}${picture.url}` : defaultImage
})

const { executeMutation } = useMutation(DELETE_GAME)
const handleDeleteGame = async () => {
  try {
    await ElMessageBox.confirm('Игра будет удалена', 'Внимание', {
      type: 'warning',
      confirmButtonText: 'OK',
      cancelButtonText: 'Отмена',
    })
    executeMutation({
      input: { where: { id: params.id } },
    })
    ElMessage({
      type: 'success',
      message: 'Удалено',
    })
    push('/')
  } catch (err) {
    ElMessage({
      type: 'info',
      message: 'Отменено',
    })
  }
}
</script>

<style lang="scss">
@import './../../assets/styles';

.el-message-box {
  width: 300px;
  font-family: 'Nunito';
}

.game-info {
  &__header {
    display: flex;

    .el-avatar {
      width: 100%;
      height: 260px;
      border-radius: 16px;

      img {
        width: 100%;
      }
    }
  }

  &__content {
    background: white;
    box-shadow: rgb(0 0 0 / 10%) 0px -1px 0px 0px inset,
      rgb(51 51 51 / 20%) 0px 2px 5px 0px;
    z-index: 9999;
    position: absolute;
    top: 35%;
    padding: 12px;
    border-radius: 16px;

    // margin-top: $spacing-m;
    &_text {
      display: flex;
      flex-direction: column;
    }

    &_platform {
      font-size: $font-size-tiny;
      color: $color-dark;
    }
    &_tags {
      margin-top: $spacing-xs;
      display: flex;

      & > span {
        &:not(:first-child) {
          margin-left: $spacing-xs;
        }
      }
    }

    &-description {
      margin-top: $spacing-m;
      font-size: 14pxr;
    }
  }
}
</style>
