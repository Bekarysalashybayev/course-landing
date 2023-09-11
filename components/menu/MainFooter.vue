<template>
  <footer>
    <div class="container">
      <div class="footer">
        <div class="footer__list">
          <div class="footer__list-item">
            <div class="title">
              <be-logo/>
            </div>
            <a href="#" class="subtitle">
              <div class="d-with-icon">
                <address-icon/>
                <div>
                  <span>Адрес:</span> РК, город Алматы
                </div>
              </div>
            </a>
            <a href="#" class="subtitle">
              <div class="d-with-icon">
                <phoone-icon/>
                <div>
                  <span>Tel :</span> +705 685 8629
                </div>
              </div>
            </a>
            <a href="#" class="subtitle">
              <div class="d-with-icon">
                <clock-icon/>
                <div>
                  Рабочие время: 24/7
                </div>
              </div>
            </a>
            <a href="#" class="subtitle">
              <div class="d-with-icon">
                <email-icon/>
                <div>
                  <span>Email:</span> info@testhub.kz
                </div>
              </div>
            </a>
          </div>
          <div class="footer__list-item desktop">
            <div class="title">
              Услуги
            </div>
            <a href="#" class="subtitle">
              Тесты
            </a>
            <a href="#" class="subtitle">
              Индивидуальный план
            </a>
            <a href="#" class="subtitle">
              Курсы
            </a>
            <a href="#" class="subtitle">
              Инструменты
            </a>
          </div>
          <div class="footer__list-item desktop">
            <div class="title">
              Сотрудничество
            </div>
            <a href="#" class="subtitle">
              Для школ
            </a>
            <a href="#" class="subtitle">
              Родителям
            </a>
            <a href="#" class="subtitle">
              Преподавателям
            </a>
            <a href="#" class="subtitle">
              Инструкция
            </a>
          </div>
          <div class="footer__list-item desktop">
            <div class="title">
              Компания
            </div>
            <a href="#" class="subtitle">
              О нас
            </a>
            <a href="#" class="subtitle">
              Блог
            </a>
            <a href="#" class="subtitle">
              FAQ
            </a>
            <a href="#" class="subtitle">
              Контакты
            </a>
          </div>
        </div>
        <div class="footer__social">
          <a href="#">
            <telegram-icon/>
          </a>
          <a href="#">
            <instagram-icon/>
          </a>
          <a href="#">
            <facebook-icon/>
          </a>
          <a href="#">
            <whatsapp-icon/>
          </a>
        </div>
        <div class="footer__copyright">
          © 2023 Testhub. Все права защищены.
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">

import BeLogo from "~/components/el/BeLogo.vue";
import AddressIcon from "~/components/icons/AddressIcon.vue";
import PhooneIcon from "~/components/icons/PhooneIcon.vue";
import ClockIcon from "~/components/icons/ClockIcon.vue";
import EmailIcon from "~/components/icons/EmailIcon.vue";
import TelegramIcon from "~/components/icons/TelegramIcon.vue";
import InstagramIcon from "~/components/icons/InstagramIcon.vue";
import FacebookIcon from "~/components/icons/FacebookIcon.vue";
import WhatsappIcon from "~/components/icons/WhatsappIcon.vue";
</script>

<style scoped lang="scss">
@use "@/assets/scss/colors" as *;
@use "@/assets/scss/breakpoints" as *;

footer {
  background-image: url("@/assets/img/footer-bg.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding: 10rem 0 3rem;

  color: $primary;
  font-size: 14px;
  line-height: 16.44px;

  .d-with-icon {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    &:deep(svg) {
      width: 2.4rem;
      height: 2.4rem;
    }
  }

  .footer {
    &__list {
      display: flex;
      gap: 2rem;
      justify-content: space-between;

      &-item {
        .title {
          margin-bottom: 3rem;
          color: $color-28;
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: unset;
          line-height: 1.6rem;
        }

        .subtitle {
          display: block;
          color: inherit;
          font: inherit;

          &:hover {
            text-decoration: underline !important;
          }

          &:not(:last-child) {
            margin-bottom: 1.5rem;
          }

          span {
            font-weight: 500;
          }
        }
      }
    }

    &__social {
      margin-top: 4rem;
      display: flex;
      justify-content: center;
      gap: 2rem;

      a:hover {
        opacity: .8;
      }

      &:deep(svg) {
        width: 4.8rem;
        height: 4.8rem;
      }
    }

    &__copyright {
      margin-top: 2rem;
      display: flex;
      justify-content: center;
      color: $color-29;
      font-size: 1.4rem;
      line-height: 2.1rem;
    }
  }

  @media screen and (max-width: $mobile) {
    background-image: unset;
    background-color: $head-bg-color;
    padding: 3rem 0 1rem;
  }

  @media screen and (max-width: 670px) {
    .desktop {
      display: none;
    }
    .footer__list {
      justify-content: flex-start;
    }
  }
}
</style>
