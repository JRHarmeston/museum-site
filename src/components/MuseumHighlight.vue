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
      <p class="highlight-card__date">{{ formatDate(highlight.date) }}</p>
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
          {{ formatDate(highlight.news.date) }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

interface HighlightNews {
  date?: string;
  title: string;
}

interface Highlight {
  date: string;
  description: string;
  id: number;
  image: string;
  name: string;
  news?: HighlightNews;
  quiz?: string;
}

const props = defineProps<{ highlight: Highlight }>();

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};
</script>
<style lang="scss">
.highlight-card {
  font-family: "Helvetica", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;

  .highlight-card__badge {
    position: absolute;
    top: 0;
    right: 300px;

    img {
      width: 50px;
      height: auto;
    }
  }

  .highlight-card__image {
    width: auto;
    max-width: 100%;
    max-height: 200px;
    object-fit: contain;
  }

  .highlight-card__content {
    width: 200px;
    padding: 0 1rem;
    p {
      color: white;
    }
  }
}

.highlight-card__image-container {
  width: 100%;
  display: flex;
  justify-content: center;
}
.highlight-card__date,
.highlight-card__news-date {
  font-size: 0.8rem;
  color: #666;
}

.highlight-card__quiz {
  color: #0053a0;
  text-decoration: none;
}

.highlight-card__news {
  border-top: 1px solid #eee;
  padding-top: 0.5rem;
}

.highlight-card__news-title {
  font-size: 1rem;
  margin: 0.5rem 0;
}

.highlight-card {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.highlight-card__image-container {
  width: 100%;
  display: flex;
  justify-content: center;
}

.highlight-card__image {
  max-width: 100%;
  height: auto;
}

.highlight-card__content {
  width: 100%;
  padding: 0 1rem;
}
</style>
