<script lang="ts" setup>
import { useApi } from "~/services/api";

const { login } = useSanctumAuth();

interface UserCredentials {
    email: string;
    password: string;
}

const userCredentials = ref({
    email: "",
    password: "",
});

const selectedTabIndex = ref(0);

const items = [
    {
        label: "Login",
    },
    {
        label: "Register",
    },
];

const register = async (credentials: UserCredentials) => {
    $fetch("http://localhost:80/sanctum/csrf-cookie", {
        credentials: "include",
    });

    await useApi("register", {
        method: "POST",
        body: { name: "rosmis", ...credentials },
    });
};
</script>

<template>
    <div class="flex flex-col gap-4 w-1/4">
        <UTabs v-model="selectedTabIndex" :items="items" />

        <template v-if="selectedTabIndex === 0">
            <UInput
                v-model="userCredentials.email"
                color="blue"
                variant="outline"
                placeholder="email"
            />
            <UInput
                v-model="userCredentials.password"
                color="blue"
                variant="outline"
                type="password"
                placeholder="password"
                @keyup.enter="login(userCredentials)"
            />

            <UButton
                color="blue"
                variant="solid"
                class="self-end"
                @click="login(userCredentials)"
            >
                Login
            </UButton>
        </template>

        <template v-else>
            <UInput
                v-model="userCredentials.email"
                color="blue"
                variant="outline"
                placeholder="email"
            />
            <UInput
                v-model="userCredentials.password"
                color="blue"
                variant="outline"
                placeholder="password"
                type="password"
            />

            <UButton
                color="blue"
                variant="solid"
                class="self-end"
                @click="register(userCredentials)"
            >
                Register
            </UButton>
        </template>

        <!-- <UInput color="blue" variant="outline" placeholder="email" />
        <UInput color="blue" variant="outline" placeholder="password" />

        <UButton
            color="blue"
            variant="solid"
            class="self-end"
            @click="login(userCredentials)"
        >
            Login
        </UButton> -->
    </div>
</template>
