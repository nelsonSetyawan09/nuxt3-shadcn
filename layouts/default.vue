<template>
  <div class="container mx-auto flex items-start pt-2 bg-gray-50 h-screen">
    <div>
      <Sidebar />
    </div>
    <div class="flex-1 p-2">
      <slot />
    </div>
  </div>
</template>
