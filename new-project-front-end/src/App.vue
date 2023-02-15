<template>
  <div v-if="isshowgrid" id="main">
    <va-card id='card'>
      <h1>Users List</h1>
      <va-data-table :columns="columns" :items="filteredData" :per-page="parseInt(perPage)" clickable id="table">
        <!-- <template #cell(actions)={rowData}>
          <va-button preset="plain" icon="edit" @click="editUser(rowData)" />
          <va-button preset="plain" icon="delete" @click="deleteItemById(rowData)" />
          <va-modal v-model="showModal" 
          title="Confirm Delete" 
          okText="Confirm" 
          cancelText="Cancel"
          @ok="deleteUser(entity)"
          @cancel="cancel()" />
        </template> -->
      </va-data-table>
      <va-button type="button" style=" margin-bottom: 30px; margin-top: 30px;"
        @click="showForm()">Add User</va-button>
    </va-card>

  </div>
  <div v-if="isshowForm" id="syed">
    <div id="signup">
      <form id="getvalue">
        <h1 style="text-align: center; font-size: xx-large;">Add User</h1>
        <label for="firstname">First Name</label><br />
        <va-input 
           type="text" 
           name="firstname" 
           v-model="fullData.firstname" 
           :required="true" 
           /> <br /><br />
        <label for="lastname">Last Name</label><br />
        <va-input 
           type="text" 
           name="lastname" 
           v-model="fullData.lastname"
           :required="true" /><br /><br />
        <label for="email">Email</label><br />
        <va-input 
           type="email" 
           v-model="fullData.email" 
           :required="true" /><br /><br />
        <label for="number">Mobile Number</label><br />
        <va-input 
           type="telphone" 
           v-model="fullData.number"
           :required="true" /><br /><br />
        <label for="address">Address</label><br />
        <va-input 
           type="text" 
           name="address" 
           v-model="fullData.address" 
           :required="true" /><br /><br /><br />
        <!-- <va-button 
           v-if="isUpdate" 
           @click.prevent="updateUser()">Update
        </va-button> -->
        <va-button 
           v-if="isCreate" 
           type="submit" 
           @click="addUser($event)">Submit
          </va-button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <va-button 
           v-if="isCreate" 
           @click="showlist()"> Show List 
          </va-button>
        <!-- <va-button 
           v-if="isUpdate" 
           @click="cancelList()">Cancel
          </va-button> -->

      </form>
    </div>
  </div>

</template>

<script>
import axios from 'axios';
// import {useToastr} from '../toaster'

// const toastr = useToastr();

