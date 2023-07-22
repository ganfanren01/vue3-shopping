// 封装购物车模块

import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useUserStore } from '@/stores/user.js'
import {insertCartAPI, findNewCartListAPI, delCartAPI} from '@/apis//cart.js'
export const useCartStore = defineStore('cart', () => {
  const userStore = useUserStore()
  const islogin =  computed(() => userStore.userInfo.token)
  // 1. 定义state - cartList
  const cartList = ref([])
  const updateNewList = async () => {
    const res = await findNewCartListAPI()
      cartList.value = res.result
  }
  // 2. 定义action - addCart
  // 加入购物车
  const addCart = async (goods) => {
    const { skuId, count} = goods
    if(islogin.value) {
      await insertCartAPI({ skuId, count})
      updateNewList()
    } else {
    // 添加购物车操作
    // 已添加过 - count + 1
    // 没有添加过 - 直接push
    // 思路：通过匹配传递过来的商品对象中的skuId能不能在cartList中找到，找到了就是添加过
    const item = cartList.value.find((item) => goods.skuId === item.skuId)
    if (item) {
      // 找到了
      item.count++
    } else {
      // 没找到
      cartList.value.push(goods)
    }
    }
  }
  // 删除购物车
  const delCart = async (skuId) => {
    if (islogin.value) {
      // 调用接口实现接口购物车中的删除功能
      await delCartAPI([skuId])
      updateNewList()
    } else {
      // 思路：
      // 1. 找到要删除项的下标值 - splice
      // 2. 使用数组的过滤方法 - filter
      const idx = cartList.value.findIndex((item) => skuId === item.skuId)
      cartList.value.splice(idx, 1)
    }
  }
  // 清空购物车
  const clearCart = () => {
    cartList.value = []
  }
  // 单选框的改变
  const singleCheck = (skuId,selected) => {
    const item = cartList.value.find((item) => item.skuId === skuId)
    item.selected = selected
  }
  // 全选gongneng
  const allCkeck = (selected) => {
    cartList.value.forEach(item => item.selected = selected)
  }
  // 计算属性
  const allCount =  computed(() =>cartList.value.reduce((a, i) =>  a  + i.count, 0))
  const allPrice =  computed(() =>cartList.value.reduce((a, i) =>  a  + i.count * i.price, 0))
  // 选择计算
  const selectCount =  computed(() =>cartList.value.filter(item => item.selected).reduce((a, i) =>  a  + i.count, 0))
  const selectPrice =  computed(() =>cartList.value.filter(item => item.selected).reduce((a, i) =>  a  + i.count * i.price, 0))

  // 是否全选
  const isAll = computed(() => cartList.value.every((item) => item.selected))


  return {
    cartList,
    addCart,
    delCart,
    allCount,
    allPrice,
    isAll,
    singleCheck,
    allCkeck,
    selectCount,
    selectPrice,
    clearCart
  }
}, {
  persist: true,
})