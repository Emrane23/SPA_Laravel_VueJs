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
              class="form-control my-2"
              placeholder="title"
              v-model="post.title"
            />
            <textarea
              name=""
              class="form-control my-2"
              placeholder="body"
              id=""
              cols="30"
              rows="10"
              v-model="post.body"
            ></textarea>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal">
              Close
            </button>
            <button type="button" class="btn btn-primary" @click="createPost">Create</button>
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
    };
  },
  methods: {
    createPost() {
        axios.post('api/post',this.post).then(res =>{

        })
    },
  },
};
</script>

<style>
</style>