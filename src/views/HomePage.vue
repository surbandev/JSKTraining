<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonCardTitle class="center">JSK Training</IonCardTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent class="ion-padding">
      <!-- HOME SECTION -->
      <div class="background-image-home margin-vertical-10">
        <section class="center">
          <h1 class="title">Welcome to Soccer Training</h1>
          <p>Improve your skills and become a better player with our comprehensive training programs.</p>
        </section>
        <section class="section">
        </section>
        <section class="section">
        </section>
        <section class="section">
        </section>
        <section class="section">
          <p>Wrap up the training session and get ready to start.</p>
          <IonButton expand="block" class="start-button" style="color: white" @click="goToDetails">Get Started!</IonButton>
        </section>
      </div>
      <!-- GOAL SECTION -->
      <div class="background-image-goal">
        <section class="center">
          <h1 class="title">Whats my goal?</h1>
          <p>Improve your skills and become a better player with our comprehensive training programs.</p>
        </section>
        <section class="section">
        </section>
        <section class="section">
        </section>
        <section class="section">
        </section>
        <section class="section">
          <h2>Conclusion</h2>
          <p>Wrap up the training session and get ready to start.</p>
        </section>
      </div>
    </IonContent>
  </IonPage>
</template>

<script>
import {
  IonButton,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonFabButton,
  IonIcon,
} from '@ionic/vue';
import { add } from 'ionicons/icons';

export default {
  name: 'Home',
  methods: {
    goToDetails() {
      this.$router.push({ name: 'SignUpPage' });
    }
  },
  components: { IonCardTitle, IonToolbar, IonHeader, IonButton, IonPage, IonContent, IonFabButton, IonIcon }
};
</script>

<style scoped></style>