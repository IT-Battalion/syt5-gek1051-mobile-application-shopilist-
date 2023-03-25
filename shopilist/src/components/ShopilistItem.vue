<script setup lang="ts">
import { ShopilistItemModel } from '@/data/items';
import { IonIcon, IonItem, IonLabel, IonCheckbox } from '@ionic/vue';
import { PropType } from 'vue';
import { closeOutline } from 'ionicons/icons';

defineProps({
  item: {
    type: Object as PropType<ShopilistItemModel>,
    required: true,
  }
})
</script>

<template>
  <ion-item>
    <ion-checkbox slot="start"></ion-checkbox>
    <ion-label>{{ item.name }}</ion-label>
    <ion-icon :icon="closeOutline"></ion-icon>
  </ion-item>
</template>
