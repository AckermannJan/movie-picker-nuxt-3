<template>
  <div class="p-4 pl-3">
    <div class="text-1xl font-bold leading-6">
      {{ props.title }}
    </div>
    <div class="text-xs text-gray-400">
      {{ formattedReleaseDate }}
    </div>
    <div
      class="mt-5 max-w-[50%] text-sm leading-4"
      style="
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        line-clamp: 3;
        -webkit-box-orient: vertical;
      "
    >
      {{ props.overview }}
    </div>
  </div>
</template>

<script setup lang="ts">
/* eslint-disable import/no-duplicates */
import { ComputedRef } from 'vue'
import { format } from 'date-fns'
import deLocale from 'date-fns/locale/de'

interface Props {
  title: string | null
  releaseDate: string | null
  overview: string | null
}

const props = defineProps<Props>()

const formattedReleaseDate: ComputedRef<string | null> = computed((): string | null => {
  if (props.releaseDate) {
    return format(new Date(props.releaseDate), 'dd MMMM yyyy', {
      locale: deLocale,
    })
  }
  return null
})
</script>
