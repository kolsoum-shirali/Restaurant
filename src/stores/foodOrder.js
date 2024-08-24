import { reactive,ref } from 'vue'

//first import defineStore
import { defineStore } from 'pinia'
//add images of food //
import foods1 from '../assets/images/gallery-img-1.jpeg'
import foods2 from '../assets/images/gallery-img-2.jpeg'
import foods3 from '../assets/images/gallery-img-3.jpeg'
import foods4 from '../assets/images/gallery-img-4.jpeg'
import foods5 from '../assets/images/gallery-img-5.jpeg'
import foods6 from '../assets/images/gallery-img-6.jpeg'
import foods7 from '../assets/images/gallery-img-7.jpg'
import foods8 from '../assets/images/gallery-img-8.jpg'
import foods9 from '../assets/images/gallery-img-9.jpg'

// 
export const useFoodOrderStore = defineStore('foodOrder', () => {
  const foodsList = reactive([
    { name: 'همبرگر', price: 5000, src: foods1, number: 0, id: 1 },
    { name: 'همبرگر', price: 8000, src: foods2, number: 0, id: 2 },
    { name: 'همبرگر', price: 6000, src: foods3, number: 0, id: 3 },
    { name: 'همبرگر', price: 2000, src: foods4, number: 0, id: 4 },
    { name: 'همبرگر', price: 4000, src: foods5, number: 0, id: 5 },
    { name: 'همبرگر', price: 3000, src: foods6, number: 0, id: 6 },
    { name: 'همبرگر', price: 2000, src: foods7, number: 0, id: 7 },
    { name: 'همبرگر', price: 4000, src: foods8, number: 0, id: 8 },
    { name: 'همبرگر', price: 3000, src: foods9, number: 0, id: 9 }
  ])
  function addOrderNumber(index) {
    foodsList[index].number += 1
    addOrder(foodsList[index])
  }
  const ordersList = ref([])
  function addOrder(order) {
    if (ordersList.value.length) {
      const result = ordersList.value.findIndex((item) => {
        return item.id === order.id
      })
      if (result !== -1) {
        ordersList.value[result] = order
      } else {
        ordersList.value.push(order)
      }
    } else {
      ordersList.value.push(order)
    }
  }
 
  return { foodsList, ordersList, addOrder, addOrderNumber }
})
