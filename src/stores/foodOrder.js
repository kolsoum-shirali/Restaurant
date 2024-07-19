import { reactive } from 'vue'
import { defineStore } from 'pinia'
import foods1 from '../assets/images/gallery-img-1.jpeg'
import foods2 from '../assets/images/gallery-img-2.jpeg'
import foods3 from '../assets/images/gallery-img-3.jpeg'
import foods4 from '../assets/images/gallery-img-4.jpeg'
import foods5 from '../assets/images/gallery-img-5.jpeg'
import foods6 from '../assets/images/gallery-img-6.jpeg'
export const useFoodOrderStore = defineStore('foodOrder', () => {
  const foodsList = reactive([
    { name: 'همبرگر', price: 5000, src: foods1, number: 0, id: 1 },
    { name: 'همبرگر', price: 8000, src: foods2, number: 0, id: 2 },
    { name: 'همبرگر', price: 6000, src: foods3, number: 0, id: 3 },
    { name: 'همبرگر', price: 2000, src: foods4, number: 0, id: 4 },
    { name: 'همبرگر', price: 4000, src: foods5, number: 0, id: 5 },
    { name: 'همبرگر', price: 3000, src: foods6, number: 0, id: 6 }
  ])
  function addOrderNumber(index) {
    foodsList[index].number += 1
    addOrder(foodsList[index])
  }
  const ordersList = reactive([])
  function addOrder(order) {
    if (ordersList.length) {
      const result = ordersList.findIndex((item) => {
        return item.id === order.id
      })
      if (result !== -1) {
        ordersList[result] = order
      } else {
        ordersList.push(order)
      }
    } else {
      ordersList.push(order)
    }
  }
  return { foodsList, ordersList, addOrder, addOrderNumber }
})
