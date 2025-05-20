<template>
    <div class="lg:max-w-[1400px] md:max-w-[700px] mx-auto lg:pb-[38rem] md:pb-[5rem] pb-[6rem]">
        <div class="grid grid-cols-1 grid-rows-6 gap-6 lg:grid-cols-3 md:grid-cols-2 lg:grid-rows-4">
            <a :href="'/reference/'+ index"
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
                    <h3>
                      {{ item.title }}
                    </h3>
                </div>
                </div>
            </a>
        </div>
    </div>
</template>

<script setup>
import cards from '/assets/data/references.json'

</script>