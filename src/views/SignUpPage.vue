<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButton slot="start">
          <IonBackButton style="color: white" default-href="/home"></IonBackButton>
        </IonButton>
        <IonTitle>Select Time Periods</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent class="ion-padding">
      <vue-cal style="height: 600px" :selected="selectedPeriods" @time-selected="onTimeSelected" time="12:00"
        hide-view-selector default-view="week" draggable events-on-month-view :events="events" :time="{
          start: '07:00',
          end: '19:00',
          step: '30'
        }" />
      <IonButton expand="block" style="color: white" @click="confirmSelection">Confirm Selection</IonButton>
    </IonContent>
  </IonPage>
</template>

<script>
import {
IonBackButton,
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/vue';
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css';

export default {
  name: 'TimePeriodSelector',
  components: {
    IonButton,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    VueCal,
    IonBackButton
},
  data() {
    return {
      selectedPeriods: [],
      events: []
    };
  },
  methods: {
    onTimeSelected(timePeriod) {
      this.selectedPeriods.push(timePeriod);
    },
    confirmSelection() {
      console.log('Selected periods:', this.selectedPeriods);
      alert('Time periods selected successfully!');
    }
  }
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
