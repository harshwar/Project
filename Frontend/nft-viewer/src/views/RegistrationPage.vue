<template>
  <div>
    <SignedOut>
      <div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
        <SignIn />
      </div>
    </SignedOut>

    <SignedIn>
      <div>
        <div>
          <h1>Register New Student</h1>

          <form @submit.prevent="handleRegister">
            <div>
              <div>
                <label for="fullName">Full Name</label>
                <input v-model="formData.fullName" id="fullName" type="text" required />
              </div>
              <div>
                <label for="studentId">Student ID Number</label>
                <input v-model="formData.studentId" id="studentId" type="text" required />
              </div>
              <div>
                <label for="courseName">Course Name</label>
                <input v-model="formData.courseName" id="courseName" type="text" required />
              </div>
              <div>
                <label for="year">Year</label>
                <select v-model="formData.year" id="year" required>
                  <option>FY</option>
                  <option>SY</option>
                  <option>TY</option>
                </select>
              </div>
              <div>
                <label for="ethAddress">Ethereum Address</label>
                <input v-model="formData.ethAddress" id="ethAddress" type="text" required placeholder="0x..." />
              </div>
            </div>

            <div>
              <button type="submit" :disabled="isLoading">
                <span v-if="!isLoading">Register Student</span>
                <span v-else>Registering...</span>
              </button>
            </div>
          </form>

          <div v-if="successMessage">{{ successMessage }}</div>
          <div v-if="errorMessage">{{ errorMessage }}</div>
        </div>
      </div>
    </SignedIn>
  </div>
</template>

<script setup>
import { ref } from 'vue';
// Note: We only need SignIn, SignedIn, and SignedOut for this page.
import { SignIn, SignedIn, SignedOut } from '@clerk/vue';

const formData = ref({
  fullName: '',
  studentId: '',
  courseName: 'Computer Science',
  year: 'FY',
  ethAddress: '',
});

const isLoading = ref(false);
const successMessage = ref('');
const errorMessage = ref('');

async function handleRegister() {
  isLoading.value = true;
  successMessage.value = '';
  errorMessage.value = '';

  try {
    const response = await fetch('http://localhost:3000/api/register-student', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData.value),
    });

    const data = await response.json();

    if (response.ok) {
      successMessage.value = `Student "${data.student.full_name}" registered successfully!`;
      formData.value = { fullName: '', studentId: '', courseName: 'Computer Science', year: 'FY', ethAddress: '' };
    } else {
      throw new Error(data.error || 'Registration failed.');
    }
  } catch (err) {
    errorMessage.value = err.message;
    console.error('Registration error:', err);
  } finally {
    isLoading.value = false;
  }
}
</script>
