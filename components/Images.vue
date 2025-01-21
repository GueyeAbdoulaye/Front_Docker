<script lang="ts" setup>
import { useApi } from "~/services/api";
import type { UnsplashImage, UserImage } from "~/types/images.type";

const { logout, user } = useSanctumAuth();
const config = useRuntimeConfig();

const items = [
    {
        label: "Feed",
    },
    {
        label: "Liked images",
    },
];

onMounted(() => fetchRandomImage());

const imagesDict = reactive<Record<number, UnsplashImage[] | UserImage[]>>({
    0: [],
    1: [],
});

const selectedTabIndex = ref(0);

const fetchRandomImage = async () => {
    const accessKey = "OfPxLTCmFWipheMIk4ZyGI50KGEQ-qDZ52VrhMwk50M";
    const response = await fetch(
        `https://api.unsplash.com/photos/random?client_id=${config.public.accessKey}&count=3`
    );
    const data: UnsplashImage[] = await response.json();
    imagesDict[0] = data;
};

const fetchLikedImages = async () => {
    const data: UserImage[] = await useApi("api/image");

    imagesDict[1] = data;
};

const likedImageIds = ref<string[]>([]);

const likeImage = async (image: UnsplashImage, isImageLiked: boolean) => {
    if (isImageLiked) {
        await useApi(`api/image/delete`, {
            method: "POST",
            body: {
                path: image.urls.small,
            },
        });
        likedImageIds.value = likedImageIds.value.filter(
            (id) => id !== image.id
        );

        return;
    }

    await useApi("api/image", {
        method: "POST",
        body: { path: image.urls.small },
    });
    likedImageIds.value.push(image.id);
};

watch(selectedTabIndex, (newIndex) => {
    if (newIndex === 1) {
        fetchLikedImages();
    }
});
</script>

<template>
    <div class="flex flex-col gap-8 w-2/3">
        <UButton color="blue" variant="solid" class="self-end" @click="logout">
            Logout
        </UButton>
        <UButton
            color="blue"
            variant="solid"
            class="self-end"
            @click="fetchRandomImage"
        >
            Fetch images
        </UButton>

        <UTabs v-model="selectedTabIndex" :items="items" />

        <div
            class="w-full grid grid-cols-3 gap-2 max-h-[calc(100vh-400px)] overflow-y-scroll"
        >
            <div
                v-for="image in imagesDict[selectedTabIndex]"
                class="relative h-56"
            >
                <img
                    :key="image.id"
                    :src="image?.urls?.small ?? image.path"
                    class="object-cover w-full h-full"
                />

                <div
                    v-if="selectedTabIndex === 0"
                    class="absolute cursor-pointer bottom-0 right-0 p-2 rounded-full bg-gray-400 w-fit"
                    :class="{
                        'bg-red-500': likedImageIds.includes(image.id),
                    }"
                    @click="likeImage(image, likedImageIds.includes(image.id))"
                >
                    <img src="/img/heart.svg" class="w-6" />
                </div>
            </div>
        </div>
    </div>
</template>
