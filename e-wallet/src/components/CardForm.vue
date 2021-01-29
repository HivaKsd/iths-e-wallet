<template>
<div>
  <CardPage :card="card"/>

   <form class="card-form" @submit.prevent="addCard">
    <label for="number" class="col-2">Card Number</label>
    <input
      type="text"
      v-model="number"
      v-on:input="writeNumber(number)"
      v-mask="'#### #### #### ####'"
      required
      name="number"
      maxlength="19"
      placeholder="XXXX XXXX XXXX XXXX"
      class="col-2"
    />
    <label for="cardholder" class="col-2">Cardholder Name</label>
    <input
      type="text"
      v-on:input="writeHolder(holder)"
      required
      name="cardholder"
      placeholder="Firstname Lastname"
      v-model="holder"
      class="col-2"
    />
    <label for="month" class="col-1">Month</label>
    <label for="year" class="col-1">Year</label>
    <select name="month" v-model="validMonth" v-on:change="writeMonth(validMonth)" class="col-1">
      <option value="01">01</option>
      <option value="02">02</option>
      <option value="03">03</option>
      <option value="04">04</option>
      <option value="05">05</option>
      <option value="06">06</option>
      <option value="07">07</option>
      <option value="08">08</option>
      <option value="09">09</option>
      <option value="10">10</option>
      <option value="11">11</option>
      <option value="12">12</option>
    </select>
    <select name="month" v-model="validYear" v-on:change="writeYear(validYear)" class="col-1">
      <option value="21">21</option>
      <option value="22">22</option>
      <option value="23">23</option>
      <option value="24">24</option>
      <option value="25">25</option>
    </select>
    <label for="vendor"  class="col-2">Vendor</label>
    <select name="vendor" v-model="vendor" v-on:change="writeVendor(vendor)" class="col-2">
      <option value="Bitcoin Inc">Bitcoin Inc</option>
      <option value="Blockchain Inc">Blockchain Inc</option>
      <option value="Evil Corp">Evil Corp</option>
      <option value="Ninja Bank">Ninja Bank</option>
    </select>

    <button class="cta">Add Card</button>
   </form>
</div>
 
</template>

<script>
import CardPage from "./CardPage.vue";

export default {
  components: {
    CardPage
  },
  computed: {
  
    card(){

      return this.$root.$data.defaultValues; 
    }
  },
  data() {
    return {
     
      id: "",
          holder: "",
          vendor: "",
          number: "",
          validMonth: "MM",
          validYear: "YY"
    };
  },

  
  methods:{
    writeNumber() {
      this.card.number=this.number;
    },
    writeMonth() {
      this.card.validMonth=this.validMonth;
    },
    writeYear() {
      this.card.validYear=this.validYear;
    },
    writeVendor() {
      this.card.vendor=this.vendor;
    },
    writeHolder() {
      this.card.holder=this.holder;
    },

    addCard() {
      const newCard = {
        id: this.id,
          holder: this.holder,
          vendor: this.vendor,
          number: this.number,
          validMonth: this.validMonth,
          validYear: this.validYear
      };
      if (this.$root.$data.cards.length > 7) {
        alert("You can have maximum 8 cards in your eWallet!");
        this.$router.push("/");
        return;
      }
      this.$root.$data.cards.push(newCard);
      this.$router.push("/");
    },
  }
}
</script>

<style scoped>

.card-form {
  margin: 2rem 0 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 1rem;
}

.card-form label {
  padding: 0.25rem 0;
  font-size: 0.7rem;
  text-transform: uppercase;
}

.col-1 {
  grid-column: auto/span 1;
}
.col-2 {
  grid-column: auto/span 2;
}
.card-form input,
select {
  border: 1px solid #000;
  border-radius: 0.25rem;
  padding: 0.5rem;
  height: 2.6rem;
  margin: 0 0 0.8rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-size: 1rem;
  width: 100%;
}

.cta {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 4rem;
  width: 200%;
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 700;
  text-decoration: none;
  color: #000;
  border: 0.125rem solid #000;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 0.5rem;
  margin: 2rem 0;
}

</style>