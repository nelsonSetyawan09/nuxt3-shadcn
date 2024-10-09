export default function useHelper() {
  const loading = ref(false);
  const openDialog = ref(false);
  return {
    loading,
    openDialog,
  };
}
