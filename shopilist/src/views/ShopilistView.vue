<script setup lang="ts">
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
} from '@ionic/vue';
import { addCircleOutline } from "ionicons/icons"
import ShopilistItem from '@/components/ShopilistItem.vue';
import { getItems, ShopilistItemModel } from '@/data/items';
import { ref } from 'vue';

const items = ref<ShopilistItemModel[]>(getItems());
</script>

<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Shopilist</ion-title>
        <ion-buttons slot="primary">
          <ion-button router-link="/add" router-direction="forward">
            <ion-icon :icon="addCircleOutline" color="primary" style="font-size: 24px;"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ShopilistItem v-for="item in items" :key="item.id" :item="item" />
      </ion-list>
    </ion-content>
  </ion-page>
</template>
