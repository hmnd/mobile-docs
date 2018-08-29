<template>
  <v-container fill-height>
    <v-layout row wrap>
      <v-flex xs12>
        <h1>Google Docs Mobile</h1>
      </v-flex>
      <v-flex xs12>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-card-text>
                <v-form>
                  <v-text-field v-model="docsLink" prepend-icon="link" name="docs-url" label="Enter Google Docs URL here" :rules="linkRules"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn :to="{name: 'display', query: {docslink: docsLink}}">View</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      linkRules: [
        (v) => /\/document\/d\/([a-zA-Z0-9-_]+)/.test(v) || 'Link must be a valid Google Docs link.'
      ],
      docsLink: ''
    }
  },
  name: 'home'
}
</script>
