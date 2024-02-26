<script>
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      showMessage: false,
      message: "",
    };
  },
  methods: {
    loginFunc() {
      // * check data
      if (this.email === "admin@example.com" && this.password === "123456") {
        this.message = "Login successful!";
        setTimeout(() => {
          //* Reduction process after 3 seconds
          this.$router.push("/products");
        }, 500);
      } else {
        this.message = "Username or password is wrong!";
      }
      this.showMessage = true;
    },
    loginTwitterFunc() {
      this.$router.push("/products/");
    },
    loginFacebookFunc() {
      this.$router.push("/products/");
    },
    loginGitHubFunc() {
      this.$router.push("/products/");
    },
  },
};
</script>

<template>
  <div>
    <div class="container">
      <div class="my-4 mx-2 p-3">
        <!--  -->
        <h2
          class="bg-box rounded p-3 text-uppercase fw-bold fs-3 text-center wow fadeInUp"
          data-wow-delay="0.3s"
        >
          login
        </h2>
        <div class="text-center">
          <p v-if="showMessage">{{ message }}</p>
        </div>
        <div
          class="bg-secondary modal-content rounded-4 wow fadeInDown"
          data-wow-delay="0.5s"
        >
          <div class="modal-body p-5">
            <form @submit.prevent="loginFunc">
              <div class="form-floating mb-3">
                <input
                  v-model="email"
                  type="email"
                  class="form-control rounded-3"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  v-model="password"
                  type="password"
                  class="form-control rounded-3"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label for="floatingPassword">Password</label>
              </div>
              <div class="d-flex justify-content-center pb-3">
                <small>
                  <b>Email :</b>admin@example.com
                  <br />
                  <b>Pass :</b> 123456
                </small>
              </div>

              <button
                class="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
                type="submit"
              >
                Login
              </button>
              <hr class="my-4" />
              <h2 class="fs-5 fw-bold mb-3 text-center">
                Or use a third-party
              </h2>
              <button
                class="w-100 py-2 mb-2 btn btn-outline-light rounded-3"
                type="submit"
                @click="loginTwitterFunc()"
              >
                Login with Twitter
              </button>
              <button
                class="w-100 py-2 mb-2 btn btn-outline-dark rounded-3"
                type="submit"
                @click="loginFacebookFunc()"
              >
                Login with Facebook
              </button>
              <button
                class="w-100 py-2 mb-2 btn btn-outline-light rounded-3"
                type="submit"
                @click="loginGitHubFunc()"
              >
                Login with GitHub
              </button>
            </form>
          </div>
        </div>
        <!--  -->
      </div>
    </div>
  </div>
</template>
