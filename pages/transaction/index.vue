<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const tabList = [
  {
    code: "today",
    title: "Today",
    component: resolveComponent("TabsToday"),
  },
  {
    code: "week",
    title: "Week",
    component: resolveComponent("TabsWeek"),
  },
  {
    code: "month",
    title: "Month",
    component: resolveComponent("TabsMonth"),
  },
  {
    code: "year",
    title: "Year",
    component: resolveComponent("TabsYear"),
  },
];
const tabDefault = "today";
</script>

<template>
  <Tabs :default-value="tabDefault">
    <TabsList>
      <TabsTrigger
        v-for="(tab, index) in tabList"
        :key="`tab-trigger-${index}`"
        :value="tab.code"
      >
        {{ tab.title }}
      </TabsTrigger>
    </TabsList>
    <TabsContent
      v-for="(tab, index) in tabList"
      :key="`tab-content-${index}`"
      :value="tab.code"
    >
      <component :is="tab.component" />
    </TabsContent>
  </Tabs>
</template>
