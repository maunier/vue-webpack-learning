<!-- 
测试：http://localhost:8080/#/computed
  vue源码中在initComputed的时候，并没有任何observe computed属性的代码，难道computed属性不是reactive的吗？

  结果：computed属性确实不是响应式的，不仅如此，vue源码对computed属性的set函数进行了重写，如果用户定义了计算属性的set方法，则会使用计算书型的set方法，如果没有设置，则vue将会把计算书型的set方法置成一个空函数，导致对computed的赋值是没有用的~~~
 -->

<template>
  <div>
    <p>total: {{total}}  </p>
    <p>a: <input v-model="a" type="" name="" /></p>
    <p>b: <input v-model="b" type="" name=""></p>
    <p><button @click="changeTotalTo100">change total to 100</button></p>
    <p><button @click="consoleTotal">console this.total</button></p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        a: 1,
        b: 2,        
      };
    },
    computed: {
      total() {
        console.log('a:', this.a)
        return +this.a + +this.b;
      }
    },
    methods: {
      changeTotalTo100() {
        this.total = 100;
      },
      consoleTotal() {
        console.log('this.total:', this.total)
      }
    }
  }
</script>
