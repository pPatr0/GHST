<template>
    <div class="lg:max-w-[1460px] max-w-[300px] mx-auto py-20">
      <div>
        <h2 class="pb-20 text-4xl font-bold text-center text-primary lg:text-5xl unbounded lg:text-left">
          Vytvoříme pro Vás
        </h2>
      </div>
  
      <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-stretch">
        <div
          v-for="(item, index) in cards"
          :key="index"
          class="relative border-primary border-2 overflow-hidden lg:h-[472px] h-[300px] lg:w-[472px] w-[300px]"
          :class="item.cornerClass"
        >
          <img :src="item.image" alt="toteBag" class="object-cover w-full h-full" />
          <svg
            class="absolute lg:top-16 top-10 lg:right-16 right-10 z-10 lg:w-[40px] w-[30px] lg:h-[40px] h-[30px]"
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
    },
    {
      image: "/img/toteBag.png",
      cornerClass: "lg:rounded-tl-[10rem] rounded-tl-[7rem] lg:rounded-br-[10rem] rounded-br-[7rem]",
    },
    {
      image: "/img/toteBag.png",
      cornerClass: "lg:rounded-tr-[10rem] rounded-tr-[7rem] lg:rounded-bl-[10rem] rounded-bl-[7rem]",
    },
    {
      image: "/img/toteBag.png",
      cornerClass: "lg:rounded-tl-[10rem] rounded-tl-[7rem] lg:rounded-br-[10rem] rounded-br-[7rem]",
    },
    {
      image: "/img/toteBag.png",
      cornerClass: "lg:rounded-tr-[10rem] rounded-tr-[7rem] lg:rounded-bl-[10rem] rounded-bl-[7rem]",
    },
    {
      image: "/img/toteBag.png",
      cornerClass: "lg:rounded-tl-[10rem] rounded-tl-[7rem] lg:rounded-br-[10rem] rounded-br-[7rem]",
    },
  ];
  </script>
  