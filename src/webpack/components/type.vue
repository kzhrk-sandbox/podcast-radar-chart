<template lang="pug">
  .parameterTable__type
    .parameterTable__type__head(v-text="head")
    .parameterTable__type__questions
      template(v-for="q in querstions")
        label.parameterTable__type__question
          .parameterTable__type__question__text(v-text="q")
          .parameterTable__type__question__checkbox
            input(type="checkbox", @change="handleChangeCheckbox")
    .parameterTable__type__sum(v-text="sum")
</template>

<style>
  .parameterTable__type,
  .parameterTable__type__question {
    display: flex;
  }
  .parameterTable__type {
    border-bottom: 1px solid rgba(255, 99, 132, 1);
  }
  .parameterTable__type__head {
    width: 10%;
    padding: 5px 10px;
    box-sizing: border-box;
  }
  .parameterTable__type__questions {
    width: 80%;
  }
  .parameterTable__type__question {
    width: 100%;
    cursor: pointer;
  }
  .parameterTable__type__question:hover {
    background: rgba(255, 99, 132, 0.25);
  }
  .parameterTable__type__question__text {
    width: calc(70 / 80 * 100)%;
    padding: 5px 10px;
    box-sizing: border-box;
  }
  .parameterTable__type__question__checkbox {
    width: calc(10 / 80 * 100)%;
    padding: 5px 10px;
    box-sizing: border-box;
    text-align: center;
  }
  .parameterTable__type__sum {
    width: 10%;
  }

</style>

<script>
  import * as config from '../config';
  import {Event, EventName} from '../event';

  // mutation
  import mutationTypes from '../store/mutationTypes';

  export default {
    name: 'Type',

    props: ['name'],

    computed: {
      head() {
        return `${this.name.toUpperCase()}適性`;
      },
      querstions() {
        return config.mapOfQuestions[this.name];
      },
      sum() {
        return `${this.$store.state.chart[this.name]}/${config.mapOfQuestions[this.name].length}`;
      }
    },

    methods: {
      handleChangeCheckbox(e) {
        if (e.currentTarget.checked) {
          this.$store.commit(mutationTypes[`SET_${this.name.toUpperCase()}`], this.$store.state.chart[this.name] + 1);
        } else {
          this.$store.commit(mutationTypes[`SET_${this.name.toUpperCase()}`], this.$store.state.chart[this.name] - 1);
        }

        Event.$emit(EventName.updateChart);
      }
    }
  };
</script>