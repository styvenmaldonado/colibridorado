<script setup lang="ts">
defineProps<{
    items?: {
        title: string,
        route: string,
        icon: string,
        active?: boolean
    }[]
}>()
</script>
<template>
    <div class="h-24 text-lg fixed left-0 bottom-0 w-full bg-gray-50 shadow-lg  flex border-t border-gray-300">
        <div class="m-auto flex px-3  gap-2 h-full items-center">
            <div v-for="(item, index) in items" class="h-full items-center">
                <a :href="item.route"
                    :class="item.active ? 'h-full flex flex-col items-center gap-2 border-t-4 border-purple-900 text-purple-900 px-2' : 'h-full flex flex-col gap-2 px-2'">
                    <v-icon class="m-auto pt-4 " x-large>{{ item.icon }}</v-icon>
                    <span class="m-auto pb-4">{{ item.title }}</span>
                </a>
            </div>
        </div>
    </div>
</template>