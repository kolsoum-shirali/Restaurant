<template>
  <section class="foods">
    <div class="container">
      <h1 class="title">غذاهای ما</h1>
      <div class="foods-wrapper">
        <div v-for="(food, index) in foodStore.foodsList" :key="index" class="single-food">
          <img :src="food.src" alt="" />
          <div class="img-description">
            <h3>{{ food.name }}</h3>
            <h3>قیمت : {{ food.price }} تومان</h3>
            <button @click="foodStore.addOrderNumber(index)">سفارش</button>
            <p class="mt-3"><span>تعداد سفارش : </span> {{ food.number }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useFoodOrderStore } from '@/stores/foodOrder'
const foodStore = useFoodOrderStore()
</script>

<style lang="scss" scoped></style>
