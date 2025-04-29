<template>
    <div
      class="w-full lg:h-[1260px] h-[1538px] flex items-center justify-center lg:-mb-56
             lg:-mt-60 py-20 bg-no-repeat bg-bottom bg-cover
             bg-[url('img/sekceJedna-mobile.svg')] 
             lg:bg-[url('img/sekceJedna.svg')]"
    >
      <div class="max-w-[1460px] mx-auto w-full">
        <div class="text-center">
          <h2 class="font-sans text-4xl font-bold text-white lg:text-5xl">
            Co můžete očekávat
          </h2>
        </div>
  
        <div class="flex flex-col items-center gap-24 pt-20 lg:grid lg:grid-cols-3">
          <div
            v-for="(item, index) in features"
            :key="index"
            class="w-full h-full max-w-xs space-y-3 lg:max-w-md"
          >
            <div class="flex justify-between">
              <h3 class="text-lg font-bold text-white lg:text-2xl unbounded">{{ item.title }}</h3>
              <svg class="lg:w-[40px] w-[30px] lg:h-[40px] h-[30px]" viewBox="0 0 40 40" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" fill="white" />
                <path d="M26.25 13.75L13.75 26.25" stroke="#5F2C85" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
                <path d="M26.25 25L26.25 13.75L15 13.75" stroke="#5F2C85" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </div>
            <p class="font-serif text-sm text-white lg:text-base" :class="item.maxWidth">
              {{ item.text }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>

<script setup>
const features = [
  {
    title: 'Vlastní design',
    text: 'Navrhneme řešení na míru – podle vašich představ, potřeb a stylu. Originalita, která vás odliší.',
    maxWidth: 'lg:max-w-[25rem] max-w-[18rem]',
  },
  {
    title: 'Udržitelná výroba',
    text: 'Vyrábíme s ohledem na planetu – šetrné materiály, méně odpadu a odpovědný přístup v každém kroku.',
    maxWidth: 'lg:max-w-[25rem] max-w-[18rem]',
  },
  {
    title: 'Žádná minimální objednávka',
    text: 'Objednej přesně tolik, kolik potřebuješ – bez limitů a zbytečného skladu navíc.',
    maxWidth: 'lg:max-w-[19rem] max-w-[16rem]',
  },
  {
    title: 'Všechno na jednom místě',
    text: 'Od návrhu po výrobu – všechno zvládneme u nás. Ušetříš čas, energii a starosti.',
    maxWidth: 'lg:max-w-[25rem] max-w-[18rem]',
  },
  {
    title: 'Rychlé dodání',
    text: 'Díky optimalizaci výroby a logistiky ti dodáme hotové produkty v krátkém čase.',
    maxWidth: 'lg:max-w-[25rem] max-w-[18rem]',
  },
  {
    title: 'Podpora na každém kroku',
    text: 'Jsme tu pro tebe – od prvního nápadu až po konečný produkt.',
    maxWidth: 'lg:max-w-[25rem] max-w-[16rem]',
  },
]
</script>

  