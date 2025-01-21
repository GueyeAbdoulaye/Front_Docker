<script lang="ts" setup>
const { user } = useSanctumAuth();
</script>

<template>
    <div
        class="h-screen w-screen overflow-hidden flex items-center justify-center"
    >
        <Auth v-if="!user" />
        <Images v-else />
    </div>
</template>
