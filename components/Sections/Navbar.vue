<script setup>
import { ref } from 'vue'

const showMobileMenu = ref(false)
</script>

<template>
  <div>
    <!-- Horní růžová linka -->
    <div class="text-white bg-rose h-[1.2rem]"></div>

    <!-- Navigační lišta -->
    <div class="py-6 border-b-4 border-primary">
      <div class="lg:max-w-[1700px] md:max-w-[780px] max-w-[400px] mx-auto lg:px-0 md:px-0 px-4">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <div class="font-sans text-4xl font-bold">
            <NuxtLink to="/">
              <img src="/img/ghstLogo.png" alt="ghstLogo" class="w-2/3 h-auto"/>
            </NuxtLink>
          </div>

          <!-- Desktop odkazy -->
          <div class="hidden space-x-24 lg:flex">
            <NuxtLink
              to="/reference"
              :class="[$route.path === '/reference' ? 'text-secondary' : 'text-primary', 'hover:text-secondary transition']"
            >
              Reference
            </NuxtLink>
            <NuxtLink
              to="/enquiry"
              :class="[$route.path === '/enquiry' ? 'text-secondary' : 'text-primary', 'hover:text-secondary transition']"
            >
              Poptávka
            </NuxtLink>
            <NuxtLink
              to="/about"
              :class="[$route.path === '/about' ? 'text-secondary' : 'text-primary', 'hover:text-secondary transition']"
            >
              O nás
            </NuxtLink>
            <NuxtLink
              to="/contact"
              :class="[$route.path === '/contact' ? 'text-secondary' : 'text-primary', 'hover:text-secondary transition']"
            >
              Kontakt
            </NuxtLink>
          </div>

          <!-- Mobile ikona a user icon -->
          <div class="flex items-center">
            <div class="flex mr-2 lg:hidden">
              <button @click="showMobileMenu = !showMobileMenu">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#12170F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M4 20h16" />
                  <path d="M4 12h16" />
                  <path d="M4 4h16" />
                </svg>
              </button>
            </div>
            <div>
              <img src="/img/userIcon.png" alt="userIcon" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Dropdown menu (mobilní) -->
    <div v-if="showMobileMenu" class="bg-white border-b-4 lg:hidden border-primary">
      <div class="flex flex-col items-center py-4 space-y-4">
        <NuxtLink
          to="/reference"
          @click="showMobileMenu = false"
          :class="[$route.path === '/reference' ? 'text-secondary' : 'text-primary', 'hover:text-secondary transition']"
        >
          Reference
        </NuxtLink>
        <NuxtLink
          to="/enquiry"
          @click="showMobileMenu = false"
          :class="[$route.path === '/enquiry' ? 'text-secondary' : 'text-primary', 'hover:text-secondary transition']"
        >
          Poptávka
        </NuxtLink>
        <NuxtLink
          to="/about"
          @click="showMobileMenu = false"
          :class="[$route.path === '/about' ? 'text-secondary' : 'text-primary', 'hover:text-secondary transition']"
        >
          O nás
        </NuxtLink>
        <NuxtLink
          to="/contact"
          @click="showMobileMenu = false"
          :class="[$route.path === '/contact' ? 'text-secondary' : 'text-primary', 'hover:text-secondary transition']"
        >
          Kontakt
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
