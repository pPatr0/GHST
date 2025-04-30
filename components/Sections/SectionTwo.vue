<template>
  <div class="max-w-[300px] md:max-w-[700px] lg:max-w-[1500px] mx-auto py-20">
    <div>
      <h2 class="pb-20 text-4xl font-bold text-center text-primary lg:text-5xl unbounded lg:text-left">
        Vytvoříme pro Vás
      </h2>
    </div>
  
    <div class="grid grid-cols-1 gap-4 px-4 mx-auto md:gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3 md:place-content-center md:max-w-fit">
      <div
        v-for="(item, index) in cards"
        :key="index"
        class="relative border-primary border-2 overflow-hidden w-full max-w-[300px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[472px] h-[300px] md:h-[350px] lg:h-[400px] xl:h-[472px]"
        :class="[item.cornerClass, item.order]"
      >
        <img :src="item.image" alt="toteBag" class="object-cover w-full h-full" />
        <svg
          class="absolute top-10 right-10 z-10 w-[30px] h-[30px] md:w-[35px] md:h-[35px] lg:w-[40px] lg:h-[40px] lg:top-16 lg:right-16 xl:w-[40px] xl:h-[40px]"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20" cy="20" r="20" fill="#12170F" />
          <path
            d="M26.25 13.75L13.75 26.25"
            stroke="#959698"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M26.25 25L26.25 13.75L15 13.75"
            stroke="#959698"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  </div>
</template>
  
<script setup>
const cards = [
  {
    image: "/img/toteBag.png",
    cornerClass: "lg:rounded-tr-[10rem] rounded-tr-[7rem] lg:rounded-bl-[10rem] rounded-bl-[7rem]",
    order: "lg:order-none order-none md:order-1"
  },
  {
    image: "/img/toteBag.png",
    cornerClass: "lg:rounded-tl-[10rem] rounded-tl-[7rem] lg:rounded-br-[10rem] rounded-br-[7rem]",
    order: "lg:order-none order-none md:order-2"
  },
  {
    image: "/img/toteBag.png",
    cornerClass: "lg:rounded-tr-[10rem] rounded-tr-[7rem] lg:rounded-bl-[10rem] rounded-bl-[7rem]",
    order: "lg:order-none order-none md:order-4"
  },
  {
    image: "/img/toteBag.png",
    cornerClass: "lg:rounded-tl-[10rem] rounded-tl-[7rem] lg:rounded-br-[10rem] rounded-br-[7rem]",
    order: "lg:order-none order-none md:order-3"
  },
  {
    image: "/img/toteBag.png",
    cornerClass: "lg:rounded-tr-[10rem] rounded-tr-[7rem] lg:rounded-bl-[10rem] rounded-bl-[7rem]",
    order: "lg:order-none order-none md:order-5"
  },
  {
    image: "/img/toteBag.png",
    cornerClass: "lg:rounded-tl-[10rem] rounded-tl-[7rem] lg:rounded-br-[10rem] rounded-br-[7rem]",
    order: "lg:order-none order-none md:order-6"
  },
];
</script>
