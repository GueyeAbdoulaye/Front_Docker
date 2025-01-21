<script lang="ts" setup>
const { user } = useSanctumAuth();
</script>

<template>
    <pre>
        {{ user }}
    </pre>
</template>
