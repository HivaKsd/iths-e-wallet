import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueMask from 'v-mask';

Vue.use(VueMask);

Vue.config.productionTip = false;

new Vue({
  router,
  data: function(){
    return{
      defaultValues: {
          id: "123",
          holder: "FirstName LastName",
          vendor: "",
          number: "XXXX XXXX XXXX XXXX",
          validMonth: "MM",
          validYear: "YY"
      },


      activeCardIndex : 0,
      cards: [
        {
          id: "1",
          holder: "Niklas aaa",
          vendor: "Bitcoin Inc",
          number: "11111 1111 1111 1111",
          validMonth: "09",
          validYear: "21"
        },
        {
          id: "2",
          holder: "Hiva bbb",
          vendor: "Blockchain Inc",
          number: "2222 2222 2222 2222",
          validMonth: "04",
          validYear: "23"
        },
        {
          id: "3",
          holder: "Ali ccc",
          vendor: "Evil Corp",
          number: "3333 3333 3333 3333",
          validMonth: "11",
          validYear: "24"
        },
        {
          id: "4",
          holder: "Sina ddd",
          vendor: "Ninja Bank",
          number: "4444 4444 4444 4444",
          validMonth: "06",
          validYear: "21"
        }
      ]
    } 
  },
  render: h => h(App)
}).$mount("#app");
