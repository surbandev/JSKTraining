<template>
  <ion-page>
    <ion-content>
      <ion-icon icon="heart"></ion-icon>
      <ion-list>
        <ion-item>
          <ion-checkbox label-placement="end" justify="start">
            <h1>Create Idea</h1>
            <ion-note>Run Idea By Brandy</ion-note>
          </ion-checkbox>
          <ion-badge color="success" slot="end">5 Days</ion-badge>
        </ion-item>
      </ion-list>
      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button @click="() => router.push('/new')">
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script setup>
  import {
    IonBadge,
    IonCheckbox,
    IonContent,
    IonFab,
    IonFabButton,
    IonHeader,
    IonIcon,
    IonItem,
    IonList,
    IonNote,
    IonPage,
    IonTitle,
    IonToolbar,
  } from '@ionic/vue';
  import { add } from 'ionicons/icons';
  import { useRouter } from 'vue-router';
  const router = useRouter();
</script>

<style scoped>
  #container {
    text-align: center;

    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  #container strong {
    font-size: 20px;
    line-height: 26px;
  }

  #container p {
    font-size: 16px;
    line-height: 22px;

    color: #8c8c8c;

    margin: 0;
  }

  #container a {
    text-decoration: none;
  }
</style>