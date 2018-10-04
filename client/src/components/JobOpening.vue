<template>
    <div class="container">
        <form>
            <div class="form-group row">
                <label for="title" class="col-sm-2 col-form-label">Position Title</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="title" placeholder="Position Title" v-model="title" />
                </div>
            </div>
            <div class="form-group row">
                <label for="title" class="col-sm-2 col-form-label">Rate</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="rate" placeholder="Rate" v-model="rate" />
                </div>
            </div>
            <div class="form-group row">
                <label for="company" class="col-sm-2 col-form-label">Company</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="company" placeholder="Company" v-model="company" />
                </div>
            </div>
            <div class="form-group row">
                <label for="city" class="col-sm-2 col-form-label">City</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="city" placeholder="City" v-model="city" />
                </div>
            </div>
            <div class="form-group row">
                <label for="manager" class="col-sm-2 col-form-label">Account Manager</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="manager" placeholder="Phone" v-model="manager" />
                </div>
            </div>
            <div class="form-group row">
                <label for="positionDescription" class="col-sm-2 col-form-label">Position Description</label>
                <div class="col-sm-10">
                    <textarea rows="4" cols="50" class="form-control" id="positionDescription" placeholder="Position Description" v-model="positionDescription" />
                </div>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="talkedToRecruiter" v-model="talkedToRecruiter">
                <label class="form-check-label" for="talkedToRecruiter">
                    Initial Talk with Recruiter
                </label>
            </div> 
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="sentResume" v-model="sentResume">
                <label class="form-check-label" for="sentResume">
                    Sent Resume
                </label>
            </div>   
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="interviewPhone" v-model="interviewPhone">
                <label class="form-check-label" for="interviewPhone">
                    Phone Interview
                </label>
            </div> 
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="interviewPhone" v-model="interviewPerson">
                <label class="form-check-label" for="interviewPhone">
                    In-Person Interview
                </label>
            </div> 
            <div class="form-group row">
                <div class="col-sm-10">
                    <button type="submit" class="btn btn-primary">Add Job Opening</button>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    name: 'JobOpening',
    data:()=> {
        return {
            title: '',
            company: '',
            manager: '',
            rate: '',
            positionDescription: '',
            talkedToRecruiter: false,
            sentResume: false,
            interviewPhone: false,
            interviewPerson: false,
            interviewDate: '',
            
        }
    }
}
</script>

<style lang="scss">

</style>

