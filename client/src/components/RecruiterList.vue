<template>
<div>
    <v-data-table
        :headers="headers"
        :items="recruiters"
        :loading="isloading"
        class="elevation-1">
    <v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear>
    <template slot="items" slot-scope="props">
      <td>{{ props.item.name }}</td>
      <td class="text-xs-right">{{ props.item.company }}</td>
      <td class="text-xs-right">{{ props.item.email }}</td>
      <td class="text-xs-right">{{ props.item.phone }}</td>
      <td class="text-xs-right"><a :href="'http://linkedin.com/in/' + props.item.linkedInProfile">{{ props.item.linkedInProfile }}</a></td>
    </template>
  </v-data-table>
  <v-btn
      fab
      bottom
      right
      color="orange"
      dark
      fixed
      @click.stop="showRecruiterDetailDialog">
      <v-icon>add</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" width="800px">
        <v-card>
        <v-card-title
          class="grey lighten-4 py-4 title"
        >
          Create contact
        </v-card-title>
            <v-container grid-list-sm class="pa-4">
          <v-layout row wrap>
            <v-flex xs12 align-center justify-space-between>
              <v-layout align-center>
                <v-avatar size="40px" class="mr-3">
                  <img
                    src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png"
                    alt=""
                  >
                </v-avatar>
                <v-text-field
                  placeholder="Name" v-model="name"
                ></v-text-field>
              </v-layout>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                prepend-icon="business"
                placeholder="Company" v-model="company"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                prepend-icon="mail"
                placeholder="Email" v-model="email"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                type="tel"
                prepend-icon="phone"
                placeholder="(000) 000 - 0000"
                mask="phone" v-model="phone"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                prepend-icon="link"
                placeholder="LinkedIn Profile" v-model="linkedInProfile"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                prepend-icon="notes"
                placeholder="Notes" v-model="notes"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
        <v-card-actions>
          <v-btn flat color="primary">More</v-btn>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="dialog = false">Cancel</v-btn>
          <v-btn flat @click="saveRecruiter">Save</v-btn>
        </v-card-actions>
      </v-card>
      
    </v-dialog>
</div>
    
</template>

<script>
import Recruiter from '../../../server/models/recruiter.model'
import RecruiterList from './RecruiterList';
import RecruiterDetail from './RecruiterDetail';
import Axios from 'axios'
  export default {
    data () {
      return {
        headers: [
            {
                text: 'Recruiter Name',
                align: 'left',
                sortable: true,
                value: 'name'
            },
            { text: 'Company', value: 'company' },
            { text: 'Email', value: 'email' },
            { text: 'Phone', value: 'phone' },
            { text: 'LinkedIn', value: 'linkedInProfile' },
        ],
        isloading: false,
        dialog: false,
        recruiters: [],
        recruiter: new Recruiter(),
        name: '',
          email: '',
          phone: '',
          linkedInProfile: '',
          company:'',
          notes: ''
      }
    },
    computed: {
        // a computed getter
        linkedInUrl: function () {
        // `this` points to the vm instance
            return `http://www.linkedin.com/in/${this.linkedInProfile}`
        }
    },
    components: {
        RecruiterDetail
    },
    methods: {
        clearForm: function(){
            this.name= '',
            this.email= '',
            this.phone= '',
            this.linkedInProfile= '',
            this.company='',
            this.notes= ''
        },
        getRecruiters: function(){
            // Axios.get('localhost:5000/api/recruiter')
            //     .then(response => {
            //     // JSON responses are automatically parsed.
            //     this.recruiters = response.data
            //     })
            //     .catch(e => {
            //         console.log(e)
            //     })
            return this.recruiters
        },
        saveRecruiter: function () {
        console.log('Saving transaction record:')
        var formData = {
            _id: null,
            name: this.name,
            email: this.email,
            phone: this.phone,
            linkedInProfile: this.linkedInProfile,
            notes: this.notes,
            company: this.company
        }
        this.recruiters.push(formData);
        this.clearForm()

        this.dialog = false
        },
        
        showRecruiterDetailDialog: function () {
        this.recruiter.initialContact = this.getCurrentDate()
        this.dialog = true
        },
        getCurrentDate: function () {
            const dt = new Date(Date.now())
            let month = '' + (dt.getMonth() + 1)
            let day = '' + dt.getDate()
            let year = dt.getFullYear()

            if (month.length < 2) month = '0' + month
            if (day.length < 2) day = '0' + day

            return [year, month, day].join('-')
        },
        closeDialog: function(value) {
            console.log(value)
            this.dialog = false
        }
    },
    // created: function () {
    //     getRecruiters()
    // }

  }
</script>

<style>

</style>
