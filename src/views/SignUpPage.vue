<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <ion-buttons slot="start">
            <ion-back-button default-href="/home"></ion-back-button>
          </ion-buttons>
        <IonTitle>Contact Us</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonGrid>
        <IonRow>
          <IonCol>
            <form @submit.prevent="handleSubmit">
              <IonItem>
                <IonLabel position="floating">Name</IonLabel>
                <IonInput v-model="name" type="text" required></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Email</IonLabel>
                <IonInput v-model="email" type="email" required></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Subject</IonLabel>
                <IonInput v-model="subject" type="text" required></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Message</IonLabel>
                <IonTextarea v-model="message" required></IonTextarea>
              </IonItem>
              <IonButton expand="block" type="submit">Submit</IonButton>
            </form>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  </IonPage>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonButton
} from '@ionic/vue';

export default {
  name: 'ContactUs',
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonButton
  },
  data() {
    return {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  },
  methods: {
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
  }
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
