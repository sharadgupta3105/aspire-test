<template>
  <div class="card-options">
    <q-item clickable @click="handleFreezeClick" class="hr-option">
      <div class="card-tab-content absolute-center">
        <div class="card-img-div">
          <q-img src="../assets/Freezecard.svg" class="card_icon"></q-img>
        </div>

        <span class="card-tab-name">{{ false ? 'Unfreeze card' : 'Freeze card' }}</span>
      </div>
    </q-item>
    <div class="hr-option">
      <div class="card-tab-content absolute-center">
        <div class="card-img-div">
          <q-img src="../assets/Setspendlimit.svg" class="card_icon"></q-img>
        </div>

        <span class="card-tab-name">Set spend limit</span>
      </div>
    </div>
    <div class="hr-option">
      <div class="card-tab-content absolute-center">
        <div class="card-img-div">
          <q-img src="../assets/GPay.svg" class="card_icon"></q-img>
        </div>

        <span class="card-tab-name">Add to GPay</span>
      </div>
    </div>
    <div class="hr-option">
      <div class="card-tab-content absolute-center">
        <div class="card-img-div">
          <q-img src="../assets/Replacecard.svg" class="card_icon"></q-img>
        </div>

        <span class="card-tab-name">Replace card</span>
      </div>
    </div>
    <q-item clickable @click="promptToDelete" class="hr-option">
      <div class="card-tab-content absolute-center">
        <div class="card-img-div">
          <q-img src="../assets/Deactivatecard.svg" class="card_icon"></q-img>
        </div>

        <span class="card-tab-name">Cancel card</span>
      </div>
    </q-item>
    <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <span class="q-ml-sm">You are sure you want to remove this card</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn flat label="Remove" color="primary" @click="handleDelete" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

//
<script setup lang="ts">
import { ref } from 'vue';
import { useCardStore } from '../stores/cards';

// Props
defineProps<{
  slide: string;
}>();

// Store
const cardStore = useCardStore();

// Local state
const confirm = ref(false);

// Methods
const promptToDelete = () => {
  confirm.value = true;
};

const handleDelete = () => {
  if (cardStore.active_card_name) {
    cardStore.deleteCard(cardStore.active_card_name);
  }
};

const handleFreezeClick = () => {
  if (cardStore.active_card_name) {
    cardStore.changeFreezeStatus({ card: cardStore.active_card_name });
  }
};
</script>

<style>
.card-options {
  width: 100%;
  height: 116px;
  background: #edf3ff;
  bottom: 0;
  padding: 20px 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 16px 16px 0 0;
}
.card-img-div {
  width: 100%;
  height: 32px;
}
.hr-option {
  width: 20%;
  max-width: 70px;
  height: 100%;
  position: relative;
}
.card_icon {
  height: 32px;
  width: 32px;
}
.card-tab-content {
  width: 100%;
  max-width: 200px;
  text-align: center;
}
.card-tab-name {
  font-size: 13px;
  line-height: 1.4;
  display: block;
  padding-top: 8px;
}
@media only screen and (min-width: 600px) {
  .card-options {
    border-radius: 16px;
  }
}
</style>
