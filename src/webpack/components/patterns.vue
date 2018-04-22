<template lang="pug">
  .parameterTable
    .parameterTable__header
      .parameterTable__col1 分類
      .parameterTable__col2 質問
      .parameterTable__col3 チェック
      .parameterTable__col4 合計
    .parameterTable__body
      template(v-for="type in types")
        type(:name="type")
</template>

<style>
  .parameterTable {
    width: 50%;
  }
  @media screen and (max-width: 414px) {
    .parameterTable {
      width: 100%;
      margin-top: 25px;
    }
  }
  .parameterTable__header {
    display: flex;
  }
  .parameterTable__col1,
  .parameterTable__col2,
  .parameterTable__col3,
  .parameterTable__col4 {
    padding: 5px 10px;
    background: rgba(255, 99, 132, 0.5);
    color: #333;
    box-sizing: border-box;
    margin-left: 1px;
  }
  .parameterTable__col1 {
    width: 10%;
  }
  .parameterTable__col2 {
    width: 70%;
  }
  .parameterTable__col3 {
    width: 10%;
  }
  .parameterTable__col4 {
    width: 10%;
  }
</style>

<script>
  import * as config from '../config';

  // components
  import Type from './type.vue';

  // mutation
  import mutationTypes from '../store/mutationTypes';

  export default {
    name: 'Patterns',

    data() {
      return {
        types: Object.keys(config.mapOfQuestions)
      }
    },

    components: {
      Type,
    },

    created() {
    },
  };
</script>