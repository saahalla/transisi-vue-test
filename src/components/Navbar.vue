<template>
  <nav> 
    <!-- Navbar -->
    <v-app-bar app color="blue-grey lighten-4" fixed elevate-on-scroll >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="text-uppercase black--text">
        <span class="font-weight-light">Vue </span>
        <span>Admin</span>
      </v-toolbar-title>
    </v-app-bar>
    <!-- End Navbar -->
    
    <v-spacer></v-spacer>
    
    <!-- Sidebar navigation drawer -->
    <v-navigation-drawer app v-model="drawer" color="blue-grey lighten-4">
      <h1 class="text-h5 pt-3 pl-4 blue--text"><strong>Dashboard</strong></h1>
      <v-list class="blue--text" v-for="(link, i) in links" :key="i">
        <v-list-group v-if="link.children.length > 0" router :to="link.route" :value="true" :prepend-icon="link.icon">

          <template v-slot:activator>
            <v-list-item-title>{{link.text}}</v-list-item-title>
          </template>

          <v-list-item
            v-for="(child, i) in link.children"
            :key="i"
            router :to="child.route"
            dense
            class="ml-4"
          >
            <v-list-item-icon>
              <v-icon>{{child.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{child.name}}</v-list-item-title>
          </v-list-item>

        </v-list-group>
        
        <v-list-item v-else router :to="link.route">
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- End Sidebar -->
  </nav>
</template>

<script>

export default {
    data: function(){
      return {
        drawer: false,
        links: [
          { 
            icon: 'mdi-view-dashboard', 
            text: 'Users Dashboard', 
            route: '/',
            children: [
              {
                icon: 'mdi-table-large',
                name: 'List Users',
                route: '/users/list'
              },
              {
                icon: 'mdi-plus',
                name: 'Add Users',
                route: '/users/add'
              }
            ]
          },
        ]
      }
    },
    methods: {
    }
}
</script>
