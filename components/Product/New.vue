<script setup>
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
const { loading, openDialog } = useHelper();
const createNewProduct = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    openDialog.value = false;
  }, 1000);
};
</script>

<template>
  <div>
    <AlertDialog :open="openDialog">
      <AlertDialogTrigger>
        <Button
          class="bg-blue-500 hover:bg-blue-600 py-1 h-[36px]"
          @click="openDialog = true"
          >Add New Product</Button
        >
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Create Product?</AlertDialogTitle>

          <Input
            placeholder="Masukkan nama produkmu"
            class="border rounded px-2 py-1"
          />
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel @click="openDialog = false"
            >Tidak</AlertDialogCancel
          >
          <AlertDialogAction
            @click="createNewProduct"
            class="flex gap-2 items-center justify-between bg-blue-500 hover:bg-blue-600"
          >
            <Icon v-if="loading" name="eos-icons:loading" />
            <span v-else>Ya</span>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  </div>
</template>
