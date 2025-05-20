<template>
  <div>
    <div class="text-white bg-rose h-[1.2rem]"></div>
    <div class="py-6 border-b-4 border-primary">
      <div class="max-w-[1700px] mx-auto">
        <div class="items-center justify-between hidden lg:flex md:flex">
          <div class="font-sans text-4xl font-bold">
            <NuxtLink to="/">
              <img src="/img/ghstLogo.png" alt="ghstLogo" class="w-2/3 h-auto"/>
            </NuxtLink>
          </div>
          <div class="space-x-24">
            <NuxtLink
              to="/reference"
              :class="[$route.path === '/reference' ? 'text-secondary' : 'text-black', 'hover:text-secondary transition']"
            >
              Reference
            </NuxtLink>
            <NuxtLink
              to="/enquiry"
              :class="[$route.path === '/enquiry' ? 'text-secondary' : 'text-black', 'hover:text-secondary transition']"
            >
              Poptávka
            </NuxtLink>
            <NuxtLink
              to="/about"
              :class="[$route.path === '/about' ? 'text-secondary' : 'text-black', 'hover:text-secondary transition']"
            >
              O nás
            </NuxtLink>
            <NuxtLink
              to="/contact"
              :class="[$route.path === '/contact' ? 'text-secondary' : 'text-black', 'hover:text-secondary transition']"
            >
              Kontakt
            </NuxtLink>
          </div>
          <div>
            <img src="/img/userIcon.png" alt="userIcon" />
          </div>
        </div>
      </div>
    </div>
</div>
</template>
