<template>
    <SectionsNavbar/>
    <ReferenceTitleReference/>
    <div class="lg:max-w-[1400px] md:max-w-[700px] max-w-[375px] mx-auto lg:space-y-6 space-y-4">
        <div class="flex flex-col px-4 space-x-0 lg:space-x-6 lg:flex-row">
            <div
                class="border-primary border-2 overflow-hidden lg:w-1/2 w-full xl:h-[720px] lg:h-[640px]
                md:h-[400px] h-[240px] lg:rounded-tl-[10rem] md:rounded-tl-[6rem] rounded-tl-[3rem] lg:rounded-br-[10rem] md:rounded-br-[6rem] rounded-br-[3rem]"
                >
                <img :src="data.images.image1" alt="toteBag" class="object-cover w-full h-full">
            </div>
            <div class="flex flex-col justify-between w-full space-y-6 lg:w-1/2 lg:space-y-0">
                <div>
                    <h2 class="pt-6 font-sans text-3xl font-bold text-left lg:pt-0 lg:text-4xl text-primary xl:text-5xl">
                    {{data.title}}
                    </h2>
                </div>
                <div>
                    <p class="font-serif text-sm text-primary lg:text-base md:text-base" v-html="data.description.replace(/\n/g, '<br><br>')">
                       
                    </p>
                </div>
                <div class="flex w-full pt-0 space-x-4 lg:space-x-6 lg:pt-0">
                    <div class=" border-primary border-2 overflow-hidden w-full xl:h-[348px] lg:h-[288px]  md:h-[300px] h-[150px] lg:rounded-tr-[7rem] md:rounded-tr-[6rem] rounded-tr-[3rem] lg:rounded-bl-[7rem] md:rounded-bl-[6rem] rounded-bl-[3rem]">
                        <img :src="data.images.image2" alt="toteBag" class="object-cover w-full h-full">
                    </div>
                    <div class="relative border-primary border-2 overflow-hidden w-full xl:h-[348px] lg:h-[288px]  md:h-[300px] h-[150px] lg:rounded-tl-[7rem] md:rounded-tl-[6rem] rounded-tl-[3rem] lg:rounded-br-[7rem] md:rounded-br-[6rem] rounded-br-[3rem]" >
                        <img :src="data.images.image3" alt="toteBag" class="object-cover w-full h-full">
                    </div>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-4 px-4 lg:gap-6 lg:grid-cols-4">
            <div class=" border-primary border-2 overflow-hidden w-auto xl:h-[348px] lg:h-[288px] md:h-[300px] h-[150px] lg:rounded-tl-[7rem] md:rounded-tl-[6rem] rounded-tl-[3rem] lg:rounded-br-[7rem] md:rounded-br-[6rem] rounded-br-[3rem] lg:order-1 order-1">
                <img src="/img/toteBag.png" alt="toteBag" class="object-cover w-full h-full">
            </div>
            <div class="relative border-primary border-2 overflow-hidden w-auto xl:h-[348px] lg:h-[288px] md:h-[300px] h-[150px] lg:rounded-tr-[7rem] md:rounded-tr-[6rem] rounded-tr-[3rem] lg:rounded-bl-[7rem] md:rounded-bl-[6rem] rounded-bl-[3rem] lg:order-2 order-2">
                <img src="/img/toteBag.png" alt="toteBag" class="object-cover w-full h-full">
            </div>
            <div class=" border-primary border-2 overflow-hidden w-auto xl:h-[348px] lg:h-[288px] md:h-[300px] h-[150px] lg:rounded-tl-[7rem] md:rounded-tl-[6rem] rounded-tl-[3rem] lg:rounded-br-[7rem] md:rounded-br-[6rem] rounded-br-[3rem] lg:order-3 order-4">
                <img src="/img/toteBag.png" alt="toteBag" class="object-cover w-full h-full">
            </div>
            <div class="relative border-primary border-2 overflow-hidden w-auto xl:h-[348px] lg:h-[288px] md:h-[300px] h-[150px] lg:rounded-tr-[7rem] md:rounded-tr-[6rem] rounded-tr-[3rem] lg:rounded-bl-[7rem] md:rounded-bl-[6rem] rounded-bl-[3rem] lg:order-4 order-3">
                <img src="/img/toteBag.png" alt="toteBag" class="object-cover w-full h-full">
            </div>
        </div>

        <div class="flex flex-col gap-4 px-4 lg:gap-6 lg:flex-row">
            <div class="flex flex-col justify-between order-2 w-full gap-4 lg:w-1/2 lg:order-1 lg:gap-0">
                <div class="flex pt-0 space-x-4 lg:space-x-6 lg:pt-0">
                    <div class=" border-primary border-2 overflow-hidden w-auto xl:h-[348px] lg:h-[288px]  md:h-[300px] h-[150px] lg:rounded-tr-[7rem] md:rounded-tr-[6rem] rounded-tr-[3rem] lg:rounded-bl-[7rem] md:rounded-bl-[6rem] rounded-bl-[3rem]">
                        <img src="/img/toteBag.png" alt="toteBag" class="object-cover w-full h-full">
                    </div>
                    <div class="relative border-primary border-2 overflow-hidden w-auto xl:h-[348px] lg:h-[288px]  md:h-[300px] h-[150px] lg:rounded-tl-[7rem] md:rounded-tl-[6rem] rounded-tl-[3rem] lg:rounded-br-[7rem] md:rounded-br-[6rem] rounded-br-[3rem]" >
                        <img src="/img/toteBag.png" alt="toteBag" class="object-cover w-full h-full">
                    </div>
                </div>
                <div class="flex pt-0 space-x-4 lg:space-x-6 lg:pt-0">
                    <div class="relative border-primary border-2 overflow-hidden w-auto xl:h-[348px] lg:h-[288px]  md:h-[300px] h-[150px] lg:rounded-tl-[7rem] md:rounded-tl-[6rem] rounded-tl-[3rem] lg:rounded-br-[7rem] md:rounded-br-[6rem] rounded-br-[3rem]" >
                        <img src="/img/toteBag.png" alt="toteBag" class="object-cover w-full h-full">
                    </div>
                    <div class=" border-primary border-2 overflow-hidden w-auto xl:h-[348px] lg:h-[288px]  md:h-[300px] h-[150px] lg:rounded-tr-[7rem] md:rounded-tr-[6rem] rounded-tr-[3rem] lg:rounded-bl-[7rem] md:rounded-bl-[6rem] rounded-bl-[3rem]">
                        <img src="/img/toteBag.png" alt="toteBag" class="object-cover w-full h-full">
                    </div>
                </div>
            </div>
            <div
                class="border-primary border-2 overflow-hidden lg:w-1/2 w-full xl:h-[720px] lg:h-[640px] lg:order-2 order-1
                md:h-[400px] h-[240px] lg:rounded-tl-[10rem] md:rounded-tl-[6rem] rounded-tl-[3rem] lg:rounded-br-[10rem] md:rounded-br-[6rem] rounded-br-[3rem]"
                >
                <img src="/img/toteBag.png" alt="toteBag" class="object-cover w-full h-full">
            </div>
        </div>
    </div>
    <EnquiryForm/>
    <SectionsFooter/>
</template>
<script setup>
import cards from '/assets/data/references.json'

var name = computed(() => { return useRoute().params.slug || 'titletwo' })
var data = computed(() => { return cards[useRoute().params.slug] })

</script>
