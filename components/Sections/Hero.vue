<template>
    <div class="xl:max-w-[1460px] lg:max-w-[1020px] md:max-w-[700px] max-w-[300px] mx-auto lg:pb-20 md:pb-20 pb-12 lg:pt-20 md:pt-20 pt-12">
      <div class="flex flex-col items-center justify-between px-0 lg:px-4 lg:flex-row">
        <div class="flex flex-col items-center w-full pb-0 lg:items-start lg:w-1/2 lg:pb-16">
          <h1 class="xl:text-[62px] lg:text-[40px] text-2xl xl:leading-[5rem] lg:leading-[4rem] leading-[2.5rem] unbounded font-bold text-primary xl:max-w-2xl lg:max-w-md md:max-w-lg max-w-md lg:text-left md:text-center text-left">
            Oblečení, které vás reprezentuje
          </h1>
          <p class="lg:text-2xl text-base lg:max-w-xl md:max-w-sm font-serif lg:py-7 py-2 lg:leading-[2.4rem] leading-[1.5rem] lg:text-left md:text-center text-left">
            Tvoříme na zakázku pro firmy, které dbají na styl, kvalitu a odlišení se od konkurence
          </p>
          <div class="flex flex-col w-full gap-2 text-xs font-bold lg:flex-row lg:gap-5 unbounded lg:text-base lg:max-w-xl md:max-w-md">
            <button class="w-full px-8 py-3 text-white transition-all ease-in-out border-2 duration-400 bg-secondary border-secondary rounded-tr-2xl rounded-bl-2xl lg:w-auto hover:bg-transparent hover:text-secondary">
              <NuxtLink to="/enquiry">Na Poptávku</NuxtLink>
            </button>
            <button class="w-full px-8 py-3 transition-all ease-in-out border-2 duration-400 border-primary rounded-tl-2xl rounded-br-2xl text-primary lg:w-auto hover:bg-primary hover:text-white">
              <NuxtLink to="/about">Zjistěte něco o nás</NuxtLink>
            </button>
          </div>


        </div>
  
        <!-- Second section (kytky + tričko) -->
        <div class="flex justify-center w-full pt-10 lg:w-1/2 lg:pt-0 md:pt-0">
            <div class="relative flex justify-center items-center w-full sm:h-[16rem] md:h-[30rem] lg:h-[39rem] overflow-visible px-8">
                <div class="absolute inset-0 bg-[url('/img/flowersBg.svg')] bg-center bg-no-repeat bg-contain pointer-events-none mt-2"></div>
                <img src="/img/tshirt.png" alt="tricko" class="z-10 w-[320px] md:w-[460px] lg:w-[580px] xl:w-[640px] mx-auto xl:ml-20 lg:ml-16 md:ml-28 ml-8 lg:mt-8">
            </div>
        </div>
      </div>
    </div>
  </template>