<template>
  <div v-if="card" class="card-container">
    <div class="show-number-holder">
      <div class="show-number">
        <q-icon name="visibility" size="20px" class="dot" /> Show card number
      </div>
    </div>
    <div class="card_holder" :class="{ 'frozen-card': card.freeze }">
      <div class="img-holder">
        <q-img src="../assets/Logo-2.svg" class="img"></q-img>
      </div>
      <div class="name-holder">{{ card.name }}</div>
      <div class="card-number">
        <div class="digits" v-for="i in 3" :key="i">
          <q-icon v-for="i in 4" :key="i" name="fiber_manual_record" size="10px" class="dot" />
        </div>
        <div class="digits">{{ trimNumber(card.number) }}</div>
      </div>
      <div class="date-cvv-holder">
        <div class="date-holder">Thru: {{ card.date }}</div>
        <div class="cvv-holder">CVV : ✶✶✶</div>
      </div>
      <div class="visa-img-holder">
        <q-img src="../assets/VisaLogo.svg" class="visa-img"></q-img>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  card: Object,
  id: String,
});

const trimNumber = (number: number) => {
  return number.toString().substr(12, 15);
};
</script>

<style>
.card-container {
  width: 100%;
  height: 250px;
}
.card_holder {
  max-width: 414px;
  width: 100%;
  max-height: 249px;
  padding: 27px;
  border-radius: 14px;
  display: inline-block;
  background: rgba(1, 209, 103, 1);
}
.frozen-card {
  background: #757575;
}
.show-number-holder {
  display: flex;
  justify-content: end;
  height: 30px;
}
.show-number {
  background: white;
  color: #01d167;
  border-radius: 5px;
  font-weight: bold;
  margin-bottom: -12px;
  padding: 5px 8px;
}
.q-carousel__slide {
  padding: 0;
}
.img-holder {
  width: 100%;
  height: 40px;
  text-align: end;
}
.visa-img-holder {
  width: 100%;
  text-align: end;
}
.img {
  width: 84px;
  height: 24px;
}
.visa-img {
  width: 66px;
  height: 22px;
}
.name-holder {
  font-size: 24px;
  font-weight: bold;
}
.card-number {
  font-size: 14px;
  font-weight: bold;
  display: flex;
  margin-top: 30px;
}
.digits {
  width: 65px;
  float: left;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  height: 20px;
  align-items: center;
  letter-spacing: 4px;
}
.dot {
  margin-right: 4px;
}
.date-cvv-holder {
  margin-top: 21px;
  display: flex;
  letter-spacing: 1px;
  font-size: 13px;
  width: 215px;
  font-weight: bold;
  justify-content: space-between;
}
@media only screen and (max-width: 600px) {
  .card-number {
    margin-top: 24px;
  }
}
</style>
