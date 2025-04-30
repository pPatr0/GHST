<template>
  <!-- Horní trojúhelník -->
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

  <!-- Obsah -->
  <div class="bg-secondary xl:h-[47rem] lg:h-[52rem] md:h-[90rem] h-[95rem] flex items-center lg:rounded-tr-[250px] md:rounded-tr-[175px] sm:rounded-tr-[150px] rounded-tr-[100px] lg:rounded-bl-[250px] md:rounded-bl-[175px] sm:rounded-bl-[150px] rounded-bl-[100px]">
  <div class="2xl:max-w-[1460px] xl:max-w-[1120px] lg:max-w-[875px] mx-auto w-full">
    <div class="text-center">
      <h2 class="font-sans text-4xl font-bold text-white lg:text-5xl">
        Co můžete očekávat
      </h2>
    </div>

    <div class="flex flex-col items-center gap-24 pt-20 lg:grid lg:grid-cols-3">
      <div
        v-for="(item, index) in features"
        :key="index"
        class="flex flex-col justify-between w-full h-[5.5rem] max-w-xs mx-auto text-left lg:max-w-md"
      >
        <h3 class="text-base font-bold text-white lg:text-xl unbounded">
          {{ item.title }}
        </h3>
        <p class="font-serif text-base text-white lg:text-base" :class="item.maxWidth">
          {{ item.text }}
        </p>
      </div>
    </div>
  </div>
</div>


  <!-- Dolní trojúhelník -->
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
</template>
  

<script setup>
const features = [
  {
    title: 'Vlastní design',
    text: 'Navrhneme řešení na míru – podle vašich představ, potřeb a stylu. Originalita, která vás odliší.',
    maxWidth: 'lg:max-w-[25rem] max-w-[25rem]',
  },
  {
    title: 'Udržitelná výroba',
    text: 'Vyrábíme s ohledem na planetu – šetrné materiály, méně odpadu a odpovědný přístup v každém kroku.',
    maxWidth: 'lg:max-w-[25rem] max-w-[25rem]',
  },
  {
    title: 'Žádná minimální objednávka',
    text: 'Objednej přesně tolik, kolik potřebuješ – bez limitů a zbytečného skladu navíc.',
    maxWidth: 'lg:max-w-[19rem] max-w-[19rem]',
  },
  {
    title: 'Všechno na jednom místě',
    text: 'Od návrhu po výrobu – všechno zvládneme u nás. Ušetříš čas, energii a starosti.',
    maxWidth: 'lg:max-w-[25rem] max-w-[25rem]',
  },
  {
    title: 'Rychlé dodání',
    text: 'Díky optimalizaci výroby a logistiky ti dodáme hotové produkty v krátkém čase.',
    maxWidth: 'lg:max-w-[25rem] max-w-[25rem]',
  },
  {
    title: 'Podpora na každém kroku',
    text: 'Jsme tu pro tebe – od prvního nápadu až po konečný produkt.',
    maxWidth: 'lg:max-w-[25rem] max-w-[25rem]',
  },
]
</script>

  