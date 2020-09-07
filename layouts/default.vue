<template>
    <div>
        <div v-if="$nuxt.isOffline">You are offline</div>
        <Nuxt />
    </div>
</template>