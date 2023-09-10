<template>
  <div class="container">
    <div class="education">
      <div class="img">
        <education-main-icon/>
      </div>
      <div class="education__content">
        <div class="alert desktop">INTEGRATIONS</div>
        <div class="title"><span>200+ educational tools and platform</span> integrations</div>
        <div class="subtitle">
          Schoology has every tool your classroom needs and comes pre-integrated with more than 200+ tools, student
          information systems (SIS), and education platforms.
        </div>
        <be-button class="btn-more" btn-size="large" btn-type="primary">
          See All Integrations
        </be-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BeButton from "~/components/el/BeButton.vue";
import EducationMainIcon from "~/components/sections/education/EducationMainIcon.vue";

</script>

<style scoped lang="scss">
@use "@/assets/scss/breakpoints" as *;
@use "@/assets/scss/colors" as *;

.container {
  max-width: 1095px;
}

.education {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 2rem;

  .alert {
    color: $color-26;
    letter-spacing: 2px;
    font-size: 2rem;
    line-height: 1;
    margin-bottom: 3rem;
    padding-left: 9.5rem;
    position: relative;

    &:before {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      width: 8rem;
      height: 1px;
      background-color: $color-26;
    }
  }

  .title {
    font-size: 4rem;
    line-height: 1.2;
    margin-bottom: 2rem;
  }

  .subtitle {
    color: $color-17;
    font-size: 2.4rem;
    line-height: 4.32rem;
  }

  &__content {
    max-width: 500px;

    .btn-more {
      margin-top: 4rem;
    }
  }

  @media screen and (max-width: $mobile) {
    flex-wrap: wrap;
    flex-direction: column-reverse;
    align-items: center;
    gap: 7rem;

    .desktop {
      display: none;
    }
  }
}
</style>
