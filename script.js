new Vue({
  components: { vueCal: vuecal },
  el: '#app',
  data: () => ({
    events: [
      {
        start: '2020-09-21 11:00',
        end: '2020-09-21 13:00',
        title: '美甲保養'
      },
      {
        start: '2020-09-24 18:30',
        end: '2020-09-24 21:00',
        title: '美甲保養'
      }
    ]
  })
});
