<template>
    <div class="lg:max-w-[1460px] md:max-w-[700px] max-w-[300px] mx-auto lg:pb-20 md:pb-20 pb-12 lg:pt-20 md:pt-20 pt-12">
      <div class="flex flex-col items-center justify-between px-0 lg:px-4 lg:flex-row">
        <div class="w-full pb-0 lg:w-1/2 lg:pb-16">
          <h1 class="xl:text-[62px] lg:text-[40px] text-3xl xl:leading-[5rem] lg:leading-[4rem] leading-[2.5rem] unbounded font-bold text-primary xl:max-w-2xl lg:max-w-md max-w-[16rem]">
            Oblečení, které vás reprezentuje
          </h1>
          <p class="lg:text-2xl text-base lg:max-w-xl md:max-w-sm font-serif lg:py-7 py-4 lg:leading-[2.4rem] leading-[1.5rem]">
            Tvoříme na zakázku pro firmy, které dbají na styl, kvalitu a odlišení se od konkurence
          </p>
          <div class="flex lg:flex-row flex-col lg:gap-5 gap-2 unbounded font-bold lg:text-base text-xs lg:w-full w-[14rem]">
            <button class="px-8 py-3 text-white bg-secondary rounded-tr-2xl rounded-bl-2xl">
              Objednejte nyní
            </button>
            <button class="px-8 py-3 border-2 border-primary rounded-tl-2xl rounded-br-2xl text-primary">
              Zjistěte něco o nás
            </button>
          </div>
        </div>
  
        <!-- Second section (kytky + tričko) -->
        <div class="flex justify-center w-full pt-10 lg:w-1/2 lg:pt-0 md:pt-0">
            <div class="relative flex justify-center items-center w-full sm:h-[16rem] md:h-[30rem] lg:h-[39rem] overflow-visible">
                <div class="absolute inset-0 bg-[url('/img/kytky.svg')] bg-center bg-no-repeat bg-contain pointer-events-none"></div>
                <img src="/img/tricko.png" alt="tricko" class="z-10 w-[220px] md:w-[275px] lg:w-[300px] xl:w-[400px] mx-auto xl:ml-60 lg:ml-48 md:ml-56 ml-10 lg:mt-8">
            </div>
        </div>
      </div>
    </div>
  </template>