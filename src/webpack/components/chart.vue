<template lang="pug">
  .chart
    canvas#js-chart(width="320" height="320")
</template>

<style>
  .chart {
    width: 320px;
  }
  @media screen and (max-width: 414px) {
    .chart {
      margin: 0 auto;
    }
  }
</style>

<script>
  import * as config from '../config';
  import {Event, EventName} from '../event';

  import 'chart.js/dist/Chart.bundle.min.js';

  export default {
    name: 'Chart',

    data() {
      return {
        chart: null,
      }
    },

    computed: {
      params() {
        return [
          this.$store.state.chart.a,
          this.$store.state.chart.b,
          this.$store.state.chart.c,
          this.$store.state.chart.d,
          this.$store.state.chart.e,
          this.$store.state.chart.f
        ];
      }
    },

    created() {
      Event.$on(EventName.updateChart, ()=>{
        console.log('updateChart');
        console.log(this.params)
        this.chart.data.datasets[0].data = this.params;
        this.chart.update();
      });
    },

    mounted() {
      this.chart = new Chart('js-chart', {
        type: 'radar',
        label: 'podcast',
        responsive: false,
        data: {
          labels: Object.keys(config.mapOfQuestions).map((key)=>{
            return key.toUpperCase();
          }),
          datasets: [
            {
              label: 'Podcast適性',
              data: this.params,
              fill: true,
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgb(255, 99, 132)',
              pointBackgroundColor: 'rgb(255, 99, 132)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgb(255, 99, 132)'
            }
          ]
        },
        options: {
          scale: {
            ticks: {
              display: true,
              fontSize: 12,
              min: 0,
              max: 5,
              beginAtZero: true
            },
          },
          elements: {
            line: {
              tension: 0,
              borderWidth: 3
            }
          }
        }
      });
    }
  };
</script>