<template>
  <v-list dense nav>
    <!-- Dashboard Link -->
    <v-list-item to="/admin/dashboard" class="menu-item" link>
      <v-list-item-icon>
        <v-icon>mdi-view-dashboard</v-icon>
      </v-list-item-icon>
      <v-list-item-title>Dashboard</v-list-item-title>
    </v-list-item>

    <!-- Loans Collapsible Section -->
    <v-list-group prepend-icon="mdi-cash" no-action>
      <template v-slot:activator="{ props }">
        <v-list-item v-bind="props" class="menu-item">
          <v-list-item-title>Loans</v-list-item-title>
        </v-list-item>
      </template>

      <v-list-item to="/admin/active-loans" class="sub-item" link>
        <v-list-item-title>Active Loans</v-list-item-title>
      </v-list-item>
      <v-list-item to="/admin/pending-loans" class="sub-item" link>
        <v-list-item-title>Pending Loans</v-list-item-title>
      </v-list-item>
    </v-list-group>

    <!-- Showroom Link -->
    <v-list-item to="/admin/showroom" class="menu-item" link>
      <v-list-item-icon>
        <v-icon>mdi-store</v-icon>
      </v-list-item-icon>
      <v-list-item-title>Showroom</v-list-item-title>
    </v-list-item>

    <!-- Clients Link -->
    <v-list-item to="/admin/offers" class="menu-item" link>
      <v-list-item-icon>
        <v-icon>mdi-offer</v-icon>
      </v-list-item-icon>
      <v-list-item-title>Vehicle Offers</v-list-item-title>
    </v-list-item>
  </v-list>
</template>

<style scoped>
.menu-item {
  padding: 10px;
  transition: background-color 0.2s ease;
  border-radius: 4px;
}

.menu-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
  cursor: pointer;
}

.sub-item {
  padding-left: 32px; /* Indentation for sub-menu */
  transition: background-color 0.2s ease;
}

.sub-item:hover {
  background-color: rgba(255, 255, 255, 0.15);
}
</style>
