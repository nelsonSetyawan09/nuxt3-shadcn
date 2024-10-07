<script setup>
const items = ref([
  {
    title: "Dashboard",
    idx: 1,
    path: "/",
    icon: "material-symbols:dashboard-outline",
  },
  {
    title: "Transaction",
    idx: 2,
    path: "/transaction",
    icon: "hugeicons:transaction",
  },
  {
    title: "Contact",
    idx: 3,
    path: "/contact",
    icon: "mdi:contact-outline",
  },
  {
    title: "Setting",
    idx: 4,
    path: "/setting",
    icon: "uil:setting",
  },
]);
</script>
<template>
  <div class="w-[150px]">
    <header
      class="flex items-center gap-2 p-4 hover:scale-[105%] transition cursor-pointer"
    >
      <Logo />
      <span>Shadcn UI</span>
    </header>
    <div class="grid gap-2 grow">
      <NuxtLink
        v-for="item in items"
        :key="`menu-${item.idx}`"
        :to="item.path"
        class="flex items-center gap-2 px-2 py-1 transition rounded cursor-pointer hover:bg-neutral-200"
      >
        <Icon :name="item.icon" size="18" />
        <span>{{ item.title }}</span>
      </NuxtLink>
    </div>
  </div>
</template>
