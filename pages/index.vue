<template>
    <main class="flex flex-row gap-4 justify-between">
        <HomePageBucket color="indigo" :title="Inidgo Bucket"/>
        <HomePageBucket color="amber" title="Amber Bucket"></HomePageBucket>
        <HomePageBucket color="sky" title="Sky Bucket" v-if="blogCount >="></HomePageBucket>
    </main>
    <section clas="mt-5 bg-gray-200 p-8 rounded-xl">
        Blog Count: {{ blogCount }}<br>
        Bucket Count: {{ bucketCount }}<br>
        <button @click="changeCount(quantity, 'add')" class="px-3 py-2 bg-gray-400 rounded-lg">Increase Blog Count</button>
        <button @click="changeCount(quantity, 'subtract')" class="px-3 py-2 bg-gray-400 rounded-lg">Decrease Blog Count</button>
    </section>
</template>

<script setup>
    const blogCount = ref(5);

    const changeCount = function(quantity, operation) {
        if (operation == 'add') {
            blogCount.value += quantity;
            return;
        }
        else if (operation == 'subtract') {
            blogCount.value -= quantity;
            return;
        }
    }

    const increaseCount = function() {
        
    }
</script>