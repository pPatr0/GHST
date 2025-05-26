<template>
  <div class="-mt-20 -mb-16 lg:-mt-36 lg:-mb-44 md:-mt-40 md:-mb-24">
    <div class="flex justify-start w-full overflow-hidden">
      <svg
        viewBox="0 0 250 250"
        class="lg:w-[250px] md:w-[175px] sm:w-[150px] w-[100px] max-w-[250px] h-auto"
        preserveAspectRatio="xMinYMin meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0C0 138.071 111.929 250 250 250L0 250V0Z" fill="#5F2C85" />
      </svg>
    </div>
    <div class="bg-secondary xl:h-[47rem] lg:h-[52rem] md:h-[90rem] h-[85rem] flex items-center lg:rounded-tr-[250px] md:rounded-tr-[175px] sm:rounded-tr-[150px] rounded-tr-[100px] lg:rounded-bl-[250px] md:rounded-bl-[175px] sm:rounded-bl-[150px] rounded-bl-[100px]">
      <div class="2xl:max-w-[1460px] xl:max-w-[1120px] lg:max-w-[1020px] mx-auto w-full">
        <div class="text-center">
          <h2 class="font-sans text-4xl font-bold text-white lg:text-5xl">
            Co můžete očekávat
          </h2>
        </div>

        <div class="flex flex-col items-center gap-20 px-2 pt-20 xl:gap-24 lg:gap-14 lg:grid lg:grid-cols-3">
          <div
            v-for="(item, index) in features"
            :key="index"
            class="flex  justify-between w-full h-[5.5rem] md:max-w-lg max-w-xs mx-auto text-left lg:max-w-md"
          >
            <div>
              <h3 class="pb-4 text-base font-bold text-white lg:text-xl md:text-xl unbounded">
              {{ item.title }}
              </h3>
              <p class="font-serif text-base text-white lg:text-base" :class="item.maxWidth">
                {{ item.text }}
              </p>
            </div>
            <div class="ml-4">
              <img :src="Object.values(images[0])[index]" alt="Ikona" class="object-contain w-[42px] h-[42px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-end w-full overflow-hidden">
      <svg
        viewBox="0 0 250 250"
        class="lg:w-[250px] md:w-[175px] sm:w-[150px] w-[100px] max-w-[250px] h-auto"
        preserveAspectRatio="xMaxYMax meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M250 250C250 111.929 138.071 0 0 0H250V250Z" fill="#5F2C85" />
      </svg>
    </div>
  </div>
</template>
  

<script setup>
const features = [
  {
    title: 'Vlastní design',
    text: 'Navrhujeme originální designy podle vašeho stylu a firemní identity.',
    maxWidth: 'lg:max-w-[22rem] max-w-[22rem]',
  },
  {
    title: 'Všechno na jednom místě',
    text: 'Zajistíme návrh, výrobu i logistiku. Nemusíte nic řešit s více dodavateli.',
    maxWidth: 'lg:max-w-[20rem] max-w-[20rem]',
  },
  {
    title: 'Udržitelná výroba',
    text: 'Šetrné materiály, méně odpadu a férové podmínky.',
    maxWidth: 'lg:max-w-[22rem] max-w-[22rem]',
  },
  {
    title: 'Flexibilita bez limitů',
    text: 'Žádné minimální odběry. Přizpůsobíme se vašim potřebám – ať už potřebujete 5 nebo 500 kusů.',
    maxWidth: 'lg:max-w-[24rem] max-w-[24rem]',
  },
  {
    title: 'Férový přístup',
    text: 'Jsme transparentní a držíme slovo. Zakázky řešíme rychle a spolehlivě.',
    maxWidth: 'lg:max-w-[20rem] max-w-[20rem]',
  },
  {
    title: 'Kvalita, která vydrží',
    text: 'Precizní zpracování, které zaujme. \n Váš merch bude reprezentovat vaši značku.',
    maxWidth: 'lg:max-w-[20rem] max-w-[20rem]',
  },
]

const images = [
  {
    imageOne: '/img/iconOne.png',
    imageTwo: '/img/iconTwo.png',
    imageThree: '/img/iconThree.png',
    imageFour: '/img/iconFour.png',
    imageFive: '/img/iconFive.png',
    imageSix: '/img/iconSix.png',
  }
]
</script>

  