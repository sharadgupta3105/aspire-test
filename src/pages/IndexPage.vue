<template>
  <div class="page_container">
    <horizontal-navbar />
    <vertical-navbar />
    <div class="fixed-div">
      <div class="logo_holder">
        <q-img src="../assets/Logo.svg" class="logo"></q-img>
      </div>
      <div class="ac_container">
        <div class="ac_text">Available balance</div>
        <div class="ac_amount">
          <span class="amount_box"><span class="dollar_box">$$</span> <b>3,000</b></span>
          <q-btn
            flat
            @click="openAddForm = true"
            class="add_btn"
            icon="add_circle"
            label="New card"
            padding="10px 12px"
            no-caps
          ></q-btn>
        </div>
      </div>
      <q-dialog v-model="openAddForm" persistent>
        <q-card style="min-width: 350px">
          <q-card-section>
            <div class="text-h6">Your Name</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <q-input
              dense
              v-model="name"
              autofocus
              @keyup.enter="((openAddForm = false), cardStore.addCard(name))"
            />
          </q-card-section>

          <q-card-actions align="right" class="text-primary">
            <q-btn flat label="Cancel" v-close-popup />
            <q-btn flat label="Add Card" @click="cardStore.addCard(name)" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
      <div class="tab_container">
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          align="left"
          :active-color="$q.screen.lt.sm ? 'white' : 'black'"
          indicator-color="info"
          :breakpoint="0"
          no-caps
        >
          <q-tab class="tab-option" name="myCards" label="My debit cards" />
          <q-tab name="companyCards" label="All company cards" />
        </q-tabs>

        <q-tab-panels v-model="tab" animated class="tab_panel">
          <q-tab-panel name="myCards">
            <div class="carousel rounded-borders">
              <div class="carousel-div">
                <q-carousel
                  v-model="slide"
                  swipeable
                  animated
                  navigation-position="bottom"
                  navigation
                  height="330px"
                  class="bg-transparent text-white"
                >
                  <template v-slot:navigation-icon="{ active, onClick }">
                    <q-btn v-if="active" size="lg" flat class="active_carousel" @click="onClick" />
                    <q-btn v-else size="sm" class="not_active_carousel" flat @click="onClick" />
                  </template>
                  <q-carousel-slide
                    v-for="(card, key) in cardStore.cards_data"
                    :key="key"
                    :name="key"
                    :card="card"
                    class="column no-wrap carousel-slide"
                  >
                    <card-template :card="card" :id="key" />
                  </q-carousel-slide>
                </q-carousel>

                <card-options v-if="$q.screen.gt.sm" :slide="active_slide" />
              </div>
              <div class="transaction-details">
                <div class="card-details-holder">
                  <q-expansion-item v-model="expanded" class="card-details">
                    <template v-slot:header>
                      <q-item-section avatar>
                        <q-avatar>
                          <img src="../assets/Group11889.svg" style="height: 24px; width: 24px" />
                        </q-avatar>
                      </q-item-section>
                      <q-item-section
                        ><span class="drop-heading"> Card details</span>
                      </q-item-section>
                    </template>
                    <q-card>
                      <q-card-section>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius
                        reprehenderit eos corrupti commodi magni quaerat ex numquam, dolorum
                        officiis modi facere maiores architecto suscipit iste eveniet doloribus
                        ullam aliquid.
                      </q-card-section>
                    </q-card>
                  </q-expansion-item>
                  <q-expansion-item v-model="expandedTransaction" class="card-details">
                    <template v-slot:header>
                      <q-item-section avatar>
                        <q-avatar>
                          <img src="../assets/Group11889-1.svg" style="height: 24px; width: 24px" />
                        </q-avatar>
                      </q-item-section>

                      <q-item-section> Recent transactions </q-item-section>
                    </template>
                    <q-card class="cards-holder">
                      <transaction-template />
                    </q-card>
                    <div class="all-transaction">view all card transactions</div>
                  </q-expansion-item>
                </div>
              </div>
            </div>
          </q-tab-panel>

          <q-tab-panel name="companyCards">
            <div class="text-h6">All Company Cards</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </div>
    <div v-if="$q.screen.lt.sm" class="card-option-holder">
      <card-options class="" :slide="active_slide" />
      <div class="card-details-holder">
        <q-expansion-item v-model="expanded" class="card-details">
          <template v-slot:header>
            <q-item-section avatar>
              <q-avatar>
                <img src="../assets/Group11889.svg" style="height: 25px; width: 25px" />
              </q-avatar>
            </q-item-section>

            <q-item-section><b> Card details</b> </q-item-section>
          </template>
          <q-card>
            <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit
              eos corrupti commodi magni quaerat ex numquam, dolorum officiis modi facere maiores
              architecto suscipit iste eveniet doloribus ullam aliquid.
            </q-card-section>
          </q-card>
        </q-expansion-item>
        <q-expansion-item v-model="expandedTransaction" class="card-details">
          <template v-slot:header>
            <q-item-section avatar>
              <q-avatar>
                <img src="../assets/Group11889-1.svg" style="height: 25px; width: 25px" />
              </q-avatar>
            </q-item-section>

            <q-item-section><b> Recent Transactions</b> </q-item-section>
          </template>
          <q-card class="cards-holder">
            <transaction-template />
          </q-card>
          <div class="all-transaction">view all card transactions</div>
        </q-expansion-item>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import HorizontalNavbar from 'src/components/NavBar/HorizontalNavbar.vue';
