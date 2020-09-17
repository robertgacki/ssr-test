<template>
    <div>
        <div v-if="$nuxt.isOffline">You are offline</div>
        <TabNavigation />
        <Nuxt />
    </div>
</template>