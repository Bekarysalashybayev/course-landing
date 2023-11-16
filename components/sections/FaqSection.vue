<template>
  <div class="faq">
    <div class="container">
      <div class="faq__title">FAQ</div>
      <div class="items">
        <faq-item class="item" v-for="(faq,i) in faqList" :key="i" :title="faq.title" :text="faq.text"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import FaqItem from "~/components/sections/faq/FaqItem.vue";

const {t} = useI18n()

const faqList = computed<{ title: string, text: string }[]>(() => ([
  {
    title: t('faq.text_1'),
    text: t('faq.answer_1'),
  },
  {
    title: t('faq.text_2'),
    text: t('faq.answer_2'),
  },
  {
    title: t('faq.text_3'),
    text: t('faq.answer_3'),
  },
  {
    title: t('faq.text_4'),
    text: t('faq.answer_4'),
  },
  {
    title: t('faq.text_5'),
    text: t('faq.answer_5'),
  },
  {
    title: t('faq.text_6'),
    text: t('faq.answer_6'),
  },
]))
</script>

<style scoped lang="scss">
@use "@/assets/scss/colors" as *;
@use "@/assets/scss/breakpoints" as *;

.faq {
  .faq__title {
    text-align: center;
    color: $color-31;
    font-weight: 700;
    font-size: 4rem;
    line-height: 1;
  }

  .items {
    margin-top: 7rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    column-gap: 10rem;
    row-gap: 3rem;

    .item {
      width: 100%;
      max-width: 600px;

    }
  }

  @media screen and (max-width: $tab-1) {

    .items {

      .item {
        position: relative;
        margin-top: 3rem;

        &:last-child:after{
          content: "";
          position: absolute;
          top: calc(100% + 3rem);

          left: 0;
          width: 100%;
          height: 1px;
          background-color: $primary;
        }

        &::before {
          content: "";
          position: absolute;
          top: -3rem;

          left: 0;
          width: 100%;
          height: 1px;
          background-color: $primary;
        }
      }
    }
  }

  @media screen and (max-width: $phone-4) {
    .faq__title {
      text-align: left;
    }
  }
}

</style>
