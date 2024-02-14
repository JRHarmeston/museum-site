<template>
  <div class="highlight-card">
    <div class="highlight-card__image-container">
      <img
        :src="highlight.image"
        alt="Highlight Image"
        class="highlight-card__image"
      />
    </div>
    <div class="highlight-card__content">
      <h2 class="highlight-card__title">{{ highlight.name }}</h2>
      <p class="highlight-card__description">{{ highlight.description }}</p>
      <p class="highlight-card__date">
        {{ highlight.date ? formatDate(highlight.date) : "" }}
      </p>
      <a
        v-if="highlight.quiz"
        :href="highlight.quiz"
        target="_blank"
        class="highlight-card__quiz"
        >Take Quiz</a
      >
      <div v-if="highlight.news" class="highlight-card__news">
        <h3 class="highlight-card__news-title">{{ highlight.news.title }}</h3>
        <p class="highlight-card__news-date">
          {{ highlight.news.date ? formatDate(highlight.news.date) : "" }}
        </p>
      </div>
    </div>
    <button class="highlight-card__refresh" @click="onRefresh">Refresh</button>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { Highlight } from "@/types/types";

const props = defineProps<{ highlight: Highlight }>();

const onRefresh = () => {
  // This would cycle through images from the API to generate new images every time.
};

const formatDate = (dateString: string | undefined): string => {
  if (!dateString) return "";

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZoneName: "short",
  };
  return new Date(dateString).toLocaleDateString("default", options);
};
</script>

<style scoped>
.highlight-card {
  position: relative;
}

.highlight-card__refresh {
  position: absolute;
  bottom: 10px;
  right: 10px;
}
</style>

<style lang="scss" src="../sass/main.scss"></style>
