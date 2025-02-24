<template>
  <v-container class="login-page" fluid>
    <v-row class="fill-height" align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="login-card" elevation="8">
          <v-card-title class="text-center title">
            <v-icon size="36" color="primary">mdi-shield-account</v-icon>
            <span class="ml-2">Admin Login</span>
          </v-card-title>

          <v-card-text>
            <v-form @submit.prevent="login" ref="form" lazy-validation>
              <v-text-field
                v-model="email"
                label="Email"
                prepend-inner-icon="mdi-email"
                type="email"
                :rules="[rules.required, rules.email]"
                required
              ></v-text-field>

              <v-text-field
                v-model="password"
                label="Password"
                prepend-inner-icon="mdi-lock"
                :type="showPassword ? 'text' : 'password'"
                :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append-inner="showPassword = !showPassword"
                :rules="[rules.required]"
                required
              ></v-text-field>

              <v-btn color="primary" block class="mt-4" type="submit" :loading="loading">Login</v-btn>
            </v-form>

            <p class="forgot-password" @click="showForgotPassword = true">
              Forgot Password ?
            </p>

            <v-alert
              v-if="loginError"
              type="error"
              class="mt-3"
              dense
              border="left"
              elevation="2"
            >
              {{ errorMessage }}
            </v-alert>
          </v-card-text>
        </v-card>

        <!-- 🔑 Forgot Password Modal -->
        <v-dialog v-model="showForgotPassword" max-width="400">
          <v-card>
            <v-card-title>Reset Password</v-card-title>
            <v-card-text>
              <v-text-field
                v-model="resetEmail"
                label="Enter your email"
                prepend-inner-icon="mdi-email"
                type="email"
                :rules="[rules.required, rules.email]"
                required
              ></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-btn @click="sendResetLink">Send Reset Link</v-btn>
              <v-btn text @click="showForgotPassword = false">Cancel</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <div class="footer">
          &copy; {{ new Date().getFullYear() }} Mula Channels. All Rights Reserved.
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const showPassword = ref(false);
const loginError = ref(false);
const errorMessage = ref("");
const showForgotPassword = ref(false);
const resetEmail = ref("");
const loading = ref(false);

const router = useRouter();
const form = ref(null);

// ✅ Validation Rules
const rules = {
required: (value) => !!value || "This field is required.",
email: (value) => /.+@.+\..+/.test(value) || "Enter a valid email.",
};

// ✅ Login Handler (Fetch from Database)
const login = async () => {
if (!form.value.validate()) return;

loading.value = true;
loginError.value = false;

try {
  const response = await fetch("http://localhost:3001/api/admin/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),
  });

  const data = await response.json();

  if (response.ok) {
    localStorage.setItem("token", data.token); // Store JWT Token
    router.push("/admin/dashboard"); // Redirect on success
  } else {
    loginError.value = true;
    errorMessage.value = data.error || "Invalid credentials";
  }
} catch (error) {
  loginError.value = true;
  errorMessage.value = "Server Error. Please try again later.";
} finally {
  loading.value = false;
}
};

// ✅ Simulated Forgot Password
const sendResetLink = () => {
if (resetEmail.value) {
  alert("Password reset link sent to " + resetEmail.value);
  showForgotPassword.value = false;
}
};
</script>

<style scoped>
/* ✅ UI Styles */
.login-page {
background: linear-gradient(to bottom right, #121536, rgb(173, 189, 246));
min-height: 100vh;
display: flex;
align-items: center;
justify-content: center;
padding: 20px;
color: #fff;
}

.login-card {
background-color: #fff;
padding: 30px;
border-radius: 12px;
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
transition: transform 0.3s;
}

.login-card:hover {
transform: translateY(-5px);
}

.title {
font-size: 1.8rem;
font-weight: bold;
color: #121536;
display: flex;
align-items: center;
justify-content: center;
}

.forgot-password {
color: primary;
text-align: center;
cursor: pointer;
font-size: 0.9rem;
transition: color 0.3s ease;
margin-top: 10px;
}

.forgot-password:hover {
color: #0d47a1;
text-decoration: underline;
}

.v-btn {
background-color: #121536;
color: white;
font-weight: bold;
transition: background 0.3s ease;
}

.v-btn:hover {
background-color: #1e2746;
}

.footer {
text-align: center;
margin-top: 20px;
color: white;
font-size: 0.85rem;
}
</style>
