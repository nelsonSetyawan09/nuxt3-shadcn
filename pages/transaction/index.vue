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

const cards = [
  {
    title: "Sales",
    progression: 12,
    amount: 85,
    label: "View sales",
    description: "Sales of March 2024",
    icon: "icon-park-outline:sales-report",
  },
  {
    title: "Refund",
    progression: 8,
    amount: 85,
    label: "View refunds",
    description: "Refunds since beginning of year",
    icon: "ri:refund-2-fill",
  },
  {
    title: "Payout",
    progression: 14,
    amount: 85,
    label: "View payouts",
    description: "Payout of this week",
    icon: "uiw:pay",
  },
];
</script>

<template>
  <Tabs default-value="today">
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
      <component :is="tab.component" :cards="cards" />
    </TabsContent>
  </Tabs>
</template>
