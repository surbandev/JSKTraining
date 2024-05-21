<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script setup>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
</script>

<style>
.background-image-home {
  background-image: url('C:\Dev\JSKTraining\src\media\JordanProOne.jpg');
  background-size: cover;
  background-position: center;
  height: 900px;
  display: flex;
  flex-direction: column;
  
}
.background-image-goal {
  background-image: url('C:\Dev\JSKTraining\src\media\vector-gold-soccer-ball.jpg');
  /* background-color: #121212; */
  background-size: cover;
  background-position: center;
  height: 800px;
  display: flex;
  flex-direction: column;
}
.section {
  padding: 20px;
  color: white;
  text-shadow: 1px 1px 2px black;
  flex: 1;
}
.margin-vertical-10 {
  margin-top: 10px;
  margin-bottom: 30px;
}
.start-button {
  margin-top: 20px;
}
.center {
  text-align: center;
}
</style>