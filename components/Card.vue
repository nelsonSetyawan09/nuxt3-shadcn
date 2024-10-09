<script setup>
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const props = defineProps(["card"]);
</script>

<template>
  <div>
    <Card>
      <CardHeader class="px-3">
        <div class="flex items-center justify-between">
          <CardTitle>{{ card.title }}</CardTitle>
          <CardDescription>
            <Badge class="bg-blue-500">{{ card.progression + "%" }}</Badge>
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent class="px-3"> Card Content </CardContent>
      <CardFooter
        class="flex items-center justify-between gap-2 border-t pt-2 px-3"
      >
        <div class="flex gap-2 items-center">
          <Icon :name="card.icon" size="18" class="flex-none" />
          <p class="text-sm">{{ card.description }}</p>
        </div>
        <Button variant="outline" class="text-xs py-1 px-2 h-[36px]">{{
          card.label
        }}</Button>
      </CardFooter>
    </Card>
  </div>
</template>
