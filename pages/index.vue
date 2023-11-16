<template>
  <main-section/>

  <section class="section">
    <school-section />
  </section>

  <section class="section" id="test">
    <test-categories-section/>
  </section>

  <section class="section">
    <trial-tester-section/>
  </section>

  <section class="section">
    <staff-training-section/>
  </section>

  <section class="section">
    <education-section/>
  </section>

  <section class="section">
    <why-section/>
  </section>

  <section class="section" id="course">
    <online-courses-section/>
  </section>

<!--  <section class="section">-->
<!--    <learn-section/>-->
<!--  </section>-->

  <section class="section">
    <tariff-section/>
  </section>

  <section class="section" id="faq">
    <faq-section/>
  </section>

  <!--  <section class="section">-->
  <!--    <teachers-section />-->
  <!--  </section>-->
</template>

<script setup lang="ts">
import MainSection from "~/components/sections/MainSection.vue";
import TestCategoriesSection from "~/components/sections/TestCategoriesSection.vue";
import TrialTesterSection from "~/components/sections/TrialTesterSection.vue";
import OnlineCoursesSection from "~/components/sections/OnlineCoursesSection.vue";
import StaffTrainingSection from "~/components/sections/StaffTrainingSection.vue";
import EducationSection from "~/components/sections/EducationSection.vue";
import WhySection from "~/components/sections/WhySection.vue";
import LearnSection from "~/components/sections/LearnSection.vue";
import TariffSection from "~/components/sections/TariffSection.vue";
import FaqSection from "~/components/sections/FaqSection.vue";
import SchoolSection from "~/components/sections/SchoolSection.vue";

</script>

<style scoped lang="scss">
@use "@/assets/scss/_colors.scss" as *;

.section {
  margin-bottom: 10rem;
}
</style>
