<script setup lang="ts">
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/vue';
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
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ShopilistItem v-for="item in items" :key="item.id" :item="item" />
      </ion-list>
    </ion-content>
  </ion-page>
</template>
