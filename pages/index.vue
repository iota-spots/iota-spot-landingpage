<template>
  <div class="container">
    <div>
      <h1 class="title">IOTA Spots</h1>
      <h2
        class="subtitle"
      >Spots are points of interest on the map which holds IOTA, and the first one in the range of the spot can catch them all.</h2>
      <h2>Create a spot on the map</h2>
      <Map />
      <CreateSpot />
      <div class="spots">
        <el-row class="spots-details" :gutter="12">
          <el-col :span="8" class="">
            <el-card shadow="always">
              <h3>Set up a spot</h3>
              <p>Anyone can set up a spot anywhere in the world, making it a unique way to share and donate Nano to many people.</p>
            </el-card>

            <el-card shadow="always">
              <h3>Map</h3>
              <p>Easily see what spots are payable to you on the map, and tap them to get info on how close you have to be to get a payout. It even shows how long you have to wait to get the next payout.</p>
            </el-card>

            <el-card shadow="always">
              <h3>Donate</h3>
              <p>Spots can even get donations, allowing everyone to contribute to keeping a spot alive.</p>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="always">
              <h3>Customize your Spots</h3>
              <p>There are multiple options for setting up spots; some of these are range, payout amount, and frequency of payouts.</p>
            </el-card>
            <el-card shadow="always">
              <h3>No waiting</h3>
              <p>Since IOTA is instant, the payout is processed immediately. This means you can spend it on whatever you want within a second or two.</p>
            </el-card>
            <el-card shadow="always">
              <h3>Nothing wasted on fees</h3>
              <p>IOTA is completely fee-less, so nothing is lost of fees or other transaction costs. Everything that is contributed to a spot is paid out to the users of IOTA Spots.</p>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import Map from '@/components/Map'
import CreateSpot from '@/components/CreateSpot'

export default {
  components: { Map, CreateSpot }
}

</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100% !important;

}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 70px;
  color: #35495e;
  letter-spacing: 1px;
  margin-top: 80px;
}

.subtitle {
  font-weight: 300;
  font-size: 32px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 30px;
}

.links {
  padding-top: 15px;
}

.el-col {
  width: 100%;
  max-width: 800px;
  display: block !important;
  margin-right: auto !important;
  margin-left: auto !important;
  float: none !important; /* Added */
}
</style>
