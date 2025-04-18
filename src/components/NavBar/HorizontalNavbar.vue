<template>
  <div class="hr_container">
    <div class="hr-option">
      <div class="tab-content absolute-center">
        <div class="iconImg">
          <q-img src="../../assets/Logo-1.svg" class="home_icon"></q-img>
        </div>

        <span class="tab-name">Home</span>
      </div>
    </div>
    <div class="hr-option">
      <div class="tab-content absolute-center">
        <div class="iconImg">
          <q-img src="../../assets/pay-1.svg" class="pay_icon"></q-img>
        </div>

        <span class="active_tab-name">Cards</span>
      </div>
    </div>
    <div class="hr-option">
      <div class="tab-content absolute-center">
        <div class="iconImg">
          <q-img src="../../assets/Payments.svg" class="home_icon"></q-img>
        </div>

        <span class="tab-name">Payments</span>
      </div>
    </div>
    <div class="hr-option">
      <div class="tab-content absolute-center">
        <div class="iconImg">
          <q-img src="../../assets/Credit.svg" class="home_icon"></q-img>
        </div>

        <span class="tab-name">Credit</span>
      </div>
    </div>
    <div class="hr-option">
      <div class="tab-content absolute-center">
        <div class="iconImg">
          <q-img src="../../assets/user.svg" class="user_icon"></q-img>
        </div>

        <span class="tab-name">Settings</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hr_container {
  width: 100vw;
  height: 50px;
  background: #ffffff;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: row;
  z-index: 4;
  box-shadow: 0px -1px 10px 3px rgb(0 0 0 / 8%);
}
.hr-option {
  width: 20%;
  height: 100%;
  position: relative;
}
.tab-content {
  width: 100%;
  max-width: 200px;
  height: 50px;
  text-align: center;
  padding: 7px;
}
.iconImg {
  width: 100%;
  height: 17px;
}
.tab-name {
  font-size: 9px;
  height: 10px;
  color: #757575;
}
.active_tab-name {
  font-size: 9px;
  height: 10px;
  color: #01d167;
}
.home_icon {
  height: 20px;
  width: 20px;
}
.user_icon {
  height: 20px;
  width: 17px;
}
.pay_icon {
  height: 17px;
  width: 22px;
}
@media only screen and (min-width: 600px) {
  .hr_container {
    display: none;
  }
}
</style>
