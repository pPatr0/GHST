<template>
    <div class="2xl:max-w-[1460px] xl:max-w-[1120px] lg:max-w-[875px] md:max-w-[780px] max-w-[400px] mx-auto lg:-my-24 md:-my-10 -my-8 px-4 lg:pb-28 md:pb-16 pb-16">
        <div class="flex flex-col items-center lg:justify-between md:justify-between lg:flex-row md:flex-row">
            <div class="lg:order-1 md:order-1 order-2 lg:rounded-t-[10rem] rounded-t-[4rem] lg:rounded-bl-[10rem] rounded-bl-[4rem] border-2 border-primary lg:max-w-[595px] lg:h-[595px] md:max-w-[400px] md:h-[350px] w-ful h-auto lg:m-4 md:m-4 m-1">
                <img src="/img/about/howStartSection.jpg" alt="jakZacitObrazek" class="lg:rounded-t-[10rem] rounded-t-[4rem] lg:rounded-bl-[10rem] rounded-bl-[4rem] object-cover w-full h-full">
            </div>
            <div class="flex flex-col order-1 lg:order-2 md:order-2">
                <h2 class="font-sans text-3xl font-bold md:text-4xl text-primary lg:text-5xl">
                    Jak začít?
                </h2>
                <p class="max-w-md pt-4 pb-4 font-serif text-base lg:pt-12 md:pt-8 lg:max-w-xl lg:text-xl md:text-md lg:pb-0 md:pb-0">
                    Stačí nás kontaktovat a o zbytek už se postaráme. Nabízíme spolehlivý servis od vytvoření jedinečného designu až po doručení hotových produktů na Vaši adresu.<br><br>Začít můžete ted’ hned! Zjistite jak probíhá spolupráce nebo nás kontaktujte.                
                </p>
                <div class="flex flex-col w-full gap-2 pt-8 pb-8 text-xs font-bold lg:pt-20 md:pt-8 lg:flex-row lg:gap-5 unbounded lg:text-base lg:w-full">
                    <button class="w-full px-8 py-3 text-white transition-all ease-in-out border-2 bg-secondary border-secondary rounded-tr-2xl rounded-bl-2xl lg:w-auto hover:bg-transparent hover:text-secondary">
                        <NuxtLink to="/enquiry">Na Poptávku</NuxtLink>
                    </button>
                    <button class="w-full px-8 py-3 transition-all ease-in-out border-2 border-primary rounded-tl-2xl rounded-br-2xl text-primary lg:w-auto hover:bg-primary hover:text-white">
                        <NuxtLink to="/about">Zjistěte něco o nás</NuxtLink>
                    </button>
                </div>
            </div>
        </div>
    </div>
  </template>
  