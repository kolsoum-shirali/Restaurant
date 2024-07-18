<template>
  <footer>
    <div class="container">
      <div class="footer">
        <ul>
          <li v-for="(item,index) in socials" :key="index">
            <a href="#"><i :class="item.icon"></i></a>
          </li>        
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup>
const socials = [
  {icon:'fab fa-youtube'},
  {icon:'fab fa-instagram'},
  {icon:'fab fa-telegram'},
  {icon:'fab fa-linkedin-in'},
]
</script>
<style lang="scss" scoped></style>
