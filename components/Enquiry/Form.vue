<template>
     <div class="mx-auto lg:max-w-[1142px] md:max-w-[1142px] max-w-[380px] lg:pt-52 md:pt-32 pb-28 pt-16">
        <div>
            <div class="flex flex-col items-center">
                <h2 class="pb-10 font-sans text-4xl font-bold text-center lg:pb-20 md:pb-16 text-primary lg:text-5xl lg:text-left">
                    Nezávazná poptávka
                </h2>
            </div>
            <div>
                <form class="max-w-xs mx-auto space-y-4 md:max-w-xl lg:max-w-4xl">
                    <!-- Grid 2x2 -->
                    <div class="grid gap-8 lg:grid-cols-2">
                        <!-- Jméno -->
                        <div>
                        <label for="firstName" class="block mb-0 text-base font-medium lg:mb-2 md:mb-2 lg:text-lg md:text-lg">Jméno a příjmení</label>
                        <input type="text" id="firstName" name="firstName" required placeholder="Karel Svoboda"
                        class="w-full py-2 font-serif border-b-2 lg:text-2xl md:text-xl border-primary focus:outline-none" />
                        </div>

                        <!-- Příjmení -->
                        <div>
                        <label for="lastName" class="block mb-0 text-base font-medium lg:mb-2 md:mb-2 lg:text-lg md:text-lg">Telefon</label>
                        <input type="text" id="lastName" name="lastName" required placeholder="+420 123 456 789"
                        class="w-full py-2 font-serif border-b-2 lg:text-2xl md:text-xl border-primary focus:outline-none" />
                    </div>

                        <!-- Telefon -->
                        <div>
                        <label for="phone" class="block mb-0 text-base font-medium lg:mb-2 md:mb-2 lg:text-lg md:text-lg">Název firmy</label>
                        <input type="tel" id="phone" name="phone" required placeholder="firma s.r.o"
                        class="w-full py-2 font-serif border-b-2 lg:text-2xl md:text-xl border-primary focus:outline-none" />
                    </div>

                        <!-- Název firmy -->
                        <div>
                        <label for="company" class="block mb-0 text-base font-medium lg:mb-2 md:mb-2 lg:text-lg md:text-lg">E-mail</label>
                        <input type="text" id="company" name="company" placeholder="karel.svoboda@gmail.com"
                        class="w-full py-2 font-serif border-b-2 lg:text-2xl md:text-xl border-primary focus:outline-none" />
                    </div>
                    </div>
                    <!-- Zpráva -->
                    <div class="pt-4">
                        <label for="message" class="block mb-2 text-base font-medium lg:text-lg md:text-lg">Zpráva</label>
                        <textarea id="message" name="message" rows="10" required placeholder="Jaká je maximální velikost tlačené plochy?"
                                class="w-full px-4 py-2 border border-primary lg:text-xl md:text-lg text-xs lg:rounded-tr-[9rem] md:rounded-tr-[7rem] rounded-tr-[5rem] rounded-bl-[5rem] md:rounded-bl-[7rem] lg:rounded-bl-[9rem] pt-6 focus:outline-none"></textarea>
                    </div>

                    <!-- Tlačítko -->
                    <div class="text-center">
                        <button type="submit"
                                class="md:w-[300px] w-full px-8 py-3 text-white transition-all ease-in-out border-2 duration-400 bg-secondary border-secondary rounded-tr-2xl rounded-bl-2xl lg:w-auto hover:bg-transparent hover:text-secondary">
                        Odeslat Zprávu
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

