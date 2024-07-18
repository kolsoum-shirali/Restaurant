<script setup>
import NavBar from '@/components/Home/NavBar.vue'
import HeaderApp from '@/components/Home/HeaderApp.vue'
import AboutUs from '@/components/Home/AboutUs.vue'
import FoodsList from '@/components/Home/FoodsList.vue'
import FooterApp from '@/components/Home/FooterApp.vue'
</script>

<template>
  <main>
    <div class="preloader">
      <img src="../assets/images/preloader.gif" alt="preloader.gif" />
    </div>
    <NavBar />
    <HeaderApp />
    <AboutUs />
    <FoodsList />
    <FooterApp />
  </main>
</template>
