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
          <h1 class="title">Train with the pros and become a better soccer player today!</h1>
        </section>
        <section class="section">
        </section>
        <section class="section">
        </section>
        <section class="section">
        </section>
        <section class="section">
        </section>
        <section class="section">
        </section>
        <section class="section">
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
        </section>
      </div>
      <!-- CONTACT US SECTION -->
      <div class="contact-section">
        <IonGrid>
          <IonRow>
            <IonCol>
              <h2 class="center">Contact Us</h2>
              <form @submit.prevent="handleSubmit">
                <IonItem>
                  <IonLabel position="floating" class="margin-vertical-10">Name</IonLabel>
                  <IonInput v-model="name" type="text" required></IonInput>
                </IonItem>
                <IonItem>
                  <IonLabel position="floating" class="margin-vertical-10">Email</IonLabel>
                  <IonInput v-model="email" type="email" required></IonInput>
                </IonItem>
                <IonItem>
                  <IonLabel position="floating" class="margin-vertical-10">Subject</IonLabel>
                  <IonInput v-model="subject" type="text" required></IonInput>
                </IonItem>
                <IonItem>
                  <IonLabel position="floating" class="margin-vertical-10">Message</IonLabel>
                  <IonTextarea v-model="message" required></IonTextarea>
                </IonItem>
                <IonButton expand="block" type="submit">Submit</IonButton>
              </form>
            </IonCol>
          </IonRow>
        </IonGrid>
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
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/vue';

export default {
  name: 'Home',
  data() {
    return {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  },
  methods: {
    goToDetails() {
      this.$router.push({ name: 'SignUpPage' });
    },
    handleSubmit() {
      if (this.name && this.email && this.subject && this.message) {
        // Handle form submission
        console.log('Form submitted:', {
          name: this.name,
          email: this.email,
          subject: this.subject,
          message: this.message
        });
        // Clear the form fields
        this.name = '';
        this.email = '';
        this.subject = '';
        this.message = '';
        // Display a success message or redirect as needed
        alert('Thank you for contacting us!');
      } else {
        alert('Please fill in all fields.');
      }
    }
  },
  components: { IonCardTitle, IonToolbar, IonHeader, IonButton, IonPage, IonContent, IonItem, IonLabel, IonInput, IonTextarea, IonGrid, IonRow, IonCol }
};
</script>

<style scoped>
.center {
  text-align: center;
}
.margin-vertical-10 {
  margin: 10px 0;
}
.contact-section {
  padding: 20px;
  background-color: #121212;
}
</style>
