<template>
    <div class="lg:max-w-[1400px] md:max-w-[700px] mx-auto lg:pb-[38rem] md:pb-[5rem] pb-[6rem]">
        <div class="grid grid-cols-1 grid-rows-6 gap-6 lg:grid-cols-3 md:grid-cols-2 lg:grid-rows-4">
            <div
                v-for="(item, index) in cards"
                :key="index"
                class="flex items-start justify-center"
            >
                <div
                class="relative border-primary border-2 overflow-hidden w-full max-w-[300px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[472px] h-[300px] md:h-[350px] lg:h-[400px] xl:h-[472px]"
                :class="[item.cornerClass, item.theGap, item.cardFlip]"
                >
                <img :src="item.image" alt="toteBag" class="object-cover w-full h-full" :class="[item.cardFlip]"/>
                <div class="absolute p-4 text-base font-semibold text-center lg:text-xl md:text-xl" :class="[item.cornerTitle, item.cardFlip]">
                    <a href="referenceIndividual">
                      {{ item.title }}
                    </a>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const cards = [
  {
    image: "/img/toteBag.png",
    cornerClass: "lg:rounded-tr-[10rem] rounded-tr-[7rem] lg:rounded-bl-[10rem] rounded-bl-[7rem]",
    title: "Title 1",
    cornerTitle: "top-0",
    theGap: "relative",
  },
  {
    image: "/img/toteBag.png",
    cornerClass: "lg:rounded-tr-[10rem] rounded-tr-[7rem] lg:rounded-bl-[10rem] rounded-bl-[7rem]",
    title: "Title 2",
    cornerTitle: "top-0",
    theGap: "relative lg:top-60 md:top-0",
    cardFlip: "lg:scale-x-[1] md:scale-x-[-1] scale-x-[-1]"

  },
  {
    image: "/img/toteBag.png",
    cornerClass: "lg:rounded-tl-[10rem] rounded-tl-[7rem] lg:rounded-br-[10rem] rounded-br-[7rem]",
    title: "Title 3",
    cornerTitle: "top-0 right-0",
    theGap: "relative",
    cardFlip: "lg:scale-x-[1] md:scale-x-[1] scale-x-[-1]"
  },
  {
   image: "/img/toteBag.png",
    cornerClass: "lg:rounded-tl-[10rem] rounded-tl-[7rem] lg:rounded-br-[10rem] rounded-br-[7rem]",
    title: "Title 4",
    cornerTitle: "top-0 right-0",
    theGap: "relative",
    cardFlip: "lg:scale-x-[1] md:scale-x-[-1] scale-x-[1]"
  },
  {
    image: "/img/toteBag.png",
    cornerClass: "lg:rounded-tl-[10rem] rounded-tl-[7rem] lg:rounded-br-[10rem] rounded-br-[7rem]",
    title: "Title 5",
    cornerTitle: "top-0 right-0",
    theGap: "relative lg:top-60 md:top-0",
    cardFlip: "lg:scale-x-[1] md:scale-x-[-1] scale-x-[-1]"
  },
  {
    image: "/img/toteBag.png",
    cornerClass: "lg:rounded-tr-[10rem] rounded-tr-[7rem] lg:rounded-bl-[10rem] rounded-bl-[7rem]",
    title: "Title 6",
    cornerTitle: "top-0",
    theGap: "relative lg:top-60 md:top-0",
    cardFlip: "lg:scale-x-[1] md:scale-x-[-1] scale-x-[-1]"
  },
  {
    image: "/img/toteBag.png",
    cornerClass: "lg:rounded-tl-[10rem] rounded-tl-[7rem] lg:rounded-br-[10rem] rounded-br-[7rem]",
    title: "Title 7",
    cornerTitle: "top-0 right-0",
    theGap: "relative lg:top-60 md:top-0",
    cardFlip: "lg:scale-x-[1] md:scale-x-[1] scale-x-[-1]"
  },
  {
    image: "/img/toteBag.png",
    cornerClass: "lg:rounded-tr-[10rem] rounded-tr-[7rem] lg:rounded-bl-[10rem] rounded-bl-[7rem]",
    title: "Title 8",
    cornerTitle: "top-0",
    theGap: "relative lg:top-60 md:top-0",
    cardFlip: "lg:scale-x-[1] md:scale-x-[1] scale-x-[-1]"
  },
  {
    image: "/img/toteBag.png",
    cornerClass: "lg:rounded-tl-[10rem] rounded-tl-[7rem] lg:rounded-br-[10rem] rounded-br-[7rem]",
    title: "Title 9",
    cornerTitle: "top-0 right-0",
    theGap: "relative lg:top-60 md:top-0",
    cardFlip: "lg:scale-x-[1] md:scale-x-[-1] scale-x-[-1]"
  },
  {
    image: "/img/toteBag.png",
    cornerClass: "lg:rounded-tr-[10rem] rounded-tr-[7rem] lg:rounded-bl-[10rem] rounded-bl-[7rem]",
    title: "Title 10",
    cornerTitle: "top-0",
    theGap: "relative lg:top-60 md:top-0",
    cardFlip: "lg:scale-x-[1] md:scale-x-[-1] scale-x-[-1]"
  },
  {
    image: "/img/toteBag.png",
    cornerClass: "lg:rounded-tr-[10rem] rounded-tr-[7rem] lg:rounded-bl-[10rem] rounded-bl-[7rem]",
    title: "Title 11",
    cornerTitle: "top-0",
    theGap: "relative lg:top-[30rem] md:top-0",
    cardFlip: "lg:scale-x-[1] md:scale-x-[-1] scale-x-[1]"
  },
  {
    image: "/img/toteBag.png",
    cornerClass: "lg:rounded-tr-[10rem] rounded-tr-[7rem] lg:rounded-bl-[10rem] rounded-bl-[7rem]",
    title: "Title 12",
    cornerTitle: "top-0",
    theGap: "relative lg:top-60 md:top-0",
    cardFlip: "lg:scale-x-[1] md:scale-x-[1] scale-x-[-1]"
  }
];
</script>