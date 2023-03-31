<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonToolbar,
  IonContent,
  IonItem,
  IonSearchbar,
  IonLabel,
  IonIcon,
  onIonViewDidEnter,
} from "@ionic/vue"
import { addCircle } from "ionicons/icons"
import { ref } from "vue";

const inputEl = ref<InstanceType<typeof IonSearchbar> | null>(null);
const input = ref<string>();

function addShopilistItem(name: string) {
  input.value = "";
  console.log("adding new item with name " + name);
}

onIonViewDidEnter(() => {
  inputEl.value?.$el.setFocus().then(() => {/* ensure the returned Promise is driven to completion */});
});
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Add Items</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-item>
        <ion-searchbar ref="inputEl" v-model="input"
          @keyup.enter="input != undefined ? addShopilistItem(input) : ''"></ion-searchbar>
      </ion-item>
      <ion-item v-if="input != undefined && input.length != 0" @click="addShopilistItem(input!)">
        <ion-icon :icon="addCircle"></ion-icon>
        <ion-label class="ion-text-wrap">
          {{ input }}
        </ion-label>
      </ion-item>
    </ion-content>
  </ion-page>
</template>
