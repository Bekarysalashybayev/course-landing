<template>
  <div class="container">
    <div class="learn">
      <div class="icon">
        <img src="@/assets/img/teacher.svg" width="100" alt="teacher">
      </div>
      <div class="detail">
        <div class="title">
          Мұғалімдер Мен Оқушыларға Арналған <span>Құралдар</span>
        </div>
        <div class="subtitle">
          Class has a dynamic set of teaching tools built to be deployed and used during class.
          Teachers can handout assignments in real-time for students to complete and submit.
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/scss/colors" as *;
@use "@/assets/scss/breakpoints" as *;

.learn {
  display: flex;
  align-items: center;
  gap: 3rem;

  .title {
    font-size: 4rem;
    line-height: 1.3;
    margin-bottom: 3rem;
  }

  .subtitle {
    font-size: 2.4rem;
    line-height: 4.32rem;
    color: $color-17;
  }

  .icon {
    flex: 0 0 63.7rem;
    max-width: 50%;

    img {
      width: 100%;
      height: auto;
    }
  }

  @media screen and (max-width: $mobile) {
    flex-direction: column-reverse;

    .icon {
      max-width: 100%;
      flex: 0 0 auto;
    }
  }
}
</style>