import VerticalNavbar from 'src/components/NavBar/VerticalNavbar.vue';
import CardTemplate from 'src/components/CardTemplate.vue';
import TransactionTemplate from 'src/components/TransactionTemplate.vue';
import CardOptions from 'src/components/CardOptions.vue';

import { useCardStore } from '../stores/cards';

// Store
const cardStore = useCardStore();

const tab = ref('myCards');
const slide = ref('ID1');
const active_slide = ref('ID1');
const name = ref('');
const openAddForm = ref(false);
const expanded = ref(false);
const expandedTransaction = ref(true);

// Methods
const setActiveCard = () => {
  active_slide.value = slide.value;
};

// Watchers
watch(slide, () => {
  setActiveCard();
  cardStore.updateActiveCard({ slide: slide.value });
});

watch(
  () => cardStore.active_card_name,
  (newName) => {
    active_slide.value = newName || 'ID1';
    slide.value = newName || 'ID1';
  },
);
onMounted(() => {
  setActiveCard();
});
</script>

<style>
.all-transaction {
  padding: 10px;
  background: rgba(237, 255, 245, 1);
  color: rgba(1, 209, 103, 1);
  text-align: center;
}
.cards-holder {
  padding: 0 10px;
}
.add_btn {
  color: #23cefd;
  font-weight: 600;
  font-size: 13px !important;
  border-radius: 6px;
}
.card-details-holder {
  width: 100%;
  height: 100%;
  padding: 20px;
}
.card-details {
  border: 1px solid rgba(240, 240, 240, 1);
  background: rgba(245, 249, 255, 1);
  border-radius: 8px 8px 8px 8px !important;
  box-shadow: 0px 1px 8px 1px rgba(0, 0, 0, 0.04);
  margin-bottom: 20px;
}
.q-carousel--navigation-bottom.q-carousel--with-padding .q-carousel__slide {
  padding-bottom: 20px;
}
.tab-option {
  margin: 0 20px;
}
.fixed-div {
  position: fixed;
  width: inherit;
}
.card-option-holder {
  width: 100%;
  padding-bottom: 100px;
  background: white;
  border-radius: 15px 15px 0 0;
}
.q-tab {
  padding: 0;
}
.on-left {
  margin-right: 6px;
}
.pad-number .q-tab {
  padding: 0;
  margin: 0 20px 0 20px;
}
.q-tab-panels {
  background: rgb(255 255 255 / 0%);
}
.page_container {
  width: 100vw;
  height: 100vh;
  background: #0c365a;
  position: fixed;
  overflow-y: scroll;
  font-family: 'Open Sans';
}
.card-option-holder {
  position: relative;
  margin-top: 510px;
}
.logo_holder {
  width: 100%;
  float: left;
  text-align: right;
  padding: 10px 20px;
}
.logo {
  width: 25px;
  height: 25px;
}
.ac_container {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
}
.ac_text {
  color: white;
  font-size: 14px;
}
.ac_amount {
  font-size: 24px;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.amount_box {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 26px;
  width: 120px;
  justify-content: space-between;
}
.dollar_box {
  width: 40px;
  height: 24px;
  border-radius: 5px;
  background: #01d167;
  display: flex;
  justify-content: center;
  font-weight: 800;
  align-items: center;
  font-size: 13px;
  color: white;
}
.tab_container {
  padding: 20px 0;
}
.tab_panel {
  height: 100%;
}
.active_carousel {
  background: rgba(1, 209, 103, 1);
  min-height: 10px;
  padding: 0;
  width: 20px;
  border-radius: 26px;
}
.not_active_carousel {
  background: rgba(1, 209, 103, 1);
  min-height: 10px;
  padding: 0;
  width: 10px;
  opacity: 20%;
  border-radius: 16px;
}
.carousel-div {
  width: 100%;
}
.drop-heading {
  font-size: 14px;
}
@media only screen and (min-width: 600px) {
  .logo_holder {
    display: none;
  }
  .page_container {
    background: white;
  }
  .carousel-div {
    width: 414px;
  }
  .fixed-div {
    width: calc(100% - 340px);
    right: 0;
    height: 100%;
    overflow: scroll;
    padding: 60px;
  }
  .ac_text {
    color: black;
  }
  .ac_amount {
    color: black;
  }
  .logo {
    display: none;
  }
  .add_btn {
    padding: 5px 10px;
    color: white;
    background: rgba(50, 91, 175, 1);
  }
  .card-option-holder {
    width: calc(100% - 300px);
    right: 0;
  }
  .carousel {
    box-shadow: 0 0 12px 3px rgba(0, 0, 0, 0.08);
    padding: 30px 40px;
    display: flex;
    flex-direction: row;
  }
  .transaction-details {
    width: calc(100% - 350px);
  }
  .card-details-holder {
    padding: 30px 0 20px 46px;
  }
}
</style>
