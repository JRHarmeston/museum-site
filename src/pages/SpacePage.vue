<template>
  <Banner />
  <div class="space-highlights">
    <MuseumHighlight
      v-for="highlight in sortedSpaceHighlights"
      :key="highlight.id"
      :highlight="highlight"
    />
  </div>
</template>

<script setup lang="ts">
import MuseumHighlight from "../components/MuseumHighlight.vue";
import Banner from "../components/BannerSection.vue";
import { ref, computed } from "vue";

const spaceHighlights = ref([
  {
    date: "2020-04-20 12:20:00",
    description:
      "Asteroids are minor planets, especially of the inner Solar System. Larger asteroids have also been called planetoids.",
    id: 1,
    image: "../../images/asteroids.png",
    name: "Asteroids",
  },
  {
    date: "2020-05-20 15:50:00",
    description:
      "A comet is an icy, small Solar System body that, when passing close to the Sun, warms and begins to release gases, a process called outgassing.",
    id: 9,
    image: "../../images/comets.png",
    name: "Comets",
  },
  {
    date: "2020-05-01 9:22:00",
    description:
      "The term planet is ancient, with ties to history, astrology, science, mythology, and religion.",
    id: 7,
    image: "../../images/planets.png",
    name: "Planets",
    news: {
      date: "2020-08-18 18:00:00",
      title: "Attend our talk about Jupiter with Dr. Hogarth",
    },
    quiz: "https://planetquiz.space",
  },
  {
    date: "2020-07-05 4:10:00",
    description:
      "A meteor shower is a celestial event in which a number of meteors are observed to radiate, or originate, from one point in the night sky.",
    id: 12,
    image: "../../images/meteorshowers.png",
    name: "Meteor showers",
    news: {
      title: "The Lyrids will peak at on April 21-22 2021, at night",
    },
  },
]);

const spacePartners = ref({
  observatory: {
    createdAt: "2020-06-01 11:45:00",
    info: "The Mauna Kea Observatories (MKO) are a number of independent astronomical research facilities and large telescope observatories that are located at the summit of Mauna Kea on the Big Island of Hawaiʻi, United States.",
    image: "../../images/mkobservatories.png",
    name: "Mauna Kea Observatories",
  },
});

const sortedSpaceHighlights = computed(() => {
  const allHighlights = [...spaceHighlights.value];
  allHighlights.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
  return allHighlights;
});
</script>

<style lang="scss" src="../sass/main.scss"></style>
