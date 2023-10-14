<template>
  <div class="tariff-list">
    <tariff-item
        :ti="tariff"
        v-for="(tariff, i) in tariff_list"
        :key="i"/>
  </div>
</template>

<script setup lang="ts">
import {TariffList, TariffType} from "~/components/sections/tariff/tariff-type";
import TariffItem from "~/components/sections/tariff/TariffItem.vue";

const {t} = useI18n()

const defaultTariff = computed<TariffType["descriptions"]>(() => ([
  t('tariff.desc_1'),
  t('tariff.desc_2'),
  t('tariff.desc_3'),
  t('tariff.desc_4'),
]))

const additionalTariff = computed<TariffType["descriptions"]>(() => ([
  t('tariff.desc_5'),
  t('tariff.desc_6'),
  t('tariff.desc_7'),
]))

const tariff_list = computed<TariffList[]>(() => ([
  {
    tariff_type: 'default',
    tariff: {
      title: t('tariff.tariff_title_1'),
      descriptions: defaultTariff.value,
      price: 35000,
      btnText: t('tariff.btn_text_1'),
    }
  },
  {
    tariff_type: 'default',
    tariff: {
      title: t('tariff.tariff_title_2'),
      descriptions: defaultTariff.value,
      price: 20000,
      btnText: t('tariff.btn_text_1'),
    }
  },
  {
    tariff_type: 'accent',
    tariff: {
      title: t('tariff.tariff_title_3'),
      descriptions: [...defaultTariff.value, ...additionalTariff.value],
      price: 49900,
      btnText: t('tariff.btn_text_2'),
    }
  },
  {
    tariff_type: 'default',
    tariff: {
      title: t('tariff.tariff_title_4'),
      descriptions: [...defaultTariff.value, ...additionalTariff.value],
      price: 30000,
      btnText: t('tariff.btn_text_1'),
    }
  }
]))

</script>

<style scoped lang="scss">
@use "@/assets/scss/breakpoints" as *;

.tariff-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 35px;
  margin-top: 2rem;

  @media screen and (max-width: calc($desktop-1 - 1px)) {
    justify-content: space-around;
  }
}
</style>
