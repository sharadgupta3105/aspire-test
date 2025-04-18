<template>
  <div>
    <div v-for="(transaction, index) in transactionDetails" :key="index" class="transaction-holder">
      <div class="trans-img-holder">
        <div class="circle-div" :style="'background:' + transaction.background">
          <q-img :src="getIconUrl(transaction.icon)" class="trans-img" />
        </div>
      </div>
      <div class="trans-details-holder">
        <div class="trans-name">
          <b>{{ transaction.name }}</b>
        </div>
        <div class="trans-date">{{ transaction.date }}</div>
        <div class="trans-refund">
          <div class="refund-circle-div">
            <q-img src="../assets/business-and-finance.svg" class="trans-refund-img" />
          </div>
          {{ transaction.desc }}
        </div>
      </div>
      <div class="trans-price-holder">
        <span :class="{ 'text-black': transaction.amount.includes('-') }">
          {{ transaction.amount }}
        </span>
        <q-img src="../assets/next-4.svg" class="trans-refund-img" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const transactionDetails = ref([
  {
    name: 'Hamleys',
    icon: 'file-storage.svg',
    date: '20 May 2020',
    desc: 'Refund On debit card',
    amount: '+ $$ 10.5',
    background: '#009DFF1A',
  },
  {
    name: 'Hamleys',
    icon: 'flights.svg',
    date: '20 May 2020',
    desc: 'Charged to debit card',
    amount: '- $$ 10.5',
    background: '#00D6B51A',
  },
  {
    name: 'Hamleys',
    icon: 'megaphone.svg',
    date: '20 May 2020',
    desc: 'Charged to debit card',
    amount: '- $$ 10.5',
    background: '#F251951A',
  },
  {
    name: 'Hamleys',
    icon: 'file-storage.svg',
    date: '20 May 2020',
    desc: 'Charged to debit card',
    amount: '- $$ 10.5',
    background: '#009DFF1A',
  },
]);
const getIconUrl = (iconName: string) => {
  return new URL(`../assets/${iconName}`, import.meta.url).href;
};
</script>

<style>
.transaction-holder {
  width: 100%;
  display: flex;
  border-bottom: 1px solid rgba(245, 245, 245, 1);
  flex-direction: row;
  padding: 6px 0;
}
.trans-img-holder {
  width: 60px;
  padding: 10px 10px 10px 5px;
}
.circle-div {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(0, 157, 255, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
}
.refund-circle-div {
  width: 30px;
  height: 20px;
  border-radius: 10px;
  background: rgba(50, 91, 175, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
}
.trans-details-holder {
  width: calc(100% - 140px);
  padding: 10px 0;
}
.trans-name {
  font-size: 14px;
}
.trans-date {
  color: grey;
  font-size: 13px;
}
.trans-price-holder {
  width: 80px;
  padding: 10px 0;
  color: rgba(1, 209, 103, 1);
  font-weight: bold;
}
.trans-refund {
  display: flex;
  margin-top: 12px;
  flex-direction: row;
  font-size: 11px;
  font-weight: bold;
  color: rgba(50, 91, 175, 1);
  align-items: center;
}
.trans-img {
  width: 15px;
  height: 15px;
}
.trans-refund-img {
  width: 12px;
  height: 10px;
}
</style>
