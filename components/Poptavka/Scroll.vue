<template>
    <div class="mx-auto lg:max-w-[1142px] md:max-w-[1142px] max-w-[380px] lg:-mt-20 md:-mt-20 -mt-10">
      <div class="flex justify-center space-x-0 xl:space-x-40 lg:space-x-16 md:space-x-8">
        <!-- levý sloupec s květinou a čárou -->
        <div class="relative flex-col items-center hidden lg:flex md:flex">
          <img src="/img/movingFlower.svg" alt="movingFlower" class="z-10 xl:h-[200px] w-auto lg:h-[165px] md:h-[115px]">
          <svg width="3" viewBox="0 0 2 1942" fill="none" xmlns="http://www.w3.org/2000/svg" class="-mt-2 xl:h-[1942px] lg:h-[1720px] md:h-[1220px]">
            <line x1="1" y1="4.37114e-08" x2="0.999915" y2="1942" stroke="#12170F" stroke-width="3" />
          </svg>
        </div>
  
        <!-- pravý sloupec s kroky -->
        <div class="flex flex-col justify-between pt-0 space-y-10 xl:pt-20 lg:pt-16 md:pt-16 lg:space-y-0 md:space-y-0 text-primary">
          <div
            v-for="(step, index) in steps"
            :key="index"
            class="flex flex-col xl:max-w-3xl lg:max-w-xl md:max-w-lg"
          >
            <h2 class="xl:text-5xl lg:text-4xl md:text-3xl text-xl font-bold xl:leading-[4rem] lg:leading-[4rem] md:leading-[3rem] xl:pb-8 lg:pb-4 md:pb-4 pb-2">
              {{ (index + 1).toString().padStart(2, '0') }}<br>
              {{ step.title }}
            </h2>
            <p class="font-serif xl:text-3xl lg:text-2xl">
              {{ step.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const steps = [
    {
      title: 'Úvodní konzultace',
      description:
        'Začneme nezávaznou schůzkou nebo hovorem, kde si vyslechneme vaše představy, potřeby a cíle. Poradíme s výběrem produktů, technologií a stylu, který bude vaší značce sedět.'
    },
    {
      title: 'Návrh řešení',
      description:
        'Navrhneme vizuál i konkrétní produkty, které odpovídají vaší identitě. Spojujeme design s funkčností tak, aby merch zaujal a zároveň fungoval — ať už ho rozdáváte, nebo prodáváte.'
    },
    {
      title: 'Cenová nabídka',
      description:
        'Připravíme férovou kalkulaci podle rozsahu zakázky. Vysvětlíme, co vše cena zahrnuje, a nabídneme varianty podle vašeho rozpočtu. U nás víte, za co platíte.'
    },
    {
      title: 'Výroba',
      description:
        'Po odsouhlasení návrhu spouštíme výrobu. Spolupracujeme s ověřenými partnery a garantujeme kontrolu kvality v každém kroku. Výsledkem je merch, který vydrží a vypadá skvěle.'
    },
    {
      title: 'Dodání',
      description:
        'Zboží dodáme v dohodnutém termínu. Nabízíme expresní dodání i rozdělené zásilky. Umíme se přizpůsobit, ať už potřebujete stovky kusů na akci, nebo pravidelné dodávky.'
    }
  ]
  </script>
  