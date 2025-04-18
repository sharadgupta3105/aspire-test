<template>
  <div class="vr_container">
    <div class="logo-vr-option">
      <div class="logo-tab-content">
        <div class="logoIconImg">
          <q-img src="../../assets/Logo2.svg" class="logo_icon"></q-img>
        </div>
        <span class="sub-heading"
          >Trusted way of banking for 3,000+ SMEs and startups in Singapore</span
        >
      </div>
    </div>
    <div class="vr-option q-mt-xl">
      <div class="tab-content">
        <div class="iconImg">
          <q-img src="../../assets/Logo-1.svg" class="home_icon"></q-img>
        </div>

        <span class="tab-name">Home</span>
      </div>
    </div>
    <div class="vr-option">
      <div class="tab-content">
        <div class="iconImg">
          <q-img src="../../assets/pay-1.svg" class="pay_icon"></q-img>
        </div>

        <span class="active_tab-name tab-name">Cards</span>
      </div>
    </div>
    <div class="vr-option">
      <div class="tab-content">
        <div class="iconImg">
          <q-img src="../../assets/Payments.svg" class="home_icon"></q-img>
        </div>

        <span class="tab-name">Payments</span>
      </div>
    </div>
    <div class="vr-option">
      <div class="tab-content">
        <div class="iconImg">
          <q-img src="../../assets/Credit.svg" class="home_icon"></q-img>
        </div>

        <span class="tab-name">Credit</span>
      </div>
    </div>
    <div class="vr-option">
      <div class="tab-content">
        <div class="iconImg">
          <q-img src="../../assets/user.svg" class="user_icon"></q-img>
        </div>

        <span class="tab-name">Settings</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.vr_container {
  width: 340px;
  height: 100vh;
  background: rgba(12, 54, 90, 1);
  position: fixed;
  left: 0;
  display: flex;
  flex-direction: column;
  z-index: 4;
  padding: 48px;
}
.sub-heading {
  font-size: 15px;
  margin-top: 19px;
  color: white;
  opacity: 30%;
}
.vr-option {
  width: 100%;
  height: 80px;
  position: relative;
}
.logo-vr-option {
  width: 100%;
  position: relative;
}
.tab-content {
  width: 100%;
  max-width: 30px;
  height: 80px;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.logo-tab-content {
  width: 100%;
  max-width: 300px;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.logoIconImg {
  width: 125px;
  height: 35px;
}
.iconImg {
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.tab-name {
  font-size: 16px;
  height: 100%;
  color: white;
  display: flex;
  align-items: center;
  margin-left: 16px;
}
.active_tab-name {
  color: #01d167;
}
.home_icon {
  height: 24px;
  width: 24px;
}
.user_icon {
  height: 24px;
  width: 20px;
}
.pay_icon {
  height: 23px;
  width: 30px;
}
@media only screen and (max-width: 600px) {
  .vr_container {
    display: none;
  }
}
</style>
