<template>
  <div>
    <el-button type="primary" @click="dialogFormVisible = true">Create Spot</el-button>
    <el-dialog title="Create a spot" :visible.sync="dialogFormVisible">
    <div v-show="step === 1">
      <el-form :model="form">
        <el-form-item label="Your Spot name">
          <el-input v-model="form.name" autofocus="autofocus" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="IOTA value (Devnet)">
          <el-input type="number" v-model="form.value" autocomplete="off"></el-input>
        </el-form-item>

        <p>You can send up to 1000 IOTA Devnet tokens with</p>
        <a target="_blank" href="https://faucet.einfachiota.de/#/">einfachIOTA Devnet Faucet</a>
        <br />
        <br />
        <p>lat: {{lat}}</p>
        <p>lng: {{lng}}</p>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="createSpot()">Buy a Spot</el-button>
        <p
          class="footprint"
        >With click on "Buy a Spot" you confirm to send devnet IOTA to the address shown in the next step.</p>
      </span>
      </div>
      <div v-show="step === 2">
          <br />
          <h3>Pay your bill! </h3>
          <p>IOTA (devnet) to pay: {{ form.value }}</p>
        <div v-if="address" class="iota-payment">
          <br />
          <button @click="copyAddress">Copy address</button>
          <br />
          <br />
          <a target="_blank" href="https://faucet.devnet.iota.org/">IOTA Devnet Faucet</a>
          <br />
          <a target="_blank" href="https://faucet.einfachiota.de/">einfachIOTA Devnet Faucet</a>
          <br />
          or in the einfachIOTA Discord
          <br />
          <a target="_blank" href="https://discord.gg/WmDqUEH">#tanglebot-dev</a>
          <br />
          <br />
          <p><strong>Dont close this window, till you see a success message</strong></p>

        </div>
        <div v-show="step === 3">
            <h3>Success!</h3>
            <p>Receive payment, thanks for your order!</p>
            <p>You spot will show up, if the payment was confirmed.</p>
            <el-button @click="dialogFormVisible = false">You can close now</el-button>

        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      step: 1,
      form: {
        name: "",
        value: 1
      },
      dialogFormVisible: false,
      address: ''
    };
  },
  methods: {
    copyAddress() {
      // btw writeText() returns a promise so you could utilize that somehow if you want
      navigator.clipboard.writeText(this.address)
    },
    createSpot() {
      console.log("createSpot");

      const spot = {
        ...this.form,
        lat: this.lat,
        lng: this.lng
      };
      console.log("data", spot);

      this.$axios
        .post(`${process.env.backendUrl}/iotapay/api/payments`, { spot })
        .then(res => {
          console.log("res", res);
          this.$store.commit('spots/setCurrentSpotPayment', res.data.payment)
          this.address = res.data.payment.address
          this.step = 2
        })
        .catch(err => {
          console.log("err", err);
        });

    }
  },

  computed: {
    lat() {
      return this.$store.state.location.lat;
    },
    lng() {
      return this.$store.state.location.lng;
    }
  },
  sockets: {
    connect() {
      console.log("socket connected");
    },
    payments(r) {
      console.log(" payments");
      console.log(r);
      if (r.status === "paymentIncoming" && this.txpending === false) {
        this.step = 3;
        dialogFormVisible = false
      }
      if (r.status === "paymentSuccess") {
        alert("Zahlung erhalten, vielen Dank für deine Bestellung!");
      }
    },
    disconnect() {
      console.log("socket disconnect");
    }
  }
};
</script>

<style>
.footprint {
  margin-top: 10px;
  text-align: center;
  font-size: 12px;
}
</style>