export default {
  created() {
    this.getAllUser()
  },
  data() {
    const columns = [
      { key: 'firstname', sortable: true },
      { key: 'lastname', sortable: true },
      { key: 'email', sortable: true },
      { key: 'number', width: 80 },
      { key: 'address', sortable: true },
      // { key: 'actions', width: 80 }
    ]
    return {
      fullData: {
        firstname: '',
        lastname: '',
        email: '',
        number: '',
        address: ''
      },
      isshowForm: false,
      isshowgrid: true,
      // isUpdate: false,
      isCreate: true,
      showModal : false,
      userdata: [],
      // firstNameErrors:[],
      // lastNameErrors:[],
      // emailErrors:[],
      // numberErrors:[],
      // addressErrors:[],
      firstname: '',
      lastname: '',
      email: '',
      number: '',
      address: '',
      perPage: '10',
      perPageOptions: ['4', '6', '10', '20'],
      columns,
      
    };
  },
  computed: {
    filteredData() {
      return (this.userdata)
    },
    // formReady () {
    //   return !this.firstNameErrors.length && 
    //          !this.lastNameErrors.length && 
    //          !this.emailErrors.length && 
    //          !this.numberErrors.length &&
    //          !this.addressErrors.length
    //              },
              },
  methods: {
    async getAllUser() {
      const response = await axios.get("http://localhost:8080/sample/read");
      // toastr.info("data Fetched Successfully")
      this.userdata = (response.data);
    },

    async addUser(e) {
      e.preventDefault();
      // this.firstNameErrors = this.fullData.firstname ? [] : ['FirstName is required']
      // this.lastNameErrors = this.fullData.lastname ? [] : ['LastName is required']
      // this.emailErrors = this.fullData.email ? [] : ['Email is required']
      // this.numberErrors = this.fullData.number ? [] : ['Number is required']
      // this.addressErrors = this.fullData.address ? [] : ['Address is required']
      // if (!this.formReady) {
      //   return
      // }
      var payload = {
        firstname: this.fullData.firstname,
        lastname: this.fullData.lastname,
        email: this.fullData.email,
        number: this.fullData.number,
        address: this.fullData.address
      }
      try {
        const response = await axios.post('http://localhost:8080/sample/create', payload)
      console.log(response)
      // if(response.status ===200){
      //   toastr.success("User Created Successfully")
      //   function show() {
      //      location.reload()
      //       }
      //   setTimeout(show, 5000)
      // }else{
      // }
      } catch (error) {
        // toastr.warning("Email or Mobile Already Exist")
      }
      
      this.isshowgrid = true;
      this.isshowForm = false;
     },
    //  async deleteUser(data) {
    //   var id = data
    //   const response = await axios.delete(`http://localhost:8080/sample/delete/${id}`)
    //   toastr.success("User Deleted Successfully")
    //   function show1(){
    //     location.reload()
    //   }
    //   setTimeout(show1, 2000) 
    //  },

    // async deleteItemById(rowData) {
    //   this.showModal = true;
    //   this.entity = rowData.id
    //   },

    // async updateUser() {
    //   var payload = {
    //     firstname: this.fullData.firstname,
    //     lastname: this.fullData.lastname,
    //     email: this.fullData.email,
    //     number: this.fullData.number,
    //     address: this.fullData.address
    //   }
    //   this.isshowForm = false;
    //   this.isshowgrid = true;
    //   const response = await axios.put(`http://localhost:8080/sample/update/${this.fullData.id}`, payload)
    //   if(response.status ===200){
    //     toastr.success("User Updated Successfully")
    //     function show2() {
    //        location.reload()
    //         }
    //     setTimeout(show2, 5000)
    //   }else{
    //   }
    // },

    // async editUser(row) {
    //   this.fullData.id = row.id
    //   this.fullData.firstname = row.firstname,
    //   this.fullData.lastname = row.lastname,
    //   this.fullData.email = row.email,
    //   this.fullData.number = row.number,
    //   this.fullData.address = row.address,
    //   this.isshowgrid = false;
    //   this.isshowForm = true;
    //   this.isCreate = false;
    //   this.isUpdate = true;
    // },
    showlist() {
      this.isshowgrid = true;
      this.isshowForm = false;
    },

    showForm() {
      this.fullData.firstname = '',
      this.fullData.lastname = '',
      this.fullData.email = '',
      this.fullData.number = '',
      this.fullData.address = '',
      // this.firstNameErrors = [],
      // this.lastNameErrors = [],
      // this.emailErrors = [],
      // this.numberErrors = [],
      // this.addressErrors= [],
      this.isshowForm = true;
      this.isshowgrid = false;
    },
    cancel(){
      this.showModal = false
    },
    cancelList() {
      this.isshowForm = false;
      this.isshowgrid = true;
      this.isCreate = true;
      // this.isUpdate = false;
    }
  },
}
</script>
<!-- <style>
#signup {
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: rgb(160, 158, 158);
  height: 577px;
}

template {
  background-color: aquamarine;

}
#main #card{
  width: 1150px;
  font-weight: bold;
  display: -webkit-inline-box
}
#main{
  text-align: center;
  margin-top: 30px;
 
}
#card #table{
  --va-data-table-align: center;
    --va-data-table-vertical-align: middle;
    text-align: center;
    font-size: 15px;
    font-weight: bold
}
#main h1 {
  text-align: center;
  font-size: 25px;
  padding: 5px;
  background-color: gold;
  display: flex;
  justify-content: center;

}

#getvalue h1{
  margin-top: 30px;
  margin-bottom: 20px;

}

input {
  width: 350px;
  height: 30px;
}

button {
  height: 30px;
  width: 110px;
  margin-left: 75px;
  margin-bottom: 50px;
  
}

* {
  margin: 0;
  padding: 0;

}
</style> -->