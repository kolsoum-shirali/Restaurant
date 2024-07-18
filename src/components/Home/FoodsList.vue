<template>
  <section class="foods">
    <div class="container">
      <h1 class="title">غذاهای ما</h1>
      <div class="foods-wrapper">
        <div v-for="(food, index) in foods" :key="index" class="single-food">
          <img :src="food.src" alt="" />
          <div class="img-description">
            <h3>{{ food.name }}</h3>
            <h3>قیمت : {{ food.price }} تومان</h3>
            <button>سفارش</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import foods1 from '../../assets/images/gallery-img-1.jpeg'
import foods2 from '../../assets/images/gallery-img-2.jpeg'
import foods3 from '../../assets/images/gallery-img-3.jpeg'
import foods4 from '../../assets/images/gallery-img-4.jpeg'
import foods5 from '../../assets/images/gallery-img-5.jpeg'
import foods6 from '../../assets/images/gallery-img-6.jpeg'
const foods = ref([
  { name: 'همبرگر', price: 5000, src: foods1 },
  { name: 'همبرگر', price: 8000, src: foods2 },
  { name: 'همبرگر', price: 6000, src: foods3 },
  { name: 'همبرگر', price: 2000, src: foods4 },
  { name: 'همبرگر', price: 4000, src: foods5 },
  { name: 'همبرگر', price: 3000, src: foods6 }
])
</script>

<style lang="scss" scoped></style>
