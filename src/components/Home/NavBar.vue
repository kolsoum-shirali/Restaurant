<template>
  <nav class="navbar">
    <input type="checkbox" id="check" class="checkbox" hidden />
    <div class="hamburger-menu">
      <label for="check" class="menu">
        <div v-for="(item, index) in 3" :key="index"></div>
      </label>
    </div>
    <div class="navbar-navigation">
      <div class="navbar-navigation-right">
        <ul>
          <li v-for="(item, index) in items" :key="index">
            <a href="#">{{ item.title }}</a>
          </li>
        </ul>
      </div>
      <div class="navbar-navigation-left">
        <img v-for="(item, index) in images" :key="index" :src="item.src" />
      </div>
    </div>
  </nav>
</template>

<script setup>
import navImg1 from '../../assets/images/nav-img-1.jpeg'
import navImg2 from '../../assets/images/nav-img-2.jpeg'
import navImg3 from '../../assets/images/nav-img-3.jpeg'

const items = [
  { title: 'خانه' },
  { title: 'درباره ما' },
  { title: 'گالری تصاویر' },
  { title: 'رزرو میز' }
]
const images = [{ src: navImg1 }, { src: navImg2 }, { src: navImg3 }]
</script>

<style lang="scss" scoped></style>
