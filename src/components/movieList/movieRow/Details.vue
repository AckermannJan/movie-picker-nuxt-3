<template>
  <div class="pl-3 p-4">
    <div class="font-bold text-1xl leading-6">
      {{title}}
    </div>
    <div class="text-xs text-gray-400">
      {{formattedReleaseDate}}
    </div>
    <div
        class="leading-4 text-sm mt-5 max-w-[50%]"
        style="
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          line-clamp: 3;
          -webkit-box-orient: vertical;
    ">
      {{overview}}
    </div>
  </div>
</template>

<script setup lang="ts">
import {ComputedRef} from 'vue'
import format from "date-fns/format";
import deLocale from "date-fns/locale/de";

export interface Props {
  title: string | null
  releaseDate: string | null
  overview: string | null
}

const {
  title,
  releaseDate,
  overview,
} = defineProps<Props>()

const formattedReleaseDate: ComputedRef<string | null> = computed((): string | null => {
  if(releaseDate) {
    return format(new Date(releaseDate), 'dd MMMM yyyy', {
      locale: deLocale
    })
  }
  return null
});
</script>