<template>
    <div class="lg:max-w-[1460px] max-w-[300px] mx-auto py-20">
        <div class="flex flex-col items-center justify-between lg:flex-row">
            <div class="w-full pb-0 lg:w-1/2 lg:pb-16">
                <h1 class="lg:text-[62px] text-4xl lg:leading-[5rem] leading-[3rem] unbounded font-bold text-primary lg:max-w-2xl max-w-xs">
                    Oblečení, které vás reprezentuje
                </h1>
                <p class="lg:text-2xl text-base max-w-xl font-serif lg:py-7 py-4 lg:leading-[2.4rem] leading-[1.5rem]">
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
            <div class="w-full lg:w-1/2">
                <div class="relative flex justify-center items-center bg-[url('/img/kytky.svg')] bg-center bg-no-repeat h-[26rem] sm:h-[32rem] md:h-[36rem] lg:h-[39rem] bg-contain">
                  <img src="/img/tricko.png" alt="tricko" class="z-10 max-h-full mt-4 ml-12 sm:mt-6 md:mt-8 lg:mt-8 md:ml-16 lg:ml-32">
                </div>
              </div>              
        </div>
    </div>
</template>