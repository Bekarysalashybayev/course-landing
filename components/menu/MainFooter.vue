<template>
  <footer>
    <div class="container">
      <div class="footer">
        <div class="footer__list">
          <div class="footer__list-item">
            <div class="title">
              <be-logo/>
            </div>
            <a href="https://2gis.kz/almaty/geo/9430047375158324?m=76.958326%2C43.253854%2F16" target="_blank"
               class="subtitle">
              <div class="d-with-icon">
                <address-icon/>
                <div>
                  <span>
                    {{ $t('footer.contact.address.span_1') }}
                  </span>
                  {{ $t('footer.contact.address.span_2') }}
                </div>
              </div>
            </a>
            <a href="tel:77056858629" class="subtitle">
              <div class="d-with-icon">
                <phoone-icon/>
                <div>
                  <span>
                    {{ $t('footer.contact.phone.span_1') }}
                  </span>
                  {{ $t('footer.contact.phone.span_2') }}
                </div>
              </div>
            </a>
            <div class="subtitle">
              <div class="d-with-icon">
                <clock-icon/>
                <div>
                  <span>
                    {{ $t('footer.contact.time.span_1') }}
                  </span>
                  {{ $t('footer.contact.time.span_2') }}
                </div>
              </div>
            </div>
            <a href="mailto:info@testhub.kz" class="subtitle">
              <div class="d-with-icon">
                <email-icon/>
                <div>
                  <span>
                    {{ $t('footer.contact.email.span_1') }}
                  </span>
                  info@testhub.kz
                </div>
              </div>
            </a>
          </div>
          <div class="footer__list-item desktop">
            <div class="title">
              {{ $t('footer.service_1.title') }}
            </div>
            <a href="/test" class="subtitle">
              {{ $t('footer.service_1.text_1') }}
            </a>
            <a href="/plan" class="subtitle">
              {{ $t('footer.service_1.text_2') }}
            </a>
            <a href="/courses" class="subtitle">
              {{ $t('footer.service_1.text_3') }}
            </a>
            <a href="/instruments" class="subtitle">
              {{ $t('footer.service_1.text_4') }}
            </a>
          </div>
          <div class="footer__list-item desktop">
            <div class="title">
              {{ $t('footer.service_2.title') }}
            </div>
            <a href="/test" class="subtitle">
              {{ $t('footer.service_2.text_1') }}
            </a>
            <a href="/plan" class="subtitle">
              {{ $t('footer.service_2.text_2') }}
            </a>
            <a href="/courses" class="subtitle">
              {{ $t('footer.service_2.text_3') }}
            </a>
            <a href="/instruments" class="subtitle">
              {{ $t('footer.service_2.text_4') }}
            </a>
          </div>
          <div class="footer__list-item desktop">
            <div class="title">
              {{ $t('footer.service_3.title') }}
            </div>
            <a href="/test" class="subtitle">
              {{ $t('footer.service_3.text_1') }}
            </a>
            <a href="/plan" class="subtitle">
              {{ $t('footer.service_3.text_2') }}
            </a>
            <a href="/courses" class="subtitle">
              {{ $t('footer.service_3.text_3') }}
            </a>
            <a href="/instruments" class="subtitle">
              {{ $t('footer.service_3.text_4') }}
            </a>
          </div>
        </div>
        <div class="footer__social">
          <a href="https://web.telegram.org/" aria-label="telegram" target="_blank">
            <telegram-icon/>
          </a>
          <a href="https://www.instagram.com/" aria-label="instagram" target="_blank">
            <instagram-icon/>
          </a>
          <a href="https://ru-ru.facebook.com/" aria-label="facebook" target="_blank">
            <facebook-icon/>
          </a>
          <a href="https://web.whatsapp.com/" aria-label="whatsapp" target="_blank">
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

      }
    }

    .subtitle {
      display: block;
      color: inherit;
      font: inherit;

      &:not(:last-child) {
        margin-bottom: 1.5rem;
      }

      span {
        font-weight: 500;
      }
    }

    a:hover {
      text-decoration: underline !important;
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
