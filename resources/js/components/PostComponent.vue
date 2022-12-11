<template>
  <div>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-success float-rigth"
      data-toggle="modal"
      data-target="#exampleModal"
    >
      New Post
    </button>
    <div v-for="post in posts" :key="post.id">
      <h4> {{ post.title }} </h4>
      <p> {{ post.body }} </p>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Create Post</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <input
              type="text"
              :class="['form-control my-2', errors.title ? 'is-invalid' : '']"
              placeholder="title"
              v-model="post.title"
            />
            <span
              v-if="errors.title"
              class="bg-danger text-white p-1 rounded"
              >{{ errors.title[0] }}</span
            >
            <textarea
              name=""
              :class="['form-control my-2', errors.body ? 'is-invalid' : '']"
              placeholder="body"
              id=""
              cols="30"
              rows="10"
              v-model="post.body"
            ></textarea>
            <span v-if="errors.body" class="bg-danger text-white p-1 rounded">{{
              errors.body[0]
            }}</span>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal">
              Close
            </button>
            <button type="button" class="btn btn-primary" @click="createPost">
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        id: "",
        title: "",
        body: "",
      },
      posts : {},
      errors: [],
    };
  },
  methods: {
    createPost() {
      axios.post("api/post", this.post).then((res) => {
        if (res.data.status == "error") {
          this.errors = res.data.errors;
        } else if (res.data.status == "success") {
          Toast.fire({
            icon: "success",
            title: "Added successfully",
          });
          this.errors = [];
          this.post = {
            id: "",
            title: "",
            body: "",
          };
          this.posts.unshift(res.data.data)
        } else {
          Toast.fire({
            icon: "error",
            title: "Something went wrong!",
          });
        }
      });
    },
    getPosts(){
      axios.get('api/post').then((res) => {
        this.posts = res.data.data
      } ).catch(err => {
                console.log(err);
            });
    }
  },
  created(){
    this.getPosts()
  }
};
</script>

<style>
</style>